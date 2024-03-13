import { useFormik } from "formik";
import { z } from "zod";
import { _ZOD } from "../_zodConfig";

function ZODFormik() {
  const validationSchema = _ZOD(
    z
      .object({
        fname: z
          .string({
            required_error: "First Name is required",
          })
          .max(20, "Maxium charecters reached")
          .min(2, "Minum charecters not reached"),
        lname: z
          .string({
            required_error: "Last Name is required",
          })
          .max(20, "Maxium charecters reached")
          .min(2, "Minum charecters not reached"),
        mobile: z
          .string({
            required_error: "Mobile number is required",
          })
          .refine(
            (val) => {
              return val.length === 10;
            },
            {
              message: "Invalid mobile number",
            }
          )
          .refine(
            (val) => {
              return /[0-9]/.test(val);
            },
            {
              message: "Invalid mobile number",
            }
          ),
      })
      .refine(
        (data) => {
          const { fname, lname } = data;
          console.log(fname);
          return fname !== lname;
        },
        {
          message: "F Name must be not equal to L Name",
          path: ["fname"],
        }
      )
      .refine(
        (data) => {
          const { fname, lname } = data;
          return fname !== lname;
        },
        {
          message: "L Name must be not equal to F Name",
          path: ["lname"],
        }
      )
  );

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fname: "",
        lname: "",
        mobile: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });
  console.log(errors, "errors");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              fontWeight: "600",
              color: "steelblue",
            }}
          >
            First Name
          </p>
          <input
            type="text"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors?.fname && touched.fname && (
            <p
              style={{
                margin: "0px",
                padding: "0px",
                color: "#ff4242",
                fontSize: "12px",
              }}
            >
              {errors.fname}
            </p>
          )}
        </div>
        <div>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              fontWeight: "600",
              color: "steelblue",
            }}
          >
            Last Name
          </p>
          <input
            type="text"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors?.lname && touched.lname && (
            <p
              style={{
                margin: "0px",
                padding: "0px",
                color: "#ff4242",
                fontSize: "12px",
              }}
            >
              {errors.lname}
            </p>
          )}
        </div>

        <div>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              fontWeight: "600",
              color: "steelblue",
            }}
          >
            Modile Number
          </p>
          <input
            type="text"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors?.mobile && touched.mobile && (
            <p
              style={{
                margin: "0px",
                padding: "0px",
                color: "#ff4242",
                fontSize: "12px",
              }}
            >
              {errors.mobile}
            </p>
          )}
        </div>
        <button type="submit" style={{ margin: "10px 1px" }}>
          submit
        </button>
      </form>
    </div>
  );
}

export default ZODFormik;
