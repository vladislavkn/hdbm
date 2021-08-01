import { makeStyles, Theme, colors, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: colors.grey[400],
  },
}));

type FormSubtitleProps = {
  text?: string;
};

const FormSubtitle = ({ text }: FormSubtitleProps) => {
  const classes = useStyles();

  return (
    <Typography className={classes.label} variant="body1" align="center">
      {text}
    </Typography>
  );
};

export default FormSubtitle;
