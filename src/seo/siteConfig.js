const DEFAULT_SITE_URL = "https://hidden-meadow-71566-1cbfa1a6357b.herokuapp.com";

const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/$/,
  ""
);

export { SITE_URL };
