
import { PageContainer } from '@/components/page-container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { YoutubeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'የቋንቋ መማሪያ ቪዲዮዎች | የአማርኛ መማሪያ',
  description: 'የተለያዩ የአማርኛ እና የእንግሊዝኛ መማሪያ ቪዲዮዎችን እና አጫዋች ዝርዝሮችን ይመልከቱ። Watch various Amharic and English learning videos and playlists.',
};

interface VideoItem {
  id: string;
  type: 'video' | 'playlist';
  titleAm: string;
  titleEn: string;
}

const videoData: VideoItem[] = [
  { id: 'bo47JoSxl1s', type: 'video', titleAm: 'የአማርኛ ግሶች', titleEn: 'Amharic Verbs Lesson' },
  { id: 'eK3IdQ30lNc', type: 'video', titleAm: 'የአማርኛ ቃላት: ቤተሰብ', titleEn: 'Amharic Vocabulary: Family' },
  { id: 'oLw-_J46VT4', type: 'video', titleAm: 'የሳምንቱ ቀናት በአማርኛ', titleEn: 'Days of the Week in Amharic' },
  { id: 'PLGiISP5YjdVfJTGxWTY4rfCqIzNsFnLsQ', type: 'playlist', titleAm: 'የአማርኛ መማሪያ አጫዋች ዝርዝር', titleEn: 'Amharic Learning Playlist' },
  { id: 'ogfYd705cRs', type: 'video', titleAm: 'ተጨማሪ የአማርኛ ትምህርት (ፕሌስሆልደር)', titleEn: 'Additional Amharic Lesson (Placeholder)' },
  { id: 'jfKfPfyJRdk', type: 'video', titleAm: 'ሌላ የአማርኛ ትምህርት (ፕሌስሆልደር)', titleEn: 'Another Amharic Lesson (Placeholder)' },
  { id: 'L_LUpnjgPso', type: 'video', titleAm: 'የእንግሊዝኛ ሰዋሰው መሠረታዊ ትምህርት (ፕሌስሆልደር)', titleEn: 'English Grammar Basics (Placeholder)' },
  { id: 'dQw4w9WgXcQ', type: 'video', titleAm: 'የእንግሊዝኛ ውይይት ልምምድ (ፕሌስሆልደር)', titleEn: 'English Conversation Practice (Placeholder)' },
];

const channelUrl = "https://www.youtube.com/@marakienglishwithabi8159";

interface LiteraryResource {
  href: string;
  genreAm: string;
  genreEn: string;
  sourceTitleAm: string;
  sourceTitleEn: string;
  descriptionAm: string;
  descriptionEn: string;
}

const literaryResources: LiteraryResource[] = [
  {
    href: 'https://www.moe.gov.et/storage/books/January2021/3f0zkhXzKr6uIsWgvFqI.pdf',
    genreAm: 'የአማርኛ ቋንቋና ሥነ ጽሑፍ (አጠቃላይ)',
    genreEn: 'Amharic Language & Literature (General)',
    sourceTitleAm: 'የትምህርት ሚኒስቴር መጽሐፍ',
    sourceTitleEn: 'Ministry of Education Book',
    descriptionAm: 'ለአማርኛ ቋንቋ፣ ሥነ ጽሑፍ፣ ትንታኔ (Prose)፣ ደራሲነት (Essay writing) እና ግጥም (Poetry) ጠቃሚ መርጃ።',
    descriptionEn: 'A useful resource for Amharic language, literature, prose, essay writing, and poetry.',
  },
  {
    href: 'https://kuasark.com/am/languages/english/categories/drama/',
    genreAm: 'ድራማ (Drama/Play)',
    genreEn: 'Drama/Play',
    sourceTitleAm: 'Quasar Radio – Drama',
    sourceTitleEn: 'Quasar Radio – Drama',
    descriptionAm: 'በእንግሊዝኛ የቀረቡ የድራማ ሥራዎችና መርጃዎች።',
    descriptionEn: 'Drama works and resources presented in English.',
  },
  {
    href: 'https://www.greelane.com/am/ሰበናዊነት/ሥነ-ጽሑፍ/the-surviving-tragedies-of-euripides-118749',
    genreAm: 'አሳዛኝ ታሪክ (Tragedy)',
    genreEn: 'Tragedy',
    sourceTitleAm: 'Greelane – Euripides Tragedies',
    sourceTitleEn: 'Greelane – Euripides Tragedies',
    descriptionAm: 'ስለ ዩሪፒድስ አሳዛኝ ተውኔቶችና ስለ አሳዛኝ ታሪክ ምንነት መረጃ።',
    descriptionEn: 'Information on Euripides\' tragedies and the nature of tragedy.',
  },
  {
    href: 'https://kuasark.com/am/languages/american-english/categories/comedy/',
    genreAm: 'አስቂኝ ታሪክ (Comedy)',
    genreEn: 'Comedy',
    sourceTitleAm: 'Quasar Radio – Comedy',
    sourceTitleEn: 'Quasar Radio – Comedy',
    descriptionAm: 'በአሜሪካን እንግሊዝኛ የቀረቡ አስቂኝ ዝግጅቶችና መርጃዎች።',
    descriptionEn: 'Comedy shows and resources in American English.',
  },
];


export default function LearningChannelPage() {
  return (
    <PageContainer titleAm="የቋንቋ መማሪያ ቪዲዮዎች" title="Learning Videos">
      
      <Card className="mb-8 shadow-lg animate-in fade-in-0 slide-in-from-top-4 duration-500 ease-out">
        <CardHeader>
          <CardTitle className="text-primary text-xl" lang="am">የቋንቋ መማሪያ ቻናል</CardTitle>
          <CardTitle className="text-muted-foreground text-lg">Learning Channel</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground mb-2" lang="am">
            ለተጨማሪ የመማሪያ ቪዲዮዎች እና ይዘቶች የ "Maraki English with Abi" እና "የቋንቋ መማሪያ ቻናል" የዩቲዩብ ቻናሎችን ይጎብኙ።
          </p>
          <p className="text-foreground/80 mb-4">
            Explore the 'Maraki English with Abi' YouTube channel and 'የቋንቋ መማሪያ ቻናል' for helpful English learning videos and content.
          </p>
          <Button asChild variant="default">
            <Link href={channelUrl} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon className="mr-2 h-5 w-5" />
              <span lang="am">የዩቲዩብ ቻናል ይጎብኙ</span>
              <span className="mx-1">/</span>
              <span>Visit Maraki English Channel</span>
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Literary Resources */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg animate-in fade-in-0 slide-in-from-top-4 duration-500 ease-out delay-100 h-full">
            <CardHeader>
              <CardTitle className="text-primary text-xl" lang="am">የሥነ ጽሑፍ መርጃዎች</CardTitle>
              <CardTitle className="text-muted-foreground text-lg">Literary Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {literaryResources.map((resource, index) => (
                <div 
                  key={index} 
                  className="p-3 border rounded-md hover:bg-accent/10 transition-colors duration-200"
                >
                  <Link href={resource.href} target="_blank" rel="noopener noreferrer" className="group">
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
          </Card>
        </div>

        {/* Right Column: Video Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"> 
            {videoData.map((item, index) => (
              <Card 
                key={`${item.id}-${index}`} 
                className={cn(
                  "shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out",
                  "hover:shadow-xl hover:scale-[1.02] transition-all"
                )}
                style={{ animationDelay: `${(index + 2) * 100}ms` }} 
              >
                <CardHeader>
                  <CardTitle className="text-primary text-lg" lang="am">{item.titleAm}</CardTitle>
                  <CardTitle className="text-muted-foreground text-md">{item.titleEn}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full overflow-hidden rounded-md">
                    <iframe
                      className="w-full h-full"
                      src={item.type === 'video' 
                        ? `https://www.youtube.com/embed/${item.id}` 
                        : `https://www.youtube.com/embed/videoseries?list=${item.id}`
                      }
                      title={`YouTube ${item.type} player - ${item.titleEn}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
