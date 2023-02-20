import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
const Timelines = ({ D1, D2, D3, t1, t2, t3 }) => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            className="!border-[#e4dddd]"
            variant="outlined"
          />
          <TimelineConnector className="h-20 !bg-[#cec8c8]" />
        </TimelineSeparator>
        <TimelineContent>
          <div className="flex flex-row items-start gap-8 s400:gap-2">
            <span className="whitespace-nowrap rounded-3xl bg-[#868585] p-3 text-[13px]">{D1}</span>{' '}
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-[19px] font-semibold sg:text-[16px] s400:whitespace-normal">
                {t1?.title}
              </span>
              <span className="text-[15px] text-[#373434] sg:text-[13px]">{t1?.span}</span>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            className="!border-[#e4dddd]"
          />
          <TimelineConnector className="h-20 !bg-[#cec8c8]" />
        </TimelineSeparator>
        <TimelineContent>
          <div className="flex flex-row items-start gap-8 s400:gap-2">
            <span className="whitespace-nowrap rounded-3xl bg-[#868585]  p-3 text-[13px]">{D2}</span>
            <div className="flex flex-col">
              <span className="whitespace-nowrap  text-[19px] font-semibold sg:text-[16px] s400:whitespace-normal">
                {t2?.title}
              </span>
              <span className="text-[15px] text-[#373434]  sg:text-[13px]">{t2?.span}</span>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            className="!border-[#e4dddd]"
          />
        </TimelineSeparator>
        <TimelineContent>
          <div className="flex flex-row items-start gap-8 s400:gap-2">
            <span className="whitespace-nowrap rounded-3xl bg-[#868585]  p-3 text-[13px]">{D3}</span>
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-[19px] font-semibold sg:text-[16px] s400:whitespace-normal">
                {t3?.title}
              </span>
              <span className="text-[15px] text-[#373434]  sg:text-[13px]">{t3?.span}</span>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Timelines;
