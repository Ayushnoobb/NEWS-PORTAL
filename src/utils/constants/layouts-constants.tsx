import {
  LinkSchema,
  NestedLinkSchema,
  OptionSchema,
} from "../schemas/CommonSchema";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navbar_menu_items: LinkSchema[] = [
  { title: "होमपेज", slug: "/" },
  { title: "समाचार", slug: "/news" },
  { title: "विजनेस", slug: "/business" },
  { title: "जीवनशैली", slug: "/jeebansil" },
  { title: "मनोरन्जन", slug: "/enjoyment" },
  { title: "विचार", slug: "/thoughts" },
  { title: "खेलकुद", slug: "/sports" },
  { title: "अन्य", slug: "/others" },
];

export const footer_menu_items: NestedLinkSchema[] = [
  {
    title: "समाचार",
    child: [
      { title: "समाज", slug: "/society" },
      { title: "विचार/ब्लग", slug: "/thoughts-blog" },
      { title: "साहित्य", slug: "/literature" },
      { title: "अन्तर्वार्ता", slug: "/talks" },
      { title: "प्रवास", slug: "/prawas" },
      { title: "अन्तर्वार्ता", slug: "/international" },
    ],
  },
  {
    title: "विजनेस",
    child: [
      { title: "बजार", slug: "/market" },
      { title: "पर्यटन", slug: "/thoughts-blog" },
      { title: "साहित्य", slug: "/literature" },
      { title: "रोजगार", slug: "/talks" },
      { title: "बैँक / वित्त", slug: "/prawas" },
      { title: "अटो", slug: "/international" },
      { title: "सूचना-प्रविधि", slug: "/international" },
    ],
  },
  {
    title: "मनोरञ्जन",
    child: [
      { title: "ब्लोअप", slug: "/market" },
      { title: "गसिप", slug: "/thoughts-blog" },
      { title: "साहित्य", slug: "/literature" },
      { title: "रोजगार", slug: "/talks" },
      { title: "बैँक / वित्त", slug: "/prawas" },
      { title: "अटो", slug: "/international" },
      { title: "सूचना-प्रविधि", slug: "/international" },
    ],
  },

  {
    title: "विशेष श्रृंखला",
    child: [
      { title: "सहकारी संकट विशेष", slug: "/market" },
      { title: "लगुबित्त संकट विशेष", slug: "/thoughts-blog" },
      { title: "संसद विघटन विशेष", slug: "/literature" },
      { title: "फ्रन्टलाइन हिरोज्", slug: "/talks" },
      { title: "निर्वाचन २०७४", slug: "/market" },
      { title: "मेरो कथा", slug: "/market" },
      { title: "स्थानीय चुनाव २०७९", slug: "/market" },
      { title: "निर्वाचन २०७९", slug: "/market" },
      { title: "एमाले महाधिवेशन", slug: "/market" },
      { title: "विश्वकप २०२२", slug: "/market" },
    ],
  },

  {
    title: "अनलाइनखबर",
    child: [
      { title: "हाम्रो टीम", slug: "/market" },
      { title: "प्रयोगका सर्त", slug: "/thoughts-blog" },
      { title: "विज्ञापन", slug: "/literature" },
      { title: "प्राइभेसी पोलिसी", slug: "/talks" },
      { title: "सम्पर्क", slug: "/prawas" },
    ],
  },
];

export const footer_end_items: OptionSchema[] = [
  { label: "संचालक सम्पादक", value: "अभिनास केसी" },
  { label: "हाम्रो बारेमा", value: "ए डि के मिडिया प्रा.ली." },
  { label: "सम्पर्क ठेगाना", value: "काठमाडौं ३१, शान्तीनगर" },
  { label: "+९७७-९८१३१११५४०", value: "www.abiralsanchar.com" },
  {
    label: "copyright",
    icon: (
      <div className="flex items-end gap-3">
        <FaFacebookSquare />
        <FaXTwitter />
        <FaYoutube />
      </div>
    ),
    value: "© २०२४ सर्वाधिकार सुरक्षित",
  },
];
