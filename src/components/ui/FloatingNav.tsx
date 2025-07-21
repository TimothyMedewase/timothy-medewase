"use client";
import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: ReactElement;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <div
          className={cn(
            "flex max-w-full relative mx-auto pr-8 pl-8 py-4 items-center justify-center space-x-8 mt-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={clsx(
                "relative font-semibold items-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-200",
                {
                  "text-neutral-950 dark:text-neutral-50":
                    pathname === navItem.link,
                }
              )}
            >
              <div className="group relative">
                <span className="block sm:hidden">{navItem.icon}</span>
              </div>
              <span className="hidden sm:block text-md">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
