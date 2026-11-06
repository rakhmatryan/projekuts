import { getProjects } from '@/modules/projects/actions'
import { Project } from '@prisma/client' // 1. Import tipe Project dari Prisma
import Link from 'next/link'

export default async function HomePage() {
  const projects = await getProjects()

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
      <p className="text-gray-600 mb-8">Daftar proyek dan karya yang pernah saya kerjakan.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 2. Beri tipe ': Project' pada parameter project */}
        {projects.map((project: Project) => (
  <Link 
    href={`/projects/${project.slug}`} 
    key={project.id} 
    className="border rounded-xl p-5 shadow-sm hover:shadow-md transition block"
  >
    <img
      src={project.coverImage || 'https://via.placeholder.com/400x200'}
      alt={project.title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
    <p className="text-gray-600 text-sm mb-4">{project.summary}</p>
    <div className="flex flex-wrap gap-2">
      {/* 3. Beri tipe ': string' pada parameter tech */}
      {project.techStack.map((tech: string) => (
        <span key={tech} className="bg-gray-100 text-xs px-2.5 py-1 rounded-full text-gray-700">
          {tech}
        </span>
      ))}
</div>
        </Link>
      ))}
    </div>
  </main>
 )
}