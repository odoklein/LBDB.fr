export const primaryPhoneHref = 'tel:+33100000000'
export const primaryPhoneLabel = '+33 1 00 00 00 00'
export const primaryEmail = 'contact@lbdb.fr'

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tarifs', href: '/pricing' },
  { label: 'A propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const socialProofStats = [
  { value: 200, prefix: '+', suffix: '', label: 'Missions' },
  { value: 40, prefix: '', suffix: '+', label: 'Clients' },
  { value: 98, prefix: '', suffix: '%', label: 'Satisfaction' },
  { value: 24, prefix: '<', suffix: 'h', label: 'Delai' },
] as const

export const trustBullets = [
  '+40 clients satisfaits',
  'Intervention < 24h',
  'Sans engagement',
] as const

export const logos = ['Bouygues', 'Vinci', 'Eiffage', 'Nexity', 'Kaufman', 'Icade', 'Altarea', 'Cogedim'] as const

export const services = [
  {
    title: 'Dechargement & Manutention',
    desc: 'Livraisons de materiaux, dechargement camions, transfert de charges lourdes.',
  },
  {
    title: 'Demenagement de Chantier',
    desc: "Deplacement d'equipements, reorganisation d'espaces en cours de travaux.",
  },
  {
    title: 'Nettoyage & Remise en etat',
    desc: 'Fin de chantier, evacuation des dechets, remise a blanc des espaces.',
  },
] as const

export const faqs = [
  {
    q: 'Intervenez-vous partout en Ile-de-France ?',
    a: "Oui, nous couvrons Paris et toute l'Ile-de-France.",
  },
  {
    q: 'Quel delai pour avoir une equipe ?',
    a: 'Une equipe peut etre mobilisee en moins de 24h apres validation.',
  },
  {
    q: 'Quels types de chantiers acceptez-vous ?',
    a: 'Construction neuve, renovation, demolition et amenagement.',
  },
  {
    q: 'Comment se passe la facturation ?',
    a: 'Devis clair avant mission puis facturation transparente.',
  },
  {
    q: 'Combien de personnes peut-on demander ?',
    a: "De 1 a 20+ personnes selon l'envergure de votre chantier.",
  },
] as const

export const pricingPlans = [
  {
    name: 'Intervention Express',
    subtitle: 'Besoin rapide sur mission courte',
    priceHint: 'Sur devis',
    bullets: ['Activation prioritaire', 'Equipe sous 24h', 'Sans engagement de volume'],
    featured: false,
  },
  {
    name: 'Pack Chantier',
    subtitle: 'Le plus choisi pour operations continues',
    priceHint: 'Tarif degressif',
    bullets: ['Chef de mission dedie', 'Planning hebdomadaire', 'Suivi qualite + reporting'],
    featured: true,
  },
  {
    name: 'Partenariat Mensuel',
    subtitle: 'Pour besoins recurrents',
    priceHint: 'Contrat souple',
    bullets: ['Capacite reservee', 'Pilotage multi-sites', 'Conditions preferentielles'],
    featured: false,
  },
] as const

export const aboutHighlights = [
  'Equipe terrain encadree et reactive',
  'Intervention 7j/7 sur vos chantiers',
  'Methodologie simple et orientee resultat',
] as const

export const aboutStats = [
  { label: 'Missions realisees', value: '+200' },
  { label: 'Clients actifs', value: '40+' },
  { label: 'Satisfaction', value: '98%' },
  { label: 'Temps de reponse', value: '<2h' },
] as const

export const sectors = [
  {
    title: 'Gros oeuvre',
    desc: 'Support sur dechargement massif, manutention lourde et logistique materiaux.',
  },
  {
    title: 'Second oeuvre',
    desc: "Accompagnement pour reimplantation, circulation d'equipements et support multi-corps d'etat.",
  },
  {
    title: 'Renovation urbaine',
    desc: 'Renfort agile pour zones contraintes, acces difficiles et cadence elevee.',
  },
] as const

export const deliverySteps = [
  {
    title: 'Brief express sous 15 min',
    desc: 'Vous exposez le besoin, les contraintes chantier et le niveau de priorite.',
  },
  {
    title: 'Cadrage et validation',
    desc: 'Nous proposons le bon volume humain, le planning et le budget previsionnel.',
  },
  {
    title: 'Deploiement terrain',
    desc: 'Equipe mobilisee, brief securite, suivi mission et controle qualite continu.',
  },
  {
    title: 'Debrief et optimisation',
    desc: 'Retour mission, ajustements et plan de charge pour les prochaines interventions.',
  },
] as const

export const testimonials = [
  {
    quote:
      "LBDB nous a sauves sur une phase critique. Equipe presente en moins de 24h, encadrement propre et zero perte de cadence.",
    author: 'Conducteur de travaux',
    company: 'Entreprise generale IDF',
  },
  {
    quote:
      "On a enfin un partenaire fiable pour lisser les pics de charge. Communication claire, execution nette, facturation simple.",
    author: 'Responsable operations',
    company: 'Promoteur immobilier',
  },
  {
    quote:
      "Leur force: reactivite + discipline terrain. On peut lancer un besoin urgent sans stress.",
    author: 'Chef de chantier',
    company: 'Contractant BTP',
  },
] as const

export const pricingFaqs = [
  {
    q: 'Comment est calcule le prix final ?',
    a: 'Selon le volume humain, la duree, la complexite et le delai de mobilisation.',
  },
  {
    q: 'Y a-t-il des frais caches ?',
    a: 'Non. Le devis presente clairement les postes avant validation.',
  },
  {
    q: 'Peut-on ajuster en cours de mission ?',
    a: 'Oui, nous adaptons la capacite selon la realite terrain et vos priorites.',
  },
] as const

export const contactExpectations = [
  'Accuse de reception rapide de votre demande',
  'Rappel commercial et qualification besoin',
  'Proposition detaillee avec scenario recommande',
  "Point d'activation operationnel avec vos equipes",
] as const

export interface SlidingSplitItem {
  eyebrow: string
  title: string
  desc: string
  bullets: readonly string[]
  imageSlot:
    | 'homeOpsDesk'
    | 'homeSafetyBrief'
    | 'aboutCoordination'
    | 'aboutSiteVisit'
    | 'servicesPlanning'
    | 'servicesExecution'
    | 'pricingSimulation'
    | 'pricingVisibility'
    | 'contactFollowup'
    | 'contactKickoff'
}

export const homeSlidingSplits: readonly SlidingSplitItem[] = [
  {
    eyebrow: 'Pilotage en continu',
    title: 'Un suivi operationnel qui anticipe les blocages avant impact planning.',
    desc:
      'Nos responsables mission suivent la charge, la securite et la coordination terrain pour maintenir une execution stable meme en phase tendue.',
    bullets: [
      'Point de situation quotidien avec vos responsables',
      'Ajustement de capacite en fonction du reel chantier',
      'Escalade rapide si contrainte securite ou acces',
    ],
    imageSlot: 'homeOpsDesk',
  },
  {
    eyebrow: 'Culture securite',
    title: 'Chaque intervention commence par un cadre clair et un brief concret.',
    desc:
      'Avant chaque mission, nous alignons les equipes sur vos exigences operationnelles et les regles site pour demarrer proprement.',
    bullets: [
      'Brief securite adapte au contexte chantier',
      'Roles precis pour chaque intervenant',
      'Execution disciplinee et controlee',
    ],
    imageSlot: 'homeSafetyBrief',
  },
] as const

export const aboutSlidingSplits: readonly SlidingSplitItem[] = [
  {
    eyebrow: 'Organisation interne',
    title: 'Une coordination humaine pensee pour les realites du BTP.',
    desc:
      'Nous combinons exigence terrain et souplesse de mobilisation pour aider les directions travaux a garder la main sur delais et qualite.',
    bullets: [
      'Chef de mission dedie par operation',
      'Canal direct avec votre referent chantier',
      'Decision rapide en situation imprevue',
    ],
    imageSlot: 'aboutCoordination',
  },
  {
    eyebrow: 'Proximite client',
    title: 'Nous construisons des relations longues, pas des missions isolees.',
    desc:
      'Nos equipes apprennent vos standards et vos habitudes pour gagner en fluidite intervention apres intervention.',
    bullets: [
      'Rituels de feedback et amelioration continue',
      'Capitalisation des retours de mission',
      'Vision long terme sur vos besoins recurrents',
    ],
    imageSlot: 'aboutSiteVisit',
  },
] as const

export const servicesSlidingSplits: readonly SlidingSplitItem[] = [
  {
    eyebrow: 'Avant intervention',
    title: "Preparation fine pour deployer le bon dispositif des le premier jour.",
    desc:
      'Nous cadrons le volume humain, les contraintes d acces et les priorites d execution pour limiter les reprises et accelerer le demarrage.',
    bullets: [
      'Qualification chantier et charge previsionnelle',
      'Scenario de deploiement par tranche',
      'Plan de contingence en cas de variation',
    ],
    imageSlot: 'servicesPlanning',
  },
  {
    eyebrow: 'Pendant intervention',
    title: 'Execution terrain orientee cadence, securite et proprete operationnelle.',
    desc:
      'Nos chefs d equipe pilotent la production au plus proche du terrain et ajustent rapidement les ressources selon la realite chantier.',
    bullets: [
      'Supervision active sur les points critiques',
      'Reporting clair sur avancement et incidents',
      'Coordination avec vos interlocuteurs site',
    ],
    imageSlot: 'servicesExecution',
  },
] as const

export const pricingSlidingSplits: readonly SlidingSplitItem[] = [
  {
    eyebrow: 'Simulation budget',
    title: 'Des hypotheses tarifaires lisibles pour decider vite et bien.',
    desc:
      'Nous vous aidons a comparer plusieurs scenarii de capacite pour choisir le meilleur compromis cout, delai et niveau de service.',
    bullets: [
      'Comparatif express de plusieurs options',
      'Projection budget par phase chantier',
      'Recommandation orientee ROI operationnel',
    ],
    imageSlot: 'pricingSimulation',
  },
  {
    eyebrow: 'Visibilite totale',
    title: 'Facturation transparente pour proteger vos marges.',
    desc:
      'Chaque poste est explicite et relie a des objectifs de production concrets pour que votre pilotage financier reste sous controle.',
    bullets: [
      'Postes detaillees et sans ambiguite',
      'Alignement devis / execution / facture',
      'Lisibilite pour vos revues de marge',
    ],
    imageSlot: 'pricingVisibility',
  },
] as const

export const contactSlidingSplits: readonly SlidingSplitItem[] = [
  {
    eyebrow: 'Apres votre demande',
    title: 'Un suivi commercial utile, centre sur votre contexte chantier.',
    desc:
      'Nous ne faisons pas de reponse generique: chaque demande est qualifiee pour proposer une activation realiste et rapide.',
    bullets: [
      'Qualification rapide des contraintes',
      'Retour avec options claires',
      'Validation simple et fluide',
    ],
    imageSlot: 'contactFollowup',
  },
  {
    eyebrow: 'Mise en route',
    title: 'Activation encadree pour un demarrage sans friction.',
    desc:
      'Une fois valide, nous orchestrons la mise en route operationnelle avec vos equipes et vos regles site.',
    bullets: [
      'Synchronisation avec vos interlocuteurs',
      'Brief de lancement et controles initiaux',
      'Point de stabilisation en debut mission',
    ],
    imageSlot: 'contactKickoff',
  },
] as const

export const conversionCtas = {
  primary: { label: 'Demander un devis', href: '/contact' },
  secondary: { label: 'Voir nos services', href: '/services' },
  pricing: { label: 'Voir nos tarifs', href: '/pricing' },
} as const
