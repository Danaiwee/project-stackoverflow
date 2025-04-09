"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignupSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm 
      formType="SIGN_UP"
      schema={SignupSchema}
      defaultValues={{name: "", username: "", email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({success: true, data})}
    />
  )
}

export default SignUp