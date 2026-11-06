'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

// Fetch semua project untuk publik
export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

// Fetch 1 project berdasarkan slug
export async function getProjectBySlug(slug: string) {
  return await prisma.project.findUnique({
    where: { slug },
  })
}

// Tambah Project Baru (Admin)
export async function createProject(formData: FormData) {
  const title = formData.get('title') as string
  const summary = formData.get('summary') as string
  const content = formData.get('content') as string
  const coverImage = formData.get('coverImage') as string
  const demoUrl = formData.get('demoUrl') as string
  const repoUrl = formData.get('repoUrl') as string
  const techStackInput = formData.get('techStack') as string

  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  const techStack = techStackInput ? techStackInput.split(',').map((t) => t.trim()) : []

  await prisma.project.create({
    data: {
      title,
      slug,
      summary,
      content,
      coverImage,
      demoUrl,
      repoUrl,
      techStack,
    },
  })

  revalidatePath('/')
  revalidatePath('/admin/projects')
}

// Hapus Project (Admin)
export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  })

  revalidatePath('/')
  revalidatePath('/admin/projects')
}

// Update Project (Admin)
export async function updateProject(id: string, formData: FormData) {
  const title = formData.get('title') as string
  const summary = formData.get('summary') as string
  const content = formData.get('content') as string
  const coverImage = formData.get('coverImage') as string
  const techStackInput = formData.get('techStack') as string

  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  const techStack = techStackInput ? techStackInput.split(',').map((t) => t.trim()) : []

  await prisma.project.update({
    where: { id },
    data: {
      title,
      slug,
      summary,
      content,
      coverImage,
      techStack,
    },
  })

  revalidatePath('/')
  revalidatePath('/admin/projects')
}