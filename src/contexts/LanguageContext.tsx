import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.features': 'Fonctionnalités',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.professional': 'Espace professionnel',
    
    // Home page
    'home.title': 'Plateforme d\'analyse des données hématologiques',
    'home.description': 'hemato.tech est une plateforme web dédiée à l\'analyse des données hématologiques pour les professionnels de santé. Elle permet de centraliser les résultats de tests sanguins, d\'analyser les anomalies dans les paramètres sanguins et de suggérer des pistes de diagnostics potentiels grâce à une base de données d\'experts et à un algorithme d\'apprentissage automatique.',
    'home.start': 'Commencer',
    'home.startDesc': 'Accédez à votre espace professionnel pour commencer l\'analyse',
    'home.features': 'Fonctionnalités principales',
    'home.professionals': 'Pour les professionnels de santé',
    'home.professionalsDesc': 'hemato.tech offre également des outils de suivi des patients pour les hématologues et permet d\'intégrer facilement des données provenant de différents dispositifs de diagnostic.',
    'home.professionalsSub': 'Une solution complète pour améliorer la qualité des soins et optimiser votre pratique clinique.',
    'home.feature1.title': 'Centralisation des résultats',
    'home.feature1.desc': 'Centralisez tous les résultats de tests sanguins en un seul endroit sécurisé. Accédez rapidement aux données de vos patients et suivez leur évolution dans le temps.',
    'home.feature2.title': 'Analyse des anomalies',
    'home.feature2.desc': 'Détectez automatiquement les anomalies dans les paramètres sanguins. Visualisez les écarts par rapport aux valeurs normales et identifiez les tendances préoccupantes.',
    'home.feature3.title': 'Suggestions de diagnostics',
    'home.feature3.desc': 'Bénéficiez de suggestions de diagnostics potentiels grâce à notre base de données d\'experts et à notre algorithme d\'apprentissage automatique. Un outil d\'aide à la décision pour les professionnels.',
    'home.feature4.title': 'Suivi des patients',
    'home.feature4.desc': 'Outils de suivi complets pour les hématologues. Gérez les dossiers patients, consultez l\'historique médical et planifiez les suivis avec facilité.',
    'home.feature5.title': 'Rapports détaillés',
    'home.feature5.desc': 'Générez des rapports d\'analyse complets et professionnels. Exportez les données pour vos dossiers médicaux ou pour partager avec vos collègues.',
    'home.feature6.title': 'Intégration facilitée',
    'home.feature6.desc': 'Intégrez facilement des données provenant de différents dispositifs de diagnostic. Compatible avec les principaux systèmes d\'analyse hématologique du marché.',
    
    // Features
    'features.title': 'Fonctionnalités',
    'features.subtitle': 'Découvrez toutes les fonctionnalités qui font d\'hemato.tech la solution complète pour l\'analyse des données hématologiques.',
    
    // About
    'about.title': 'À propos de hemato.tech',
    'about.intro': 'hemato.tech est une plateforme web innovante conçue spécifiquement pour les professionnels de santé spécialisés en hématologie. Notre mission est de faciliter l\'analyse des données hématologiques et d\'améliorer la qualité des soins prodigués aux patients.',
    'about.mission': 'Notre Mission',
    'about.missionText1': 'hemato.tech a été créé pour répondre aux besoins croissants des professionnels de santé en matière d\'analyse et de gestion des données hématologiques. Nous combinons l\'expertise médicale avec les dernières avancées technologiques en intelligence artificielle pour offrir une solution complète et intuitive.',
    'about.missionText2': 'Notre plateforme permet de centraliser les résultats de tests sanguins, d\'identifier rapidement les anomalies, et de suggérer des pistes diagnostiques grâce à une base de données d\'experts constamment mise à jour et à des algorithmes d\'apprentissage automatique performants.',
    'about.values': 'Nos Valeurs',
    'about.value1.title': 'Précision',
    'about.value1.desc': 'Notre plateforme utilise des algorithmes d\'apprentissage automatique avancés pour fournir des analyses précises et fiables.',
    'about.value2.title': 'Sécurité',
    'about.value2.desc': 'La sécurité des données médicales est notre priorité absolue. Conformité RGPD et standards de sécurité médicaux.',
    'about.value3.title': 'Expertise',
    'about.value3.desc': 'Développée en collaboration avec des hématologues et des professionnels de santé expérimentés.',
    'about.value4.title': 'Innovation',
    'about.value4.desc': 'À la pointe de la technologie pour améliorer continuellement la qualité des soins hématologiques.',
    'about.founder': 'Notre Fondatrice',
    'about.founderName': 'Dr Alice Lemoine',
    'about.founderTitle': 'Fondatrice et Directrice Médicale',
    'about.founderDesc': 'hemato.tech a été fondé par le Dr Alice Lemoine, hématologue reconnue avec plus de 15 ans d\'expérience dans le domaine de l\'hématologie clinique. Passionnée par l\'innovation médicale et les technologies de santé, elle a créé hemato.tech pour répondre aux défis quotidiens rencontrés par les professionnels de santé dans l\'analyse et l\'interprétation des données hématologiques.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Une question ? Un besoin spécifique ? Notre équipe est à votre disposition pour vous accompagner dans l\'utilisation d\'hemato.tech.',
    'contact.info': 'Informations de contact',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.hours': 'Horaires',
    'contact.hoursValue': 'Lun - Ven: 9h - 18h',
    'contact.support': 'Support professionnel',
    'contact.supportText': 'Pour les professionnels de santé souhaitant intégrer hemato.tech dans leur établissement, notre équipe commerciale et technique est disponible pour vous accompagner dans votre projet.',
    'contact.formTitle': 'Envoyez-nous un message',
    'contact.name': 'Nom complet',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'votre.email@exemple.fr',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Sujet de votre message',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Votre message...',
    'contact.send': 'Envoyer le message',
    
    // Login
    'login.title': 'Espace professionnel',
    'login.subtitle': 'Connectez-vous pour accéder à votre espace de travail',
    'login.email': 'Adresse email professionnelle',
    'login.emailPlaceholder': 'nom@etablissement.fr',
    'login.password': 'Mot de passe',
    'login.passwordPlaceholder': '••••••••',
    'login.remember': 'Se souvenir de moi',
    'login.forgot': 'Mot de passe oublié ?',
    'login.submit': 'Se connecter',
    'login.noAccount': 'Vous n\'avez pas encore de compte ?',
    'login.requestAccess': 'Demander un accès professionnel',
    'login.restricted': 'Accès réservé aux professionnels de santé autorisés',
    
    // Footer
    'footer.description': 'Plateforme d\'analyse des données hématologiques pour les professionnels de santé.',
    'footer.links': 'Liens rapides',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.professional': 'Professional Space',
    
    // Home page
    'home.title': 'Hematological Data Analysis Platform',
    'home.description': 'hemato.tech is a web platform dedicated to the analysis of hematological data for healthcare professionals. It allows centralizing blood test results, analyzing anomalies in blood parameters, and suggesting potential diagnostic leads through an expert database and a machine learning algorithm.',
    'home.start': 'Get Started',
    'home.startDesc': 'Access your professional space to start analysis',
    'home.features': 'Main Features',
    'home.professionals': 'For Healthcare Professionals',
    'home.professionalsDesc': 'hemato.tech also offers patient tracking tools for hematologists and allows easy integration of data from different diagnostic devices.',
    'home.professionalsSub': 'A complete solution to improve care quality and optimize your clinical practice.',
    'home.feature1.title': 'Results Centralization',
    'home.feature1.desc': 'Centralize all blood test results in one secure location. Quickly access your patients\' data and track their evolution over time.',
    'home.feature2.title': 'Anomaly Analysis',
    'home.feature2.desc': 'Automatically detect anomalies in blood parameters. Visualize deviations from normal values and identify concerning trends.',
    'home.feature3.title': 'Diagnostic Suggestions',
    'home.feature3.desc': 'Benefit from potential diagnostic suggestions through our expert database and machine learning algorithm. A decision support tool for professionals.',
    'home.feature4.title': 'Patient Tracking',
    'home.feature4.desc': 'Comprehensive tracking tools for hematologists. Manage patient records, consult medical history, and schedule follow-ups with ease.',
    'home.feature5.title': 'Detailed Reports',
    'home.feature5.desc': 'Generate complete and professional analysis reports. Export data for your medical records or to share with colleagues.',
    'home.feature6.title': 'Easy Integration',
    'home.feature6.desc': 'Easily integrate data from different diagnostic devices. Compatible with major hematological analysis systems on the market.',
    
    // Features
    'features.title': 'Features',
    'features.subtitle': 'Discover all the features that make hemato.tech the complete solution for hematological data analysis.',
    
    // About
    'about.title': 'About hemato.tech',
    'about.intro': 'hemato.tech is an innovative web platform specifically designed for healthcare professionals specializing in hematology. Our mission is to facilitate the analysis of hematological data and improve the quality of care provided to patients.',
    'about.mission': 'Our Mission',
    'about.missionText1': 'hemato.tech was created to meet the growing needs of healthcare professionals in analyzing and managing hematological data. We combine medical expertise with the latest advances in artificial intelligence technology to offer a complete and intuitive solution.',
    'about.missionText2': 'Our platform allows centralizing blood test results, quickly identifying anomalies, and suggesting diagnostic leads through a constantly updated expert database and high-performance machine learning algorithms.',
    'about.values': 'Our Values',
    'about.value1.title': 'Precision',
    'about.value1.desc': 'Our platform uses advanced machine learning algorithms to provide accurate and reliable analyses.',
    'about.value2.title': 'Security',
    'about.value2.desc': 'The security of medical data is our absolute priority. GDPR compliance and medical security standards.',
    'about.value3.title': 'Expertise',
    'about.value3.desc': 'Developed in collaboration with hematologists and experienced healthcare professionals.',
    'about.value4.title': 'Innovation',
    'about.value4.desc': 'At the forefront of technology to continuously improve the quality of hematological care.',
    'about.founder': 'Our Founder',
    'about.founderName': 'Dr Alice Lemoine',
    'about.founderTitle': 'Founder and Medical Director',
    'about.founderDesc': 'hemato.tech was founded by Dr. Alice Lemoine, a recognized hematologist with over 15 years of experience in clinical hematology. Passionate about medical innovation and health technologies, she created hemato.tech to address the daily challenges faced by healthcare professionals in analyzing and interpreting hematological data.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'A question? A specific need? Our team is available to assist you in using hemato.tech.',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours': 'Hours',
    'contact.hoursValue': 'Mon - Fri: 9am - 6pm',
    'contact.support': 'Professional Support',
    'contact.supportText': 'For healthcare professionals wishing to integrate hemato.tech into their facility, our sales and technical team is available to support you in your project.',
    'contact.formTitle': 'Send us a message',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Message subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.send': 'Send Message',
    
    // Login
    'login.title': 'Professional Space',
    'login.subtitle': 'Log in to access your workspace',
    'login.email': 'Professional Email Address',
    'login.emailPlaceholder': 'name@facility.com',
    'login.password': 'Password',
    'login.passwordPlaceholder': '••••••••',
    'login.remember': 'Remember me',
    'login.forgot': 'Forgot password?',
    'login.submit': 'Log in',
    'login.noAccount': 'Don\'t have an account yet?',
    'login.requestAccess': 'Request Professional Access',
    'login.restricted': 'Access restricted to authorized healthcare professionals',
    
    // Footer
    'footer.description': 'Hematological data analysis platform for healthcare professionals.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms of Service',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

