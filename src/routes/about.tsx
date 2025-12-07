import { createFileRoute } from '@tanstack/react-router'
import { Award } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">À propos de HemaPredict</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            HemaPredict™ développe des outils de modélisation prédictive destinés aux équipes hématologiques. Notre objectif : fournir des informations cliniques fiables, interprétables et immédiatement exploitables, tout en respectant la confidentialité et les exigences réglementaires des établissements de santé.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Notre mission</h2>
            <p className="text-slate-300 text-sm leading-relaxed">Aider les cliniciens à anticiper l'évolution hématologique des patients grâce à des modèles patient-spécifiques et des rapports exploitables en consultation.</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-2">Nos valeurs</h2>
            <ul className="text-slate-300 text-sm list-inside space-y-2">
              <li>Rigueur scientifique et validation clinique</li>
              <li>Transparence et interprétabilité</li>
              <li>Sécurité des données et conformité</li>
              <li>Conception centrée sur l'usage clinique</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Équipe fondatrice</h3>
              <p className="text-slate-300 text-sm">Une équipe mixte de cliniciens et d'ingénieurs en santé dédiée à créer des outils pragmatiques pour la pratique hématologique.</p>
              <div className="mt-4">
                <Link to="/contact" className="text-amber-300 underline">Contactez-nous pour collaborer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

