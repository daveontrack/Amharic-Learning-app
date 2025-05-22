
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SearchForm } from '@/components/search-form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { EnglishDictionaryEntry } from '@/data/types';
import { cn } from "@/lib/utils";
import { YoutubeIcon, Volume2Icon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface EnglishDictionaryClientProps {
  initialEntries: EnglishDictionaryEntry[];
}

export default function EnglishDictionaryClient({ initialEntries }: EnglishDictionaryClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<EnglishDictionaryEntry[]>([]);
  const englishChannelUrl = "https://www.youtube.com/@marakienglishwithabi8159";
  const { toast } = useToast();

  const handleSearch = (term: string) => {
    const lowercasedTerm = term.toLowerCase();
    setSearchTerm(lowercasedTerm); 
    
    const trimmedSearch = lowercasedTerm.trim();
    if (!trimmedSearch) {
      setSearchResults([]); 
      return;
    }
    const results = initialEntries.filter(entry =>
      entry.word.toLowerCase().includes(trimmedSearch) ||
      entry.definitions.some(def => 
        def.definition.toLowerCase().includes(trimmedSearch) ||
        (def.example && def.example.toLowerCase().includes(trimmedSearch)) ||
        (def.synonyms && def.synonyms.some(s => s.toLowerCase().includes(trimmedSearch)))
      ) ||
      (entry.pronunciation && entry.pronunciation.toLowerCase().includes(trimmedSearch)) ||
      (entry.amharicEquivalent && entry.amharicEquivalent.toLowerCase().includes(trimmedSearch))
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
        <h3 className="text-lg font-semibold text-primary mb-2">English Learning Channel</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Explore the 'Maraki English with Abi' YouTube channel for helpful English learning videos and content.
        </p>
        <Button asChild variant="outline">
          <Link href={englishChannelUrl} target="_blank" rel="noopener noreferrer">
            <YoutubeIcon className="mr-2 h-5 w-5 text-red-600" />
            Visit Maraki English Channel
          </Link>
        </Button>
      </div>

      <SearchForm 
        onSearch={handleSearch} 
        placeholder="Enter an English word..."
        searchButtonText="Search"
        searchButtonTextAm="ፈልግ"
      />

      {effectiveSearchTerm && displayedResults.length === 0 && (
        <p className="text-center text-muted-foreground">
          No results found for "{effectiveSearchTerm}".
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
                <CardTitle className="text-2xl text-primary">{entry.word}</CardTitle>
                <div className="flex items-center gap-2">
                  <CardDescription className="text-sm text-accent italic">
                    {entry.partOfSpeech} {entry.pronunciation && `[${entry.pronunciation}]`}
                  </CardDescription>
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
                {entry.amharicEquivalent && (
                  <CardDescription className="text-xs text-muted-foreground mt-1" lang="am">
                    (አማርኛ: {entry.amharicEquivalent})
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {entry.definitions.map((def, i) => (
                  <div key={i}>
                    <p className="text-foreground">{i + 1}. {def.definition}</p>
                    {def.example && (
                      <p className="text-sm text-foreground/80 italic ml-4">e.g., "{def.example}"</p>
                    )}
                    {def.synonyms && def.synonyms.length > 0 && (
                      <div className="mt-1 ml-4">
                        <span className="text-xs font-semibold text-muted-foreground">Synonyms: </span>
                        {def.synonyms.map(s => <Badge key={s} variant="outline" className="text-xs mr-1">{s}</Badge>)}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
