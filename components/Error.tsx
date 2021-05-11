import { Alert } from "@material-ui/lab";

type errorProps = {
  message: string;
};

const Error = ({ message }: errorProps) => (
  <Alert severity="error">
    Ошибка: <pre style={{ display: "inline" }}>{message}</pre>
  </Alert>
);

export default Error;
