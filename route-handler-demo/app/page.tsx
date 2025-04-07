import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <>
      <div>
      <h1 className="text-3xl text-blue-950 p-4 m-4 bg-blue-800">HELO NEW ROUTE DEMO</h1>
      <Link href="/dashboard" className="bg-slate-800 text-slate-200 p-4 m-4 rounded-sm">Dashboard</Link>
      </div>
   </>
  );
}
