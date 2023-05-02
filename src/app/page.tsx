import Link from "next/link";
import { Suspense } from "react";

import { Repos } from "@/components/Repos";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/app">Dashboard</Link>
      <Suspense fallback={<p>Carregando repositórios</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repos />
      </Suspense>
    </div>
  );
}
