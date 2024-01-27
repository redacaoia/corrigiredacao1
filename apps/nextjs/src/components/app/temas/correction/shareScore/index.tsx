import * as React from "react";
import { PiShareFatFill } from "react-icons/pi";

import { Button } from "~/components/ui/button";
import { Drawer, DrawerTrigger } from "~/components/ui/drawer";
import { TicketFragments } from "../../../ticket/fragments";
import { DrawerContent } from "./drawerContent";

interface Props {
  score: number;
}

export function ShareScore({ score }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <span className="flex flex-col items-center gap-5">
          <Button variant="outline">
            <div className="flex items-center gap-3">
              <span className="text-base">Compartilhe sua conquista!</span>
              <PiShareFatFill size={25} />
            </div>
          </Button>
          <span className="text-center">
            Mostre ao mundo o seu progresso e inspire outros estudantes a
            alcançarem o sucesso acadêmico.
          </span>
        </span>
      </DrawerTrigger>

      <DrawerContent>
        <TicketFragments.Root>
          <TicketFragments.Content
            name="Walyson Moura"
            githubUsername="WalysonMoura"
            avatarUrl="https://github.com/WalysonMoura.png"
          />
        </TicketFragments.Root>
      </DrawerContent>
    </Drawer>
  );
}
