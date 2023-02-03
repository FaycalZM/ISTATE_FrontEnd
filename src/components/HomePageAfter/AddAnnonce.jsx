import Input from "../shared/Input";
import { useState } from "react";
import Select from "../shared/Select";
import { wilayas, types, caetgories } from "../../utils/values";
import TextArea from "../shared/TextArea";
import MapModal from "../shared/MapModal";

export default function AddAnnonce() {
  const [visible, setVisible] = useState(false);
  const [titre, setTitre] = useState("");
  const [surface, setSurface] = useState(0);
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState(0);
  const [commune, setCommune] = useState("");
  const [adresse, setAdresse] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [categorie, setCategorie] = useState("");
  const [type, setType] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const annonce = {
      wilaya,
      categorie,
      type,
      titre,
      surface,
      description,
      prix,
      commune,
      adresse,
    };

    console.log(annonce);
  };

  return (
    <section className="section-layout bg-white-blue">
      <h2 className="title-lg flex justify-center">Add announcement</h2>
      <form className="my-4 w-full space-y-2" onSubmit={submit}>
        <div className="flex flex-col md:flex-row gap-x-8 w-full">
          <div className="w-full">
            <Input label="Title" setValue={setTitre} type="text" />
            <Select label="Type" values={types} setValue={setType} />
            <Select
              label="Category"
              values={caetgories}
              setValue={setCategorie}
            />
            <Input label="Area" setValue={setSurface} type="number" />
            <TextArea label="Description" setValue={setDescription} rows={2} />
          </div>
          <div className="w-full">
            <Input label="Price" setValue={setPrix} type="number" />
            <Select label="Wilaya" values={wilayas} setValue={setWilaya} />
            <Input label="City" setValue={setCommune} type="text" />
            <TextArea rows={2} label="Address" setValue={setAdresse} />
            <button
              className="primary-btn-sm my-4"
              onClick={() => setVisible(true)}
            >
              Location
            </button>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button className="primary-btn-sm" type="submit">
            Submit
          </button>
        </div>
      </form>
      <MapModal visible={visible} setVisible={setVisible} />
    </section>
  );
}
