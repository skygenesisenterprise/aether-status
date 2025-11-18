import type { ServiceGroup } from '../types'
import { ServiceCard } from './ServiceCard'

interface ServiceGroupProps {
  group: ServiceGroup
}

export function ServiceGroup({ group }: ServiceGroupProps) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {group.name}
        </h2>
        {group.description && (
          <p className="text-gray-600 dark:text-gray-400">
            {group.description}
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {group.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}