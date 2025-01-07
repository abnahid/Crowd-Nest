import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-10 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">
            Discover the story and vision behind Crowd-Nest, a platform
            empowering dreams and ideas through community support.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co.com/WKSXyhn/davide-ragusa-gc-Dwz-UGu-Uo-I-unsplash.webp"
              alt="Our Mission"
              className="object-cover object-center w-full md:h-[500px] rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At <span className="font-bold">Crowd-Nest</span>, our mission is
              to connect innovators, dreamers, and changemakers with supporters
              worldwide. We aim to transform ideas into reality by providing a
              platform for individuals and organizations to raise funds for
              meaningful causes.
            </p>
            <p className="mt-4 text-gray-600">
              Whether it’s a personal project, a startup, or a creative vision,
              we believe in the power of collective support to make a lasting
              impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              To create a world where every idea and cause has the opportunity
              to flourish, supported by a global network of passionate
              individuals. At Crowd-Nest, we envision a future where barriers to
              innovation and social change are eliminated through the power of
              crowdfunding.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://i.ibb.co.com/h25Mptp/abnahid.jpg"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Abdul Jabbbar Al NAhid
            </h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://i.ibb.co.com/nsgmKpH/Shamsh-Hadi.jpg"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Sarah Lee
            </h3>
            <p className="text-gray-600">Chief Operations Officer</p>
          </div>
          <div className="text-center">
            <img
              src="https://i.ibb.co.com/xLVb14x/website-photos-2.webp"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Alex Johnson
            </h3>
            <p className="text-gray-600">Marketing Head</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-10 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Join Our Community</h2>
          <p className="mt-2 text-lg">
            Be part of the change and help bring dreams to life. Start your
            campaign or support one today.
          </p>
          <Link
            to="/campaigns"
            className="btn mt-4 px-6 py-3 bg-white text-primary rounded-lg shadow hover:bg-gray-100"
          >
            Explore Campaigns
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
