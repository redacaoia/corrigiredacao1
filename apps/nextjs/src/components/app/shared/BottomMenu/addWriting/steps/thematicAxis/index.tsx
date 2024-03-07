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
      {buttonsWritingThemes &&
        buttonsWritingThemes.map((type, index) => (
          <>
            <button
              key={index}
              value={type.value}
              onClick={handleWritingThemes}
            >
              {type.name}
            </button>
          </>
        ))}

      {filtredWritingThemes &&
        filtredWritingThemes.map((type) => (
          <ul key={type.id}>
            <li>{type.nome}</li>
          </ul>
        ))}
    </div>
  );
}
