import React, {useState} from 'react';
import AuthService from '../../services/AuthService';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import IUser from "../../types/user";
import {useNavigate} from "react-router-dom";

const Register: React.FC = () => {
    const [successful, setSuccessful] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<Array<any>>();
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const initialValues: IUser = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .test(
                "len",
                "The username must be at least 5 characters long",
                (val: any) =>
                    val &&
                    val.toString().length >= 5
            )
            .required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
    });
    const handleRegister = (formValue: IUser) => {
        const {username, email, password} = formValue;

        AuthService.register(email, username, password).then(
            (response) => {
                setSuccessMessage(response.data.message);
                setSuccessful(true);
                setTimeout(() => navigate('/login'), 3000)
            },
            (error) => {
                setErrorMessages(error.response.data.err.errors);
                setSuccessful(false);
            }
        );
    };
    return (
        <div className="flex flex-row justify-center text-gray-900">
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border rounded-lg border-gray-300">
                <div className="text-3xl mt-2 font-bold text-center mb-4"> Register new user</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    {({errors, touched}) => (
                        <Form>
                            {!successful && (
                                <div>
                                    <div>
                                        <Field name="email" type="email" required
                                               className="w-full p-2 border border-gray-300 rounded mt-1"
                                               placeholder="Enter Email"/>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <Field name="username" type="text"
                                               className="w-full p-2 border border-gray-300 rounded mt-1"
                                               placeholder="Enter Username"/>
                                        <ErrorMessage
                                            name="username"
                                            component="div"
                                            className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <Field name="password" type="password"
                                               className="w-full p-2 border border-gray-300 rounded mt-1"
                                               placeholder="Enter Password"/>
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                        />

                                    </div>
                                    <div className="mt-4 bg-gradient-to-r 
                                    from-pink-500 to-violet-500 rounded-lg p-2">
                                        <button className="w-full rounded text-white font-bold" type="submit">Submit
                                        </button>
                                    </div>
                                </div>
                            )}
                            {successful && (
                                <div className="form-group">
                                    <div
                                        className={
                                            "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                                        }
                                        role="alert"
                                    >
                                        {successMessage}
                                    </div>
                                </div>
                            )}
                            {errorMessages?.length && (
                                <div className="form-group">
                                    <div
                                        className={
                                            "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                        }
                                        role="alert"
                                    >
                                        {errorMessages[0].msg}
                                    </div>
                                </div>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register;