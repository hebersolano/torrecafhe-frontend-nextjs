import FeaturedProducts from "@/app/_lib/featured-products";
import ChooseCategory from "@/components/choose-category";
import CallToAction from "./_lib/call-to-action";
import Hero from "./_lib/hero";
import InHonduras from "./_lib/honduras-call-to-action";
import ServicesAndProducts from "./_lib/services-and-products";
import YoutubeVideo from "@/components/youtube-video";

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <FeaturedProducts />
      <ServicesAndProducts />
      <ChooseCategory />
      <YoutubeVideo />
      <InHonduras />
    </>
  );
}
