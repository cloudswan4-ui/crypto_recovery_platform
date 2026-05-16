import Link from "next/link";

export default function UserSidebar() {
  return (
    <div className="w-64 h-screen fixed bg-black text-white p-5">
      <h1 className="text-xl font-bold mb-6">Crypto Recovery</h1>

      <nav className="space-y-3">
        <Link href="/">Dashboard</Link>
        <Link href="/cases">My Cases</Link>
        <Link href="/cases/new">New Case</Link>
      </nav>
    </div>
  );
}