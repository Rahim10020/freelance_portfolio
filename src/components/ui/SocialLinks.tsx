import { socialLinks } from "@/lib/data";
import {
  GithubWhiteIcon,
  InstagramWhiteIcon,
  LinkedinWhiteIcon,
} from "@/components/icons";

const iconComponents = {
  github: GithubWhiteIcon,
  linkedin: LinkedinWhiteIcon,
  instagram: InstagramWhiteIcon,
} as const;

export default function SocialLinks() {
  const visibleLinks = socialLinks.filter(
    (link) => link.icon in iconComponents,
  );

  return (
    <ul className="flex items-center gap-3">
      {visibleLinks.map((link) => {
        const Icon = iconComponents[link.icon as keyof typeof iconComponents];

        return (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:scale-105"
              aria-label={link.name}
            >
              <Icon size={24} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
