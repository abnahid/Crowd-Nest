/* eslint-disable react/prop-types */
import { FaFile, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CampaignTb = ({ cam, setCampaign, campaign }) => {
  const { _id, campaignTitle, campaignType, minDonation, deadline, imageUrl } =
    cam;
  const formattedDeadline = new Date(deadline).toISOString().split("T")[0];

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowd-nest-server.vercel.app/campaigns/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remaining = campaign.filter((com) => com._id !== _id);
              setCampaign(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the campaign.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <tr className="bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition duration-300">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={imageUrl} alt={campaignTitle} />
          </div>
        </div>
      </td>
      <td className="text-gray-900 dark:text-gray-100">{campaignTitle}</td>
      <td className="text-gray-600 dark:text-gray-300">{campaignType}</td>
      <td className="text-gray-600 dark:text-gray-300">${minDonation}</td>
      <td className="text-gray-600 dark:text-gray-300">{formattedDeadline}</td>
      <td>
        <div className="flex gap-4">
          {/* Delete Button */}
          <button
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white transition duration-300"
            onClick={() => handelDelete(_id)}
          >
            <FaTrash />
          </button>

          {/* Update Button */}
          <Link to={`/updateCampaign/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition duration-300">
              <FaFile />
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default CampaignTb;
