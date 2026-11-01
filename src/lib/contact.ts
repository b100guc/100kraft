import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  needs: z.array(z.string().max(60)).max(10).default([]),
  message: z.string().trim().min(1).max(5000),
  lang: z.enum(["tr", "en"]),
});

export type ContactInput = z.input<typeof schema>;

const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

/**
 * Sends a project enquiry through Resend. Needs RESEND_API_KEY (and optionally
 * CONTACT_TO / CONTACT_FROM). Without a key it reports "unconfigured" and the form
 * falls back to opening the visitor's mail app.
 */
export async function deliverEnquiry(input: unknown): Promise<{ ok: boolean; reason?: string }> {
  const parsed = schema.safeParse(input);
  if (!parsed.success) return { ok: false, reason: "invalid" };
  const data = parsed.data;

  const key = process.env["RESEND_API_KEY"];
  if (!key) return { ok: false, reason: "unconfigured" };

  const to = process.env["CONTACT_TO"] ?? "burak@100kraft.com";
  const from = process.env["CONTACT_FROM"] ?? "100KRAFT <site@100kraft.com>";
  const rows = [
    ["Ad", data.name],
    ["E-posta", data.email],
    ["Telefon", data.phone || "—"],
    ["İhtiyaç", data.needs.join(", ") || "—"],
    ["Dil", data.lang.toUpperCase()],
  ];
  const html = `<table>${rows
    .map(
      ([k, v]) =>
        `<tr><td style="color:#6b6661;padding-right:16px">${k}</td><td>${escape(v!)}</td></tr>`,
    )
    .join("")}</table><p style="white-space:pre-wrap">${escape(data.message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Proje talebi — ${data.name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return { ok: false, reason: "failed" };
  }
  return { ok: true };
}
