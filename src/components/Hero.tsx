import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-500/5 to-black/5">
      <div className="mx-auto max-w-screen-xl px-4 py-28 lg:h-screen ">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Transformasi Digital Unggul dan Solusi Elektronik Terbaik bagi
            <strong className="font-extrabold text-cyan-500 sm:block">
              {" "}
              Bisnis Anda{" "}
            </strong>
          </h1>

          <p className="mt-4 text-sm sm:text-xl/relaxed">
            Menyajikan solusi terdepan dalam transformasi digital, kami
            mempersembahkan inovasi elektronik terbaik untuk mempercepat
            kemajuan bisnis Anda menuju kesuksesan yang lebih besar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="default" title="Lihat Product" href="#product" />

            <Button variant="link" title="Pelajari lebih lanjut" href="/" />
          </div>
        </div>
      </div>
    </section>
  );
}
