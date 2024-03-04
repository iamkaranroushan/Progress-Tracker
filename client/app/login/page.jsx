import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Divider,
  ButtonGroup,
  CardFooter,
} from "@nextui-org/react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="flex flex-col  w-[400px] sm:w-[500px] h-[600px]">
        <CardHeader className="p-4 flex flex-col items-start">
          <h1 className="text-[#84cc16]/80 text-3xl font-bold">Login</h1>
          <p className="text-[#4b4b4b] text-md mt-2 ">
            Enter your details below to log in to your account
          </p>
        </CardHeader>
        <CardBody className="p-4 my-4 ">
          <Input type="username" label="username" className="mb-2" />
          <Input type="password" label="password" className="mb-2" />
          <Button className="my-2 w-full">Login</Button>

          <Divider className="my-4" />
          <p className="text-center text-sm text-[#4b4b4b]">or continue with</p>

          <ButtonGroup className="my-4">
            <Button size="lg" startContent={<FaGithub />}>
              Github
            </Button>
            <Button size="lg" startContent={<FaGoogle />}>
              Google
            </Button>
          </ButtonGroup>
        </CardBody>
        <CardFooter>
          <p className="text-center text-sm text-[#4b4b4b]">
            designed by karan Roushan
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
