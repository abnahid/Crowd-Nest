import Lottie from "lottie-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import campaignAnimation from "../assets/lottie/Animation - 1733422381918.json";

const BannerSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "A Crowdfunding Platform for Your Ideas and Causes",
      description:
        "A crowdfunding website is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially. These projects can include personal needs, creative ideas, and startups.",
      buttonText: "Explore Campaigns",
      buttonLink: "/all-campaigns",
    },
    {
      id: 2,
      title: "Add a New Campaign",
      description:
        "Start your own fundraising campaign! Whether it's for personal needs, creative projects, or new startups, share your story and attract contributors. This section is private and requires login access.",
      buttonText: "Add Campaign",
      buttonLink: "/add-campaign",
    },
    {
      id: 3,
      title: "View My Campaigns",
      description:
        "Track the progress of your campaigns, edit your details, and engage with contributors. This section is private and accessible only to registered users.",
      buttonText: "My Campaigns",
      buttonLink: "/my-campaigns",
    },
    {
      id: 4,
      title: "View My Donations",
      description:
        "Check your donation history and see the causes and campaigns you've contributed to. Thank you for making a difference! This section is private and requires login access.",
      buttonText: "My Donations",
      buttonLink: "/my-donations",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 md:px-8 rounded-lg relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop={true}
        observer={true}
        observeParents={true}
        className="mySwiper"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
              {/* Text Content */}
              <div className="p-4 md:p-8 w-full md:w-1/2">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {slide.title}
                </h1>
                <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-btnHover text-white font-semibold rounded-lg inline-block text-sm md:text-base"
                >
                  {slide.buttonText}
                </a>
              </div>

              {/* Lottie Animation */}
              <div className="w-full md:w-1/2 max-w-[300px] md:max-w-[500px] mx-auto mb-4 md:mb-8">
                <Lottie animationData={campaignAnimation} loop={true} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 right-8 md:bottom-7 md:right-16 flex z-20">
        <div className="bg-primary hover:bg-btnHover p-3 rounded-full shadow-md cursor-pointer button-prev">
          <FaArrowLeft className="text-white text-sm md:text-xl" />
        </div>
        <div className="bg-primary hover:bg-btnHover p-3 rounded-full shadow-md cursor-pointer button-next ml-4">
          <FaArrowRight className="text-white text-sm md:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
