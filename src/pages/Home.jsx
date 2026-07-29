import Hero from "../components/home/Hero";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import Categories from "../components/home/Categories";
import WhyUs from "../components/home/WhyUs";
import TravelStats from "../components/home/TravelStats";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <Categories />
      <WhyUs />
      <TravelStats />
      <CTA />
    </>
  );
};

export default Home;
