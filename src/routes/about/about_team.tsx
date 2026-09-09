import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/about/about_team')({
  head: () => ({
    meta: [
      { title: "Om teamet | Plus T" },
      {
        name: "description",
        content: "Mød teamet bag PLUS T, spejderkorpsets seniorkursus i Det Danske Spejderkorps.",
      },
    ],
  }),
  component: () => <h1 className="text-2xl font-bold">Om os</h1>,
})