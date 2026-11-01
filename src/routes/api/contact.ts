import { createFileRoute } from "@tanstack/react-router";
import { deliverEnquiry } from "@/lib/contact";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => null);
        const result = await deliverEnquiry(body);
        return Response.json(result, {
          status: result.ok ? 200 : result.reason === "invalid" ? 400 : 503,
        });
      },
    },
  },
});
