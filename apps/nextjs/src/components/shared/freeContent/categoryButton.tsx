import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  categoryTitle: string;
}

export function CategoryButton({ categoryTitle }: Props) {
  // Remove acentos
  const withoutAccents = categoryTitle
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Substitui espaços, hifens e pontos por nada
  const formattedTitle = withoutAccents.replace(/[ -./]/g, "");

  // Converte para minúsculas
  const lowercaseTitle = formattedTitle.toLowerCase();

  return (
    <div>
      <ScrollLink
        to={lowercaseTitle} // ID da seção para a qual você deseja rolar
        smooth={true}
        duration={500} // duração da animação em milissegundos
      >
        <Button className="h-16 w-28 bg-blue-500 shadow-sm hover:bg-sky-600">
          {categoryTitle}
        </Button>
      </ScrollLink>
    </div>
  );
}

/* 
- repertórios
- modelos
- dicas --> (mesmos conteúcos do blog)
- citações
-  etc
*/
