import { IMAGE } from "@/assets/images";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="bg-grid-white/[0.03] relative">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <img src={IMAGE.Logo} alt="Newtronic" className="w-60" />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 lg:text-left">
              Dengan fokus pada transformasi digital yang unggul, kami
              menghadirkan solusi elektronik inovatif terbaik untuk mendorong
              kemajuan bisnis Anda menuju puncak kesuksesan.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <Button href="/" title="Beranda" variant="ghost" />
            <Button href="#product" title="Product" variant="ghost" />
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
