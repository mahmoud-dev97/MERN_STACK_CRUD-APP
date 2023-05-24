import axios from "axios";
import { useContext, useState } from "react";
import { MyContext } from "../api/AppContext";
import ModalBoot from "./ModalBoot";
import AlertTimer from "./AletTimer";

function ModalUpdate() {
  const [alertShow, setAlertShow] = useState(false);

  const {
    currentItem,
    setCurrentItem,
    setData,
    setIsSubmitting,
    showModalU,
    setShowModalU,
    alertInfo,
    setAlertInfo,
  } = useContext(MyContext);

  const handelUpdate = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .put(`http://localhost:3001/${currentItem._id}`, currentItem)
        .then((res) => {
          setCurrentItem({
            companyName: "",
            origin: "",
          });
          setAlertInfo({
            message: res.data,
            type: "info",
          });
          setShowModalU(false);
          setAlertShow(true);
          setIsSubmitting(false);
          /*
          setData((prevState) => {
            const index = prevState.findIndex(
              (item) => item._id === currentItem._id
            );
            const updatedItems = [...prevState];
            updatedItems[index] = currentItem;
            return updatedItems;
          });
          */
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
          setShowModalU(false);
          setAlertShow(true);
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

export default ModalUpdate;
