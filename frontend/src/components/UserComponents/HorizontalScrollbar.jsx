import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";
import RightArrowIcon from "../../assets/icons/right-arrow.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="Left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="Left-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item.name}
          itemId={item.id || item.name}
          title={item.id || item.name}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodypart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
