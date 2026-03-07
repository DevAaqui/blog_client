import type { Profile, Experience, Skill, Project, Blog } from "./types";

export const sampleProfile: Profile = {
  _id: "sample-profile",
  name: "Aaquib",
  title: "Full-Stack Developer & Freelancer",
  bio: "I'm a passionate full-stack developer with 4+ years of experience building web applications that solve real business problems. I specialize in React, Node.js, and cloud-native architectures.\n\nI've helped startups and businesses ship products used by thousands of users — from SaaS platforms and e-commerce stores to content management systems and real-time dashboards. I care deeply about clean code, great UX, and delivering on time.",
  email: "hello@aaquib.dev",
  location: "Available Worldwide (Remote)",
  website: "https://aaquib.dev",
  socialLinks: {
    github: "https://github.com/DevAaqui",
    linkedin: "https://linkedin.com/in/aaquib",
    twitter: "https://twitter.com/aaquib",
  },
};

export const sampleExperiences: Experience[] = [
  {
    _id: "exp-1",
    company: "TechFlow Inc.",
    position: "Senior Full-Stack Developer",
    startDate: "2023-06-01",
    current: true,
    description:
      "Leading the development of a multi-tenant SaaS platform serving 5,000+ users. Architected the microservices backend, implemented real-time collaboration features, and reduced page load times by 60% through strategic caching and code splitting.",
    location: "Remote — San Francisco, CA",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Redis"],
  },
  {
    _id: "exp-2",
    company: "PixelCraft Studio",
    position: "Full-Stack Developer",
    startDate: "2021-09-01",
    endDate: "2023-05-01",
    description:
      "Built and maintained 12+ client web applications across e-commerce, healthcare, and fintech verticals. Introduced automated testing pipelines that cut production bugs by 45%. Mentored junior developers and led code reviews.",
    location: "Remote — Austin, TX",
    technologies: ["React", "Express.js", "MongoDB", "Docker", "Tailwind CSS"],
  },
  {
    _id: "exp-3",
    company: "DataNest Solutions",
    position: "Frontend Developer",
    startDate: "2020-03-01",
    endDate: "2021-08-01",
    description:
      "Developed interactive data visualization dashboards for enterprise clients. Built a component library used across 4 products, improving design consistency and reducing dev time by 30%.",
    location: "Remote — New York, NY",
    technologies: ["React", "D3.js", "TypeScript", "GraphQL", "Storybook"],
  },
];

export const sampleSkills: Skill[] = [
  { _id: "s-1", name: "React", category: "Frontend", proficiency: 95 },
  { _id: "s-2", name: "Next.js", category: "Frontend", proficiency: 90 },
  { _id: "s-3", name: "TypeScript", category: "Frontend", proficiency: 92 },
  { _id: "s-4", name: "Tailwind CSS", category: "Frontend", proficiency: 90 },
  { _id: "s-5", name: "Vue.js", category: "Frontend", proficiency: 75 },
  { _id: "s-6", name: "Node.js", category: "Backend", proficiency: 90 },
  { _id: "s-7", name: "Express.js", category: "Backend", proficiency: 88 },
  { _id: "s-8", name: "Python", category: "Backend", proficiency: 80 },
  { _id: "s-9", name: "REST APIs", category: "Backend", proficiency: 95 },
  { _id: "s-10", name: "GraphQL", category: "Backend", proficiency: 78 },
  { _id: "s-11", name: "PostgreSQL", category: "Database", proficiency: 85 },
  { _id: "s-12", name: "MongoDB", category: "Database", proficiency: 88 },
  { _id: "s-13", name: "Redis", category: "Database", proficiency: 80 },
  { _id: "s-14", name: "Docker", category: "DevOps", proficiency: 82 },
  { _id: "s-15", name: "AWS", category: "DevOps", proficiency: 80 },
  { _id: "s-16", name: "CI/CD", category: "DevOps", proficiency: 85 },
  { _id: "s-17", name: "Git", category: "Tools", proficiency: 95 },
  { _id: "s-18", name: "Figma", category: "Tools", proficiency: 70 },
];

export const sampleProjects: Project[] = [
  {
    _id: "proj-1",
    title: "ShipFast — SaaS Boilerplate",
    description:
      "A production-ready SaaS starter kit with authentication, Stripe billing, team management, and an admin dashboard. Built to help founders launch faster.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    _id: "proj-2",
    title: "MediTrack — Patient Portal",
    description:
      "A HIPAA-compliant patient management system with appointment scheduling, medical records, and real-time chat between doctors and patients.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    _id: "proj-3",
    title: "CartFlow — E-commerce Platform",
    description:
      "A headless e-commerce storefront with sub-second page loads, dynamic product filtering, and a seamless checkout experience processing $200K+ in monthly transactions.",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    _id: "proj-4",
    title: "InsightBoard — Analytics Dashboard",
    description:
      "A real-time analytics dashboard with interactive charts, custom report builder, and automated email digests for key business metrics.",
    technologies: ["React", "D3.js", "Express.js", "MongoDB", "Redis"],
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const sampleBlogs: Blog[] = [
  {
    _id: "blog-1",
    title: "Building Scalable APIs with Node.js: Lessons from Production",
    slug: "building-scalable-apis-nodejs",
    excerpt:
      "After building APIs that serve millions of requests, here are the patterns and practices that actually matter when it comes to Node.js at scale.",
    content: `<h2>Why API Design Matters</h2>
<p>When you're building APIs that need to handle real traffic, the decisions you make early on compound quickly. I've spent the last few years building and scaling Node.js APIs, and I want to share the patterns that have consistently worked.</p>

<h2>1. Structure Your Project for Growth</h2>
<p>The single biggest mistake I see in Node.js projects is a flat file structure that becomes unmanageable after 20 files. Instead, organize by feature — not by type.</p>

<pre><code>src/
  modules/
    users/
      users.controller.ts
      users.service.ts
      users.routes.ts
      users.validation.ts
    orders/
      orders.controller.ts
      orders.service.ts
      ...</code></pre>

<h2>2. Validate Everything at the Edge</h2>
<p>Use a schema validation library like Zod or Joi at your API boundary. Never trust client input. This single practice prevents entire categories of bugs.</p>

<h2>3. Embrace Async Patterns</h2>
<p>Node.js shines with I/O-bound workloads. Use <code>Promise.all()</code> for independent operations, implement proper connection pooling for databases, and consider message queues for heavy processing.</p>

<blockquote>The best API is one your consumers never have to think about — it just works, consistently and predictably.</blockquote>

<h2>Key Takeaways</h2>
<ul>
<li>Structure projects by feature, not file type</li>
<li>Validate all inputs at the API boundary</li>
<li>Use connection pooling and caching strategically</li>
<li>Monitor everything — latency, error rates, throughput</li>
</ul>`,
    tags: ["Node.js", "API Design", "Backend"],
    published: true,
    publishedAt: "2025-12-15T10:00:00Z",
    createdAt: "2025-12-15T10:00:00Z",
    updatedAt: "2025-12-15T10:00:00Z",
  },
  {
    _id: "blog-2",
    title: "Why I Switched from Create React App to Next.js (And Never Looked Back)",
    slug: "why-i-switched-to-nextjs",
    excerpt:
      "After years of using CRA, switching to Next.js transformed how I build web apps. Here's what convinced me and what I wish I knew earlier.",
    content: `<h2>The Tipping Point</h2>
<p>I was a devoted Create React App user for years. It was simple, it worked, and I knew it inside out. But as my projects grew more complex — needing SEO, faster initial loads, and API routes — I kept fighting the framework instead of building features.</p>

<h2>What Next.js Gets Right</h2>
<p>The App Router in Next.js is a genuine paradigm shift. Server Components let you fetch data where it makes sense, streaming gives users instant feedback, and the file-based routing eliminates an entire category of boilerplate.</p>

<h2>The Performance Difference</h2>
<p>My portfolio site went from a 3.2s First Contentful Paint with CRA to 0.8s with Next.js — without any manual optimization. Server-side rendering and automatic code splitting do the heavy lifting.</p>

<h2>When CRA Still Makes Sense</h2>
<p>If you're building a purely client-side app behind authentication (like an admin dashboard), CRA or Vite are still great choices. Not everything needs SSR.</p>`,
    tags: ["Next.js", "React", "Web Development"],
    published: true,
    publishedAt: "2025-11-28T10:00:00Z",
    createdAt: "2025-11-28T10:00:00Z",
    updatedAt: "2025-11-28T10:00:00Z",
  },
  {
    _id: "blog-3",
    title: "The Freelancer's Tech Stack: Tools That Actually Save Time",
    slug: "freelancer-tech-stack-2025",
    excerpt:
      "After completing 30+ freelance projects, these are the tools and technologies that consistently help me deliver faster and keep clients happy.",
    content: `<h2>Choosing the Right Stack</h2>
<p>As a freelancer, your tech stack is your competitive advantage. You need tools that let you move fast, produce quality output, and adapt to different project requirements without starting from scratch every time.</p>

<h2>My Go-To Stack</h2>
<p>For most client projects, I reach for: <strong>Next.js</strong> (frontend + API), <strong>PostgreSQL</strong> (data), <strong>Tailwind CSS</strong> (styling), and <strong>Vercel</strong> (deployment). This combination covers 80% of freelance web projects.</p>

<h2>Why This Works for Freelancing</h2>
<ul>
<li><strong>Speed</strong>: I can scaffold a full-stack app in under an hour</li>
<li><strong>Quality</strong>: TypeScript catches bugs before clients see them</li>
<li><strong>Deployment</strong>: Vercel's preview deployments let clients review changes instantly</li>
<li><strong>Maintenance</strong>: A consistent stack means easy handoffs and long-term support</li>
</ul>

<blockquote>The best tech stack is the one that lets you focus on solving the client's problem, not fighting your tools.</blockquote>`,
    tags: ["Freelancing", "Tech Stack", "Productivity"],
    published: true,
    publishedAt: "2025-10-10T10:00:00Z",
    createdAt: "2025-10-10T10:00:00Z",
    updatedAt: "2025-10-10T10:00:00Z",
  },
];
