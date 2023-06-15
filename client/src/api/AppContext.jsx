import axios from "axios";
import React, { useEffect, useState } from "react";
import "./url.js";
import { BASE_URL } from "./url.js";
const MyContext = React.createContext();
function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    companyName: "",
    origin: "",
  });
  const [showModalU, setShowModalU] = useState(false);
  const [showModalA, setShowModalA] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        currentItem,
        setCurrentItem,
        showModalU,
        setShowModalU,
        showModalA,
        setShowModalA,
        handleInputChange,
        isSubmitting,
        setIsSubmitting,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyProvider };
