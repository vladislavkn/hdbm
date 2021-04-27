import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    padding: 12,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Typography className={classes.title} variant="h1">
      Hello, world!
    </Typography>
  );
}
