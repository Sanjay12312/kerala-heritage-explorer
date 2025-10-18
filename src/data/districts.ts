// Placeholder data structure for Kerala districts
// Users will add photos and descriptions later

import bekalFortImg from "@/assets/bekal-fort.jpg";

export interface DistrictItem {
  id: string;
  name: string;
  image?: string;
  description: string;
  video?: string;
  audio?: string;
  animation?: string;
}

export interface DistrictData {
  heritage?: DistrictItem;
  artform?: DistrictItem;
}

export const districtData: Record<string, DistrictData> = {
  kasaragod: {
    heritage: {
      id: "kasaragod-heritage",
      name: "Bekal Fort",
      image: bekalFortImg,
      description: "Bekal Fort is a magnificent laterite fort located in Kasaragod, overlooking the Arabian Sea. Built in the 17th century, it is the largest fort in Kerala and a testament to the region's rich history. The fort's observation tower offers breathtaking views of the coastline and has been featured in several films.",
      video: "https://www.youtube.com/embed/ncdNcqGu3FA",
      audio: "https://www.youtube.com/embed/8O4Kps4ou_g",
    },
    artform: {
      id: "kasaragod-artform",
      name: "Kasaragod Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  kannur: {
    heritage: {
      id: "kannur-heritage",
      name: "Kannur Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "kannur-artform",
      name: "Kannur Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  wayanad: {
    heritage: {
      id: "wayanad-heritage",
      name: "Wayanad Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "wayanad-artform",
      name: "Wayanad Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  kozhikode: {
    heritage: {
      id: "kozhikode-heritage",
      name: "Kozhikode Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "kozhikode-artform",
      name: "Kozhikode Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  malappuram: {
    heritage: {
      id: "malappuram-heritage",
      name: "Malappuram Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "malappuram-artform",
      name: "Malappuram Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  palakkad: {
    heritage: {
      id: "palakkad-heritage",
      name: "Palakkad Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "palakkad-artform",
      name: "Palakkad Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  thrissur: {
    heritage: {
      id: "thrissur-heritage",
      name: "Thrissur Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "thrissur-artform",
      name: "Thrissur Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  ernakulam: {
    heritage: {
      id: "ernakulam-heritage",
      name: "Ernakulam Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "ernakulam-artform",
      name: "Ernakulam Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  idukki: {
    heritage: {
      id: "idukki-heritage",
      name: "Idukki Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "idukki-artform",
      name: "Idukki Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  kottayam: {
    heritage: {
      id: "kottayam-heritage",
      name: "Kottayam Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "kottayam-artform",
      name: "Kottayam Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  alappuzha: {
    heritage: {
      id: "alappuzha-heritage",
      name: "Alappuzha Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "alappuzha-artform",
      name: "Alappuzha Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  pathanamthitta: {
    heritage: {
      id: "pathanamthitta-heritage",
      name: "Pathanamthitta Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "pathanamthitta-artform",
      name: "Pathanamthitta Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  kollam: {
    heritage: {
      id: "kollam-heritage",
      name: "Kollam Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "kollam-artform",
      name: "Kollam Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
  thiruvananthapuram: {
    heritage: {
      id: "thiruvananthapuram-heritage",
      name: "Thiruvananthapuram Heritage",
      description: "Heritage information will be added here. Click 'Know More' to see detailed view.",
    },
    artform: {
      id: "thiruvananthapuram-artform",
      name: "Thiruvananthapuram Art Form",
      description: "Art form information will be added here. Click 'Know More' to see detailed view.",
    },
  },
};
