"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginStepOne, loginStepTwo, LoginStepOnePayload, LoginStepTwoPayload } from "@/services/auth.service";

export function useAuth() {
  const [step, setStep] = useState<1 | 2>(1);
  const [employeeName, setEmployeeName] = useState<string>("");
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const handleStepOne = (payload: LoginStepOnePayload) => {
    startTransition(async () => {
      try {
        const data = await loginStepOne(payload);
        setEmployeeName(data.name);
        setStep(2);
        toast.success("Credentials verified. Continue with Employee ID.");
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Invalid credentials");
      }
    });
  };

  const handleStepTwo = (payload: LoginStepTwoPayload) => {
    startTransition(async () => {
      try {
        await loginStepTwo(payload);
        toast.success("Welcome back");
        router.push("/dashboard");
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "Invalid employee ID");
      }
    });
  };

  return { step, employeeName, handleStepOne, handleStepTwo, pending };
}
