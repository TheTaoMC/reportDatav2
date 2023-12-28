import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { storeColumns, storeData } from "../recoilStore/Store";

function AppC0() {
  const navigate = useNavigate();
  const [data, setData] = useRecoilState(storeData);
  const [StoreColumns, setStoreColumns] = useRecoilState(storeColumns);
  return (
    <div>
      <Button
        label="C1"
        icon="pi pi-home"
        className="p-2 w-24 h-10"
        onClick={() => {
          navigate("/c1");
        }}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
      <Button
        label="C2"
        icon="pi pi-home"
        className="p-2 w-24 h-10"
        onClick={() => {
          navigate("/c2");
        }}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
      <Button
        label="C3"
        icon="pi pi-home"
        className="p-2 w-24 h-10"
        onClick={() => {
          navigate("/c3");
        }}
        aria-controls="popup_menu_left"
        aria-haspopup
      />
    </div>
  );
}

export default AppC0;
