import { Box, Flex, Image, Text, Icon, VStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/LeftBox.css";
import { PersonalInfo, usePersonalInfo } from "../serivces/usePersonalInfo";

function LeftBox() {
  const {
    profilePicture,
    firstName,
    lastName,
    phone,
    email,
    location,
    birthday,
  }: PersonalInfo = usePersonalInfo();

  return (
    <Box  p={4} boxShadow="lg" borderRadius="md">
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

      {/* Social Media Icons */}
      <Flex justify="center" mb={4}>
        <Icon as={FaTwitter} boxSize={6} mx={2} />
        <Icon as={FaLinkedin} boxSize={6} mx={2} />
        <Icon as={FaGithub} boxSize={6} mx={2} />
      </Flex>

      {/* Grey Card with Additional Info */}
      <Box
        className="info-card"
        p={4}
        bg="gray.100"
        _dark={{ bg: "gray.700" }}
        borderRadius="md"
      >
        <VStack align="start" spacing={2}>
          <Text className="info-item">📞 Phone: {phone}</Text>
          <Text className="info-item">✉️ Email: {email}</Text>
          <Text className="info-item">📍 Location: {location}</Text>
          <Text className="info-item">🎂 Birthday: {birthday}</Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default LeftBox;
