import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <button
      className={`${className} relative group text-light my-2`}
      onClick={() => {
        toggle();
        router.push(href);
      }}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
