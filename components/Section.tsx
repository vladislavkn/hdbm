import {
  Box,
  colors,
  Container,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { joinClasses } from "@root/lib/utils";
import { ReactChild } from "react";

type SectionProps = {
  title?: string;
  children?: ReactChild[] | ReactChild;
  dark?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    maxWidth: "100%",
    fontWeight: 500,
    fontSize: "1.8rem",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  section: {
    padding: theme.spacing(2, 2, 1),
  },
  sectionDark: {
    background: colors.grey[50],
  },
}));

const Section = (props: SectionProps) => {
  const { title, children, dark = false } = props;
  const classes = useStyles();

  return (
    <Box
      className={joinClasses(classes.section, dark && classes.sectionDark)}
      component="section"
    >
      <Container>
        <Typography className={classes.title}>{title}</Typography>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
