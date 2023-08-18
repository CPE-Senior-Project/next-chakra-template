import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const Footer = () => {
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight="700" fontSize="lg" color="primary.400" mb={2}>
        {children}
      </Text>
    );
  };

  return (
    <>
      <Box mt={20} borderRadius="20px">
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={2}
          >
            <Stack spacing={3}>
              <Box>
                <Image width="120px" src="/images/logo.png" alt="logo" />
              </Box>
              <Text fontSize={"sm"}>
                © 2023 company name. All rights reserved
              </Text>
            </Stack>
            <Stack align={"flex-start"}></Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Platform</ListHeader>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Product</Link>
              <Link href={"#"}>Safety</Link>
              <Link href={"#"}>FAQ</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Developer</ListHeader>
              <Link href={"#"}>Facebook</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
