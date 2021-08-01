import { Auth } from "@/auth";
import { Layout, Section } from "@/layout";
import React from "react";

const BookingPage = () => {
  return (
    <Auth>
      {(user) => (
        <Layout title="Бронирования">
          <Section title={`${user.firstname}, ваши бронирования`}></Section>
        </Layout>
      )}
    </Auth>
  );
};

export default BookingPage;
