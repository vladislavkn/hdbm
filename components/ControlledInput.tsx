import { useFormContext, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@material-ui/core";

type ControlledInputProps = {} & TextFieldProps;

const ControlledInput = (props) => {
  const { control } = useFormContext();

  return <Controller as={TextField} control={control} {...props} />;
};

export default ControlledInput;
