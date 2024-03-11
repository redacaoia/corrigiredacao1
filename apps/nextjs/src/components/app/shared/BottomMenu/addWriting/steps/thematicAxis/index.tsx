"use client";

import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { buttonsWritingThemes } from "@/config/writingThemes ";
import {
  filterWritingThemes,
  getWritingThemes,
} from "@/utils/filterWritingThemes";

export function ThematicAxis() {
  const [filtredWritingThemes, setFiltredWritingThemes] = useState();

  useEffect(() => {
    setFiltredWritingThemes(getWritingThemes());
  }, []);

  function handleWritingThemes(e) {
    let typeWritingThemes = e.target.value;
    typeWritingThemes !== "all"
      ? setFiltredWritingThemes(filterWritingThemes(typeWritingThemes))
      : setFiltredWritingThemes(getWritingThemes());
  }

  return (
    <div>
      
    <ToggleGroup type="single">
     
    {buttonsWritingThemes &&
        buttonsWritingThemes.map((type, index) => (
          <>
            <ToggleGroupItem  aria-label="Toggle bold" key={index}
              value={type.name}
              className="flex flex-col items-cente justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              onClick={handleWritingThemes}
         >
         {type.name}
      </ToggleGroupItem>
          </>
        ))}
    </ToggleGroup>

      {filtredWritingThemes &&
        filtredWritingThemes.map((type) => (
          <ul key={type.id}>
            <li>{type.nome}</li>
          </ul>
        ))}
    </div>
  );
}
