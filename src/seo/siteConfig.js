const DEFAULT_SITE_URL = "https://bryanng-gitter.github.io/bryan-analytics-lab";

const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/$/,
  ""
);

export { SITE_URL };
