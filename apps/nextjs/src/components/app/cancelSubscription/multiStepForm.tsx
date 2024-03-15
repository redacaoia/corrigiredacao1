import { useState } from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useScroll from "@/hooks/useScroll";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "sonner";
import { z } from "zod";

import { ReasonCheckboxes } from "./steps/reasonCheckboxes";

const itemsCheckbox = [
  {
    id: "nao-preciso-mais",
    label: "Não preciso mais",
  },
  {
    id: "acho-caro",
    label: "Acho caro",
  },
  {
    id: "contratei-um-outro-servico",
    label: "Contratei um outro serviço",
  },
  {
    id: "problemas-tecnicos",
    label: "Problemas técnicos",
  },
  {
    id: "outro-motivo",
    label: "Outro motivo",
  },
] as const;
("use client");

export const FormDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
  description: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      }),
    )
    .optional(),
});

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "1",
    name: "",
    fields: [], //["firstName", "lastName", "email"],
  },
  {
    id: "2",
    name: "",
    fields: [], //["country", "state", "city", "street", "zip"],
  },
  { id: "3", name: "" },
  { id: "4", name: "Complete" },
  { id: "5", name: "Complete" },
];

export function MultiStepForm() {
  const router = useRouter();
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    reset();
    //router.push("/correcao/1");
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  // isso pode vir do seu banco de dados ou API
  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    mode: "onChange",
  });

  return (
    <div className="">
      <section className="flex flex-col justify-between gap-10 pt-40 text-slate-900">
        <h3 className="mx-auto flex flex-col items-center gap-2"></h3>

        {/* Form */}
        <form className="" onSubmit={handleSubmit(processForm)}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Por que você está pensando em cancelar?
                </h2>

                <ReasonCheckboxes
                  register={register}
                  control={form.control}
                  errors={errors}
                />
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-5"
            >
              <div>
                <div>
                  <Image src="/emojis/sad.svg" alt="" />
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    O que acontecerá ao cancelar?
                  </h2>
                </div>
                <ul>
                  <li>
                    <IoCloseCircleOutline />
                    Você perderá acesso a todos os beneficíos
                  </li>
                  <li>
                    <IoCloseCircleOutline />
                    Você não terá mais acesso as correção detalhda
                  </li>
                  <li>
                    <IoCloseCircleOutline />
                    Você todo o progresso feito até aqui
                  </li>
                  <li>
                    <IoCloseCircleOutline />
                    Você perderá{" "}
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div>
              <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>

              <div className="grid w-full gap-1.5">
                <Button variant="secondary">
                  não quero cancelar minha assinatura
                </Button>

                <Button variant="destructive">cancelar minha assinatura</Button>
              </div>
            </motion.div>
          )}
        </form>

        {/* Navigation */}
        <div className=" pt-5">
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
