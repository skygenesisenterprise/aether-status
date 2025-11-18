import { StatusPage } from './components/StatusPage'
import type { ServiceGroup } from './types'

const mockGroups: ServiceGroup[] = [
  {
    id: '1',
    name: 'Infrastructure',
    description: 'Services d\'infrastructure de base',
    services: [
      {
        id: '1',
        name: 'Site Web',
        description: 'Site principal et application web',
        status: 'operational',
        url: 'https://example.com',
        group: 'Infrastructure',
        lastChecked: new Date(),
        uptime: 99.9,
        responseTime: 245
      },
      {
        id: '2',
        name: 'API',
        description: 'API REST pour les services',
        status: 'operational',
        url: 'https://api.example.com',
        group: 'Infrastructure',
        lastChecked: new Date(),
        uptime: 99.7,
        responseTime: 156
      }
    ]
  },
  {
    id: '2',
    name: 'Services',
    description: 'Services applicatifs',
    services: [
      {
        id: '3',
        name: 'Base de données',
        description: 'Base de données PostgreSQL principale',
        status: 'degraded',
        group: 'Services',
        lastChecked: new Date(),
        uptime: 98.5,
        responseTime: 423
      },
      {
        id: '4',
        name: 'Stockage',
        description: 'Service de stockage de fichiers',
        status: 'operational',
        url: 'https://storage.example.com',
        group: 'Services',
        lastChecked: new Date(),
        uptime: 99.8,
        responseTime: 189
      }
    ]
  }
]

export default function Home() {
  return (
    <StatusPage
      title="Aether Status"
      description="Plateforme de surveillance des services"
      groups={mockGroups}
    />
  )
}