import * as yup from "yup";
const passwordRules =
  /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;

export const basicschema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("lütfen pozitif yaş girniz")
    .integer("lütfen yaşınızı tam sayı giriniz")
    .required("lütfen yaşınızı giriniz"),
  password: yup
    .string()
    .min(5, "lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("şifrenizi girmek zorundasınız"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "şifreler eşleşmiyor")
    .required("tekrar şifre girmek zorundasınız"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "kullanıcı adı min 3 karakter olmalı")
    .required("kullanıcı-adı girmek zorunludur"),
  University: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "lütfen üniversitenizi seçiniz")
    .required("lütfen üniversitenizi seçiniz"),
  isAccepted: yup
    .boolean()
    .oneOf([true], "lütfen kullanım koşullarını kabul ediniz"),
});
