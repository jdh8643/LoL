import React from 'react';
import { fetchItemsList } from '@/app/utils/serverApi';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ItemDetailPage({ params }: { params: { id: string } }) {
  const items = await fetchItemsList();
  const item = items.data[params.id];

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <Link 
          href="/items"
          className="inline-block mb-8 text-blue-500 hover:text-blue-700"
        >
          ← 아이템 목록으로 돌아가기
        </Link>
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 아이템 이미지 섹션 */}
          <div className="w-full md:w-1/3">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
              alt={item.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* 아이템 정보 섹션 */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-white mb-4">{item.name}</h1>
            
            {/* 가격 정보 */}
            <div className="mb-4">
              <p className="text-gold-500">
                구매가: {item.gold.total} 골드
                {item.gold.sell > 0 && ` (판매가: ${item.gold.sell} 골드)`}
              </p>
            </div>

            {/* 아이템 설명 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-300 mb-2">아이템 설명</h2>
              <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>

            {/* 태그 */}
            {item.tags && item.tags.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-300 mb-2">태그</h2>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 업그레이드 경로 */}
            {item.into && item.into.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-300 mb-2">제작 가능 아이템</h2>
                <div className="flex flex-wrap gap-4">
                  {item.into.map((itemId) => (
                    <img
                      key={itemId}
                      src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${itemId}.png`}
                      alt="Upgrades into"
                      className="w-12 h-12 rounded border border-gray-600"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 