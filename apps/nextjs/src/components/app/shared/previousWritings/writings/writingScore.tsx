import { BsFillStarFill } from "react-icons/bs";

import { StudentScore } from "../../studentScore";

export function WritingScore() {
  return (
    <div className="flex flex-col items-center justify-between ">
      <h3 className="text-gray flex items-center gap-1 font-medium ">
        Sua Nota <BsFillStarFill size={15} color="rgb(252 211 77)" />
      </h3>
      <div className="flex h-24 w-24 items-center justify-center">
        <StudentScore />
      </div>
    </div>
  );
}
