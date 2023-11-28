/** @format */

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axiosInstace from "../axios";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export default function HeroesDisplay() {
  const [heroes, setHeroes] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchHeros();
  }, []);

  const fetchHeros = async () => {
    try {
      const res = await axiosInstace.get("/superheroes");
      setHeroes(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmitHero = async (value, form) => {
    if (selectedId === null) {
      const res = await axiosInstace.post("/superheroes", value);
      setHeroes((prev) => {
        return [...prev, res.data];
      });
    } else {
      const res = await axiosInstace.put("/superheroes", value);
      setHeroes((prev) => {
        const indexEdited = prev.findIndex((hero) => hero.id === selectedId);
        const copyPrev = [...prev];
        copyPrev[indexEdited] = res.data;
        return copyPrev;
      });
    }
    form.resetForm();
    setSelectedId(null);
  };

  const setEditSelected = (id, formik) => {
    setSelectedId(id);
    const [hero] = heroes.filter((hero) => hero.id === id);
    formik.setFieldValue("name", hero.name);
    formik.setFieldValue("color", hero.color);
  };

  const deleteHero = async (id) => {
    if (!confirm("Are you sure to delete this hero ?")) {
      return;
    }

    await axiosInstace.delete(`superheroes/${id}`);
    setHeroes((prev) => prev.filter((hero) => hero.id !== id));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Isi dulu").min(3, "yang bener"),
    color: Yup.string().required("Isi dulu"),
  });

  return (
    <Formik
      initialValues={{ name: "", color: "" }}
      onSubmit={handleSubmitHero}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <Box mt={10}>
          <Heading>Heroes:</Heading>
          <UnorderedList>
            {heroes.map((hero) => (
              <ListItem key={hero.id}>
                <HStack>
                  <Text w="full">
                    {hero.name} ({hero.color})
                  </Text>
                  <Button onClick={() => setEditSelected(hero.id, formikProps)}>
                    Edit
                  </Button>
                  <Button onClick={() => deleteHero(hero.id)} colorScheme="red">
                    Delete
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
          <Form>
            <Box mt={2}>
              <FormControl
                isInvalid={formikProps.touched.name && formikProps.errors.name}
              >
                <FormLabel>Hero Name</FormLabel>
                <Input
                  value={formikProps.values.name}
                  onChange={formikProps.handleChange}
                  name="name"
                  placeholder="Hero name"
                />
                <FormErrorMessage>{formikProps.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  formikProps.touched.color && formikProps.errors.color
                }
              >
                <FormLabel>Color</FormLabel>
                <Input
                  value={formikProps.values.color}
                  onChange={formikProps.handleChange}
                  name="color"
                  placeholder="Hero color"
                />
                <FormErrorMessage>{formikProps.errors.color}</FormErrorMessage>
              </FormControl>
              <Button type="submit" mt={2}>
                Submit
              </Button>
              {selectedId !== null && (
                <Button
                  mt={2}
                  ml={2}
                  onClick={() => {
                    setSelectedId(null);
                    formikProps.resetForm();
                  }}
                >
                  Cancel Edit
                </Button>
              )}
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
