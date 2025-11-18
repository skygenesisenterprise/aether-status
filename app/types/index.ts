export type ServiceStatus = 'operational' | 'degraded' | 'partial_outage' | 'major_outage' | 'maintenance'

export interface Service {
  id: string
  name: string
  description: string
  status: ServiceStatus
  url?: string
  group?: string
  lastChecked: Date
  responseTime?: number
  uptime?: number
}

export interface ServiceGroup {
  id: string
  name: string
  description?: string
  services: Service[]
}

export interface StatusHistory {
  id: string
  serviceId: string
  status: ServiceStatus
  timestamp: Date
  message?: string
}

export interface Incident {
  id: string
  title: string
  description: string
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
  severity: 'low' | 'medium' | 'high' | 'critical'
  services: string[]
  createdAt: Date
  updatedAt: Date
  updates: IncidentUpdate[]
}

export interface IncidentUpdate {
  id: string
  message: string
  timestamp: Date
}

export interface StatusPage {
  id: string
  title: string
  description: string
  logo?: string
  theme: {
    primaryColor: string
    backgroundColor: string
    textColor: string
  }
  groups: ServiceGroup[]
  incidents: Incident[]
}