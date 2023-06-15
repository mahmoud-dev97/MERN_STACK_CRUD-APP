import axios from "axios";
import React, { useEffect, useState } from "react";
import "./url.js";
import { BASE_URL } from "./url.js";
import { errorToast, successToast } from "../components/AletTimer.jsx";
const CompanyContext = React.createContext();
function Provider({ children }) {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    companyName: "",
    origin: "",
  });
  const [showModalU, setShowModalU] = useState(false);
  const [showModalA, setShowModalA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // add company
  const addCompany = (e) => {
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
  };

  // update company
  const updateCompany = (e) => {
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

  // delete company
  const deleteCompany = (id) => {
    setIsSubmitting(true);
    setTimeout(() => {
      axios
        .delete(`${BASE_URL}${id}`)
        .then((res) => {
          successToast(res.data);
          setShow(false);
          setIsSubmitting(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  // get list of companies
  const getData = () =>
    axios
      .get(BASE_URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [isSubmitting]);
  // value to Share
  const valuesToShare = {
    data,
    currentItem,
    setCurrentItem,
    showModalU,
    setShowModalU,
    showModalA,
    setShowModalA,
    handleInputChange,
    isSubmitting,
    setIsSubmitting,
    addCompany,
    updateCompany,
    deleteCompany,
    show,
    setShow,
  };

  return (
    <CompanyContext.Provider value={valuesToShare}>
      {children}
    </CompanyContext.Provider>
  );
}

export { CompanyContext, Provider };
