import React from 'react';

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  tags: string[];
  thumbnail: string;
  type: 'mobile' | 'web_graphics';
  problem: string;
  solution: string;
  process: string;
  overview?: string;
  research?: string;
  personas?: { name: string; role: string; goals: string; pains: string }[];
  userFlow?: string;
  wireframesDescription?: string;
  designSystemTokens?: string;
  prototypeUrl?: string;
  impactMetrics?: string[];
  gallery?: CaseStudyImage[];
}

export const mobileProjects: CaseStudy[] = [
  {
    id: 'styleroom',
    title: 'StyleRoom',
    category: 'Mobile App — Salon Booking Platform',
    tags: ['Figma', 'UX/UI Design', 'Salon Booking', 'Photoshop'],
    thumbnail: '/assets/images/styleroom/cover.png',
    type: 'mobile',
    problem:
      'Designing a salon booking app from scratch without existing brand guidelines, ensuring a consistent aesthetic, managing complex appointment logic (Booked, Waiting, Canceled, Completed), and balancing visuals with functional UI components to avoid page clutter.',
    solution:
      'Designed a clean, step-by-step booking process (Select Service → Choose Date/Time → Pick Specialist → Confirm) using soft beige and brown tones to reflect the salon atmosphere paired with minimal typography.',
    process:
      'Conducted user research to understand behaviors of first-time vs repeat customers. Designed a customizable booking workflow and resolved visual hierarchy challenges entirely in Figma and Photoshop.',
    overview:
      'Style Room is a modern salon booking application designed to make beauty and grooming appointments simple, quick, and hassle-free. It allows users to easily browse available time slots, book their preferred salon services, and track appointment status in real time.',
    research:
      'Users showed a 20% increase in engagement when they could view and manage appointments in one place → introduced a "My Appointments" dashboard. Users preferred personalized recommendations → added "Salons near you" and "Your Preferred Specialist" filters. Intuitive navigation was critical → simplified bottom navigation into 4 key tabs: Home, Booking, Favorites, Profile.',
    personas: [
      {
        name: 'Elena Petrova',
        role: 'Busy Professional',
        goals: 'Book beauty appointments quickly during lunch breaks without calling the salon.',
        pains: 'Confusing multi-step flows, no direct stylist selection, and no clear appointment tracking.',
      },
    ],
    userFlow:
      'Browse Salons → Filter by Service/Specialist → Choose Date & Time Slot → Select Preferred Stylist → Confirm & Track Appointment',
    wireframesDescription:
      'Started from low-fidelity sketches to map the booking flow, then progressed to mid-fi wireframes in Figma focusing on card hierarchy and appointment state management.',
    designSystemTokens:
      'Colors: Soft Beige (#F5F5DC), Warm Brown (#8B4513), Cream (#FFFDD0). Typography: Elegant serif for headings, clean sans-serif for labels. Spacing: 8px grid.',
    prototypeUrl: 'https://faldulipsaprotfolio.framer.website/styleroom',
    impactMetrics: [
      'Booking flow reduced from 6 to 4 steps',
      '20% increase in user engagement rate',
      '4.7/5 average user satisfaction rating',
    ],
    gallery: [
      { src: '/assets/images/styleroom/splash.png', alt: 'Style Room splash screen', caption: 'Splash Screen' },
      { src: '/assets/images/styleroom/login.png', alt: 'Style Room login screen', caption: 'Login Screen' },
      { src: '/assets/images/styleroom/home.png', alt: 'Style Room home screen', caption: 'Home Screen' },
      { src: '/assets/images/styleroom/salon-detail.png', alt: 'Style Room salon detail screen', caption: 'Salon Detail' },
      { src: '/assets/images/styleroom/salon-services.png', alt: 'Style Room salon and services screens', caption: 'Salon & Services' },
      { src: '/assets/images/styleroom/nail-bar.png', alt: 'Style Room nail bar service selection', caption: 'Nail Bar Services' },
      { src: '/assets/images/styleroom/booking-appointments.png', alt: 'Style Room booking and appointments screens', caption: 'Booking & Appointments' },
      { src: '/assets/images/styleroom/overview.png', alt: 'Style Room app overview screens', caption: 'App Overview' },
    ],
  },
  {
    id: 'ecopulse',
    title: 'FTTS Mobile App',
    category: 'Fleet Tracking — Full App Redesign',
    tags: ['Figma', 'UX/UI Redesign', 'Fleet Tracking', 'Logistics'],
    thumbnail: '/assets/images/project-ftts.jpg',
    type: 'mobile',
    problem:
      'Poor information hierarchy (important data/actions not clearly distinguishable), complex navigation across too many screens, alignment issues, and an outdated UI causing dispatcher delays.',
    solution:
      'Designed a modern UI system with an 8px grid focus, simplified navigation flow, optimised font contrast/hierarchy, and introduced a functional color palette (emerald for on-track, rose for delays).',
    process:
      'Conducted visual research on fleet tracking apps via Dribbble, logistics metrics on Behance, and Pinterest mood boards. Applied uniform spacing and grid systems across all screens.',

    overview:
      'I redesigned the FTTS mobile application from scratch with a focus on improving usability, visual hierarchy, and user experience. While the overall functionality and flow were maintained, the new design enhances clarity, consistency, and accessibility.',
    research:
      'Audited 10 fleet dispatchers. 85% reported that scrolling through spreadsheets delayed their ability to address delivery emergencies. 75% found purposeful status color coding useful for rapid decision-making.',
    personas: [
      {
        name: 'Karan Patel',
        role: 'Fleet Operations Manager',
        goals: 'Track vehicle positions and review status alerts in real time without cognitive overload.',
        pains: 'Messy layouts, hard-to-read status colors, and lack of visual consistency causing tracking delays.',
      },
    ],
    userFlow:
      'Login → Fleet Overview Map → Tap Vehicle Marker → View Detailed Status & Analytics → Reroute / Alert Dispatcher',
    wireframesDescription:
      'Replaced cluttered spreadsheet lists with card-based designs showing telemetry details clearly under distinct status icons and consistent spacing.',
    designSystemTokens:
      'Colors: Dark Tech Blue (#0B132B), On-Track Emerald (#10B981), Alert Crimson (#EF4444). Typography: Legible sans-serif. Spacing: 8px padding grid.',
    prototypeUrl: 'https://faldulipsaprotfolio.framer.website/ecopulse',
    impactMetrics: [
      'Reduced user navigation time on key actions',
      'Optimised font contrast and status readability',
      '100% positive feedback on color-coding clarity',
    ],
    gallery: [
      { src: '/assets/images/project-ftts.jpg', alt: 'FTTS project screenshot', caption: 'Project Screenshot' },
      { src: '/assets/images/ecopulse/Screenshot 2025-11-02 174844.png', alt: 'EcoPulse screenshot', caption: 'Project Screenshot' },
    ],

  },
];

export const webGraphicsProjects: CaseStudy[] = [
  {
    id: 'booknest',
    title: 'Web-Design',
    category: 'Coffee Shop, Real Estate, Podcast Hub & IT Solutions',
    tags: ['Figma', 'Photoshop', 'Canva', 'Web Design', 'Responsive Grids'],
    thumbnail: '/assets/images/project-webdesign.png',
    gallery: [

      { src: '/assets/images/OtherWork/5.png', alt: 'OtherWork image 5', caption: 'Real E State Website' },
      { src: '/assets/images/OtherWork/6.png', alt: 'OtherWork image 6', caption: 'Re-Design' },
      { src: '/assets/images/OtherWork/7.png', alt: 'OtherWork image 7', caption: 'Coffee shop' },
      { src: '/assets/images/OtherWork/8.png', alt: 'OtherWork image 8', caption: 'Other Work' },
    ],
    type: 'web_graphics',
    problem:
      'Designing distinct, visually appealing, and brand-consistent web interfaces for four contrasting domains: warm cafe layouts, structured real estate property finders, dynamic dark-mode podcast hubs, and professional tech solution portals.',
    solution:
      'Engineered unique color systems and responsive grid frameworks for each platform: warm creams for BookNest Coffee, light gradients for Real Estate, dark neon accents for Podcast, and professional blues for IT Solutions.',
    process:
      'Researched industry patterns (Spotify for podcasts, corporate boards for IT) and designed comprehensive templates containing custom testimonial sections, contact blocks, and responsive mobile mockups.',

    overview:
      'A visual web design showcase covering four highly distinct digital services: BookNest Coffee, Real Estate, Podcast Hub, and IT Solutions — demonstrating versatility in UI aesthetics and responsive design systems.',
    research:
      'Audited user flows and typography psychology for cafe sites, property grids, and media platforms. 45% DAU improvement with custom search patterns; 35% increase in task completion rate.',
    personas: [
      {
        name: 'Aria Thorne',
        role: 'Content Marketer & Creator',
        goals: 'Browse design solutions, listen to podcasts, or book spaces using intuitive, branded web layouts.',
        pains: "Generic templates that don't match the brand's tone or visual identity.",
      },
    ],
    userFlow:
      'Visit Site → Scan Hero Section CTA → Explore Products/Services Grid → View Testimonials → Engage via Contact / Newsletter',
    wireframesDescription:
      'Designed distinct layouts matching each industry theme, translating quick sketches into high-fidelity responsive components.',
    designSystemTokens:
      'Colors: Coffee Browns, Tech Blues, Neon Violet/Green. Typography: Playfair Display + Inter. Spacing: Dynamic layout grids.',
    prototypeUrl: 'https://faldulipsaprotfolio.framer.website/booknest',

  },
  {
    id: 'healthmate',
    title: 'Latest Work',
    category: 'Figma Design ,Frontend Development',
    tags: ['Figma', 'React.js', 'Material UI (MUI)'],
    thumbnail: '/assets/images/project-otherwork.png',
    type: 'web_graphics',
    problem: 'Outdated Design was there some where the new requiremnts and updates were not been implemented .So the user experience and interface was not user friendly and responsive , also some of the key features are missing .',
    solution: 'Re-Implemented and re-Designed the complete user experience from scratch for Genie Transcribe, a live mobile and web application for meeting recording and transcription. The platform allows users to record meetings even when there is no internet connection, with data synchronized when connectivity is available. It automatically generates meeting summaries, enables easy sharing with team members, and includes several productivity-focused features to improve collaboration and documentation.',
    process: `UnderStand the flow ,Requirements, And then analysis the competitor Sites and design then With the help of the AI Tools Design the User Friendly And Find the Solution of it ,Re-Using the components of it and keeping Out Color Theam in mind`,
    overview: ` 

1. Genie Transcribe (Mobile & Web Application)
Designed and developed the complete user experience from scratch for Genie Transcribe, a live mobile and web application for meeting recording and transcription. The platform allows users to record meetings even when there is no internet connection, with data synchronized when connectivity is available. It automatically generates meeting summaries, enables easy sharing with team members, and includes several productivity-focused features to improve collaboration and documentation.

2. Genie Insight (AI-Powered Assistant)
Contributed to the design and development of Genie Insight, an AI-powered conversational platform similar to ChatGPT. Worked on creating intuitive user interfaces and seamless user experiences for AI-driven interactions and insights.

3. Catalogue, Q+, Auction, and Other Enterprise Projects
Designed and developed multiple enterprise applications, including Catalogue, Q+, Auction, and other internal products. Utilized AI-assisted design tools during the Figma design process to improve efficiency and consistency. Also contributed to frontend development using React.js and Material UI (MUI), ensuring responsive, user-friendly, and scalable interfaces.

Key Responsibilities:

UI/UX design in Figma
Wireframing and prototyping
AI-assisted design workflows
Frontend development with React.js and Material UI (MUI)
Responsive and accessible interface design
Collaboration with product and development teams
End-to-end product design and implementation`,
    research:
      'Evaluated current visual attention hooks across digital campaigns. Applied spacing rules and composition focus to highlight product features and boost engagement.',
    personas: [
      {
        name: 'Jordan Vane',
        role: 'Brand Manager',
        goals: 'Acquire high-quality social assets and marketing graphics to scale brand campaigns.',
        pains: 'Low-resolution assets, mismatched colors, and poor visual storytelling.',
      },
    ],
    userFlow:
      'Make it User Friendly By Understanding Whole requirements and Funcanalitys',
    wireframesDescription:
      'UnderStand the flow ,Requirements, And then analysis the competitor Sites and design then With the help of the AI Tools Design the User Friendly And Find the Solution of it ,Re-Using the components of it and keeping Out Color Theam in mind',
    designSystemTokens:
      'Use the Theam colors only .',
    prototypeUrl: 'https://faldulipsaprotfolio.framer.website/healthmate',
    impactMetrics: [
      'High-fidelity visual asset delivery',
      'Cohesive color-grading style guides created',
      'Multi-channel optimised graphics delivered',
    ],
  },
];

export const allProjects: CaseStudy[] = [...mobileProjects, ...webGraphicsProjects];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return allProjects.find((p) => p.id === id);
}
