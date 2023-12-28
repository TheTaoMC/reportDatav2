import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { filterSelect, storeColumns, storeData } from "../../recoilStore/Store";
import { useRecoilValue } from "recoil";

export default function AppDataTable() {
  const columns = useRecoilValue(storeColumns);
  const data = useRecoilValue(storeData);

  //console.log("columns:", columns);
  //console.log(columns);
  return (
    <div className="card">
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        {/*    {columns.map((e, i) => {
          <Column key={i} field={e.field} header={e.header}></Column>;
        })} */}
        {columns.map((e, i) => (
          <Column key={i} field={e.field} header={e.header}></Column>
        ))}
        {/* <Column field="DataID" header="DataID"></Column>
        <Column field="FlagCancel" header="FlagCancel"></Column> */}
      </DataTable>
    </div>
  );
}
