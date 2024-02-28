import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default async function Home() {
  const res = await fetch("http://localhost:8000/v1/users/profile");
  const data = await res.json();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Button variant="link" className="bg-slate-200 mt-4" data-item="button-to-product">
        <Link href={"/product/"}>Go to Product</Link>
        <h1>{data.id}</h1>
      </Button>
    </main>
  );
}
