import React from "react";
import Slide from "../../layout/Slide";
import TeamSection from "../../compoent/TeamSection";
import CardSkeleton from "../../compoent/CardSkeleton";
import SubscriptionsCard from "../../compoent/SubscriptionsCard";
import TimelineWithAvatar from "../../compoent/TimelineWithAvatar";
import ContactForm from "../../compoent/ContactForm";

function HomePage() {
  return (
    <>
      <Slide />
      <TeamSection />
      <CardSkeleton />
      <SubscriptionsCard />
      <TimelineWithAvatar />
      <ContactForm />
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Let’s get started on something great
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
          Join over 4,000+ startups already growing with Meraki UI.
        </p>
        <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
          <button className="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
