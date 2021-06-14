import { Box, Divider, makeStyles, Theme, Typography } from "@material-ui/core";
import { ReactChild } from "react";

type SectionProps = {
  title?: string;
  children?: ReactChild[] | ReactChild;
  mainHeader?: boolean;
  noDivider?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    maxWidth: "100%",
    fontWeight: 500,
    fontSize: "1.8rem",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  section: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Section = (props: SectionProps) => {
  const { title, children, mainHeader = false } = props;
  const classes = useStyles();

  return (
    <Box className={classes.section} component="section">
      <Typography
        className={classes.title}
        component={mainHeader ? "h1" : "h2"}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default Section;
