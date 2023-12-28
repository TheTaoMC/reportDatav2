import React, { useEffect } from "react";
import AppDataTable from "./helpers/AppDataTable";
import AppC0 from "./AppC0";
import { FetchData } from "./helpers/FetchData";
import { useRecoilState } from "recoil";
import { storeData, storeColumns } from "../recoilStore/Store";

function AppC2() {
  const [data, setData] = useRecoilState(storeData);
  const [StoreColumns, setStoreColumns] = useRecoilState(storeColumns);
  const apiUrl =
    "https://theotesteng.000webhostapp.com/API/api/transporter/read.php";
  const requestOptions = {
    method: "GET", // หรือ 'POST', 'PUT', 'DELETE', ฯลฯ
    //headers: {
    //"Content-Type": "application/json",
    // หรือเพิ่ม headers อื่น ๆ ตามต้องการ
    //},
    // ตัวอย่าง body สำหรับ POST หรือ PUT
    // body: JSON.stringify({ key: 'value' }),
  };
  const getData = async () => {
    try {
      const responseData = await FetchData(apiUrl, requestOptions);
      //console.log(responseData);
      setData(responseData);
      return responseData;
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      field: "TransporterID",
      header: "TransporterID",
    },
    {
      field: "TransporterName",
      header: "TransporterName",
    },
    {
      field: "Address1",
      header: "Address1",
    },
    {
      field: "Address2",
      header: "Address2",
    },
    {
      field: "FlagCancel",
      header: "FlagCancel",
    },
  ];

  useEffect(() => {
    getData();
    setStoreColumns(columns);
  }, []);
  return (
    <div>
      <AppC0 />
      AppC2
      <AppDataTable />
    </div>
  );
}

export default AppC2;
