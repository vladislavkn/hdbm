import {
  Box,
  colors,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { joinClasses } from "@root/lib/utils";
import { ReactChild } from "react";

type SectionProps = {
  title?: string;
  children?: ReactChild[] | ReactChild;
  actions?: ReactChild[] | ReactChild;
  dark?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    maxWidth: "100%",
    fontWeight: 500,
    fontSize: "1.8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  section: {
    padding: theme.spacing(2, 0, 1),
  },
  sectionDark: {
    background: colors.grey[50],
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

const Section = (props: SectionProps) => {
  const { title, children, actions, dark = false } = props;
  const classes = useStyles();

  return (
    <Box
      className={joinClasses(classes.section, dark && classes.sectionDark)}
      component="section"
    >
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.header}
        >
          <Typography className={classes.title} component="h2">
            {title}
          </Typography>
          <Grid item>{actions}</Grid>
        </Grid>
        {children}
      </Container>
    </Box>
  );
};

export default Section;
