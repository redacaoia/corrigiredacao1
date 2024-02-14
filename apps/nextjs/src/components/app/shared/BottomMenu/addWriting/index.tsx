import { MultiStepForm } from "@/components/app/cancelSubscription/multiStepFform";
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
import { IoIosAddCircle } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
export function AddWriting() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <IoIosAddCircle size="65" color="#0157C8" className="absolute -top-16" />
      </AlertDialogTrigger>

      <AlertDialogContent className="w-full h-full max-w-full  max-h-full">
      <AlertDialogFooter>
          <AlertDialogCancel className="p-1 left-0"><IoIosClose size="40"/>Cancelar</AlertDialogCancel>
        </AlertDialogFooter>
       {/*  <MultiStepForm/> */}
      <div className="w-full h-full">
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
