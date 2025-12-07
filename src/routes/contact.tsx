import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Contact</h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">Pour demander une démonstration, discuter d'un projet pilote ou poser une question technique concernant HemaPredict™, contactez notre équipe.</p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Coordonnées</h2>
              <div className="space-y-4 text-slate-300 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a className="text-amber-300" href="mailto:contact@hemapredict.ai">contact@hemapredict.ai</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div>+33 1 23 45 67 89</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <div className="font-medium">Siège</div>
                    <div>Paris, France</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-2">Support & partenariats</h2>
              <p className="text-slate-300 text-sm">Nous collaborons avec des établissements hospitaliers et des équipes de recherche. Pour des demandes de partenariat ou d'accès pilote, merci de nous contacter via le formulaire ou par email.</p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Envoyer un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white resize-none" placeholder="Décrivez votre demande"></textarea>
              </div>
              <button type="submit" className="w-full px-5 py-3 bg-amber-600 hover:bg-amber-700 text-slate-900 font-semibold rounded-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

