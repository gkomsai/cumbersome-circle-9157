import React from "react";
import styles from "./footer.module.css";

import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
  VisuallyHidden,
  Tag,
} from "@chakra-ui/react";

import { FaTwitter } from "react-icons/fa";
import TopFooter from "./TopFooter";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import img from "../../assets/everhourLogo.jpeg";
import StatusIndicator from "./StatusIndicator";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"flex"}
      gap="-40px"
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("black", "white"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} color="gray.400" fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <>
      <TopFooter />
      <Box
        bg={useColorModeValue("#151616", "#151616")}
        mt={{ base: "18rem", md: "10rem", lg: "0rem" }}
        color={"white"}
        fontSize={{ base: "1rem", md: "0.75rem", lg: "0.95rem" }}
      >
        <Container
          as={Stack}
          maxW={"100%"}
          py={6}
          fontFamily="geomanist-regular',sans-serif"
          pt={"50px"}
        >
          <Flex  direction={{ base: "column", md: "row" }} justifyContent="space-evenly">
            <Stack>
              <Image src={img} w="45px" h="45px" borderRadius={"50%"} />
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Contact</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link href={"#"}>Tour</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Request a demo</Link>
              <Link href={"#"}>Customers</Link>
              <Link href={"#"}>API & docs</Link>
              <Link href={"#"}>
                Status{" "}
                <Tag h="14" w="20" bg="none">
                  <StatusIndicator />{" "}
                </Tag>{" "}
              </Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Solutions</ListHeader>
              <Link href={"#"}>Time tracking</Link>
              <Link href={"#"}>Project budgeting</Link>
              <Link href={"#"}>Visual planning</Link>
              <Link href={"#"}>Reporting</Link>
              <Link href={"#"}>Invoicing</Link>
              <Link href={"#"}>Time card calculator</Link>
              <Link href={"#"}>Weekly timesheet template</Link>
              <Link href={"#"}>Invoice generator</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Integrations</ListHeader>
              <Link href={"#"}>Asana</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Trello</Link>
              <Link href={"#"}>Jira</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>GitHub</Link>
              <Link href={"#"}>ClickUp</Link>
              <Link href={"#"}>Monday</Link>
              <Link href={"#"}>Notion</Link>
              <Link href={"#"}>Todoist</Link>
              <Link href={"#"}>GitLab</Link>
              <Link href={"#"}>All</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Learn</ListHeader>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Resources</Link>
              <Link href={"#"}>Help center</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Product updates</Link>
              <Link href={"#"}>Timesheet app</Link>
              <Link href={"#"}>Time clock app</Link>
              <Link href={"#"}>Attendance tracker</Link>
              <Link href={"#"}>Work hours tracker</Link>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>Download</ListHeader>
              <Link href={"#"}>Browser extension</Link>
              <Link href={"#"}>Chrome time tracking extension</Link>
              <Link href={"#"}>Time tracking with screenshots</Link>
              <Link href={"#"}>Chrome time tracking extension</Link>
              <Link href={"#"}>
                iPhone app <Tag> Beta</Tag>{" "}
              </Link>
            </Stack>
          </Flex>


          <Box
          >
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <Text> © 2022 Everhour Terms | Privacy | Cookies | Sitemap</Text>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Facebook"} href={"#"}>
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>

                <SocialButton label={"Linkedin"} href={"#"}>
                  <BsLinkedin />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
              </Stack>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
