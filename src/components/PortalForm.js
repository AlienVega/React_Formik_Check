import React from "react";
import { Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckBox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  actions.resetForm();
};

const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          University: "",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {(isSubmitting) => (
          <Form>
            <CustomInput
              label="kullanıcı adı"
              name="username"
              type="text"
              placeholder="kullanıcı adınızı giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="University"
              placeholder="Üniversitenizi seçiniz"
            >
              <option value="">Lütfen Üniversitenizi seçin</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              KAYDET
            </button>
            <Link className="portallink" to={"/"}>
              Ana forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalForm;
