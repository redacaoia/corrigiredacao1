// Esta função obtém o token do armazenamento local.
// Supabase armazena o token no armazenamento local para que possamos acessá-lo de lá.

import { env } from "@/env";

const getToken = () => {
    const storageKey = `sb-${env.SUPABASE_PROJECT_ID}-auth-token`;
    const sessionDataString = localStorage.getItem(storageKey);
    const sessionData = JSON.parse(sessionDataString || "null");
    const token = sessionData?.access_token;

    return token;
};

/* 
[] - trasnformar em cookies

*/