import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Campaign from "../Pages/Campaign";

const ActiveCampaing = () => {
  const campaigns = useLoaderData();
  const [loadedCampaigns, setLoadedCampaigns] = useState(campaigns);

  return (
    <div className="container mx-auto py-8">
      <div className="pb-8">
        <h1 className="text-3xl font-bold text-center">Support Campaigns</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadedCampaigns.map((campaign) => (
          <Campaign
            campaign={campaign}
            loadedCampaigns={loadedCampaigns}
            setLoadedCampaigns={setLoadedCampaigns}
            key={campaign._id}
          ></Campaign>
        ))}
      </div>
    </div>
  );
};

export default ActiveCampaing;
