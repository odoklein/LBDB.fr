export const primaryPhoneHref = 'tel:+33400000000'
export const primaryPhoneLabel = '+33 4 00 00 00 00'
export const primaryEmail = 'contact@lesbrasdubatiment.fr'

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Secteurs', href: '/#secteurs' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
] as const

export const socialProofStats = [
  { value: 200, prefix: '+', suffix: '', label: 'Missions realisees' },
  { value: 50, prefix: '', suffix: '+', label: 'Entreprises accompagnees' },
  { value: 98, prefix: '', suffix: '%', label: 'Satisfaction client' },
  { value: 24, prefix: '<', suffix: 'h', label: 'Delai d\'intervention' },
] as const

export const trustBullets = [
  'Intervention partout en France',
  'Presence renforcee Auvergne-Rhone-Alpes',
  'Sans engagement',
] as const

export const logos = ['Bouygues', 'Vinci', 'Eiffage', 'Nexity', 'Kaufman', 'Icade', 'Altarea', 'Cogedim'] as const

export const services = [
  {
    title: 'Dechargement des livraisons',
    desc: 'Reception, dechargement et organisation des materiaux a l\'arrivee sur site pour eviter aux equipes de perdre du temps.',
    icon: 'truck',
  },
  {
    title: 'Transport de materiaux sur chantier',
    desc: 'Deplacement des materiaux jusqu\'aux zones de pose ou de travail pour faciliter l\'execution des taches.',
    icon: 'package',
  },
  {
    title: 'Manutention specialisee',
    desc: 'Manutention d\'elements lourds, volumineux ou sensibles: menuiseries, mobilier, elements d\'agencement, equipements techniques.',
    icon: 'crane',
  },
  {
    title: 'Debarras de chantier',
    desc: 'Evacuation des dechets, gravats, cartons, emballages et materiaux inutilises pour maintenir un chantier propre.',
    icon: 'trash',
  },
  {
    title: 'Nettoyage de fin de chantier',
    desc: 'Remise au propre avant livraison afin de presenter un chantier professionnel et pret pour reception.',
    icon: 'sparkles',
  },
  {
    title: 'Entretien regulier du chantier',
    desc: 'Intervention reguliere, hebdomadaire ou selon les besoins, pour maintenir un chantier propre et fonctionnel.',
    icon: 'calendar',
  },
  {
    title: 'Renfort ponctuel sur chantier',
    desc: 'Intervention rapide en cas de pic d\'activite, chantier en retard, livraison importante ou manque de main-d\'oeuvre.',
    icon: 'users',
  },
] as const

export const solutionPacks = [
  {
    name: 'Pack Livraison',
    desc: 'Reception, dechargement et organisation des materiaux a l\'arrivee sur site.',
    icon: 'truck',
    color: 'blue',
  },
  {
    name: 'Pack Renfort',
    desc: 'Renfort operationnel pour soutenir les equipes et absorber les pics d\'activite.',
    icon: 'users',
    color: 'amber',
  },
  {
    name: 'Pack Debarras',
    desc: 'Evacuation des dechets, gravats, emballages pour un chantier propre et fonctionnel.',
    icon: 'trash',
    color: 'green',
  },
  {
    name: 'Pack Chantier Propre',
    desc: 'Intervention reguliere pour gerer les dechets et conserver des zones de travail propres.',
    icon: 'sparkles',
    color: 'blue',
  },
  {
    name: 'Pack Cle en Main',
    desc: 'Solution globale: dechargement, manutention, organisation, debarras et nettoyage final.',
    icon: 'key',
    color: 'amber',
    featured: true,
  },
] as const

export const benefits = [
  {
    title: 'Gain de temps',
    desc: 'Les equipes restent concentrees sur leur metier et avancent plus vite.',
    icon: 'clock',
  },
  {
    title: 'Gain d\'argent',
    desc: 'Moins de temps perdu signifie une meilleure rentabilite du chantier.',
    icon: 'coins',
  },
  {
    title: 'Chantier organise',
    desc: 'Les materiaux, les dechets et les zones de travail sont mieux geres.',
    icon: 'layout',
  },
  {
    title: 'Chantier securise',
    desc: 'Un environnement de travail mieux tenu facilite l\'intervention des equipes.',
    icon: 'shield',
  },
] as const

export const painPoints = [
  'Dechargement des livraisons',
  'Transport des materiaux sur chantier',
  'Manutention d\'elements lourds ou encombrants',
  'Debarras des dechets',
  'Organisation des zones de travail',
  'Nettoyage du chantier',
] as const

export const clientTargets = [
  {
    title: 'Entreprises du batiment',
    desc: 'Optimisation de l\'organisation des chantiers et amelioration de la productivite.',
  },
  {
    title: 'Artisans',
    desc: 'Soutien sur les taches de manutention, de debarras et de logistique chantier.',
  },
  {
    title: 'Entreprises de renovation',
    desc: 'Meilleure gestion des materiaux et des dechets pour faciliter l\'avancement des travaux.',
  },
  {
    title: 'Societes d\'agencement',
    desc: 'Manutention de mobilier, elements d\'agencement et operations d\'installation sur site.',
  },
  {
    title: 'Menuisiers & Cuisinistes',
    desc: 'Manutention et organisation sur chantier pour elements lourds, volumineux ou sensibles.',
  },
  {
    title: 'Conducteurs de travaux',
    desc: 'Solution concrete pour fluidifier les chantiers et mobiliser les equipes sur leur coeur de metier.',
  },
] as const

export const whyUsPoints = [
  {
    title: 'Gain de temps reel',
    desc: 'Nous prenons en charge les taches qui ralentissent les equipes.',
  },
  {
    title: 'Meilleure rentabilite',
    desc: 'Les equipes qualifiees restent mobilisees sur leur coeur de metier.',
  },
  {
    title: 'Chantier propre et organise',
    desc: 'Le debarras et l\'entretien regulier ameliorent le fonctionnement du site.',
  },
  {
    title: 'Solution souple',
    desc: 'Intervention ponctuelle, reguliere, urgente ou planifiee.',
  },
  {
    title: 'Approche terrain',
    desc: 'Nos interventions sont pensees pour les realites concretes des chantiers.',
  },
  {
    title: 'Prevention et securite',
    desc: 'Nous integrons une dimension formation et prevention des risques.',
  },
] as const

export const processSteps = [
  {
    num: '01',
    title: 'Vous nous expliquez votre besoin',
    desc: 'Via le formulaire de devis ou par telephone, vous indiquez le type de mission, la localisation du chantier et la date souhaitee.',
  },
  {
    num: '02',
    title: 'Nous analysons votre demande',
    desc: 'Nous evaluons la prestation, le volume, la frequence et l\'organisation necessaire.',
  },
  {
    num: '03',
    title: 'Nous intervenons sur chantier',
    desc: 'Notre equipe prend en charge la manutention, le debarras, l\'organisation ou l\'entretien selon le besoin.',
  },
  {
    num: '04',
    title: 'Vous gagnez en efficacite',
    desc: 'Le chantier est plus fluide, plus propre et vos equipes restent concentrees sur leur metier.',
  },
] as const

export const faqs = [
  {
    q: 'Dans quels types de chantiers intervenez-vous ?',
    a: 'Nous intervenons principalement sur des chantiers de construction, de renovation, d\'amenagement interieur et d\'agencement.',
  },
  {
    q: 'Intervenez-vous partout en France ?',
    a: 'Oui. Les Bras du Batiment intervient sur l\'ensemble du territoire francais avec une presence renforcee en Auvergne-Rhone-Alpes.',
  },
  {
    q: 'Proposez-vous des interventions ponctuelles ?',
    a: 'Oui. Nous pouvons intervenir pour une journee, plusieurs jours, un besoin urgent, une livraison importante ou un chantier necessitant un renfort temporaire.',
  },
  {
    q: 'Proposez-vous des interventions regulieres ?',
    a: 'Oui. Nous proposons un service d\'entretien regulier du chantier avec un passage hebdomadaire ou selon l\'avancement des travaux.',
  },
  {
    q: 'Quels types d\'elements pouvez-vous manipuler ?',
    a: 'Nous intervenons sur les materiaux de construction, les menuiseries, le mobilier, les elements d\'agencement, les equipements techniques et d\'autres elements volumineux ou lourds.',
  },
  {
    q: 'Gerez-vous les dechets de chantier ?',
    a: 'Oui. Nous proposons un service de debarras de chantier comprenant l\'evacuation des gravats, cartons, emballages et dechets lies aux travaux.',
  },
  {
    q: 'Proposez-vous du nettoyage de fin de chantier ?',
    a: 'Oui. Nous realisons la remise au propre avant livraison ou reception du chantier.',
  },
  {
    q: 'Proposez-vous des formations ?',
    a: 'Oui. En partenariat avec un centre de formation specialise, nous proposons des actions de sensibilisation et de prevention des risques dans le secteur du batiment.',
  },
  {
    q: 'Comment obtenir un devis ?',
    a: 'Il suffit de remplir le formulaire de demande de devis sur le site ou de nous contacter directement. Nous analysons votre besoin et vous proposons une solution adaptee.',
  },
] as const

export const interventionZones = [
  'Lyon', 'Annecy', 'Grenoble', 'Chambery',
  'Rhone', 'Isere', 'Savoie', 'Haute-Savoie',
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
  { label: 'Clients actifs', value: '50+' },
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
    company: 'Entreprise generale Rhone-Alpes',
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

export const highlightPhrases = [
  'Vos equipes sont payees pour construire, pas pour porter.',
  'Un chantier plus rapide est un chantier plus rentable.',
  'Moins de manutention, plus de production.',
  'Un chantier propre est un chantier plus efficace.',
  'La performance d\'un chantier passe aussi par la securite.',
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
    | 'servicesMaterialHandling'
    | 'homeHeroMain'
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
  callback: { label: 'Etre rappele rapidement', href: '/contact#callback' },
  pricing: { label: 'Voir nos tarifs', href: '/pricing' },
} as const
