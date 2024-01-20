const yup = require("yup");

const validationSchema = yup.object({
  username: yup
    .string()
    .required({ required_error: "Name is required" })
    .min(3, "Name must be at least 3 characters" ),

  age: yup
    .number()
    .required({ required_error: "Age is required" })
    .positive({ message: "Age must be a positive integer" }),

  gender: yup
    .string()
    .required({ required_error: "Sex is required" })
    .oneOf(["M", "F"], { message: "Invalid value for Sex" }),

  phone: yup
    .string()
    .required({ required_error: "Mobile number is required" })
    .matches(/^[6-9]\d{9}$/, { message: "Invalid Indian mobile number" }),

  govtIdType: yup
    .string()
    .required({ required_error: "Government Issued ID Type is required" })
    .oneOf(["Aadhar", "PAN"], { message: "Invalid value for ID Type" }),

  govtid: yup.string().when("govtIdType", {
    is: (govtIdType) => govtIdType === "Aadhar",
    then: (schema) =>
      schema.required("govt id  is required").matches(/^[2-9]\d{11}$/, {
        message:
          "Invalid Aadhar number. It should have 12 numeric digits and should not start with 0 and 1.",
      }),
    otherwise: (schema) => schema,
  }),

  address: yup.string().required({ required_error: "Address is required" }),

  state: yup.string().required({ required_error: "State is required" }),

  city: yup.string().required({ required_error: "City is required" }),

  country: yup.string().required({ required_error: "Country is required" }),

  pin: yup
    .string()
    .required({ required_error: "Pincode is required" })
    .matches(/^\d+$/, { message: "Pincode must be numeric" }),
});

const validateSchemaMiddleware = (schema) => async (req, resp, next) => {
  try {
    const parseBody = await schema.validate(req.body, { abortEarly: false });
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 400;
    const message = "Fill the input properly!";

    const extraDetails = [];

    if (err.inner) {
      err.inner.forEach((error) => {
        // Store only the error messages directly
        extraDetails.push(error.message);
      });
    }

    const error = {
      status,
      message,
      extraDetails,
    };

    next(error);
  }
};

module.exports = {
  validationSchema,
  validateSchema: validateSchemaMiddleware,
};
