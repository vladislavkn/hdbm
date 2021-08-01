import { CenterLayout } from "@/layout";
import { Box, Button, Card, Divider, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

const GuestFallback = () => {
  const { push } = useRouter();
  return (
    <CenterLayout>
      <Card>
        <Box paddingX={1.5} paddingY={2}>
          <Typography variant="h5" align="center">
            Так, так, так. Вы не вошли в аккаунт.
          </Typography>
        </Box>
        <Divider />
        <Box paddingX={1.5} paddingY={1}>
          <Button color="primary" fullWidth onClick={() => push("/auth/login")}>
            Войти в аккаунт
          </Button>
        </Box>
        <Box paddingX={1.5} paddingY={1}>
          <Button color="primary" fullWidth onClick={() => push("/")}>
            Вернуться на главную
          </Button>
        </Box>
      </Card>
    </CenterLayout>
  );
};

export default GuestFallback;
