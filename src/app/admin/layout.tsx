import Link from "next/link"

export const dynamic = 'force-dynamic'
export const fetchCache = 'default-no-store'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r p-6">
        <h2 className="text-xl font-bold mb-6">CMS Portofolio</h2>
        <nav className="flex flex-col gap-3">
          <Link href="/admin/dashboard" className="text-gray-700 hover:text-black hover:font-medium">
            Dashboard
          </Link>
          <Link href="/admin/projects" className="text-gray-700 hover:text-black hover:font-medium">
            Kelola Projects
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm mt-8">
            ← Kembali ke Web Utama
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}