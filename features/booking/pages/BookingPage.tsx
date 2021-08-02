import { Auth } from "@/auth";
import { Layout, Section } from "@/layout";
import { LoadSWR } from "@/utils";
import React from "react";
import { getBookings } from "../api";
import BookingList from "../components/BookingList";
import { Booking } from "../types";

const BookingPage = () => {
  return (
    <Auth>
      {(user) => (
        <Layout title="Бронирования">
          <Section title={`${user.firstname}, ваши бронирования`}>
            <LoadSWR<Booking[]> as="get_bookings" fetcher={getBookings}>
              {(bookings) => <BookingList bookings={bookings} />}
            </LoadSWR>
          </Section>
        </Layout>
      )}
    </Auth>
  );
};

export default BookingPage;
