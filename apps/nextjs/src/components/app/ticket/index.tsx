"use client";

import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Tilt from "vanilla-tilt";

import type { UserData } from "~/hooks/use-conf-data";
import type { TicketGenerationState } from "~/lib/constants";
import { DATE, SITE_NAME } from "~/lib/constants";
import { getUserByUsername } from "~/lib/getUserByUsername";
import isMobileOrTablet from "~/lib/is-mobile-or-tablet";
import Form from "./form";
import TicketActions from "./ticket-actions";
import TicketCopy from "./ticket-copy";
import TicketVisual from "./ticket-visual";
import styles from "./ticket.module.css";
import styleUtils from "./utils.module.css";

interface Props {
  username: UserData["username"];
  score: number;
  name: UserData["name"];
  sharePage?: boolean;
}

export default  function Ticket() {
  const ticketRef = useRef<HTMLDivElement>(null);
  const [ticketGenerationState, setTicketGenerationState] =
    useState<TicketGenerationState>("default");
  const divRef = useRef<HTMLDivElement>(null);
  /* 
  useEffect(() => {
    if (ticketRef.current && !window.matchMedia("(pointer: coarse)").matches) {
      Tilt.init(ticketRef.current, {
        glare: true,
        max: 5,
        "max-glare": 0.16,
        "full-page-listening": true,
      });
    }
  }, [ticketRef]);
   */
  /* 
  useEffect(() => {
    if (!sharePage && divRef && divRef.current && isMobileOrTablet()) {
      scrollTo(divRef.current, -30);
    }
  }, [divRef, sharePage]);
 */

  const username = getUserByUsername("WalysonMoura");

  return (
    <div
    /*  className={classNames(styles["ticket-layout"], {
        [styles["ticket-share-layout"]]: sharePage,
      })} */
    >
      {/* <div ref={divRef}>
        <div className={styles["ticket-text"]}>
          <h2
            className={cn(
              styles.hero,
              styleUtils.appear,
              styleUtils["appear-first"],
            )}
          >
            {sharePage ? (
              name ? (
                <>{name}’s Ticket</>
              ) : (
                <>{SITE_NAME}</>
              )
            ) : (
              <>
                You're in. <br /> Make it unique.
              </>
            )}
          </h2>
          <p
            className={cn(
              styles.description,
              styleUtils.appear,
              styleUtils["appear-second"],
            )}
          >
            {sharePage ? (
              <>
                Join {name ?? "them"} on {DATE}.
              </>
            ) : (
              <>
                Generate a unique ticket image with{" "}
                <br className={styleUtils["hide-on-mobile"]} />
                your GitHub profile.
              </>
            )}
          </p>
        </div>
        <div className={cn(styleUtils.appear, styleUtils["appear-third"])}>
          {!sharePage ? <Form sharePage /> : <Form sharePage />}
        </div>
      </div>
      <div className={styles["ticket-visual-wrapper"]}>
        <div
          ref={ticketRef}
          className={cn(
            styles["ticket-visual"],
            styleUtils.appear,
            styleUtils["appear-fourth"],
          )}
        >
          <TicketVisual
            username={username}
            name={name}
            ticketNumber={ticketNumber}
            ticketGenerationState={ticketGenerationState}
          />
        </div>
        {sharePage && (
          <>
            {username ? (
              <div>
                <div className={styles["ticket-actions"]}>
                  <TicketActions username={username} />
                </div>
                <div className={styles["ticket-copy"]}>
                  <TicketCopy username={username} />
                </div>
              </div>
            ) : (
              <div className={styles["ticket-actions-placeholder"]} />
            )}
          </>
        )}
      </div> */}

      {/*  <div className={styles["ticket-visual-wrapper"]}>
        <div
          ref={ticketRef}
          className={cn(
            styles["ticket-visual"],
            styleUtils.appear,
            styleUtils["appear-fourth"],
          )}
        >
          <TicketVisual
            username="WalysonMoura"
            name="WalysonMoura"
            ticketNumber={5}
            ticketGenerationState={ticketGenerationState}
          />
        </div> */}

      {/* {username ? ( */}
        <div>
        <TicketVisual
            username="WalysonMoura"
            name="WalysonMoura"
            ticketNumber={5}
            ticketGenerationState={ticketGenerationState}
          />
          <div className={styles["ticket-actions"]}>
            <TicketActions username="WalysonMoura" />
          </div>
          <div className={styles["ticket-copy"]}>
            <TicketCopy username="WalysonMoura" />
          </div>
        </div>
      {/* ) : (
        <div className={styles["ticket-actions-placeholder"]} />
      )} */}
    </div>
  );
}
