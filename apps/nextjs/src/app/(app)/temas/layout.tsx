import { IoClose } from "react-icons/io5";

/* import { Header } from "@/components/app/Header";
import { Footer } from "@/components/Footer";
 */
interface Props {
  children: React.ReactNode;
}

export default async function TemasLayout({ children }: Props) {
  return (
    <>
      <div className="relative z-50 w-full h-full bg-black">
        <div
          className="fixed top-0  flex w-full items-start justify-between  rounded-b-lg bg-lime-500
      transition-all "
        >
          <div className="flex gap-2">
            <IoClose />
            <h2>Corrigir Redação</h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
