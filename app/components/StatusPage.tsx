import Image from 'next/image'
import type { ServiceGroup } from '../types'
import { ServiceGroupComponent } from './ServiceGroupComponent'
import { OverallStatus } from './OverallStatus'

interface StatusPageProps {
  title: string
  description?: string
  logo?: string
  groups: ServiceGroup[]
}

export function StatusPage({ title, description, logo, groups }: StatusPageProps) {
  const allServices = groups.flatMap(group => group.services)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {logo && (
                <Image 
                  src={logo} 
                  alt={title}
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              )}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {title}
              </h1>
            </div>
            
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium">
                Statut
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Maintenance
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                Incidents précédents
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {description && (
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        )}

        <OverallStatus services={allServices} />
        
        <div className="mt-12">
          {groups.map((group) => (
            <ServiceGroupComponent key={group.id} group={group} />
          ))}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Powered by Aether Status
          </div>
        </div>
      </footer>
    </div>
  )
}