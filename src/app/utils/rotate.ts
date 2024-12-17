import { ChampionRotation } from "../types/ChampionRotation";

const API_KEY: string | undefined = process.env.RIOT_API_KEY;

if (!API_KEY) {
  throw new Error("API 요청 중 에러가 발생: API 키가 없습니다.");
}

// 챔피언 로테이션을 가져오는 함수
export const getChampionRotation = async (): Promise<ChampionRotation> => {
    try {
      const response = await fetch(
        `https://kr.api.riotgames.com/lol/platform/v3/champion-rotations`, // 실제 API URL로 변경
        {
          method: "GET",
          headers: {
            "X-Riot-Token": API_KEY,
          },
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Riot API Error:", errorData);
        throw new Error(errorData.message || "Failed to fetch champion rotation");
      }
  
      const data: ChampionRotation = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching champion rotation:", error);
      throw error;
    }
  };