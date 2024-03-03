"use client";

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
      <AlertDialogContent className="max-w-auto h-auto rounded-lg border-none p-0 md:max-w-[95%] ">
        <div className="mx-auto w-full cursor-pointer rounded-lg bg-blue-700 py-2 text-slate-200">
          <AlertDialogCancel className="ml-auto border-none bg-transparent hover:bg-transparent p-0 text-lg">
            <IoIosClose/>
            Corrigir redação
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
