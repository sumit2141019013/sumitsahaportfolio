import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                textAlign: "right",
                variant: "body2", // Use body2 variant for smaller screens
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                color: "text.secondary",
              }}
              align="right"
            >
              {`${item.date.toLocaleString("default", {
                month: "short",
              })} ${item.date.getFullYear()}`}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "1rem", px: 2 }}>
              <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.3rem" } }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
