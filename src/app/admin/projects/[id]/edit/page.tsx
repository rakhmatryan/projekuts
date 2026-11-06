import { updateProject } from '@/modules/projects/actions'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  // Ambil data project yang sudah ada berdasarkan ID
  const project = await prisma.project.findUnique({
    where: { id: params.id },
  })

  if (!project) notFound()

  // Bind ID ke Server Action agar fungsi update tahu data mana yang diubah
  const updateProjectWithId = updateProject.bind(null, project.id)

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/projects" className="text-gray-500 hover:text-black transition">
          ← Batal
        </Link>
        <h1 className="text-3xl font-bold">Edit Project</h1>
      </div>

      <form action={updateProjectWithId} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium mb-1">Judul Project</label>
          <input 
            type="text" 
            name="title" 
            defaultValue={project.title}
            required 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Ringkasan Singkat</label>
          <textarea 
            name="summary" 
            defaultValue={project.summary}
            required 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
            rows={3}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Konten / Penjelasan Detail (Opsional)</label>
          <textarea 
            name="content" 
            defaultValue={project.content || ''}
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
            rows={6}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">URL Gambar Cover</label>
          <input 
            type="url" 
            name="coverImage" 
            defaultValue={project.coverImage}
            required 
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tech Stack</label>
          <input 
            type="text" 
            name="techStack" 
            defaultValue={project.techStack.join(', ')}
            className="w-full border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-black" 
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-600 text-white font-medium py-2.5 rounded-md mt-2 hover:bg-blue-700 transition"
        >
          Update Project
        </button>
      </form>
    </div>
  )
}