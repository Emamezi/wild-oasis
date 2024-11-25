import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isPending,
    error,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { register } = useForm();
  const { updateSetting, isUpdating } = useUpdateSettings();
  if (isPending) return <Spinner />;

  function handleUpdate(e, field) {
    console.log(e.target);
    const { value, defaultValue } = e.target;
    //check if the value has changed, if not do nothing
    if (!value || defaultValue === value) return;
    updateSetting({ [field]: value });
    console.log(typeof value);
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          {...register("minBookingLength", {
            onBlur: (e) => handleUpdate(e, "minBookingLength"),
          })}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          {...register("maxBookingLength", {
            onBlur: (e) => handleUpdate(e, "maxBookingLength"),
          })}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isUpdating}
          {...register("maxGuestPerBooking", {
            onBlur: (e) => handleUpdate(e, "maxGuestPerBooking"),
          })}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          {...register("breakfastPrice", {
            onBlur: (e) => handleUpdate(e, "breakfastPrice"),
          })}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
