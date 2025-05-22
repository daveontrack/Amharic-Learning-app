
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SearchForm } from '@/components/search-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import type { LiteratureItem } from '@/data/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from "@/lib/utils";

function getLiteratureTypeName(type: LiteratureItem['type']): string {
  switch (type) {
    case 'poem': return 'ግጥም (Poem)';
    case 'short_story': return 'አጭር ታሪክ (Short Story)';
    case 'proverb': return 'ምሳሌያዊ አነጋገር (Proverb)';
    case 'novel_excerpt': return 'ከልብወለድ የተቀነጨበ (Novel Excerpt)';
    default: return 'ሥራ (Work)';
  }
}

function getLiteratureTypeBadgeStyle(type: LiteratureItem['type']): string {
  switch (type) {
    case 'poem':
      return 'bg-accent/80 text-accent-foreground border-accent'; // Brighter accent for poems
    case 'short_story':
      return 'bg-primary/70 text-primary-foreground border-primary'; // Slightly different primary for stories
    case 'proverb':
      return 'bg-secondary/70 text-secondary-foreground border-secondary'; // Different secondary for proverbs
    case 'novel_excerpt':
      return 'bg-muted text-muted-foreground border-muted-foreground/50'; // Distinct muted for excerpts
    default:
      return 'bg-card text-foreground border-border';
  }
}

interface LiteratureClientProps {
  initialItems: LiteratureItem[];
}

interface LiteraryResourceLink {
  href: string;
  genreAm: string;
  genreEn: string;
  sourceTitleAm: string;
  sourceTitleEn: string;
  descriptionAm: string;
  descriptionEn: string;
}

const literaryResources: LiteraryResourceLink[] = [
  {
    href: 'https://www.moe.gov.et/storage/books/January2021/3f0zkhXzKr6uIsWgvFqI.pdf',
    genreAm: 'ትንታኔ (Prose)',
    genreEn: 'Prose',
    sourceTitleAm: 'የትምህርት ሚኒስቴር የአማርኛ መጽሐፍ',
    sourceTitleEn: 'MoE Amharic Book (PDF)',
    descriptionAm: 'ለአጠቃላይ የአማርኛ ሥነ ጽሑፍ፣ ትንታኔ መሠረታዊ መርጃ።',
    descriptionEn: 'A foundational resource for general Amharic literature and prose.',
  },
  {
    href: 'https://www.moe.gov.et/storage/books/January2021/3f0zkhXzKr6uIsWgvFqI.pdf',
    genreAm: 'ደራሲነት (Essay Writing)',
    genreEn: 'Essay Writing',
    sourceTitleAm: 'የትምህርት ሚኒስቴር የአማርኛ መጽሐፍ',
    sourceTitleEn: 'MoE Amharic Book (PDF)',
    descriptionAm: 'ለደራሲነት ክህሎት ማዳበሪያነት ከትምህርት መጽሐፍት የተገኙ ክፍሎች።',
    descriptionEn: 'Sections from educational books useful for developing essay writing skills.',
  },
  {
    href: 'https://ethioreference.com/archives/category/amharic-poetry',
    genreAm: 'ግጥም (Poetry)',
    genreEn: 'Poetry',
    sourceTitleAm: 'የአማርኛ ግጥም ማህደር (EthioReference)',
    sourceTitleEn: 'Amharic Poetry Archive (EthioReference)',
    descriptionAm: 'የተለያዩ የአማርኛ ግጥሞች የሚገኙበት የመስመር ላይ ማከማቻ።',
    descriptionEn: 'Online archive for various Amharic poems.',
  },
  {
    href: 'https://www.youtube.com/results?search_query=%E1%8B%A8%E1%8A%A0%E1%88%9B%E1%88%AD%E1%8A%9B+%E1%8B%B5%E1%89%A5%E1%88%9B%E1%8B%8E%E1%89%BD',
    genreAm: 'ድራማ (Drama / Play)',
    genreEn: 'Drama / Play',
    sourceTitleAm: 'የአማርኛ ድራማዎች (YouTube)',
    sourceTitleEn: 'Amharic Dramas (YouTube)',
    descriptionAm: 'በዩቲዩብ ላይ የሚገኙ የተለያዩ የአማርኛ ድራማዎች።',
    descriptionEn: 'Various Amharic dramas available on YouTube.',
  },
  {
    href: 'https://www.greelane.com/am/ሰበናዊነት/ሥነ-ጽሑፍ/the-surviving-tragedies-of-euripides-118749',
    genreAm: 'አሳዛኝ ታሪክ (Tragedy)',
    genreEn: 'Tragedy',
    sourceTitleAm: 'Greelane - Euripides Tragedies',
    sourceTitleEn: 'Greelane - Euripides Tragedies',
    descriptionAm: 'ስለ ዩሪፒድስ አሳዛኝ ተውኔቶችና ስለ አሳዛኝ ታሪክ ምንነት መረጃ።',
    descriptionEn: 'Information on Euripides\' tragedies and the nature of tragedy.',
  },
  {
    href: 'https://kuasark.com/am/languages/american-english/categories/comedy/',
    genreAm: 'አስቂኝ ታሪክ (Comedy)',
    genreEn: 'Comedy',
    sourceTitleAm: 'Quasar Comedy Radio (English)',
    sourceTitleEn: 'Quasar Comedy Radio (English)',
    descriptionAm: 'በአሜሪካን እንግሊዝኛ የቀረቡ አስቂኝ ዝግጅቶችና መርጃዎች።',
    descriptionEn: 'Comedy shows and resources in American English.',
  },
  {
    href: '#epic-poetry-resources', 
    genreAm: 'ታሪክ ቅኔ (Epic Poetry)',
    genreEn: 'Epic Poetry',
    sourceTitleAm: 'የታሪክ ቅኔ ስብስቦች',
    sourceTitleEn: 'Epic Poetry Collections',
    descriptionAm: 'የጀግንነት ታሪኮችንና ረዣዥም ግጥሞችን የሚያካትቱ መርጃዎች።',
    descriptionEn: 'Resources including heroic tales and long narrative poems.',
  },
  {
    href: '#folklore-resources', 
    genreAm: 'ባህላዊ ታሪክ (Folklore)',
    genreEn: 'Folklore',
    sourceTitleAm: 'የአማርኛ ባህላዊ ታሪኮች',
    sourceTitleEn: 'Amharic Folk Tales',
    descriptionAm: 'ከትውልድ ወደ ትውልድ የተላለፉ ተረቶችና አፈታሪኮች።',
    descriptionEn: 'Stories and legends passed down through generations.',
  },
  {
    href: '#childrens-literature-resources', 
    genreAm: 'የልጆች ሥነ ጽሑፍ',
    genreEn: 'Children\'s Literature',
    sourceTitleAm: 'የአማርኛ የልጆች መጻሕፍት',
    sourceTitleEn: 'Amharic Children\'s Books',
    descriptionAm: 'ለህጻናት የተዘጋጁ ታሪኮች፣ ግጥሞችና ሌሎች የንባብ ቁሳቁሶች።',
    descriptionEn: 'Stories, poems, and other reading materials for children.',
  },
  {
    href: '#proverbs-resources', 
    genreAm: 'ምሳሌዎች (ምሳሌያዊ አነጋገሮች)',
    genreEn: 'Parables & Proverbs',
    sourceTitleAm: 'የአማርኛ ምሳሌያዊ አነጋገሮች ስብስብ',
    sourceTitleEn: 'Collection of Amharic Proverbs',
    descriptionAm: 'ጥበብና የሕይወት ልምድን በአጭሩ የሚገልጹ አነጋገሮች።',
    descriptionEn: 'Sayings that concisely express wisdom and life experience.',
  },
  {
    href: 'https://scholar.google.com',
    genreAm: 'ጎግል ስኮላር (የምርምር መድረክ)',
    genreEn: 'Google Scholar (Research Platform)',
    sourceTitleAm: 'ጎግል ስኮላር',
    sourceTitleEn: 'Google Scholar',
    descriptionAm: 'በአማርኛ ወይም በእንግሊዝኛ "Amharic literature", "Amharic prose analysis", "Ethiopian literary studies" ብሎ መፈለግ ይረዳል።',
    descriptionEn: 'Search for "Amharic literature", "Amharic prose analysis", "Ethiopian literary studies" in Amharic or English.',
  },
];


export default function LiteratureClient({ initialItems }: LiteratureClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<LiteratureItem[]>([]);

  const handleSearch = (term: string) => {
    const lowercasedTerm = term.toLowerCase().trim();
    setSearchTerm(lowercasedTerm);
    if (!lowercasedTerm) {
      setSearchResults([]);
      return;
    }
    const results = initialItems.filter(item =>
      item.title.toLowerCase().includes(lowercasedTerm) ||
      (item.author && item.author.toLowerCase().includes(lowercasedTerm)) ||
      item.content.toLowerCase().includes(lowercasedTerm)
    );
    setSearchResults(results);
  };

  const displayedItems = useMemo(() => {
    const effectiveSearchTerm = searchTerm.trim();
    return effectiveSearchTerm ? searchResults : initialItems;
  }, [searchTerm, searchResults, initialItems]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Literary Resources Links */}
      <div className="lg:col-span-1 flex flex-col">
        <Card className="shadow-lg animate-in fade-in-0 slide-in-from-top-4 duration-500 ease-out flex flex-col flex-1">
          <CardHeader>
            <CardTitle className="text-primary text-xl" lang="am">📚 የሥነ ጽሑፍ መርጃዎች</CardTitle>
            <CardTitle className="text-muted-foreground text-lg">Literary Resources</CardTitle>
          </CardHeader>
          <ScrollArea className="flex-1 min-h-0">
            <CardContent className="space-y-4 pr-2">
              {literaryResources.map((resource, index) => (
                <div 
                  key={index} 
                  className="p-3 border rounded-md hover:bg-accent/10 transition-colors duration-200"
                >
                  <Link href={resource.href} target={resource.href.startsWith('#') ? '_self' : '_blank'} rel="noopener noreferrer" className="group">
                    <h4 className="font-semibold text-primary group-hover:underline" lang="am">{resource.genreAm}</h4>
                    <h5 className="font-medium text-muted-foreground group-hover:underline">{resource.genreEn}</h5>
                    <p className="text-sm font-medium text-foreground/90 mt-1" lang="am">ምንጭ: {resource.sourceTitleAm}</p>
                    <p className="text-sm font-medium text-foreground/80" lang="en">Source: {resource.sourceTitleEn}</p>
                    <p className="text-sm text-foreground/80 mt-1" lang="am">{resource.descriptionAm}</p>
                    <p className="text-sm text-foreground/70 mt-1">{resource.descriptionEn}</p>
                  </Link>
                </div>
              ))}
            </CardContent>
          </ScrollArea>
        </Card>
      </div>

      {/* Right Column: Searchable Literature Items */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <SearchForm 
          onSearch={handleSearch} 
          placeholder="በሥነ ጽሑፍ ሥራዎች ውስጥ ይፈልጉ..."
          searchButtonText="Search"
          searchButtonTextAm="ፈልግ"
        />

        {searchTerm.trim() && displayedItems.length === 0 && (
          <p className="text-center text-muted-foreground" lang="am">
            "{searchTerm.trim()}" ለሚለው ፍለጋ ምንም ውጤት አልተገኘም።
          </p>
        )}

        <ScrollArea className="flex-1 min-h-0">
          <Accordion type="multiple" className="w-full space-y-4">
            {displayedItems.map((item, index) => (
              <AccordionItem 
                value={item.id} 
                key={item.id} 
                className={cn(
                  "border bg-card rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 ease-out animate-in fade-in-0 slide-in-from-bottom-4",
                  "group"
                )}
                style={{ animationDelay: `${index * 75}ms` }} 
              >
                <AccordionTrigger className="p-6 hover:no-underline hover:bg-accent/10 rounded-t-lg transition-colors duration-200">
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold text-primary mb-1" lang="am">{item.title}</h3>
                    {item.author && (
                      <p className="text-sm text-muted-foreground" lang="am">
                        ደራሲ: {item.author}
                      </p>
                    )}
                  </div>
                  <Badge 
                    className={cn(
                      "ml-4 text-xs whitespace-nowrap border", 
                      getLiteratureTypeBadgeStyle(item.type)
                    )} 
                    lang="am"
                  >
                    {getLiteratureTypeName(item.type)}
                  </Badge>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line" lang="am">
                    {item.content}
                  </div>
                  {(item.publicationYear || item.source) && (
                    <div className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                      {item.publicationYear && <span lang="am">የታተመበት ዓመት: {item.publicationYear}</span>}
                      {item.publicationYear && item.source && <span className="mx-2">|</span>}
                      {item.source && <span lang="am">ምንጭ: {item.source}</span>}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </div>
    </div>
  );
}

