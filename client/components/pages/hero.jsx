import React from "react";
import Link from "next/link";
import {Button, ButtonGroup } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const Hero = () => {
  return (
    <>
      <h1 className="heading">Progress & habits.</h1>
      <p className="paragraph">track your habits & progress</p>
      <ButtonGroup className="p-4">
        <Button href="/login" as={Link} variant="flat">Log in</Button>
        <Button href="/signup" as={Link}>sign up</Button>
      </ButtonGroup>
      <div className="max-w-[1000px] gap-4 grid grid-cols-6 grid-rows-2 my-20">
        <Card
          isPressable
          isFooterBlurred
          className=" col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8 "
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-[#4b4b4b] uppercase font-bold">
              All your progress at one place
            </p>
            <h4 className="text-[#84cc16]/80 font-medium text-xl">
              Your Personalized dashboard
            </h4>
          </CardHeader>
        </Card>
        <div className="hidden lg:block col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8">
          <h1 className="content-heading">Personalized dashboard</h1>
          <p className="paragraph">
            Your personalized dashboard is a centralized hub where you can track
            and monitor all your progress and activities in one place. Tailored
            to your needs, it provides valuable insights, analytics, and
            visualizations to help you stay organized, motivated, and
            productive.
          </p>
        </div>
        <div className="hidden lg:block col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8">
          <h1 className="content-heading">Personalized dashboard</h1>
          <p className="paragraph">
            Your personalized dashboard is a centralized hub where you can track
            and monitor all your progress and activities in one place. Tailored
            to your needs, it provides valuable insights, analytics, and
            visualizations to help you stay organized, motivated, and
            productive.
          </p>
        </div>
        <Card
          isPressable
          isFooterBlurred
          className=" col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-[#4b4b4b] uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-[#84cc16]/80 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
        </Card>
        <Card
          isPressable
          isFooterBlurred
          className=" col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-[#4b4b4b] uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-[#84cc16]/80 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
        </Card>
        <div className="hidden lg:block col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8">
          <h1 className="content-heading">Personalized dashboard</h1>
          <p className="paragraph">
            Your personalized dashboard is a centralized hub where you can track
            and monitor all your progress and activities in one place. Tailored
            to your needs, it provides valuable insights, analytics, and
            visualizations to help you stay organized, motivated, and
            productive.
          </p>
        </div>
        <div className=" hidden lg:block col-span-6 lg:col-span-3 w-[400px] sm:w-[500px] h-[600px] px-8">
          <h1 className="content-heading">Personalized dashboard</h1>
          <p className="paragraph">
            Your personalized dashboard is a centralized hub where you can track
            and monitor all your progress and activities in one place. Tailored
            to your needs, it provides valuable insights, analytics, and
            visualizations to help you stay organized, motivated, and
            productive.
          </p>
        </div>
        <Card
          isPressable
          isFooterBlurred
          className=" col-span-6 lg:col-span-3 w-[400px] sm:w-[500px]  h-[600px] px-8"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-[#4b4b4b] uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-[#84cc16]/80 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Hero;
