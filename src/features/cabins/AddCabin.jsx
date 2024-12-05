import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

//Modal Compound component
function AddCabin() {
  return (
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

      <Modal.Open
        opens="table"
        renderButton={(opens) => <Button onClick={opens}>Add Table</Button>}
      ></Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add a new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
