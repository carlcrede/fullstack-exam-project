import React, {useState} from "react";
import AuthService from "./services/AuthService";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import IUser from "./types/user";

const Register: React.FC = () => {
    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: IUser = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .test(
                "len",
                "The username must be between 5 and 20 characters.",
                (val: any) =>
                    val &&
                    val.toString().length >= 5 &&
                    val.toString().length <= 20
            )
            .required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });
    const handleRegister = (formValue: IUser) => {
        const {username, email, password} = formValue;

        AuthService.register(email, username, password).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };
        return (
            <div className=" min-h-screen bg-gray-50 flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-3xl mt-2 font-bold text-gray-900 text-center"> Register new user</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                    >
                        <Form>
                            {!successful && (
                                <div>
                                    <div>
                                        <label className="text-sm font-bold text-gray-600 block">Email</label>
                                        <Field name="email" type="email" required
                                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                                               placeholder="Enter Email"/>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-gray-600 block">Username</label>
                                        <Field name="username" type="text"
                                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                                               placeholder="Enter Username"/>
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-gray-600 block ">Password</label>
                                        <Field name="password"
                                               className="w-full p-2 border border-gray-300 rounded mt-1 text-gray-600"
                                               placeholder="Enter Password"/>
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="alert alert-danger"
                                        />

                                    </div>
                                    <div>
                                        <button className="w-full bg-blue-600 rounded text-white">Submit</button>
                                    </div>
                                </div>
                            )}
                            {message && (
                                <div className="form-group">
                                    <div
                                        className={
                                            successful ? "alert alert-success" : "alert alert-danger"
                                        }
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                </div>
                            )}
                        </Form>
                    </Formik>
                </div>
            </div>
        )
    }

    export default Register