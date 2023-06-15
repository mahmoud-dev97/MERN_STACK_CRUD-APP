import { useContext } from "react";
import { CompanyContext } from "../api/AppContext";
import ModalBoot from "./ModalBoot";

function ModalAdd() {
  const { showModalA, setShowModalA, addCompany } = useContext(CompanyContext);

  return (
    <>
      <ModalBoot
        handelSubmit={addCompany}
        title={"Add"}
        showModal={showModalA}
        setShowModal={setShowModalA}
      />
    </>
  );
}
export default ModalAdd;
