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
import { IoIosAddCircle, IoIosClose } from "react-icons/io";

import { MultiStepForm } from "./multiStepForm";

export function AddWriting() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <IoIosAddCircle
          size="65"
          color="#0157C8"
          className="absolute -top-16"
        />
      </AlertDialogTrigger>

      <AlertDialogContent className="h-full max-h-full w-full  max-w-full md:max-h-[90%]  md:max-w-[90%]">
        <AlertDialogFooter>
          <AlertDialogCancel className="left-0 p-1">
            <IoIosClose size="40" />
            Cancelar
          </AlertDialogCancel>
        </AlertDialogFooter>
        <MultiStepForm />
        <div className="h-full w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        {/*  <AlertDialogFooter className="">
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}
