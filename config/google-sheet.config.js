/*
OPSI PENGATURAN SIAP PAKAI:
- enabled: true/false
- scriptUrl: URL Web App Google Apps Script
- sheets.rsvp/wishes/opens: nama sheet
- actions: nama action yang harus cocok dengan Code.gs
- security.useToken: true/false
- display.loadRsvpFromSheet/loadWishesFromSheet: true/false
- display.refreshAfterSubmit: true/false
- request.timeout: waktu tunggu request dalam milidetik
*/

const GOOGLE_SHEET_CONFIG = {
  enabled: true,

  // URL Web App Google Apps Script.
  scriptUrl:
    "https://script.google.com/macros/s/AKfycbyJ996RgB9Cqc6Q5khKNFp9zDoOtUX5_nieMmO8PX19SuiqhOisnnloIgfx-HOMphoE1A/exec",

  sheets: {
    rsvp: "RSVP",
    wishes: "UCAPAN",
    opens: "KLIK_LINK",
    config: "CONFIG",
  },

  actions: {
    submitRsvp: "submit_rsvp",
    submitWish: "submit_wish",
    getRsvp: "get_rsvp",
    getWishes: "get_wishes",
    trackOpen: "track_open",
    getOpens: "get_opens",
  },

  security: {
    useToken: false,
    token: "",
  },

  display: {
    loadRsvpFromSheet: true,
    loadWishesFromSheet: true,
    showRsvpImmediately: true,
    showWishImmediately: true,
    refreshAfterSubmit: true,
    autoRefresh: false,
    refreshInterval: 15000,
  },

  request: {
    method: "POST",
    mode: "cors",
    contentType: "text/plain;charset=utf-8",
    timeout: 15000,
  },
};
