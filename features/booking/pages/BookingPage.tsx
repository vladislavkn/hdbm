import { Auth } from "@/auth";
import { Layout, Section } from "@/layout";
import { Loading } from "@/utils";
import http from "@root/lib/http";
import React, { useEffect } from "react";
import useSWR from "swr";
import { getBookings } from "../api";
import BookingList from "../components/BookingList";
import { Booking } from "../types";

const mockBookings: Booking[] = new Array(12).fill(null).map((_, index) => ({
  startDate: new Date(),
  endDate: new Date(),
  roomId: index + "fioefjero",
  roomTitle: "Room title",
  roomImageUrl: `https://picsum.photos/200`,
  id: index,
}));

const BookingPage = () => {
  const { data, error } = useSWR("get_bookings", getBookings);

  return (
    <Auth>
      {(user) => (
        <Layout title="Бронирования">
          <Section title={`${user.firstname}, ваши бронирования`}>
            <Loading<Booking[]> data={data} error={error}>
              {(bookings) => <BookingList bookings={bookings} />}
            </Loading>
          </Section>
        </Layout>
      )}
    </Auth>
  );
};

export default BookingPage;
