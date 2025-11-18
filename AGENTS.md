# Agent Guidelines for aether-status

## Build Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- No test framework configured yet

## Code Style Guidelines

### Imports & Formatting
- Use absolute imports with `@/` prefix (configured in tsconfig.json)
- Import React components before other imports
- Use `import type` for type-only imports
- Follow Next.js App Router conventions

### TypeScript
- Strict mode enabled
- Use `Readonly<>` for props interfaces
- Prefer `React.ReactNode` for children prop type
- Use `Metadata` type from Next.js for metadata

### Styling
- Use Tailwind CSS v4 with CSS variables
- Dark mode support via `prefers-color-scheme`
- Use semantic color tokens: `background`, `foreground`
- Font variables: `--font-geist-sans`, `--font-geist-mono`

### Component Structure
- Use default exports for pages and layouts
- Follow Next.js App Router file structure
- Use className prop for styling
- Include proper alt text for images

### Error Handling
- ESLint configured with Next.js core web vitals and TypeScript rules
- No specific error handling patterns established yet