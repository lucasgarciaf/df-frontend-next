import MuiTextField, {
  FilledTextFieldProps,
  StandardTextFieldProps,
} from "@mui/material/TextField";
import { styled } from "@mui/system";
import clsx from "clsx";

const inputStyleMapping = {
  small: "inputSizeSmall",
  medium: "inputSizeMedium",
  large: "inputSizeLarge",
  xlarge: "inputSizeXlarge",
};

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  padding: 0,
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    minWidth: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    "&.Mui-disabled": {
      backgroundColor: theme.palette.divider,
    },
    "&.MuiInput-input": {
      border: "1px solid #e9ddd0",
      "&:focus": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
  "& .MuiFormLabel-root": {
    fontSize: 18,
  },
  "& .MuiSelect-root": {
    height: "auto",
    borderRadius: 0,
  },
  "& .MuiSelect-icon": {
    top: "50%",
    marginTop: -12,
  },
  "& .inputSizeSmall": {
    fontSize: 14,
    padding: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(2)})`,
  },
  "& .inputSizeMedium": {
    fontSize: 16,
    padding: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)})`,
  },
  "& .inputSizeLarge": {
    fontSize: 18,
    padding: 20,
    width: `calc(100% - ${20 * 2}px)`,
  },
  "& .inputSizeXlarge": {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`,
  },
}));

export interface OnePirateTextFieldProps
  extends Omit<FilledTextFieldProps | StandardTextFieldProps, "size"> {
  noBorder?: boolean;
  size?: "small" | "medium" | "large" | "xlarge";
}

function TextField(props: OnePirateTextFieldProps) {
  const {
    InputProps = {},
    InputLabelProps,
    noBorder,
    size = "medium",
    SelectProps,
    ...other
  } = props;

  const {
    classes: { input: InputPropsClassesInput, ...InputPropsClassesOther } = {},
    ...InputPropsOther
  } = InputProps;

  return (
    <StyledTextField
      InputProps={{
        classes: {
          input: clsx(
            inputStyleMapping[size],
            {
              "MuiInput-input": !noBorder,
            },
            InputPropsClassesInput
          ),
          disabled: "Mui-disabled",
          ...InputPropsClassesOther,
        },
        disableUnderline: true,
        ...InputPropsOther,
      }}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
        className: "MuiFormLabel-root",
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: "MuiSelect-root",
          icon: "MuiSelect-icon",
        },
      }}
      {...other}
    />
  );
}

export default TextField;