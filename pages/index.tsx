import Filter from "@components/Filter";
import Layout from "@components/Layout";
import Section from "@components/Section";
import WayCard from "@components/WayCard";
import { Box, colors, makeStyles, Theme } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const fakeWaysData = new Array(4).fill(null).map((_, index) => ({
  title: "Сочи",
  text: "Lorem ipsum dolor sit amet",
  imageUrl: "https://picsum.photos/1200",
  href: `/search?way_id=${index}`,
  objectsCount: Math.round(Math.random() * 100 + index + 1),
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
    minWidth: 280,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Layout>
      <Section title="Популярные направления">
        <Carousel animation="slide" autoPlay={false}>
          {fakeWaysData.map((way) => (
            <Box className={classes.item} key={way.id}>
              <WayCard {...way} />
            </Box>
          ))}
        </Carousel>
      </Section>
      <Section title="Подобрать отель" mainHeader noDivider>
        <Filter />
      </Section>
    </Layout>
  );
}
