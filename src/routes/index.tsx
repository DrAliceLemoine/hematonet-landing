import { createFileRoute } from '@tanstack/react-router'
import { Activity, Brain, Users } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 flex items-center justify-center shadow-lg">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white brand-title">HemaPredict<span className="trademark"><sup>™</sup></span></h1>
              <p className="text-lg text-amber-200/90 mt-1">Analyse prédictive hématologique—claire, sécurisée et conçue pour la pratique clinique.</p>
            </div>
          </div>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            HemaPredict™ propose une modélisation patient-spécifique des paramètres sanguins, des projections temporelles et des analyses scénarisées pour aider les équipes médicales à anticiper l'évolution clinique et à optimiser les décisions thérapeutiques.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/demo/neon" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold rounded-lg shadow">Demander une démo</Link>
            <Link to="/contact" className="text-amber-300 underline">Contactez notre équipe</Link>
          </div>
        </div>
      </header>

      <main className="px-6">
        <section className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-3">Présentation du produit</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              HemaPredict™ est une plateforme d'aide à la décision hématologique destinée aux établissements de santé et aux équipes spécialisées. Elle transforme les données cliniques en projections interprétables et fournit un rapport synthétique prêt à être intégré dans le parcours patient.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Fonction prédictive</h3>
                <p className="text-slate-300 text-sm">Construction d'un modèle patient-spécifique, projections temporelles des paramètres sanguins et simulation d'événements cliniques ou d'interventions thérapeutiques.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Rapport exploitable</h3>
                <p className="text-slate-300 text-sm">Rapports structurés présentant tendances, comparaisons de scénarios et recommandations interprétables par les cliniciens.</p>
              </div>
            </div>
          </div>

          <aside className="hidden md:block bg-slate-800/40 border border-slate-700 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-3">
              <Brain className="w-8 h-8 text-amber-400" />
              <div>
                <h4 className="text-white font-semibold">HemaStability Score™ (IVH)</h4>
                <p className="text-slate-300 text-sm">Indice synthétique évaluant la stabilité des paramètres hématologiques et aidant à prioriser les actions cliniques.</p>
              </div>
            </div>

            <div className="mt-3 bg-slate-700/30 rounded-md p-3 text-slate-200 text-sm">
              Rapport condensé : tendances, seuils d'alerte et observations cliniques pour faciliter la synthèse lors des consultations.
            </div>
          </aside>
        </section>

        <section className="max-w-6xl mx-auto py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Bénéfices cliniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
              <Users className="mx-auto mb-3 w-10 h-10 text-amber-400" />
              <h3 className="text-white font-semibold mb-2">Simplicité d'usage</h3>
              <p className="text-slate-300 text-sm">Interface claire, rapports prêts à l'emploi et intégration fluide aux flux cliniques.</p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
              <Activity className="mx-auto mb-3 w-10 h-10 text-amber-400" />
              <h3 className="text-white font-semibold mb-2">Aide à la décision</h3>
              <p className="text-slate-300 text-sm">Projections et scénarios qui étayent les choix thérapeutiques et les discussions multidisciplinaires.</p>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 text-center">
              <Brain className="mx-auto mb-3 w-10 h-10 text-amber-400" />
              <h3 className="text-white font-semibold mb-2">Sécurité & conformité</h3>
              <p className="text-slate-300 text-sm">Protection des données et chaîne de traitement conçues pour l'usage médical.</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-12 text-center">
          <div className="inline-block bg-amber-600/10 border border-amber-600/30 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Prêt à intégrer HemaPredict™ dans votre pratique ?</h3>
            <p className="text-slate-300 mb-4">Contactez notre équipe pour une démonstration personnalisée ou un essai clinique pilote adapté à vos besoins.</p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/demo/neon" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold rounded-lg shadow">Demander une démo</Link>
              <Link to="/contact" className="text-amber-300 underline">Planifier un rendez-vous</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} HemaPredict — Conçu pour les équipes de soins. Tous droits réservés.
      </footer>
    </div>
  )
}
