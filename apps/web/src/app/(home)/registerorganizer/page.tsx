"use client";

import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { registerOrganizer } from "@/libs/action/organizer";

const signUpSchema = yup.object().shape({
      username: yup.string().required("username is required"),
      email: yup
            .string()
            .email("please enter a valid email")
            .required("email is required"),
      password: yup
            .string()
            .required("password is required")
            .min(8, "password must be at least 8 characters"),
});

export interface ISignUpOrganizer {
      username: string;
      email: string;
      password: string;
}

export default function SignUpOrganizer() {

      const initialValues: ISignUpOrganizer = { 
            username: "", 
            email: "", 
            password: ""
      };

      const onRegisterOrganizer = async (data: ISignUpOrganizer) => {
            try {
                  const res = await registerOrganizer(data)
                  console.log(res)
                  // toast.info('Register Success');
            } catch (error) {
                  console.log(error)
            }
      }


      return (
            <div className="bg-primary " id="#registerorganizer">
                  <div className="flex justify-center">
                        <Image src="/Logo-minpro.png" alt="hero" width={200} height={200}
                              className="w-[150px] mx-10 items-center"
                        />
                  </div>
                  <div className="flex flex-col sm:flex-row h-svh justify-center items-center">
                        <div className="p-5">
                        <Image
                                    src="/photo/1concert.jpg"
                                    alt="hero"
                                    width={600}
                                    height={600}
                                    className="mb-10 sm:mb-48 shadow-lg border-[1px] rounded-[20px]"
                              />
                        </div>
                        <div className="mb-40 flex flex-col">
                              
                              <h1 className="font-bold  mx-10 font-[bold] text-[28px] text-secondary p-1">BE EVENT ORGANIZER!</h1>
                              <Formik
                                    initialValues={initialValues}
                                    validationSchema={signUpSchema}
                                    onSubmit={(values, action) => {
                                          onRegisterOrganizer(values)
                                          action.resetForm()
                                          console.log(values);
                                    }}
                              >
                                    {(props: FormikProps<ISignUpOrganizer>) => {
                                          return (
                                                <div className="my-6">
                                                      <Form>
                                                            <div className="flex flex-col gap-5 items-center">
                                                            <p className="text-secondary text-[12px] mr-[400px] font-[normal]">continue as <Link href="/registeruser" className="text-third hover:font-[bold] hover:text-secondary duration-300 font-[normal]">user</Link></p>
                                                                  <div>
                                                                        <Field
                                                                              type="text"
                                                                              name="username"
                                                                              placeholder="Username"
                                                                              className="md:min-w-[500px] mx-10  rounded-full pl-5 pr-10 py-3 border-[1px] border-gray-400 focus:outline-none"
                                                                        />
                                                                        <ErrorMessage
                                                                              name="username"
                                                                              component={"div"}
                                                                              className="text-third text-[12px]  pl-6 mx-10"
                                                                        />
                                                                  </div>
                                                                  <div>
                                                                        <Field
                                                                              type="text"
                                                                              name="email"
                                                                              placeholder="Email"
                                                                              className="md:min-w-[500px] mx-10 rounded-full pl-5 pr-10 py-3 border-[1px] border-gray-400 focus:outline-none"
                                                                        />
                                                                        <ErrorMessage
                                                                              name="email"
                                                                              component={"div"}
                                                                              className="text-third text-[12px]  pl-6 mx-10"
                                                                        />
                                                                  </div>
                                                                  <div>
                                                                        <Field
                                                                              type="password"
                                                                              name="password"
                                                                              placeholder="Password"
                                                                              className=" md:min-w-[500px] mx-10 rounded-full pl-5 pr-10 py-3 border-[1px] border-gray-400 focus:outline-none"
                                                                        />
                                                                        <ErrorMessage
                                                                              name="password"
                                                                              component={"div"}
                                                                              className="text-third text-[12px]  pl-6 mx-10 "
                                                                        />
                                                                  </div>
                                                                  <button
                                                                        type="submit"
                                                                        className="mt-4 text-secondary w-[100px] md:min-w-[150px] text-center  py-1 rounded-full font-semibold hover:bg-secondary hover:text-primary hover:border-[1px] hover:w-[155px]  duration-300 ease-in-out border-[1px] active:bg-third "
                                                                  >Sign Up</button>
                                                                  <p className=" text-secondary text-[12px] text-center font-[normal]">
                                                                        already have an EventUs account? <Link href="/loginorganizer" className="text-third hover:font-[bold] hover:text-secondary duration-300 font-[normal]">login</Link></p>
                                                            </div>
                                                      </Form>
                                                </div>
                                          );
                                    }}
                              </Formik>
                        </div>
                  </div>
            </div>
      );
}