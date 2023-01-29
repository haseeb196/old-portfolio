import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';

const Timelines = ({ t1, t2, t3 }) => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            className="border-black"
            variant="outlined"
          />
          <TimelineConnector className="h-20 bg-[#858484]" />
        </TimelineSeparator>
        <TimelineContent>
          <span className="whitespace-nowrap rounded-3xl bg-[#838383] p-3 text-[13px]">
            {t1}
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            className="border-black"
          />
          <TimelineConnector className="h-20 bg-[#858484]" />
        </TimelineSeparator>
        <TimelineContent>
          <span className="whitespace-nowrap rounded-3xl bg-[#838383]  p-3 text-[13px]">
            {t2}
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            className="border-black"
          />
        </TimelineSeparator>
        <TimelineContent>
          <span className="whitespace-nowrap rounded-3xl bg-[#838383]  p-3 text-[13px]">
            {t3}
          </span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timelines;
