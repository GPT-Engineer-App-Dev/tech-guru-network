import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Stack, Image, Wrap, WrapItem, Avatar, AvatarBadge, Badge, Container, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const developers = [
  {
    name: "John Smith",
    location: "New York, USA",
    technologies: ["React", "Node.js", "TypeScript"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBtYW58ZW58MHx8fHwxNzEzMDQ3NzAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Emma Johnson",
    location: "London, UK",
    technologies: ["Angular", "Firebase", "Flutter"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjB3b21hbnxlbnwwfHx8fDE3MTMwNDc3MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Liam Williams",
    location: "Sydney, Australia",
    technologies: ["Vue.js", "Laravel", "TailwindCSS"],
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMG1hbiUyMHdpdGglMjBnbGFzc2VzfGVufDB8fHx8MTcxMzA0NzcwMnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Olivia Brown",
    location: "Toronto, Canada",
    technologies: ["React Native", "GraphQL", "AWS"],
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHdvbWFuJTIwd2l0aCUyMGxvbmclMjBoYWlyfGVufDB8fHx8MTcxMzA0NzcwMnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [query, setQuery] = useState("");

  const filteredDevelopers = developers.filter((dev) => `${dev.name} ${dev.location} ${dev.technologies.join(" ")}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <Box>
      <Box as="section" pt={{ base: "4rem", md: "6rem" }} pb={{ base: "0", md: "5rem" }} overflow="hidden">
        <Container maxW="6xl" px={{ base: 6, md: 3 }}>
          <Box textAlign="center">
            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="extrabold" maxW="48rem" mx="auto" lineHeight="1.2" letterSpacing="tight">
              Find the perfect{" "}
              <Box as="span" color="blue.500">
                software talent
              </Box>{" "}
              for your project
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} mt="4" maxW="xl" mx="auto">
              Particles connects you with top developers specializing in modern web technologies. Search, filter and message talent directly to build your team.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} mt="10" justify="center" spacing={{ base: 2, md: 4 }}>
              <Input size="lg" color="gray.600" type="text" placeholder="Search developers..." value={query} onChange={(e) => setQuery(e.target.value)} />
              <Button size="lg" colorScheme="blue" rightIcon={<FaSearch />}>
                Search
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxW="6xl" px={{ base: 6, md: 3 }} py="10">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
          {filteredDevelopers.map((dev) => (
            <Box key={dev.name} rounded="lg" bg={useColorModeValue("white", "gray.700")} p="6" boxShadow="base" transition="all 0.2s" _hover={{ boxShadow: "lg" }}>
              <Stack direction="row" align="center" spacing="4">
                <Avatar size="xl" src={dev.avatar}>
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
                <Box>
                  <Heading as="h3" size="md">
                    {dev.name}
                  </Heading>
                  <Text color="gray.500">{dev.location}</Text>
                </Box>
              </Stack>
              <Wrap mt="4">
                {dev.technologies.map((tech) => (
                  <WrapItem key={tech}>
                    <Badge colorScheme="blue">{tech}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
              <Button size="md" colorScheme="blue" mt="6" w="full">
                Send Message
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
