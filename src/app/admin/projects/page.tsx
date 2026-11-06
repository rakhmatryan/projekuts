import { getProjects, deleteProject } from '@/modules/projects/actions'
import { Project } from '@prisma/client'
import Link from 'next/link'
import { Suspense } from 'react' // 1. Import Suspense

export const dynamic = 'force-dynamic'
export const instant = false // 2. Tambahkan ini sesuai anjuran Next.js 16+

export default async function AdminProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Kelola Projects</h1>
        <Link href="/admin/projects/new" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          + Tambah Project
        </Link>
      </div>
      
      {/* 3. Bungkus bagian tabel dengan Suspense */}
      <Suspense fallback={<div className="p-8 text-center text-gray-500">Memuat data project...</div>}>
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-medium text-gray-600">Judul</th>
                <th className="p-4 font-medium text-gray-600">URL Slug</th>
                <th className="p-4 font-medium text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project: Project) => (
                <tr key={project.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{project.title}</td>
                  <td className="p-4 text-gray-500">{project.slug}</td>
                  <td className="p-4 flex gap-3 items-center">
                    <Link href={`/admin/projects/${project.id}/edit`} className="text-sm text-blue-600 hover:underline">
                      Edit
                    </Link>
                    <form action={deleteProject.bind(null, project.id)}>
                      <button type="submit" className="text-sm text-red-600 hover:underline">
                        Hapus
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-500">
                    Belum ada project. Silakan tambah baru.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Suspense>
    </div>
  )
}