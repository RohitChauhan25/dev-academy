// import { Card, CardContent } from '@/components/ui/card';

// interface Quiz {
//   question: string;
//   options: string[];
//   answer: number;
// }

// interface QuizSectionProps {
//   quiz: Quiz[];
// }

// export default function QuizSection({ quiz }: QuizSectionProps) {
//   return (
//     <section className="mt-16">
//       <h2 className="text-3xl font-bold">Quick Quiz</h2>

//       <div className="mt-6 space-y-6">
//         {quiz.map((item, index) => (
//           <Card key={index}>
//             <CardContent className="p-6">
//               <h3 className="font-semibold">
//                 {index + 1}. {item.question}
//               </h3>

//               <div className="mt-4 space-y-2">
//                 {item.options.map((option) => (
//                   <label
//                     key={option}
//                     className="flex items-center gap-3 rounded-lg border p-3 hover:bg-muted"
//                   >
//                     <input type="radio" name={`quiz-${index}`} />

//                     {option}
//                   </label>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Quiz {
  question: string;
  options: string[];
  answer: number;
}

interface QuizSectionProps {
  quiz: Quiz[];
}

export default function QuizSection({ quiz }: QuizSectionProps) {
  const [answers, setAnswers] = useState<number[]>(Array(quiz.length).fill(-1));

  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;

    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  const score = answers.reduce((total, answer, index) => {
    return answer === quiz[index].answer ? total + 1 : total;
  }, 0);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">Quick Quiz</h2>

      <div className="mt-6 space-y-6">
        {quiz.map((item, questionIndex) => (
          <Card key={questionIndex}>
            <CardContent className="p-6">
              <h3 className="mb-5 font-semibold">
                {questionIndex + 1}. {item.question}
              </h3>

              <div className="space-y-3">
                {item.options.map((option, optionIndex) => {
                  const selected = answers[questionIndex] === optionIndex;
                  const isCorrect = optionIndex === item.answer;

                  let className =
                    'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition';

                  if (!submitted) {
                    className += selected ? ' border-primary bg-primary/10' : ' hover:bg-muted';
                  } else {
                    if (isCorrect) {
                      className += ' border-green-500 bg-green-500/10 text-green-600';
                    } else if (selected) {
                      className += ' border-red-500 bg-red-500/10 text-red-600';
                    }
                  }

                  return (
                    <label key={option} className={className}>
                      <input
                        type="radio"
                        checked={selected}
                        onChange={() => handleSelect(questionIndex, optionIndex)}
                        disabled={submitted}
                      />

                      <span className="flex-1">{option}</span>

                      {submitted && isCorrect && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}

                      {submitted && selected && !isCorrect && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </label>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-lg bg-muted p-4">
                  {answers[questionIndex] === item.answer ? (
                    <p className="font-medium text-green-600">✅ Correct Answer</p>
                  ) : (
                    <>
                      <p className="font-medium text-red-600">❌ Wrong Answer</p>

                      <p className="mt-2 text-sm text-muted-foreground">
                        Correct Answer:{' '}
                        <span className="font-semibold">{item.options[item.answer]}</span>
                      </p>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {!submitted ? (
        <div className="mt-8 text-center">
          <Button size="lg" onClick={() => setSubmitted(true)}>
            Submit Quiz
          </Button>
        </div>
      ) : (
        <Card className="mt-8">
          <CardContent className="flex flex-col items-center gap-3 p-8">
            <h3 className="text-2xl font-bold">
              Your Score: {score} / {quiz.length}
            </h3>

            <p className="text-muted-foreground">
              {score === quiz.length
                ? '🎉 Excellent! You answered every question correctly.'
                : score >= quiz.length / 2
                  ? '👏 Good job! Keep practicing to improve further.'
                  : '📚 Keep learning and try the quiz again.'}
            </p>

            <Button
              variant="outline"
              onClick={() => {
                setAnswers(Array(quiz.length).fill(-1));
                setSubmitted(false);
              }}
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
