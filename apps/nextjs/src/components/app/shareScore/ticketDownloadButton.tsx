import { FiDownload } from "react-icons/fi";

import { Button } from "~/components/ui/button";

export function TicketDownloadButton() {
  return (
    <div className=" flex flex-col items-center gap-4">
      <h4 className="text-lg text-center ">
        Baixe e compartilhe nos seus stories do instagram!
      </h4>
      <Button className="flex cursor-pointer items-center gap-3 rounded-3xl bg-black bg-opacity-80 px-14 py-6 font-semibold text-[#f1f1f1] shadow-md transition hover:bg-opacity-70">
        <FiDownload size={30} /> <span className="pt-2 text-base">Baixar</span>
      </Button>
    </div>
  );
}
