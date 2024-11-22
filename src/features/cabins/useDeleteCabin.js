import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: (data) => {
      console.log("deleted data is", data);
      toast.success(`Cabin successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { isDeleting, deleteCabin };
}

export default useDeleteCabin;
