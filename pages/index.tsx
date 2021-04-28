import Layout from "@components/Layout";
import WayCard from "@components/WayCard";
import { Grid } from "@material-ui/core";

const fakeWaysData = new Array(6).fill(null).map((_, index) => ({
  title: "Сочи",
  text: "Lorem ipsum dolor sit amet",
  imageUrl: "https://picsum.photos/300",
  href: `/search?way_id=${index}`,
  id: index,
}));

export default function Home() {
  return (
    <Layout paddingTop>
      <Grid container spacing={3}>
        {fakeWaysData.map((way) => (
          <Grid item xs={6} sm={4} md={3}>
            <WayCard
              title={way.title}
              text={way.text}
              href={way.href}
              imageUrl={way.imageUrl}
              key={way.id}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
