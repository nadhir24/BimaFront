import { title } from "@/components/primitives";
import Image from "next/image";
import wk from "@/public/wk.jpg";
export default function PricingPage() {
  return (
    <div className="relative w-64 h-40">
      <Image src={wk} alt="lalala" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="text-white text-xl mb-2">
          <h1 className={title()}>Belanja</h1>
        </div>
        <button className="px-4 py-2 bg-white text-black">Click Me</button>
      </div>
    </div>
  );
}
// Import dependencies
