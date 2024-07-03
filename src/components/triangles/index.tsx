import { Box, Paper } from "@mui/material";
import { relative } from "path";

interface ITriangleProps {
  rotateDegrees?: string;
}

const Triangle = ({ rotateDegrees }: ITriangleProps) => {
  return (
    <Box
      display={"inline-block"}
      position={"relative"}
      borderBottom={"50px solid #FFC300"}
      borderRight={"25px solid transparent"}
      borderLeft={"25px solid transparent"}
      sx={{
        rotate: rotateDegrees,
      }}
    />
  );
};

const Triangles = () => {
  return (
    <Box display={"block"}>
      <Triangle />
      <Triangle rotateDegrees = {'180deg'}/>
      <Triangle />
    </Box>
  );
};

export default Triangles;
