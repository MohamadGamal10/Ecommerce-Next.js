"use server";

import { cookies } from "next/headers";

export async function logout() {
  const Cookie = await cookies();
  Cookie.set("token", "", { expires: new Date(0) });
}
