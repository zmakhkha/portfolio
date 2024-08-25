import { ChakraProvider, Flex, useBreakpointValue } from "@chakra-ui/react";
import LeftBox from "./components/LeftBox";
import MiddleBox from "./components/MiddleBox";
import RightBox from "./components/RightBox";
import "./css/App.css";
import Navbar from "./components/NavBar";
import theme from "./serivces/theme";

function App() {
  const showRightBox = useBreakpointValue({ base: false, md: true });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
      <Flex className="vertical">
        <Navbar />
        <Flex
          margin={5}
          className="app-container"
          direction={flexDirection}
          gap={5}
        >
          <LeftBox />
          <MiddleBox />
          {showRightBox && <RightBox />}
        </Flex>
      </Flex>
  );
}

export default App;
