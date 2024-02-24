import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Button variant="link" className="bg-slate-200 mt-4" data-item="button-to-product">
        <Link href={"/product/"}>Go to Product</Link>
      </Button>
    </main>
  );
}
