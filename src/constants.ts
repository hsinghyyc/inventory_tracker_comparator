export const DEBOUNCE_DELAY = 1000;

/* -- API CONSTANTS -- */
export const AUTH_TOKEN_KEY = "auth_token";
export const API_TIMEOUT_MS = 10000;
export const HEADER_CONTENT_TYPE_KEY = "Content-Type";
export const HEADER_CONTENT_TYPE_VALUE = "application/json";

/* -- ENV VARIABLES -- */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://localhost";

export const API_REFRESH_TOKEN_URL = import.meta.env.VITE_API_REFRESH_TOKEN_URL;
export const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
export const LOGOUT_URL = import.meta.env.VITE_LOGOUT_URL;

/* -- USER ROLES -- */
export const USER_ROLES = {
  EDITOR: "editor",
  ADMIN: "admin",
  FIRE_FIGHTER: "fire_fighter",
  SUPER_ADMIN: "super_admin",
};
