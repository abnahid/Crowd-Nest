import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignTb from "../Components/CampaignTb";
import { AuthContext } from "../context/AuthProvider";

const MyCampaign = () => {
  const loadedCampaign = useLoaderData();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(
    loadedCampaign.filter((cam) => cam.userEmail === user?.email)
  );
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("title");

  console.log("Filtered Campaign Data:", campaign);

  // Filter and sort campaigns
  const filteredCampaign = campaign
    .filter((cam) =>
      cam?.campaignTitle?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "title") {
        return a.campaignTitle.localeCompare(b.campaignTitle);
      } else if (sortOption === "type") {
        return a.campaignType.localeCompare(b.campaignType);
      } else if (sortOption === "donation") {
        return a.minDonation - b.minDonation;
      }
      return 0;
    });

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 mb-4">
        {/* Search Bar */}
        <div className="w-[400px]">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="Search by title"
            className="input input-bordered w-full bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-300 placeholder-gray-400 border border-gray-300 dark:border-gray-600"
            required
          />
        </div>

        {/* Sorting Dropdown */}
        <div className="w-[200px]">
          <select
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
            className="select select-bordered w-full bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600 border border-gray-300 dark:border-gray-600"
          >
            <option value="title">Sort by Title</option>
            <option value="type">Sort by Type</option>
            <option value="donation">Sort by Minimum Donation</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto bg-white dark:bg-neutral-900 rounded-md">
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-300">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Type</th>
                <th>Donation</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render filtered and sorted campaigns */}
              {filteredCampaign.map((cam) => (
                <CampaignTb
                  key={cam?._id}
                  cam={cam}
                  setCampaign={setCampaign}
                  campaign={campaign}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCampaign;
