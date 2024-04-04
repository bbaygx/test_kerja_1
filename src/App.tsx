import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { ProductList } from "@/components/ProductList";
import { useFetchDataList } from "./hooks/useFetchDataList";

export default function App() {
  const {} = useFetchDataList();

  return (
    <>
      <div className="bg-grid-white/[0.03] relative">
        <AppBar />
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
