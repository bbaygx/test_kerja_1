import { IMAGE } from "@/assets/images";
import { Button } from "./ui/Button";
import { ICON } from "@/assets/icons/icon";
import { Sheet } from "./ui/Sheet";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Beranda", href: "/" },
  { title: "Produk", href: "#product" },
];

export function AppBar() {
  return (
    <header className="sticky top-0 z-50 w-full  border-border/40 backdrop-blur border-b border-b-slate-300/10">
      <div className="flex h-20 max-w-screen-2xl items-center">
        <div className="container flex justify-between items-center relative">
          <Link to="/">
            <img src={IMAGE.Logo} alt="" className="w-36 md:w-40" />
          </Link>
          <div className="hidden space-x-7 font-semibold md:flex">
            {navItems.map((navItem, index) => (
              <Button
                key={index}
                title={navItem.title}
                variant="ghost"
                href={navItem.href}
                className="text-2xl"
              />
            ))}
          </div>
          <div className="block md:hidden">
            <Sheet
              buttonTrigger={ICON.HiDotsVertical}
              iconClose={ICON.AiOutlineClose}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
