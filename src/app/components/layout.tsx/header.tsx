import Link from 'next/link';
import Nav from './Nav';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 로고 영역 */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-white tracking-wider hover:text-blue-300 transition-colors">
            <Image
            src="/logo.png"
            alt="League of Legends"
            width={100}
            height={40}
            className="h-8 w-auto"
            priority
          />
            </div>
          </Link>

          {/* 네비게이션 (우측으로 이동) */}
          <div className="flex-1 flex justify-end">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}