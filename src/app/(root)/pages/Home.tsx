import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { ProductList } from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <div className="bg-grid-white/[0.03] relative">
        <main className="">
          <Hero />
          <Product>
            <ProductList />
          </Product>
        </main>
      </div>
    </>
  );
}
