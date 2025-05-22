
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SearchForm } from '@/components/search-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { AmharicDictionaryEntry } from '@/data/types';
import { cn } from "@/lib/utils";
import { YoutubeIcon, Volume2Icon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AmharicDictionaryClientProps {
  initialEntries: AmharicDictionaryEntry[];
}

export default function AmharicDictionaryClient({ initialEntries }: AmharicDictionaryClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<AmharicDictionaryEntry[]>([]);
  const amharicChannelUrl = "https://www.youtube.com/@marakienglishwithabi8159";
  const { toast } = useToast();

  const handleSearch = (term: string) => {
    const lowercasedTerm = term.toLowerCase().trim();
    setSearchTerm(lowercasedTerm); 
    
    if (!lowercasedTerm) {
      setSearchResults([]); 
      return;
    }
    const results = initialEntries.filter(entry =>
      entry.word.toLowerCase().includes(lowercasedTerm) ||
      entry.definition.toLowerCase().includes(lowercasedTerm) ||
      (entry.englishEquivalent && entry.englishEquivalent.toLowerCase().includes(lowercasedTerm)) ||
      (entry.pronunciation && entry.pronunciation.toLowerCase().includes(lowercasedTerm)) ||
      (entry.relatedWords && entry.relatedWords.some(rw => rw.toLowerCase().includes(lowercasedTerm)))
    );
    setSearchResults(results);
  };

  const displayedResults = useMemo(() => {
    const effectiveSearchTerm = searchTerm.trim();
    return effectiveSearchTerm ? searchResults : initialEntries;
  }, [searchTerm, searchResults, initialEntries]);

  const effectiveSearchTerm = searchTerm.trim();

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.error("Error playing audio:", error);
      toast({
        title: "Audio Error",
        description: "Could not play audio. Please ensure the audio file exists and the URL is correct.",
        variant: "destructive",
      });
    });
  };

  return (
    <div className="space-y-6">
      <div className="mb-6 p-4 border rounded-lg bg-card shadow">
        <h3 className="text-lg font-semibold text-primary mb-2" lang="am">የቋንቋ መማሪያ ቻናል</h3>
        <p className="text-sm text-muted-foreground mb-3" lang="am">
          ለተጨማሪ የመማሪያ ቪዲዮዎች እና ይዘቶች ይህን የዩቲዩብ ቻናል ይጎብኙ።
        </p>
        <Button asChild variant="outline">
          <Link href={amharicChannelUrl} target="_blank" rel="noopener noreferrer">
            <YoutubeIcon className="mr-2 h-5 w-5 text-red-600" />
            <span lang="am">የዩቲዩብ ቻናል ይጎብኙ</span>
          </Link>
        </Button>
      </div>

      <SearchForm 
        onSearch={handleSearch} 
        placeholder="የአማርኛ ቃል ያስገቡ..."
        searchButtonText="Search"
        searchButtonTextAm="ፈልግ"
      />

      {effectiveSearchTerm && displayedResults.length === 0 && (
        <p className="text-center text-muted-foreground" lang="am">
          "{effectiveSearchTerm}" ለሚለው ፍለጋ ምንም ውጤት አልተገኘም።
        </p>
      )}

      <ScrollArea className="h-[calc(100vh-25rem)]">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {displayedResults.map((entry, index) => (
            <Card 
              key={entry.id} 
              className={cn(
                "flex flex-col animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out",
                "shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out bg-card"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary" lang="am">{entry.word}</CardTitle>
                {(entry.pronunciation || entry.audioUrl) && (
                  <div className="flex items-center gap-2">
                    {entry.pronunciation && (
                      <CardDescription className="text-sm text-accent" lang="am">አጠራር: [{entry.pronunciation}]</CardDescription>
                    )}
                    {entry.audioUrl && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-primary hover:text-accent"
                        onClick={() => playAudio(entry.audioUrl!)}
                        aria-label={`Listen to pronunciation of ${entry.word}`}
                      >
                        <Volume2Icon className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                )}
                {entry.englishEquivalent && (
                  <CardDescription className="text-xs text-muted-foreground mt-1" lang="en">
                    (English: {entry.englishEquivalent})
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground" lang="am">{entry.definition}</p>
                {entry.exampleSentences && entry.exampleSentences.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1" lang="am">ምሳሌዎች:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      {entry.exampleSentences.map((ex, i) => (
                        <li key={i} className="text-sm text-foreground/80" lang="am">{ex}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              {entry.relatedWords && entry.relatedWords.length > 0 && (
                <CardFooter className="flex flex-wrap gap-2 pt-4 border-t">
                  {entry.relatedWords.map(word => (
                    <Badge key={word} variant="secondary" className="text-xs" lang="am">{word}</Badge>
                  ))}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
