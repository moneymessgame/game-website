'use client';

import { useWallet } from '@/hooks/useWallet';
import { ChainSelector } from '@/components/ChainSelector';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Wallet } from 'lucide-react';
import { useBalance } from '@/hooks/useBalance';
import { SUPPORTED_CHAINS } from '@/lib/config';
import { WalletAddress } from './WalletAddress';

export function UserProfile() {
  const { address, isConnected, disconnect, chainId } = useWallet();
  const { balances } = useBalance(address);

  if (!isConnected || !address) return null;

  const currentChain = SUPPORTED_CHAINS.find(chain => chain.chainId === chainId);
  if (!currentChain) return null;

  const balance = balances[chainId] || '0';
  const formattedBalance = (parseInt(balance) / Math.pow(10, currentChain.coinDecimals)).toFixed(6);
  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const avatarLetters = address.slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary/10">
              {avatarLetters}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-2">
            <div className="text-sm font-medium">Wallet</div>
            <div className="text-xs font-mono text-muted-foreground break-all">
						<WalletAddress 
            address={address} 
            truncate={false}
            size="sm"
          />
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Wallet className="mr-2 h-4 w-4" />
            <span className="flex-1">{formattedBalance} {currentChain.coinDenom}</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Connected as {shortAddress}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Network</DropdownMenuLabel>
        <div className="p-2">
          <ChainSelector />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="focus:text-red-600"
          onClick={() => disconnect()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Disconnect</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}