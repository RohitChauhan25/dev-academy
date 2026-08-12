import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const CHANNELS = [
  {
    title: "Email",
    value: "devacademyofficial@gmail.com",
    href: "mailto:devacademyofficial@gmail.com",
    icon: Mail,
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/company/devacademy",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    title: "X (Twitter)",
    value: "@devacademy",
    href: "https://twitter.com",
    icon: FaXTwitter,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-3">
      {CHANNELS.map((channel) => {
        const Icon = channel.icon;
        return (
          <Link
            key={channel.title}
            href={channel.href}
            target="_blank"
            className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition hover:border-primary"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold">{channel.title}</p>
              <p className="truncate text-sm text-muted-foreground">
                {channel.value}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
