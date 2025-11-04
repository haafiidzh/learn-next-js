"use client";

import React from "react";
import {
  Home,
  Users,
  FileText,
  Settings,
  ChevronRight,
  Globe,
  Luggage
} from "lucide-react";
import { lusitana } from "../fonts";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Users", href: "/dashboard/users" },
  { icon: Luggage, label: "Products", href: "/dashboard/products" },
];

const SideNav = () => {
  const path = usePathname();
  return (
    <nav className="flex-1 p-3 overflow-y-auto min-h-screen">
      <div
        className={`${lusitana.className} w-full h-40 bg-blue-500 rounded relative flex items-end p-2`}
      >
        {/* Hero Sidebar */}
        <div className="flex justify-center items-center gap-1 text-white">
          <Globe size={25} className="transform rotate-20" />
          <div className="text-2xl">Acme</div>
        </div>
      </div>
      <ul className="space-y-2 mt-5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={clsx(path == item.href ? 'bg-sky-100' : '', `flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sky-100 transition-colors group`)}
              >
                <Icon size={20} className={clsx(path == item.href ? 'text-sky-500' : 'text-black', 'group-hover:text-sky-500')}/>
                <span className={clsx(path == item.href ? 'text-sky-500' : 'text-black', 'group-hover:text-sky-500')}>{item.label}</span>
                <ChevronRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-500"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNav;
