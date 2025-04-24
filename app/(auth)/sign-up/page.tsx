"use client";

import AuthForm from "@/components/forms/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import { SignupSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm 
      formType="SIGN_UP"
      schema={SignupSchema}
      defaultValues={{name: "", username: "", email: "", password: "" }}
      onSubmit={signUpWithCredentials}
    />
  )
}

export default SignUp