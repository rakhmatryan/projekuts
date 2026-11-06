import { getProjects, deleteProject } from '@/modules/projects/actions'
import { createProject } from '@/modules/projects/actions'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const instant = false

export default function NewProjectPage() {
  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/projects" className="text-gray-500 hover:text-black transition">
          ← Kembali
        </Link>
        <h1 className="text-3xl font-bold">Tambah Project Baru</h1>
      </div>

      <form action={createProject} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Judul Project</label>
          <input 
            type="text" 
            name="title" 
            required 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
            placeholder="Contoh: E-Commerce App"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Ringkasan Singkat</label>
          <textarea 
            name="summary" 
            required 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
            rows={3}
            placeholder="Deskripsi singkat tentang project ini..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">URL Gambar Cover</label>
          <input 
            type="url" 
            name="coverImage" 
            required 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
            placeholder="https://via.placeholder.com/800x400" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tech Stack</label>
          <input 
            type="text" 
            name="techStack" 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
            placeholder="Next.js, Tailwind, Prisma (pisahkan dengan koma)" 
          />
        </div>

        <button 
          type="submit" 
          className="bg-black text-white font-medium py-2.5 rounded-md mt-2 hover:bg-gray-800 transition"
        >
          Simpan Project
        </button>
      </form>
    </div>
  )
}