import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export default function TimelineWithAvatar() {
  return (
    <div className="w-[80%] lg:w-[50%] flex mx-auto my-10">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://res.cloudinary.com/doedovklj/image/upload/v1688398787/xyz-abc_638240207857302069image.jpg"
                alt="user 1"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://res.cloudinary.com/doedovklj/image/upload/v1688398787/xyz-abc_638240207857302069image.jpg"
                alt="user 2"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="sm"
                src="https://res.cloudinary.com/doedovklj/image/upload/v1688398787/xyz-abc_638240207857302069image.jpg"
                alt="user 3"
                withBorder
              />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
