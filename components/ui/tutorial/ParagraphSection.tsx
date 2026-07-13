interface ParagraphSectionProps {
  title: string;
  content: string;
}

export default function ParagraphSection({ title, content }: ParagraphSectionProps) {
  return (
    <section className="mt-8 sm:mt-10 lg:mt-14">
      {/* Heading */}
      <div className="border-l-4 border-primary pl-3 sm:pl-4">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{title}</h2>
      </div>

      {/* Content */}
      <div className="mt-4 sm:mt-5 lg:mt-6">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
          {content}
        </p>
      </div>
    </section>
  );
}
