import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/sort</p>
        {/* <img src="https://kqntyyiksuhjoopllmsl.supabase.co/storage/v1/object/public/cabin-images/cabin-007.jpg" /> */}
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add a new Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
