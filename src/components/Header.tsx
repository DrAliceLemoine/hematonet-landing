import { Link } from '@tanstack/react-router'

import ClerkHeader from '../integrations/clerk/header-user.tsx'
import { useLanguage } from '../contexts/LanguageContext'

import { useState } from 'react'
import {
  Activity,
  Home,
  Menu,
  X,
  Info,
  Zap,
  Mail,
  LogIn,
  Languages,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <>
      <header className="p-4 flex items-center justify-between bg-slate-900 text-white shadow-lg border-b border-slate-700">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-lg font-bold">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Activity className="w-6 h-6 text-amber-400" />
              <span className="text-white">HemaPredict<sup className="text-xs opacity-75">™</sup></span>
            </Link>
          </h1>
        </div>
        <button
          onClick={toggleLanguage}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2"
          aria-label="Change language"
          title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
        >
          <Languages className="w-5 h-5 text-red-400" />
          <span className="text-sm font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
        </button>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold">{t('nav.home')}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">{t('nav.home')}</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Info size={20} />
            <span className="font-medium">{t('nav.about')}</span>
          </Link>

          <Link
            to="/features"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Zap size={20} />
            <span className="font-medium">{t('nav.features')}</span>
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <Mail size={20} />
            <span className="font-medium">{t('nav.contact')}</span>
          </Link>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 transition-colors mb-2',
            }}
          >
            <LogIn size={20} />
            <span className="font-medium">{t('nav.login')}</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-700 bg-slate-800 flex flex-col gap-2">
          <ClerkHeader />
        </div>
      </aside>
    </>
  )
}
