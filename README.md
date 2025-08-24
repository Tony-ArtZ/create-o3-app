# create-o3-app

<div align="center">
  <h3>🫧 The hip, bleeding-edge cousin of T3 Stack 🫧</h3>
  <p>
    <strong>While T3 preaches "bleed responsibly," we say bleed ALL OVER THE PLACE</strong>
  </p>
  
  [![npm](https://img.shields.io/npm/v/create-o3-app)](https://www.npmjs.com/package/create-o3-app)
  [![license](https://img.shields.io/github/license/your-org/create-o3-app)](LICENSE)
  [![downloads](https://img.shields.io/npm/dm/create-o3-app)](https://npmjs.com/package/create-o3-app)
</div>

---

## 🆚 T3 vs O3

| Feature      | T3 Stack 🧘         | O3 Stack 🫧                                                         |
| ------------ | ------------------- | ------------------------------------------------------------------ |
| Philosophy   | Bleed responsibly   | Bleed everywhere                                                   |
| Tech choice  | Stable, proven      | Shiny, experimental                                                |
| Auth         | NextAuth/Auth.js    | BetterAuth or Auth.js                                              |
| API Layer    | tRPC                | oRPC                                                               |
| ORM          | Prisma              | Drizzle ORM                                                        |
| Validation   | Zod                 | ArkType                                                            |
| Runtime vibe | Safe & mindful      | YOLO, dopamine-first                                               |
| Motto        | "Bleed responsibly" | "If you're not bleeding everywhere, you're not trying hard enough" |

---

## 🚀 Get started

```bash
npx create-o3-app@latest
# or
pnpm dlx create-o3-app@latest
# or
yarn create o3-app
# or
bunx create-o3-app@latest
```

**That's it.** Follow the prompts and you'll have a bleeding-edge, type-safe, full-stack app in seconds.

---

## What is this?

The **O3 Stack** is T3's unhinged sibling. We took everything great about T3 and cranked it up to 11. Where T3 carefully selects proven technologies, we grab the coolest, newest, most exciting tools and smash them together into something beautiful.

**The Stack:**

- 🔥 **[oRPC](https://orpc.unnoq.com/)** - Because tRPC is so 2023
- 🛡️ **[BetterAuth](https://better-auth.com/)** or **[Auth.js](https://authjs.dev/)** - Your auth, your rules
- 🗄️ **[Drizzle ORM](https://orm.drizzle.team/)** - SQL that doesn't hate you
- ✅ **[ArkType](https://arktype.io/)** - Runtime validation that's actually fast
- ⚡ **[Next.js 15](https://nextjs.org/)** - Because we live on the bleeding edge
- 🗄️ **[NeonDB](https://neon.com/)** - Who has time to setup a Database ?

---

## Why O3?

**We love new shit.** That dopamine hit from trying cutting-edge tech? We're addicted. We don't wait for things to be "stable" or "production-ready" – we dive headfirst into the newest, most experimental tools and figure it out as we go.

**Type safety is non-negotiable.** From your database to your UI, every single piece talks to every other piece with perfect TypeScript inference. No `any` types. No runtime surprises. Just pure, beautiful type safety.

**Modularity by design.** Don't want auth? Skip it. Don't need a database? No problem. Every piece is optional, and the CLI generates exactly what you need.

---

## Usage

### Interactive (recommended)

```bash
npx create-o3-app@latest
# or pnpm dlx create-o3-app@latest
# or yarn create o3-app
# or bunx create-o3-app@latest
```

### Non-interactive

```bash
npx create-o3-app@latest \
  --project-name my-bleeding-edge-app \
  --auth better-auth \
  --drizzle-orm \
  --orpc \
  --git \
  --run-time bun
```

---

## Options

| Option / Flag               | Description               | Values                              | Default  |
| --------------------------- | ------------------------- | ----------------------------------- | -------- |
| `-n, --project-name <name>` | Project name              | Any string                          | `my-app` |
| `--auth <type>`             | Authentication method     | `authjs` \| `better-auth` \| `none` | `authjs` |
| `--drizzle-orm`             | Include Drizzle ORM       | (flag, no value)                    | `false`  |
| `--orpc`                    | Include oRPC              | (flag, no value)                    | `false`  |
| `--git`                     | Initialize Git repository | (flag, no value)                    | `false`  |
| `--docker`                  | Add Dockerfile            | (flag, no value)                    | `false`  |
| `--run-time <runtime>`      | Choose runtime            | `node` \| `pnpm` \| `bun` \| `yarn` | `node`   |

---

## What you get

🎯 **Next.js 15** with App Router and all the latest features  
🎨 **Tailwind CSS** because life's too short for custom CSS  
📝 **Full TypeScript** with strict mode enabled  
🔧 **Perfect tooling** - Biome, Prettier, everything configured

**Plus your selected goodies:**

- 🔐 **Authentication** with secure defaults and auto-generated secrets
- 🗄️ **Database** pre-configured NeonDB with type-safe queries and automatic migrations
- 📡 **oRPC** for type-safe client-server communication
- 🐳 **Docker** ready for deployment anywhere

---

## Examples

```bash
# Minimal setup - just Next.js + TypeScript
npx create-o3-app@latest --auth none --no-drizzle-orm --no-orpc

# Full-stack beast with everything
pnpm dlx create-o3-app@latest --auth better-auth --drizzle-orm --orpc --docker

# Quick prototype with Bun
bunx create-o3-app@latest --run-time bun --git
```

---

## Community & Support

- 🐛 **Found a bug?** [Open an issue](https://github.com/your-org/create-o3-app/issues)
- 💡 **Have an idea?** [Start a discussion](https://github.com/your-org/create-o3-app/discussions)
- 💬 **Need help?** [Join our Discord](https://discord.gg/your-invite)
- 🐦 **Follow updates** [@your_handle](https://twitter.com/your_handle)

---

## Contributing

We 💖 contributors! Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

Wanna add a new bleeding-edge tool to the stack? Open a PR. Found a newer, cooler alternative to something we're using? We want to hear about it.

---

## The O3 Philosophy

1. **Newer is better** - We don't wait for "production-ready"
2. **Types everywhere** - If it's not type-safe, it doesn't belong
3. **Developer happiness** - Tools should spark joy, not frustration
4. **Modular by default** - Use what you need, skip what you don't
5. **Community-driven** - The best ideas come from developers building real stuff

---

<div align="center">
  <strong>Ready to bleed?</strong>
  
  ```bash
  npx create-o3-app@latest
  # or pnpm dlx create-o3-app@latest
  # or yarn create o3-app
  # or bunx create-o3-app@latest
  ```
  
  Made with 🩸 and ❤️ by developers who can't stop trying new things
</div>
