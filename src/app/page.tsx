import Link from "next/link";
import { Suspense } from "react";

import { User } from "@/components/User";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/app">Dashboard</Link>
      <Suspense fallback={<p>Carregando repositórios</p>}>
        <User />
      </Suspense>
    </div>
  );
}
