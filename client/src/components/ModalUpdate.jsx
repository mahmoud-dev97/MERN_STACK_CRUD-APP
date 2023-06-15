import { useContext } from "react";
import { CompanyContext } from "../api/AppContext";
import ModalBoot from "./ModalBoot";

function ModalUpdate() {
  const { showModalU, setShowModalU, updateCompany } =
    useContext(CompanyContext);

    return (
    <>
      <ModalBoot
        handelSubmit={updateCompany}
        title={"Update"}
        showModal={showModalU}
        setShowModal={setShowModalU}
      />
    </>
  );
}

export default ModalUpdate;
