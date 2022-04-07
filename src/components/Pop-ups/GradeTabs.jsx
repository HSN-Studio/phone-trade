import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs() {
  const [value, setValue] = React.useState("A");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            className="grade-tabs"
            onChange={handleChange}
            aria-label="Grade Tabs"
          >
            <Tab label="Good(A)" value="A" />
            <Tab label="Fair(B)" value="B" />
            <Tab label="Poor(C)" value="C" />
          </TabList>
        </Box>
        <TabPanel value="A">
          <h4>Your iPhone is Flawless condition if it:</h4>
          <ul>
            <li>
              appears to be new out of the box or still in its original package.
            </li>
            <li>has absolutely no scratches, scuffs or other marks.</li>
            <li>is fully functional, including all buttons and ports.</li>
            <li>Must have ALL Parts including software fully functioning.</li>
            <li>Must power on and have EVERYTHING working as it should.</li>
            <li>Must NOT Have major damages( water damage, chips, cracks).</li>
            <li>Must NOT be rooted.</li>
            <li>Comes with the original phone screen.</li>
            <li>Must have the Touch/Face ID working.</li>
            <li>
              The display Must be free from defects such as dead pixels, white
              spots or burn-in.
            </li>
            <li>The Display Must NOT be cracked.</li>
            <li>The Battery health must not be below 85%.</li>
            <li>Must have NO Replacements done on it.</li>
          </ul>
        </TabPanel>
        <TabPanel value="B">
          <h4>Your iPhone is Fair condition if it:</h4>
          <ul>
            <li>powers on and holds charge.</li>
            <li>is fully functional, including all buttons and ports.</li>
            <li>has no cracks on the screen or body or damage on the LCD.</li>
            <li>Must have ALL Parts including software fully functioning.</li>
            <li>Must have EVERYTHING working as it should.</li>
            <li>Must NOT Have major damages( water damage, chips, cracks).</li>
            <li>Must NOT be rooted.</li>
            <li>Must have the Touch/Face ID working.</li>
            <li>Has moderate wear and tear i.e scratches.</li>
            <li>
              The display Must be free from defects such as dead pixels, white
              spots or burn-in.
            </li>
            <li>The Battery health may be below 80%.</li>
          </ul>
        </TabPanel>
        <TabPanel value="C">
          <h4>Your iPhone is Damaged condition if any of these are true:</h4>
          <ul>
            <li>it does not power on or hold charge.</li>
            <li>
              it has a damaged LCD (discoloration, dead pixels, etc) or has a
              crack on the body or screen.
            </li>
            <li>it is not 100% functional.</li>
            <li>it has water damage.</li>
            <li>Has a functional, non-cracked screen.</li>
            <li>Has hardware issues.</li>
            <li>The Phone Freezes.</li>
            <li>The Phone sensors are not working.</li>
            <li>Has dysfunctional touch ID</li>
            <li>Has battery that drains fast.</li>
            <li>Has dust under camera.</li>
            <li>might have a cracked rear glass or lens cover.</li>
          </ul>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
