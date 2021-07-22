import { TextField } from "@material-ui/core";
import { DateRange } from "@root/lib/types";
import { format } from "date-fns";
import { useState } from "react";
import DateRangeDialog from "./Dialogs/DateRangeDialog";

type SelectDateRangeInputProps = {
  onChange: (dateRange: DateRange) => void;
  value: DateRange;
};

const SelectDateRangeInput = (props: SelectDateRangeInputProps) => {
  const { onChange, value } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <TextField
        value={`С ${format(value.startDate, "dd.MM.yy")} до ${format(
          value.endDate,
          "dd.MM.yy"
        )}`}
        onClick={() => setIsOpen(true)}
        inputProps={{ disabled: true }}
        fullWidth
        variant="outlined"
        label="Дата"
        type="text"
      />
      <DateRangeDialog
        title="Выберите дату"
        isOpen={isOpen}
        dateRange={value}
        onSubmit={onChange}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default SelectDateRangeInput;
