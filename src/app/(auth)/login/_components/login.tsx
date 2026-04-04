"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormInput from "@/components/common/form-input";

import { INITIAL_LOGIN_FORM } from "@/constants/auth-constant";
import { LoginForm, loginSchema } from "@/validations/auth-validation";

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: INITIAL_LOGIN_FORM,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log("Login data:", data);
  });

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome</CardTitle>
        <CardDescription>Login to access all features</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormInput
            form={form}
            name="email"
            label="Email"
            placeholder="Insert email here"
            type="email"
          />

          <FormInput
            form={form}
            name="password"
            label="Password"
            placeholder="******"
            type="password"
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
