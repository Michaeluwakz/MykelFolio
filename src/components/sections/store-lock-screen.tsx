
'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LockKeyhole, ShieldCheck } from 'lucide-react';

interface StoreLockScreenProps {
  onUnlockAttempt: (password: string) => void;
}

export default function StoreLockScreen({ onUnlockAttempt }: StoreLockScreenProps) {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    onUnlockAttempt(password);
    // Reset submitting state after a short delay to allow toast to appear
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="py-16 md:py-24 flex items-center justify-center min-h-[calc(100vh-8rem)] bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="w-full max-w-md shadow-xl border-primary/20 rounded-xl overflow-hidden">
          <CardHeader className="text-center bg-card p-8">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-6 shadow-lg ring-4 ring-primary/30">
              <LockKeyhole className="h-10 w-10" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold">Exclusive Access</CardTitle>
            <CardDescription className="text-base text-muted-foreground mt-2">
              Enter the password to unlock the private app store.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-base h-12 px-4 rounded-md focus:ring-2 focus:ring-primary"
                  placeholder="Enter access code"
                  aria-describedby="password-hint"
                />
                <p id="password-hint" className="text-xs text-muted-foreground pt-1">Hint: The password is "firebase".</p>
              </div>
            </CardContent>
            <CardFooter className="p-8 bg-secondary/20">
              <Button type="submit" className="w-full h-12 text-lg" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <ShieldCheck className="mr-2 h-5 w-5 animate-pulse" /> Verifying...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="mr-2 h-5 w-5" /> Unlock Store
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
