import { getProjectBySlug } from '@/modules/projects/actions'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const instant = false

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Mengambil data berdasarkan URL slug
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound() // Menampilkan 404 jika project tidak ditemukan
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <Link href="/" className="text-gray-500 hover:text-black mb-8 inline-block font-medium">
        ← Kembali ke Beranda
      </Link>
      
      <img 
        src={project.coverImage || 'https://via.placeholder.com/800x400'} 
        alt={project.title} 
        className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-sm"
      />
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech: string) => (
          <span key={tech} className="bg-gray-100 border px-3 py-1 rounded-full text-sm text-gray-700">
            {tech}
          </span>
        ))}
      </div>

      <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-wrap">
        {project.content || project.summary}
      </div>
    </main>
  )
}