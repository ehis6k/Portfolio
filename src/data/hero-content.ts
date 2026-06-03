/**
 * Hero content data structure
 * TypeScript interfaces for hero section content
 */

export interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface ProfileImage {
  src: string;
  alt: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  status: string;
  ctas: CTA[];
  profileImage: ProfileImage;
}

// Hero content data from PRD - Dark IDE Precision Theme
export const heroContent: HeroContent = {
  headline: "Engineering Scalable Backends & Interactive Systems.",
  subheadline:
    "CS graduate and Software Engineer Intern at **Utonomy**. I bridge the gap between complex system architecture and responsive frontend experiences.",
  status: "Currently: CS New Grad · Software Engineer Intern @ Utonomy",
  ctas: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "primary",
    },
    {
      label: "Download Resume",
      href: "/api/cv",
      variant: "secondary",
    },
  ],
  profileImage: {
    src: "/assets/img/profile/new_profile_pic.jpeg",
    alt: "Portrait of Gabriel Uwaila, Final-year CS student and IT Staff at Fujifilm",
  },
};

