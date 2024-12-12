const API_VERSION = '13.24.1';

export async function fetchChampionList() {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/champion.json`);
    const championsData = await response.json();
    return Object.values(championsData.data);
}

export async function fetchItemList() {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/item.json`);
    const itemsData = await response.json();
    return Object.entries(itemsData.data).map(([id, item]: [string, any]) => ({
        id,
        ...item
    }));
}

export async function fetchChampionRotation() {
    const response = await fetch('/api/rotation');
    if (!response.ok) {
        throw new Error('로테이션 데이터를 가져오는데 실패했습니다');
    }
    return response.json();
} 