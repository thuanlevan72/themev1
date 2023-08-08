import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
function SubscriptionsCard() {
  return (
    <div className="flex items-center justify-center flex-col bg-[#ffffff]">
      {/* main card */}
      <div className="bg-[#f3f3f3] p-10 rounded-xl w-full">
        {/* headers content*/}
        <div className="flex flex-col justify-center items-center text-center">
          <Typography variant="h1" color="blue" textGradient>
            Material Tailwind
          </Typography>
          {/* <div className="font-light max-w-lg mt-5 text-sm">
            All devices come with free delivery or pickup as standard. See
            information on available shopping options for your location.
          </div> */}
        </div>
        {/* subscriptions */}
        <div className="flex flex-col  md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
          <Card
            color="blue"
            variant="gradient"
            className="w-full max-w-[20rem] p-8">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center">
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase">
                standard
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                <span className="mt-2 text-4xl">$</span>29{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    5 team members
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    200+ components
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    40+ built-in pages
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    1 year free updates
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    Life time technical support
                  </Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
          <Card
            color="blue"
            variant="gradient"
            className="w-full max-w-[20rem] p-8">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center">
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase">
                standard
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                <span className="mt-2 text-4xl">$</span>29{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    5 team members
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    200+ components
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    40+ built-in pages
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    1 year free updates
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    Life time technical support
                  </Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
          <Card
            color="blue"
            variant="gradient"
            className="w-full max-w-[20rem] p-8">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center">
              <Typography
                variant="small"
                color="white"
                className="font-normal uppercase">
                standard
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal">
                <span className="mt-2 text-4xl">$</span>29{" "}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    5 team members
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    200+ components
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    40+ built-in pages
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    1 year free updates
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <CheckIcon />
                  </span>
                  <Typography className="font-normal">
                    Life time technical support
                  </Typography>
                </li>
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="white"
                className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
            See all subscriptions
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsCard;
