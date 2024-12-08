'use client';

import { useWallet } from '@/hooks/useWallet';
import { SUPPORTED_CHAINS } from '@/lib/config';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ChainSelector() {
  const { chainId, setChain } = useWallet();

  return (
    <Select value={chainId} onValueChange={setChain}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Chain" />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_CHAINS.map((chain) => (
          <SelectItem key={chain.chainId} value={chain.chainId}>
            {chain.chainName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}