import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../api/AppContext";
import ModalBoot from "./ModalBoot";
import { BASE_URL } from "../api/url";
import { errorToast, successToast } from "./AletTimer";
import { ToastContainer } from "react-toastify";

function ModalAdd() {
  const {
    currentItem,
    setCurrentItem,
    setIsSubmitting,
    showModalA,
    setShowModalA,
  } = useContext(MyContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .post(BASE_URL, currentItem)
        .then((res) => {
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          successToast(res.data);
          setShowModalA(false);
          setIsSubmitting(false);
        })
        .catch((err) => {
          errorToast(err.response.data);
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          setShowModalA(false);
          setIsSubmitting(false);
        });
    }, 1000);
  }

  return (
    <>
      <ModalBoot
        handelSubmit={handleSubmit}
        title={"Add"}
        showModal={showModalA}
        setShowModal={setShowModalA}
      />
      <ToastContainer />
    </>
  );
}
export default ModalAdd;
