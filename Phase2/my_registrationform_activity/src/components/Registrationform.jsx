import { useRef, useState } from "react";

function Registrationform() {
  // useRef for input fields
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // useState for errors and submission status
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessages = {};
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    // Name validation part
    const nameRegex = /^[A-Za-z]+ /;
    if (!firstName) {
      errorMessages.firstName = "First name is required";
    } else if (!nameRegex.test(firstName)) {
      errorMessages.firstName = "Only alphabets allowed";
    }

    if (!lastName) {
      errorMessages.lastName = "Last name is required";
    } else if (!nameRegex.test(lastName)) {
      errorMessages.lastName = "Only alphabets allowed";
    }
    // Email validation part
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errorMessages.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errorMessages.email = "Invalid email format";
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!password) {
      errorMessages.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errorMessages.password =
        "Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char";
    }
    setErrors(errorMessages);
    setSubmitted(Object.keys(errorMessages).length === 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 >Registration Form</h2>

      <div>
        <input type="text" placeholder="First Name" ref={firstNameRef} />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
      </div>

      <div>
        <input type="text" placeholder="Last Name" ref={lastNameRef} />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
      </div>

      <div>
        <input type="text" placeholder="Email" ref={emailRef} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <input type="password" placeholder="Password" ref={passwordRef} />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>

      {submitted && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
    </form>
  );
}

export default Registrationform;
