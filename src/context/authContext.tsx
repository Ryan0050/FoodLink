"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  signedUp: boolean;
  setSignedUp: (value: boolean) => void;
  signOut: () => void;
  role: string | null;
  setRole: (role: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signedUp, setSignedUpState] = useState<boolean>(false);
  const [role, setRoleState] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSignedUpState(localStorage.getItem("signedUp") === "true");
      setRoleState(localStorage.getItem("role"));
    }
  }, []);

  const setSignedUp = (value: boolean) => {
    setSignedUpState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("signedUp", value.toString());
    }
  };

  const setRole = (role: string | null) => {
    setRoleState(role);
    if (typeof window !== "undefined") {
      localStorage.setItem("role", role || "");
    }
  };

  const signOut = () => {
    setSignedUpState(false);
    setRoleState(null);
    if (typeof window !== "undefined") {
        localStorage.clear();
    }
};


  return (
    <AuthContext.Provider value={{ signedUp, setSignedUp, signOut, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
