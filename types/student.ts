export interface Student {
  id?: string;
  studentName: string;
  dateOfBirth: string;
  mobileNumber: string;
  nationality: string;
  fatherName: string;
  parentMobileNumber: string;
  emailAddress: string;
  gender: "Male" | "Female" | "Other";
  registrationDate: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  pincode: string;
  country: string;
  state: string;
  district: string;
  abroadMasters?: string;
  courseName: string;
  serviceCharge: number;
  academicYear: string;
  officeCity: string;
  passportNumber?: string;
  processedBy: string;
  counselorName: string;
  assignee: string;
  status?: string;
}
