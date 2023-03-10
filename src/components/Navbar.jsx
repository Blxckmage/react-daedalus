import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
  ];

  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" fontSize="xl" fontWeight="bold" color="white">
            Daedalus
          </Link>
        </Box>
        <Box>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              fontSize="lg"
              color="white"
              mr={6} // increase the margin-right value
              _hover={{ textDecoration: "none", color: "gray.300" }}
            >
              {item.label}
            </Link>
          ))}
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
            variant="ghost"
            mr={8} // increase the margin-right value
            color="white"
          />
          <IconButton
            aria-label="Github"
            icon={<FaGithub />}
            variant="ghost"
            color="white"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
