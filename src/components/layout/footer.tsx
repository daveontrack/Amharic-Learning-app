
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export function AppFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center mt-auto py-6 bg-background">
      <div className="flex justify-center space-x-6 mb-4">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
          <Facebook className="h-6 w-6" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter className="h-6 w-6" />
        </Link>
      </div>
      <p className="text-muted-foreground" lang="am">
        © {currentYear} ዳዊት መንገሻ. ሁሉም መብቶች የተጠበቁ ናቸው።
      </p>
    </footer>
  );
}
