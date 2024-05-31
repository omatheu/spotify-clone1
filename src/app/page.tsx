import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
} from "lucide-react";

import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              My playlist #12
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              This is fuckin vibes
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              This is Vitor and Leo
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/20 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
              <strong>Racionais Mc's</strong>
              <button className="w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
              <strong>Racionais Mc's</strong>
              <button className="w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
              <strong>Racionais Mc's</strong>
              <button className="w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
              <strong>Racionais Mc's</strong>
              <button className="w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
              <strong>Racionais Mc's</strong>
              <button className="w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
              <strong>Racionais Mc's</strong>
              <button className="w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Matheus Santos</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs" className="w-full"/>
              <strong className="font-semibold">Racionais Mc's</strong>
              <span className="text-in text-zinc-500">Sobrevivendo no Inferno</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs" className="w-full"/>
              <strong className="font-semibold">Racionais Mc's</strong>
              <span className="text-in text-zinc-500">Sobrevivendo no Inferno</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs" className="w-full"/>
              <strong className="font-semibold">Racionais Mc's</strong>
              <span className="text-in text-zinc-500">Sobrevivendo no Inferno</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs" className="w-full"/>
              <strong className="font-semibold">Racionais Mc's</strong>
              <span className="text-in text-zinc-500">Sobrevivendo no Inferno</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/racionais.jpg" width={120} height={120} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs" className="w-full"/>
              <strong className="font-semibold">Racionais Mc's</strong>
              <span className="text-in text-zinc-500">Sobrevivendo no Inferno</span>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/racionais.jpg" width={56} height={56} alt="Foto do album Sobrevivendo no Inferno dos Racionais Mcs"/>
          <div className="flex flex-col">
            <strong className="font-normal">Jorge da Capadocia</strong>
            <span className="text-xs text-zinc-400">Racionais Mc's</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            
            <button className="w-10 h-10 flex items-center justify-center pr-1 p-2 rounded-full bg-white text-black">
                <Play fill='bg-black' />
            </button>

            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">0:32</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
              </div>
              <span className="text-sm text-zinc-400">2:32</span>
            </div>

          </div>
          <div className="flex items-center gap-2">
            < Mic2 size={20}/>
            < LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div>
              <Volume />
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}
