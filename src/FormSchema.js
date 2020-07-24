import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Please enter your full name")
        .required("Name is required"),
    email: yup
        .string()
        .email("Email must be valid")
        .required("Email is required"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large"], "Pizza size is required"),
    crust: yup
        .string()
        .required("Crust is required"),
    sauce: yup
        .string()
        .required("Sauce is required"),
    specialInstructions: yup
        .string()
})

export default formSchema