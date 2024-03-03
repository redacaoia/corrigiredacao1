'use client'
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
      <AlertDialogTrigger>
        <IoIosAddCircle
          size="65"
          color="#0157C8"
          className="absolute -top-16"
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-auto md:max-w-[95%] h-auto">
        <div className="mx-auto">
        <AlertDialogCancel className="left-0 ml-auto p-1">
          <IoIosClose size="40" />
          Cancelar
        </AlertDialogCancel>
        </div>
       {/*  <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader> */}
        <MultiStepForm />
        {/*   <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
}

