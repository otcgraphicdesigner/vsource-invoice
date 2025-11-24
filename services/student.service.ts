import { api } from "@/lib/axios";
import { Student } from "@/types/student";

export async function createStudent(payload: Student) {
  const { data } = await api.post<Student>("/students", payload);
  return data;
}

export async function fetchStudents() {
  const { data } = await api.get<Student[]>("/students");
  return data;
}
