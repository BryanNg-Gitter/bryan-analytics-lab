const DEFAULT_SITE_URL = "http://localhost:5173";

const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/$/,
  ""
);

export { SITE_URL };
