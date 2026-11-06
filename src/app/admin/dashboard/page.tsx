import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { Suspense } from 'react'


export default async function DashboardPage() {
  const session = await getServerSession()
  
  if (!session) {
    redirect("/login")
  }

  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Selamat datang, {session?.user?.email}! Ini adalah halaman rahasia admin.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-xl shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-2">Total Projects</h2>
            <p className="text-3xl font-bold text-blue-600">-</p>
          </div>
        </div>
      </div>
    </Suspense>
  )
}