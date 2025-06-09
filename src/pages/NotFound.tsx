import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <h1 className="text-6xl font-bold text-emerald-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-gray-100">Page Not Found</h2>
      <p className="mb-6 text-slate-600 dark:text-slate-300">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary px-6 py-3">Go Home</Link>
    </div>
  )
}
