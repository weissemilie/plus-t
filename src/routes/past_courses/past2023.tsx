import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/past_courses/past2023')({
  head: () => ({
    meta: [
      { title: "PLUS T 2023 | Plus T" },
      {
        name: "description",
        content: "Se tilbage på PLUS T 2023 - et af de tidligere seniorspejderkurser i Det Danske Spejderkorps.",
      },
    ],
  }),
  component: () => <h1 className="text-2xl font-bold">Tidligere kursus: 2023</h1>,
})