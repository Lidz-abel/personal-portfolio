export type Experience = {
  period: string;
  title: string;
  organization: string;
  type: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    period: "2026",
    title: "Personal Portfolio System",
    organization: "Independent Project",
    type: "Project",
    description:
      "Built a structured portfolio with reusable components, data-driven pages, project detail routing, and motion-based transitions."
  },
  {
    period: "2025 - 2026",
    title: "Efficient AI Systems Study",
    organization: "Self-Directed Research",
    type: "Research",
    description:
      "Focused on efficient inference, reproducible benchmarking, model evaluation, and practical deployment constraints."
  },
  {
    period: "2024 - 2025",
    title: "Full-Stack Engineering Practice",
    organization: "Coursework and Projects",
    type: "Engineering",
    description:
      "Implemented web applications and backend services while strengthening TypeScript, React, API design, and database usage."
  },
  {
    period: "2023 - 2024",
    title: "Algorithm and Systems Foundation",
    organization: "Computer Science Learning",
    type: "Education",
    description:
      "Built foundations in data structures, algorithms, operating systems, databases, and software engineering methods."
  },
  {
    period: "Ongoing",
    title: "Competitions and Technical Writing",
    organization: "Open Practice",
    type: "Competition",
    description:
      "Uses competitions, writeups, and public notes to turn implementation details into reusable knowledge."
  }
];
