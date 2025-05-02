export interface AdvisoryProject {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    outcomes: string[]
    clientType?: string
    featured?: boolean
  }
  
  export const advisoryProjects: AdvisoryProject[] = [
    {
      id: "performance-optimization-ecommerce",
      title: "E-commerce Performance Optimization",
      description:
        "Conducted a comprehensive performance audit for a high-traffic e-commerce platform experiencing slow page loads and cart abandonment. Implemented critical rendering path optimizations, asset delivery strategies, and server-side improvements that dramatically improved Core Web Vitals scores.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Performance", "Core Web Vitals", "Optimization", "E-commerce"],
      outcomes: [
        "Reduced Largest Contentful Paint (LCP) from 4.2s to 1.8s",
        "Improved Cumulative Layout Shift (CLS) from 0.25 to 0.05",
        "Decreased cart abandonment rate by 23%",
        "Increased conversion rate by 17%",
      ],
      clientType: "E-commerce Platform",
      featured: true,
    },
    {
      id: "security-audit-fintech",
      title: "FinTech Application Security Audit",
      description:
        "Performed a comprehensive security assessment for a financial technology application handling sensitive user data. Identified critical vulnerabilities in authentication flows, data encryption practices, and API endpoints. Provided detailed remediation strategies and implementation guidance.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Security", "OWASP", "Authentication", "FinTech"],
      outcomes: [
        "Identified and patched 3 critical security vulnerabilities",
        "Implemented OAuth 2.0 with PKCE for secure authentication",
        "Established secure data encryption practices for PII",
        "Created security training materials for the development team",
      ],
      clientType: "Financial Services Startup",
      featured: true,
    },
    {
      id: "architecture-redesign-saas",
      title: "SaaS Architecture Modernization",
      description:
        "Guided a SaaS company through modernizing their monolithic application into a microservices architecture. Provided technical leadership on service boundaries, API design, data consistency patterns, and deployment strategies. Created a phased migration plan to minimize disruption.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Architecture", "Microservices", "API Design", "SaaS"],
      outcomes: [
        "Designed scalable microservice architecture with clear boundaries",
        "Reduced deployment time from days to minutes",
        "Improved system resilience with circuit breakers and fallbacks",
        "Enabled independent scaling of high-demand services",
      ],
      clientType: "B2B SaaS Provider",
      featured: true,
    },
    {
      id: "seo-technical-audit",
      title: "Technical SEO Optimization",
      description:
        "Conducted a technical SEO audit for a content-heavy website experiencing declining organic traffic. Identified critical issues with rendering, indexability, structured data, and site performance. Implemented fixes and established monitoring for ongoing optimization.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["SEO", "Performance", "Structured Data", "Content"],
      outcomes: [
        "Improved mobile page speed score from 45 to 92",
        "Fixed rendering issues affecting content indexing",
        "Implemented proper schema markup for enhanced SERP features",
        "Increased organic traffic by 34% within 3 months",
      ],
      clientType: "Digital Publication",
      featured: true,
    },
    {
      id: "devops-pipeline-optimization",
      title: "CI/CD Pipeline Modernization",
      description:
        "Redesigned the development workflow and CI/CD pipeline for a team struggling with deployment reliability and testing coverage. Implemented infrastructure as code, automated testing strategies, and deployment verification techniques to improve code quality and release confidence.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["DevOps", "CI/CD", "Testing", "Automation"],
      outcomes: [
        "Reduced deployment failures by 78%",
        "Decreased time-to-production from days to hours",
        "Increased test coverage from 42% to 87%",
        "Implemented infrastructure as code for consistent environments",
      ],
      clientType: "Enterprise Software Company",
    },
    {
      id: "code-quality-initiative",
      title: "Code Quality Transformation",
      description:
        "Led a code quality initiative for a rapidly growing startup with significant technical debt. Established coding standards, implemented automated code reviews, refactored critical components, and trained the development team on clean code principles and patterns.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Clean Code", "Refactoring", "Technical Debt", "Mentoring"],
      outcomes: [
        "Reduced bug reports by 45% within two quarters",
        "Decreased onboarding time for new developers by 60%",
        "Established automated code quality gates in CI pipeline",
        "Created comprehensive documentation for core systems",
      ],
      clientType: "Tech Startup",
    },
    {
      id: "accessibility-compliance",
      title: "Web Accessibility Compliance",
      description:
        "Guided a public service organization through achieving WCAG 2.1 AA compliance for their web applications. Conducted accessibility audits, implemented necessary changes, and established development practices to maintain compliance with accessibility standards.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Accessibility", "WCAG", "Compliance", "Inclusive Design"],
      outcomes: [
        "Achieved WCAG 2.1 AA compliance across all web properties",
        "Implemented accessible design system components",
        "Created accessibility testing protocols for development teams",
        "Trained designers and developers on inclusive design principles",
      ],
      clientType: "Public Service Organization",
    },
    {
      id: "rendering-strategy-optimization",
      title: "Next.js Rendering Strategy Optimization",
      description:
        "Advised a content platform on optimal rendering strategies using Next.js. Analyzed content types, user interaction patterns, and performance requirements to implement a hybrid rendering approach combining SSG, ISR, and client-side rendering where appropriate.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Next.js", "SSR", "SSG", "ISR", "Performance"],
      outcomes: [
        "Reduced Time to Interactive by 65% for content pages",
        "Implemented ISR for frequently updated content",
        "Established content-specific rendering strategies",
        "Created developer guidelines for rendering decision-making",
      ],
      clientType: "Digital Content Platform",
    },
    {
      id: "api-design-mentorship",
      title: "API Design Mentorship Program",
      description:
        "Developed and delivered a comprehensive API design mentorship program for a development team transitioning to a API-first approach. Covered RESTful design principles, versioning strategies, documentation standards, and testing methodologies.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["API Design", "REST", "Documentation", "Mentoring"],
      outcomes: [
        "Established consistent API design patterns across teams",
        "Created comprehensive API style guide and governance process",
        "Implemented automated API testing and documentation generation",
        "Reduced API-related bugs by 62% in new features",
      ],
      clientType: "Enterprise Software Company",
    },
    {
      id: "database-optimization",
      title: "Database Performance Optimization",
      description:
        "Conducted a database performance audit for a data-intensive application experiencing scaling issues. Identified inefficient queries, indexing problems, and architectural limitations. Implemented optimizations that significantly improved throughput and reduced costs.",
      image: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
      tags: ["Database", "Performance", "SQL", "Optimization"],
      outcomes: [
        "Reduced average query time by 87%",
        "Optimized database indexes reducing storage by 34%",
        "Implemented efficient caching strategies",
        "Decreased database server costs by 40%",
      ],
      clientType: "Data Analytics Company",
    },
  ]
  