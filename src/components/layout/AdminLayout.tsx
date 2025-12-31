import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-black">Admin Panel</header>
      <main className="p-6">{children}</main>
    </div>
  );
}
