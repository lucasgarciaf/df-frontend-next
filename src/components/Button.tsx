import MuiButton, { ButtonProps } from "@mui/material/Button";
import { experimentalStyled as styled } from "@mui/material/styles";
import * as React from "react";

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  fontStyle: "bold",
  padding: theme.spacing(1),
  borderRadius: 5,
  fontSize: theme.typography.pxToRem(14),
  boxShadow: "none",
  "&:active, &:focus": {
    boxShadow: "none",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  ...(size === "small" && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.common.white,

  }),
  ...(size === "large" && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.common.white,
  }),
}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function Button<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) {
  return <ButtonRoot {...props} />;
}

export default Button;
