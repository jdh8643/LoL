"use client";
import { useEffect, useState } from "react";
import { getChampionRotation } from "../utils/riotApi";
import { ChampionRotation } from "../types/ChampionRotation";
import ChampionCard from "@/app/components/ChampionCard";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import ErrorMessage from "@/app/components/ErrorMessage";
import Link from "next/link";

export default function RotationPage() {
  const [rotation, setRotation] = useState<ChampionRotation | null>(null);
  const [champions, setChampions] = useState<Record<string, any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        // 로테이션 데이터 가져오기
        const rotationData = await getChampionRotation();
        setRotation(rotationData);

        // 챔피언 데이터 가져오기
        const version = await fetch(
          "https://ddragon.leagueoflegends.com/api/versions.json"
        )
          .then((res) => res.json())
          .then((versions) => versions[0]);

        const championsData = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
        ).then((res) => res.json());

        setChampions(championsData.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!rotation || !champions) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">이번 주 로테이션 챔피언</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        
        {rotation.freeChampionIds.map((championId) => {
          
          const champion = Object.values(champions).find(
            (c: any) => Number(c.key) === championId
          );

          if (!champion) return null;

          return (
            <Link 
              href={`/rotation/${champion.id}`} 
              key={championId}
              className="transition-transform hover:scale-105"
            >
              <ChampionCard champion={champion} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
