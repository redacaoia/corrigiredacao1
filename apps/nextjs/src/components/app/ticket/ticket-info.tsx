/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Image from "next/image";
import { IoLogoVercel } from "react-icons/io5";

import { DATE, SITE_URL } from "~/lib/constants";
import styles from "./ticket-info.module.css";
import styleUtils from "./utils.module.css";

const siteUrl = new URL(SITE_URL);
const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(
  /\/$/,
  "",
);

export default function TicketInfo({
  logoTextSecondaryColor = "var(--accents-5)",
}) {
  const createdBy = (
    <div className={styles["created-by"]}>
      <div className={styles["created-by-text"]}>Created by </div>
      <div className={styles["created-by-logo"]}>
        <IoLogoVercel />
      </div>
    </div>
  );
  return (
    <div className={styles.info}>
      <div className={styles.logo}>
        <Image
          src="/book.png"
          alt="Precedent logo"
          width="30"
          height="30"
          className="mr-2 rounded-sm"
        ></Image>
      </div>
      <div className={styles.date}>
        <div>{DATE}</div>
        <div>ONLINE</div>
      </div>
      <div className={styleUtils["hide-on-mobile"]}>{createdBy}</div>
      <div className={styles.url}>{siteUrlForTicket}</div>
      <div className={styleUtils["show-on-mobile"]}>{createdBy}</div>
    </div>
  );
}
