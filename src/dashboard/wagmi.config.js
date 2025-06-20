import { createConfig, http } from 'wagmi'
import { bsc,bscTestnet} from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [bscTestnet], // Add your preferred chains
  connectors: [
    injected({
      target: 'metaMask', // Explicitly target MetaMask
    }),
  ],
  transports: {
    [bscTestnet.id]: http(),
    // [bsc.id]: http(),
  },
})