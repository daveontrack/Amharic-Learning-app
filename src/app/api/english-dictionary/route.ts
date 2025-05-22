
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { englishDictionaryData } from '@/data/english-dictionary';
import type { EnglishDictionaryEntry } from '@/data/types';

export async function GET(request: NextRequest) {
  const searchTerm = request.nextUrl.searchParams.get('term')?.toLowerCase();

  if (searchTerm) {
    const filteredData = englishDictionaryData.filter(entry =>
      entry.word.toLowerCase().includes(searchTerm) ||
      entry.definitions.some(def => 
        def.definition.toLowerCase().includes(searchTerm) ||
        (def.example && def.example.toLowerCase().includes(searchTerm)) ||
        (def.synonyms && def.synonyms.some(s => s.toLowerCase().includes(searchTerm)))
      ) ||
      (entry.pronunciation && entry.pronunciation.toLowerCase().includes(searchTerm))
    );
    return NextResponse.json(filteredData);
  }

  return NextResponse.json(englishDictionaryData);
}
