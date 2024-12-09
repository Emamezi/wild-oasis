import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

//Modal Compound component
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open
          opens="open-cabin"
          renderButton={(openFunction) => (
            <Button onClick={openFunction}>Add Cabin</Button>
          )}
        ></Modal.Open>
        <Modal.Window name="open-cabin">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
