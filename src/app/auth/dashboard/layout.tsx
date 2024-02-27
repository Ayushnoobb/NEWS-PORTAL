"use client"

import { ReduxProvider } from "@/dynamic-imports/redux-app";
import ProtectedRoute from "@/views/protected/protected";

export default function DashBoardLayout({children}:any){
  console.log("dl");
  return(
    <ReduxProvider>
      <ProtectedRoute><>{children}</></ProtectedRoute>
    </ReduxProvider>
  )
}