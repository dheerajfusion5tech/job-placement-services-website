import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

type Intent = "seeker" | "employer";

type FormState = {
  name: string;
  email: string;
  phone: string;
  intent: Intent;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  intent: "seeker",
  message: "",
};

function validate(data: FormState): Errors {
  const e: Errors = {};
  if (!data.name.trim()) e.name = "Name is required";
  if (!data.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
  if (!data.message.trim()) e.message = "Please include a short message";
  else if (data.message.trim().length < 10) e.message = "Message should be at least 10 characters";
  return e;
}

export function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Simulated frontend-only submission — no backend
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-(--radius-xl) border border-(--border) bg-(--card) p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-(--success)" aria-hidden />
        <h2 className="mt-4 text-xl font-semibold">Message received</h2>
        <p className="mt-2 text-sm text-(--muted-foreground)">
          This is a frontend demonstration. No inquiry was actually sent. In a production
          system this would be delivered to our placement team.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setData(initial);
            setStatus("idle");
            setErrors({});
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-(--radius-xl) border border-(--border) bg-(--card) p-6 sm:p-8"
    >
      <div className="flex gap-2 rounded-(--radius-md) border border-(--border) p-1">
        {(["seeker", "employer"] as Intent[]).map((intent) => (
          <button
            key={intent}
            type="button"
            onClick={() => setData((d) => ({ ...d, intent }))}
            className={`flex-1 rounded-(--radius-sm) py-2 text-sm font-medium transition-colors ${
              data.intent === intent
                ? "bg-(--primary) text-(--primary-foreground)"
                : "text-(--muted-foreground) hover:text-(--foreground)"
            }`}
          >
            {intent === "seeker" ? "Job seeker" : "Employer"}
          </button>
        ))}
      </div>

      <Field
        label="Name"
        id="name"
        error={errors.name}
        value={data.name}
        onChange={(v) => setData((d) => ({ ...d, name: v }))}
        required
      />
      <Field
        label="Email"
        id="email"
        type="email"
        error={errors.email}
        value={data.email}
        onChange={(v) => setData((d) => ({ ...d, email: v }))}
        required
      />
      <Field
        label="Phone (optional)"
        id="phone"
        type="tel"
        value={data.phone}
        onChange={(v) => setData((d) => ({ ...d, phone: v }))}
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message <span className="text-(--destructive)">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={data.message}
          onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
          className="w-full rounded-(--radius-md) border border-(--input-border) bg-(--input) px-3 py-2 text-sm outline-none focus:border-(--ring) focus:ring-2 focus:ring-(--ring)/30"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-(--destructive)">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-(--destructive)" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs text-(--muted-foreground)">
        Frontend-only form. Submission is simulated and is not delivered to a server.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-(--destructive)">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-(--radius-md) border border-(--input-border) bg-(--input) px-3 text-sm outline-none focus:border-(--ring) focus:ring-2 focus:ring-(--ring)/30"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-(--destructive)">
          {error}
        </p>
      )}
    </div>
  );
}
