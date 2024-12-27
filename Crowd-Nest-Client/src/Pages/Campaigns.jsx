import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const campaign = useLoaderData();
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("title");

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
        return a.goalAmount - b.goalAmount;
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
            placeholder="Search campaigns"
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

      <div className="container mx-auto bg-white dark:bg-neutral-900 rounded-lg ">
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
                <th>Campaign Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Render filtered and sorted campaigns */}
              {filteredCampaign.map((cam) => (
                <tr
                  key={cam?._id}
                  className="bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-300"
                >
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={cam?.imageUrl} alt={cam?.campaignTitle} />
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-900 dark:text-gray-100">
                    {cam?.campaignTitle}
                  </td>
                  <td className="text-gray-600 dark:text-gray-300">
                    {cam?.campaignType}
                  </td>
                  <td className="text-gray-600 dark:text-gray-300">
                    ${cam?.goalAmount}
                  </td>
                  <td className="text-gray-600 dark:text-gray-300">
                    {new Date(cam?.deadline).toISOString().split("T")[0]}
                  </td>
                  <td className="text-gray-900 dark:text-gray-100">
                    <Link
                      to={`/details/${cam?._id}`}
                      className="badge badge-accent"
                    >
                      {cam?.isActive ? "Completed" : "Active"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllCampaigns;
