import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

// Tentukan rute mana saja yang dikunci
export const config = {
  matcher: ["/admin/:path*"],
}