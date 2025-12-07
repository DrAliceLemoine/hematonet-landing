import { createFileRoute } from '@tanstack/react-router'
import { Activity } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({ component: Login })

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6 text-slate-100">
      <div className="max-w-md w-full">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold">HemaPredict — Accès réservé</h1>
          </div>
          <p className="text-slate-300 text-sm">Accédez à votre espace institutionnel. Pour une demande d'accès, contactez notre équipe.</p>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" placeholder="votre@email.com" required />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Mot de passe</label>
              <input type="password" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" placeholder="Mot de passe" required />
            </div>

            <button type="submit" className="w-full px-5 py-3 bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold rounded-lg">Se connecter</button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-slate-300">Pas de compte ? <Link to="/contact" className="text-amber-300 underline">Demandez un accès</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

