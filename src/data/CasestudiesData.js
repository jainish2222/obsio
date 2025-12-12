export const caseData  = {
  "title": "Case Studies",
  "subtitle": "Transforming digital products with innovative IT solutions.",
  "projects": [
    {
      "id": "project1",
      "name": "Enterprise CRM System",
      "description": "Legacy CRM with poor performance and outdated UI.",
      "problemPoints": [
        "Slow data retrieval",
        "Outdated user interface",
        "High support tickets"
      ],
      "analysis": [
        "Backend queries were inefficient.",
        "UI lacked consistency and intuitive navigation."
      ],
      "keyFindings": [
        "Multiple-step workflows caused user friction",
        "Poor mobile responsiveness",
        "Low productivity due to slow features"
      ],
      "solution": [
        { "title": "Modern UI/UX", "desc": "Redesigned dashboard, simplified workflows, consistent design." },
        { "title": "Performance Optimization", "desc": "Optimized database queries, implemented caching & lazy loading." },
        { "title": "Enhanced Productivity", "desc": "Automated repetitive tasks and added analytics dashboards." }
      ],
      "techStack": ["React", "Tailwind", "Node.js", "Express", "PostgreSQL", "Redis", "AWS"],
      "results": [
        { "value": "+65%", "label": "User Productivity" },
        { "value": "-50%", "label": "Support Tickets" },
        { "value": "2.2x", "label": "Feature Adoption" }
      ]
    },
    {
      "id": "project2",
      "name": "AI-powered Chatbot Platform",
      "description": "Chatbot with slow responses and inaccurate NLP.",
      "problemPoints": [
        "Low response accuracy",
        "Delayed replies",
        "Limited language support"
      ],
      "analysis": [
        "NLP model lacked sufficient training data.",
        "Server latency caused slow responses."
      ],
      "keyFindings": [
        "Low user satisfaction",
        "High abandonment during chat sessions",
        "Inaccurate responses for complex queries"
      ],
      "solution": [
        { "title": "NLP Optimization", "desc": "Fine-tuned models for accuracy and speed." },
        { "title": "Multi-Language Support", "desc": "Added support for 5 new languages with context retention." },
        { "title": "Infrastructure Upgrade", "desc": "Deployed scalable cloud servers for faster response." }
      ],
      "techStack": ["Python", "TensorFlow", "PyTorch", "Node.js", "React", "AWS"],
      "results": [
        { "value": "+80%", "label": "Response Accuracy" },
        { "value": "-60%", "label": "Delayed Responses" },
        { "value": "+50%", "label": "User Satisfaction" }
      ]
    },
    {
      "id": "project3",
      "name": "E-commerce Platform Upgrade",
      "description": "Outdated platform with slow load times and high cart abandonment.",
      "problemPoints": [
        "High page load time (6s avg)",
        "Low mobile conversion rate",
        "Inefficient checkout flow"
      ],
      "analysis": [
        "Monolithic backend caused slow API responses.",
        "Checkout UX was confusing for users."
      ],
      "keyFindings": [
        "Abandoned carts were >40%",
        "Users struggled with multi-step checkout",
        "Search functionality was inefficient"
      ],
      "solution": [
        { "title": "Frontend Optimization", "desc": "Redesigned UI with PWA and lazy-loading images." },
        { "title": "Backend Refactor", "desc": "Implemented microservices and optimized APIs." },
        { "title": "Checkout Redesign", "desc": "Simplified checkout to 2 steps with auto-fill features." }
      ],
      "techStack": ["React", "Next.js", "Node.js", "Express", "MongoDB", "Redis", "AWS"],
      "results": [
        { "value": "+50%", "label": "Mobile Conversions" },
        { "value": "-35%", "label": "Cart Abandonment" },
        { "value": "-40%", "label": "Page Load Time" }
      ]
    },
    {
      "id": "project4",
      "name": "Healthcare Management System",
      "description": "Legacy HMS with fragmented data and poor patient tracking.",
      "problemPoints": [
        "Data silos across departments",
        "Manual record-keeping",
        "Poor reporting features"
      ],
      "analysis": [
        "Multiple disconnected databases slowed reporting.",
        "UI was not intuitive for hospital staff."
      ],
      "keyFindings": [
        "Doctors spent excessive time on admin tasks",
        "Patient follow-ups were inconsistent",
        "Reports lacked accuracy and timeliness"
      ],
      "solution": [
        { "title": "Unified Database", "desc": "Integrated patient data across departments." },
        { "title": "Automated Workflows", "desc": "Digitized admin tasks and follow-ups." },
        { "title": "Reporting Dashboard", "desc": "Created real-time analytics for staff." }
      ],
      "techStack": ["React", "Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
      "results": [
        { "value": "+70%", "label": "Operational Efficiency" },
        { "value": "-60%", "label": "Manual Errors" },
        { "value": "+40%", "label": "Patient Satisfaction" }
      ]
    },
    {
      "id": "project5",
      "name": "Fintech Payment Gateway",
      "description": "Slow transaction processing with low security and poor UI.",
      "problemPoints": [
        "Delayed transaction approvals",
        "Frequent transaction failures",
        "Complex user interface"
      ],
      "analysis": [
        "Payment APIs were outdated and slow.",
        "UI lacked clarity and mobile responsiveness."
      ],
      "keyFindings": [
        "High transaction abandonment rate",
        "Low user trust due to failures",
        "Users reported poor app usability"
      ],
      "solution": [
        { "title": "API Upgrade", "desc": "Implemented fast and secure payment APIs." },
        { "title": "UI/UX Overhaul", "desc": "Redesigned interface for simplicity and clarity." },
        { "title": "Enhanced Security", "desc": "Added 2FA, encryption, and fraud detection." }
      ],
      "techStack": ["React Native", "Node.js", "Express", "MongoDB", "AWS", "Stripe"],
      "results": [
        { "value": "+55%", "label": "Successful Transactions" },
        { "value": "-50%", "label": "Transaction Failures" },
        { "value": "+60%", "label": "User Trust" }
      ]
    },
    {
      "id": "project6",
      "name": "IoT Device Monitoring Platform",
      "description": "Devices were offline frequently with delayed alerts and poor analytics.",
      "problemPoints": [
        "Delayed alerts for device failure",
        "Limited analytics for device usage",
        "Complex onboarding for new devices"
      ],
      "analysis": [
        "Event processing pipeline was slow.",
        "UI dashboard lacked clarity for device metrics."
      ],
      "keyFindings": [
        "High downtime due to delayed alerts",
        "Low adoption by field technicians",
        "Difficulty in tracking multiple devices"
      ],
      "solution": [
        { "title": "Real-time Alerts", "desc": "Implemented WebSockets for instant device notifications." },
        { "title": "Analytics Dashboard", "desc": "Created intuitive charts and KPI tracking." },
        { "title": "Simplified Onboarding", "desc": "Automated device registration and setup." }
      ],
      "techStack": ["React", "Node.js", "Express", "PostgreSQL", "Redis", "AWS IoT"],
      "results": [
        { "value": "-70%", "label": "Device Downtime" },
        { "value": "+45%", "label": "Technician Adoption" },
        { "value": "+60%", "label": "Alert Response Speed" }
      ]
    }
  ]
};