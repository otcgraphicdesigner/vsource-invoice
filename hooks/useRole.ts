"use client";

import { useEffect, useState } from "react";

export function useRole() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const stored = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("vsource_role="));
    if (stored) setRole(stored.split("=")[1]);
  }, []);

  return role;
}
