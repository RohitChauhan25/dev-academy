import { User } from 'lucide-react';

interface Props {
  name: string;
  avatar?: string;
}

export default function BlogAuthorCard({ name, avatar }: Props) {
  return (
    <div className="rounded-2xl border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Written by
      </p>

      <div className="mt-3 flex items-center gap-3">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt={name} className="h-11 w-11 rounded-full object-cover" />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/10">
            <User className="h-5 w-5 text-violet-500" />
          </div>
        )}

        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
}
