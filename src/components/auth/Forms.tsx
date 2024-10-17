import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";

function Forms() {
  const [form, setForm] = useState("login");

  const toggleForm = (formName: "login" | "signin") => {
    setForm(formName);
  };

  return form === "login" ? (
    <Login toggleForm={toggleForm} />
  ) : (
    <Signin toggleForm={toggleForm} />
  );
}

export default Forms;
