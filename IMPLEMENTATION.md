# Starter SaaS Template

Award-winning SaaS mockup template built with Next.js, NextAuth, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Authentication:** NextAuth v4
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animations:** Framer Motion
- **Fonts:** Geist Sans & Geist Mono

## Features

- 🔐 Authentication with role-based access control
- 👤 User Dashboard (protected routes)
- ⚙️ Admin Panel with user management
- 🎨 Award-winning landing page
- 📱 Responsive design
- 🌙 Dark mode support

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Demo Credentials

- **User:** `user@example.com` / `password` → Redirects to `/dashboard`
- **Admin:** `admin@example.com` / `password` → Redirects to `/admin`

## Project Structure

```
app/
├─ (marketing)/          # Public landing pages
│  ├─ page.tsx          # Homepage
│  ├─ pricing/page.tsx   # Pricing page
│  └─ layout.tsx
├─ auth/                # Authentication pages
│  ├─ login/page.tsx
│  ├─ register/page.tsx
│  └─ layout.tsx
├─ dashboard/           # User dashboard (USER role)
│  ├─ page.tsx
│  ├─ settings/page.tsx
│  └─ layout.tsx
├─ admin/              # Admin panel (ADMIN role)
│  ├─ page.tsx
│  ├─ users/page.tsx
│  └─ layout.tsx
└─ api/
   └─ auth/[...nextauth]/route.ts

components/
├─ ui/                 # shadcn/ui components
├─ marketing/          # Landing page sections
├─ dashboard/          # Dashboard components
├─ admin/              # Admin components
└─ shared/             # Shared components (Navbar, Footer)

lib/
├─ auth.ts            # NextAuth configuration
├─ roles.ts           # Role definitions & mock users
├─ session.ts         # Session helper
└─ utils.ts          # Utility functions
```

## User Zones

### 🌐 Public Zone (Marketing)
- Landing page with hero section
- Pricing page
- Public navigation

### 🔐 Auth Zone (Authentication)
- Login page with credential form
- Registration page
- Error handling and validation

### 💼 User Zone (Dashboard)
- Overview with metrics
- Settings page
- Protected by USER role

### ⚙️ Admin Zone (Admin Panel)
- System overview
- User management (CRUD operations)
- Protected by ADMIN role

## Design System

- Single spacing scale (4px base)
- shadcn/ui as base components
- Framer Motion for animations
- Dark mode enabled by default
- Consistent typography with Geist fonts

## Customization

### Update Mock Users
Edit `lib/roles.ts` to add or modify mock users:

```typescript
export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'Demo User',
    role: ROLES.USER,
  },
  // Add more users...
]
```

### Modify UI Components
All UI components are located in `components/ui/` and can be customized as needed.

### Update Styling
Edit `app/globals.css` to modify the design system variables.

## License

MIT License - Feel free to use this template for your projects.
