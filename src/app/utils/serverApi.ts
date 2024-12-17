"use server";
import { ChampionListResponse } from "../types/Champion";
import { ItemListResponse } from "../types/Item";
//SECTION - API의 버전 정보
export async function fetchVersion(): Promise<string> {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/api/versions.json`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error(`버전 정보 요청 실패: 상태 코드 ${res.status}`);
  }

  const data: string[] = await res.json();
  return data[0];
}

//SECTION - 챔피언 목록 : ISR
export async function fetchChampionsList(): Promise<ChampionListResponse> {
  const version = await fetchVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 604800,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`챔피언 목록 요청 실패: 상태 코드 ${res.status}`);
  }

  const data: ChampionListResponse = await res.json();
  return data;
}

//SECTION - 아이템 목록 : ISR
export async function fetchItemsList(): Promise<ItemListResponse> {
  const version = await fetchVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {
      next: {
        revalidate: 604800,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`아이템 목록 요청 실패: 상태 코드 ${res.status}`);
  }
  const data: ItemListResponse = await res.json();
  return data;
}


export async function getLatestVersion(): Promise<string> {
  const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const versions = await response.json();
  return versions[0];
}

export async function getChampions(version: string) {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );
  return response.json();
}

// utils/serverApi.ts

const API_KEY = process.env.RIOT_API_KEY;
const DDRAGON_VERSION = '13.24.1'; // 현재 버전에 맞게 수정하세요

export async function fetchChampionDetail(championId: string) {
  try {
    const response = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/data/ko_KR/champion/${championId}.json`
    );

    if (!response.ok) {
      throw new Error('챔피언 정보를 가져오는데 실패했습니다.');
    }

    const data = await response.json();
    return data.data[championId];
  } catch (error) {
    console.error('챔피언 상세 정보 조회 중 오류:', error);
    throw error;
  }
}
