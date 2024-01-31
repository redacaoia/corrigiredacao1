import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";

import { Button } from "~/components/ui/button";

export function SocialMediaShareButtons() {
  return (
    <div className="flex items-center  justify-between gap-4">
      <Button
        variant="outline"
        className="rounded-full bg-gray-200 p-2 text-neutral-600 hover:border-whatsapp hover:text-whatsapp"
      >
        <TbBrandWhatsapp size={25} />
      </Button>
      <Button
        variant="outline"
        className="rounded-full bg-gray-200 p-2 text-neutral-600 hover:border-facebook hover:text-facebook"
      >
        <FaFacebookF size={25} />
      </Button>

      <Button
        variant="outline"
        className="rounded-full bg-gray-200 p-2 text-neutral-600 hover:border-linkedin hover:text-linkedin"
      >
        <FaLinkedinIn size={25} />
      </Button>
      <Button
        variant="outline"
        className="rounded-full bg-gray-200 p-2 text-neutral-600 hover:border-slate-900 hover:text-slate-900"
      >
        <FaXTwitter size={25} />
      </Button>
    </div>
  );
}
