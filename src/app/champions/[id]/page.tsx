// app/champions/[id]/page.tsx

import { Metadata } from 'next';
import { fetchChampionDetail } from '@/app/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';

interface ChampionPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ChampionPageProps): Promise<Metadata> {
  const champion = await fetchChampionDetail(params.id);
  
  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.lore,
  };
}

export default async function ChampionPage({ params }: ChampionPageProps) {
  const champion = await fetchChampionDetail(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
        <Link 
          href="/champions"
          className="inline-block mb-8 text-blue-500 hover:text-blue-700"
        >
          ← 아이템 목록으로 돌아가기
        </Link>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">{champion.name}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{champion.title}</h2>
        
        <div className="relative w-full max-w-2xl aspect-video mb-8">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${params.id}_0.jpg`}
            alt={champion.name}
            
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-prose">
          <h3 className="text-2xl font-semibold mb-4">챔피언 소개</h3>
          <p className="text-gray-700 mb-6">{champion.lore}</p>

          <h3 className="text-2xl font-semibold mb-4">스킬</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {champion.spells.map((spell: any) => (
              <div key={spell.id} className="border p-4 rounded-lg">
                <h4 className="font-bold mb-2">{spell.name}</h4>
                <p>{spell.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}