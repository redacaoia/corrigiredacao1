import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
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
      {/*   <ScrollLink
        to={lowercaseTitle} // ID da seção para a qual você deseja rolar
        smooth={true}
        duration={500} // duração da animação em milissegundos
      > */}
      <Button className="flex h-16 w-48 items-center gap-2 rounded-sm bg-blue-500 text-center text-lg font-medium shadow-sm hover:bg-sky-600 md:h-24">
        {categoryTitle} <FaArrowRight className="hover:animate-bellRing" />
      </Button>
      {/*  </ScrollLink> */}
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
