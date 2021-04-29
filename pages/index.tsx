import Filter from "@components/Filter";
import Layout from "@components/Layout";
import Section from "@components/Section";
import WayCard from "@components/WayCard";
import { Box, colors, makeStyles, Theme } from "@material-ui/core";

const fakeWaysData = new Array(6).fill(null).map((_, index) => ({
  title: "Сочи",
  text: "Lorem ipsum dolor sit amet",
  imageUrl: "https://picsum.photos/300",
  href: `/search?way_id=${index}`,
  id: index,
}));

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(0, -1),
    paddingBottom: theme.spacing(2),
    overflowY: "auto",
    display: "flex",
    "&::-webkit-scrollbar": {
      height: theme.spacing(1),
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: colors.grey[300],
      borderRadius: 4,
      "&:active": {
        backgroundColor: colors.grey[400],
      },
    },
  },

  item: {
    padding: theme.spacing(0, 1),
    maxWidth: 360,
    minWidth: 240,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Section title="Популярные направления">
        <Box className={classes.container}>
          {fakeWaysData.map((way) => (
            <Box className={classes.item} key={way.id}>
              <WayCard
                title={way.title}
                text={way.text}
                href={way.href}
                imageUrl={way.imageUrl}
              />
            </Box>
          ))}
        </Box>
      </Section>
      <Section title="Подобрать отель" mainHeader noDivider>
        <Filter />
      </Section>
    </Layout>
  );
}
