import { Box, Text, Heading } from "@chakra-ui/react";
import { Section, Navbar, Footer } from "@/components/common";

export const HomePage = () => {
  return (
    <>
      <Section>
        <Navbar />
        <Box mt={20}>
          <Heading>Next Chakra template</Heading>
          <Text mt={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Text>
        </Box>
        <Footer />
      </Section>
    </>
  );
};
