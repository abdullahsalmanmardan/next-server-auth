// which user info we wnat to store.

import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: string;
  username?: string;
  img?: string;
  isPro?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY!,
  cookieName: "MYSESSION_COOKIE",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  },
};
