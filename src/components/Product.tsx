export function Product({ children }: { children?: React.ReactNode }) {
  return (
    <section
      className="container bg-primaryColor border border-zinc-400/40"
      id="product"
    >
      <div className="text-center ">
        <h3 className="pt-24 text-2xl sm:text-3xl font-semibold">Product</h3>
        <p className="py-5">
          Aplikasi dalam bidang pendidikan yang dikembangkan oleh perusahaan
          newtronic
        </p>
      </div>
      {children}
    </section>
  );
}
