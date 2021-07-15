import AttachPassportForm from "@components/AttachPassportForm";
import FormLayout from "@components/FormLayout";
import WithAuth from "@components/WithAuth";
import { Typography, Link } from "@material-ui/core";
import { useSelector } from "@root/lib/hooks/typedStoreHooks";
import { LOGIN_ROUTE } from "@root/lib/routes";
import { notify } from "@root/lib/utils";
import NextLink from "next/link";
import React, { useEffect } from "react";

const AttachPassport = () => {
  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    if (user?.hasPassportData)
      notify("Пасспорт уже привязан. Новые данные изменят сохраненные ранее", {
        autoHide: false,
      });
  }, [user]);
  return (
    <FormLayout title="Привязать паспорт">
      <WithAuth
        user={() => <AttachPassportForm />}
        guest={
          <Typography align="center" color="secondary" variant="subtitle1">
            Для привязки паспорта нужно{" "}
            <NextLink href={LOGIN_ROUTE.href}>
              <Link>войти</Link>
            </NextLink>{" "}
            в аккаунт.
          </Typography>
        }
      />
    </FormLayout>
  );
};

export default AttachPassport;
