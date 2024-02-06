import { Auth } from "@auth/core";
import Discord from "@auth/core/providers/discord";
import Facebook from "@auth/core/providers/facebook";
import Google from "@auth/core/providers/google";
import Instagram from "@auth/core/providers/instagram";
import { eventHandler, toWebRequest } from "h3";

export default eventHandler(async (event) =>
  Auth(toWebRequest(event), {
    secret: process.env.AUTH_SECRET,
    trustHost: !!process.env.VERCEL,
    redirectProxyUrl: process.env.AUTH_REDIRECT_PROXY_URL,
    providers: [
      Discord({
        clientId: process.env.AUTH_DISCORD_ID,
        clientSecret: process.env.AUTH_DISCORD_SECRET,
      }),
      Google({ clientId: process.env.AUTH_GOOGLE_CLIENT_ID, clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET }),
      Instagram({ clientId: process.env.AUTH_INSTAGRAM_CLIENT_ID, clientSecret: process.env.AUTH_INSTAGRAM_CLIENT_SECRET }),
      Facebook({ clientId: process.env.AUTH_FACEBOOK_CLIENT_ID, clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET })
    ],
  }),
);
