
//import { env } from "@/env.mjs"

import { SubscriptionPlan } from "~/types/site"

export const freePlan: SubscriptionPlan = {
    name: "Free",
    description:
        "The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.",
    stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
    name: "PRO",
    description: "The PRO plan has unlimited posts.",
    stripePriceId: ""
    //stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || "",

}