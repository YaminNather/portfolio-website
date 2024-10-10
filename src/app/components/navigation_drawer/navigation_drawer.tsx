import { Link } from "@/app/components/link";
import { IconButton } from "@/app/components/icon_button/icon_button/icon_button";
import { FaX } from "react-icons/fa6";

import styles from "./styles.module.scss";

export interface NavigationDrawerProps {
  readonly isOpen: boolean;
  readonly onClosed: () => void;
}

export function NavigationDrawer(props: NavigationDrawerProps) {
  return (
    <nav 
      className={`
        absolute flex left-0 top-0 z-40 w-screen h-screen bg-neutral-900 flex-col justify-center items-center 
        ${styles.navigation_drawer} ${(props.isOpen) ? styles.navigation_drawer_open : styles.navigation_drawer_close}
      `}
    >
      <IconButton className="absolute right-8 top-8" iconBuilder={(className) => <FaX className={className} />} onClick={() => props.onClosed()} />

      {links.map((link, index) => {
        return <Link key={link.href} href={link.href} className={`${(index !== 0) ? "mt-8" : ""} text-2xl font-bold`}>{link.readableText}</Link>;
      })}
    </nav>
  );
}

const links: Link[] = [
  { readableText: "HOME", href: "/" },
  { readableText: "PROJECTS", href: "/projects" },
  { readableText: "CONTACT ME", href: "/contact_me" },
];

interface Link {
  readableText: string;
  href: string;
}
