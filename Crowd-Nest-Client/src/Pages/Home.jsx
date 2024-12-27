import ActiveCampaing from "../Components/ActiveCampaing";
import BannerSlider from "../Components/BannerSlider";
import SuccessStories from "../Components/SuccessStories";
import TestimonialSlider from "../Components/TestimonialSlider";
import Faqs from "./../Components/Faqs";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <SuccessStories />
      <ActiveCampaing />
      <TestimonialSlider />
      <Faqs />
    </div>
  );
};

export default Home;
