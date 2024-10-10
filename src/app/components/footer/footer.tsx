import { CgVercel } from "react-icons/cg";
import { RiNextjsFill } from "react-icons/ri";

import { Link} from "@/app/components/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-4 py-16 text-center">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-y-8">
        <div className="flex justify-center items-center">
          <p>
            Built with <Link href="https://nextjs.org" className="font-bold"><RiNextjsFill className="inline" /> NextJs</Link> 
            &nbsp; and hosted on <Link href="https://vercel.com" className="font-bold"><CgVercel className="inline" /> Vercel</Link>
          </p>
        </div>

        <div className="flex justify-center items-center">
          <p>Copyright © Yamin Nather {new Date(Date.now()).getFullYear()} All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
