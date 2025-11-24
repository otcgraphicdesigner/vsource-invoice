import { z } from "zod";

export const loginStepOneSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginStepTwoSchema = z.object({
  employeeId: z.string().min(3),
});

export const studentRegistrationSchema = z.object({
  studentName: z.string().min(2),
  dateOfBirth: z.string(),
  mobileNumber: z.string().min(10),
  nationality: z.string().min(2),
  fatherName: z.string().min(2),
  parentMobileNumber: z.string().min(10),
  emailAddress: z.string().email(),
  gender: z.enum(["Male", "Female", "Other"]),
  registrationDate: z.string(),
  addressLine1: z.string(),
  addressLine2: z.string().optional(),
  city: z.string(),
  pincode: z.string(),
  country: z.string(),
  state: z.string(),
  district: z.string(),
  abroadMasters: z.string().optional(),
  courseName: z.string(),
  serviceCharge: z.number(),
  academicYear: z.string(),
  officeCity: z.string(),
  passportNumber: z.string().optional(),
  processedBy: z.string(),
  counselorName: z.string(),
  assignee: z.string(),
});
