"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("Dashboard client component");
  const [name, setName] = useState("");

  return (
    <div className="m-4">
      <h1>Dashboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} className="border border-amber-200 p-4"/>
      <p>Hello, {name}!</p>
    </div>
  );
}