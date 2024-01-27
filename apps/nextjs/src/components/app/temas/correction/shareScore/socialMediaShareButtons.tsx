import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";

import { Button } from "~/components/ui/button";

export function SocialMediaShareButtons() {
  return (
    <div className="flex items-center  justify-between gap-4">
      <Button
        variant="outline"
        className="hover:text-whatsapp hover:border-whatsapp rounded-full bg-gray-200 p-2 text-neutral-600"
      >
        <TbBrandWhatsapp size={25} />
      </Button>
      <Button
        variant="outline"
        className="hover:text-facebook hover:border-facebook rounded-full bg-gray-200 p-2 text-neutral-600"
      >
        <FaFacebookF size={25} />
      </Button>

      <Button
        variant="outline"
        className="hover:text-linkedin hover:border-linkedin rounded-full bg-gray-200 p-2 text-neutral-600"
      >
        <FaLinkedinIn size={25} />
      </Button>
      <Button
        variant="outline"
        className="rounded-full bg-gray-200 p-2 text-neutral-600 hover:text-slate-900 hover:border-slate-900"
      >
        <FaXTwitter size={25} />
      </Button>
    </div>
  );
}
