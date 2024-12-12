import Image from "next/image";
import Link from "next/link";
import maasIcon from "../../static/maas-logo.svg";
import bekkIcon from "../../static/Bekk_Logo.svg";

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link
            className="rounded-full flex gap-2 items-center hover:bg-red-500 focus:bg-cyan-500 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200"
            href="/"
          >
            <Image priority src={maasIcon} alt="Back to home" />
          </Link>

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link
                  className="rounded-full flex gap-2 items-center hover:bg-red-500 focus:bg-cyan-500 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href="https://bekk.no"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image priority src={bekkIcon} alt="Bekk Consulting AS" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
