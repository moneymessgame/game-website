'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface WalletAddressProps {
  address: string;
  truncate?: boolean;
  className?: string;
  showCopyButton?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function WalletAddress({
  address,
  truncate = true,
  className,
  showCopyButton = true,
  size = 'md',
}: WalletAddressProps) {
  const [copied, setCopied] = useState(false);

  const displayAddress = truncate
    ? `${address.slice(0, 8)}...${address.slice(-8)}`
    : address;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <code className={cn(
              'font-mono bg-muted px-2 py-1 rounded',
              sizeClasses[size]
            )}>
              {displayAddress}
            </code>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-mono text-xs">{address}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {showCopyButton && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="sr-only">Copy address</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? 'Copied!' : 'Copy address'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}