"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {  useEffect } from "react";
import { RootState } from "@/helpers/hooks/useStoreHooks";

const ProtectedRoute = ({ children }:any) => {
  const router = useRouter();
  const token = useSelector((state:RootState)=> state.Auth);
  // const isAuthenticated = Object.entries(token.token).length != 0 
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login page if user is not authenticated
      router.push('/auth/login');
    }
  }, [isAuthenticated]);

  return <>{children}</>
};

export default ProtectedRoute;
