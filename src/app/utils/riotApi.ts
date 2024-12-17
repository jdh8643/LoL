import { ChampionRotation } from '@/app/types/ChampionRotation';

export async function getChampionRotation(): Promise<ChampionRotation> {
  const response = await fetch('/api/rotation');
  if (!response.ok) {
    throw new Error('로테이션 데이터를 가져오는데 실패했습니다.');
  }
  return response.json();
}