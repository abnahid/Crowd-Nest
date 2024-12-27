import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "../index.css";

const UpdateCampaign = () => {
  const campaign = useLoaderData();

  const {
    campaignTitle,
    campaignType,
    description,
    goalAmount,
    minDonation,
    deadline,
    imageUrl,
    userEmail,
    userName,
  } = campaign;

  const handleUpdateCampaign = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const updatedCampaign = {
      campaignTitle: form.get("campaignTitle"),
      campaignType: form.get("campaignType"),
      description: form.get("description"),
      goalAmount: Number(form.get("goalAmount")),
      minDonation: Number(form.get("minDonation")),
      deadline: new Date(form.get("deadline")),
      imageUrl: form.get("imageUrl"),
      userEmail: form.get("userEmail"),
      userName: form.get("userName"),
    };

    fetch(`https://crowd-nest-server.vercel.app/campaigns/${campaign._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Campaign updated successfully!",
            icon: "success",
            confirmButtonText: "Great!",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6  dark:bg-gray-900">
      <div className="w-full max-w-4xl bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="bg-primary text-white py-6 px-8 text-center">
          <h1 className="text-2xl font-semibold">Update Campaign</h1>
          <p className="text-sm mt-2">
            Modify your campaign details below to keep it up-to-date.
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleUpdateCampaign}
          >
            {/* Campaign Title */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Campaign Title
              </label>
              <input
                type="text"
                name="campaignTitle"
                defaultValue={campaignTitle}
                placeholder="Enter campaign title"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* Campaign Type */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Campaign Type
              </label>
              <select
                name="campaignType"
                defaultValue={campaignType}
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
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
                defaultValue={description}
                placeholder="Enter campaign description"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
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
                defaultValue={goalAmount}
                placeholder="Enter Goal Amount"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Minimum Donation Amount
              </label>
              <input
                type="number"
                name="minDonation"
                defaultValue={minDonation}
                placeholder="Enter minimum donation"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
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
                defaultValue={new Date(deadline).toISOString().split("T")[0]}
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
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
                defaultValue={imageUrl}
                placeholder="Enter image URL"
                className="input bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
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
                defaultValue={userEmail}
                readOnly
                className="input bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
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
                defaultValue={userName}
                readOnly
                className="input bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg text-lg font-medium hover:bg-btnHover dark:hover:bg-gray-600 transition-colors"
              >
                Update Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaign;
