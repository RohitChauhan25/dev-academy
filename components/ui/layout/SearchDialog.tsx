'use client';

import * as React from 'react';
import { Search } from 'lucide-react';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from '../button';
import { Drawer, DrawerContent } from '../drawer';

export default function SearchDialog({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      {mobile ? (
        <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
          <kbd className="ml-6 rounded border bg-muted px-1.5 text-xs">Ctrl K</kbd>
        </button>
      )}

      {mobile ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="h-[80vh]">
            <Command>
              <CommandInput placeholder="Search tutorials..." />

              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Tutorials">
                  <CommandItem>HTML</CommandItem>
                  <CommandItem>CSS</CommandItem>
                  <CommandItem>JavaScript</CommandItem>
                  <CommandItem>TypeScript</CommandItem>
                  <CommandItem>React</CommandItem>
                  <CommandItem>Next.js</CommandItem>
                  <CommandItem>Node.js</CommandItem>
                </CommandGroup>

                <CommandGroup heading="Practice">
                  <CommandItem>MCQs</CommandItem>
                  <CommandItem>Output Questions</CommandItem>
                  <CommandItem>Coding Challenges</CommandItem>
                </CommandGroup>

                <CommandGroup heading="Interview">
                  <CommandItem>React Interview Questions</CommandItem>
                  <CommandItem>JavaScript Interview Questions</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </DrawerContent>
        </Drawer>
      ) : (
        <CommandDialog open={open} onOpenChange={setOpen} className="max-w-3xl">
          <Command>
            <CommandInput placeholder="Search tutorials..." />

            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Tutorials">
                <CommandItem>HTML</CommandItem>
                <CommandItem>CSS</CommandItem>
                <CommandItem>JavaScript</CommandItem>
                <CommandItem>TypeScript</CommandItem>
                <CommandItem>React</CommandItem>
                <CommandItem>Next.js</CommandItem>
                <CommandItem>Node.js</CommandItem>
              </CommandGroup>

              <CommandGroup heading="Practice">
                <CommandItem>MCQs</CommandItem>
                <CommandItem>Output Questions</CommandItem>
                <CommandItem>Coding Challenges</CommandItem>
              </CommandGroup>

              <CommandGroup heading="Interview">
                <CommandItem>React Interview Questions</CommandItem>
                <CommandItem>JavaScript Interview Questions</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      )}
    </>
  );
}
