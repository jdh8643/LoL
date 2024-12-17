import React from 'react'
import { ItemListResponse } from '../types/Item';
import { fetchItemsList } from '../utils/serverApi';
import Link from 'next/link';

const page = async () => {
  let items: ItemListResponse = await fetchItemsList();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">아이템 목록</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items && Object.entries(items.data).map(([itemId, item]) => (
          <Link 
            key={itemId}
            href={`/items/${itemId}`}
            className="block bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <div className="p-4">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
                alt={item.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-sm font-bold text-white mb-2 truncate">{item.name}</h2>
              <p className="text-gray-400 text-xs line-clamp-2">{item.plaintext || item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
