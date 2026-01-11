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
    "Final-year Computer Science student and IT Staff at **Fujifilm**. I bridge the gap between complex system architecture and responsive frontend experiences.",
  status: "Currently: Final Year CS student and Student Software Developer",
  ctas: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "primary",
    },
    {
      label: "Download Resume",
      href: "/resume.pdf",
      variant: "secondary",
    },
  ],
  profileImage: {
    src: "/assets/img/profile/fuji_work_bg_removed.png",
    alt: "Portrait of Gabriel Uwaila, Final-year CS student and IT Staff at Fujifilm",
  },
};

