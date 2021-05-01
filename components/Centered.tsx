import { Box, Grid } from "@material-ui/core";
import { ReactChild } from "react";

type CenteredProps = {
  children: ReactChild | ReactChild[];
  containerClassName?: string;
  contentClassName?: string;
};

const Centered = (props: CenteredProps) => {
  const { children, containerClassName, contentClassName } = props;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={containerClassName}
    >
      <Box className={contentClassName}>{children}</Box>
    </Grid>
  );
};

export default Centered;
