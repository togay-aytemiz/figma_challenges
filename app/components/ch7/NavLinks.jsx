"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Farm Analytics", href: "/challenge7/farmanalytics", icon: HomeIcon },
  {
    name: "Livestock",
    href: "/challenge7/farmanalytics/livestock",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Dashboard",
    href: "/challenge7/farmanalytics/dashboard",
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3  text-white hover:bg-sky-100 hover:text-[#4A7A4D] md:flex-none md:justify-start md:p-2 md:px-3 text-[20px] font-[700]",
              {
                // The current page should appear slightly different. Active means something is selected.
                "bg-sky-100 text-[#4A7A4D]": pathName === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
