import { socialLinks } from "@/lib/data";
import {
  GithubDarkIcon,
  GithubWhiteIcon,
  InstagramDarkIcon,
  InstagramWhiteIcon,
  LinkedinDarkIcon,
  LinkedinWhiteIcon,
} from "@/components/icons";

const iconComponents = {
  github: {
    light: GithubDarkIcon,
    dark: GithubWhiteIcon,
  },
  linkedin: {
    light: LinkedinDarkIcon,
    dark: LinkedinWhiteIcon,
  },
  instagram: {
    light: InstagramDarkIcon,
    dark: InstagramWhiteIcon,
  },
} as const;

export default function SocialLinks() {
  const visibleLinks = socialLinks.filter(
    (link) => link.icon in iconComponents,
  );

  return (
    <ul className="flex items-center gap-3">
      {visibleLinks.map((link) => {
        const themeIcons =
          iconComponents[link.icon as keyof typeof iconComponents];
        const LightIcon = themeIcons.light;
        const DarkIcon = themeIcons.dark;

        return (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-105"
              aria-label={link.name}
            >
              <LightIcon size={24} className="block dark:hidden" />
              <DarkIcon size={24} className="hidden dark:block" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
