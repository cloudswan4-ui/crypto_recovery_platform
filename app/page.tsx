"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UserDashboard() {
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    fetchCases();
  }, []);

  async function fetchCases() {
    const user = (await supabase.auth.getUser()).data.user;

    const { data } = await supabase
      .from("cases")
      .select("*")
      .eq("user_id", user?.id);

    setCases(data || []);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">My Recovery Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <Card title="Total Cases" value={cases.length} />
        <Card
          title="Active"
          value={cases.filter((c) => c.status !== "recovered").length}
        />
        <Card
          title="Recovered"
          value={cases.filter((c) => c.status === "recovered").length}
        />
      </div>

      <div className="mt-6 bg-white p-4 rounded-xl shadow">
        <h2 className="font-bold mb-3">Recent Cases</h2>

        {cases.slice(0, 5).map((c) => (
          <div key={c.id} className="border-b py-2">
            <p className="font-medium">{c.case_title}</p>
            <p className="text-sm text-gray-500">{c.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}