import { ContactForm } from "../components/ContactForm";
import { OfficeDetails } from "../components/OfficeDetails";

export function ContactPage() {
  return (
    <div>
      <section className="border-b border-(--border) bg-(--surface)">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h1>
          <p className="mt-2 max-w-xl text-(--muted-foreground)">
            Tell us whether you are looking for a role or hiring. We typically respond
            within one business day.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:py-16">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <OfficeDetails />
        </div>
      </div>
    </div>
  );
}
