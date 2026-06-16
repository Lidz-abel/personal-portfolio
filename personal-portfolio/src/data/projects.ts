export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  detail: {
    background: string;
    goals: string;
    solution: string;
    implementation: string;
    results: string;
    future: string;
  };
};

export const projects: Project[] = [
  {
    slug: "research-portfolio",
    title: "Research Portfolio Platform",
    summary:
      "A responsive personal portfolio for presenting academic background, projects, notes, and research progress.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Reusable data-driven page structure for easy maintenance.",
      "Animated navigation and page transitions with Framer Motion.",
      "Responsive layout across desktop, tablet, and mobile screens."
    ],
    githubUrl: "https://github.com/Lidz-abel/personal-portfolio",
    detail: {
      background:
        "A personal academic website needs to communicate both engineering ability and research direction without becoming difficult to maintain.",
      goals:
        "Create a clean resume and project presentation system with reusable components, structured data files, smooth transitions, and clear responsive behavior.",
      solution:
        "Use Next.js App Router for routing, TypeScript for data safety, Tailwind CSS for a consistent visual system, and Framer Motion for subtle interaction feedback.",
      implementation:
        "The site separates content data from UI components. Project pages are generated from slug-based data, while shared cards, tags, timeline, hero, and layout components keep the interface consistent.",
      results:
        "The first version covers homepage, about, projects, detail pages, research, skills, experience, notes, and contact with one maintainable structure.",
      future:
        "Add MDX article pages, real resume assets, analytics, accessibility audits, and a content editing workflow."
    }
  },
  {
    slug: "efficient-ml-inference-lab",
    title: "Efficient ML Inference Lab",
    summary:
      "A planned experimental workspace for benchmarking inference latency, memory use, and model quality tradeoffs.",
    stack: ["Python", "PyTorch", "ONNX", "CUDA", "Benchmarking"],
    highlights: [
      "Experiment templates for repeatable latency and throughput measurements.",
      "Structured result reports for comparing optimization strategies.",
      "Focus on practical deployment constraints and reproducible evaluation."
    ],
    githubUrl: "https://github.com/Lidz-abel",
    detail: {
      background:
        "Modern AI systems often require a careful balance between quality, latency, memory, and cost before they can be deployed reliably.",
      goals:
        "Build a reproducible benchmark lab for measuring inference behavior under different model sizes, quantization methods, and serving settings.",
      solution:
        "Design scripts for controlled warmup, repeated measurement, hardware metadata capture, and report generation.",
      implementation:
        "The core implementation will use PyTorch and ONNX export pipelines, with standardized configuration files for model, batch size, precision, and runtime settings.",
      results:
        "The current plan defines the evaluation protocol and expected report structure. Initial experiments will focus on small transformer and vision models.",
      future:
        "Extend the lab with kernel-level profiling, quantization-aware comparisons, and deployment examples."
    }
  },
  {
    slug: "paper-reading-system",
    title: "Paper Reading System",
    summary:
      "A structured note workflow for summarizing papers, extracting methods, and tracking reproduction progress.",
    stack: ["Markdown", "Zotero", "Python", "Information Retrieval"],
    highlights: [
      "Consistent templates for motivation, method, experiment, and limitations.",
      "Links reading notes to reproduction tasks and code checkpoints.",
      "Designed to support long-term research direction planning."
    ],
    githubUrl: "https://github.com/Lidz-abel",
    detail: {
      background:
        "Paper notes become more valuable when they connect claims, implementation details, experiments, and follow-up tasks in one system.",
      goals:
        "Create a workflow that turns reading into reusable research assets, including summaries, method diagrams, reproduction plans, and open questions.",
      solution:
        "Use structured Markdown templates with tags, paper metadata, and links to experiment repositories.",
      implementation:
        "The system stores notes by topic and connects them to a reproduction backlog. Each note captures the problem, method, evidence, assumptions, and possible extensions.",
      results:
        "The system provides a repeatable process for moving from reading to implementation and evaluation.",
      future:
        "Add search, citation export, automatic metadata import, and public note publishing through MDX."
    }
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
