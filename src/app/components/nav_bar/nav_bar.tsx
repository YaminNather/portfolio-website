import { Link } from "@/app/components/link";
import { FaBars } from "react-icons/fa6";

import { IconButton } from "@/app/components/icon_button/icon_button/icon_button";


export interface NavBarProps {
  readonly onOpenNavigationDrawerButtonClicked: () => void;
}

export function NavBar(props: NavBarProps) {
  const linkLabels: Map<string, string> = new Map<string, string>([
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/contact_me", "Contact Me"],
  ]);

  return (
    <header className="flex px-4 md:px-8 lg:px-32 py-8 border-b border-neutral-800 justify-between items-center">
      <p className="text-white font-mono font-extrabold">Portfolio</p>
      
      <nav className="hidden md:inline">
        {Array.from(linkLabels).map(
          (entry, index) => {
            return (
              <Link key={entry[0]} href={entry[0]} className={`${(index !== 0) ? "ms-8" : undefined}`}>{entry[1]}</Link>
            );
          }
        )}
      </nav>

      <IconButton className="md:hidden" iconBuilder={(className) => <FaBars className={className} onClick={() => props.onOpenNavigationDrawerButtonClicked()} />} />
      
      {/* <div className="border border-neutral-700 p-3 rounded-full font-bottom">
        <FaSun className="text-green-500" />
      </div> */}
    </header>
  );
}
