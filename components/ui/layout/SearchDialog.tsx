"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  BrainCircuit,
  MessageCircleQuestion,
  Newspaper,
  PenSquare,
  Search,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "../button";
import { Drawer, DrawerContent } from "../drawer";
import type { SearchItem } from "@/lib/search-index";

interface SearchDialogProps {
  mobile?: boolean;
  items: SearchItem[];
}

/**
 * cmdk's default filter does fuzzy subsequence matching (like a file finder),
 * which surfaces unrelated results for longer search terms. This does plain
 * case-insensitive substring matching instead, so results actually contain
 * the typed text.
 */
function substringFilter(value: string, search: string) {
  const term = search.trim().toLowerCase();
  if (!term) return 1;

  const target = value.toLowerCase();
  if (!target.includes(term)) return 0;

  if (target.startsWith(term)) return 1;

  const wordBoundaryMatch = new RegExp(
    `\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
  ).test(target);

  return wordBoundaryMatch ? 0.75 : 0.5;
}

const QUICK_LINKS = [
  { title: "Learn JavaScript", href: "/learn", icon: BookOpen },
  { title: "Practice Questions", href: "/practice", icon: BrainCircuit },
  {
    title: "Interview Questions",
    href: "/interview-questions",
    icon: MessageCircleQuestion,
  },
  { title: "Blog", href: "/blogs", icon: Newspaper },
  { title: "Write a Post", href: "/blogs/write", icon: PenSquare },
];

export default function SearchDialog({
  mobile = false,
  items,
}: SearchDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  const handleOpenChange = (next: boolean) => {
    if (next) setQuery("");
    setOpen(next);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (next) setQuery("");
          return next;
        });
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  const groups = React.useMemo(() => {
    const order = [
      "Topics",
      "Interview Questions",
      "Tutorials",
      "Blog",
      "Pages",
    ];
    const map = new Map<string, SearchItem[]>();

    items.forEach((item) => {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    });

    return Array.from(map.entries()).sort(
      (a, b) => order.indexOf(a[0]) - order.indexOf(b[0]),
    );
  }, [items]);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const results = (
    <Command filter={substringFilter}>
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search tutorials, blog posts, interview questions..."
      />

      <CommandList>
        {query.trim() === "" ? (
          <>
            <div className="flex flex-col items-center gap-3 px-4 pb-6 pt-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FBBF24]/15 via-[#e7c97c]/15 to-[#6366F1]/15">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Search Dev Academy</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Find tutorials, interview questions, and blog posts.
                </p>
              </div>
            </div>

            <CommandGroup heading="Quick Links">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <CommandItem
                    key={link.href}
                    value={link.title}
                    onSelect={() => handleSelect(link.href)}
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {link.title}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </>
        ) : (
          <>
            <CommandEmpty>No results found.</CommandEmpty>

            {groups.map(([group, groupItems]) => (
              <CommandGroup key={group} heading={group}>
                {groupItems.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={
                      // Only match Blog items on their subtitle (a real description) —
                      // for Topics, the subtitle is just the parent tutorial's name,
                      // and matching on it makes every section under a tutorial show
                      // up whenever that tutorial's own title matches the search.
                      item.group === "Blog"
                        ? `${item.title} ${item.subtitle ?? ""}`.trim()
                        : item.title
                    }
                    onSelect={() => handleSelect(item.href)}
                  >
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate">{item.title}</span>
                      {item.subtitle && (
                        <span className="truncate text-xs text-muted-foreground">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </>
        )}
      </CommandList>
    </Command>
  );

  return (
    <>
      {mobile ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleOpenChange(true)}
        >
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <button
          onClick={() => handleOpenChange(true)}
          className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
          <kbd className="ml-6 rounded border bg-muted px-1.5 text-xs">
            Ctrl K
          </kbd>
        </button>
      )}

      {mobile ? (
        <Drawer open={open} onOpenChange={handleOpenChange}>
          <DrawerContent className="h-[80vh]">{results}</DrawerContent>
        </Drawer>
      ) : (
        <CommandDialog
          open={open}
          onOpenChange={handleOpenChange}
          className="max-w-3xl"
        >
          {results}
        </CommandDialog>
      )}
    </>
  );
}
