import { FreeContent } from "@/components/shared/freeContent";

export default function Plans() {
  return (
    <div className="mb-40 mt-20 flex flex-col items-center gap-4">
      <h1> Conteúdos Gratuitos</h1>
      <p className="body"></p>
      <FreeContent />
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        {
          //<SignUpButton className="block" />
        }
        {/*  <LeadCaptureForm /> */}
      </div>
      <p className="caption text-slate-11"></p>
    </div>
  );
}
