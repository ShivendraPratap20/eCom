import * as Yup from "yup";


const ValidationSchema = Yup.object({
    name: Yup.string()
      .min(5, 'Name must be at least 5 characters')
      .required('Name is required'),
  
    email: Yup.string()
      .email('Invalid email')
      .required('Enter valid email address'),
  
    phone: Yup.string()
    .min(10, "Phone Number must be of 10 digits")
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
  
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  
    confirmPassword: Yup.string()
      .required("Confirm the password")
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  export default ValidationSchema;