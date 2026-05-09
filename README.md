# Dating App

A modern React Native dating app built with Expo, featuring a clean architecture and scalable structure.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Expo](https://expo.dev) + [Expo Router](https://expo.github.io/router) | Framework & file-based routing |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) | Form handling & validation |
| [Zustand](https://zustand-demo.pmnd.rs) | Global state management |
| [@expo/vector-icons](https://icons.expo.fyi) | Icons |

## Project Structure

```
Dating-APP/
├── app/                        # Expo Router file-based routes
│   ├── _layout.tsx             # Root layout (StatusBar, navigation shell)
│   ├── index.tsx               # Entry redirect (auth check)
│   ├── (auth)/                 # Unauthenticated routes
│   │   ├── _layout.tsx
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   └── (tabs)/                 # Authenticated tab routes
│       ├── _layout.tsx
│       ├── index.tsx           # Discover screen
│       ├── matches.tsx         # Matches & chat screen
│       └── profile.tsx         # User profile & sign-out
│
├── src/
│   ├── components/
│   │   └── ui/                 # Shared UI primitives (Button, TextInput)
│   ├── constants/
│   │   └── theme.ts            # Design tokens (colors, spacing, fonts)
│   ├── screens/
│   │   └── auth/               # Screen components (logic lives here)
│   │       ├── SignInScreen.tsx
│   │       └── SignUpScreen.tsx
│   ├── store/
│   │   └── authStore.ts        # Zustand auth store
│   ├── types/
│   │   └── auth.ts             # TypeScript interfaces
│   └── utils/
│       └── validation.ts       # Zod schemas for forms
│
├── assets/images/              # App icons & splash screen images
├── app.json                    # Expo config
├── babel.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- iOS Simulator (Mac) or Android Emulator, or the [Expo Go](https://expo.dev/client) app
- Any modern browser (for web)

### Installation

```bash
npm install
```

### Running the App

```bash
# Start dev server (choose platform from the menu)
npm start

# iOS simulator
npm run ios

# Android emulator
npm run android

# Browser (web)
npm run web
```

### Code Quality

```bash
# TypeScript type check
npm run type-check

# Lint
npm run lint
```

## Architecture Decisions

### Expo Router (file-based routing)
Routes live in `app/`. Route groups `(auth)` and `(tabs)` organize screens without affecting the URL. The root `index.tsx` redirects to the correct group based on auth state.

### Screen / Route separation
Route files in `app/` are thin — they just re-export the actual screen component from `src/screens/`. This keeps business logic in `src/` and makes screens testable independently of routing.

### State management
Zustand is used for global state. Auth state is the first store; add more stores in `src/store/` as needed.

### Form validation
React Hook Form + Zod. Schemas live in `src/utils/validation.ts` and are reused between the form resolver and any future API layer.

### Alias paths
`@/` maps to `src/` via `tsconfig.json` and `babel.config.js`. Always import from `@/` instead of relative `../../` paths.

## Roadmap

- [ ] Real API integration (replace mock `setTimeout` in auth screens)
- [ ] Persistent auth token (SecureStore)
- [ ] Profile card swipe (Discover screen)
- [ ] Real-time chat (Matches screen)
- [ ] Push notifications
- [ ] Photo upload
- [ ] Profile completion flow
