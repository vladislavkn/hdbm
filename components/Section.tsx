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
  },
  section: {
    "&:not(:last-child)": {
      marginBottom: theme.spacing(4),
    },
  },
  divider: {
    marginTop: theme.spacing(4),
  },
}));

const Section = (props: SectionProps) => {
  const { title, children, mainHeader = false, noDivider = false } = props;
  const classes = useStyles();

  return (
    <Box className={classes.section} component="section">
      <Typography
        className={classes.title}
        variant="h3"
        component={mainHeader ? "h1" : "h2"}
        gutterBottom
      >
        {title}
      </Typography>
      {children}
      {!noDivider && <Divider className={classes.divider} />}
    </Box>
  );
};

export default Section;
