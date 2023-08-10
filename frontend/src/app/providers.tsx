"use client";

import React from "react";
import { FoldersProvider } from "./FoldersContext";

export function Providers({ children }: React.PropsWithChildren<{}>) {
  return <FoldersProvider>{children}</FoldersProvider>;
}
