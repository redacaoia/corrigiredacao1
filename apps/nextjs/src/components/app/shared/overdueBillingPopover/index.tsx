import Image from "next/image";
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

export function OverdueBilling() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="" variant="outline">
          Show Dialog
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você está prestes a <strong>perder</strong> os benefícios!
          </AlertDialogTitle>
          <AlertDialogDescription>
            <strong>Não deixe sua jornada para o sucesso estagnar.</strong>
            Sem a renovação da sua assinatura,você poderá não apenas o acesso
            mas tambem tudo qu contruiu aqui!
            <div className="flex items-center gap-2 bg-sky-600/100">
              <Image src="/sad-face.png" alt="sad-face" width={24}  height={24}/>
              <div>
                <h2>sua assinatura venceu ontem</h2>
                <span>01/06/23</span>
              </div>
              <div>
                <span className="font-extrabold text">6</span>
                <div>
                  <h2>dias restantes para encerrar</h2>
                  <span>06/06/2023</span>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="m-auto flex flex-col items-center justify-center gap-4">
            <AlertDialogAction className="h-11 rounded-full px-8">
              Renovar assinatura
            </AlertDialogAction>
            <AlertDialogCancel className="border-transparent">
              Decidir depois
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
