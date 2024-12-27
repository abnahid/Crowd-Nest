import { useEffect, useState } from "react";

const MyDonations = () => {
  const [myDonations, setMyDonations] = useState([]);

  useEffect(() => {
    // Fetch donations from local storage
    const storedDonations =
      JSON.parse(localStorage.getItem("myDonations")) || [];
    setMyDonations(storedDonations);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      {myDonations.length === 0 ? (
        <p className="text-gray-500">
          You haven&apos;t donated to any campaigns yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myDonations.map((donation, index) => (
            <div
              key={index}
              className="bg-lightBg dark:bg-darkBg rounded-lg p-4"
            >
              {/* Campaign Image */}
              <div className="bg-gray-100 dark:bg-gray-700 h-48 rounded-lg mb-4">
                {donation.imageUrl ? (
                  <img
                    src={donation.imageUrl}
                    alt={donation.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Campaign Details */}
              <div>
                <p className="text-gray-500 dark:text-gray-300">
                  {donation.location || "Unknown Location"}
                </p>
                <h3 className="text-lg font-bold dark:text-white">
                  {donation.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {/* {donation.description.slice(0, 80)}... */}
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-bold text-black dark:text-white">
                    ${donation.goalAmount}
                  </span>{" "}
                  Raised of{" "}
                  <span className="text-gray-700 dark:text-gray-300">
                    ${donation.raisedAmount}
                  </span>
                </p>

                {/* Progress Bar */}
                <div className="relative h-3 w-full bg-gray-300 rounded-full mt-3">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    style={{
                      width: `${
                        (donation.raisedAmount / donation.goalAmount) * 100 || 0
                      }%`,
                    }}
                  ></div>
                </div>

                {/* Donate Button */}
                <button className="w-full py-2 mt-4 bg-primary text-white font-medium rounded-lg hover:bg-orange-600 transition">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
