import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import "../index.css";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddCampaign = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const campaignTitle = form.get("campaignTitle");
    const campaignType = form.get("campaignType");
    const description = form.get("description");
    const goalAmount = form.get("goalAmount");
    const minDonation = form.get("minDonation");
    const deadline = form.get("deadline");
    const imageUrl = form.get("imageUrl");
    const userEmail = form.get("userEmail");
    const userName = form.get("userName");

    const newCampaign = {
      campaignTitle,
      campaignType,
      description,
      goalAmount,
      minDonation: parseInt(minDonation, 10),
      deadline: new Date(deadline),
      imageUrl,
      userEmail,
      userName,
    };

    fetch("https://crowd-nest-server.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Campaign added successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-4xl bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary text-white py-6 px-8 text-center">
          <h1 className="text-3xl font-semibold">Create a New Campaign</h1>
          <p className="text-sm mt-2">
            Share your story and raise funds easily. Fill in the details below
            to get started!
          </p>
        </div>
        <div className="p-8">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleAddCampaign}
          >
            {/* Campaign Title */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Campaign Title
              </label>
              <input
                type="text"
                name="campaignTitle"
                placeholder="Enter campaign title"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 "
              />
            </div>

            {/* Campaign Type */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Campaign Type
              </label>
              <select
                name="campaignType"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300"
              >
                <option value="personal">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative">Creative Ideas</option>
              </select>
            </div>

            {/* Description */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter campaign description"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 "
                rows="4"
              ></textarea>
            </div>

            {/* Goal Amount */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Goal Amount
              </label>
              <input
                type="number"
                name="goalAmount"
                placeholder="Enter Goal Amount"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 "
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Minimum Donation Amount
              </label>
              <input
                type="number"
                name="minDonation"
                placeholder="Enter minimum donation"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 "
              />
            </div>

            {/* Deadline */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 "
              />
            </div>

            {/* Image URL */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Image/Thumbnail URL
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter image URL"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 "
              />
            </div>

            {/* User Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email}
                readOnly
                className="input bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                readOnly
                className="input bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg text-lg font-medium hover:bg-btnHover transition-colors"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCampaign;
