import "../form/form.css"
import bg from "../../assets/images/form-bg.jpg"
import FormButton from "../../components/button"
import { Formik, useFormik } from "formik"
import { TextField } from "@mui/material"
import { schema } from "../../schema"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Form = () => {
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (action) => {
      console.log("hellllllllppppppp");
     action.resetForm()
     toast("Wow so easy!")
    },
  })
  return (
    <div className="form__container">
      <form className="form" onSubmit={Formik.handleSubmit}>
        <div className="form__box">
          <ToastContainer />
          <h2>Registation-Form</h2>
          <TextField
            name="name"
            label={"Enter Your Name"}
            variant={"standard"}
            className={"input__field"}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.errors.name && Formik.touched.name ? (
            <span>{Formik.errors.name}</span>
          ) : null}
          <TextField
            name="email"
            label={"Enter Your email"}
            variant={"standard"}
            className={"input__field"}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.errors.email && Formik.touched.email ? (
            <span>{Formik.errors.email}</span>
          ) : null}
          <TextField
            name="password"
            label={"Enter Your Password"}
            variant={"standard"}
            className={"input__field"}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.errors.password && Formik.touched.password ? (
            <span>{Formik.errors.password}</span>
          ) : null}
          <TextField
            label={"Confirm Password"}
            name="confirmpassword"
            variant={"standard"}
            className={"input__field"}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.errors.confirmpassword && Formik.touched.confirmpassword ? (
            <span>{Formik.errors.confirmpassword}</span>
          ) : null}
          <FormButton
            type={"submit"}
            value={"Register"}
            buttonStyle={"form__button"}
          />
        </div>
        <div className="form__img">
          <img src={bg} alt="" />
        </div>
      </form>
    </div>
  )
}

export default Form
