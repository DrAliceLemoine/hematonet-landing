import { createFileRoute } from '@tanstack/react-router'
import { Activity, Users, Shield, Target, Award } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  const { t } = useLanguage()
  
  const values = [
    {
      icon: <Target className="w-10 h-10 text-red-400" />,
      title: t('about.value1.title'),
      description: t('about.value1.desc'),
    },
    {
      icon: <Shield className="w-10 h-10 text-red-400" />,
      title: t('about.value2.title'),
      description: t('about.value2.desc'),
    },
    {
      icon: <Users className="w-10 h-10 text-red-400" />,
      title: t('about.value3.title'),
      description: t('about.value3.desc'),
    },
    {
      icon: <Activity className="w-10 h-10 text-red-400" />,
      title: t('about.value4.title'),
      description: t('about.value4.desc'),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">{t('about.mission')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            {t('about.missionText1')}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('about.missionText2')}
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white text-center mb-12">{t('about.values')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center flex-shrink-0">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{t('about.founder')}</h2>
              <h3 className="text-2xl font-semibold text-red-400 mb-2">{t('about.founderName')}</h3>
              <p className="text-lg text-gray-300 mb-4">{t('about.founderTitle')}</p>
              <p className="text-gray-300 leading-relaxed">
                {t('about.founderDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

