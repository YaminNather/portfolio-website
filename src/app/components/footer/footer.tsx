import { CgVercel } from "react-icons/cg";
import { RiNextjsFill } from "react-icons/ri";

import { Link} from "@/app/components/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 p-16">
      <div className="mx-auto flex max-w-7xl justify-between items-center">
        <p>
          Built with <Link href="https://nextjs.org" className="font-bold"><RiNextjsFill className="inline" /> NextJs</Link> 
          &nbsp; and hosted on <Link href="https://vercel.com" className="font-bold"><CgVercel className="inline" /> Vercel</Link>
        </p>

        <p>Copyright © Yamin Nather {new Date(Date.now()).getFullYear()} All rights Reserved</p>
      </div>
    </footer>
  );
}