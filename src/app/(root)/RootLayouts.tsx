import { AppBar } from "@/components/AppBar";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayouts() {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
}
