import { Service } from '../types'
import { StatusBadge } from './StatusBadge'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {service.name}
            </h3>
            <StatusBadge status={service.status} />
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {service.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
            <div className="flex items-center space-x-4">
              {service.uptime && (
                <span>{service.uptime}% uptime</span>
              )}
              {service.responseTime && (
                <span>{service.responseTime}ms</span>
              )}
            </div>
            <span>
              {new Date(service.lastChecked).toLocaleDateString('fr-FR')}
            </span>
          </div>
        </div>
      </div>
      
      {service.url && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            {service.url} →
          </a>
        </div>
      )}
    </div>
  )
}