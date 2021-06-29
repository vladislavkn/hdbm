import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

type RoomDatePickerProps = {
  startDate: Date;
  endDate: Date;
  checkIsDayDisabled: (day: Date) => boolean;
  onSelect: (from: Date, to: Date) => void;
};

const RoomDatePicker = (props: RoomDatePickerProps) => {
  const { checkIsDayDisabled, onSelect, startDate, endDate } = props;
  return (
    <DateRange
      ranges={[{ startDate, endDate, key: "selection" }]}
      onChange={onSelect}
      disabledDay={checkIsDayDisabled}
      showMonthAndYearPickers={false}
    />
  );
};

export default RoomDatePicker;
