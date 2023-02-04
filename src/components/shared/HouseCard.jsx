import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { api } from "../../utils/api";

export default function HouseCard({ house }) {
  const { titre, prix, wilaya, id, utilisateur_id } = house;
  const navigate = useNavigate();
  const user = parseInt(localStorage.getItem("user"));
  const navigateToDetails = () => navigate(`/offers/${id}`);
  const deleteOffer = () => {
    api
      .delete(`/user/${utilisateur_id}/annonces/${id}`)
      .then((res) => {
        if (res.data.data) {
          alert("Offer deleted");
          window.location.reload(false);
        } else alert("Error while deleting offer");
      })
      .catch(() => alert("Error while deleting offer"));
  };

  return (
    <div className="w-[95%] md:w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg duration-300 relative">
      {user === utilisateur_id && (
        <button onClick={deleteOffer} className="absolute top-4 right-4 z-10">
          <AiOutlineClose className="text-white text-xl" />
        </button>
      )}
      <img
        className="object-cover h-52 w-full relative"
        src="https://myfancyhouse.com/wp-content/uploads/2015/03/Exquisite-Private-Home-In-Florida-By-Harwick-Homes-14.jpg"
        alt={titre}
      />
      <div className="bg-white p-4 space-y-2 md:space-y-4 relative">
        <h3 className="title-sm">{titre}</h3>
        <div className="flex justify-between">
          <div>
            <h4 className="text-sm font-bold text-blue">{prix} DZD</h4>
            <h5>{wilaya}</h5>
          </div>
          <div>
            <button onClick={navigateToDetails} className="primary-btn-sm">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
