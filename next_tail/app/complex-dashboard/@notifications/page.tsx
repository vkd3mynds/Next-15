import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href="/complex-dashboard/archived" className="bg-amber-500 text-slate-600 p-4 rounded-sm m-2">Archived</Link>
      </div>
    </Card>
  );
}
