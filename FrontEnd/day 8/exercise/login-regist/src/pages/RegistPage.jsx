/** @format */

import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import axiosInstance from "../axios";
import { useState } from "react";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export default function RegistPage() {
  const [show, setShow] = useState(false);
  const showValue = () => setShow(!show);

  const handleRegister = async (value, form) => {
    await axiosInstance.post("/userCredential", value);
    form.resetForm();
  };
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Please fill your name")
      .min(6, "Please fill the name with more than 6 character"),
    email: yup
      .string()
      .required("Please fill your email")
      .email("Please fill with valid email format"),
    password: yup
      .string()
      .required("Please fill your password")
      .min(6, "Please fill the password with more than 6 character")
      .minLowercase(1, "Password must contain 1 lowercase")
      .minUppercase(1, "Password must contain 1 uppercase")
      .minNumbers(1, "Password must contain 1 number")
      .minSymbols(1, "Password must contain 1 symbols"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleRegister}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <Form>
          <Center>
            <Container
              m={"20px"}
              p={"10px 25px"}
              bgColor={"#ADD9E6"}
              borderRadius={"md"}
              maxW={"350px"}
            >
              <Heading>Page Register</Heading>
              <FormControl
                pt={"10px"}
                isInvalid={formikProps.touched.name && formikProps.errors.name}
              >
                <FormLabel>Name</FormLabel>
                <Input
                  bgColor={"whitesmoke"}
                  value={formikProps.values.name}
                  onChange={formikProps.handleChange}
                  name="name"
                />
                <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                pt={"10px"}
                isInvalid={
                  formikProps.touched.email && formikProps.errors.email
                }
              >
                <FormLabel>Email</FormLabel>
                <Input
                  bgColor={"whitesmoke"}
                  value={formikProps.values.email}
                  onChange={formikProps.handleChange}
                  name="email"
                />
                <FormErrorMessage>{formikProps.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                pt={"10px"}
                isInvalid={
                  formikProps.touched.password && formikProps.errors.password
                }
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    bgColor={"whitesmoke"}
                    value={formikProps.values.password}
                    onChange={formikProps.handleChange}
                    name="password"
                    type={show ? "text" : "password"}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={showValue}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Center mt={"20px"}>
                <Button type="submit">Submit</Button>
              </Center>
            </Container>
          </Center>
        </Form>
      )}
    </Formik>
  );
}
