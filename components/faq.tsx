import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions: { question: string; answer: string }[] = [
  {
    question: "Is it free?",
    answer: "Yes.",
  },
  {
    question: "Who is eligible?",
    answer: "Anyone K-12",
  },
  {
    question: "I’m new to coding, can I join?",
    answer: "Sure. HackJersey is for hackers of all skill levels. We’ll learn more together at workshops!",
  },
  {
    question: "My parents are worried, what should I do?",
    answer: "HackJersey will have 24/7 supervision by background-checked adults, with venue access limited to participants.",
  },
];

export default function Faq() {
  return (
    <>
      <div className="w-4/5 flex flex-col justify-center items-center mt-24">
        <h1 className="text-6xl font-bold mb-24">FAQ</h1>
        <Accordion type="single" collapsible className="w-3/5">
          {questions.map((q, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{q.question}</AccordionTrigger>
              <AccordionContent>{q.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}