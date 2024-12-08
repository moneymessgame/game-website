'use client';

import { useTransactions } from '@/hooks/useTransactions';
import { useWallet } from '@/hooks/useWallet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CHAIN_CONFIG } from '@/lib/config';
import { formatDistanceToNow } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { WalletAddress } from '@/components/WalletAddress';

export function TransactionList() {
  const { address } = useWallet();
  const { transactions, isLoading, error } = useTransactions(address);

  if (!address) return null;

  if (error) {
    return (
      <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
        {error}
      </div>
    );
  }

  const formatAmount = (amount: string) => {
    const value = parseInt(amount) / Math.pow(10, CHAIN_CONFIG.coinDecimals);
    return `${value.toFixed(6)} ${CHAIN_CONFIG.coinDenom}`;
  };

  const getExplorerUrl = (hash: string) => {
    return `https://explorer.pion-1.ntrn.tech/transactions/${hash}`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        ) : transactions.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No transactions found
          </p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Hash</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx) => (
                  <TableRow key={tx.hash}>
                    <TableCell className="whitespace-nowrap">
                      {formatDistanceToNow(new Date(tx.timestamp), { addSuffix: true })}
                    </TableCell>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatAmount(tx.amount)}
                    </TableCell>
                    <TableCell>
                      <WalletAddress 
                        address={tx.from} 
                        showCopyButton={false}
                        size="sm"
                      />
                    </TableCell>
                    <TableCell>
                      <WalletAddress 
                        address={tx.to}
                        showCopyButton={false}
                        size="sm"
                      />
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          tx.status === 'success'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}
                      >
                        {tx.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <WalletAddress 
                        address={tx.hash}
                        size="sm"
                      />
                    </TableCell>
                    <TableCell>
                      <a
                        href={getExplorerUrl(tx.hash)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}