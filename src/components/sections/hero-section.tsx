
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight } from 'lucide-react'; // Changed Download to FileText
import AnimatedBackground from '@/components/ui/animated-background';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src="https://i.ibb.co/nN0PVMGT/image.png"
            alt="Dynamic Avatar"
            width={160}
            height={160}
            className="rounded-full mb-8 border-4 border-primary shadow-lg"
            data-ai-hint="avatar image"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            <span className="text-primary">Crafting</span> Digital Experiences,
            <span className="text-accent block md:inline"> Blending Code & Creativity.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            I'm a Software Developer & UI/UX Designer passionate about building intuitive, engaging, and accessible web solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-accent/50 hover:shadow-lg">
              <a 
                href="/resume.pdf" 
                aria-label="View my resume" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Resume
                <FileText className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group transition-all duration-300 ease-in-out hover:border-accent hover:text-accent">
              <Link href="#projects" aria-label="View my projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
