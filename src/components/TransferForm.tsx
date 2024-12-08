'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useWallet } from '@/hooks/useWallet';
import { sendTokens } from '@/lib/cosmos';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const transferSchema = z.object({
  recipient: z.string().min(1, 'Recipient address is required'),
  amount: z.string().min(1, 'Amount is required'),
  memo: z.string().optional(),
});

export function TransferForm() {
  const { address } = useWallet();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  
  const form = useForm({
    resolver: zodResolver(transferSchema),
    defaultValues: {
      recipient: '',
      amount: '',
      memo: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof transferSchema>) => {
    if (!address) return;

    try {
      setIsSubmitting(true);
      const result = await sendTokens(
        address,
        data.recipient,
        data.amount,
        data.memo
      );
      
      const explorerUrl = `https://explorer.pion-1.ntrn.tech/transactions/${result.transactionHash}`;
      
      toast({
        title: 'Transfer successful',
        description: (
          <div className="mt-2 text-sm">
            <p>Transaction hash:</p>
            <a 
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs break-all text-blue-600 hover:text-blue-800"
            >
              {result.transactionHash}
            </a>
          </div>
        ),
      });
      
      form.reset();
      
      // Redirect to dashboard after successful transaction
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (error) {
      toast({
        title: 'Transfer failed',
        description: error instanceof Error ? error.message : 'Unknown error occurred',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!address) return null;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Send Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="recipient"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient Address</FormLabel>
                  <FormControl>
                    <Input placeholder="neutron1..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.000001"
                      placeholder="0.0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="memo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Memo (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter memo..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}