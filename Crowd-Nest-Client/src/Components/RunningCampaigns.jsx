import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await fetch("/api/running-campaigns?limit=6");
      const data = await response.json();
      setCampaigns(data);
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">Running Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-bold">{campaign.title}</h3>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
            <p className="text-gray-500 mt-2">
              Goal: ${campaign.goal} | Raised: ${campaign.raised}
            </p>
            <p className="text-gray-500 mt-2">Deadline: {campaign.deadline}</p>
            <Link
              to={`/campaigns/${campaign._id}`}
              className="block mt-4 bg-primary text-white text-center py-2 rounded-lg hover:bg-btnHover"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
