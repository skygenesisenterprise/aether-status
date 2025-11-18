import { ServiceStatus } from '../types'

interface OverallStatusProps {
  services: Array<{ status: ServiceStatus }>
}

export function OverallStatus({ services }: OverallStatusProps) {
  const getStatusCounts = () => {
    const counts = {
      operational: 0,
      degraded: 0,
      partial_outage: 0,
      major_outage: 0,
      maintenance: 0
    }
    
    services.forEach(service => {
      counts[service.status]++
    })
    
    return counts
  }

  const counts = getStatusCounts()
  const totalServices = services.length
  
  const getOverallStatus = (): ServiceStatus => {
    if (counts.major_outage > 0) return 'major_outage'
    if (counts.partial_outage > 0) return 'partial_outage'
    if (counts.degraded > 0) return 'degraded'
    if (counts.maintenance > 0 && counts.maintenance === totalServices) return 'maintenance'
    return 'operational'
  }

  const overallStatus = getOverallStatus()
  
  const statusMessages = {
    operational: 'Tous les services sont en ligne',
    degraded: 'Certains services sont dégradés',
    partial_outage: 'Panne partielle détectée',
    major_outage: 'Panne majeure en cours',
    maintenance: 'Maintenance en cours'
  }

  return (
    <div className="text-center py-8">
      <div className="mb-4">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
          overallStatus === 'operational' ? 'bg-green-100' :
          overallStatus === 'degraded' ? 'bg-yellow-100' :
          overallStatus === 'partial_outage' ? 'bg-orange-100' :
          overallStatus === 'major_outage' ? 'bg-red-100' :
          'bg-blue-100'
        }`}>
          <div className={`w-8 h-8 rounded-full ${
            overallStatus === 'operational' ? 'bg-green-500' :
            overallStatus === 'degraded' ? 'bg-yellow-500' :
            overallStatus === 'partial_outage' ? 'bg-orange-500' :
            overallStatus === 'major_outage' ? 'bg-red-500' :
            'bg-blue-500'
          }`} />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {statusMessages[overallStatus]}
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400">
        {totalServices} service{totalServices > 1 ? 's' : ''} surveillé{totalServices > 1 ? 's' : ''}
      </p>
    </div>
  )
}