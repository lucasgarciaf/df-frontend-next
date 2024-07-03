import MuiTypography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";
import * as React from "react";

const markStyleMapping: {
  [index: string]: { [subindex: string]: string };
} = {
  center: {
    h1: "",
    h2: "markedH2Center",
    h3: "markedH3Center",
    h4: "markedH4Center",
    h5: "",
    h6: "",
  },
  left: {
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "markedH6Left",
  },
  none: {
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
  },
};

const StyledTypography = styled(MuiTypography)(({ theme }) => ({
 
}));

interface ExtraTypographyProps {
  marked?: "center" | "left" | "none";
}

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h2",
  subtitle1: "h3",
};

function Typography<C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }> & ExtraTypographyProps
) {
  const { children, variant, marked = "none", ...other } = props;

  let markedClassName = "";
  if (variant && variant in markStyleMapping[marked]) {
    markedClassName = markStyleMapping[marked][variant];
  }

  return (
    <StyledTypography variantMapping={variantMapping} variant={variant} {...other} className={markedClassName}>
      {children}
      {markedClassName ? <span className={markedClassName} /> : null}
    </StyledTypography>
  );
}

export default Typography;