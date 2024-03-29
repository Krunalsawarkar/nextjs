"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href="/login">Login Here</Link>
      <Link href="/about">About Here</Link>

      <button onClick={() => router.push("/login")}>Login Button</button>
      <button onClick={() => router.push("/about")}>About Button</button>
    </main>
  );
}
