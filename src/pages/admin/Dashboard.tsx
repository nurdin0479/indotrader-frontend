import AdminLayout from "../../components/layout/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Pengguna</h2>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Admin Aktif</h2>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Status Server</h2>
          <p className="text-green-600 font-bold mt-2">Online</p>
        </div>

      </div>
    </AdminLayout>
  );
}
