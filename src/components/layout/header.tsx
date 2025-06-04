
import Link from 'next/link';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import { CodeXml, Store as StoreIcon, LayoutGrid, BrainCircuit, MessageSquare } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: "/#projects", label: "Projects", Icon: LayoutGrid },
    { href: "/#skills", label: "Skills", Icon: BrainCircuit },
    { href: "/#contact", label: "Contact", Icon: MessageSquare },
    { href: "/store", label: "Store", Icon: StoreIcon, isPrimary: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl font-sans text-foreground">MykelFolio</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map(({ href, label, Icon, isPrimary }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md flex items-center
                ${isPrimary 
                  ? 'text-primary bg-primary/10 hover:bg-primary/20' 
                  : 'text-muted-foreground hover:text-primary hover:bg-accent/50'}`}
            >
              <Icon className="mr-2 h-4 w-4" /> {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center">
          <ThemeToggleButton />
          {/* Mobile Menu Trigger (optional, for future enhancement) */}
          {/* <Button variant="ghost" size="icon" className="md:hidden ml-2"> <Menu className="h-5 w-5" /> </Button> */}
        </div>
      </div>
    </header>
  );
}
