import { writingThemes } from "@/config/writingThemes ";

export function getWritingThemes() {
    const writingThemesList = writingThemes;
    return writingThemesList;
}
export function filterWritingThemes(pokeType:string) {
    let filtredWritingThemes = getWritingThemes().filter(type => type.tipo === pokeType);
    return filtredWritingThemes;
  }
  