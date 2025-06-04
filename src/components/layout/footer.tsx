export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} MykelFolio. All rights reserved.</p>
        <p className="mt-1">Crafted with Next.js, Tailwind CSS, and a blend of code & design.</p>
      </div>
    </footer>
  );
}
