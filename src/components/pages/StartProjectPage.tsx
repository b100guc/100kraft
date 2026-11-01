import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { contact, type Language } from "@/data/translations";
import { trackEvent } from "@/lib/analytics";
import type { ContactInput } from "@/lib/contact";
import { ButtonLink } from "@/components/site/Button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/Sections";

const copy = {
  tr: {
    title: "Proje başlat",
    lead: "Kısaca anlatın, iki iş günü içinde dönelim.",
    name: "Ad soyad",
    email: "E-posta",
    phone: "Telefon (isteğe bağlı)",
    need: "Neye ihtiyacınız var?",
    message: "Projeyi anlatın",
    messageHint: "Ne yapmak istiyorsunuz, kaç adet, ne zamana?",
    submit: "Gönder",
    sending: "Gönderiliyor…",
    done: "Teşekkürler, mesajınız ulaştı. İki iş günü içinde dönüyoruz.",
    note: "Dosya göndermek isterseniz (eskiz, fotoğraf, CAD) cevabımıza ekleyebilir ya da doğrudan e-postayla yollayabilirsiniz.",
    or: "ya da",
    whatsapp: "WhatsApp'tan yazın",
    required: "Lütfen adınızı, e-postanızı ve kısa bir açıklama yazın.",
    sent: "E-posta uygulamanız açıldı. Açılmadıysa doğrudan yazın:",
    subject: "Proje talebi",
    labels: { name: "Ad", email: "E-posta", phone: "Telefon", need: "İhtiyaç" },
  },
  en: {
    title: "Start a project",
    lead: "Tell us briefly; we reply within two working days.",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    need: "What do you need?",
    message: "About the project",
    messageHint: "What are you making, how many, by when?",
    submit: "Send",
    sending: "Sending…",
    done: "Thanks, your message is in. We reply within two working days.",
    note: "Got files (sketches, photos, CAD)? Attach them to your reply or email them directly.",
    or: "or",
    whatsapp: "Message on WhatsApp",
    required: "Please add your name, email and a short description.",
    sent: "Your email app should have opened. If not, write to us directly:",
    subject: "Project enquiry",
    labels: { name: "Name", email: "Email", phone: "Phone", need: "Need" },
  },
};

const field =
  "mt-2 block w-full border-0 border-b border-input bg-transparent px-0 py-3 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground";

export function StartProjectPage({ lang }: { lang: Language }) {
  const c = copy[lang];
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "mailto">("idle");

  const toggle = (slug: string) =>
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(c.required);
      return;
    }
    setError(null);

    const needs = services.filter((s) => selected.includes(s.slug)).map((s) => s.title[lang]);
    const details = [
      `${c.labels.name}: ${form.name}`,
      `${c.labels.email}: ${form.email}`,
      form.phone ? `${c.labels.phone}: ${form.phone}` : null,
      needs.length > 0 ? `${c.labels.need}: ${needs.join(", ")}` : null,
    ].filter(Boolean);
    const body = `${details.join("\n")}\n\n${form.message}`;

    trackEvent({ name: "project_form_submit", service: needs.join(", "), hasFiles: false });
    setStatus("sending");

    try {
      const payload: ContactInput = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        needs,
        message: form.message,
        lang,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("done");
        return;
      }
    } catch {
      // fall through to mailto
    }

    // No mail service configured (or it failed): hand the message to the visitor's mail app.
    const subject = `${c.subject} — ${form.name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("mailto");
  };

  return (
    <SiteLayout lang={lang}>
      <PageHeader title={c.title} lead={c.lead} />

      <section className="wrap grid gap-14 pb-20 md:pb-28 lg:grid-cols-12">
        <form onSubmit={onSubmit} noValidate className="lg:col-span-7">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="hidden"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />

          <div className="grid gap-8 sm:grid-cols-2">
            <label className="block text-[0.9375rem] text-muted-foreground">
              {c.name}
              <input
                required
                autoComplete="name"
                className={field + " text-foreground"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block text-[0.9375rem] text-muted-foreground">
              {c.email}
              <input
                required
                type="email"
                autoComplete="email"
                className={field + " text-foreground"}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label className="block text-[0.9375rem] text-muted-foreground sm:col-span-2">
              {c.phone}
              <input
                type="tel"
                autoComplete="tel"
                className={field + " text-foreground"}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
          </div>

          <fieldset className="mt-10">
            <legend className="text-[0.9375rem] text-muted-foreground">{c.need}</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((s) => {
                const on = selected.includes(s.slug);
                return (
                  <button
                    key={s.slug}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s.slug)}
                    className={`h-10 border px-4 text-[0.9375rem] transition-colors ${
                      on
                        ? "border-foreground bg-foreground text-background"
                        : "border-input hover:border-foreground"
                    }`}
                  >
                    {s.title[lang]}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="mt-10 block text-[0.9375rem] text-muted-foreground">
            {c.message}
            <textarea
              required
              rows={5}
              placeholder={c.messageHint}
              className={field + " resize-y text-foreground"}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          {error && (
            <p role="alert" className="mt-6 text-[0.9375rem] text-destructive">
              {error}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending" || status === "done"}
              className="inline-flex h-12 items-center bg-foreground px-6 text-[0.9375rem] font-medium text-background transition-colors hover:bg-accent disabled:opacity-60"
            >
              {status === "sending" ? c.sending : c.submit}
            </button>
            <span className="text-[0.9375rem] text-muted-foreground">{c.or}</span>
            <ButtonLink href={contact.whatsapp} variant="outline">
              {c.whatsapp}
            </ButtonLink>
          </div>

          <p className="mt-6 max-w-lg text-sm text-muted-foreground" aria-live="polite">
            {status === "done" ? (
              <span className="text-base text-foreground">{c.done}</span>
            ) : status === "mailto" ? (
              <>
                {c.sent}{" "}
                <a className="text-foreground underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </>
            ) : (
              c.note
            )}
          </p>
        </form>

        <aside className="lg:col-span-4 lg:col-start-9">
          <dl className="border-t border-border text-[0.9375rem]">
            {[
              [c.labels.email, <a href={`mailto:${contact.email}`}>{contact.email}</a>],
              [
                c.labels.phone,
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>,
              ],
              [
                "Instagram",
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
                  @100kraft
                </a>,
              ],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-4"
              >
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="hover:[&_a]:text-accent">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </SiteLayout>
  );
}
