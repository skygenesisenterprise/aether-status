import type { ServiceGroup } from '../types'
import { ServiceCard } from './ServiceCard'

interface ServiceGroupProps {
  group: ServiceGroup
}

export function ServiceGroupComponent({ group }: ServiceGroupProps) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {group.name}
        </h2>
        {group.description && (
          <p className="text-gray-600 dark:text-gray-400">
            {group.description}
          </p>
        )}
      </div>
      
      <div className="space-y-4">
        {group.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}