/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const {
    campaignTitle,
    imageUrl,
    description,
    campaignType,
    minDonation,
    _id,
  } = campaign;

  // Truncate the description if it's too long
  const truncatedDescription =
    description.length > 100 ? description.slice(0, 97) + "..." : description;

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
      data-aos="fade-up"
    >
      {/* Campaign Image */}
      <figure className="relative w-full h-48 overflow-hidden">
        <img
          src={imageUrl || "https://via.placeholder.com/300"}
          alt={campaignTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 text-xs font-semibold rounded">
          {campaignType}
        </div>
      </figure>

      {/* Campaign Details */}
      <div className="p-5">
        <h2 className="text-lg font-semibold dark:text-white">
          {campaignTitle}
        </h2>
        <p
          className="text-sm text-gray-600 dark:text-gray-400 mt-2"
          title={description}
        >
          {truncatedDescription}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-300 mt-4">
          <span>
            <span className="font-medium text-gray-700 dark:text-white">
              Min Donation:
            </span>{" "}
            ${minDonation}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 w-full bg-gray-300 rounded-full overflow-hidden mt-3">
          <div
            className="absolute top-0 left-0 h-full bg-primary"
            style={{
              width: `${Math.min((minDonation / 50) * 100, 100)}%`,
            }}
          ></div>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <Link to={`/details/${_id}`} className="block">
            <button className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
