import { createFileRoute } from '@tanstack/react-router'
import {
  Database,
  Activity,
  Brain,
  Users,
  FileText,
  Plug,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const features = [
    {
      icon: <Database className="w-12 h-12 text-red-400" />,
      title: 'Centralisation des résultats',
      description:
        'Centralisez tous les résultats de tests sanguins en un seul endroit sécurisé. Accédez rapidement aux données de vos patients et suivez leur évolution dans le temps.',
    },
    {
      icon: <Activity className="w-12 h-12 text-red-400" />,
      title: 'Analyse des anomalies',
      description:
        'Détectez automatiquement les anomalies dans les paramètres sanguins. Visualisez les écarts par rapport aux valeurs normales et identifiez les tendances préoccupantes.',
    },
    {
      icon: <Brain className="w-12 h-12 text-red-400" />,
      title: 'Suggestions de diagnostics',
      description:
        'Bénéficiez de suggestions de diagnostics potentiels grâce à notre base de données d\'experts et à notre algorithme d\'apprentissage automatique. Un outil d\'aide à la décision pour les professionnels.',
    },
    {
      icon: <Users className="w-12 h-12 text-red-400" />,
      title: 'Suivi des patients',
      description:
        'Outils de suivi complets pour les hématologues. Gérez les dossiers patients, consultez l\'historique médical et planifiez les suivis avec facilité.',
    },
    {
      icon: <FileText className="w-12 h-12 text-red-400" />,
      title: 'Rapports détaillés',
      description:
        'Générez des rapports d\'analyse complets et professionnels. Exportez les données pour vos dossiers médicaux ou pour partager avec vos collègues.',
    },
    {
      icon: <Plug className="w-12 h-12 text-red-400" />,
      title: 'Intégration facilitée',
      description:
        'Intégrez facilement des données provenant de différents dispositifs de diagnostic. Compatible avec les principaux systèmes d\'analyse hématologique du marché.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
              <Activity className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                HEMATONET
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Plateforme d'analyse des données hématologiques
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            HematoNet est une plateforme web dédiée à l'analyse des données hématologiques pour les professionnels de santé. 
            Elle permet de centraliser les résultats de tests sanguins, d'analyser les anomalies dans les paramètres sanguins 
            et de suggérer des pistes de diagnostics potentiels grâce à une base de données d'experts et à un algorithme d'apprentissage automatique.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red-500/50">
              Commencer
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Accédez à votre espace professionnel pour commencer l'analyse
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Fonctionnalités principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pour les professionnels de santé
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            HematoNet offre également des outils de suivi des patients pour les hématologues 
            et permet d'intégrer facilement des données provenant de différents dispositifs de diagnostic.
          </p>
          <p className="text-gray-400">
            Une solution complète pour améliorer la qualité des soins et optimiser votre pratique clinique.
          </p>
        </div>
      </section>
    </div>
  )
}
