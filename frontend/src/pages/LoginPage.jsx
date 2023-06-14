import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/users/login`, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("email", JSON.stringify(res.data.email));

        if (res.data.msg === "Please signup first") {
          toast({
            title: "User not registered",
            description: "Please SignUp",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          navigate("/signup");
        } else if (res.data.msg === "Invalid credentials") {
          toast({
            title: "Invalid credentials",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else if (res.data.msg === "Login success") {
          toast({
            title: "Login Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Something went wrong :( Please try again later..",
            description: "Please SignUp",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((Err) => console.log(Err));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#121212")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"white"}>
            Sign In
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("black", "white")}
          boxShadow={"lg"}
          p={20}
        >
          <form>
            <Stack spacing={4} color={"white"}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#121212"}
                  color={"white"}
                  _hover={{
                    bg: "gray",
                  }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <Link color={"whitesmoke"} to="/signup">
                    Sign up
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
