
<div align="center">

# Aether Status

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Build Status](https://img.shields.io/github/workflow/status/your-org/aether-status/CI)
![Coverage](https://img.shields.io/codecov/c/github/your-org/aether-status)

A modern, open-source status and monitoring platform for modern infrastructures. Built with Next.js and designed to provide real-time insights into your service health.

</div>

## 🚀 Features

- **Real-time Monitoring**: Track service status with automatic health checks
- **Beautiful Dashboard**: Clean, responsive interface inspired by modern status pages
- **Service Groups**: Organize services into logical groups for better management
- **Historical Data**: View uptime statistics and incident history
- **Dark Mode**: Full dark mode support with system preference detection
- **TypeScript**: Fully typed for better development experience
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with CSS variables
- **Backend**: Rust API (planned)
- **Deployment**: Vercel, Docker support

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/aether-status.git
cd aether-status
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
aether-status/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── OverallStatus.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGroup.tsx
│   │   ├── StatusBadge.tsx
│   │   └── StatusPage.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── api/                    # Rust API backend
├── public/                 # Static assets
└── .storybook/            # Storybook configuration
```

## 🎯 Core Components

### Service Status Types
- `operational`: Service is running normally
- `degraded`: Service is running with performance issues
- `partial_outage`: Some functionality is unavailable
- `major_outage`: Service is completely down
- `maintenance`: Service is under maintenance

### Key Components

- **StatusPage**: Main dashboard component
- **OverallStatus**: Global status indicator
- **ServiceGroup**: Groups of related services
- **ServiceCard**: Individual service status display
- **StatusBadge**: Status indicator with color coding

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_REFRESH_INTERVAL=30000
```

### Service Configuration

Services are configured through the API. Each service requires:

```typescript
{
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
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Docker

```bash
# Build the image
docker build -t aether-status .

# Run the container
docker run -p 3000:3000 aether-status
```

### Manual Build

```bash
pnpm build
pnpm start
```

## 📊 API Integration

The frontend is designed to work with a REST API that provides:

- `GET /api/services`: List all services
- `GET /api/services/:id`: Get service details
- `GET /api/incidents`: List recent incidents
- `GET /api/status`: Get overall system status

## 🎨 Customization

### Theming

The application uses CSS variables for theming. Override these in your CSS:

```css
:root {
  --primary-color: #3b82f6;
  --background: #ffffff;
  --foreground: #000000;
}
```

### Logo and Branding

Update the logo and branding in the `StatusPage` component:

```tsx
<StatusPage
  title="Your Status Page"
  description="Monitor your services"
  logo="/your-logo.png"
  groups={serviceGroups}
/>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `pnpm lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern status pages like [Better Stack](https://betterstack.com/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons and design patterns from the open-source community

## 📞 Support

- 📧 Email: support@aether-status.com
- 🐛 Issues: [GitHub Issues](https://github.com/skygenesisenterprise/aether-status/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/skygenesisenterprise/aether-status/discussions)

---


<div align="center">

**Aether Status** - Keeping your services transparent and reliable. 🚀

</div>