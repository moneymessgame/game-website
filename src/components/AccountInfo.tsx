'use client';

import { useWallet } from '@/hooks/useWallet';
import { useBalance } from '@/hooks/useBalance';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { SUPPORTED_CHAINS } from '@/lib/config';
import { WalletAddress } from '@/components/WalletAddress';

export function AccountInfo() {
  const { address, chainId } = useWallet();
  const { balances, isLoading, error } = useBalance(address);

  if (!address) return null;

  const currentChain = SUPPORTED_CHAINS.find(chain => chain.chainId === chainId);
  if (!currentChain) return null;

  const balance = balances[chainId] || '0';
  const formattedBalance = (parseInt(balance) / Math.pow(10, currentChain.coinDecimals)).toFixed(6);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm text-muted-foreground">Network</div>
          <div className="font-medium">{currentChain.chainName}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Address</div>
          <WalletAddress 
            address={address} 
            truncate={false}
            size="sm"
          />
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Balance</div>
          {isLoading ? (
            <Skeleton className="h-6 w-24" />
          ) : error ? (
            <div className="text-sm text-destructive">{error}</div>
          ) : (
            <div className="text-2xl font-bold">
              {formattedBalance} {currentChain.coinDenom}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}