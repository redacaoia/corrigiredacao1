
const steps = [
  {
    id: "Step 1",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email"],
  },
  {
    id: "Step 2",
    name: "Address",
    fields: ["country", "state", "city", "street", "zip"],
  },
  { id: "Step 3", name: "Complete" },
  { id: "Step 4", name: "" },
];

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
] as const
"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  SubmitHandler,
  useForm,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { FaCheck } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { ColaboradorRadioGroup } from "./colaboradorRadioGroup";
import { AreaCheckboxes } from "./areaCheckboxes";
import { InvestimentoRadioGroup } from "./investimentoRadioGroup";
import { PrazoCheckboxes } from "./prazoRadioGroup";
import useScroll from "@/hooks/useScroll";
import { ImportantInformations } from "./importantInformations";
import { EscopoRadioGroup } from "./escopoRadioGroup";
import { IoCloseCircleOutline } from "react-icons/io5";
import Image from "next/image";

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


 */
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
  const defaultValues: Partial<Inputs> = {
    description: "I own a computer.",
    urls: [
      { value: "https://shadcn.com" },
      { value: "http://twitter.com/shadcn" },
    ],
  };

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });
  const scrolled = useScroll(50);
  return (
    <div className="">
      <section className="flex flex-col justify-between gap-10 pt-40 text-slate-900">
       

        <h3 className="mx-auto flex flex-col items-center gap-2">
          Antes de falar sobre o projeto leia as <ImportantInformations />
        </h3>

        {/* Form */}
        <form className="" onSubmit={handleSubmit(processForm)}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Provide your personal details.
              </p>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Olá, eu sou</Label>
                <Input type="name" id="name" placeholder="Email" />

                <Label htmlFor="email">Meu e-mail é</Label>
                <Input type="email" id="email" placeholder="Email" />

                <div className="grid md:grid-cols-2">
                  <Label htmlFor="email">Minha empresa é a</Label>
                  <Input type="email" id="email" placeholder="Email" />

                  <Label htmlFor="email">WhatsApp</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>

                <Label htmlFor="email">Site atual (se houver)</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  O número de colaboradores da minha empresa é
                </h2>

                <ColaboradorRadioGroup
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
             <div><Image src=""/></div>
              <ul>
                <li><IoCloseCircleOutline />Você perderá acesso a todos os beneficíos</li>
                <li><IoCloseCircleOutline />Você não terá mais acesso as correção detalhda</li>
                <li><IoCloseCircleOutline />Você todo o progresso feito até aqui</li>
                <li><IoCloseCircleOutline />Você perderá </li>
              </ul>
             </div>
              
            </motion.div>
          )}

          {currentStep === 2 && (
            <>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Complete
              </h2>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">
                  Esses são os detalhes do meu negócio
                </Label>
                <Textarea
                  placeholder="Me conte um pouco sobre sua empresa/negocio e quais os problemas ela resolve para seus clientes"
                  id="message"
                />
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">
                  Descreva detalhadamente o projeto
                </Label>
                <Textarea
                  placeholder="Qual a quantidade de telas, funcionalidades, estilo do design e principalmente quais os objetivos de seu projeto."
                  id="message"
                />
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">
                  Esses são os detalhes do meu negócio
                </Label>
                <Textarea
                  placeholder="Me conte um pouco sobre sua empresa/negocio e quais os problemas ela resolve para seus clientes"
                  id="message"
                />
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>

              <p className="mt-1 text-sm leading-6 text-gray-600"></p>
              <div>
                {fields.map((field, index) => (
                  <Input {...field} key={index} />
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => append({ value: "" })}
                >
                  Add URL
                </Button>
              </div>
            </>
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