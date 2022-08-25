import React from "react";
import styles from "./navbar.module.css";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Tag,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/everhourLogo.svg";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box position={"fixed"} w={"100%"} top="0" left="0" right="0" zIndex="9999">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          ></Text>
          <RouterLink to="/">
            <Image
              src={logo}
              alt="lg"
              marginLeft="50px"
              marginRight={{ md: "25px", lg: "4px" }}
              width="30px"
            />
          </RouterLink>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          p={"12px"}
          pl={"125px"}
          paddingRight={"25px"}
        >
          <Button
            onClick={() => navigate("/login")}
            as={"a"}
            fontSize={"lg"}
            fontWeight={450}
            variant={"link"}
            href={"#"}
          >
            Log In
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"m"}
            fontWeight={500}
            color={"white"}
            bg={"green.400"}
            href={"#"}
            _hover={{
              bg: "green.300",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          transition={"all .3s ease"}
          _hover={{
            fontWeight: "bold",   // we have to make smooth
          }}
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <RouterLink
                p={2}
                to={navItem.path ?? "#"}
                fontSize={"lg"}
                fontWeight={450}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </RouterLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, path, subLabel }) => {
  return (
    <RouterLink
    to={path ?? "#"}  //changes to be done
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </RouterLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, path }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <RouterLink
        display="flex"
        py={2}
        as={Link}
        to={path ?? "#"}
        justify={"space-between"}
        align={"left"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          borderBottom="1px solid lightgrey"
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </RouterLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Everhour",
    path: "/",
  },
  {
    label: "Tour",
    path: "/tour",
  },
  {
    label: <Text>Integration <Tag variant='solid' colorScheme='green'> New </Tag></Text> ,
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        path: "/login",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        path: "#",
      },
    ],
  },
  {
    label: "Pricing",
    path: "/pricing",
  },
  {
    label: "Demo",
    path: "request-a-demo",
  },
];

export default Navbar;
