'use client';

import { Button } from '@/components/ui/button';
import { useWallet } from '@/hooks/useWallet';
import { Loader2, Wallet, LogOut } from 'lucide-react';
import {
  AlertDialog as AlertDialogComponent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function WalletConnect() {
  const { isConnected, isConnecting, connect, disconnect, error } = useWallet();

  return (
    <div className="flex flex-col items-center gap-4">
      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          {error}
        </div>
      )}
      
      {isConnected ? (
        <AlertDialogComponent>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Disconnect Wallet
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Disconnect Wallet</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to disconnect your wallet? This will clear all session data and return you to the home page.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={disconnect}>
                Disconnect
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogComponent>
      ) : (
        <Button 
          onClick={connect} 
          disabled={isConnecting}
          size="lg"
          className="px-8"
        >
          {isConnecting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wallet className="mr-2 h-4 w-4" />
          )}
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      )}
    </div>
  );
}