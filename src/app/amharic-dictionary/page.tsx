
import { PageContainer } from '@/components/page-container';
import AmharicDictionaryClient from './components/amharic-dictionary-client';
import { amharicDictionaryData } from '@/data/amharic-dictionary';
import type { AmharicDictionaryEntry } from '@/data/types';

export const metadata = {
  title: 'የአማርኛ መዝገበ ቃላት | የአማርኛ መማሪያ',
  description: 'የአማርኛ ቃላትን ትርጉም፣ አጠቃቀም እና ምሳሌዎችን ይፈልጉ። Search for Amharic word definitions, usage, and examples.',
};

export default function AmharicDictionaryPage() {
  // Data is now loaded in the Server Component
  const initialEntries: AmharicDictionaryEntry[] = amharicDictionaryData;

  return (
    <PageContainer titleAm="የአማርኛ መዝገበ ቃላት" title="Amharic Dictionary">
      <AmharicDictionaryClient initialEntries={initialEntries} />
    </PageContainer>
  );
}
