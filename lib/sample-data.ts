import type { Profile, Experience, Skill, Project, Blog } from "./types";

export const sampleProfile: Profile = {
  _id: "sample-profile",
  name: "Aaquib",
  title: "Full-Stack Developer & Freelancer",
  bio: "I'm a passionate full-stack developer with 4+ years of experience building web applications that solve real business problems. I specialize in React, Node.js, and cloud-native architectures.\n\nI've helped startups and businesses ship products used by thousands of users — from SaaS platforms and e-commerce stores to content management systems and real-time dashboards. I care deeply about clean code, great UX, and delivering on time.",
  aboutMe: "I am a seasoned MERN Stack Developer with 4+ years of professional experience building enterprise-grade web applications. I have worked across solar energy platforms, manufacturing traceability systems, and IoT data pipelines. My expertise spans React, Next.js, React Native, Node.js, Express, MySQL, and MongoDB. I thrive on architecting scalable systems — from custom dashboard builders serving 2000+ B2B clients to real-time data forwarding microservices handling millions of records. Currently open to freelance projects — let us build something great together.",
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
    id: 1,
    userId: 1,
    title: "Health Monitoring System",
    description:
      "A real-time health monitoring platform with guest statistics, automated alerts, and data seeding — built with the MERN stack.",
    longDescription:
      "A comprehensive real-time health monitoring platform featuring:\n\n• Centralized auto-refresh system using Redux for page-specific refresh callbacks with pause/resume controls.\n• Real-time guest statistics computing total guests, healthy guests, needs-attention cases, and average health scores with threshold-based categorization.\n• Automated data seeding system that progressively creates users, assigns tracking devices, monitors metrics, and simulates activity sessions.\n• Centralized alerts and notifications system with severity levels, 3 status states, team assignment tracking, multi-recipient support, and read/unread tracking.\n• Color-coded visual health indicators for instant decision-making and prioritization of at-risk guests.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Chart.js"],
    featured: true,
    order: 1,
    createdAt: "2026-03-07T20:49:29.000Z",
    updatedAt: "2026-03-07T20:49:29.000Z",
  },
  {
    id: 2,
    userId: 1,
    title: "Solar Asset Management Platform",
    description:
      "Enterprise solar energy management platform with custom dashboards, i18n support, and real-time monitoring serving 2000+ B2B clients.",
    longDescription:
      "An enterprise-grade solar asset management platform built at Quadrical AI:\n\n• Custom Dashboard builder using schema-driven, widget-based architecture adopted by 2000+ B2B clients.\n• Platform-wide i18n translation system with locale-driven routing and dynamic dictionary loading.\n• Centralized auto-refresh system for real-time data accuracy across all platform pages.\n• Optimized Next.js backend with restructured API routes for significantly faster response times.",
    techStack: ["Next.js", "React.js", "Redux", "Node.js", "REST APIs"],
    featured: true,
    order: 2,
    createdAt: "2026-03-07T20:50:03.000Z",
    updatedAt: "2026-03-07T20:50:03.000Z",
  },
  {
    id: 3,
    userId: 1,
    title: "Manufacturing Traceability System",
    description:
      "End-to-end traceability system for manufacturing with raw material verification, workflow enforcement, and 40+ automated validations.",
    longDescription:
      "A full-stack traceability system built at Techpearl for manufacturing operations:\n\n• Dynamic, schema-driven configuration for products, processes, and parameters — eliminating rigid system dependencies.\n• Machine-line raw material verification with sequential workflow enforcement and parallel processing logic.\n• 40+ automated error-code validations with employee authentication for highly accurate production tracking.\n• Comprehensive analytics with drill-down dashboards covering raw material flow, process checkpoints, and machine error codes.\n• Designed both high-level and low-level system architecture end-to-end.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "ECharts"],
    featured: true,
    order: 3,
    createdAt: "2026-03-07T20:51:18.000Z",
    updatedAt: "2026-03-07T20:51:18.000Z",
  },
  {
    id: 4,
    userId: 1,
    title: "Store And Forward Microservice",
    description:
      "High-reliability data forwarding microservice handling millions of records with queued batch processing and zero data leakage.",
    longDescription:
      "A backend microservice built at Myweblink Technologies for IoT data pipelines:\n\n• Data-processing algorithm that validates, sequences, and stores incoming packets with zero data loss.\n• High-reliability forwarding engine handling millions of records at configured intervals.\n• Queued batch processing with retry logic and integrity checks ensuring consistent delivery.\n• Zero data leakage architecture designed for mission-critical IoT deployments.",
    techStack: ["Node.js", "Express.js", "MySQL"],
    featured: false,
    order: 4,
    createdAt: "2026-03-07T20:51:36.000Z",
    updatedAt: "2026-03-07T20:51:36.000Z",
  },
];

export const sampleBlogs: Blog[] = [
  // ── Case Studies ──
  {
    id: 1,
    userId: 1,
    title: "How We Built a Multi-Tenant SaaS Platform Serving 5,000+ Users",
    slug: "multi-tenant-saas-platform-case-study",
    excerpt:
      "A deep dive into architecting a multi-tenant SaaS product — from database isolation strategies to tenant-aware middleware and billing integration.",
    category: "case-study",
    content: `<h2>The Challenge</h2>
<p>Our client needed a platform where each customer (tenant) gets their own isolated workspace — with shared infrastructure underneath to keep costs manageable. The target was 5,000 active users within 6 months of launch.</p>

<h2>Architecture Decisions</h2>
<p>We chose a <strong>shared database, separate schema</strong> approach. Each tenant gets their own set of tables within PostgreSQL, giving us data isolation without the operational overhead of separate database instances.</p>

<pre><code>// Tenant-aware middleware
async function tenantMiddleware(req, res, next) {
  const tenantId = req.headers['x-tenant-id'];
  req.db = await getTenantConnection(tenantId);
  next();
}</code></pre>

<h2>Key Results</h2>
<ul>
<li>Onboarded 5,200 users in the first 4 months</li>
<li>99.97% uptime over 12 months</li>
<li>Average API response time under 120ms</li>
<li>Infrastructure cost 60% lower than per-tenant deployment</li>
</ul>

<blockquote>Multi-tenancy isn't just a database decision — it touches auth, billing, caching, and even your error monitoring strategy.</blockquote>`,
    tags: ["Case Study", "SaaS", "Architecture"],
    status: "published",
    publishedAt: "2026-02-20T10:00:00Z",
    createdAt: "2026-02-20T10:00:00Z",
    updatedAt: "2026-02-20T10:00:00Z",
  },
  {
    id: 2,
    userId: 1,
    title: "Rebuilding an E-Commerce Checkout: From 12s to 1.8s Load Time",
    slug: "ecommerce-checkout-rebuild-case-study",
    excerpt:
      "A client's checkout page was losing 40% of users to abandonment. Here's how we rebuilt it from scratch and recovered $180K in monthly revenue.",
    category: "case-study",
    content: `<h2>The Problem</h2>
<p>The existing checkout was a monolithic React page that loaded everything upfront — payment SDKs, address validation, shipping calculators — all before the user could even see the form. Analytics showed a 40% drop-off rate.</p>

<h2>Our Approach</h2>
<p>We broke the checkout into a <strong>multi-step wizard</strong> with lazy-loaded stages. Payment SDK only loads when the user reaches the payment step. Address validation runs server-side via an API route.</p>

<h2>Technical Highlights</h2>
<ul>
<li>React Server Components for the initial checkout shell (zero client JS)</li>
<li>Streaming SSR so users see the first step instantly</li>
<li>Edge-cached shipping rate calculations via Vercel Edge Functions</li>
<li>Optimistic UI updates for cart modifications</li>
</ul>

<h2>Results</h2>
<p>Page load dropped from <strong>12 seconds to 1.8 seconds</strong>. Cart abandonment fell by 28%, translating to roughly $180K in recovered monthly revenue for the client.</p>`,
    tags: ["Case Study", "E-Commerce", "Performance"],
    status: "published",
    publishedAt: "2026-01-15T10:00:00Z",
    createdAt: "2026-01-15T10:00:00Z",
    updatedAt: "2026-01-15T10:00:00Z",
  },
  {
    id: 3,
    userId: 1,
    title: "Building a Real-Time Health Monitoring Dashboard for 2,000 Guests",
    slug: "health-monitoring-dashboard-case-study",
    excerpt:
      "How we designed a real-time monitoring system with auto-refresh, severity-based alerts, and color-coded health scores for a hospitality platform.",
    category: "case-study",
    content: `<h2>The Brief</h2>
<p>A hospitality client needed a centralized dashboard to monitor guest health metrics in real-time — tracking vitals, flagging at-risk guests, and alerting staff instantly when thresholds were breached.</p>

<h2>System Design</h2>
<p>We built a <strong>centralized auto-refresh system using Redux</strong> with page-specific refresh callbacks and pause/resume controls. Health scores are computed in real-time with threshold-based categorization.</p>

<h2>Alert System</h2>
<p>The notification engine supports multiple severity levels, 3 status states, team assignment tracking, and multi-recipient delivery. Staff see color-coded indicators for instant prioritization.</p>

<h2>Outcome</h2>
<ul>
<li>Monitoring 2,000+ guests simultaneously</li>
<li>Alert response time reduced from 15 minutes to under 45 seconds</li>
<li>Zero missed critical alerts since deployment</li>
</ul>`,
    tags: ["Case Study", "Real-Time", "Healthcare"],
    status: "published",
    publishedAt: "2025-12-05T10:00:00Z",
    createdAt: "2025-12-05T10:00:00Z",
    updatedAt: "2025-12-05T10:00:00Z",
  },

  // ── Scaling & Performance ──
  {
    id: 4,
    userId: 1,
    title: "Scaling Node.js APIs to Handle 10M Requests per Day",
    slug: "scaling-nodejs-apis-10m-requests",
    excerpt:
      "The patterns, caching strategies, and infrastructure decisions that took our API from struggling at 100K requests to comfortably handling 10M daily.",
    category: "scaling-and-performance",
    content: `<h2>Where We Started</h2>
<p>The API was a single Node.js process on a 2-core server. At 100K daily requests, response times were creeping past 2 seconds and the database was the bottleneck.</p>

<h2>Layer 1: Database Optimization</h2>
<p>We added composite indexes on our most-queried fields, introduced connection pooling with <code>pgBouncer</code>, and moved read-heavy queries to a read replica.</p>

<h2>Layer 2: Caching Strategy</h2>
<p>A three-tier caching approach:</p>
<ul>
<li><strong>Edge cache</strong> (CDN) for static API responses — 60-second TTL</li>
<li><strong>Redis</strong> for session data and computed aggregations — 5-minute TTL</li>
<li><strong>In-memory LRU</strong> for hot configuration data — 30-second TTL</li>
</ul>

<h2>Layer 3: Horizontal Scaling</h2>
<p>We containerized the app with Docker, deployed behind an ALB on AWS ECS, and set up auto-scaling based on CPU and request count metrics. The app now runs 4–12 containers depending on load.</p>

<h2>Results</h2>
<p>Average response time: <strong>45ms</strong>. P99 latency: <strong>180ms</strong>. Handles 10M+ requests daily with 40% infrastructure headroom.</p>`,
    tags: ["Scaling", "Node.js", "Performance"],
    status: "published",
    publishedAt: "2026-02-10T10:00:00Z",
    createdAt: "2026-02-10T10:00:00Z",
    updatedAt: "2026-02-10T10:00:00Z",
  },
  {
    id: 5,
    userId: 1,
    title: "How I Reduced a Next.js App's Bundle Size by 65%",
    slug: "nextjs-bundle-size-optimization",
    excerpt:
      "A practical walkthrough of the tools and techniques I used to cut a Next.js production bundle from 1.2MB to 420KB — without removing features.",
    category: "scaling-and-performance",
    content: `<h2>The Audit</h2>
<p>Running <code>npx @next/bundle-analyzer</code> revealed the usual suspects: a full lodash import (71KB), moment.js (67KB), and an icon library shipping 3,000 icons when we used 12.</p>

<h2>Quick Wins</h2>
<ul>
<li>Replaced <code>lodash</code> with <code>lodash-es</code> tree-shakeable imports — saved 58KB</li>
<li>Swapped <code>moment.js</code> for <code>dayjs</code> — saved 62KB</li>
<li>Used <code>@iconify/react</code> with on-demand loading instead of the full icon pack — saved 89KB</li>
</ul>

<h2>Deeper Optimizations</h2>
<p>Dynamic imports for below-the-fold components, moving heavy charting libraries to client-only lazy loads, and enabling Next.js <code>optimizePackageImports</code> for HeroUI and Framer Motion.</p>

<h2>Final Numbers</h2>
<p>First Load JS went from <strong>1.2MB to 420KB</strong>. Lighthouse Performance score jumped from 62 to 94. Time to Interactive improved by 2.1 seconds on mobile.</p>`,
    tags: ["Performance", "Next.js", "Optimization"],
    status: "published",
    publishedAt: "2026-01-28T10:00:00Z",
    createdAt: "2026-01-28T10:00:00Z",
    updatedAt: "2026-01-28T10:00:00Z",
  },
  {
    id: 6,
    userId: 1,
    title: "Database Query Optimization: From 8 Seconds to 50ms",
    slug: "database-query-optimization-guide",
    excerpt:
      "A slow dashboard query was crippling our app. Here's the step-by-step process of profiling, indexing, and restructuring it for a 160x speedup.",
    category: "scaling-and-performance",
    content: `<h2>The Symptom</h2>
<p>Users reported the analytics dashboard taking 8+ seconds to load. Server logs confirmed a single MongoDB aggregation pipeline was the culprit — scanning 2.4 million documents on every request.</p>

<h2>Step 1: Profile</h2>
<p>Using <code>explain("executionStats")</code>, we found the pipeline was doing a full collection scan (COLLSCAN) followed by three $lookup stages with no indexes on the foreign keys.</p>

<h2>Step 2: Index Strategically</h2>
<p>We added compound indexes matching our most common query patterns and ensured $lookup foreign fields were indexed. This alone brought the query from 8s to 800ms.</p>

<h2>Step 3: Pre-Aggregate</h2>
<p>For the final 16x improvement, we introduced a materialized view pattern — a background job runs every 5 minutes, computing aggregated stats and storing them in a summary collection. The dashboard now reads from this pre-computed collection.</p>

<h2>Result</h2>
<p>Query time: <strong>8,000ms → 50ms</strong>. Dashboard loads instantly. Background job completes in 3 seconds and runs every 5 minutes.</p>`,
    tags: ["Database", "Performance", "MongoDB"],
    status: "published",
    publishedAt: "2025-12-20T10:00:00Z",
    createdAt: "2025-12-20T10:00:00Z",
    updatedAt: "2025-12-20T10:00:00Z",
  },

  // ── AI Integrations ──
  {
    id: 7,
    userId: 1,
    title: "Adding GPT-Powered Search to a Product Catalog: A Practical Guide",
    slug: "gpt-powered-product-search",
    excerpt:
      "How I integrated OpenAI embeddings and vector search to build a natural-language product search that increased conversion rates by 23%.",
    category: "ai-integration",
    content: `<h2>Why Traditional Search Falls Short</h2>
<p>Keyword-based search works for exact matches, but users don't always know the right terms. A query like "something to keep my coffee hot at my desk" should return travel mugs and heated coasters — but keyword search returns nothing.</p>

<h2>The Architecture</h2>
<p>We generate <strong>OpenAI embeddings</strong> for every product (title + description + tags) and store them in a PostgreSQL table with the <code>pgvector</code> extension. At query time, we embed the user's search query and find the nearest neighbors.</p>

<pre><code>// Generate embedding for search query
const queryEmbedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: userQuery,
});

// Vector similarity search
const results = await db.query(
  'SELECT * FROM products ORDER BY embedding <=> $1 LIMIT 20',
  [queryEmbedding.data[0].embedding]
);</code></pre>

<h2>Hybrid Approach</h2>
<p>We combine vector results with traditional full-text search using a weighted scoring function. Exact keyword matches still rank highest, but semantically similar products fill the gaps.</p>

<h2>Results</h2>
<ul>
<li>Search-to-purchase conversion increased 23%</li>
<li>"No results" pages decreased by 71%</li>
<li>Average search latency: 85ms (including embedding generation)</li>
</ul>`,
    tags: ["AI", "OpenAI", "Search"],
    status: "published",
    publishedAt: "2026-03-01T10:00:00Z",
    createdAt: "2026-03-01T10:00:00Z",
    updatedAt: "2026-03-01T10:00:00Z",
  },
  {
    id: 8,
    userId: 1,
    title: "Building an AI-Powered Content Moderation Pipeline",
    slug: "ai-content-moderation-pipeline",
    excerpt:
      "How we built a multi-stage AI moderation system that processes 50K user submissions daily with 99.2% accuracy and sub-second response times.",
    category: "ai-integration",
    content: `<h2>The Need</h2>
<p>Our client's platform receives 50,000+ user-generated text submissions daily. Manual moderation was costing $12K/month and introducing 4-hour delays. They needed automated moderation that's fast, accurate, and explainable.</p>

<h2>Multi-Stage Pipeline</h2>
<p>We designed a three-stage pipeline:</p>
<ol>
<li><strong>Rule-based pre-filter</strong> — catches obvious violations (blocked words, spam patterns) in under 5ms</li>
<li><strong>OpenAI Moderation API</strong> — classifies content across 7 categories (hate, violence, self-harm, etc.)</li>
<li><strong>Custom GPT-4o-mini classifier</strong> — handles edge cases and context-dependent decisions with structured JSON output</li>
</ol>

<h2>The Escalation Layer</h2>
<p>Content flagged with low confidence (60-80% probability) goes to a human review queue. The reviewer's decision feeds back into our prompt engineering, continuously improving accuracy.</p>

<h2>Impact</h2>
<ul>
<li>99.2% accuracy (up from 87% with rules alone)</li>
<li>Moderation cost reduced from $12K to $800/month</li>
<li>Average processing time: 340ms per submission</li>
<li>False positive rate: 0.3%</li>
</ul>`,
    tags: ["AI", "Moderation", "Pipeline"],
    status: "published",
    publishedAt: "2026-02-05T10:00:00Z",
    createdAt: "2026-02-05T10:00:00Z",
    updatedAt: "2026-02-05T10:00:00Z",
  },
  {
    id: 9,
    userId: 1,
    title: "Integrating AI Chat Assistants into Existing Web Apps",
    slug: "integrating-ai-chat-assistants",
    excerpt:
      "A step-by-step walkthrough of adding a context-aware AI chat assistant to an existing SaaS product using RAG, streaming, and conversation memory.",
    category: "ai-integration",
    content: `<h2>What We're Building</h2>
<p>An AI assistant embedded in a SaaS dashboard that can answer questions about the user's data, explain features, and guide workflows — all within a chat interface. Think of it as a support agent that actually knows your product and the user's account.</p>

<h2>RAG Architecture</h2>
<p>We use <strong>Retrieval-Augmented Generation</strong> to ground the AI in real data. The user's question is embedded, matched against their account data and our docs, and the relevant context is injected into the system prompt before calling GPT-4o.</p>

<h2>Streaming Responses</h2>
<p>Nobody wants to wait 5 seconds staring at a blank chat bubble. We stream responses using Server-Sent Events, rendering tokens as they arrive. The perceived response time drops from seconds to milliseconds.</p>

<h2>Conversation Memory</h2>
<p>Each conversation is stored with a sliding window of the last 10 messages. This gives the AI context without blowing up token costs. For longer conversations, we summarize older messages into a single context block.</p>

<h2>Key Learnings</h2>
<ul>
<li>Prompt engineering is 80% of the work — model selection is secondary</li>
<li>Always show the AI's sources so users can verify answers</li>
<li>Rate limiting per user is essential — AI APIs are expensive at scale</li>
<li>Fallback to human support when confidence is low</li>
</ul>`,
    tags: ["AI", "Chat", "RAG"],
    status: "published",
    publishedAt: "2026-01-10T10:00:00Z",
    createdAt: "2026-01-10T10:00:00Z",
    updatedAt: "2026-01-10T10:00:00Z",
  },
];
