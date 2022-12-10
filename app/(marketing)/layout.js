import './landingpage.css'

import Link from 'next/link'

export default function MarketingLayout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}
