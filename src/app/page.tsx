import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Portofolio Projek
        </h1>
        <p className="text-gray-400 text-lg">
          Selamat datang di platform portofolio web saya. Kelola dan jelajahi proyek-proyek terbaru di sini.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/admin/dashboard"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            Masuk Dashboard Admin
          </Link>
          <Link
            href="/admin/projects"
            className="px-6 py-3 border border-gray-700 font-semibold rounded-lg hover:bg-gray-900 transition"
          >
            Lihat Projects
          </Link>
        </div>
      </div>
    </main>
  )
}