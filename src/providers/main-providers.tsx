"use client";

import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface IMainProvidersProps {
  readonly children: ReactNode;
}

export function MainProviders({ children }: IMainProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <main className="flex-grow">
        <div className="flex-grow">{children}</div>
      </main>
    </NextUIProvider>
  );
}
