import { useState } from "react";
import { IconType } from "react-icons/lib";

interface SheetProps {
  buttonTrigger: IconType;
  iconClose: IconType;
}

const navItem = [
  {
    href: "/",
    title: "Beranda",
  },

  {
    href: "#product",
    title: "Product",
  },
];

export function Sheet({ buttonTrigger, iconClose }: SheetProps) {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  const Icon = buttonTrigger;
  const IconClose = iconClose;
  return (
    <>
      <button onClick={() => setSheetOpen(!sheetOpen)}>
        {!sheetOpen ? <Icon size={20} /> : <IconClose size={20} />}
      </button>
      {sheetOpen && (
        <div className=" md:hidden">
          <div className="dark:bg-slate-900/40"></div>
          <div className="fixed top-24 right-4 max-w-xl bg-gray-800 rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
            <nav className="flex flex-col text-white divide-y divide-zinc-300/80 space-y-8">
              <div className="text-sm w-64 flex flex-col gap-8">
                {navItem.map((item, i) => (
                  <a key={i} href={item.href} className="hover:text-cyan-300">
                    {item.title}
                  </a>
                ))}
              </div>
              <div className="">
                <a
                  href=""
                  className="text-xs font-normal duration-300 transition-all text-gray-400"
                >
                  @Newtronic Solution
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
