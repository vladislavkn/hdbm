import { Alert } from "@material-ui/lab";

type errorProps = {
  message: string;
};

const DisplayError = ({ message }: errorProps) => (
  <Alert severity="error">
    Ошибка:{" "}
    <p style={{ display: "inline", fontFamily: "monospace" }}>{message}</p>
  </Alert>
);

export default DisplayError;
