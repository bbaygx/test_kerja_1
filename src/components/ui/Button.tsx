import { cn } from "@/utils/cn";
import { IconType } from "react-icons/lib";

interface ButtonPropsType {
  icon?: IconType; // Mengubah tipe prop icon
  withIcon?: boolean;
  title?: string;
  variant: "outline" | "ghost" | "default" | "link";
  className?: string;
  href?: string;
}
export function Button({
  icon,
  withIcon,
  title,
  variant = "ghost",
  className = "",
  href,
}: ButtonPropsType) {
  if (withIcon && icon) {
    const Icon = icon;
    return (
      <button className={`${cn("flex items-center gap-3", ...className)}`}>
        <Icon size={20} />
        <span className="">{title}</span>
      </button>
    );
  }

  return (
    <button
      className={`${
        (cn(
          "rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
          ...className
        ),
        variant == "default"
          ? "block w-full rounded bg-cyan-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:bg-cyan-600 sm:w-auto"
          : variant == "ghost"
          ? "bg-transparent  transition-all duration-200 text-white hover:text-cyan-500"
          : variant == "link"
          ? "block w-full rounded px-12 py-3 text-sm font-medium text-white  hover:text-white focus:outline-none focus:ring active:text-white sm:w-auto"
          : "")
      }`}
    >
      <a href={`${href}`}>{title}</a>
    </button>
  );
}
