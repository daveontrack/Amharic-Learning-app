
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { AppFooter } from '@/components/layout/footer';

interface PageContainerProps {
  children: ReactNode;
  title?: string;
  titleAm?: string;
  className?: string;
}

export function PageContainer({ children, title, titleAm, className }: PageContainerProps) {
  return (
    <div className={cn("flex flex-col h-full")}> {/* Ensure PageContainer takes full height of its parent (main) */}
      <div className={cn("flex-grow space-y-6 px-4 sm:px-6 py-6", className)}>
        {(title || titleAm) && (
          <header className="pb-4 border-b text-center">
            {titleAm && <h1 className="text-3xl font-bold tracking-tight text-primary animate-in fade-in-0 slide-in-from-top-4 duration-500 ease-out" lang="am">{titleAm}</h1>}
            {title && <h2 className={cn(
              "text-xl text-muted-foreground animate-in fade-in-0 slide-in-from-top-4 duration-500 ease-out delay-100",
              titleAm ? 'mt-1' : 'text-3xl font-bold tracking-tight text-primary'
            )}>{title}</h2>}
          </header>
        )}
        {children}
      </div>
      <AppFooter />
    </div>
  );
}
