import { string, number, object, ref } from "yup"

export const schema = object({
  name: string().min(2).max(25).required("Please enter your name !"),
  email: string().email().required("Please enter your email !"),
  password: number().min(6).required("Please enter your password !"),
  confirmpassword: number().oneOf(
    [ref("password"), null],
    "password does not match !"
  ),
})
