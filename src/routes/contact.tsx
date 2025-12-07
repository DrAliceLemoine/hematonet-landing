import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  const { t } = useLanguage()
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-red-400" />,
      title: t('contact.email'),
      content: 'contact@hemato.tech',
      link: 'mailto:contact@hemato.tech',
    },
    {
      icon: <Phone className="w-6 h-6 text-red-400" />,
      title: t('contact.phone'),
      content: '+33 1 XX XX XX XX',
      link: 'tel:+331XXXXXXXX',
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: t('contact.address'),
      content: 'Paris, France',
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: t('contact.hours'),
      content: t('contact.hoursValue'),
      link: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t('contact.info')}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-red-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {t('contact.support')}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {t('contact.supportText')}
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t('contact.formTitle')}
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500 resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red-500/50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

