import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().min(6).required("Required"),
        })}
        onSubmit={(values) => {
          login(values.email);
          navigate("/cart");
        }}
      >
        <Form className="flex flex-col gap-4">
          <Field name="email" placeholder="Email" className="border p-2" />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />

          <button className="bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;