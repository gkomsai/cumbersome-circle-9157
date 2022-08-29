import React from "react";
import styles from "./footer.module.css";
import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
  Tag,
} from "@chakra-ui/react";

import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import TopFooter from "./TopFooter";
import { BsLinkedin } from "react-icons/bs";
import img from "../../assets/everhourLogo.jpeg";
import StatusIndicator from "./StatusIndicator";
import { SocialButton } from "./SocialButtons";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      color="gray.400"
      fontSize={{ base: "1.5rem", md: "0.75rem", lg: "1rem" }}
      mt={2}
    >
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <>
      <TopFooter />
      <Box
        minWidth={"100vw"}
        bg={useColorModeValue("#151616", "#151616")}
        mt={{ base: "3rem", md: "4rem", lg: "0rem" }}
        color={"white"}
        fontSize={{ base: "1rem", md: "0.75rem", lg: "0.95rem" }}
        paddingLeft={{ base: "2%" }}
      >
        <Container as={Stack} maxW={"100%"} py={6} pt={"50px"}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
          >
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
        </Container>
      </Box>
    </>
  );
};

export default Footer;
