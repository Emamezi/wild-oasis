import { useMutation } from "@tanstack/react-query";
import { editCabinAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: editCabinAPI,
    onSuccess: () => {
      toast.success("cabin updated succesfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });
  return { editCabin, isEditing };
}

export default useEditCabin;
