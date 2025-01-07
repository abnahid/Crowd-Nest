const SupportPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Support Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Your support helps us continue to grow and bring amazing projects to
          life. Choose a support option below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Support Option 1 */}
          <div className="card bg-white shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>
            <p className="text-gray-600 mb-4">
              Every contribution, big or small, makes a difference.
            </p>
            <input
              type="number"
              placeholder="Enter donation amount"
              className="input input-bordered w-full mb-4"
            />
            <button className=" btn w-full btn-primary">Donate Now</button>
          </div>

          {/* Support Option 2 */}
          <div className="card bg-white shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Become a Volunteer</h2>
            <p className="text-gray-600 mb-4">
              Join our community and help us make a greater impact.
            </p>
            <button color="secondary" className="w-full btn  btn-secondary">
              Sign Up
            </button>
          </div>

          {/* Support Option 3 */}
          <div className="card bg-white shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Spread the Word</h2>
            <p className="text-gray-600 mb-4">
              Share our platform with your friends and family.
            </p>
            <button color="accent" className="w-full btn btn-accent">
              Share Now
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Contact our support team for assistance.
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-1/2 mx-auto mb-4"
          />
          <button className="w-full md:w-1/2 btn btn-info">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
