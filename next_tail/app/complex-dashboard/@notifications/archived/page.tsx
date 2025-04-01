import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/complex-dashboard" className="bg-amber-800 text-slate-600 p-4 rounded-sm m-2">Default</Link>
      </div>
    </Card>
  );
}