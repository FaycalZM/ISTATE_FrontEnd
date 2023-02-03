import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../utils/api";
import AddAnnonce from "./AddAnnonce";
import SearchOffer from "./SearchOffer";
import TopOffers from "./TopOffers";

export default function HomePageAfter() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    api
      .get("/annonces")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AddAnnonce />
      <SearchOffer />
    </>
  );
}
