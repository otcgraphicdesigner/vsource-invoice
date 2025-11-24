"use client";

import { useMemo } from "react";
import { api } from "@/lib/axios";

export function useAxios() {
  return useMemo(() => api, []);
}
