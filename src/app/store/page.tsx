
'use client';

import { useState, useEffect } from 'react';
import StoreLockScreen from '@/components/sections/store-lock-screen';
import StoreContentScreen from '@/components/sections/store-content-screen';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const CORRECT_PASSWORD = 'firebase'; // Demo password

export default function StorePage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already unlocked from session storage
    const unlockedStatus = sessionStorage.getItem('storeUnlocked');
    if (unlockedStatus === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleUnlockAttempt = (password: string) => {
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      sessionStorage.setItem('storeUnlocked', 'true');
      toast({
        title: 'Access Granted',
        description: 'Welcome to the exclusive app store!',
        variant: 'default',
      });
    } else {
      toast({
        title: 'Access Denied',
        description: 'Incorrect password. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col justify-center items-center min-h-[calc(100vh-8rem)]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Loading access portal...</p>
      </div>
    );
  }

  if (!isUnlocked) {
    return <StoreLockScreen onUnlockAttempt={handleUnlockAttempt} />;
  }

  return <StoreContentScreen />;
}
