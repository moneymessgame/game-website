# MoneyMess Web3 Play2Earn Game

A stunning web site presenting a Play2Earn game **MoneyMess** built on blockchain technology for interacting with the Cosmos blockchain ecosystem. Built with Next.js 15, TypeScript, CosmJS, ShadCN UI, and Framer Motion.

## Key Features of the Application:

- 🔐 Secure Keplr wallet integration.
- 💰 Real-time balance tracking.
- 💸 Token transfer capabilities.
- ⚡ Lightning-fast performance.
- 🎨 Beautiful, responsive UI.
- ♿ Accessibility-first design.

## Key Features of the Game:

- **Play2Earn:** Complete tasks, join competitions, and earn cryptocurrency rewards.
- **Social Engagement:** Communicate, form teams, and develop strategies to achieve common goals.
- **Blockchain Technology:** Security and transparency of all transactions ensured by decentralized technologies.
- **Community Support:** The game evolves with the help of players who can make donations to support the project.

## Pages:

- **Home Page:** Overview of the game, key features, and the latest news.
- **First Season:** Special seasonal game content and tasks for participants.
- **About Us:** Information about the game's creators and the project's goals.
- **Donations:** An opportunity to support the project and contribute to its growth and development.
- **Roadmap:** A detailed overview of the game's development and future plans.
- **Wiki:**  A collection of articles, tutorials, and resources to help players understand the game and its features.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CosmJS](https://github.com/cosmos/cosmjs)
- [Keplr Wallet](https://www.keplr.app/)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/moneymessgame/game-website.git

# Install dependencies
pnpm install

# Set up environment variables
cp .env

# Start the development server
pnpm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_BASE_URL=https://moneymess.fun
NEXT_PUBLIC_BASE_DEVELOPERS_URL=https://kitpes.fun
NEXT_PUBLIC_GA_ID=G-5DVP4V26W8
NEXT_PUBLIC_CHAIN_ID=pion-1
NEXT_PUBLIC_RPC_ENDPOINT=https://rpc-palvus.pion-1.ntrn.tech
NEXT_PUBLIC_REST_ENDPOINT=https://rest-palvus.pion-1.ntrn.tech
NEXT_PUBLIC_DENOM=untrn
```

## Development

### Prerequisites

- Node.js 16.8 or later
- pnpm or yarn
- Keplr wallet browser extension


### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## API Documentation

### Wallet Integration

```typescript
import { useWallet } from '@/hooks/useWallet';

// Connect wallet
const { connect, disconnect, address } = useWallet();
```

### Transaction Operations

```typescript
import { sendTokens } from '@/lib/cosmos';

// Send tokens
await sendTokens(senderAddress, recipientAddress, amount, memo);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 


```bash
# Build for production
pnpm run build

# Preview production build
pnpm run start
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
