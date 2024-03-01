import {Confetti} from "@/components/app/correction/confetti";
import { ShareTickeScore } from "@/components/app/shareTickeScore";

interface Props {
  params: {
    id: string;
  };
}

export default function Correction({ params }: Props) {
  return (
   
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <Confetti/>
        <div className="w-full max-w-screen-sm rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-2xl font-bold">Hello, Instagram!</h1>
        {/*   <ShareTickeScore imageUrl="" username="" score=""  /> */}
          <p className="text-gray-600">This is my awesome story content.</p>
        </div>
      </div>
    
  );
}
