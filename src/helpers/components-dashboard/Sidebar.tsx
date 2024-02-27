"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { HiMiniCog6Tooth, HiUsers } from "react-icons/hi2";
import { LogoImage } from "@/dynamic-imports/components";
import { MdMenuOpen } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { RiArticleLine } from "react-icons/ri";
import { SidebarModules } from "./SidebarModules";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

interface SidebarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => React.ReactNode;
  activeCondition: boolean;
}

const dashboardSidebarItems: any = {
  top: {
    data: [
      {
        label: "Staff",
        icon: <HiUsers className="text-2xl" />,
        href: "/auth/dashboard/staff",
      },
    ],
  },
  mid: {
    label: "Modules",
    data: [
      {
        label: "Category",
        icon: <TbCategoryPlus className="text-2xl" />,
        href: "/auth/dashboard/category",
      },
      {
        label: "Article",
        icon: <RiArticleLine className="text-2xl" />,
        href: "/auth/dashboard/article",
      },
    ],
  },
  bot: {
    label: "Others",
    data: [
      {
        label: "Settings",
        icon: <HiMiniCog6Tooth className="text-2xl" />,
        href: "/auth/dashboard/settings",
      },
    ],
  },
};

const SidebarLinkGroup = ({
  children,
  activeCondition,
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <>{children(handleClick, open)}</>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const sidebarExpanded = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`z-[1000] absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-boxdark duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <div className="pt-2.5 px-3">
          <Link href="/">
            <LogoImage />
          </Link>
        </div>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <MdMenuOpen className="text-bodydark text-4xl mt-5" />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-2 px-4 py-4 lg:mt-4 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 cursor-pointer hover:text-white">
              Welcome to Abhiral News
            </h3>

            <div className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {() => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/auth/dashboard"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === "/auth/dashboard" &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <RxDashboard className="text-2xl" />
                        Dashboard
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Top modules */}
              <SidebarModules {...dashboardSidebarItems.top} />
              <SidebarModules {...dashboardSidebarItems.mid} />
              <SidebarModules {...dashboardSidebarItems.bot} />
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
