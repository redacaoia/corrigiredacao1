"use client";

import { useState } from "react";
import FinalStep from "@/components/app/cancelSubscription/multiStepFform/fragments/FinalStep";
import PlanForm from "@/components/app/cancelSubscription/multiStepFform/fragments/PlanForm";
import SideBar from "@/components/app/cancelSubscription/multiStepFform/fragments/SideBar";
import SuccessMessage from "@/components/app/cancelSubscription/multiStepFform/fragments/SuccessMessage";
import UserInfoForm from "@/components/app/cancelSubscription/multiStepFform/fragments/UserInfoForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";

import { useMultiplestepForm } from "~/hooks/useMultiplestepForm";
import { Reason } from "./fragments/reason";

interface AddOn {
  id: number;
  checked: boolean;
  title: string;
  subtitle: string;
  price: number;
}

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  yearly: boolean;
  addOns: AddOn[];
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: "Não preciso mais",
      subtitle: "Access to multiple games",
      price: 1,
    },
    {
      id: 2,
      checked: false,
      title: "Acho caro",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      checked: false,
      title: "Problemas técnicos",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
    {
      id: 4,
      checked: false,
      title: "Contratei um outro serviço",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
    {
      id: 5,
      checked: false,
      title: "Outro motivo",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
  ],
};

export function MultiStepForm() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(4);

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    const { name, email, phone } = fieldToUpdate;

    if (name && name.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be at least 3 characters long",
      }));
    } else if (name && name.trim().length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (phone && !/^[0-9]{10}$/.test(phone)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid 10-digit phone number",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }

    setFormData({ ...formData, ...fieldToUpdate });
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    nextStep();
  };

  return (
    <>
      <Card
        className={`flex justify-between ${
          currentStepIndex === 1 ? "w-full h-[600px] md:h-[500px]" : "w-full h-[500px]"
        } relative m-1  rounded-lg border bg-slate-50 p-4 `}
      >
        {!showSuccessMsg ? (
          <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
        ) : (
          ""
        )}
        <main
          className={`${
            showSuccessMsg ? "w-full" : "w-full md:mt-5 md:w-[65%]"
          }`}
        >
          {showSuccessMsg ? (
            <AnimatePresence mode="wait">
              <SuccessMessage />
            </AnimatePresence>
          ) : (
            <form
              onSubmit={handleOnSubmit}
              className="flex h-full w-full flex-col justify-between"
            >
              <AnimatePresence mode="wait">
                {currentStepIndex === 0 && (
                  <UserInfoForm
                    key="step1"
                    {...formData}
                    updateForm={updateForm}
                    errors={errors}
                  />
                )}
                {currentStepIndex === 1 && (
                  <PlanForm key="step2" {...formData} updateForm={updateForm} />
                )}
                {currentStepIndex === 2 && (
                  <Reason key="step3" {...formData} updateForm={updateForm} />
                )}
                {currentStepIndex === 3 && (
                  <FinalStep key="step4" {...formData} goTo={goTo} />
                )}
              </AnimatePresence>
              <div className="flex w-full items-center justify-between">
                <div className="">
                  <Button
                    onClick={previousStep}
                    type="button"
                    variant="ghost"
                    className={`${
                      isFirstStep
                        ? "invisible"
                        : "visible p-0 text-neutral-200 hover:text-white"
                    }`}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="flex items-center">
                  <div className="after:shadow-highlight relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-white/10 after:transition focus-within:after:shadow-[#77f6aa]">
                    <Button
                      type="submit"
                      className="relative rounded-xl border border-black/20 bg-neutral-900 text-neutral-200 shadow-input hover:text-white"
                    >
                      {isLastStep ? "Confirm" : "Next Step"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </main>
      </Card>
    </>
  );
}
