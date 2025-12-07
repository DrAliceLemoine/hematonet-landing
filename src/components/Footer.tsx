import { Link } from '@tanstack/react-router'
import { Activity, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-6 h-6 text-amber-400" />
              <span className="text-white font-semibold text-lg">HemaPredict<sup className="text-xs opacity-75">™</sup></span>
            </div>
            <p className="text-slate-400 text-sm">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@hemapredict.ai"
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contact@hemapredict.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 HemaPredict. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-amber-400 transition-colors"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

