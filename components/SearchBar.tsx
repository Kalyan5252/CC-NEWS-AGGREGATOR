'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`h-6 w-6 ${otherClasses} `}>
    <Image
      src="search_icon.svg"
      alt="glass"
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === '') router.push('?');
    updateSearchParams(search.toLowerCase());
  };

  const updateSearchParams = (q?: string) => {
    // console.log('check:', q);
    const searchParams = new URLSearchParams(window.location.search);
    // const navigate = useNavigate();
    if (search) {
      searchParams.set('q', search);
    } else {
      searchParams.delete('q');
    }

    // const scrollPosition = window.scrollY;
    const newPathname = `?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  return (
    <form
      className="flex items-center self-center p-4 gap-4"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        className="p-4 bg-blue-100 rounded-full outline-none w-full h-9"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="p-5 hover:drop-shadow-[0_0_5px_rgba(50,100,255,1)] hover:scale-125 opacity-75 transition-all">
        <SearchButton otherClasses="" />
      </div>
    </form>
  );
};

export default SearchBar;
