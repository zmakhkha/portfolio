import {
  Box,
  HStack,
  Image,
  Center,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import light from "../../public/logo/light.png";
import dark from "../../public/logo/dark.png";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = colorMode === "light" ? "black" : "white";

  const logo = "";
  return (
    <Box
      bg="transparent"
      width="100%"
      py={4}
      position="sticky"
      top="0"
      zIndex="1000" // Ensure the Navbar stays above other elements
    >
      <HStack justifyContent="space-between" alignItems="center" px={4}>
        <Image src={colorMode === "light" ? light : dark} boxSize="60px" />
        <Button ml={4} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Box>
  );
}

export default Navbar;
