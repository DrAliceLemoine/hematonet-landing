import { createFileRoute } from '@tanstack/react-router'
import {
  Database,
  Activity,
  Brain,
  Users,
  FileText,
  Plug,
  BarChart3,
  Bell,
  Search,
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export const Route = createFileRoute('/features')({ component: Features })

function Features() {
  const { t } = useLanguage()
  const features = [
    {
      icon: <Database className="w-12 h-12 text-red-400" />,
      title: 'Centralisation des résultats',
      description:
        'Centralisez tous les résultats de tests sanguins en un seul endroit sécurisé. Accédez rapidement aux données de vos patients et suivez leur évolution dans le temps.',
      details: [
        'Stockage sécurisé et conforme RGPD',
        'Historique complet des analyses',
        'Recherche rapide et intuitive',
      ],
    },
    {
      icon: <Activity className="w-12 h-12 text-red-400" />,
      title: 'Analyse des anomalies',
      description:
        'Détectez automatiquement les anomalies dans les paramètres sanguins. Visualisez les écarts par rapport aux valeurs normales et identifiez les tendances préoccupantes.',
      details: [
        'Détection automatique des valeurs anormales',
        'Visualisations graphiques claires',
        'Alertes en temps réel',
      ],
    },
    {
      icon: <Brain className="w-12 h-12 text-red-400" />,
      title: 'Suggestions de diagnostics',
      description:
        'Bénéficiez de suggestions de diagnostics potentiels grâce à notre base de données d\'experts et à notre algorithme d\'apprentissage automatique. Un outil d\'aide à la décision pour les professionnels.',
      details: [
        'Base de données d\'experts mise à jour',
        'Algorithmes d\'IA performants',
        'Suggestions basées sur les dernières recherches',
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-red-400" />,
      title: 'Suivi des patients',
      description:
        'Outils de suivi complets pour les hématologues. Gérez les dossiers patients, consultez l\'historique médical et planifiez les suivis avec facilité.',
      details: [
        'Dossiers patients complets',
        'Historique médical détaillé',
        'Planification des rendez-vous',
      ],
    },
    {
      icon: <FileText className="w-12 h-12 text-red-400" />,
      title: 'Rapports détaillés',
      description:
        'Générez des rapports d\'analyse complets et professionnels. Exportez les données pour vos dossiers médicaux ou pour partager avec vos collègues.',
      details: [
        'Rapports personnalisables',
        'Export en plusieurs formats',
        'Partage sécurisé avec les collègues',
      ],
    },
    {
      icon: <Plug className="w-12 h-12 text-red-400" />,
      title: 'Intégration facilitée',
      description:
        'Intégrez facilement des données provenant de différents dispositifs de diagnostic. Compatible avec les principaux systèmes d\'analyse hématologique du marché.',
      details: [
        'API REST complète',
        'Compatibilité avec les principaux équipements',
        'Import automatique des résultats',
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-red-400" />,
      title: 'Tableaux de bord analytiques',
      description:
        'Visualisez les tendances et statistiques de vos patients avec des tableaux de bord interactifs et personnalisables.',
      details: [
        'Graphiques et visualisations avancées',
        'Statistiques en temps réel',
        'Tableaux de bord personnalisables',
      ],
    },
    {
      icon: <Bell className="w-12 h-12 text-red-400" />,
      title: 'Système d\'alertes',
      description:
        'Recevez des notifications automatiques pour les valeurs critiques, les rendez-vous à venir et les actions requises.',
      details: [
        'Alertes personnalisables',
        'Notifications en temps réel',
        'Rappels automatiques',
      ],
    },
    {
      icon: <Search className="w-12 h-12 text-red-400" />,
      title: 'Recherche avancée',
      description:
        'Trouvez rapidement les informations dont vous avez besoin grâce à notre moteur de recherche puissant et intuitif.',
      details: [
        'Recherche multi-critères',
        'Filtres avancés',
        'Recherche dans l\'historique complet',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              {t('features.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
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
              <p className="text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

