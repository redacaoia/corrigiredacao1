'use client'

import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

export function ThematicAxis() {
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "ombro",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terras",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <div>
      <div>
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <FontBoldIcon className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <FontItalicIcon className="h-4 w-4" />
          </ToggleGroupItem>

          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {groups.map((item, index) => (
        <Group
          key={index} // Adicione uma chave única, geralmente baseada no índice
          name={item}
          isActive={
            groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
          }
          setGroupSelected={setGroupSelected} // Passe a função como propriedade
        />
      ))}

      {exercises.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

type Props = {
  name: string;
  isActive: boolean;
  setGroupSelected: (group: string) => void;
};

export function Group({ name, isActive, setGroupSelected }: Props) {
  return (
    <Toggle
      className={isActive ? "border-2 border-sky-500" : ""}
      variant="outline"
      aria-label="Toggle italic"
      onClick={() => setGroupSelected(name)}
    >
      <FontItalicIcon className="h-4 w-4" />
      {name}
    </Toggle>
  );
}
