import React from "react";
import { useFormik } from "formik";
import { basicschema } from "../schemas";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  actions.resetForm();
};

const GeneralForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        ConfirmPassword: "",
      },
      validationSchema: basicschema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail adresinizi giriniz!"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı giriniz"
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="şifrenizi giriniz"
          className={errors.email ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.ConfirmPassword}
          onChange={handleChange}
          id="ConfirmPassword"
          placeholder="şifrenizi tekrar giriniz"
          className={errors.email ? "input-error" : ""}
        />
        {errors.ConfirmPassword && (
          <p className="error">{errors.ConfirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        KAYDET
      </button>
      <Link className="portallink" to={"/portal"}>
        Portala Git
      </Link>
    </form>
  );
};

export default GeneralForm;
