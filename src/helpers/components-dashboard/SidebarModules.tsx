import { getUniqueKey } from "@/utils/methods/stringMethods";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SidebarModules = (props: any) => {
  // Props
  const { label, data } = props;

  // Pathname
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col justify-center">
      {label && (
        <h3 className="mt-4 mb-2 ml-4 text-sm font-semibold text-bodydark2 cursor-pointer hover:text-white text-left">
          {label}
        </h3>
      )}
      {data?.map(({ icon, label, href }: any, idx: number) => (
        <Link
          key={getUniqueKey(idx, label)}
          href={href}
          className={`w-full group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname === href && "bg-graydark dark:bg-meta-4"
          }`}
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
};
