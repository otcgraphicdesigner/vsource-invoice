"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentRegistrationSchema } from "@/lib/validators";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Student } from "@/types/student";
import { createStudent } from "@/services/student.service";
import { toast } from "sonner";

const defaultValues: Partial<Student> = {
  registrationDate: new Date().toISOString().slice(0, 10),
};

type FormValues = z.infer<typeof studentRegistrationSchema>;

export function StudentRegistrationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(studentRegistrationSchema),
    defaultValues: defaultValues as FormValues,
  });

  const onSubmit = async (values: FormValues) => {
    await createStudent(values as Student);
    toast.success("Student registered");
    form.reset(defaultValues as FormValues);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Registration</CardTitle>
        <CardDescription>Capture student details with validation.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {[
          { name: "studentName", label: "Student Name" },
          { name: "dateOfBirth", label: "Date of Birth", type: "date" },
          { name: "mobileNumber", label: "Mobile Number" },
          { name: "nationality", label: "Nationality" },
          { name: "fatherName", label: "Father’s Name" },
          { name: "parentMobileNumber", label: "Parent Mobile Number" },
          { name: "emailAddress", label: "Email", type: "email" },
          { name: "gender", label: "Gender" },
          { name: "registrationDate", label: "Registration Date", type: "date" },
          { name: "addressLine1", label: "Address Line 1" },
          { name: "addressLine2", label: "Address Line 2" },
          { name: "city", label: "City" },
          { name: "pincode", label: "Pincode" },
          { name: "country", label: "Country" },
          { name: "state", label: "State" },
          { name: "district", label: "District" },
          { name: "abroadMasters", label: "Abroad-Masters" },
          { name: "courseName", label: "Course Name" },
          { name: "serviceCharge", label: "Service Charge", type: "number" },
          { name: "academicYear", label: "Academic Year" },
          { name: "officeCity", label: "Office City" },
          { name: "passportNumber", label: "Passport Number" },
          { name: "processedBy", label: "Processed By" },
          { name: "counselorName", label: "Counselor Name" },
          { name: "assignee", label: "Assignee" },
        ].map((field) => (
          <div key={field.name} className="space-y-1">
            <label className="text-sm font-medium text-slate-700" htmlFor={field.name}>
              {field.label}
            </label>
            <Input
              id={field.name}
              type={field.type || "text"}
              {...form.register(field.name as keyof FormValues)}
            />
            {form.formState.errors[field.name as keyof FormValues] && (
              <p className="text-xs text-red-600">
                {form.formState.errors[field.name as keyof FormValues]?.message as string}
              </p>
            )}
          </div>
        ))}
      </CardContent>
      <div className="p-6 pt-0">
        <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
      </div>
    </Card>
  );
}
