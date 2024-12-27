import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arif Hossain",
      role: "Campaign Beneficiary",
      image: "https://i.ibb.co/XZdP5hF/2023-05-15-1.jpg",
      message:
        "Thanks to this crowdfunding platform, I was able to raise funds for my son's medical treatment. The support from generous donors changed our lives and gave us hope during a challenging time.",
      location: "Sylhet",
      title: "Hope Through Community Support",
    },
    {
      id: 2,
      name: "Nadia Rahman",
      role: "Donor",
      image: "https://i.ibb.co/931fDV3/pexels-photo-749091.webp",
      message:
        "Contributing to this platform has been an enriching experience. Seeing the impact of my donations on families and communities in need brings immense joy and fulfillment.",
      location: "Dhaka",
      title: "A Small Contribution, A Big Impact",
    },
    {
      id: 3,
      name: "Farhana Akhter",
      role: "Campaign Organizer",
      image: "https://i.ibb.co/tZc6dPW/pexels-1844773-3426975.webp",
      message:
        "I successfully organized a campaign for distributing school supplies to underprivileged children. The platform made it easy to connect with supporters and achieve our goals.",
      location: "Chattogram",
      title: "Empowering Education Through Crowdfunding",
    },
    {
      id: 4,
      name: "Shakib Al Hasan",
      role: "Volunteer",
      image: "https://i.ibb.co/B67Ggd1/pexels-photo-7562076.webp",
      message:
        "As a volunteer, I witnessed firsthand how this platform transforms lives. From medical aid to education campaigns, it’s heartwarming to see the positive changes we create together.",
      location: "Khulna",
      title: "Making a Difference, One Campaign at a Time",
    },
  ];

  return (
    <div data-aos="fade-right" className="my-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Testimonial
      </h2>

      <div className="bg-gray-50 dark:bg-gray-800 py-12 px-6 rounded-lg relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-8 w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {item.message}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 right-32 md:bottom-20 md:right-20 flex z-20">
          <div className="bg-primary hover:bg-btnHover p-3 rounded-full shadow-md cursor-pointer button-prev">
            <FaArrowLeft className="text-white text-xl" />
          </div>
          <div className="bg-primary hover:bg-btnHover p-3 rounded-full shadow-md cursor-pointer button-next ml-4">
            <FaArrowRight className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
