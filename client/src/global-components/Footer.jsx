import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CreateIcon from "@mui/icons-material/Create";
import DateRangeTwoToneIcon from "@mui/icons-material/DateRangeTwoTone";

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <div className="footer">
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Search" icon={<FitnessCenterIcon />} />
          <BottomNavigationAction label="Plan" icon={<CreateIcon />} />
          <BottomNavigationAction
            label="Calender"
            icon={<DateRangeTwoToneIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}
