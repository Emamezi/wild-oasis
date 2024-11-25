import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const {
    mutate: updateSetting,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["settings"]);
      toast.success("Settings Updated");
    },
    onError: () => toast.error("Could not udate settings"),
  });
  return { updateSetting, isUpdating };
}
