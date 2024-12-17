
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* 배경 비디오 */}
            <div className="absolute inset-0 z-0">
                <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                >
                    <source
                        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* 콘텐츠 */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
                <div className="text-center mb-16 mt-[-100px]">
                    <Image
                        src="/logo.png"
                        width={400}
                        height={200}
                        className="mx-auto mb-8"
                        alt="LEAGUE OF League of Legends"
                        priority
                    />
                    <p className="text-xl text-white mb-12">
                        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full max-w-md px-4">
                    <Link 
                        href="/champions" 
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                    >
                        챔피언 목록
                    </Link>
                    <Link 
                        href="/items" 
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                    >
                        아이템 목록
                    </Link>
                    <Link 
                        href="/rotation" 
                        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                    >
                        챔피언 로테이션
                    </Link>
                </div>
            </div>
        </main>
    );
}

