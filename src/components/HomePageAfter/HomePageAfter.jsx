import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../utils/api";
import AddAnnonce from "./AddAnnonce";
import SearchOffer from "./SearchOffer";
import TopOffers from "./TopOffers";

export default function HomePageAfter() {
  const [annonces, setAnnonces] = useState([]);

  const getAnnonces = () => {
    api
      .get("/annonces")
      .then((res) => setAnnonces(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnnonces();
  }, []);

  return (
    <>
      <AddAnnonce getAnnonces={getAnnonces} />
      <SearchOffer annonces={annonces} />
    </>
  );
}
