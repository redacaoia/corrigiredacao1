import Link from "next/link";
import { Writing } from "@/components/app/shared/writing";
import { Button } from "@/components/ui/button";
import { BsArrowRight } from "react-icons/bs";

export function WritingSection() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black1">Seus temas favoritos</h2>
      </div>

      <div className="flex w-full flex-col gap-8">

        
        <Writing.Root>
            <Writing.Image imageUrl=""/>
            <div>
                <div>
                    <Writing.Favorite/>
                </div>
                <Writing.Content/>
            </div>
        </Writing.Root>

      </div>
    </section>
  );
}
