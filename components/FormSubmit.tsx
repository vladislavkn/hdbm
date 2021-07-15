import { Button, ButtonProps, CircularProgress } from "@material-ui/core";
import React from "react";

type FormSubmitProps = {
  children?: React.ReactChild | React.ReactChildren;
  isLoading?: boolean;
} & ButtonProps;

const FormSubmit = (props: FormSubmitProps) => {
  const { isLoading, children, ...buttonProps } = props;
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      disableElevation
      role="submit"
      {...buttonProps}
    >
      {isLoading ? (
        <CircularProgress size={24} style={{ color: "white" }} />
      ) : (
        children
      )}
    </Button>
  );
};

export default FormSubmit;
