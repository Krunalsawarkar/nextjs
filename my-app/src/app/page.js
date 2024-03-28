"use client";
import Image from "next/image";

export default function Home() {
  const takeFruit=(item)=>{
    alert("Take Fruit"+' '+item)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <button onClick={() => alert("Testing Click")}>Click Here</button>
      <button onClick={()=>takeFruit('Orange')}>Fruit Click</button>
    </main>
  );
}
