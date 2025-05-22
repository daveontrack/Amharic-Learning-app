
import { PageContainer } from '@/components/page-container';
import LiteratureClient from './components/literature-client';
import { literatureData } from '@/data/literature';
import type { LiteratureItem } from '@/data/types';

export const metadata = {
  title: 'የአማርኛ ሥነ ጽሑፍ | የአማርኛ መማሪያ',
  description: 'የተለያዩ የአማርኛ ሥነ-ጽሑፍ ሥራዎችን ያንብቡ እና ያስሱ። Read and explore various Amharic literary works.',
};

export default function LiteraturePage() {
  // Data is now loaded in the Server Component
  const initialItems: LiteratureItem[] = literatureData;

  return (
    <PageContainer titleAm="የአማርኛ ሥነ ጽሑፍ" title="Literature">
      <LiteratureClient initialItems={initialItems} />
    </PageContainer>
  );
}
