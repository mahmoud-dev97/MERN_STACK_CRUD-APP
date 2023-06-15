import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../api/AppContext";
import ModalBoot from "./ModalBoot";
import { BASE_URL } from "../api/url";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "./AletTimer";

function ModalUpdate() {
  const {
    currentItem,
    setCurrentItem,
    setIsSubmitting,
    showModalU,
    setShowModalU,
  } = useContext(MyContext);

  const handelUpdate = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .put(`${BASE_URL}${currentItem._id}`, currentItem)
        .then((res) => {
          successToast(res.data);
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          setShowModalU(false);
          setIsSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          errorToast(err.response.data);
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          setShowModalU(false);
          setIsSubmitting(false);
        });
    }, 1000);
  };
  return (
    <>
      <ModalBoot
        handelSubmit={handelUpdate}
        title={"Update"}
        showModal={showModalU}
        setShowModal={setShowModalU}
      />
      <ToastContainer />
    </>
  );
}

export default ModalUpdate;
