"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};
export const login = async (formData: FormData) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  // const formPassword = formData.get("password") as string;

  // check data in db.
  session.userId = "1";
  session.username = formUsername;

  session.isLoggedIn = true;
  session.isPro = "isPro";
  await session.save();

  redirect("/");
};
export const logout = async () => {};
