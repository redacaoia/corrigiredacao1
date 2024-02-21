import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  idNameCategory: string;
  nameCategory: string;
}

export function CategoryButtons({ idNameCategory, nameCategory }: Props) {
  return (
    <div>
      <ScrollLink
        to="targetSection" // ID da seção para a qual você deseja rolar
        smooth={true}
        duration={500} // duração da animação em milissegundos
      >
        <Button className="h-16 w-16 bg-blue-500">{nameCategory}</Button>
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