import { Box } from "@material-ui/core";
import { ReactChild } from "react";

type CenteredProps = {
  children: ReactChild | ReactChild[];
  containerClassName?: string;
  contentClassName?: string;
  contentWrapperClassName?: string;
  contentMaxWidth?: number;
};

const Centered = (props: CenteredProps) => {
  const {
    children,
    containerClassName,
    contentWrapperClassName,
    contentClassName,
    contentMaxWidth = 360,
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      className={containerClassName}
    >
      <Box
        className={contentWrapperClassName}
        maxWidth={contentMaxWidth}
        display="flex"
      >
        <div className={contentClassName}>{children}</div>
      </Box>
    </Box>
  );
};

export default Centered;
