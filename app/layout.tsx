import "../globals.css";
import UserSidebar from "@/components/UserSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-50 flex">
        <UserSidebar />
        <main className="flex-1 ml-64 p-6">{children}</main>
      </body>
    </html>
  );
}