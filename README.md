# Starter SaaS Template

Award-winning SaaS mockup template built with Next.js, NextAuth, and shadcn/ui.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- 🔐 **Authentication** with role-based access control (USER/ADMIN)
- 👤 **User Dashboard** with analytics and settings
- ⚙️ **Admin Panel** with user management and system controls
- 🎨 **Award-winning landing page** with smooth animations
- 📱 **Fully responsive** design
- 🌙 **Dark mode** enabled by default
- ⚡ **Fast performance** with Next.js 16 App Router
- 🎯 **Type-safe** with full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm, npm, or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mockup-template

# Install dependencies
pnpm install
# or
npm install
# or
yarn install

# Run development server
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Demo Credentials

### Quick Login

Just click the buttons on the login page - no typing needed!

| Role    | Email               | Password | Redirect To |
|---------|---------------------|----------|-------------|
| User    | user@example.com    | password | `/dashboard` |
| Admin   | admin@example.com   | password | `/admin`    |

## 📁 Project Structure

```
mockup-template/
├── app/
│   ├── (marketing)/          # Public landing pages
│   │   ├── page.tsx         # Homepage
│   │   ├── pricing/page.tsx  # Pricing page
│   │   └── layout.tsx
│   ├── auth/                # Authentication pages
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── dashboard/           # User dashboard (USER role)
│   │   ├── page.tsx
│   │   ├── analytics/page.tsx
│   │   ├── settings/page.tsx
│   │   └── layout.tsx
│   ├── admin/              # Admin panel (ADMIN role)
│   │   ├── page.tsx
│   │   ├── users/page.tsx
│   │   ├── settings/page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   └── auth/[...nextauth]/route.ts
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css
│
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── marketing/          # Landing page sections
│   ├── dashboard/          # Dashboard components
│   ├── admin/              # Admin components
│   └── shared/             # Shared components (Navbar, Footer, Providers)
│
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── roles.ts           # Role definitions & mock users
│   ├── session.ts         # Session helper
│   └── utils.ts           # Utility functions
│
└── public/                # Static assets
```

## 🏗️ Architecture

### User Zones

#### 🌐 Public Zone (Marketing)
- Landing page with hero section
- Pricing page with 3 tiers
- Public navigation with Navbar & Footer

#### 🔐 Auth Zone (Authentication)
- Login page with quick-login buttons
- Registration page
- Role-based redirect after login

#### 💼 User Zone (Dashboard)
- Overview with metrics
- Analytics page with charts
- Settings page for profile management
- Protected by USER role

#### ⚙️ Admin Zone (Admin Panel)
- System overview with health metrics
- User management with CRUD operations
- Admin settings page
- Protected by ADMIN role

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Authentication:** NextAuth v4
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animations:** Framer Motion
- **Fonts:** Geist Sans & Geist Mono
- **Language:** TypeScript

## 🎨 Design System

- Single spacing scale (4px base)
- shadcn/ui as base components
- Framer Motion for animations
- Dark mode enabled by default
- Consistent typography with Geist fonts

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
```

Generate a secure secret:
```bash
openssl rand -base64 32
```

### Mock Users

Edit `lib/roles.ts` to add or modify mock users:

```typescript
export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'Demo User',
    role: ROLES.USER,
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Admin User',
    role: ROLES.ADMIN,
  },
  // Add more users...
]
```

## 🔧 Customization

### Update UI Components

All UI components are located in `components/ui/` and can be customized as needed.

### Modify Styling

Edit `app/globals.css` to modify the design system variables (colors, spacing, etc.).

### Update Landing Page

Edit `app/page.tsx` to change the hero section, features, or CTAs.

## 📦 Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run type checking
pnpm tsc --noEmit

# Run linting
pnpm lint
```

### Deployment

This template works great on:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- Any Node.js hosting platform

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth Documentation](https://next-auth.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - Feel free to use this template for your projects.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the beautiful UI components
- [Next.js](https://nextjs.org) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework

---

Made with ❤️ using Next.js & shadcn/ui
