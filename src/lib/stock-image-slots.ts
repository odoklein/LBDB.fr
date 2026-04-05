export const stockImageSlots = {
  homeHeroMain: { label: 'Hero chantier principal', ratio: '16:10' },
  homeOpsDesk: { label: 'Pilotage operationnel', ratio: '16:10' },
  homeSafetyBrief: { label: 'Brief securite equipe', ratio: '16:10' },
  aboutTeam: { label: 'Equipe terrain LBDB', ratio: '4:3' },
  aboutCoordination: { label: 'Coordination chef de mission', ratio: '16:10' },
  aboutSiteVisit: { label: 'Visite chantier client', ratio: '16:10' },
  servicesMaterialHandling: { label: 'Dechargement materiaux', ratio: '4:3' },
  servicesRelocation: { label: 'Demenagement chantier', ratio: '4:3' },
  servicesCleaning: { label: 'Nettoyage fin de chantier', ratio: '4:3' },
  servicesPlanning: { label: 'Planification intervention', ratio: '16:10' },
  servicesExecution: { label: 'Execution terrain encadree', ratio: '16:10' },
  pricingBackground: { label: 'Planification chantier', ratio: '16:9' },
  pricingSimulation: { label: 'Simulation budget mission', ratio: '16:10' },
  pricingVisibility: { label: 'Visibilite couts chantier', ratio: '16:10' },
  contactHero: { label: 'Contact commercial BTP', ratio: '16:9' },
  contactFollowup: { label: 'Suivi client et activation', ratio: '16:10' },
  contactKickoff: { label: 'Kickoff mission chantier', ratio: '16:10' },
} as const

export type StockImageSlotId = keyof typeof stockImageSlots
