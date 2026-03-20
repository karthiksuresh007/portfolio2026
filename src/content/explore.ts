export interface ExploreHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  fragments: string[];
}

export interface ExploreMindsetItem {
  title: string;
  body: string;
}

export interface ExploreAdmiration {
  name: string;
  category: string;
  note: string;
  image: string;
}

export interface ExploreBook {
  title: string;
  author: string;
  note: string;
}

export interface ExploreFeature {
  title: string;
  meta: string;
  note: string;
}

export interface ExploreInterest {
  title: string;
  description: string;
}

export interface ExploreQuote {
  quote: string;
  author: string;
}

export const exploreHero: ExploreHeroContent = {
  eyebrow: "Explore",
  title: "Beyond code.",
  description:
    "A curated space for the ideas, films, books, sounds, and strategic obsessions that quietly shape how I build. It is less a feed and more a window into the systems, stories, and standards I keep returning to.",
  fragments: ["Curiosity as practice", "Systems over noise", "Taste is part of engineering"]
};

export const builderMindset: ExploreMindsetItem[] = [
  {
    title: "Products should feel inevitable",
    body:
      "I am drawn to products that reduce friction so well that the interface almost disappears. Good software often feels simple only because someone cared deeply about the structure underneath it."
  },
  {
    title: "Systems thinking creates calm",
    body:
      "Whether I am building an API, a frontend flow, or an AI-assisted experience, I think in terms of systems: inputs, constraints, failure points, feedback loops, and the smallest set of moving parts needed to make the whole thing trustworthy."
  },
  {
    title: "Craft matters because trust matters",
    body:
      "Details are rarely decorative. Typography, spacing, naming, loading states, and code structure all communicate whether a builder pays attention. I admire work that feels deliberate at every layer."
  }
];

export const admiredPeople: ExploreAdmiration[] = [
  {
    name: "Alan Turing",
    category: "Computer science",
    note: "Mathematical depth, imagination, and historical courage in one mind.",
    image:
      "/images/explore/people/alan-turing.jpg"
  },
  {
    name: "Donald Knuth",
    category: "Computer science",
    note: "Programming treated as both engineering discipline and intellectual craft.",
    image:
      "/images/explore/people/donald-knuth.jpg"
  },
  {
    name: "Dennis Ritchie",
    category: "Computer science",
    note: "Foundational systems work with elegance that still echoes everywhere.",
    image:
      "/images/explore/people/dennis-ritchie.jpg"
  },
  {
    name: "Linus Torvalds",
    category: "Builder",
    note: "Pragmatic judgment, sharp standards, and a bias toward durable systems.",
    image:
      "/images/explore/people/linus-torvalds.jpeg"
  },
  {
    name: "John Carmack",
    category: "Builder",
    note: "Relentless technical clarity and first-principles problem solving.",
    image:
      "/images/explore/people/john-carmack.jpg"
  },
  {
    name: "Steve Jobs",
    category: "Visionary",
    note: "Product, story, and craftsmanship treated as one continuous decision.",
    image:
      "/images/explore/people/steve-jobs.jpg"
  },
  {
    name: "Naval Ravikant",
    category: "Thinker",
    note: "Clear thinking on leverage, compounding, and long-term games.",
    image:
      "/images/explore/people/naval-ravikant.jpg"
  },
  {
    name: "Christopher Nolan",
    category: "Storytelling",
    note: "Ambition, structure, and scale without losing emotional precision.",
    image:
      "/images/explore/people/christopher-nolan.jpg"
  },
  {
    name: "Hans Zimmer",
    category: "Music",
    note: "Atmosphere, tension, and momentum built with disciplined composition.",
    image:
      "/images/explore/people/hans-zimmer.jpg"
  }
];

export const learningShelf: ExploreBook[] = [
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    note: "A recurring reminder that clear thinking, leverage, and long-term games matter."
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    note: "Useful for thinking about originality, defensibility, and building something that truly stands apart."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    note: "A practical lens on systems, iteration, and the quiet power of consistency."
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    note: "A classic reminder that readability and responsibility are part of engineering quality."
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: "Abelson and Sussman",
    note: "For the deeper pleasure of understanding computation as a language of ideas."
  }
];

export const cinemaFeatures: ExploreFeature[] = [
  {
    title: "Interstellar",
    meta: "Scale, wonder, and emotional logic",
    note: "It captures the feeling that science, courage, and human longing can belong to the same story."
  },
  {
    title: "The Social Network",
    meta: "Ambition and product velocity",
    note: "A sharp portrait of how product instinct, obsession, and speed can reshape the world."
  },
  {
    title: "Whiplash",
    meta: "Discipline and craft",
    note: "A difficult but unforgettable study of what intensity can produce and what it can cost."
  },
  {
    title: "Oppenheimer",
    meta: "Ideas with consequence",
    note: "A reminder that technical brilliance always sits inside history, ethics, and power."
  }
];

export const musicShelf: ExploreFeature[] = [
  {
    title: "Hans Zimmer",
    meta: "Momentum",
    note: "Music that feels engineered for scale, focus, and cinematic energy."
  },
  {
    title: "Ludovico Einaudi",
    meta: "Clarity",
    note: "Minimal, repetitive structures that create emotional space for deep work."
  },
  {
    title: "Nils Frahm",
    meta: "Texture",
    note: "A blend of acoustic and electronic sound that feels thoughtful, layered, and modern."
  }
];

export const csCuriosity: ExploreInterest[] = [
  {
    title: "Artificial Intelligence",
    description: "Not as spectacle, but as a practical layer for better workflows and better tools."
  },
  {
    title: "Distributed Systems",
    description: "Because scale eventually becomes a question of coordination, tradeoffs, and trust."
  },
  {
    title: "Operating Systems",
    description: "Foundational systems thinking is always interesting, especially where abstraction meets control."
  },
  {
    title: "Programming Languages",
    description: "Languages shape the way we express ideas, constraints, and complexity."
  },
  {
    title: "System Design",
    description: "I enjoy the discipline of turning vague requirements into clean architecture and sensible decisions."
  }
];

export const strategySections = [
  {
    title: "Chess",
    fragments: [
      "I like chess because every position is a negotiation between patience, calculation, and long-term structure.",
      "Openings are interesting not just as memorization, but as ways of entering a strategic conversation with intent.",
      "Puzzles sharpen pattern recognition, but real games teach judgment under uncertainty."
    ]
  },
  {
    title: "Football",
    fragments: [
      "Football is one of the best examples of coordinated decision-making under pressure.",
      "I enjoy the tactical side: shape, pressing, spacing, transitions, and how managers create systems around player strengths.",
      "What stands out most is how strategy and emotion coexist in real time."
    ]
  }
];

export const quoteFragments: ExploreQuote[] = [
  {
    quote: "All models are wrong, but some are useful.",
    author: "George Box"
  },
  {
    quote: "Stay hungry. Stay foolish.",
    author: "Steve Jobs"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  }
];

export const closingReflection =
  "I like builders who are difficult to categorize: engineers with taste, artists with rigor, thinkers with execution. This page is a small map of the influences that keep me curious and remind me that great work is rarely only technical. It is also philosophical, aesthetic, and deeply human.";

