'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div className="p-8 text-gray-500">Memuat sesi login...</div>
  }

  if (!session) {
    return null
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Selamat datang, {session?.user?.email}! Ini adalah halaman rahasia admin.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border p-6 rounded-xl shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-2">Kelola Konten</h2>
          <p className="text-sm text-gray-500 mb-4">Tambah, edit, atau hapus daftar project portofolio kamu.</p>
          <Link href="/admin/projects" className="text-blue-600 font-medium hover:underline">
            Buka Menu Projects &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}