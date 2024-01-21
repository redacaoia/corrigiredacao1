import { TbCalendarTime } from "react-icons/tb";

interface PreviousWritingDateProps {
  date: string;
  time: string;
}
export function WritingDate({ date, time }: PreviousWritingDateProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 ">
      <TbCalendarTime size={18} className="text-zinc-700" />
      <span>
        {date} às {time}
      </span>
    </div>
  );
}
