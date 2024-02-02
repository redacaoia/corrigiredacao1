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
      <div className="">
        <div className=" ">
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
