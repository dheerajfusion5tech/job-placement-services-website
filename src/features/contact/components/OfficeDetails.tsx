import { Mail, MapPin, Phone, Clock } from "lucide-react";

export function OfficeDetails() {
  return (
    <aside className="space-y-6">
      <div className="rounded-(--radius-xl) border border-(--border) bg-(--card) p-6">
        <h2 className="font-semibold">Placement office</h2>
        <ul className="mt-4 space-y-3 text-sm text-(--muted-foreground)">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-(--primary)" />
            <span>
              12th Floor, Horizon Towers
              <br />
              Koramangala, Bengaluru 560034
            </span>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 size-4 shrink-0 text-(--primary)" />
            <a href="mailto:hello@jobplace.example" className="hover:text-(--foreground)">
              hello@jobplace.example
            </a>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-(--primary)" />
            <a href="tel:+918012345678" className="hover:text-(--foreground)">
              +91 80 1234 5678
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-4 shrink-0 text-(--primary)" />
            <span>Mon–Fri, 9:30 – 18:30 IST</span>
          </li>
        </ul>
      </div>

      <div className="overflow-hidden rounded-(--radius-xl) border border-(--border)">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
          alt="Modern office building exterior"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <p className="bg-(--surface) px-4 py-2 text-xs text-(--muted-foreground)">
          Bengaluru placement office — illustrative location image
        </p>
      </div>
    </aside>
  );
}
