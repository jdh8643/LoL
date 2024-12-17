import React from 'react'
import { ChampionListResponse } from '../types/Champion';
import { fetchChampionsList } from '../utils/serverApi';
import Link from 'next/link';
import Image from 'next/image';

const page = async () => {
  let champions: ChampionListResponse = await fetchChampionsList();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">챔피언 목록</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {champions && Object.values(champions.data).map((champion) => (
          <Link 
            key={champion.id}
            href={`/champions/${champion.id}`}
            className="block bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <div className="p-4">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                className="w-full h-auto rounded-lg mb-4"
                width={120}
                height={120}
              />
              <h2 className="text-xl font-bold text-white mb-2">{champion.name}</h2>
              <p className="text-gray-400 text-sm">{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;