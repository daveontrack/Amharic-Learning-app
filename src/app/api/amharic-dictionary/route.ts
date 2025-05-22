
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { amharicDictionaryData } from '@/data/amharic-dictionary';
import type { AmharicDictionaryEntry } from '@/data/types';

export async function GET(request: NextRequest) {
  const searchTerm = request.nextUrl.searchParams.get('term')?.toLowerCase();

  if (searchTerm) {
    const filteredData = amharicDictionaryData.filter(entry =>
      entry.word.toLowerCase().includes(searchTerm) ||
      entry.definition.toLowerCase().includes(searchTerm) ||
      (entry.pronunciation && entry.pronunciation.toLowerCase().includes(searchTerm)) ||
      (entry.relatedWords && entry.relatedWords.some(rw => rw.toLowerCase().includes(searchTerm)))
    );
    return NextResponse.json(filteredData);
  }

  return NextResponse.json(amharicDictionaryData);
}
