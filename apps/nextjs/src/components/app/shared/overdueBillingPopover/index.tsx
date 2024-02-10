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
        <AlertDialogHeader className="flex flex-col gap-4">
          <AlertDialogTitle className="text-2xl font-extrabold text-slate-900">
            Você está prestes a
            <strong className="text-red-600/100 underline"> perder</strong> os
            benefícios!
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-6">
            <h2>
              <strong className=" text-slate-900">
                Não deixe sua jornada para o sucesso estagnar.
              </strong>
              Sem a renovação da sua assinatura,você poderá não apenas o acesso
              mas tambem tudo que contruiu aqui!
            </h2>
            <div className="flex items-center gap-6  rounded-lg  bg-gradient-to-br from-white via-indigo-50  to-white p-5 ">
              {/* bg-gradient-to-br  from-indigo-50 via-cyan-100 to-indigo-50 */}
              <Image
                src="/emojis/sad-face.png"
                alt="sad-face"
                width={55}
                height={55}
              />
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-zinc-600">sua assinatura venceu ontem</h2>
                <span>01/06/23</span>
              </div>
              <div className="flex items-center gap-4 text-red-600/100 ">
                <span className="text-7xl font-extrabold">2</span>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold">dias restantes para encerrar</h2>
                  <span>04/06/2023</span>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="m-auto flex flex-col items-center justify-center gap-2">
            <AlertDialogAction className="h-11 rounded-full px-8">
              Renovar assinatura
            </AlertDialogAction>
            <AlertDialogCancel className="rounded-full border-transparent">
              Decidir depois
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
