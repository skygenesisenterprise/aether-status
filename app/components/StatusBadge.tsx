import { ServiceStatus } from '../types'

interface StatusBadgeProps {
  status: ServiceStatus
  className?: string
}

const statusConfig = {
  operational: {
    label: 'Opérationnel',
    color: 'bg-green-500',
    textColor: 'text-green-700',
    borderColor: 'border-green-200'
  },
  degraded: {
    label: 'Dégradé',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-700',
    borderColor: 'border-yellow-200'
  },
  partial_outage: {
    label: 'Panne Partielle',
    color: 'bg-orange-500',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200'
  },
  major_outage: {
    label: 'Panne Majeure',
    color: 'bg-red-500',
    textColor: 'text-red-700',
    borderColor: 'border-red-200'
  },
  maintenance: {
    label: 'Maintenance',
    color: 'bg-blue-500',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200'
  }
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status as keyof typeof statusConfig]

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.textColor} ${config.borderColor} ${className}`}>
      <span className={`w-2 h-2 mr-1.5 rounded-full ${config.color}`} />
      {config.label}
    </span>
  )
}