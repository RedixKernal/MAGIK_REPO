import { Formik, FieldArray } from "formik";
import { z } from "zod";
import { _ZOD } from "../_zodConfig";

type Tusers = {
  userName: string;
  userId: string;
};
type TIntialValues = {
  users: Tusers[];
};

const ZODFormikFieldArray = () => {
  const intialValues: TIntialValues = {
    users: [{ userName: "", userId: "" }],
  };

  const validationSchema = _ZOD(
    z.object({
      users: z.array(
        z.object({
          userName: z
            .string({
              required_error: "User Name is required",
            })
            .max(12, "Maxium charecters reached")
            .min(6, "Minum charecters not reached"),
          userId: z
            .string({
              required_error: "User Id is required",
            })
            .refine(
              (val) => {
                return /[0-9]/.test(val);
              },
              {
                message: "Invalid user id",
              }
            ),
        })
      ),
    })
  );

  return (
    <Formik
      initialValues={intialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        setFieldValue,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FieldArray name="users">
              {({ push, remove }) => {
                return (
                  <div>
                    <div>
                      {values?.users?.map((user, index) => {
                        return (
                          <div
                            key={index}
                            style={{
                              margin: "5px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "flex-end",
                            }}
                          >
                            <div>
                              <div>
                                <p
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "600",
                                    color: "steelblue",
                                  }}
                                >
                                  User Name
                                </p>
                                <input
                                  type="text"
                                  name={`users[${index}].userName`}
                                  value={user?.userName}
                                  onChange={(e) => {
                                    setFieldValue(
                                      `users[${index}].userName`,
                                      e.target.value
                                    );
                                  }}
                                  onBlur={handleBlur}
                                />
                                {errors?.users &&
                                  touched?.users &&
                                  errors?.users[index]?.userName &&
                                  touched?.users[index]?.userName && (
                                    <p
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        color: "#ff4242",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {errors?.users[index]?.userName}
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
                                  User Id
                                </p>
                                <input
                                  type="text"
                                  name={`users[${index}].userId`}
                                  value={user?.userId}
                                  onChange={(e) => {
                                    setFieldValue(
                                      `users[${index}].userId`,
                                      e.target.value
                                    );
                                  }}
                                  onBlur={handleBlur}
                                />
                                {errors?.users &&
                                  touched?.users &&
                                  errors?.users[index]?.userId &&
                                  touched?.users[index]?.userId && (
                                    <p
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        color: "#ff4242",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {errors?.users[index]?.userId}
                                    </p>
                                  )}
                              </div>
                            </div>
                            <div>
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                style={{
                                  margin: "0px 5px",
                                  padding: "10px",
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        margin: "10px 0px",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => push({ userName: "", userId: "" })}
                        style={{
                          margin: "0px 10px",
                        }}
                      >
                        Add User
                      </button>
                      <button
                        type="submit"
                        style={{
                          margin: "0px 10px",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                );
              }}
            </FieldArray>
          </form>
        );
      }}
    </Formik>
  );
};

export default ZODFormikFieldArray;
