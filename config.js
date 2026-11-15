// ============================================================
//  CONFIG: paste your Google Cloud credentials here.
//  The API key and OAuth client ID are meant to be public in a
//  static site. Security comes from the restrictions you set in
//  Google Cloud Console (HTTP referrer + authorised JS origin).
//  NEVER put a client SECRET in this file.
// ============================================================
window.APP_CONFIG = {
  API_KEY: "YOUR_API_KEY",
  CLIENT_ID: "YOUR_OAUTH_CLIENT_ID.apps.googleusercontent.com",

  // Drive folder "Financial Reporting Revisions"
  ROOT_FOLDER_ID: "1scHG_sh9f5FM80eiBAAvn9vNFMjgn-04",

  SITE_TITLE: "Financial Reporting Revision Hub",

  // Loose files sitting directly in the root folder (e.g. trackers, syllabus sheets).
  // false = only chapter sub-folders are shown.
  SHOW_ROOT_FILES: false,

  // How many folder levels below each chapter to scan.
  MAX_DEPTH: 3
};
