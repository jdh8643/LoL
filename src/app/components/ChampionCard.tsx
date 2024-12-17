interface ChampionCardProps {
  champion: {
    id: string;
    name: string;
    title: string;
    key: string;
  };
}

export default function ChampionCard({ champion }: ChampionCardProps) {
  const version = '13.24.1';  // 또는 동적으로 버전을 가져올 수 있습니다

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/cdn/${version}/img/champion/${champion.id}.png`}
        alt={champion.name}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{champion.name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{champion.title}</p>
      </div>
    </div>
  );
} 