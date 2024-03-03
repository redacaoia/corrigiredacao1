import { FaEdit } from "react-icons/fa";

interface Pros {
    title: string;
  }
  
  export function WritingEdit({ title }:Pros) {
    return (
      <FaEdit size={24} className="text-slate-400" />
    );
  }