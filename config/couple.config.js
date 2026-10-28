/*
OPSI PENGATURAN SIAP PAKAI:
- enabled: true/false
- groom/bride.shortName: nama panggilan
- groom/bride.displayName: nama tampil
- groom/bride.fullName: nama lengkap
- groom/bride.fatherName dan motherName
- groom/bride.photo.enabled: true/false
- groom/bride.photo.src: path foto
- groom/bride.photo.shape: "rounded" | "circle" | "soft-square"
- separator: "&" | "dan" | "+"
*/

const COUPLE_CONFIG = {
  enabled: true,

  groom: {
    shortName: "Rodi",
    displayName: "MUHAMAD RODI",
    fullName: "MUHAMAD RODI, S.Kom., M.Kom",
    fatherName: "MAROAN",
    motherName: "HJ. NIKMAH",
    childLabel: "Putra dari",

    // Foto pada card mempelai.
    // enabled: true/false
    // shape: "rounded" | "circle" | "soft-square"
    photo: {
      enabled: true,
      src: "assets/images/couple/rodi-4x6.jpg",
      alt: "Foto Rodi",
      shape: "rounded",
    },
  },

  bride: {
    shortName: "Nopita",
    displayName: "NOPITA SULISTIA WATI",
    fullName: "NOPITA SULISTIA WATI, S.M",
    fatherName: "HAERUMAN",
    motherName: "ATIAH",
    childLabel: "Putri dari",

    // Foto pada card mempelai.
    // enabled: true/false
    // shape: "rounded" | "circle" | "soft-square"
    photo: {
      enabled: true,
      src: "assets/images/couple/nopita-4x6.jpg",
      alt: "Foto Nopita",
      shape: "rounded",
    },
  },

  separator: "&",
};
