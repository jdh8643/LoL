// src/app/rotation/[id]/page.tsx

import { ChampionData } from '@/app/types/Champion'
import { fetchChampionDetail } from '@/app/utils/serverApi'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: {
    id: string
  }
}

export default async function ChampionDetailPage({ params }: Props) {
  try {
    const champion: ChampionData = await fetchChampionDetail(params.id)
    const version = '14.24.1'  // 또는 동적으로 버전을 가져올 수 있습니다

    return (
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/rotation"
          className="inline-block mb-8 text-blue-500 hover:text-blue-700"
        >
          ← 로테이션 목록으로 돌아가기
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 챔피언 이미지 섹션 */}
          <div className="md:w-1/3">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/cdn/${version}/img/champion/${champion.id}.png`}
                alt={champion.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 챔피언 정보 섹션 */}
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{champion.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{champion.title}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">챔피언 소개</h2>
              <p className="text-gray-700 leading-relaxed">{champion.lore}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">챔피언 정보</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-600">역할</h3>
                  <p>{champion.tags.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">난이도</h3>
                  <p>{champion.info.difficulty}/10</p>
                </div>
              </div>
            </div>

            {/* 스킬 정보 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">스킬</h2>
              <div className="space-y-6">
                {champion.spells.map((spell, index) => (
                  <div key={spell.id} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <Image
                         src={`${process.env.NEXT_PUBLIC_API_URL}/cdn/${version}/img/spell/${spell.id}.png`}
                        alt={spell.name}
                        width={64}
                        height={64}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{spell.name}</h3>
                      <p className="text-gray-700">{spell.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">챔피언 정보를 불러오는데 실패했습니다.</p>
      </div>
    )
  }
}