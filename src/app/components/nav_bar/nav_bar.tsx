import { Link } from "@/app/components/link";

export function NavBar() {
  const linkLabels: Map<string, string> = new Map<string, string>([
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/contact", "Contact Me"],
  ]);

  return (
    <header className="flex px-32 py-8 border-b border-neutral-800 justify-between items-center">
      <p className="text-white font-mono font-extrabold">Portfolio</p>
      
      <nav>
        {Array.from(linkLabels).map(
          (entry, index) => {
            return (
              <Link key={entry[0]} href={entry[0]} className={`${(index !== 0) ? "ms-8" : undefined}`}>{entry[1]}</Link>
            );
          }
        )}
      </nav>
      
      {/* <div className="border border-neutral-700 p-3 rounded-full font-bottom">
        <FaSun className="text-green-500" />
      </div> */}
    </header>
  );
}