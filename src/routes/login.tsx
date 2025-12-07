import { createFileRoute } from '@tanstack/react-router'
import { Activity, Lock, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export const Route = createFileRoute('/login')({ component: Login })

function Login() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white">
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                hemato.tech
              </span>
            </h1>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {t('login.title')}
          </h2>
          <p className="text-gray-400">
            {t('login.subtitle')}
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                {t('login.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                placeholder={t('login.emailPlaceholder')}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                <Lock className="w-4 h-4 inline mr-2" />
                {t('login.password')}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                placeholder={t('login.passwordPlaceholder')}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-red-600 bg-slate-700 border-slate-600 rounded focus:ring-red-500"
                />
                <span className="ml-2 text-sm text-gray-300">
                  {t('login.remember')}
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                {t('login.forgot')}
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red-500/50"
            >
              {t('login.submit')}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-center text-sm text-gray-400">
              {t('login.noAccount')}{' '}
              <a
                href="#"
                className="text-red-400 hover:text-red-300 transition-colors font-medium"
              >
                {t('login.requestAccess')}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            {t('login.restricted')}
          </p>
        </div>
      </div>
    </div>
  )
}

