import { ConnectingDotsBackground } from "@/components";
import { Button } from "@/components"
import Link from 'next/link';


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex items-center justify-center">
      <ConnectingDotsBackground />

      <div className="z-10 flex flex-row gap-8 text-center">
        <Link href="/mark">
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-xl font-semibold transition-all duration-500 ease-in-out
            hover:shadow-[0_0_10px_2px_white] hover:bg-transparent hover:text-white">
            {"Mark"}
          </button>
        </Link>
        <Link href="/ultan">
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-xl font-semibold transition-all duration-500 ease-in-out
            hover:shadow-[0_0_10px_2px_white] hover:bg-transparent hover:text-white">
            {"Ultan"}
          </button>
        </Link>
        
        {/* <Button text="" href="/mark" themeColor=""/>
        <Button text="Ultan" href="/ultan" themeColor=""/> */}

      </div>
    </div>
  );
}
