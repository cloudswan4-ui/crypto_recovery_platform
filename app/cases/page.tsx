"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function MyCases() {
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    loadCases();
  }, []);

  async function loadCases() {
    const user = (await supabase.auth.getUser()).data.user;

    const { data } = await supabase
      .from("cases")
      .select("*")
      .eq("user_id", user?.id);

    setCases(data || []);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Cases</h1>

      <div className="grid gap-4">
        {cases.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-bold">{c.case_title}</h2>
            <p className="text-sm text-gray-500">{c.asset_type}</p>
            <p>Status: {c.status}</p>

            <Link
              href={`/cases/${c.id}`}
              className="text-blue-600 text-sm"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}