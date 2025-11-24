import { NextResponse } from "next/server";
import { verifyCredentials, setAuthCookies } from "@/lib/auth";
import { loginStepOneSchema, loginStepTwoSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json();
  const { step } = body;

  if (step === 1) {
    const parsed = loginStepOneSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    }
    const user = verifyCredentials(parsed.data.email, parsed.data.password);
    if (!user) return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    return NextResponse.json({ employeeId: user.employeeId, name: user.name });
  }

  if (step === 2) {
    const parsedStepOne = loginStepOneSchema.safeParse(body);
    const parsedStepTwo = loginStepTwoSchema.safeParse(body);
    if (!parsedStepOne.success || !parsedStepTwo.success) {
      return NextResponse.json({ message: "Invalid login details" }, { status: 400 });
    }
    const user = verifyCredentials(parsedStepOne.data.email, parsedStepOne.data.password, parsedStepTwo.data.employeeId);
    if (!user) return NextResponse.json({ message: "Invalid login details" }, { status: 401 });

    setAuthCookies(user);
    return NextResponse.json({ token: `${user.email}-token`, role: user.role, name: user.name });
  }

  return NextResponse.json({ message: "Unsupported step" }, { status: 400 });
}
