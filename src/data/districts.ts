// Comprehensive data for all Kerala districts with heritage sites and art forms
import bekalFortImg from "@/assets/bekal-fort.jpg";
import stAngeloFortImg from "@/assets/st-angelo-fort.jpg";
import theyyamImg from "@/assets/theyyam.jpg";
import edakkalCavesImg from "@/assets/edakkal-caves.jpg";
import gadhikaDanceImg from "@/assets/gadhika-dance.jpg";
import kappadBeachImg from "@/assets/kappad-beach.jpg";
import oppanaDanceImg from "@/assets/oppana-dance.jpg";
import tipuSultanFortImg from "@/assets/tipu-sultan-fort.jpg";
import mappilaPaattuImg from "@/assets/mappila-paattu.jpg";
import palakkadFortImg from "@/assets/palakkad-fort.jpg";
import kannyarkaliDanceImg from "@/assets/kannyarkali-dance.jpg";
import vadakkunnathhanTempleImg from "@/assets/vadakkunnathan-temple.jpg";
import pulikaliImg from "@/assets/pulikali.jpg";
import mattancherryPalaceImg from "@/assets/mattancherry-palace.jpg";
import kathakaliImg from "@/assets/kathakali.jpg";
import idukkiDamImg from "@/assets/idukki-dam.jpg";
import mannanKoothuImg from "@/assets/mannan-koothu.jpg";
import ettumanoorTempleImg from "@/assets/ettumanoor-temple.jpg";
import thiruvathirakaliImg from "@/assets/thiruvathirakali.jpg";
import alappuzhaBackwatersImg from "@/assets/alappuzha-backwaters.jpg";
import kalaripayattuImg from "@/assets/kalaripayattu.jpg";
import sabarimalaTempleImg from "@/assets/sabarimala-temple.jpg";
import aranmulaKannadiImg from "@/assets/aranmula-kannadi.jpg";
import thangasseryLighthouseImg from "@/assets/thangassery-lighthouse.jpg";
import mohiniyattamImg from "@/assets/mohiniyattam.jpg";
import padmanabhaswamyTempleImg from "@/assets/padmanabhaswamy-temple.jpg";
import kaikottikaliImg from "@/assets/kaikottikali.jpg";

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
      animation: "Animated visualization of fort architecture and historical timeline",
    },
    artform: {
      id: "kasaragod-artform",
      name: "Theyyam",
      image: theyyamImg,
      description: "Theyyam is an ancient ritualistic art form unique to North Kerala, particularly Kasaragod and Kannur districts. This spectacular performance combines dance, music, and elaborate costumes where performers embody deities. The vibrant red and orange costumes, intricate face paint, and towering headdresses create a mesmerizing spiritual experience that has been practiced for over 1500 years.",
      video: "https://www.youtube.com/embed/gFOJeRnHlSk",
      audio: "https://www.youtube.com/embed/XBzRjFUUG7A",
      animation: "Interactive Theyyam costume transformation sequence",
    },
  },
  kannur: {
    heritage: {
      id: "kannur-heritage",
      name: "St. Angelo Fort",
      image: stAngeloFortImg,
      description: "St. Angelo Fort is a historic Portuguese fort built in 1505, strategically positioned on the shores of the Arabian Sea in Kannur. This magnificent laterite structure showcases Portuguese military architecture and offers stunning coastal views. The fort has witnessed centuries of colonial history and stands as a testament to Kerala's maritime heritage.",
      video: "https://www.youtube.com/embed/HQw-VUXs8BQ",
      audio: "https://www.youtube.com/embed/4nK5E8qQZzg",
      animation: "3D reconstruction of fort during Portuguese era",
    },
    artform: {
      id: "kannur-artform",
      name: "Theyyam Ritual",
      image: theyyamImg,
      description: "Kannur is the heartland of Theyyam, the most spectacular ritualistic art form in Kerala. Theyyam performances involve extended chanting, ceremonial preparations spanning 8-10 hours, culminating in the divine manifestation. The performer, adorned with elaborate costumes and face paint, becomes the embodiment of the deity, creating a powerful spiritual experience for devotees. Over 400 different forms of Theyyam exist in the region.",
      video: "https://www.youtube.com/embed/C6WjUjJfPRo",
      audio: "https://www.youtube.com/embed/rLXxm0uVXXg",
      animation: "Virtual Theyyam performance with cultural annotations",
    },
  },
  wayanad: {
    heritage: {
      id: "wayanad-heritage",
      name: "Edakkal Caves",
      image: edakkalCavesImg,
      description: "Edakkal Caves are prehistoric rock shelters formed naturally from a unique disposition of three massive boulders at Ambukutty Mala. The caves contain ancient petroglyphs dating back to the Neolithic age (over 6000 years old), featuring human and animal figures, symbols, and pictorial writings. These stone carvings provide invaluable insights into Kerala's prehistoric civilization.",
      video: "https://www.youtube.com/embed/UrUJgGWTIxo",
      audio: "https://www.youtube.com/embed/UjHzk8PHRps",
      animation: "Timeline visualization of ancient cave art history",
    },
    artform: {
      id: "wayanad-artform",
      name: "Gadhika Tribal Dance",
      image: gadhikaDanceImg,
      description: "Gadhika is a traditional ritual dance of the Adiya tribe of Wayanad. This ancient tribal art form is performed during harvest festivals and special ceremonies. Men adorned in traditional attire with feathered headdresses perform rhythmic movements accompanied by traditional drums, celebrating their cultural heritage and connection with nature.",
      video: "https://www.youtube.com/embed/HBAkwxZwgN4",
      audio: "https://www.youtube.com/embed/9XwJM_q3xLQ",
      animation: "Interactive tribal dance patterns and rhythm sequences",
    },
  },
  kozhikode: {
    heritage: {
      id: "kozhikode-heritage",
      name: "Kappad Beach",
      image: kappadBeachImg,
      description: "Kappad Beach holds immense historical significance as the landing place of Portuguese explorer Vasco da Gama in 1498, marking the beginning of European colonization in India. This pristine golden beach features a historic monument commemorating this world-changing event. The serene coastal setting with swaying palms offers a perfect blend of history and natural beauty.",
      video: "https://www.youtube.com/embed/1CqH5_yQGvY",
      audio: "https://www.youtube.com/embed/LdWPqrvhCRs",
      animation: "Historical recreation of Vasco da Gama's arrival",
    },
    artform: {
      id: "kozhikode-artform",
      name: "Oppana",
      image: oppanaDanceImg,
      description: "Oppana is a graceful traditional dance performed by Muslim women of the Malabar region during wedding celebrations. The beautifully adorned bride sits in the center while her friends and relatives sing and dance around her, clapping hands rhythmically. This vibrant art form symbolizes joy, celebration, and the strong bonds of community in Kerala's Muslim culture.",
      video: "https://www.youtube.com/embed/Bxr-jKlJK2w",
      audio: "https://www.youtube.com/embed/9KrFqCXLzLc",
      animation: "Circular dance formation patterns with music visualization",
    },
  },
  malappuram: {
    heritage: {
      id: "malappuram-heritage",
      name: "Tipu Sultan Fort",
      image: tipuSultanFortImg,
      description: "Built by Tipu Sultan (the 'Tiger of Mysore') in the 18th century, this historic fort in Palakkad showcases exemplary Islamic military architecture. The fort features a prominent tower and massive stone walls, serving as a strategic military installation. The structure represents the architectural brilliance and military strategy of Tipu Sultan's reign.",
      video: "https://www.youtube.com/embed/qR0f0P_E2HQ",
      audio: "https://www.youtube.com/embed/pj8uL0MrDKQ",
      animation: "Fort defense system and strategic importance visualization",
    },
    artform: {
      id: "malappuram-artform",
      name: "Mappila Paattu",
      image: mappilaPaattuImg,
      description: "Mappila Paattu is the traditional folk music of the Mappila Muslim community of Malabar. This unique art form blends Arabic and Malayalam influences, featuring romantic ballads, religious hymns, and folk songs. Performed with traditional instruments like the harmonium and tabla, Mappila songs narrate tales of love, valor, and spirituality, representing the rich cultural tapestry of Kerala's Muslim heritage.",
      video: "https://www.youtube.com/embed/1gsjBkJYtBY",
      audio: "https://www.youtube.com/embed/hYl2v5iBKAU",
      animation: "Musical notation and cultural influences diagram",
    },
  },
  palakkad: {
    heritage: {
      id: "palakkad-heritage",
      name: "Palakkad Fort",
      image: palakkadFortImg,
      description: "Palakkad Fort, also known as Tipu's Fort, is a magnificent 18th-century fortification built by Hyder Ali in 1766. The fort features massive stone walls, bastions, and a moat, showcasing Indo-Islamic military architecture. Located at the gateway between Kerala and Tamil Nadu, this fort played a crucial strategic role in protecting the region from invasions.",
      video: "https://www.youtube.com/embed/JKW2g4dYZ3E",
      audio: "https://www.youtube.com/embed/2XSVt0rXS5A",
      animation: "Strategic location and trade route significance",
    },
    artform: {
      id: "palakkad-artform",
      name: "Kannyarkali",
      image: kannyarkaliDanceImg,
      description: "Kannyarkali is a graceful folk dance performed by women in Kerala, particularly in Palakkad district. Dancers form a beautiful circle, moving in synchronized harmony while singing traditional songs. Dressed in elegant Kerala traditional attire, the performers create mesmerizing patterns through coordinated movements, celebrating femininity and cultural heritage.",
      video: "https://www.youtube.com/embed/gQU9xD0RK5Y",
      audio: "https://www.youtube.com/embed/APq1KPOt-mU",
      animation: "Choreography patterns and traditional formations",
    },
  },
  thrissur: {
    heritage: {
      id: "thrissur-heritage",
      name: "Vadakkunnathan Temple",
      image: vadakkunnathhanTempleImg,
      description: "Vadakkunnathan Temple is an ancient Hindu temple dedicated to Lord Shiva, recognized by UNESCO as a world heritage site. This architectural marvel features traditional Kerala style with wooden structures, sloping roofs, and intricate carvings. The temple, dating back over 1000 years, is the venue for the famous Thrissur Pooram festival and houses valuable murals and artifacts.",
      video: "https://www.youtube.com/embed/fC0xLZnEFLI",
      audio: "https://www.youtube.com/embed/R5TXR_G4BK4",
      animation: "Temple architecture evolution and festival celebrations",
    },
    artform: {
      id: "thrissur-artform",
      name: "Pulikali",
      image: pulikaliImg,
      description: "Pulikali (Tiger Dance) is a vibrant folk art exclusively performed during Onam celebrations in Thrissur. Performers paint their entire bodies with yellow, red, orange, and black stripes to resemble tigers and hunters. Accompanied by traditional drums, these 'human tigers' dance through the streets in a spectacular display of color, energy, and cultural pride, attracting thousands of spectators.",
      video: "https://www.youtube.com/embed/gKePDWEFxhM",
      audio: "https://www.youtube.com/embed/dWaLQqsU6yY",
      animation: "Body painting process and dance choreography",
    },
  },
  ernakulam: {
    heritage: {
      id: "ernakulam-heritage",
      name: "Mattancherry Palace",
      image: mattancherryPalaceImg,
      description: "Mattancherry Palace, also known as the Dutch Palace, is a Portuguese palace featuring Kerala architecture with red tile roofs and stunning murals. Built around 1555, the palace showcases exquisite wall paintings depicting scenes from the Ramayana and other Hindu epics. The palace represents the cultural confluence of Portuguese, Dutch, and Kerala architectural traditions in Fort Kochi.",
      video: "https://www.youtube.com/embed/0h30eA6t49E",
      audio: "https://www.youtube.com/embed/fJq4FQXCEDY",
      animation: "Virtual tour of palace murals and architecture",
    },
    artform: {
      id: "ernakulam-artform",
      name: "Kathakali",
      image: kathakaliImg,
      description: "Kathakali is Kerala's most famous classical dance-drama, combining elaborate makeup, vibrant costumes, and expressive storytelling. Performers use intricate facial expressions, hand gestures (mudras), and body movements to enact stories from Hindu epics. The green, red, and black face makeup creates distinct character types. Training for Kathakali begins in childhood and requires years of rigorous practice.",
      video: "https://www.youtube.com/embed/A_LDOkiwk1Y",
      audio: "https://www.youtube.com/embed/gCE2H2KBzDc",
      animation: "Mudra (hand gesture) meanings and makeup application",
    },
  },
  idukki: {
    heritage: {
      id: "idukki-heritage",
      name: "Idukki Dam",
      image: idukkiDamImg,
      description: "Idukki Dam is a spectacular arch dam and one of the highest arch dams in Asia, standing at 168.91 meters. Built between two hills (Kuravan and Kurathi), this engineering marvel is part of the Idukki Hydroelectric Project. Surrounded by lush Western Ghats mountains, the dam creates a stunning reservoir and plays a crucial role in Kerala's power generation.",
      video: "https://www.youtube.com/embed/xz8f_6TUBhQ",
      audio: "https://www.youtube.com/embed/NnBJR7M1MBs",
      animation: "Dam construction process and hydroelectric power generation",
    },
    artform: {
      id: "idukki-artform",
      name: "Mannan Koothu",
      image: mannanKoothuImg,
      description: "Mannan Koothu is a unique ritual art form of the Mannan tribal community of Idukki district. This traditional performance is staged during important occasions like the king's crowning, harvest festivals, and as thanksgiving to hill gods and clan deities. Performers wear vibrant costumes with feathered headdresses, creating a powerful connection between tribal traditions and spiritual beliefs.",
      video: "https://www.youtube.com/embed/XaE7Sp0r6Xo",
      audio: "https://www.youtube.com/embed/k8zLvG6B4rk",
      animation: "Tribal rituals and ceremonial significance",
    },
  },
  kottayam: {
    heritage: {
      id: "kottayam-heritage",
      name: "Ettumanoor Temple",
      image: ettumanoorTempleImg,
      description: "Ettumanoor Mahadeva Temple is an ancient Hindu temple dedicated to Lord Shiva, believed to be over 1500 years old. The temple is renowned for its stunning golden roof, intricate wood carvings, and beautiful murals. The annual Arattu festival featuring decorated elephants attracts thousands of devotees. The temple represents the pinnacle of traditional Kerala temple architecture.",
      video: "https://www.youtube.com/embed/3kNi_q0RvMU",
      audio: "https://www.youtube.com/embed/7Pn0N7Tj7Gw",
      animation: "Temple festival celebrations and architectural details",
    },
    artform: {
      id: "kottayam-artform",
      name: "Thiruvathirakali",
      image: thiruvathirakaliImg,
      description: "Thiruvathirakali, also known as Kaikottikali, is a graceful group dance performed by women during festivals, especially Onam and Thiruvathira. Women dressed in traditional white Kerala sarees with golden borders dance in a circular formation, clapping hands rhythmically. The synchronized movements and melodious songs celebrate feminine grace, unity, and Kerala's cultural traditions.",
      video: "https://www.youtube.com/embed/y9xVHzVK2Vg",
      audio: "https://www.youtube.com/embed/dX7K0kBKV0M",
      animation: "Dance formation patterns and traditional songs",
    },
  },
  alappuzha: {
    heritage: {
      id: "alappuzha-heritage",
      name: "Alappuzha Backwaters",
      image: alappuzhaBackwatersImg,
      description: "Alappuzha, known as the 'Venice of the East,' is famous for its intricate network of backwaters, canals, and lagoons. The serene backwaters feature traditional houseboats (kettuvallams), lush paddy fields, and coconut groves reflecting in calm waters. This unique ecosystem represents Kerala's aquatic heritage and offers visitors an unforgettable experience of traditional Kerala life.",
      video: "https://www.youtube.com/embed/4WhLU6cX4tU",
      audio: "https://www.youtube.com/embed/pCv8iD6zFFE",
      animation: "Backwater ecosystem and houseboat construction",
    },
    artform: {
      id: "alappuzha-artform",
      name: "Kalaripayattu",
      image: kalaripayattuImg,
      description: "Kalaripayattu is one of the oldest martial arts in the world, originating in Kerala over 3000 years ago. This ancient combat system combines strikes, kicks, grappling, weaponry, and healing techniques. Training includes flexibility exercises, combat sequences, and weapon mastery with swords, shields, and staffs. Kalaripayattu influenced many Asian martial arts and continues to be practiced as both a martial art and healing tradition.",
      video: "https://www.youtube.com/embed/BKSZaBgYHwc",
      audio: "https://www.youtube.com/embed/j8HPjVvvZl8",
      animation: "Combat techniques and weapon forms demonstration",
    },
  },
  pathanamthitta: {
    heritage: {
      id: "pathanamthitta-heritage",
      name: "Sabarimala Temple",
      image: sabarimalaTempleImg,
      description: "Sabarimala is one of the largest annual pilgrimage destinations in the world, dedicated to Lord Ayyappa. Located in the Western Ghats mountains, this sacred temple attracts 40-50 million devotees annually. Pilgrims undertake a challenging trek through forests and mountains after observing a 41-day penance period. The temple represents the pinnacle of devotional fervor and spiritual dedication in Kerala.",
      video: "https://www.youtube.com/embed/RRk3bHvM1Hs",
      audio: "https://www.youtube.com/embed/qUZkgdYgw9k",
      animation: "Pilgrimage route and temple traditions",
    },
    artform: {
      id: "pathanamthitta-artform",
      name: "Aranmula Kannadi",
      image: aranmulaKannadiImg,
      description: "Aranmula Kannadi is a unique handmade metal mirror craft exclusive to the Aranmula village of Pathanamthitta. These special mirrors are made from a secret alloy of copper and tin, polished to perfection to create a distortion-free reflection. Considered auspicious and a geographical indication product of India, the craftsmanship has been passed down through generations for over 500 years.",
      video: "https://www.youtube.com/embed/YZOwf7g1Jq4",
      audio: "https://www.youtube.com/embed/7Q8XvCnR2-c",
      animation: "Mirror making process and metallurgical secrets",
    },
  },
  kollam: {
    heritage: {
      id: "kollam-heritage",
      name: "Thangassery Lighthouse",
      image: thangasseryLighthouseImg,
      description: "Thangassery Lighthouse is a historic 144-feet tall red and white striped lighthouse built by the British in 1902. Standing majestically on the shores of the Arabian Sea, this colonial-era structure offers panoramic views of the coastline. The lighthouse represents Kollam's maritime heritage and has guided countless ships safely through the waters for over a century.",
      video: "https://www.youtube.com/embed/pB2YGqM8hqE",
      audio: "https://www.youtube.com/embed/CfXqShZiLJs",
      animation: "Lighthouse operation and coastal navigation history",
    },
    artform: {
      id: "kollam-artform",
      name: "Mohiniyattam",
      image: mohiniyattamImg,
      description: "Mohiniyattam is a classical dance form of Kerala, characterized by graceful, swaying movements reminiscent of swaying palm trees and the gentle flow of the backwaters. Female dancers dressed in white and gold traditional attire with distinctive hairstyle perform this 'dance of the enchantress' (Mohini). The fluid, lyrical movements combined with subtle facial expressions make Mohiniyattam one of the eight classical dance forms of India.",
      video: "https://www.youtube.com/embed/jDAHU9q3fwE",
      audio: "https://www.youtube.com/embed/KmVIY4Ek1_s",
      animation: "Dance movement patterns and mudra expressions",
    },
  },
  thiruvananthapuram: {
    heritage: {
      id: "thiruvananthapuram-heritage",
      name: "Padmanabhaswamy Temple",
      image: padmanabhaswamyTempleImg,
      description: "Sri Padmanabhaswamy Temple is an ancient Hindu temple dedicated to Lord Vishnu, known for its Dravidian architecture and immense wealth. The temple features a magnificent seven-tier gopuram (tower) covered in gold and houses the deity in a reclining posture. Discovered treasures in underground vaults made it one of the richest temples in the world. The temple exemplifies Kerala's spiritual grandeur and architectural brilliance.",
      video: "https://www.youtube.com/embed/G3aNcPH7-0Y",
      audio: "https://www.youtube.com/embed/uGPOULmwfGM",
      animation: "Temple architecture and treasure chambers",
    },
    artform: {
      id: "thiruvananthapuram-artform",
      name: "Kaikottikali",
      image: kaikottikaliImg,
      description: "Kaikottikali, also known as Thiruvathirakali, is a group dance performed by women during Onam and other festivals. Women in traditional white kasavu sarees dance in a circular formation, clapping hands in perfect synchronization to melodious songs. This elegant performance celebrates joy, unity, and the cultural richness of Kerala, embodying the grace and collective spirit of Kerala's women.",
      video: "https://www.youtube.com/embed/6JNEH0kTN9c",
      audio: "https://www.youtube.com/embed/SvSl9vgJN7M",
      animation: "Circular dance formations and traditional melodies",
    },
  },
};
