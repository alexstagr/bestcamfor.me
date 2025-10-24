"use client";

import { usePathname } from "next/navigation";

interface LinkProps {
  href: string;
  text: string;
}

function HeaderLink({ text, href }: LinkProps) {
  const pathname = usePathname();

  const isCurrent = pathname === href;

  return (
    <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
      <a
        href={href}
        className={`text-base hover:text-black ${
          isCurrent ? "text-primary" : "text-gray-700"
        } block transition-all`}
      >
        {text}
      </a>
    </li>
  );
}

export default HeaderLink;
