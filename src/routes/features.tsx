import { createFileRoute } from '@tanstack/react-router'
import { Activity, Brain, Users, FileText, Shield, BarChart3 } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/features')({ component: Features })

function Features() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-amber-400" />,
      title: 'Modélisation patient-spécifique',
      description: 'Construction d’un modèle individuel basé sur l’historique et les paramètres biologiques pour des projections personnalisées.',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-amber-400" />,
      title: 'Projections temporelles',
      description: 'Courbes claires et annotées montrant l’évolution anticipée des paramètres hématologiques dans le temps.',
    },
    {
      icon: <Activity className="w-12 h-12 text-amber-400" />,
      title: 'Analyses scénarisées (what-if)',
      description: 'Simulez l’impact de traitements ou d’événements cliniques pour comparer plusieurs trajectoires possibles.',
    },
    {
      icon: <FileText className="w-12 h-12 text-amber-400" />,
      title: 'Rapports exploitables',
      description: 'Rapports synthétiques contenant tendances, points d’attention et recommandations interprétables par les cliniciens.',
    },
    {
      icon: <Shield className="w-12 h-12 text-amber-400" />,
      title: 'Sécurité & conformité',
      description: 'Traitement des données et stockage conformes aux standards de sécurité pour l’environnement de santé.',
    },
    {
      icon: <Users className="w-12 h-12 text-amber-400" />,
      title: 'Intégration clinique',
      description: 'Conçu pour s’intégrer aux flux existants et faciliter l’usage en consultation et en réunions multidisciplinaires.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Fonctionnalités clés</h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">HemaPredict™ propose un ensemble de fonctions orientées vers la pratique clinique : modélisation individuelle, projections, simulations et rapports cliniques.</p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/demo/neon" className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold rounded-lg">Voir la démonstration</Link>
        </div>
      </section>
    </div>
  )
}

