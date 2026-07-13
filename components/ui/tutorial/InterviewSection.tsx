import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface InterviewQuestion {
  question: string;
  answer: string;
}

interface InterviewSectionProps {
  questions: InterviewQuestion[];
}

export default function InterviewSection({ questions }: InterviewSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Interview Questions</h2>

      <Accordion type="single" collapsible className="mt-6 ">
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`question-${index}`}>
            <AccordionTrigger className="text-left py-5 cursor-pointer">
              <span>
                <strong>Q{index + 1}.</strong> {item.question}
              </span>
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground">
              <strong>Answer:</strong> {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
