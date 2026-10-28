/*
OPSI PENGATURAN SIAP PAKAI:
- enabled: true/false
- venueName: nama lokasi
- address: alamat lengkap
- mapsUrl: link Google Maps
- embedMapUrl: URL src iframe Google Maps
- buttons.openMaps.enabled: true/false
- buttons.embeddedMap.enabled: true/false
*/

const LOCATION_CONFIG = {
  enabled: true,

  venueName: "Lokasi Acara",
  address: "Pengendong, Dusun Borok, Desa Darmaji, Kopang, Lombok Tengah",
  mapsUrl: "https://maps.app.goo.gl/dtDditgrefpGBshq5",

  // Gunakan URL src iframe saja, bukan tag iframe lengkap.
  embedMapUrl:
    "https://maps.google.com/maps?q=-8.678096255009734,116.35407144506858&z=17&output=embed",

  buttons: {
    openMaps: {
      enabled: true,
      text: "Buka Google Maps",
    },
    embeddedMap: {
      enabled: true,
    },
  },
};
