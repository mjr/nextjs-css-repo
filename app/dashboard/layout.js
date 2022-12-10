import './global.css'

import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <div>
      <h2><Link href="/">home</Link></h2>
      <h1>Dashboard</h1>
      {children}
    </div>
  )
}
