import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MdDeleteForever } from "react-icons/md";

interface Props {}

export function WritingDelete({}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MdDeleteForever size={24} className="text-red-600" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja excluir essa correção?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao clicar em <strong>continuar</strong>,essa correção não estará
            mais disponível!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelarl</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
