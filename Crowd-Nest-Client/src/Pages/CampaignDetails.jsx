import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
  const campaign = useLoaderData();

  // State to track if the campaign is already donated
  const [isDonated, setIsDonated] = useState(false);

  // Check if the donation already exists in local storage
  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("myDonations")) || [];
    const alreadyDonated = donations.some(
      (donation) => donation.id === campaign.id || donation.id === campaign._id
    );
    setIsDonated(alreadyDonated);
  }, [campaign]);

  // Helper function to calculate remaining time
  const calculateRemainingTime = (deadline) => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const timeRemaining = deadlineDate - currentDate;
    const days = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
    return days > 0 ? `${days} days remaining` : "Campaign Ended";
  };

  // Handle Donate Now
  const handleDonateNow = () => {
    if (isDonated) {
      toast("You have already donated to this campaign.");
      return;
    }

    const donations = JSON.parse(localStorage.getItem("myDonations")) || [];
    const newDonation = {
      id: campaign.id || campaign._id, // Unique ID for the campaign
      title: campaign.campaignTitle,
      goalAmount: campaign.goalAmount,
      raisedAmount: campaign.minDonation,
      deadline: campaign.deadline,
      imageUrl: campaign.imageUrl,
    };

    // Add the new donation to local storage
    donations.push(newDonation);
    localStorage.setItem("myDonations", JSON.stringify(donations));

    // Update state and show toast
    setIsDonated(true);
    toast.success("Thank you for your donation!");
  };

  return (
    <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-6">
      {/* Main Content */}
      <section className="col-span-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">
          {campaign.campaignTitle}
        </h1>
        <div className="flex justify-between items-center mb-6">
          <p className="font-medium text-gray-700 dark:text-gray-300">
            {campaign.userName}
          </p>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
            Contact
          </button>
        </div>

        {/* Campaign Image */}
        <div className="mb-8">
          <img
            src={campaign.imageUrl}
            alt={campaign.campaignTitle}
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Story Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Story Campaign
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {campaign.description}
          </p>
        </div>
      </section>

      {/* Donation Information */}
      <aside className="col-span-4 md:mt-28">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">
            Donation Information
          </h2>
          <div className="mb-4">
            <p className="text-lg font-medium dark:text-gray-300">
              <span className="text-gray-700 dark:text-gray-400">Goal:</span> ${" "}
              {campaign.goalAmount || "N/A"}
            </p>
            <p className="text-lg font-medium dark:text-gray-300">
              <span className="text-gray-700 dark:text-gray-400">Raised:</span>{" "}
              ${campaign.minDonation || "N/A"}
            </p>
          </div>
          <div className="relative h-4 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
            <div
              className="absolute h-full bg-orange-500"
              style={{
                width: `${
                  (campaign.minDonation / campaign.goalAmount) * 100 || 0
                }%`,
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex gap-2 items-center">
            <IoCalendarClearOutline />
            {calculateRemainingTime(campaign.deadline)}
          </p>
          {/* Donate Button */}
          <button
            className={`w-full py-2 rounded-md mt-8 transition ${
              isDonated
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
            onClick={handleDonateNow}
            disabled={isDonated}
          >
            {isDonated ? "Donated" : "Donate Now"}
          </button>
        </div>
      </aside>
    </main>
  );
};

export default CampaignDetails;
