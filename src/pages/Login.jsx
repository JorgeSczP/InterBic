import React from "react";
import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <div class="relative min-h-screen flex-col items-center pt-20 overflow-hidden">
      <div className="flex w-full justify-center text-white">
        <FormLogin />
      </div>
    </div>
  );
}
