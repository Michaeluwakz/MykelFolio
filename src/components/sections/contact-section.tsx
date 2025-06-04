
"use client";

import { SOCIAL_LINKS_DATA } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm active on several platforms. Follow me or send a direct message!
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-md space-y-6 p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary text-center">Connect with Me</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {SOCIAL_LINKS_DATA.map(link => (
                <Button key={link.name} variant="outline" size="icon" asChild className="transition-colors hover:border-primary hover:text-primary">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Connect on ${link.name}`}>
                    <link.Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
             <div className="mt-8 pt-6 border-t text-center">
              <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
              <p className="text-muted-foreground">
                <strong>Email:</strong> Michaeluwakz23@gmail.com <br />
                <strong>Location:</strong> REMOTE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
