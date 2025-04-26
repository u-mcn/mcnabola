import { ConnectingDotsBackground } from "@/components";
import { Button } from "@/components"


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex items-center justify-center">
      <ConnectingDotsBackground />

      <div className="z-10 flex flex-row gap-8 text-center">
        <Button text="Mark" href="/mark" />
        <Button text="Ultan" href="/ultan" />
      </div>
    </div>
  );
}
