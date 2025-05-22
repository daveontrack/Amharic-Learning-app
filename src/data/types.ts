
export interface AmharicDictionaryEntry {
  id: string;
  word: string;
  definition: string;
  exampleSentences?: string[];
  pronunciation?: string; // Optional: Could be IPA or audio link
  relatedWords?: string[];
  englishEquivalent?: string; // For Word of the Day feature & cross-reference
  audioUrl?: string; // URL for pronunciation audio
}

export interface EnglishDictionaryEntry {
  id: string;
  word: string;
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
  }[];
  pronunciation?: string; // Optional: IPA or audio link
  amharicEquivalent?: string; // For cross-reference
  audioUrl?: string; // URL for pronunciation audio
}

export interface LiteratureItem {
  id: string;
  title: string;
  author?: string;
  type: 'poem' | 'short_story' | 'proverb' | 'novel_excerpt';
  content: string; // Can be markdown or plain text
  publicationYear?: number;
  source?: string;
}
