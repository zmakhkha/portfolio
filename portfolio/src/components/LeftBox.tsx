import { useEffect, useRef } from "react";
import { Box, Flex, Image, Text, Icon, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import Typed from "typed.js";
import "../css/LeftBox.css";
import { PersonalInfo, usePersonalInfo } from "../serivces/usePersonalInfo";
function LeftBox() {
  const inputBgColor = useColorModeValue("gray.100", "gray.700");
  const infoBgColor = useColorModeValue("white", "gray.900");

  const {
    profilePicture,
    firstName,
    lastName,
    phone,
    email,
    location,
    birthday,
  }: PersonalInfo = usePersonalInfo();

  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Data Scientist", "Full Stack Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box p={4} boxShadow="lg" borderRadius="md">
      {/* Profile Picture */}
      <Flex justify="center" mt={-12} mb={4}>
        <Image
          className="profile-picture"
          src={profilePicture}
          alt={`${firstName} ${lastName}`}
          borderRadius="full"
        />
      </Flex>

      {/* Name */}
      <Text
        className="name"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
        {firstName} {lastName}
      </Text>

      {/* Profession with Animated Text */}
      <Text
        className="profession"
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
        mb={4}
        borderRadius={'10'}
        width={'100%'}
        background={inputBgColor}
        padding={1}
      >
        <span  ref={typedElementRef} />
      </Text>

      {/* Social Media Icons */}
      <Flex justify="center" mb={4}>
        <Icon background={inputBgColor} borderRadius={'5'} padding={1} as={FaLinkedin} boxSize={7} mx={2} />
        <Icon background={inputBgColor} borderRadius={'5'} padding={1} as={FaGithub} boxSize={7} mx={2} />
      </Flex>

{/* Grey Card with Additional Info */}
<Box
        className="info-card"
        p={4}
        bg="gray.100"
        _dark={{ bg: "gray.700" }}
        borderRadius="md"
      >
        <VStack align="start" spacing={4}>
          <Flex align="center">
            <Icon background={infoBgColor} borderRadius={'5'} padding={1} as={FaPhone} boxSize={8} mr={3} color="gray.500" />
            <Box>
              <Text fontSize="sm" color="gray.500">Phone</Text>
              <Text>{phone}</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Icon background={infoBgColor} borderRadius={'5'} padding={1} as={FaEnvelope} boxSize={8} mr={3} color="gray.500" />
            <Box>
              <Text fontSize="sm" color="gray.500">Email</Text>
              <Text>{email}</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Icon background={infoBgColor} borderRadius={'5'} padding={1} as={FaMapMarkerAlt} boxSize={8} mr={3} color="gray.500" />
            <Box>
              <Text fontSize="sm" color="gray.500">Location</Text>
              <Text>{location}</Text>
            </Box>
          </Flex>
          <Flex align="center">
            <Icon background={infoBgColor} borderRadius={'5'} padding={1} as={FaBirthdayCake} boxSize={8} mr={3} color="gray.500" />
            <Box>
              <Text fontSize="sm" color="gray.500">Birthday</Text>
              <Text>{birthday}</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}

export default LeftBox;
