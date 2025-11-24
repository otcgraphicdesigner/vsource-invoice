"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginStepOneSchema, loginStepTwoSchema } from "@/lib/validators";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

const stepOneSchema = loginStepOneSchema;
const stepTwoSchema = loginStepTwoSchema.merge(stepOneSchema);

type StepOneValues = z.infer<typeof stepOneSchema>;
type StepTwoValues = z.infer<typeof stepTwoSchema>;

export default function LoginPage() {
  const { step, employeeName, handleStepOne, handleStepTwo, pending } = useAuth();
  const stepOneForm = useForm<StepOneValues>({ resolver: zodResolver(stepOneSchema) });
  const stepTwoForm = useForm<StepTwoValues>({ resolver: zodResolver(stepTwoSchema) });

  const onStepOneSubmit = (values: StepOneValues) => {
    handleStepOne(values);
    stepTwoForm.setValue("email", values.email);
    stepTwoForm.setValue("password", values.password);
  };

  const onStepTwoSubmit = (values: StepTwoValues) => handleStepTwo(values);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
        <p className="text-sm text-slate-600">Secure two-step authentication</p>
      </div>

      <form onSubmit={step === 1 ? stepOneForm.handleSubmit(onStepOneSubmit) : stepTwoForm.handleSubmit(onStepTwoSubmit)} className="space-y-4">
        {step === 1 ? (
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <Input type="email" placeholder="you@vsource.com" {...stepOneForm.register("email")} />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <Input type="password" placeholder="••••••" {...stepOneForm.register("password")} />
            </div>
            <Button type="submit" className="w-full" disabled={pending}>
              Continue
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Employee ID</label>
              <Input placeholder="VSH001" {...stepTwoForm.register("employeeId")} />
              {employeeName && <p className="text-xs text-green-600">Employee: {employeeName}</p>}
            </div>
            <input type="hidden" {...stepTwoForm.register("email")} />
            <input type="hidden" {...stepTwoForm.register("password")} />
            <Button type="submit" className="w-full" disabled={pending}>
              Sign in
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
