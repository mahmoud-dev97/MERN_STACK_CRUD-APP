import axios from "axios";
import { useContext, useState } from "react";
import AlertTimer from "./AletTimer";
import { MyContext } from "../api/AppContext";
import ModalBoot from "./ModalBoot";

function ModalAdd() {
  const [alertShow, setAlertShow] = useState(false);

  const {
    currentItem,
    setCurrentItem,
    setData,
    setIsSubmitting,
    showModalA,
    setShowModalA,
    alertInfo,
    setAlertInfo,
  } = useContext(MyContext);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .post("http://localhost:3001/", currentItem)
        .then((res) => {
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          setAlertInfo({
            message: res.data,
            type: "success",
          });
          setShowModalA(false);
          setAlertShow(true);
          setIsSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          setAlertInfo({
            message: err.response.data,
            type: "danger",
          });
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          setShowModalA(false);
          setAlertShow(true);
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
      {alertShow && (
        <AlertTimer
          setAlertShow={setAlertShow}
          message={alertInfo.message}
          type={alertInfo.type}
        />
      )}
    </>
  );
}
export default ModalAdd;
