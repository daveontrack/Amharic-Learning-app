
"use client"; 

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BookText, SpellCheckIcon, LibraryIcon, Facebook, Linkedin, Twitter, Lightbulb, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { amharicDictionaryData } from '@/data/amharic-dictionary';
import type { AmharicDictionaryEntry } from '@/data/types';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [wordOfTheDay, setWordOfTheDay] = useState<AmharicDictionaryEntry | null>(null);
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const wordsWithEnglishEquivalents = amharicDictionaryData.filter(entry => !!entry.englishEquivalent);
    if (wordsWithEnglishEquivalents.length > 0) {
      // For client components, Math.random() is fine after hydration
      const randomIndex = Math.floor(Math.random() * wordsWithEnglishEquivalents.length);
      setWordOfTheDay(wordsWithEnglishEquivalents[randomIndex]);
    }
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback!",
      });
      setFeedback(''); // Clear the textarea
    } else {
      toast({
        title: "Empty Feedback",
        description: "Please write something before submitting.",
        variant: "destructive",
      });
    }
  };

  const featureCards = [
    { href: "/amharic-dictionary", icon: BookText, titleAm: "የአማርኛ መዝገበ ቃላት", descAm: "የአማርኛ ቃላትን ትርጉም፣ አጠቃቀም እና ምሳሌዎችን ይፈልጉ።", descEn: "Find definitions, usage, and examples of Amharic words." },
    { href: "/english-dictionary", icon: SpellCheckIcon, titleAm: "የእንግሊዝኛ መዝገበ ቃላት", descAm: "የእንግሊዝኛ ቃላትን ትርጉም፣ የንግግር ክፍሎች እና የአጠቃቀም ምሳሌዎችን ይፈልጉ።", descEn: "Look up English words for definitions, parts of speech, and examples." },
    { href: "/literature", icon: LibraryIcon, titleAm: "የአማርኛ ሥነ ጽሑፍ", descAm: "የተለያዩ የአማርኛ ሥነ-ጽሑፍ ሥራዎችን ያንብቡ እና ያስሱ።", descEn: "Read and explore various Amharic literary works." },
    { href: "/learning-channel", icon: YoutubeIcon, label: "Learning Channel", amharicLabel: "የቋንቋ መማሪያ ቻናል", descAm: "ቪዲዮዎችን እና ተጨማሪ መርጃዎችን ይመልከቱ።", descEn: "Watch videos and explore more resources." }
  ];

  return (
    <div className={cn(
      "container mx-auto py-8",
      "bg-animated-gradient-home" // Apply the animated background
    )}>
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4 animate-in fade-in-0 slide-in-from-top-10 duration-700 ease-out" lang="am">
          የአማርኛ መማሪያ
        </h1>
        <p className="text-xl text-foreground/80 animate-in fade-in-0 slide-in-from-top-10 duration-700 delay-100 ease-out" lang="am">
          ወደ አማርኛ ቋንቋ ዓለም እንኳን ደህና መጡ። መዝገበ ቃላትን ያስሱ፣ ሥነ ጽሑፍ ያንብቡ、 እና የእንግሊዝኛ ቃላትን ትርጉም ያግኙ።
        </p>
         <p className="text-lg text-muted-foreground mt-2 animate-in fade-in-0 slide-in-from-top-10 duration-700 delay-200 ease-out">
          Welcome to the world of Amharic. Explore dictionaries, read literature, and find English word definitions.
        </p>
      </header>

      {wordOfTheDay && (
        <div className="mb-12 flex justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out delay-300">
          <Card 
            className={cn(
              "w-full max-w-md shadow-lg bg-card border-primary/50 transition-all duration-300 ease-in-out",
              "hover:shadow-xl hover:scale-[1.03]"
            )}
          >
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <Lightbulb className="w-8 h-8 text-accent" />
              <div>
                <CardTitle className="text-xl text-primary" lang="am">የዕለቱ ቃል (Word of the Day)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-3xl font-semibold text-primary mb-1" lang="am">{wordOfTheDay.word}</h3>
              {wordOfTheDay.pronunciation && (
                <p className="text-sm text-accent mb-2" lang="am">[{wordOfTheDay.pronunciation}]</p>
              )}
              <p className="text-md text-foreground/90" lang="en">{wordOfTheDay.englishEquivalent}</p>
              <Link href="/amharic-dictionary" passHref>
                <Button variant="link" className="px-0 pt-2 text-sm text-primary hover:text-accent">
                  Read more in dictionary &rarr;
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {featureCards.map((item, index) => (
          <Link 
            href={item.href} 
            passHref 
            key={item.href}
            className={cn(
              // If this is the 4th item (index 3) in a list of 4 items,
              // and the grid is 3 columns on medium screens, start it in the 2nd column.
              index === 3 && featureCards.length === 4 ? 'md:col-start-2' : ''
            )}
          >
            <Card 
              className={cn(
                "transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] cursor-pointer h-full flex flex-col",
                "animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out bg-card shadow-md"
              )} 
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <item.icon className="w-10 h-10 text-accent" />
                <CardTitle className="text-2xl text-primary" lang="am">{item.titleAm || item.amharicLabel}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription lang="am">
                  {item.descAm}
                </CardDescription>
                <CardDescription className="mt-1 text-sm text-muted-foreground">
                  {item.descEn}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <footer className="text-center mt-12 py-6">
        <div className="max-w-xl mx-auto mb-6">
          <Label htmlFor="feedback-textarea" className="block text-left text-sm font-medium text-foreground mb-2" lang="am">
            አስተያየትዎን እዚህ ያስቀምጡ / Leave your feedback here:
          </Label>
          <form onSubmit={handleFeedbackSubmit} className="space-y-3">
            <Textarea
              id="feedback-textarea"
              placeholder="አስተያየትዎን ይጻፉ..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full"
              rows={3}
            />
            <Button type="submit" className="w-full sm:w-auto">
              <span lang="am">አስገባ</span> / Submit
            </Button>
          </form>
        </div>

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
    </div>
  );
}

