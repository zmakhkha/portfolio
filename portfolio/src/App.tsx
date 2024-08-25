import { Flex } from '@chakra-ui/react';
import LeftBox from './components/LeftBox';
import MiddleBox from './components/MiddleBox';
import RightBox from './components/RightBox';
import './css/App.css';

function App() {
  return (
    <Flex className="app-container">
      <LeftBox />
      <MiddleBox />
      <RightBox />
    </Flex>
  );
}

export default App;
