"use client";

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
  searchButtonText?: string;
  searchButtonTextAm?: string;
}

export function SearchForm({ 
  onSearch, 
  placeholder = "Search...", 
  searchButtonText = "Search",
  searchButtonTextAm = "ፈልግ"
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl items-center space-x-2 mb-6">
      <Input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-grow"
        aria-label="Search term"
      />
      <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90">
        <SearchIcon className="mr-0 md:mr-2 h-4 w-4" />
        <span className="hidden md:inline" lang="am">{searchButtonTextAm}</span>
        <span className="hidden md:inline px-1">/</span>
        <span className="hidden md:inline">{searchButtonText}</span>
        <span className="md:hidden" lang="am">{searchButtonTextAm}</span>
      </Button>
    </form>
  );
}
