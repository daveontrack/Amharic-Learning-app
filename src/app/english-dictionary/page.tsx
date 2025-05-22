
import { PageContainer } from '@/components/page-container';
import EnglishDictionaryClient from './components/english-dictionary-client';
import { englishDictionaryData } from '@/data/english-dictionary';
import type { EnglishDictionaryEntry } from '@/data/types';

export const metadata = {
  title: 'English Dictionary | የአማርኛ መማሪያ',
  description: 'Look up English words for definitions, parts of speech, and examples. የእንግሊዝኛ ቃላትን ትርጉም፣ የንግግር ክፍሎች እና የአጠቃቀም ምሳሌዎችን ይፈልጉ።',
};

export default function EnglishDictionaryPage() {
  // Data is now loaded in the Server Component
  const initialEntries: EnglishDictionaryEntry[] = englishDictionaryData;

  return (
    <PageContainer titleAm="የእንግሊዝኛ መዝገበ ቃላት" title="English Dictionary">
      <EnglishDictionaryClient initialEntries={initialEntries} />
    </PageContainer>
  );
}
