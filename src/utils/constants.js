import english from "../assets/english.jpg";
import chinese from "../assets/Chinese.jpg";
import arabic from "../assets/arabic.jpg";
import bengali from "../assets/bengali.png";
import french from "../assets/french.jpg";
import hindi from "../assets/hindi.jpg";
import japanese from "../assets/japanese.jpg";
import german from "../assets/german.jpg";
import spanish from "../assets/spanish.jpg";
import russian from "../assets/russian.jpg";
import { BiSolidVideos } from "react-icons/bi";
import { FaPen, FaPlayCircle } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import company8 from "../assets/company8.png";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

import { AiFillYoutube } from "react-icons/ai";
export const services = [
  {
    id: 1,
    icon: <FaPlayCircle />,
    title: "Video Lessons",
    text: "Access a vast library of video lessons covering various languages, designed to cater to learners of all levels.",
  },
  {
    id: 2,
    icon: <FaPencilAlt />,
    title: "Quiz Challenges",
    text: "Put your language skills to the test with interactive quiz challenges, helping you reinforce your knowledge and understanding.",
  },

  {
    id: 3,
    icon: <FaQuestionCircle />,
    title: "Doubt Support",
    text: "Receive prompt assistance and clarification for any language-related doubts or questions from our dedicated support team.",
  },
  {
    id: 4,
    icon: <IoMdPerson />,
    title: "Profile Tracking",
    text: "Track your learning progress, view completed lessons, and monitor quiz performance with personalized profile tracking features.",
  },
];

export const companies = [
  {
    id: 1,
    src: company1,
  },
  {
    id: 2,
    src: company2,
  },
  {
    id: 3,
    src: company3,
  },
  {
    id: 4,
    src: company4,
  },
  {
    id: 5,
    src: company5,
  },
  {
    id: 6,
    src: company6,
  },
  {
    id: 7,
    src: company7,
  },
  {
    id: 8,
    src: company8,
  },
];
export const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "learn a language",
    url: "/languages-page",
  },
];

export const languagesCards = [
  {
    id: 1,
    src: english,
    name: "english",
  },
  {
    id: 2,
    src: german,
    name: "german",
  },
  {
    id: 3,
    src: bengali,
    name: "bengali",
  },
  {
    id: 4,

    src: chinese,
    name: "chinese",
  },
  {
    id: 5,
    src: spanish,
    name: "spanish",
  },
  {
    id: 6,

    src: japanese,
    name: "japanese",
  },

  {
    id: 7,
    src: arabic,
    name: "arabic",
  },

  {
    id: 8,
    src: russian,
    name: "russian",
  },
];

export const SingleLanguageOptions = [
  {
    id: 1,
    icon: <BiSolidVideos />,
    title: "Watch & Learn",
    text: "Explore the language through videos! Watch engaging content to improve your language skills, from conversations to lessons on grammar and more.",
    buttonText: "Watch Videos",
    name: "videos",
  },
  {
    id: 2,
    icon: <FaPen />,
    title: "Quiz Quest",
    text: "Test your knowledge! Take fun quizzes to practice what you've learned and track your progress along the way.",
    buttonText: "Attempt Quiz",
    name: "quiz",
  },

  {
    id: 3,
    icon: <FaQuestionCircle />,
    title: "Ask a Doubt",
    text: "Have a question or need help? Feel free to reach out with any questions or uncertainties you may have. We're here to assist you.",
    buttonText: "Ask a Doubt",
    name: "doubt",
  },
];

export const videos = [
  {
    language: "english",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 0,
            title: "Present Indefinite: Identification",
            src: "https://www.youtube.com/watch?v=mGPd5zvsOEw&si=JCUtp4kwDoZTSMIe",
          },
          {
            id: 1,
            title: "Present Indefinite: Sentence Making",
            src: "https://www.youtube.com/watch?v=V7G_5DseTug&si=Ib_FgzdyPJG_DRsr",
          },
          {
            id: 2,
            title: "Present Continuous",
            src: "https://www.youtube.com/watch?v=EXm5KAXzbJE&si=W0CMOOvGtSjVB6-m",
          },
          {
            id: 3,
            title: "Present Perfect",
            src: "https://www.youtube.com/watch?v=ioSKIvU1GBo&si=DSMM23bteWmodh2z",
          },
          {
            id: 4,
            title: "Present Perfect Continuous",
            src: "https://www.youtube.com/watch?v=WwwFLsnccug&si=RYFp1Grx0VzoY1jN",
          },
          {
            id: 5,
            title: "Past Indefinite",
            src: "https://www.youtube.com/watch?v=OnEpTNzNfa0&si=4ecJo7-9zF3MLTwE",
          },
          {
            id: 6,
            title: "Past Continuous",
            src: "https://www.youtube.com/watch?v=rUqy1p5BO2Q&si=8Vn7G7dnVpjNFCTF",
          },
          {
            id: 7,
            title: "Past Perfect",
            src: "https://www.youtube.com/watch?v=cyXm7ErPNbw&si=AQf7-gSWMpn_lfVu",
          },
          {
            id: 8,
            title: "Past Perfect Continuous",
            src: "https://www.youtube.com/watch?v=ABpVbtuAh48&si=lX_FtT14l5Q-xSH6",
          },
          {
            id: 9,
            title: "Future Indefinite",
            src: "https://www.youtube.com/watch?v=5fXzfec0wg0&si=0g8h7VYxu-_3JKs-",
          },
          {
            id: 10,
            title: "Future Continuous Tense",
            src: "https://www.youtube.com/watch?v=oJ4vTJCgDGk&si=6o3E5NKnDSAGvLEQ",
          },
          {
            id: 11,
            title: "Future Perfect",
            src: "https://www.youtube.com/watch?v=8EeTdxZWYEs&si=tcyVY2SeE_qQLQMb",
          },
          {
            id: 12,
            title: "Future Perfect Continuous",
            src: "https://www.youtube.com/watch?v=LT8mcO-d9DE&si=gx7-fACW04qkJS0h",
          },
          {
            id: 13,
            title: "Regular Use Sentences",
            src: "https://www.youtube.com/watch?v=0cFZPILax5s&si=JtWxBmIyqqLMsi6g",
          },
          {
            id: 14,
            title: "Sentences used in anger",
            src: "https://www.youtube.com/watch?v=vgMidHx_KvQ&si=ejF5VsqyZ-aPDKWw",
          },
          {
            id: 15,
            title: "Use of Can, Could, Could Have, Would Have",
            src: "https://www.youtube.com/watch?v=GJdQzsbENPw&si=LoMgj8RK5AfQQfGn",
          },
          {
            id: 16,
            title: "Use of Should, Must, Should Have and Must Have",
            src: "https://www.youtube.com/watch?v=N8Q6PqtX02M&si=wylkibRnL7Up5PfR",
          },
          {
            id: 17,
            title: "Use of May, Might, May Have and Might Have",
            src: "https://www.youtube.com/watch?v=OafTmIbST48&si=_-syrT0zlez770Ob",
          },
          {
            id: 18,
            title: "How to Use 'Have & 'Had' in Sentences",
            src: "https://www.youtube.com/watch?v=sTL3yagIbxA&si=8-ZaHvNbitxL6Vhk",
          },
          {
            id: 19,
            title: "Use of 'Have to', 'Has to', 'Had to', Have, Has and Had",
            src: "https://www.youtube.com/watch?v=ROBQkcMJHN0&si=1AR5jhx3FXOV9c6F",
          },
          {
            id: 20,
            title: "Use of 'Going to' and 'About to' in English language",
            src: "https://www.youtube.com/watch?v=jdBE9_V4T2k&si=kLg8wWnI0XCsk6Bq",
          },
          {
            id: 21,
            title: "WH Question Words",
            src: "https://www.youtube.com/watch?v=ZIw6qG4BDZg&si=XGBuSZ2MzVh35ot5",
          },
          {
            id: 22,
            title: "Imperative sentences",
            src: "https://www.youtube.com/watch?v=EulgNBQtKao&si=uy3sAt8KA4R5a1GU",
          },
          {
            id: 23,
            title: "Uses of 'Let' in English Language",
            src: "https://www.youtube.com/embed/vQqZRTY2k5c?si=ZyQQnWizjdwfGz_8",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 0,
            title: "Regular use Sentences",
            src: "https://www.youtube.com/watch?v=GJwdn0y3jRk&si=yRjACCmLV1dE12ei",
          },
          {
            id: 1,
            title: "How to Use Still & Yet in English Language",
            src: "https://www.youtube.com/watch?v=NI9xJzWOg5w&si=oIaIG25AcQ8fFo-r",
          },
          {
            id: 2,
            title: "How to use 'Whether, Neither, Either' in English Language",
            src: "https://www.youtube.com/watch?v=ZoaNOonJo14&si=ecQK04z4QKqxUCzg",
          },
          {
            id: 3,
            title:
              "How to Use 'Rather than' and 'Instead off' in English Language",
            src: "https://www.youtube.com/watch?v=uZqsGgWSfRM&si=eP9vbz3pXJr-3_L5",
          },
          {
            id: 4,
            title: "Regular Use or Daily Use Sentences in English Spoken",
            src: "https://www.youtube.com/watch?v=Pl-wElZ2tXQ&si=l-iAUPQvlZdRQNtd",
          },
          {
            id: 5,
            title: "More Transition Words | English Language | English Spoken",
            src: "https://www.youtube.com/watch?v=DBBgp0AlSD8&si=WZugyx7nrCmmYtsh",
          },
          {
            id: 6,
            title: "Further Discussion On Transition Words",
            src: "https://www.youtube.com/watch?v=X85bHGz7USQ&si=b5gni48sIaElkbcy",
          },
          {
            id: 7,
            title:
              "How to use Though, Although, Despite & other transition words",
            src: "https://www.youtube.com/watch?v=WeeWqIKKq4Y&si=hg_CgeFIDQLLsCSK",
          },
          {
            id: 8,
            title:
              "How to use Even Though, Even If, Even When and Other transition words",
            src: "https://www.youtube.com/watch?v=5TqUA44yBhg&si=9d2kfRoQRw5cMs2G",
          },
          {
            id: 9,
            title: "How to use While, Wheares, Thus, Hence etc",
            src: "https://www.youtube.com/watch?v=DrR_BjPIgMQ&si=kkcQsyDLBWSGuyhO",
          },
          {
            id: 10,
            title: "English Language Lecture",
            src: "https://www.youtube.com/watch?v=K54q45TjCm4&si=wZ9dhQINx09fGcUY",
          },
          {
            id: 11,
            title: "Use of Articles",
            src: "https://www.youtube.com/watch?v=tyK80lvsgJQ&si=XOgOKQ6xCMIcU_RE",
          },
          {
            id: 12,
            title: "Uses of Articles Lecture 2",
            src: "https://www.youtube.com/watch?v=M-TzVuOfzUM&si=cjsQnVlEvxfNoo1F",
          },
          {
            id: 13,
            title: "Uses of Articles | Where we never Use 'The'",
            src: "https://www.youtube.com/watch?v=2h6FxpVLRJw&si=l1rH3kySZ-gq1Inu",
          },
          {
            id: 14,
            title: "How to use 'A' & 'An' in Sentences",
            src: "https://www.youtube.com/watch?v=hWmqI1kdRrQ&si=JCQUIXdDhJpi7P9v",
          },
          {
            id: 15,
            title: "Advanced Grammatical Structures",
            src: "https://www.youtube.com/watch?v=_hsbh7F0KOI&si=X0a90R99qphBQxld",
          },
          {
            id: 16,
            title: "Uses of Prepositions | How to use 'At' in Sentences",
            src: "https://www.youtube.com/watch?v=Z_r-hoEqTM8&si=YZhNaMly_WCsKFu-",
          },
          {
            id: 17,
            title: "Grammatical Structures, uses of 'Desirous of'",
            src: "https://www.youtube.com/watch?v=Vg-wOMXuoVQ&si=NxWGgpwAtBqeyH-6",
          },
          {
            id: 18,
            title: "Uses of 'No Harm In' & 'Raring To'",
            src: "https://www.youtube.com/watch?v=LCQWJgojjXA&si=sEmcWgoWYfFjFxnY",
          },
          {
            id: 19,
            title: "Useful Words and Phrases",
            src: "https://www.youtube.com/watch?v=EbpR7Rh0Kt4&si=8AQ1IFzS1vYmxWE6",
          },
          {
            id: 20,
            title: "Punctuations | Uses of Punctuations",
            src: "https://www.youtube.com/watch?v=M_vO-vzfovo&si=5hDjv58NTEZmPV8F",
          },
          {
            id: 21,
            title: "Punctuation Marks , Colon and Semi colon",
            src: "https://www.youtube.com/watch?v=C5FcCLpw96A&si=wMRAjLzhPimUc8xc",
          },
          {
            id: 22,
            title: "Uses of Punctuations",
            src: "https://www.youtube.com/watch?v=C5FcCLpw96A&si=wMRAjLzhPimUc8xc",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 0,
            title: "Ramadan Sentences",
            src: "https://www.youtube.com/watch?v=MpGMemkq2_o&si=ruelJHr2C-aqA2tW",
          },
          {
            id: 1,
            title: "Ways to say, 'I Like It'",
            src: "https://www.youtube.com/watch?v=R63zSmvUL1g&si=FHEdjH3H-4U86WcY",
          },
          {
            id: 2,
            title: "Daily Use Vocabulary | Regular use vocabulary",
            src: "https://www.youtube.com/watch?v=c2zy2ZGDDao&si=NrkTl10H1Y_thmIj",
          },
          {
            id: 3,
            title: "Daily Use Sentence",
            src: "https://www.youtube.com/watch?v=Kgie7lyhfF4&si=9uPujkVAxT0QGKM",
          },
          {
            id: 4,
            title: "Speak English in a Different Way",
            src: "https://www.youtube.com/watch?v=DUlmqYuxX1U&si=LHHnYhJnp1sq_EA_",
          },
          {
            id: 5,
            title: "Regular use interesting Sentences",
            src: "https://www.youtube.com/watch?v=YKUHrXX_YCg&si=ckA4MCWkWlmnZnGV",
          },
          {
            id: 6,
            title: "Regular use English language sentences",
            src: "https://www.youtube.com/watch?v=nosTKEIlz8c&si=Jc5QEVCX6Byvh7ef",
          },
          {
            id: 7,
            title: "Formal and Informal English Sentences",
            src: "https://www.youtube.com/watch?v=COPBiG8sCLc&si=LuFOqSDTeC8rGSNx",
          },
          {
            id: 8,
            title: "Very interesting vocabulary",
            src: "https://www.youtube.com/watch?v=SzKPlurLbKU&si=R-Rug7rg6x4biJVa",
          },
          {
            id: 9,
            title: "Conditional Sentence",
            src: "https://www.youtube.com/watch?v=zTUGR9yiQ2Y&si=Ji4bDq3Asl_LkqHX",
          },
          {
            id: 10,
            title: "Conditional Sentences | Second Condition",
            src: "https://www.youtube.com/watch?v=JwxpVN923x8&si=K03YqwKwdWb8EnCU",
          },
          {
            id: 11,
            title: "Causative Verbs",
            src: "https://www.youtube.com/watch?v=QNkE6asOZd0&si=NIDGxgTipfA3SAMy",
          },
          {
            id: 12,
            title: "Advanced English, Part 2 | Causative Verbs",
            src: "https://www.youtube.com/watch?v=ICcLY524UdQ&si=epGc3XavI-gb7LfN",
          },
          {
            id: 13,
            title: "Gerunds",
            src: "https://www.youtube.com/watch?v=2V24CNqkuAg&si=65I6nVfaZjiIiq-z",
          },
          {
            id: 14,
            title: "Infinitives and Gerunds",
            src: "https://www.youtube.com/watch?v=9W-meN7sbqw&si=UbxZnRA1Fl6HBJqt",
          },
          {
            id: 15,
            title: "How to Speak English Confidently",
            src: "https://www.youtube.com/watch?v=xccfpU7cg5A&si=tGttNvnhyRxK0Lia",
          },
          {
            id: 16,
            title: "How to introduce yourself in English",
            src: "https://www.youtube.com/watch?v=l4gdb28h_u0&si=umuMOQvA3B-v6pLW",
          },
          {
            id: 17,
            title:
              "Hey Parents Start Speaking English At Home with Children, Learn How",
            src: "https://www.youtube.com/watch?v=VpMtaQr0KL8&si=_ZlgSmNeoiFbTwV3",
          },
          {
            id: 18,
            title:
              "Hey Parents Start Speaking English At Home with Children, Learn How | Part 2",
            src: "https://www.youtube.com/watch?v=tLoSYdcKbhk&si=UQKKicIwoSbV3OEV",
          },
          {
            id: 19,
            title: "Most Effective Conversation at work place",
            src: "https://www.youtube.com/watch?v=hYINoPNq1FM&si=CvPneqvXf1y7bvLr",
          },
          {
            id: 20,
            title: "Most Effective Conversation at Restaurant",
            src: "https://www.youtube.com/watch?v=ce_h5m8j894&si=bNCUx2L4kx5qbPZJ",
          },
        ],
      },
    ],
  },
  {
    language: "german",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 1,
            title: "Das Alphabet, Learn the German alphabet",
            src: "https://www.youtube.com/embed/TytGj8xiPyY?si=4x8i3v5znaZQX2RN",
          },
          {
            id: 2,
            title:
              "Der Die Das? | German Genders Explained | Tips, Tricks and Hacks",
            src: "https://www.youtube.com/embed/IFsEX4ZY6bc?si=1CdCI4c887nTJNZy",
          },
          {
            id: 3,
            title: "How to Learn German",
            src: "https://www.youtube.com/embed/gdKOXS5vqRA?si=fmS5ucwjg2D10Lp5",
          },
          {
            id: 4,
            title:
              "German Personal Pronouns in NOMINATIVE | ich (I), du (you), er (he)...",
            src: "https://www.youtube.com/embed/IGmXQG65TSY?si=14Cel4ZkRu_-gkqw",
          },
          {
            id: 5,
            title:
              "German Tenses | The German Present Tense Explained | A1 Beginner",
            src: "https://www.youtube.com/embed/Ya-3_64snmo?si=ODKCDcbdIA9y3hNF",
          },
          {
            id: 6,
            title:
              "German Plural Rules | Best Tips, Tricks and Hacks! | Plural Regeln",
            src: "https://www.youtube.com/embed/3Aqc5WDKO9A?si=-yxtSjw7rkjRnQO0",
          },
          {
            id: 7,
            title: "What is Nominativ? | Your First German Case Explained",
            src: "https://www.youtube.com/embed/I7vsv8DN9EE?si=IGzevTwUyFxHIm0e",
          },
          {
            id: 8,
            title:
              "Formal vs Informal in German | When to use what and how you use it",
            src: "https://www.youtube.com/embed/uEZev5K9TDI?si=WIALIovhQROpaqnf",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 1,
            title: "Kein vs Nicht | The difference and rules explained!",
            src: "https://www.youtube.com/embed/NcswV-xuyMc?si=yCmrwOar8612U9Wa",
          },
          {
            id: 2,
            title:
              "Mein Dein Sein │ Possessivartikel │ German Possessive Articles",
            src: "https://www.youtube.com/embed/xdVWELZqPT8?si=Ji035MI_fT-v2g8O",
          },
          {
            id: 3,
            title: "Was ist Akkusativ? | German accusative explained",
            src: "https://www.youtube.com/embed/fPKH95g_9cs?si=l23miwzCatg44a97",
          },
          {
            id: 4,
            title: "Satzbau Part I | Hauptsatz | German Sentence Structure I",
            src: "https://www.youtube.com/embed/O-_cxHx5FD4?si=LA12XYGIdNmrRJJl",
          },
          {
            id: 5,
            title:
              "Trennbare Verben Example Sentences | German Separable Verbs Explained!",
            src: "https://www.youtube.com/embed/Tizr0WwCzFQ?si=y9XABOQ75cE2joJh",
          },
          {
            id: 6,
            title:
              "Trennbare Verben Example Sentences | German Separable Verbs Explained!",
            src: "https://www.youtube.com/embed/Tizr0WwCzFQ?si=6iTIFN0MR4dpAaXn",
          },
          {
            id: 7,
            title: "German Perfect Tense | Das Perfekt mit 'haben'",
            src: "https://www.youtube.com/embed/cWFjOK9sfBw?si=Pj-2KYDuP7Mi8o8p",
          },
          {
            id: 8,
            title: "German Perfect Tense | SEIN or HABEN? Explained!",
            src: "https://www.youtube.com/embed/5vG9ofF0EHk?si=U5_9Sz5gnQPr_hfM",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 1,
            title:
              "Das Partizip 2 Explained! | How to form the German Past Participle?",
            src: "https://www.youtube.com/embed/VHXRyyTVhmw?si=al_2IGt23KedCIaS",
          },
          {
            id: 2,
            title:
              "Doch! How to use this important German word and its meaning",
            src: "https://www.youtube.com/embed/B5uxzsr0Dqc?si=9NdgRzAyiJHysc3R",
          },
          {
            id: 3,
            title:
              "German Personal Pronouns in Akkusativ with Examples | mich (me), dich (you)",
            src: "https://www.youtube.com/embed/GHRHSR-5thc?si=6ugr-xSgA9TSsVcE",
          },
          {
            id: 4,
            title:
              "German Time Prepositions | The Top 5 you need to know for A1.1",
            src: "https://www.youtube.com/embed/ziPDfbS5Rlk?si=ECDdYtTvkIY2TmBO",
          },
          {
            id: 5,
            title:
              "PRACTICE German Perfect Tense: HABEN or SEIN A1 - A2 | Perfekt mit HABEN und SEIN",
            src: "https://www.youtube.com/embed/xzlqufaC6Qk?si=K2Jo7oaWINdx-ykx",
          },
          {
            id: 6,
            title:
              "Goethe Zertifikat A1 SCHREIBEN | How to pass the written part. | German A1 Goethe Exam",
            src: "https://www.youtube.com/embed/ozAUc8rF450?si=RPZKBtUDl0pMjsIK",
          },
          {
            id: 7,
            title:
              "Goethe Zertifikat A1 SPRECHEN | How to pass the oral part. | German A1",
            src: "https://www.youtube.com/embed/SwDaZZ_PKvU?si=J916NRSMh2OCLMic",
          },
          {
            id: 8,
            title:
              "The truth about learning German from A1 to B1: How long does it really take?",
            src: "https://www.youtube.com/embed/agL2ULfTWUs?si=zVsP5dDDbOa7e21r",
          },
        ],
      },
    ],
  },
  {
    language: "bengali",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 0,
            title: "Learn Bengali Speaking Through English ",
            src: "https://www.youtube.com/embed/3nl9oi4jWWI?si=2tOUel6vMbAHTBrz",
          },
          {
            id: 1,
            title: "Learn Bengali Speaking Through English",
            src: "https://www.youtube.com/embed/QIYsqo8DzWw?si=LcUElJAWiHMqOZbx",
          },
          {
            id: 2,
            title: "Learn Bengali Speaking Through English",
            src: "https://www.youtube.com/embed/LeP6ekBGV9M?si=0KVh9ZwH96hKPwts",
          },
          {
            id: 3,
            title: "Bengali Vegetables Names in English",
            src: "https://www.youtube.com/embed/DuVMkYD_WnM?si=p3zFVTFNOD0J_IqC",
          },
          {
            id: 4,
            title: "Learn Bengali Colors Name in English For Beginners",
            src: "https://www.youtube.com/embed/RAICMTI8y-U?si=ybrubBcrKjReUB7O",
          },
          {
            id: 5,
            title:
              "Learn Bengali Family Relationships Words in English For Beginners",
            src: "https://www.youtube.com/embed/dsyT7d8NCnE?si=CoE5qd7kRpvb5zch",
          },
          {
            id: 6,
            title:
              "Learn Bengali Animals Name in English By RASELraju Institute",
            src: "https://www.youtube.com/embed/clx2-q1lQwk?si=kNXmy0AUi4IB17u-",
          },
          {
            id: 7,
            title:
              "Learn Bengali Time Day Week Month Year Words Through English !!",
            src: "https://www.youtube.com/embed/mC86R2BGEAU?si=DyLhjA4qvoVr4oGg",
          },
          {
            id: 8,
            title: "Learn Bengali Frequently Used WH Question Words In English",
            src: "https://www.youtube.com/embed/f2eQxlZZQ60?si=VZna1rGG_FekkAEk",
          },
          {
            id: 9,
            title:
              "Learn Bengali List Of Professions Through English [Only For Beginner]",
            src: "https://www.youtube.com/embed/UnIiGSw5jDc?si=uJOgDU97NhkXzlsX",
          },
          {
            id: 10,
            title:
              "Learn Bengali Nature Related Words In English For Beginners",
            src: "https://www.youtube.com/embed/y1V76ih6GSI?si=Da9_Dp9UAToaAxEP",
          },
          {
            id: 11,
            title: "Learn Bengali Number 1 to 25 In English For Beginners",
            src: "https://www.youtube.com/embed/t9toPNrBTGE?si=142blrfN1UnJgRCE",
          },
          {
            id: 12,
            title: "Learn Bengali Number 26 to 50 In English For Beginners",
            src: "https://www.youtube.com/embed/Nm69RxA-gPs?si=CeguEzQNGhpMOLKq",
          },
          {
            id: 13,
            title: "Learn Bengali Number 51 to 75 In English For Beginners",
            src: "https://www.youtube.com/embed/ViyzG6Am6Jg?si=3OetAp--aJFzd_Do",
          },
          {
            id: 14,
            title: "Learn Bengali Number 76 to 100 In English For Beginners",
            src: "https://www.youtube.com/embed/0ainhOAOVok?si=gYJaHkmWwft74FSD",
          },
          {
            id: 15,
            title:
              "Learn Bengali Number Hundred, Thousands, Lakh, Crore In English",
            src: "https://www.youtube.com/embed/KyhA_wYh19w?si=_lK9ENGO8zw2q9Gm",
          },
          {
            id: 16,
            title:
              "Learn Some Frequently Used Bengali Words in English Part -1",
            src: "https://www.youtube.com/embed/kBaM0rfV6Os?si=-00KPg6gfnN4Ph98",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 0,
            title: "Learn Bengali Frequently Used Expression Words In English",
            src: "https://www.youtube.com/embed/t8pD8r3JgSo?si=zNfJcbpLoaYHxq8K",
          },
          {
            id: 1,
            title:
              "Learn Bengali Some Frequently Used Sentences in English | Part 01 |",
            src: "https://www.youtube.com/embed/9XAdGS_VsnI?si=d2RReFOn6Ezn_q7A",
          },
          {
            id: 2,
            title:
              "Learn Bengali Some Frequently Used Sentences in English|Part 02",
            src: "https://www.youtube.com/embed/wgLdn2rV0hs?si=nosjtEFUJ7NGyTNO",
          },
          {
            id: 3,
            title: "Learn Bengali Frequently Used Verbs in English - Part 01",
            src: "https://www.youtube.com/embed/KhjzMIb2xm4?si=8u7OS4-Qrkw9wc7V",
          },
          {
            id: 4,
            title: "Learn Bengali Frequently Used Verbs in English - Part 02",
            src: "https://www.youtube.com/embed/cWJT55p0nGc?si=WuJDmkjttT6e41G_",
          },
          {
            id: 5,
            title:
              "Learn Bengali Basic Verb Base Sentence Making Learning From English",
            src: "https://www.youtube.com/embed/Wg6MAGBN7Uc?si=15a0QsMue-69JFFq",
          },
          {
            id: 6,
            title:
              "To Be Verb Base Sentence Making - Learn Bengali Through English",
            src: "https://www.youtube.com/embed/rktC9BFmfTE?si=pV3gv1dxpIZxwOoA",
          },
          {
            id: 7,
            title:
              "Learn Bengali Basic Verb Base Negative Sentence Making From English",
            src: "https://www.youtube.com/embed/yGsyYM7ph94?si=FWEu0obtTxd-kLho",
          },
          {
            id: 8,
            title:
              "Learn Bengali To Be Verb Base Negative Sentence Making Through English",
            src: "https://www.youtube.com/embed/ep_615_m18E?si=GNAdd_8DrCmwy5ii",
          },
          {
            id: 9,
            title:
              "Learn Bengali Basic Question Making Ideas of Verb Base Sentences",
            src: "https://www.youtube.com/embed/f5isXAvKX6k?si=3buEKY6xlSHniJ_x",
          },
          {
            id: 10,
            title:
              "Learn Bengali Basic Question Making Ideas of To Be Verb Sentences",
            src: "https://www.youtube.com/embed/q9mn41uYuQc?si=8EsXk6H1QlbLprZy",
          },
          {
            id: 11,
            title:
              "Learn Bengali Frequently Used Questions Sentences In English",
            src: "https://www.youtube.com/embed/xCeeK5D6vQs?si=0fQCPMfXkvCrWI8z",
          },
          {
            id: 12,
            title: "Learn Bengali: Verb Tense Through English (1st person)",
            src: "https://www.youtube.com/embed/dOWYvGDWwvw?si=s-5SpSk8miVLwjCG",
          },
          {
            id: 13,
            title: "Learn Bengali: Verb Tense From English (2nd person)",
            src: "https://www.youtube.com/embed/rPZnIXZhPHM?si=-9g5j4Xkqr_lRUo-",
          },
          {
            id: 14,
            title: "Learn Bengali: Verb Tense In English (3rd person)",
            src: "https://www.youtube.com/embed/xX5h2dk8Na0?si=_UPz1Ra0xKKGbLdV",
          },
          {
            id: 15,
            title:
              "Learn Bengali Frequently Used Survival Phrases Through English",
            src: "https://www.youtube.com/embed/gtDeGrTArRs?si=T3KGOXEHWzCZ0Q0Y",
          },
          {
            id: 16,
            title:
              "Learn Bengali Frequently Used adjectives Through English P-1",
            src: "https://www.youtube.com/embed/RJ6fqqiDm2M?si=-zsxsDb6cwBVEFME",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 0,
            title:
              "Learn Bengali Frequently Used Adjectives Through English P-2",
            src: "https://www.youtube.com/embed/jUgXkYVhuyE?si=2ZTcvjiQHI-_N-tu",
          },
          {
            id: 1,
            title: "Learn Bengali: To Be Verb Tense (With Examples)",
            src: "https://www.youtube.com/embed/ejuHFZ1xc50?si=iuvqqQQorMBBDefq",
          },
          {
            id: 2,
            title: "Learn Bengali: Human Body Parts Name in Bangla (Full Body)",
            src: "https://www.youtube.com/embed/ajGk-26WApM?si=tX4tAkC6zCZR1eEf",
          },
          {
            id: 3,
            title: "Learn Bengali: Frequently Used Adjective Words(Part-03)",
            src: "https://www.youtube.com/embed/id6WBUmSZTE?si=g3vztb7NEgAKXkwK",
          },
          {
            id: 4,
            title:
              "Learn Bengali: Frequently Used Adjective Sentences (With Examples)",
            src: "https://www.youtube.com/embed/tGrm_MavT9Q?si=zZqc2o7AX0KD8Jaq",
          },
          {
            id: 5,
            title:
              "Learn Use of Can in Bengali Through English (With Examples)",
            src: "https://www.youtube.com/embed/ejk7MEJ6lAk?si=6WBergXj2vZcwbzl",
          },
          {
            id: 6,
            title:
              "Learn Bengali Conversation: First Talk with People Through English",
            src: "https://www.youtube.com/embed/ZCiO10BpcM0?si=rBAg5dYJUgl4iFWz",
          },
          {
            id: 7,
            title:
              "Learn Bengali: Use of Have Has and Had (With Many Examples)",
            src: "https://www.youtube.com/embed/trQKRugXoJE?si=kZWTPhZ1WMWpCP6R",
          },
          {
            id: 8,
            title:
              "Learn Bengali Love Related Conversations(Practical Examples)",
            src: "https://www.youtube.com/embed/TxxyQTl6DUg?si=eFSseQAPTaqn2f3K",
          },
          {
            id: 9,
            title: "Learn Bengali: 36 Easy Food Related Sentences In English",
            src: "https://www.youtube.com/embed/vdTmaG6_fik?si=8LaCiNZ8qBmnamFA",
          },
          {
            id: 10,
            title: "Learn Bengali Frequently Used Sports Related Conversations",
            src: "https://www.youtube.com/embed/l_aV2olcuJ8?si=ec6u_U4fczvGD-qd",
          },
          {
            id: 11,
            title:
              "Learn Bengali Frequently Used Invitation Related Conversation",
            src: "https://www.youtube.com/embed/zj0HNwzITZw?si=Js236KQwbWUWXCJj",
          },
          {
            id: 12,
            title: "Learn Bengali Sentences: About Indoor of Home In English",
            src: "https://www.youtube.com/embed/36BC7wiV_Tw?si=7R7x9W3GofpaTw54",
          },
          {
            id: 13,
            title:
              "How To Converse With Patient - Learn Bengali through English",
            src: "https://www.youtube.com/embed/VU73vTbwtKw?si=7EYSgXeGPNZDFP1i",
          },
          {
            id: 14,
            title: "Learn Bengali Gratitude Related Sentences Through English",
            src: "https://www.youtube.com/embed/pogo5P1SQ1E?si=havqzogbEIYg_kuJ",
          },
          {
            id: 15,
            title:
              "Learn Bengali Commanding Related Short Sentences In English",
            src: "https://www.youtube.com/embed/-KcS7P8gKIY?si=EXPa2TyRx1XBdRYq",
          },
          {
            id: 16,
            title: "Learn Bengali Frequently Used Questions and Answers",
            src: "https://www.youtube.com/embed/sKA2_qpNOPY?si=Db4IZzt-pKCJZXH9",
          },
          {
            id: 17,
            title: "Learn Bengali Questions And Answers About Borrowing Money",
            src: "https://www.youtube.com/embed/jeaJEp6JJZU?si=i3YEYrsAWxAPgIYh",
          },
        ],
      },
    ],
  },
  {
    language: "chinese",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 0,
            title:
              "Learn Chinese for Beginners Self-Introduction in Chinese Mandarin 1.1",
            src: "https://www.youtube.com/embed/McZW0iDsZns?si=S4UT70q5eQdCuq12",
          },
          {
            id: 1,
            title: "Learn Chinese Characters for Beginners 1.2",
            src: "https://www.youtube.com/embed/McZW0iDsZns?si=m2gu7CMhX0NMow3W",
          },
          {
            id: 2,
            title: "What Is Your Name in Chinese. Ask Name in Chinese 2.1",
            src: "https://www.youtube.com/embed/cxhs1Bfq93w?si=JiOkqSJaPLJ-wQHk",
          },
          {
            id: 3,
            title: "Beginner Chinese Characters Course 2.2",
            src: "https://www.youtube.com/embed/uJiMusltlVA?si=MckXvCiIlJtw0dUt",
          },
          {
            id: 4,
            title: "Country Names in Chinese 3.1",
            src: "https://www.youtube.com/embed/9Eth2OctZ9I?si=S3zAbJRAx2SU3AiB",
          },
          {
            id: 5,
            title: "Basic Chinese Characters Course 3.2",
            src: "https://www.youtube.com/embed/8r5bdKhcnus?si=EgD01thW2xZA-4CT",
          },
          {
            id: 6,
            title: "Chinese Numbers 1 to 10, 1 to 20 and 1 to 100 4.1",
            src: "https://www.youtube.com/embed/Vwg7FjkghHc?si=qnNO2mNS7-m4ck67",
          },
          {
            id: 7,
            title: "How to Write Chinese Numbers 1-10, 1-20 and 1-100 4.2",
            src: "https://www.youtube.com/embed/JVsqEcpNHMY?si=aafwFIqFW3iNpP1k",
          },
          {
            id: 8,
            title:
              "Learn Chinese for Beginners: How Old Are You in Chinese 5.1",
            src: "https://www.youtube.com/embed/36toRDvepXg?si=V0F8kjmq6Hv0pN1A",
          },
          {
            id: 9,
            title: "Beginner Chinese Characters Course 5.2",
            src: "https://www.youtube.com/embed/pqwbGuZJIZI?si=5d33Z3h31ZUCyEc2",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 1,
            title: "Learn Chinese Conversation for Beginners A1",
            src: "https://www.youtube.com/embed/4DzM6XW1Cb4?si=OH3--gw8eRs_UHRk",
          },
          {
            id: 2,
            title: "Learn Chinese Conversation for Beginners A2",
            src: "https://www.youtube.com/embed/fRebCu93ZkI?si=OjZa21TaPFhF42AX",
          },
          {
            id: 3,
            title: "Learn Chinese Conversation for Beginners A3",
            src: "https://www.youtube.com/embed/DYtF3oZRspU?si=bgIMdOONvy4xZxrR",
          },
          {
            id: 4,
            title: "Learn Chinese Conversation for Beginners A4",
            src: "https://www.youtube.com/embed/qmc7STGnZQo?si=m6KHddjx0W-enZkO",
          },
          {
            id: 5,
            title: "Learn Chinese Conversation for Beginners A5",
            src: "https://www.youtube.com/embed/T7ToV5FTbeA?si=qduMX7hdnvvUG3lR",
          },
          {
            id: 6,
            title: "Learn Chinese Conversation for Beginners A6",
            src: "https://www.youtube.com/embed/IoYY7JFKUxU?si=BA-LB_ARRI3OGjz6",
          },
          {
            id: 7,
            title: "Learn Chinese Conversation for Beginners A7",
            src: "https://www.youtube.com/embed/Yodn_e94b0M?si=-j-lXbfumRaL-PP-",
          },
          {
            id: 8,
            title: "Learn Chinese Conversation for Beginners A8",
            src: "https://www.youtube.com/embed/TxIL2KJnoSc?si=GHEEArI1JEQFLRc_",
          },
          {
            id: 9,
            title: "Learn Chinese Conversation for Beginners A9",
            src: "https://www.youtube.com/embed/GpAchk2gtI0?si=vBr_uxIpaCGyB8_i",
          },
          {
            id: 10,
            title: "Learn Chinese Conversation for Beginners A10",
            src: "https://www.youtube.com/embed/fhTDRJfIMWo?si=UdW2TlAz-29ncSl0",
          },
          {
            id: 11,
            title: "Learn Chinese Conversation for Beginners A11",
            src: "https://www.youtube.com/embed/b6bZphDn6nM?si=cePGG9fCdg-zNSQu",
          },
          {
            id: 12,
            title: "Learn Chinese Conversation for Beginners A12",
            src: "https://www.youtube.com/embed/46NI6oKo9e0?si=rvd-76SXKtiXFfpo",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 1,
            title: "Chinese Speaking Practice Lesson 6.1",
            src: "https://www.youtube.com/embed/Myb8WMYK7uk?si=lCefjPOwRgvz77S6",
          },
          {
            id: 2,
            title: "Chinese Speaking Practice Lesson 7.1",
            src: "https://www.youtube.com/embed/Px9Gi9ebgDU?si=vn8uixn8WBZ06cPF",
          },
          {
            id: 3,
            title: "Chinese Speaking Practice: Question Who in Chinese 8.1",
            src: "https://www.youtube.com/embed/X-mAil8A02g?si=tA0IEkW4FRbpMypS",
          },
          {
            id: 4,
            title: "Chinese Lesson Negative Not in Chinese 不 Bù 9.1",
            src: "https://www.youtube.com/embed/rZ3jQhb0ADE?si=OwTMo7DxKoSbaqDH",
          },
          {
            id: 5,
            title: "Chinese Lesson Basic Greetings in Mandarin Chinese 10.1",
            src: "https://www.youtube.com/embed/N443C6HwE7g?si=WNiBJlWy5gxHA9n5",
          },
          {
            id: 6,
            title: "Chinese Lesson Useful Daily Phrases in Chinese 11.1",
            src: "https://www.youtube.com/embed/SdWHk77H6zA?si=Khh4kJDbxeH5itCB",
          },
          {
            id: 7,
            title: "Chinese Lesson Date in Chinese, Year Month & Day 12.1",
            src: "https://www.youtube.com/embed/5Ly4aFtltaY?si=lO3Mc2fMRL1E6GzM",
          },
          {
            id: 8,
            title: "Chinese Lesson Tell Time in Chinese, Read Clock 13.1",
            src: "https://www.youtube.com/embed/3K3Wo1nBR5c?si=w8hL7PSMU8OjckP9",
          },
          {
            id: 9,
            title: "Chinese Lesson Days of the Week in Chinese 14.1",
            src: "https://www.youtube.com/embed/QVOB45n1BIE?si=H-1jKOldAWc3CVNA",
          },
          {
            id: 10,
            title: "Learn Mandarin Chinese 115 Words 15.1",
            src: "https://www.youtube.com/embed/7B-NxkSFGSM?si=ZCYi_R16XtMkQ9nQ",
          },
        ],
      },
    ],
  },
  {
    language: "spanish",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 0,
            title: "Spanish Numbers 1-20",
            src: "https://www.youtube.com/embed/Ni-YnsF72AY?si=4chSNgkgnuIVMALT",
          },
          {
            id: 1,
            title: "Spanish Words for Beginners",
            src: "https://www.youtube.com/embed/SSjmWPgpphI?si=an7e6Azjx_xB8tqz",
          },
          {
            id: 2,
            title: "70 Basic Spanish Phrases To Know",
            src: "https://www.youtube.com/embed/DAp_v7EH9AA?si=xsAY6MW23RImpHXS",
          },
          {
            id: 3,
            title: "Spanish Family Words",
            src: "https://www.youtube.com/embed/bK4EBWp3suk?si=6o-o1zBKhXgIObF3",
          },
          {
            id: 4,
            title: "Basic Spanish Phrases",
            src: "https://www.youtube.com/embed/4ehG-7v21NQ?si=2lAMS1HLZvk7qLeN",
          },
          {
            id: 5,
            title: "Spanish Words for Kitchen Items",
            src: "https://www.youtube.com/embed/zqbwd3natNA?si=bJ39rDGGSU8jOh7z",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 0,
            title: "Spanish Days, Months, and Seasons",
            src: "https://www.youtube.com/embed/tP3HjcaqAlM?si=I-JinrjMPNd4XDqV",
          },
          {
            id: 1,
            title: "Basic Spanish for the Supermarket",
            src: "https://www.youtube.com/embed/NNt_O6slObg?si=veLCO8XEfCHVAs25",
          },
          {
            id: 2,
            title: "Count in Spanish to 100",
            src: "https://www.youtube.com/embed/a2xGsvoW7Wk?si=w544nrIBpngybeIl",
          },
          {
            id: 3,
            title: "Learn Spanish for Doctors and Nurses",
            src: "https://www.youtube.com/embed/6cQPHAPROnY?si=2sZRndjVbv1WrvHN",
          },
          {
            id: 4,
            title: "Spanish Phrases for the Bank",
            src: "https://www.youtube.com/embed/IFxh457QpY0?si=8sTEfrVSwdez_Wuf",
          },
          {
            id: 5,
            title: "Spanish for Car Trouble",
            src: "https://www.youtube.com/embed/lW7eXJMhhLA?si=XztQOdFTC8F_FJD4",
          },
          {
            id: 6,
            title: "Spanish Phrases for the Train",
            src: "https://www.youtube.com/embed/m9G8ev8poBg?si=XcpohPPIVvn5qZEI",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 0,
            title: "Spanish Airport Conversation",
            src: "https://www.youtube.com/embed/GnIPTU7vdII?si=2GE7px-FsyS8ZU1T",
          },
          {
            id: 1,
            title: "Spanish Hotel Conversation: Part 1",
            src: "https://www.youtube.com/embed/4YubBx_Dh04?si=q68jGM_POYvdwjpp",
          },
          {
            id: 2,
            title: "Spanish Hotel Conversation: Part 2",
            src: "https://www.youtube.com/embed/s3FSbN3Hg9Y?si=WF9jypF2C-CzJAd1",
          },
          {
            id: 3,
            title: "Spanish Numbers 1-100",
            src: "https://www.youtube.com/embed/XySuxG_Lq30?si=XoDwtZNcVwP5Yirb",
          },
          {
            id: 4,
            title: "100 Easy Words in Spanish",
            src: "https://www.youtube.com/embed/0FigTJ-4g48?si=Dv5rmiO9i9STbvDL",
          },
          {
            id: 5,
            title: "100 Spanish Phrases",
            src: "https://www.youtube.com/embed/l5jtYVF-2SM?si=-KXzpvF4KqWpXjL7",
          },
          {
            id: 6,
            title: "Spain vs. Colombia vs. Mexico vs. Argentina",
            src: "https://www.youtube.com/embed/EZE4LrT-JD8?si=fqPk1Cs3s7KLqvrv",
          },
        ],
      },
    ],
  },
  {
    language: "japanese",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 1,
            title: "Introduction - Japanese Lesson 1",
            src: "https://www.youtube.com/embed/rGrBHiuPlT0?si=_wAhcGcx8iJMjDIV",
          },
          {
            id: 2,
            title: "How to count in Japanese Lesson 2",
            src: "https://www.youtube.com/embed/bOUqVC4XkOY?si=RIzAmtpqxNSWyA3f",
          },
          {
            id: 3,
            title: "Days of the Week and Days of the Month - Japanese Lesson 3",
            src: "https://www.youtube.com/embed/JnoZE51WZg4?si=Kny1sdDuqhX952kr",
          },
          {
            id: 4,
            title: "Going to a Destination - Japanese Lesson 4",
            src: "https://www.youtube.com/embed/k74yjmfFb_A?si=D416pqmjBTBvibSp",
          },
          {
            id: 5,
            title:
              "4 Verbs (Nomimasu, Tabemasu, Mimasu, Kikimasu) - Japanese Lesson 5",
            src: "https://www.youtube.com/embed/KUIWRsVZZZA?si=ApIFwsx8eITinePc",
          },
          {
            id: 6,
            title: "To do (verb) - Japanese Lesson 6",
            src: "https://www.youtube.com/embed/ZGGufccTLso?si=_2c999_ZEg3Vn2cJ",
          },
          {
            id: 7,
            title: "To give & To Receive - Japanese Lesson 7",
            src: "https://www.youtube.com/embed/W0n-ODPwtzA?si=4zhotvsN5vQB0Y9P",
          },
          {
            id: 8,
            title: "Family Members - Japanese Lesson 8",
            src: "https://www.youtube.com/embed/W0n-ODPwtzA?si=0Y7vTH_gGqqoWlb7",
          },
        ],
      },

      {
        level: "intermediate-level",
        videosList: [
          {
            id: 1,
            title: "Telling Time - Japanese Lesson 9",
            src: "https://www.youtube.com/embed/Pc86Xg2MX-U?si=INjOlD_ictSddSt_",
          },
          {
            id: 2,
            title: "Japanese Language Lesson 10 - Particles",
            src: "https://www.youtube.com/embed/Lo5_5k7EPIM?si=zpbHjZl4GrgxYNLf",
          },
          {
            id: 3,
            title: "Japanese Language Lesson 11 - Interrogatives and Counters",
            src: "https://www.youtube.com/embed/hiLQLGDMOEA?si=jF0whab6b3R5e59x",
          },
          {
            id: 4,
            title: "Japanese Language Lesson 12 - Interrogatives",
            src: "https://www.youtube.com/embed/LO9F6pSVDv0?si=ypM30BycZ1aHII-X",
          },
          {
            id: 5,
            title: "Japanese Language Lesson 13 - Locations",
            src: "https://www.youtube.com/embed/rFRJes0ic8Y?si=gGyjJ22bIVulK19P",
          },
          {
            id: 6,
            title:
              "Japanese Language Lesson 14 - To like, To understand, To be good at",
            src: "https://www.youtube.com/embed/M9BuT65uNIA?si=DDEvufg6zkOK3aRV",
          },
          {
            id: 7,
            title: "Japanese Language Lesson 15 - Adjectives",
            src: "https://www.youtube.com/embed/2fx37sug4Oo?si=uT0X0vQWE7RpCoUc",
          },
          {
            id: 8,
            title: "Japanese Language Lesson 16 - Invitations",
            src: "https://www.youtube.com/embed/6ABKZ8e0nGc?si=ncZep6E5RLCmqdoA",
          },
        ],
      },

      {
        level: "expert-level",
        videosList: [
          {
            id: 0,
            title: "Japanese Language Lesson 17 - Te form conjugation",
            src: "https://www.youtube.com/embed/T3hC03n_qWU?si=aXB-Yfcvbt5WEpH8",
          },
          {
            id: 1,
            title: "Japanese Language Lesson 18 - Te-form: Sentence Connection",
            src: "https://www.youtube.com/embed/T3hC03n_qWU?si=pASWXgHfn8MuWgzW",
          },
          {
            id: 2,
            title: "Japanese Language Lesson 19 - Te-form: Te Kudasai",
            src: "https://www.youtube.com/embed/NBumXxwBBMo?si=Jw24lq7SKsHgwEA2",
          },
          {
            id: 3,
            title: "Japanese Language Lesson 20 - Te-form: Te mo ii desu ka",
            src: "https://www.youtube.com/embed/jhByyxdNaZU?si=PZWgf-bfQSyP4QIV",
          },
          {
            id: 4,
            title: "Japanese Lesson 21: Te-Imasu",
            src: "https://www.youtube.com/embed/vWUFZ4Z2F4c?si=jIYTreu-O3l-4D0g",
          },
          {
            id: 5,
            title: "Japanese Lesson 22: Nai-Form",
            src: "https://www.youtube.com/embed/Y0QQm_VhMRM?si=8uMtPvBDJqRpQpon",
          },
          {
            id: 6,
            title: "Japanese Lesson 23: Nai-de Kudasai",
            src: "https://www.youtube.com/embed/nOrJZOFf-u8?si=_dymDLIcX2dHgz5h",
          },
          {
            id: 7,
            title: "Japanese Lesson 24: Nakereba Narimasen",
            src: "https://www.youtube.com/embed/9no4B8OaqGA?si=pqzFBw7dc-KeifvY",
          },
        ],
      },
    ],
  },

  {
    language: "arabic",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 0,
            title: "Arabic Speaking Course Episode 01",
            src: "https://www.youtube.com/embed/1w1zfcuH6ss?si=PNNwLTv04kaOtWoc",
          },
          {
            id: 1,
            title: "Arabic Speaking Course Episode 02",
            src: "https://www.youtube.com/embed/0tz3iixIobY?si=wFwlbFdFiyEKZ_x_",
          },
          {
            id: 2,
            title: "Arabic Speaking Course Episode 03",
            src: "https://www.youtube.com/embed/Xu58NuowoUs?si=ShCPdIDySpqY2EXj",
          },
          {
            id: 3,
            title: "Arabic Speaking Course Episode 04",
            src: "https://www.youtube.com/embed/y9jSfZwo2U8?si=tzQOtdh1Vz5iu1k0",
          },
          {
            id: 4,
            title: "Arabic Speaking Course Episode 05",
            src: "https://www.youtube.com/embed/8V6sDPZAAE4?si=SFKQoBXy6pwV-l0A",
          },
          {
            id: 5,
            title: "Arabic Speaking Course Episode 06",
            src: "https://www.youtube.com/embed/SAnEk78ZvyI?si=jKH-C3-E90XX2D-x",
          },
          {
            id: 6,
            title: "Arabic Speaking Course Episode 07",
            src: "https://www.youtube.com/embed/cIh3Rq991zQ?si=iyCNH-luasSFclH8",
          },
          {
            id: 7,
            title: "Arabic Speaking Course Episode 08",
            src: "https://www.youtube.com/embed/o-NkXxgU54s?si=qHmC91x_OacMhnKW",
          },
          {
            id: 8,
            title: "Arabic Speaking Course Episode 09",
            src: "https://www.youtube.com/embed/nJrDQuc7C-g?si=XwPRL5H5zTChUOLF",
          },
          {
            id: 9,
            title: "Arabic Speaking Course Episode 10",
            src: "https://www.youtube.com/embed/mkKCg0VVXlc?si=IEdl-3k3D4Oi3qgu",
          },
          {
            id: 10,
            title: "Arabic Speaking Course Episode 11",
            src: "https://www.youtube.com/embed/gYgZ29cSDE8?si=EEt2KLQuBEE6G_u8",
          },
          {
            id: 11,
            title: "Arabic Speaking Course Episode 12",
            src: "https://www.youtube.com/embed/XG3n71oYDr0?si=OfTS-n59WDjtxsRC",
          },
          {
            id: 12,
            title: "Arabic Speaking Course Episode 13",
            src: "https://www.youtube.com/embed/BvDdxqfLpXA?si=6o6zoDgaOFdOs_j4",
          },
          {
            id: 13,
            title: "Arabic Speaking Course Episode 14",
            src: "https://www.youtube.com/embed/MCSMclUCVDA?si=z_4fv5VxtKGQN9H6",
          },
          {
            id: 14,
            title: "Arabic Speaking Course Episode 15",
            src: "https://www.youtube.com/embed/R_Sk3_cDXHM?si=VAUzoAoS52AvwpNv",
          },
          {
            id: 15,
            title: "Arabic Speaking Course Episode 16",
            src: "https://www.youtube.com/embed/NOBKPwgdXcY?si=i8gDNhqfseOjdusM",
          },
          {
            id: 16,
            title: "Arabic Speaking Course Episode 17",
            src: "https://www.youtube.com/embed/vRRw1TOcAuY?si=ePXUsyuGV9YDkQ5z",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 0,
            title: "Arabic Speaking Course Episode 18",
            src: "https://www.youtube.com/embed/FkfHrck6LMY?si=pm_MGG2LN-wQ84ps",
          },
          {
            id: 1,
            title: "Arabic Speaking Course Episode 19",
            src: "https://www.youtube.com/embed/X4O8HYTn90Y?si=Z4CtytU5ZJfKJKcO",
          },
          {
            id: 2,
            title: "Arabic Speaking Course Episode 20",
            src: "https://www.youtube.com/embed/n2eipsFF11o?si=jpyPo3wQgxV5RkuR",
          },
          {
            id: 3,
            title: "Arabic Speaking Course Episode 21",
            src: "https://www.youtube.com/embed/QZMAXTsU1S8?si=Kh0GAejsfLy28x8l",
          },
          {
            id: 4,
            title: "Arabic Speaking Course Episode 22",
            src: "https://www.youtube.com/embed/umwLkgQdTmM?si=m0FEksXqx1r7GQSB",
          },
          {
            id: 5,
            title: "Arabic Speaking Course Episode 23",
            src: "https://www.youtube.com/embed/wHPhopDWA4I?si=YaOPfvM6xPqMfit9",
          },
          {
            id: 6,
            title: "Arabic Speaking Course Episode 24",
            src: "https://www.youtube.com/embed/am10b-Xbvdw?si=X-AXE97-RS5yU1sw",
          },
          {
            id: 7,
            title: "Arabic Speaking Course Episode 25",
            src: "https://www.youtube.com/embed/5P0Vdykn188?si=3W6Ppk90g62_nq2u",
          },
          {
            id: 8,
            title: "Arabic Speaking Course Episode 26",
            src: "https://www.youtube.com/embed/C5_VfzRhKQI?si=7e4hcy26AJTNZJzx",
          },
          {
            id: 9,
            title: "Arabic Speaking Course Episode 27",
            src: "https://www.youtube.com/embed/w--ZdKf8FOs?si=Pp2mY0Fs6J6LLoGR",
          },
          {
            id: 10,
            title: "Arabic Speaking Course Episode 28",
            src: "https://www.youtube.com/embed/e5N9UC9vpM?si=yUOLo3Dr0pEN4_N",
          },
          {
            id: 11,
            title: "Arabic Speaking Course Episode 29",
            src: "https://www.youtube.com/embed/gyzXWRXDp4E?si=LjGbr0Dpq5Hv2GMR",
          },
          {
            id: 12,
            title: "Arabic Speaking Course Episode 30",
            src: "https://www.youtube.com/embed/LNIWIAcqJNM?si=8MVci-xpnBSItcx1",
          },
          {
            id: 13,
            title: "Arabic Speaking Course Episode 31",
            src: "https://www.youtube.com/embed/W76jp7H07Jc?si=y0So-J7RIL7lEe2z",
          },
          {
            id: 14,
            title: "Arabic Speaking Course Episode 32",
            src: "https://www.youtube.com/embed/MFSirFmQz64?si=6jW7p0I_VywcqfAF",
          },
          {
            id: 15,
            title: "Arabic Speaking Course Episode 33",
            src: "https://www.youtube.com/embed/3YEtS22aP9Y?si=-teSYiO072hrRIxE",
          },
          {
            id: 16,
            title: "Arabic Speaking Course Episode 34",
            src: "https://www.youtube.com/embed/cNHY7Y3W4CI?si=58-vc9MLzvKTkY83",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 0,
            title: "Arabic Speaking Course Episode 35",
            src: "https://www.youtube.com/embed/BjiG04PFi6o?si=dWNvKXzg0Kb7Wpsz",
          },
          {
            id: 1,
            title: "Arabic Speaking Course Episode 36",
            src: "https://www.youtube.com/embed/ZU1ek3cRCtA?si=i2bTrvA9cyXsu4O9",
          },
          {
            id: 2,
            title: "Arabic Speaking Course Episode 37",
            src: "https://www.youtube.com/embed/1bBjskxy-m8?si=BIqQe4yrOEI0MDaa",
          },
          {
            id: 3,
            title: "Arabic Speaking Course Episode 38",
            src: "https://www.youtube.com/embed/Cga2_XFWsuc?si=ts2qaJzhjctwhbE",
          },
          {
            id: 4,
            title: "Arabic Speaking Course Episode 39",
            src: "https://www.youtube.com/embed/NYK22Utwlhg?si=_KVPA-bwCC3YUE-3",
          },
          {
            id: 5,
            title: "Arabic Speaking Course Episode 40",
            src: "https://www.youtube.com/embed/zpWQdETEHac?si=NQItO38ocfvNQy40",
          },
          {
            id: 6,
            title: "Arabic Speaking Course Episode 41",
            src: "https://www.youtube.com/embed/ThygfQoidx0?si=rP7Wh5kHQd3CwDXJ",
          },
          {
            id: 7,
            title: "Arabic Speaking Course Episode 42",
            src: "https://www.youtube.com/embed/vPsR6e88XHo?si=ah-eyHRO3HzPNZk5",
          },
          {
            id: 8,
            title: "Arabic Speaking Course Episode 43",
            src: "https://www.youtube.com/embed/qMfiDjQbg7I?si=e5qGLQ8nrBirnljB",
          },
          {
            id: 9,
            title: "Arabic Speaking Course Episode 44",
            src: "https://www.youtube.com/embed/gOrb7YY-1AM?si=sPY5IuKLU0-6sXp1",
          },
          {
            id: 10,
            title: "Arabic Speaking Course Episode 45",
            src: "https://www.youtube.com/embed/4WzxoEVfpz8?si=p_8TWpjCkblCZIEB",
          },
          {
            id: 11,
            title: "Arabic Speaking Course Episode 46",
            src: "https://www.youtube.com/embed/6sbALmHeCT0?si=MH5sDMos_ZJYwP_r",
          },
          {
            id: 12,
            title: "Arabic Speaking Course Episode 47",
            src: "https://www.youtube.com/embed/aMh6Xx4JSds?si=bPWlY3elRofZ1J0u",
          },
          {
            id: 13,
            title: "Arabic Speaking Course Episode 48",
            src: "https://www.youtube.com/embed/PYTHpUAGdTg?si=QZoKWoo4VCLqPikY",
          },
          {
            id: 14,
            title: "Arabic Speaking Course Episode 49",
            src: "https://www.youtube.com/embed/fdhCgu1Rs88?si=PtHVbz8FfdW-QF_p",
          },
        ],
      },
    ],
  },

  {
    language: "russian",
    levelsList: [
      {
        level: "beginner-level",
        videosList: [
          {
            id: 0,
            title: "How You Pronounce Russian Letters",
            src: "https://www.youtube.com/embed/_8LeYD8Zjyw?si=92sejJZm7SsxbhWa",
          },
          {
            id: 1,
            title:
              "Letters Ж, З, Х, Ц, Ч, Ш, Щ / Russian Alphabet Pronunciation",
            src: "https://www.youtube.com/embed/e1BtwBa1iR8?si=DcKUfMQ0j7xuqscU",
          },
          {
            id: 2,
            title:
              "How to Pronounce Letters Ы, Р, Й / Russian Alphabet Pronunciation",
            src: "https://www.youtube.com/embed/wHmPw0V38Tk?si=fmkqJtzrDjnqKwL6",
          },
          {
            id: 3,
            title:
              "RUSSIAN PRONUNCIATION basics: Vowels | Russian Alphabet / ABC",
            src: "https://www.youtube.com/embed/W4Hc6eQOt1o?si=9rBRPG3folibpk9R",
          },
          {
            id: 4,
            title:
              "RUSSIAN PRONUNCIATION: HARD vs SOFT Consonants | Palatalization",
            src: "https://www.youtube.com/embed/YrOFy4u7cyM?si=BkDVmUZuZJotQOKJ",
          },
          {
            id: 5,
            title:
              "RUSSIAN PRONUNCIATION basics, Exercise: HARD vs SOFT Consonants",
            src: "https://www.youtube.com/embed/4cSgPpqQ2Z8?si=z4zTI3_kSx6uD22f",
          },
          {
            id: 6,
            title: "RUSSIAN PRONUNCIATION basics: 3 Main READING Rules",
            src: "hhttps://www.youtube.com/embed/ot4CQFyOrHo?si=Vbb7JWW7UnvODDlL",
          },
          {
            id: 7,
            title:
              "WRITE RUSSIAN ALPHABET (Block Letters)  Is Cursive Necessary?",
            src: "https://www.youtube.com/embed/eGBfw_Ukx2g?si=pjDdixn1YV56PTXT",
          },
          {
            id: 8,
            title: "RUSSIAN PRONUNCIATION basics: MUST-KNOW Tips",
            src: "https://www.youtube.com/embed/PLjQyaIPmzs?si=r3nS5ckjEUZE8AsF",
          },
          {
            id: 9,
            title: "RUSSIAN SPEAKING basics: What to say to КАК ДЕЛА?",
            src: "https://www.youtube.com/embed/KQhREZkh8tQ?si=cUqgzqUDHkV_CTWN",
          },
          {
            id: 10,
            title:
              "ТЫ or ВЫ? HELLO  BYE SORRY CHEERS  DAVAI / ДАВАЙ in Russian",
            src: "https://www.youtube.com/embed/JNOx4fIS7IQ?si=DUToYHu7PUCh9o18",
          },
          {
            id: 11,
            title: "Your FIRST RUSSIAN PHRASES: Do You Speak English?",
            src: "https://www.youtube.com/embed/44dQAWmKyDs?si=fVJ__JX4kMDwietU",
          },
        ],
      },
      {
        level: "intermediate-level",
        videosList: [
          {
            id: 0,
            title:
              "Learn to CONJUGATE Russian VERBS  Present (w/ Personal Pronouns)",
            src: "https://www.youtube.com/embed/XPlJfgpZU6g?si=M5QA_vhfM1WboJHK",
          },
          {
            id: 1,
            title:
              "RUSSIAN SPEAKING basics exercise: Make First PHRASES w/ Verbs ",
            src: "https://www.youtube.com/embed/vF9RY-mXqiQ?si=d29U2oHzw7oKjbRU",
          },
          {
            id: 2,
            title: "RUSSIAN SPEAKING basics: Questions & Word Order",
            src: "https://www.youtube.com/embed/ucX6RDpQ0R8?si=3ATKEvKubBRyG65u",
          },
          {
            id: 3,
            title: "RUSSIAN SPEAKING basics: Common Verbs in Context",
            src: "https://www.youtube.com/embed/_RWEX51BUXc?si=3sFCGMaEorO7MrP-",
          },
          {
            id: 4,
            title: "10 Russian Phrases to Ask for HELP  Say THANK YOU",
            src: "https://www.youtube.com/embed/52OjDYjaqWY?si=ukxUA89yRYclVATS",
          },
          {
            id: 5,
            title: "10 Russian QUESTIONS w/ WHO? WHAT? WHEN? WHERE? WHY? HOW?",
            src: "https://www.youtube.com/embed/uPEaI5_TMGE?si=PY0eeq4L46y9C-cc",
          },
          {
            id: 6,
            title:
              " RUSSIAN SPEAKING basics: I'M BUSY / I'M READY / Call You Back!",
            src: "https://www.youtube.com/embed/3SIRGdkJpJg?si=Q6qcKTqFJ7bw2WjB",
          },
          {
            id: 7,
            title: "INTRODUCE YOURSELF in Russian  My Name  Nice to Meet You",
            src: "https://www.youtube.com/embed/MXR0EgeppwE?si=NELk5Op5DlffNJ6y",
          },
          {
            id: 8,
            title: "WRITE YOUR NAME IN RUSSIAN | Russian vs English Names",
            src: "https://www.youtube.com/embed/64tAjJOgsbc?si=_6E-35djsppAZXEQ",
          },
          {
            id: 9,
            title: "RUSSIAN NAMES  Are You Mispronouncing Them?",
            src: "https://www.youtube.com/embed/h_VZcajgF9U?si=XreE0oARkNdpL_0a",
          },
          {
            id: 10,
            title:
              " RUSSIAN SPEAKING basics: Where Are You From?  Where Do You Live?",
            src: "https://www.youtube.com/embed/Wy1_qzXC8r0?si=bP8Sf2JC-7UzlDRf",
          },
          {
            id: 11,
            title: "RUSSIAN SPEAKING basics: What Do You Do? JOBS Talk",
            src: "https://www.youtube.com/embed/o0p82c7OeOQ?si=JgPZna2ZClQuqMaa",
          },
        ],
      },
      {
        level: "expert-level",
        videosList: [
          {
            id: 0,
            title: "RUSSIAN VERBS: to BE in the Present Tense (Grammar Tips)",
            src: "https://www.youtube.com/embed/-0iAwl7Kgno?si=ecRNkeLPMglYR60a",
          },
          {
            id: 1,
            title:
              "What's the Difference Between: Учить・Учиться・Изучать・Заниматься?",
            src: "https://www.youtube.com/embed/PsIC6AgDsbs?si=re_bCiyPiCY11i41",
          },
          {
            id: 2,
            title:
              " RUSSIAN NUMBERS: Learn to Count From 0 to a Billion in Russian!",
            src: "https://www.youtube.com/embed/4EcXV_n4jsg?si=EzeWx96s7eMT0m5P",
          },
          {
            id: 3,
            title: "RUSSIAN SPEAKING basics: ГОД, ГОДА or ЛЕТ?",
            src: "https://www.youtube.com/embed/USPbbUwPTQo?si=NkcLBDUVEoQtjSSN",
          },
          {
            id: 4,
            title: "RUSSIAN SPEAKING basics: Why Are You Learning Russian?",
            src: "https://www.youtube.com/embed/XEjTY9pYB6k?si=ZQQDlWitJZIyeDGG",
          },
          {
            id: 5,
            title:
              "Hard Sign (Ъ) vs Soft Sign (b) | Russian Alphabet Pronunciation",
            src: "https://www.youtube.com/embed/76Zqi9to-yc?si=HjFPnayDVk_jjlHO",
          },
          {
            id: 6,
            title:
              "RUSSIAN PRONUNCIATION: Voiced/Voiceless Consonants (Assimilation)",
            src: "https://www.youtube.com/embed/imiXGhO-Kc0?si=tKVN_DanazsU9-TY",
          },
          {
            id: 7,
            title: "Я ТОЖЕ vs MHE ТОЖЕ  AND YOU? & ME TOO! in Russian",
            src: "https://www.youtube.com/embed/E16ukPmV2BA?si=1nHXQTrsg0wS3ntA",
          },
          {
            id: 8,
            title: "AND vs BUT in Russian: И・А・НО",
            src: "https://www.youtube.com/embed/bOi3mNbOhd4?si=ErQCugICrsaG9gHg",
          },
          {
            id: 9,
            title:
              "How to Say MERRY CHRISTMAS & Happy New Year in RUSSIAN Traditions | Toasts",
            src: "https://www.youtube.com/embed/Z4kSYXpXfNY?si=CFTy5LV5zEcWbmOt",
          },
          {
            id: 10,
            title:
              "10 Russian -АТЬ/-ЯТЬ VERBS in Context | Present Tense Conjugation",
            src: "https://www.youtube.com/embed/kR_G8an7OuQ?si=Iz2epG4ge-tqXLDW",
          },
          {
            id: 11,
            title:
              "RUSSIAN VERBS in context: ВИДЕТЬ & СЛЫШАТЬ | Present Tense Conjugation",
            src: "https://www.youtube.com/watch?v=QNkE6asOZd0&si=NIDGxgTipfA3SAMy",
          },
        ],
      },
    ],
  },
];

export const footerLinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Learn",
    url: "/languages-page",
  },
];
export const footerIcons = [
  {
    id: 1,

    url: "https://twitter.com",
    icon: <AiFillTwitterCircle />,
  },
  {
    id: 2,

    url: "https://www.instagram.com/",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    url: "https://www.youtube.com",
    icon: <AiFillYoutube />,
  },
];

export const quiz = [
  {
    language: "english",
    topics: [
      {
        topic: "Parts of Speech",
        questions: [
          {
            id: 0,
            question:
              "What part of speech is the word 'jump' in the sentence 'The cat likes to jump on the table'?",
            options: ["noun", "verb", "adjective", "adverb"],
            answer: "verb",
          },
          {
            id: 1,
            question:
              "Identify the adverb in the following sentence: 'She sang beautifully at the concert.'",
            options: ["sang", "beautifully", "concert", "She"],
            answer: "beautifully",
          },
          {
            id: 2,
            question:
              "In the sentence 'The dog chased the cat,' what part of speech is 'dog'?",
            options: ["noun", "verb", "adjective", "adverb"],
            answer: "noun",
          },
          {
            id: 3,
            question:
              "Which part of speech typically modifies nouns or pronouns?",
            options: ["verb", "adjective", "adverb", "conjunction"],
            answer: "adjective",
          },
          {
            id: 4,
            question:
              "Identify the conjunction in the sentence: 'I like both chocolate and vanilla ice cream.'",
            options: ["like", "both", "and", "vanilla"],
            answer: "and",
          },
          {
            id: 5,
            question:
              "What part of speech is 'under' in the sentence 'The book is under the table'?",
            options: ["noun", "verb", "adjective", "preposition"],
            answer: "preposition",
          },
          {
            id: 6,
            question:
              "Which part of speech is often used to connect two independent clauses?",
            options: ["preposition", "conjunction", "adverb", "pronoun"],
            answer: "conjunction",
          },
          {
            id: 7,
            question:
              "In the sentence 'She quickly drank the water,' what part of speech is 'quickly'?",
            options: ["noun", "verb", "adverb", "adjective"],
            answer: "adverb",
          },
          {
            id: 8,
            question:
              "What part of speech describes the action or state of being in a sentence?",
            options: ["noun", "verb", "adjective", "pronoun"],
            answer: "verb",
          },
          {
            id: 9,
            question:
              "What part of speech is often used to introduce dependent clauses?",
            options: ["verb", "adverb", "preposition", "conjunction"],
            answer: "conjunction",
          },
        ],
      },
      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question:
              'Which tense is used in the sentence "She is eating dinner right now"?',
            options: [
              "Past tense",
              "Present tense",
              "Future tense",
              "Past perfect tense",
            ],
            answer: "Present tense",
          },
          {
            id: 1,
            question: 'What is the correct past tense form of the verb "run"?',
            options: ["run", "ran", "running", "will run"],
            answer: "ran",
          },
          {
            id: 2,
            question:
              'In the sentence "They will have finished the project by tomorrow," which tense is used?',
            options: [
              "Past tense",
              "Present tense",
              "Future tense",
              "Present continuous tense",
            ],
            answer: "Future tense",
          },
          {
            id: 3,
            question:
              'Which tense is formed by using "will have" or "shall have" followed by the past participle of the verb?',
            options: [
              "Present perfect tense",
              "Past perfect tense",
              "Future perfect tense",
              "Present continuous tense",
            ],
            answer: "Future perfect tense",
          },
          {
            id: 4,
            question:
              'Identify the tense used in the sentence: "He had already left when I arrived."',
            options: [
              "Present tense",
              "Past tense",
              "Future tense",
              "Past perfect tense",
            ],
            answer: "Past perfect tense",
          },
          {
            id: 5,
            question:
              'In the sentence "She will be singing at the concert tomorrow," which tense is used?',
            options: [
              "Present tense",
              "Past tense",
              "Future tense",
              "Present continuous tense",
            ],
            answer: "Future tense",
          },
          {
            id: 6,
            question:
              'What tense is formed by using "am/is/are" + present participle of the verb?',
            options: [
              "Past tense",
              "Present tense",
              "Future tense",
              "Present continuous tense",
            ],
            answer: "Present continuous tense",
          },
          {
            id: 7,
            question:
              'Identify the tense used in the sentence: "I have lived here for five years."',
            options: [
              "Present tense",
              "Past tense",
              "Present perfect tense",
              "Past perfect tense",
            ],
            answer: "Present perfect tense",
          },
          {
            id: 8,
            question:
              'What tense is formed by using "was/were" + present participle of the verb?',
            options: [
              "Past tense",
              "Present tense",
              "Future tense",
              "Past continuous tense",
            ],
            answer: "Past continuous tense",
          },
          {
            id: 9,
            question:
              'Which tense is used in the sentence "She will have been studying for two hours by the time you arrive"?',
            options: [
              "Present tense",
              "Past tense",
              "Future tense",
              "Future perfect continuous tense",
            ],
            answer: "Future perfect continuous tense",
          },
        ],
      },
      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question:
              'Which article should be used before the word "apple" in the sentence "I ate _ apple yesterday"?',
            options: ["a", "an", "the", "no article"],
            answer: "a",
          },
          {
            id: 1,
            question:
              'In the sentence "He is _ university student," which article should fill in the blank?',
            options: ["a", "an", "the", "no article"],
            answer: "a",
          },
          {
            id: 2,
            question:
              'Which article should be used before the word "hour" in the sentence "I\'ll be there in _ hour"?',
            options: ["a", "an", "the", "no article"],
            answer: "the",
          },
          {
            id: 3,
            question:
              '"_ pen is mightier than _ sword." Which articles should fill in the blanks respectively?',
            options: ["a, a", "an, the", "the, a", "The, the"],
            answer: "the, a",
          },
          {
            id: 4,
            question:
              "Which article is used before singular countable nouns that represent any member of a group or class?",
            options: ["a", "an", "the", "no article"],
            answer: "a",
          },
          {
            id: 5,
            question:
              'In the sentence "She\'s _ only child," which article should fill in the blank?',
            options: ["a", "an", "the", "no article"],
            answer: "an",
          },
          {
            id: 6,
            question:
              "Which article is used before singular countable nouns that represent a specific member of a group or class?",
            options: ["a", "an", "the", "no article"],
            answer: "the",
          },
          {
            id: 7,
            question:
              'In the sentence "He goes to _ church every Sunday," which article should fill in the blank?',
            options: ["a", "an", "the", "no article"],
            answer: "the",
          },
          {
            id: 8,
            question:
              "Which article is used before singular countable nouns that are mentioned for the first time?",
            options: ["a", "an", "the", "no article"],
            answer: "a",
          },
          {
            id: 9,
            question:
              'In the sentence "She received _ award for her performance," which article should fill in the blank?',
            options: ["a", "an", "the", "no article"],
            answer: "the",
          },
        ],
      },
      {
        topic: "Synonyms",
        questions: [
          {
            id: 0,
            question: 'What is a synonym for the word "happy"?',
            options: ["Sad", "Joyful", "Angry", "Tired"],
            answer: "Joyful",
          },
          {
            id: 1,
            question: 'Which word is a synonym for "big"?',
            options: ["Tiny", "Large", "Small", "Little"],
            answer: "Large",
          },
          {
            id: 2,
            question: 'What is a synonym for "difficult"?',
            options: ["Easy", "Hard", "Simple", "Complex"],
            answer: "Hard",
          },
          {
            id: 3,
            question: 'Which word is a synonym for "beautiful"?',
            options: ["Ugly", "Pretty", "Handsome", "Plain"],
            answer: "Pretty",
          },
          {
            id: 4,
            question: 'What is a synonym for "angry"?',
            options: ["Happy", "Sad", "Furious", "Calm"],
            answer: "Furious",
          },
          {
            id: 5,
            question: 'Which word is a synonym for "fast"?',
            options: ["Slow", "Quick", "Rapid", "Swift"],
            answer: "Quick",
          },
          {
            id: 6,
            question: 'What is a synonym for "quiet"?',
            options: ["Noisy", "Loud", "Silent", "Talkative"],
            answer: "Silent",
          },
          {
            id: 7,
            question: 'Which word is a synonym for "smart"?',
            options: ["Dumb", "Clever", "Stupid", "Ignorant"],
            answer: "Clever",
          },
          {
            id: 8,
            question: 'What is a synonym for "kind"?',
            options: ["Mean", "Nice", "Cruel", "Harsh"],
            answer: "Nice",
          },
          {
            id: 9,
            question: 'Which word is a synonym for "sad"?',
            options: ["Happy", "Joyful", "Depressed", "Excited"],
            answer: "Depressed",
          },
        ],
      },
      {
        topic: "Punctuations",
        questions: [
          {
            id: 0,
            question:
              "Which punctuation mark is used to indicate the end of a declarative sentence?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Comma (,)",
              "Question mark (?)",
            ],
            answer: "Period (.)",
          },
          {
            id: 1,
            question:
              "What punctuation mark is used to separate items in a list?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Colon (:)",
              "Comma (,)",
            ],
            answer: "Comma (,)",
          },
          {
            id: 2,
            question:
              "Which punctuation mark is used to indicate excitement, strong emotion, or emphasis?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Question mark (?)",
              "Semicolon (;)",
            ],
            answer: "Exclamation mark (!)",
          },
          {
            id: 3,
            question:
              "What punctuation mark is used to indicate a pause in a sentence or to set off introductory elements?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Comma (,)",
              "Dash (--)",
            ],
            answer: "Comma (,)",
          },
          {
            id: 4,
            question: "Which punctuation mark is used to indicate a question?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Comma (,)",
              "Question mark (?)",
            ],
            answer: "Question mark (?)",
          },
          {
            id: 5,
            question:
              "What punctuation mark is used to indicate possession or to form contractions?",
            options: [
              "Apostrophe (')",
              'Quotation mark (")',
              "Colon (:)",
              "Semicolon (;)",
            ],
            answer: "Apostrophe (')",
          },
          {
            id: 6,
            question:
              "Which punctuation mark is used to indicate a break or pause in a sentence, often stronger than a comma?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Semicolon (;)",
              "Dash (--)",
            ],
            answer: "Dash (--)",
          },
          {
            id: 7,
            question:
              "What punctuation mark is used to enclose a direct quotation or to indicate titles of shorter works?",
            options: [
              "Apostrophe (')",
              'Quotation mark (")',
              "Colon (:)",
              "Semicolon (;)",
            ],
            answer: 'Quotation mark (")',
          },
          {
            id: 8,
            question:
              "Which punctuation mark is used to separate independent clauses in a compound sentence?",
            options: [
              "Period (.)",
              "Exclamation mark (!)",
              "Semicolon (;)",
              "Dash (--)",
            ],
            answer: "Semicolon (;)",
          },
          {
            id: 9,
            question:
              "What punctuation mark is used to indicate a pause or to provide emphasis within a sentence?",
            options: [
              "Parentheses ( )",
              "Apostrophe (')",
              "Dash (--)",
              'Quotation mark (")',
            ],
            answer: "Dash (--)",
          },
        ],
      },
      {
        topic: "Phrasal verbs",
        questions: [
          {
            id: 0,
            question:
              'What is the phrasal verb in the sentence "She put off her dentist appointment"?',
            options: ["put", "off", "appointment", "put off"],
            answer: "put off",
          },
          {
            id: 1,
            question:
              'In the sentence "They ran out of time," what is the phrasal verb?',
            options: ["ran", "out", "time", "ran out"],
            answer: "ran out",
          },
          {
            id: 2,
            question:
              'What is the phrasal verb in the sentence "He turned down the job offer"?',
            options: ["turned", "down", "job", "turned down"],
            answer: "turned down",
          },
          {
            id: 3,
            question:
              'In the sentence "She takes after her mother," what is the phrasal verb?',
            options: ["takes", "after", "mother", "takes after"],
            answer: "takes after",
          },
          {
            id: 4,
            question:
              'What is the phrasal verb in the sentence "He broke up with his girlfriend"?',
            options: ["broke", "up", "girlfriend", "broke up"],
            answer: "broke up",
          },
          {
            id: 5,
            question:
              'In the sentence "She came across an old photograph," what is the phrasal verb?',
            options: ["came", "across", "photograph", "came across"],
            answer: "came across",
          },
          {
            id: 6,
            question:
              'What is the phrasal verb in the sentence "They called off the meeting"?',
            options: ["called", "off", "meeting", "called off"],
            answer: "called off",
          },
          {
            id: 7,
            question:
              'In the sentence "He grew up in the countryside," what is the phrasal verb?',
            options: ["grew", "up", "countryside", "grew up"],
            answer: "grew up",
          },
          {
            id: 8,
            question:
              'What is the phrasal verb in the sentence "She ran into her old friend at the store"?',
            options: ["ran", "into", "friend", "ran into"],
            answer: "ran into",
          },
          {
            id: 9,
            question:
              'In the sentence "He broke down when he heard the news," what is the phrasal verb?',
            options: ["broke", "down", "heard", "broke down"],
            answer: "broke down",
          },
        ],
      },
      {
        topic: "idioms",
        questions: [
          {
            id: 0,
            question: 'What does the idiom "break the ice" mean?',
            options: [
              "To swim",
              "To make something colder",
              "To initiate social interaction",
              "To break a mirror",
            ],
            answer: "To initiate social interaction",
          },
          {
            id: 1,
            question: 'What does the idiom "piece of cake" mean?',
            options: [
              "A slice of cake",
              "Something difficult or challenging",
              "Something easy",
              "A bakery item",
            ],
            answer: "Something easy",
          },
          {
            id: 2,
            question: 'What does the idiom "hit the sack" mean?',
            options: [
              "To punch a bag",
              "To go to bed",
              "To buy a bag",
              "To hit someone with a sack",
            ],
            answer: "To go to bed",
          },
          {
            id: 3,
            question: 'What does the idiom "cost an arm and a leg" mean?',
            options: [
              "To purchase something cheaply",
              "To lose a limb",
              "To be expensive",
              "To donate to charity",
            ],
            answer: "To be expensive",
          },
          {
            id: 4,
            question: 'What does the idiom "raining cats and dogs" mean?',
            options: [
              "Cats and dogs falling from the sky",
              "Heavy rain",
              "Sunny weather",
              "A pet store promotion",
            ],
            answer: "Heavy rain",
          },
          {
            id: 5,
            question: 'What does the idiom "burn the midnight oil" mean?',
            options: [
              "To light a candle",
              "To sleep late",
              "To work late into the night",
              "To conserve energy",
            ],
            answer: "To work late into the night",
          },
          {
            id: 6,
            question: 'What does the idiom "barking up the wrong tree" mean?',
            options: [
              "Climbing a tree",
              "Barking at a tree",
              "Searching in the wrong place",
              "Avoiding trees",
            ],
            answer: "Searching in the wrong place",
          },
          {
            id: 7,
            question: 'What does the idiom "cut to the chase" mean?',
            options: [
              "To run quickly",
              "To go directly to the point",
              "To cut something with a blade",
              "To stop talking",
            ],
            answer: "To go directly to the point",
          },
          {
            id: 8,
            question: 'What does the idiom "break a leg" mean?',
            options: [
              "Literally breaking someone's leg",
              "Good luck",
              "Bad luck",
              "To exercise",
            ],
            answer: "Good luck",
          },
          {
            id: 9,
            question: 'What does the idiom "let the cat out of the bag" mean?',
            options: [
              "Releasing a cat from a bag",
              "To keep a secret",
              "To reveal a secret",
              "To play with a cat",
            ],
            answer: "To reveal a secret",
          },
        ],
      },
      {
        topic: "Active and Passive voice",
        questions: [
          {
            id: 0,
            question:
              'In which voice is the sentence "The cat chased the mouse" written?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Active voice",
          },
          {
            id: 1,
            question:
              'Convert the sentence "The letter was written by John" into active voice.',
            options: [
              "John wrote the letter",
              "John is writing the letter",
              "John has written the letter",
              "John had written the letter",
            ],
            answer: "John wrote the letter",
          },
          {
            id: 2,
            question:
              'In the sentence "The cake was baked by the baker," what voice is used?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 3,
            question:
              'Convert the sentence "The movie was watched by millions of people" into active voice.',
            options: [
              "Millions of people were watching the movie",
              "Millions of people watch the movie",
              "Millions of people watched the movie",
              "Millions of people will watch the movie",
            ],
            answer: "Millions of people watched the movie",
          },
          {
            id: 4,
            question:
              'Which voice is used in the sentence "The book was read by the teacher"?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 5,
            question:
              'Convert the sentence "The house was built by the construction workers" into active voice.',
            options: [
              "The construction workers have built the house",
              "The construction workers are building the house",
              "The construction workers built the house",
              "The construction workers will build the house",
            ],
            answer: "The construction workers built the house",
          },
          {
            id: 6,
            question:
              'In the sentence "The concert was attended by many people," what voice is used?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 7,
            question:
              'Convert the sentence "The message was sent by email" into active voice.',
            options: [
              "Email sent the message",
              "Email is sending the message",
              "Email sends the message",
              "Email has sent the message",
            ],
            answer: "Email sent the message",
          },
          {
            id: 8,
            question:
              'Which voice is used in the sentence "The cake was baked perfectly"?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 9,
            question:
              'Convert the sentence "The trees were planted by the volunteers" into active voice.',
            options: [
              "The volunteers were planting the trees",
              "The volunteers plant the trees",
              "The volunteers planted the trees",
              "The volunteers will plant the trees",
            ],
            answer: "The volunteers planted the trees",
          },
        ],
      },
      {
        topic: "Direct and Indirect speech",
        questions: [
          {
            id: 0,
            question:
              'In which voice is the sentence "The cat chased the mouse" written?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Active voice",
          },
          {
            id: 1,
            question:
              'Convert the sentence "The letter was written by John" into active voice.',
            options: [
              "John wrote the letter",
              "John is writing the letter",
              "John has written the letter",
              "John had written the letter",
            ],
            answer: "John wrote the letter",
          },
          {
            id: 2,
            question:
              'In the sentence "The cake was baked by the baker," what voice is used?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 3,
            question:
              'Convert the sentence "The movie was watched by millions of people" into active voice.',
            options: [
              "Millions of people were watching the movie",
              "Millions of people watch the movie",
              "Millions of people watched the movie",
              "Millions of people will watch the movie",
            ],
            answer: "Millions of people watched the movie",
          },
          {
            id: 4,
            question:
              'Which voice is used in the sentence "The book was read by the teacher"?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 5,
            question:
              'Convert the sentence "The house was built by the construction workers" into active voice.',
            options: [
              "The construction workers have built the house",
              "The construction workers are building the house",
              "The construction workers built the house",
              "The construction workers will build the house",
            ],
            answer: "The construction workers built the house",
          },
          {
            id: 6,
            question:
              'In the sentence "The concert was attended by many people," what voice is used?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 7,
            question:
              'Convert the sentence "The message was sent by email" into active voice.',
            options: [
              "Email sent the message",
              "Email is sending the message",
              "Email sends the message",
              "Email has sent the message",
            ],
            answer: "Email sent the message",
          },
          {
            id: 8,
            question:
              'Which voice is used in the sentence "The cake was baked perfectly"?',
            options: [
              "Active voice",
              "Passive voice",
              "Direct voice",
              "Indirect voice",
            ],
            answer: "Passive voice",
          },
          {
            id: 9,
            question:
              'Convert the sentence "The trees were planted by the volunteers" into active voice.',
            options: [
              "The volunteers were planting the trees",
              "The volunteers plant the trees",
              "The volunteers planted the trees",
              "The volunteers will plant the trees",
            ],
            answer: "The volunteers planted the trees",
          },
        ],
      },
      {
        topic: "vocabulary",
        questions: [
          {
            id: 0,
            question: 'Was ist die Bedeutung von "Benehmen"?',
            options: [
              "Sich gut kleiden",
              "Sich richtig verhalten",
              "Laut sprechen",
              "Schnell rennen",
            ],
            answer: "Sich richtig verhalten",
          },
          {
            id: 1,
            question: 'Was bedeutet "verrückt"?',
            options: [
              "Langweilig",
              "Glücklich",
              "Unberechenbar oder seltsam",
              "Schlau",
            ],
            answer: "Unberechenbar oder seltsam",
          },
          {
            id: 2,
            question: 'Was ist die Bedeutung von "enttäuscht"?',
            options: [
              "Sehr glücklich",
              "Traurig oder unzufrieden",
              "Überrascht",
              "Gelangweilt",
            ],
            answer: "Traurig oder unzufrieden",
          },
          {
            id: 3,
            question: 'Was bedeutet "erkältet"?',
            options: [
              "Krank sein",
              "Glücklich sein",
              "Müde sein",
              "Sich warm anziehen",
            ],
            answer: "Krank sein",
          },
          {
            id: 4,
            question: 'Was ist die Bedeutung von "neugierig"?',
            options: [
              "Desinteressiert",
              "Unhöflich",
              "Interessiert und wissbegierig",
              "Ängstlich",
            ],
            answer: "Interessiert und wissbegierig",
          },
          {
            id: 5,
            question: 'Was bedeutet "besorgt"?',
            options: [
              "Glücklich",
              "Entspannt",
              "Ängstlich oder besorgt",
              "Gelangweilt",
            ],
            answer: "Ängstlich oder besorgt",
          },
          {
            id: 6,
            question: 'Was ist die Bedeutung von "geduldig"?',
            options: [
              "Ungeduldig",
              "In Eile",
              "Bereit zu warten",
              "Unglücklich",
            ],
            answer: "Bereit zu warten",
          },
          {
            id: 7,
            question: 'Was bedeutet "aufgeregt"?',
            options: ["Gelangweilt", "Nervös oder erregt", "Müde", "Ruhig"],
            answer: "Nervös oder erregt",
          },
          {
            id: 8,
            question: 'Was ist die Bedeutung von "aufmerksam"?',
            options: [
              "Unaufmerksam",
              "Ablenkend",
              "Konzentriert und achtsam",
              "Gelangweilt",
            ],
            answer: "Konzentriert und achtsam",
          },
          {
            id: 9,
            question: 'Was bedeutet "gelangweilt"?',
            options: [
              "Interessiert",
              "Aktiv",
              "Müde von Langeweile",
              "Aufgeregt",
            ],
            answer: "Müde von Langeweile",
          },
        ],
      },
    ],
  },
  {
    language: "german",
    topics: [
      {
        topic: "Parts of Speech",
        questions: [
          {
            id: 0,
            question: "Was ist ein Adjektiv?",
            options: [
              "Eine Person",
              "Eine Beschreibung",
              "Ein Ort",
              "Ein Verb",
            ],
            answer: "Eine Beschreibung",
          },
          {
            id: 1,
            question: "Was ist ein Verb?",
            options: [
              "Eine Beschreibung",
              "Eine Aktion",
              "Ein Ort",
              "Ein Adjektiv",
            ],
            answer: "Eine Aktion",
          },
          {
            id: 2,
            question: "Was ist ein Nomen?",
            options: ["Eine Aktion", "Ein Ort", "Ein Subjekt", "Ein Adjektiv"],
            answer: "Ein Subjekt",
          },
          {
            id: 3,
            question: "Was ist ein Pronomen?",
            options: [
              "Ein Verb",
              "Eine Beschreibung",
              "Ein Ersatz für ein Nomen",
              "Ein Ort",
            ],
            answer: "Ein Ersatz für ein Nomen",
          },
          {
            id: 4,
            question: "Was ist ein Adverb?",
            options: [
              "Ein Adjektiv",
              "Eine Beschreibung",
              "Eine Zeitangabe oder Umstand",
              "Ein Pronomen",
            ],
            answer: "Eine Zeitangabe oder Umstand",
          },
          {
            id: 5,
            question: "Was ist ein Artikel?",
            options: [
              "Ein Adjektiv",
              "Eine Zeitangabe",
              "Ein Pronomen",
              "Ein Wort zur Bestimmung von Nomen",
            ],
            answer: "Ein Wort zur Bestimmung von Nomen",
          },
          {
            id: 6,
            question: "Was ist ein Konjunktion?",
            options: [
              "Ein Verb",
              "Eine Aktion",
              "Ein Wort zur Verbindung von Sätzen oder Satzteilen",
              "Ein Ort",
            ],
            answer: "Ein Wort zur Verbindung von Sätzen oder Satzteilen",
          },
          {
            id: 7,
            question: "Was ist ein Interjektion?",
            options: [
              "Ein Gefühl oder Ausruf",
              "Eine Beschreibung",
              "Ein Verb",
              "Ein Subjekt",
            ],
            answer: "Ein Gefühl oder Ausruf",
          },
          {
            id: 8,
            question: "Was ist ein Präposition?",
            options: [
              "Ein Verb",
              "Eine Zeitangabe",
              "Ein Wort zur Bestimmung von Nomen",
              "Ein Wort zur Verbindung von Wörtern und Wortgruppen",
            ],
            answer: "Ein Wort zur Verbindung von Wörtern und Wortgruppen",
          },
          {
            id: 9,
            question: "Was ist ein Determinativ?",
            options: [
              "Ein Pronomen",
              "Ein Artikel",
              "Ein Verb",
              "Ein Adjektiv",
            ],
            answer: "Ein Artikel",
          },
        ],
      },

      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Ich spiele Fußball"?',
            options: ["Vergangenheit", "Gegenwart", "Zukunft", "Konditional"],
            answer: "Gegenwart",
          },
          {
            id: 1,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Er hat das Buch gelesen"?',
            options: ["Gegenwart", "Zukunft", "Vergangenheit", "Konditional"],
            answer: "Vergangenheit",
          },
          {
            id: 2,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Sie wird morgen kommen"?',
            options: ["Gegenwart", "Vergangenheit", "Zukunft", "Konditional"],
            answer: "Zukunft",
          },
          {
            id: 3,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Ich habe gegessen"?',
            options: ["Konditional", "Vergangenheit", "Gegenwart", "Zukunft"],
            answer: "Vergangenheit",
          },
          {
            id: 4,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Wir werden ankommen"?',
            options: ["Gegenwart", "Vergangenheit", "Zukunft", "Konditional"],
            answer: "Zukunft",
          },
          {
            id: 5,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Sie isst gerade"?',
            options: ["Vergangenheit", "Gegenwart", "Zukunft", "Konditional"],
            answer: "Gegenwart",
          },
          {
            id: 6,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Sie hatte bereits gegessen"?',
            options: ["Gegenwart", "Zukunft", "Vergangenheit", "Konditional"],
            answer: "Vergangenheit",
          },
          {
            id: 7,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Er wird bald anrufen"?',
            options: ["Gegenwart", "Vergangenheit", "Zukunft", "Konditional"],
            answer: "Zukunft",
          },
          {
            id: 8,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Du kannst es tun"?',
            options: ["Gegenwart", "Konditional", "Zukunft", "Vergangenheit"],
            answer: "Konditional",
          },
          {
            id: 9,
            question:
              'Welche Zeitform wird in diesem Satz verwendet: "Sie haben bereits gegessen"?',
            options: ["Gegenwart", "Zukunft", "Vergangenheit", "Konditional"],
            answer: "Vergangenheit",
          },
        ],
      },

      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question: 'Welcher Artikel passt zu dem Substantiv "Auto"?',
            options: ["die", "das", "der", "ein"],
            answer: "das",
          },
          {
            id: 1,
            question: 'Welcher Artikel passt zu dem Substantiv "Haus"?',
            options: ["das", "der", "die", "ein"],
            answer: "das",
          },
          {
            id: 2,
            question: 'Welcher Artikel passt zu dem Substantiv "Stuhl"?',
            options: ["die", "das", "der", "ein"],
            answer: "der",
          },
          {
            id: 3,
            question: 'Welcher Artikel passt zu dem Substantiv "Apfel"?',
            options: ["der", "die", "das", "ein"],
            answer: "der",
          },
          {
            id: 4,
            question: 'Welcher Artikel passt zu dem Substantiv "Kind"?',
            options: ["die", "das", "der", "ein"],
            answer: "das",
          },
          {
            id: 5,
            question: 'Welcher Artikel passt zu dem Substantiv "Mädchen"?',
            options: ["das", "die", "der", "ein"],
            answer: "das",
          },
          {
            id: 6,
            question: 'Welcher Artikel passt zu dem Substantiv "Buch"?',
            options: ["die", "das", "der", "ein"],
            answer: "das",
          },
          {
            id: 7,
            question: 'Welcher Artikel passt zu dem Substantiv "Tisch"?',
            options: ["das", "die", "der", "ein"],
            answer: "der",
          },
          {
            id: 8,
            question: 'Welcher Artikel passt zu dem Substantiv "Garten"?',
            options: ["das", "die", "der", "ein"],
            answer: "der",
          },
          {
            id: 9,
            question: 'Welcher Artikel passt zu dem Substantiv "Mann"?',
            options: ["der", "die", "das", "ein"],
            answer: "der",
          },
        ],
      },

      {
        topic: "Synonyms",
        questions: [
          {
            id: 0,
            question: 'Was ist ein Synonym für "glücklich"?',
            options: ["traurig", "fröhlich", "wütend", "müde"],
            answer: "fröhlich",
          },
          {
            id: 1,
            question: 'Was ist ein Synonym für "schnell"?',
            options: ["langsam", "flink", "ruhig", "müde"],
            answer: "flink",
          },
          {
            id: 2,
            question: 'Was ist ein Synonym für "groß"?',
            options: ["klein", "winzig", "riesig", "dünn"],
            answer: "riesig",
          },
          {
            id: 3,
            question: 'Was ist ein Synonym für "klug"?',
            options: ["dumm", "intelligent", "faul", "langweilig"],
            answer: "intelligent",
          },
          {
            id: 4,
            question: 'Was ist ein Synonym für "traurig"?',
            options: ["glücklich", "fröhlich", "träge", "deprimiert"],
            answer: "deprimiert",
          },
          {
            id: 5,
            question: 'Was ist ein Synonym für "interessant"?',
            options: ["langweilig", "faszinierend", "müde", "einfach"],
            answer: "faszinierend",
          },
          {
            id: 6,
            question: 'Was ist ein Synonym für "angenehm"?',
            options: ["unangenehm", "entspannt", "freundlich", "nett"],
            answer: "freundlich",
          },
          {
            id: 7,
            question: 'Was ist ein Synonym für "stark"?',
            options: ["schwach", "mutig", "sanft", "hart"],
            answer: "mutig",
          },
          {
            id: 8,
            question: 'Was ist ein Synonym für "schön"?',
            options: ["hässlich", "attraktiv", "einfach", "träge"],
            answer: "attraktiv",
          },
          {
            id: 9,
            question: 'Was ist ein Synonym für "wichtig"?',
            options: ["unwichtig", "bedeutend", "unscheinbar", "gelassen"],
            answer: "bedeutend",
          },
        ],
      },

      {
        topic: "Punctuations",
        questions: [
          {
            id: 0,
            question:
              "Welches Zeichen wird verwendet, um einen Satz zu beenden?",
            options: [
              "Komma (,)",
              "Punkt (.)",
              "Fragezeichen (?)",
              "Ausrufezeichen (!)",
            ],
            answer: "Punkt (.)",
          },
          {
            id: 1,
            question:
              "Welches Zeichen wird verwendet, um eine Aufzählung zu kennzeichnen?",
            options: [
              "Doppelpunkt (:)",
              "Semikolon (;)",
              "Gedankenstrich (-)",
              'Anführungszeichen (" ")',
            ],
            answer: "Doppelpunkt (:)",
          },
          {
            id: 2,
            question:
              "Welches Zeichen wird verwendet, um Anführungszeichen zu setzen?",
            options: [
              "Klammern ( )",
              "Apostroph ('",
              'Anführungszeichen (" ")',
              "Fragezeichen (?)",
            ],
            answer: 'Anführungszeichen (" ")',
          },
          {
            id: 3,
            question:
              "Welches Zeichen wird verwendet, um eine Frage zu kennzeichnen?",
            options: [
              "Punkt (.)",
              "Ausrufezeichen (!)",
              "Komma (,)",
              "Fragezeichen (?)",
            ],
            answer: "Fragezeichen (?)",
          },
          {
            id: 4,
            question:
              "Welches Zeichen wird verwendet, um eine Aufforderung oder einen Ausruf zu kennzeichnen?",
            options: [
              "Punkt (.)",
              "Fragezeichen (?)",
              "Ausrufezeichen (!)",
              "Doppelpunkt (:)",
            ],
            answer: "Ausrufezeichen (!)",
          },
          {
            id: 5,
            question:
              "Welches Zeichen wird verwendet, um einen Satz in zwei Teile zu trennen?",
            options: [
              "Komma (,)",
              "Semikolon (;)",
              "Punkt (.)",
              "Gedankenstrich (-)",
            ],
            answer: "Semikolon (;)",
          },
          {
            id: 6,
            question:
              "Welches Zeichen wird verwendet, um eine Ellipse zu kennzeichnen?",
            options: [
              "Auslassungspunkte (...)",
              'Anführungszeichen (" ")',
              "Ausrufezeichen (!)",
              "Fragezeichen (?)",
            ],
            answer: "Auslassungspunkte (...)",
          },
          {
            id: 7,
            question:
              "Welches Zeichen wird verwendet, um einen Nebensatz abzutrennen?",
            options: [
              "Semikolon (;)",
              "Punkt (.)",
              "Komma (,)",
              "Doppelpunkt (:)",
            ],
            answer: "Komma (,)",
          },
          {
            id: 8,
            question:
              "Welches Zeichen wird verwendet, um eine direkte Rede einzuleiten?",
            options: [
              'Anführungszeichen (" ")',
              "Doppelpunkt (:)",
              "Komma (,)",
              "Punkt (.)",
            ],
            answer: 'Anführungszeichen (" ")',
          },
          {
            id: 9,
            question:
              "Welches Zeichen wird verwendet, um eine Anmerkung oder Erläuterung einzufügen?",
            options: [
              "Punkt (.)",
              "Gedankenstrich (-)",
              "Klammern ( )",
              "Doppelpunkt (:)",
            ],
            answer: "Klammern ( )",
          },
        ],
      },

      {
        topic: "Phrasal verbs",
        questions: [
          {
            id: 0,
            question:
              'Was ist die Bedeutung von "aufgeben" in dem phrasalen Verb "aufgeben"?',
            options: [
              "sich ergeben",
              "etwas überreichen",
              "aufhören zu versuchen",
              "etwas reservieren",
            ],
            answer: "aufhören zu versuchen",
          },
          {
            id: 1,
            question: 'Was bedeutet "abholen" in dem phrasalen Verb "abholen"?',
            options: [
              "etwas niederlegen",
              "etwas herumtragen",
              "etwas sammeln",
              "etwas abgeben",
            ],
            answer: "etwas sammeln",
          },
          {
            id: 2,
            question:
              'Was bedeutet "aufstehen" in dem phrasalen Verb "aufstehen"?',
            options: [
              "auf etwas steigen",
              "aus einer sitzenden oder liegenden Position kommen",
              "etwas aufräumen",
              "auf etwas achten",
            ],
            answer: "aus einer sitzenden oder liegenden Position kommen",
          },
          {
            id: 3,
            question:
              'Was ist die Bedeutung von "abbrechen" in dem phrasalen Verb "abbrechen"?',
            options: [
              "etwas abhacken",
              "etwas kaputt machen",
              "etwas beenden",
              "etwas vermeiden",
            ],
            answer: "etwas beenden",
          },
          {
            id: 4,
            question:
              'Was bedeutet "anfangen" in dem phrasalen Verb "anfangen"?',
            options: [
              "etwas beginnen",
              "etwas fangen",
              "etwas abschließen",
              "etwas ansehen",
            ],
            answer: "etwas beginnen",
          },
          {
            id: 5,
            question:
              'Was bedeutet "ausgeben" in dem phrasalen Verb "ausgeben"?',
            options: [
              "etwas empfangen",
              "etwas auswerfen",
              "etwas veröffentlichen",
              "etwas ausgeben",
            ],
            answer: "etwas ausgeben",
          },
          {
            id: 6,
            question:
              'Was ist die Bedeutung von "abfahren" in dem phrasalen Verb "abfahren"?',
            options: [
              "sich streiten",
              "losfahren",
              "ankommen",
              "stehen bleiben",
            ],
            answer: "losfahren",
          },
          {
            id: 7,
            question:
              'Was bedeutet "zurückkommen" in dem phrasalen Verb "zurückkommen"?',
            options: [
              "zurückkehren",
              "etwas kommen lassen",
              "vorbeikommen",
              "herumkommen",
            ],
            answer: "zurückkehren",
          },
          {
            id: 8,
            question:
              'Was ist die Bedeutung von "wegwerfen" in dem phrasalen Verb "wegwerfen"?',
            options: [
              "etwas verkaufen",
              "etwas reparieren",
              "etwas weggeben",
              "etwas entsorgen",
            ],
            answer: "etwas entsorgen",
          },
          {
            id: 9,
            question:
              'Was bedeutet "herausfinden" in dem phrasalen Verb "herausfinden"?',
            options: [
              "etwas suchen",
              "etwas verbergen",
              "etwas entdecken",
              "etwas vergessen",
            ],
            answer: "etwas entdecken",
          },
        ],
      },
      {
        topic: "idioms",
        questions: [
          {
            id: 0,
            question:
              'Was bedeutet die Redewendung "den Nagel auf den Kopf treffen"?',
            options: [
              "etwas schnell erledigen",
              "eine kluge Entscheidung treffen",
              "genau das Richtige sagen",
              "jemanden schlagen",
            ],
            answer: "genau das Richtige sagen",
          },
          {
            id: 1,
            question: 'Was bedeutet die Redewendung "die Nase voll haben"?',
            options: [
              "genug von etwas haben",
              "erkältet sein",
              "hungrig sein",
              "etwas nicht mögen",
            ],
            answer: "genug von etwas haben",
          },
          {
            id: 2,
            question:
              'Was bedeutet die Redewendung "da liegt der Hase im Pfeffer"?',
            options: [
              "etwas ist nicht in Ordnung",
              "etwas ist unklar oder verdächtig",
              "jemand ist krank",
              "etwas schmeckt gut",
            ],
            answer: "etwas ist unklar oder verdächtig",
          },
          {
            id: 3,
            question:
              'Was bedeutet die Redewendung "das Blaue vom Himmel versprechen"?',
            options: [
              "etwas Unmögliches versprechen",
              "ehrlich sein",
              "etwas Einfaches versprechen",
              "etwas Wichtiges versprechen",
            ],
            answer: "etwas Unmögliches versprechen",
          },
          {
            id: 4,
            question:
              'Was bedeutet die Redewendung "die Kirche im Dorf lassen"?',
            options: [
              "ruhig bleiben",
              "sich entspannen",
              "die Dinge nicht übertreiben",
              "aufhören zu beten",
            ],
            answer: "die Dinge nicht übertreiben",
          },
          {
            id: 5,
            question: 'Was bedeutet die Redewendung "ins Fettnäpfchen treten"?',
            options: [
              "jemanden beleidigen",
              "eine peinliche Situation erleben",
              "etwas nicht verstehen",
              "jemanden bewundern",
            ],
            answer: "eine peinliche Situation erleben",
          },
          {
            id: 6,
            question: 'Was bedeutet die Redewendung "die Daumen drücken"?',
            options: [
              "auf etwas warten",
              "hoffen, dass etwas gut geht",
              "etwas erzählen",
              "jemanden unterstützen",
            ],
            answer: "hoffen, dass etwas gut geht",
          },
          {
            id: 7,
            question:
              'Was bedeutet die Redewendung "sich aus dem Staub machen"?',
            options: ["bleiben", "verschwinden", "schlafen gehen", "aufräumen"],
            answer: "verschwinden",
          },
          {
            id: 8,
            question: 'Was bedeutet die Redewendung "einen Vogel haben"?',
            options: [
              "Vögel beobachten",
              "verrückt sein",
              "glücklich sein",
              "hungrig sein",
            ],
            answer: "verrückt sein",
          },
          {
            id: 9,
            question: 'Was bedeutet die Redewendung "auf Wolke sieben sein"?',
            options: [
              "verwirrt sein",
              "glücklich verliebt sein",
              "traurig sein",
              "wütend sein",
            ],
            answer: "glücklich verliebt sein",
          },
        ],
      },

      {
        topic: "Active and Passive voice",
        questions: [
          {
            id: 0,
            question: "Welcher Satz verwendet die passive Stimme?",
            options: [
              "Die Katze jagt den Vogel.",
              "Der Vogel wird von der Katze gejagt.",
              "Der Vogel fliegt schnell.",
              "Die Katze isst Fisch.",
            ],
            answer: "Der Vogel wird von der Katze gejagt.",
          },
          {
            id: 1,
            question: "Welcher Satz ist im Aktiv?",
            options: [
              "Das Buch wird von ihm gelesen.",
              "Er liest das Buch.",
              "Das Buch wurde gelesen.",
              "Das Buch ist gelesen worden.",
            ],
            answer: "Er liest das Buch.",
          },
          {
            id: 2,
            question: "Welcher Satz verwendet die passive Stimme?",
            options: [
              "Die Kinder spielen im Park.",
              "Im Park wird von den Kindern gespielt.",
              "Die Kinder haben Spaß.",
              "Der Park wird von den Kindern besucht.",
            ],
            answer: "Im Park wird von den Kindern gespielt.",
          },
          {
            id: 3,
            question: "Welcher Satz ist im Aktiv?",
            options: [
              "Der Kuchen wird von ihr gebacken.",
              "Sie backt den Kuchen.",
              "Der Kuchen war gegessen.",
              "Der Kuchen ist lecker.",
            ],
            answer: "Sie backt den Kuchen.",
          },
          {
            id: 4,
            question: "Welcher Satz verwendet die passive Stimme?",
            options: [
              "Die Blumen duften herrlich.",
              "Herrliche Düfte werden von den Blumen ausgestrahlt.",
              "Ich liebe den Duft von Blumen.",
              "Die Blumen blühen im Garten.",
            ],
            answer: "Herrliche Düfte werden von den Blumen ausgestrahlt.",
          },
          {
            id: 5,
            question: "Welcher Satz ist im Aktiv?",
            options: [
              "Der Brief wird von ihm geschrieben.",
              "Er schreibt den Brief.",
              "Der Brief war verschickt.",
              "Der Brief ist wichtig.",
            ],
            answer: "Er schreibt den Brief.",
          },
          {
            id: 6,
            question: "Welcher Satz verwendet die passive Stimme?",
            options: [
              "Die Sonne scheint hell.",
              "Helles Licht wird von der Sonne ausgestrahlt.",
              "Es ist ein sonniger Tag.",
              "Die Sonne geht unter.",
            ],
            answer: "Helles Licht wird von der Sonne ausgestrahlt.",
          },
          {
            id: 7,
            question: "Welcher Satz ist im Aktiv?",
            options: [
              "Der Film wird von ihnen gesehen.",
              "Sie sehen den Film.",
              "Der Film war langweilig.",
              "Der Film ist bekannt.",
            ],
            answer: "Sie sehen den Film.",
          },
          {
            id: 8,
            question: "Welcher Satz verwendet die passive Stimme?",
            options: [
              "Er kocht das Abendessen.",
              "Das Abendessen wird von ihm gekocht.",
              "Das Abendessen schmeckt köstlich.",
              "Sie essen gerne.",
            ],
            answer: "Das Abendessen wird von ihm gekocht.",
          },
          {
            id: 9,
            question: "Welcher Satz ist im Aktiv?",
            options: [
              "Der Ball wird von ihnen gefangen.",
              "Sie fangen den Ball.",
              "Der Ball war verloren.",
              "Der Ball ist rund.",
            ],
            answer: "Sie fangen den Ball.",
          },
        ],
      },
      {
        topic: "Direct and Indirect speech",
        questions: [
          {
            id: 0,
            question: "Welcher Satz zeigt die direkte Rede an?",
            options: [
              "Er sagte, dass er gerne liest.",
              "Er fragte, ob sie Hunger hatte.",
              "Er antwortete, dass er arbeiten müsse.",
              "Er rief aus, wie schön der Tag sei.",
            ],
            answer: "Er rief aus, wie schön der Tag sei.",
          },
          {
            id: 1,
            question: "Welcher Satz zeigt die indirekte Rede an?",
            options: [
              'Sie fragte: "Kannst du mir helfen?"',
              'Er sagte: "Ich komme morgen vorbei."',
              "Sie erklärte, dass sie spät dran sei.",
              'Er antwortete: "Ja, natürlich."',
            ],
            answer: "Sie erklärte, dass sie spät dran sei.",
          },
          {
            id: 2,
            question: "Welcher Satz ist in der direkten Rede?",
            options: [
              "Er sagte, dass er müde sei.",
              'Er antwortete: "Ich weiß es nicht."',
              "Sie fragte, ob er das Buch gelesen habe.",
              "Sie sagte, dass sie gerne schwimme.",
            ],
            answer: 'Er antwortete: "Ich weiß es nicht."',
          },
          {
            id: 3,
            question: "Welcher Satz ist in der indirekten Rede?",
            options: [
              'Sie fragte: "Warum bist du traurig?"',
              'Er sagte: "Ich habe das Buch verloren."',
              "Sie erklärte, dass sie kein Geld habe.",
              'Er antwortete: "Es tut mir leid."',
            ],
            answer: "Sie erklärte, dass sie kein Geld habe.",
          },
          {
            id: 4,
            question: "Welcher Satz ist in der direkten Rede?",
            options: [
              "Sie fragte, ob sie helfen könne.",
              "Er sagte, dass er gerne kocht.",
              'Er antwortete: "Ich komme bald."',
              "Sie rief aus, wie schön der Garten sei.",
            ],
            answer: 'Er antwortete: "Ich komme bald."',
          },
          {
            id: 5,
            question: "Welcher Satz ist in der indirekten Rede?",
            options: [
              'Er antwortete: "Das ist eine gute Idee."',
              'Sie fragte: "Wann kommst du zurück?"',
              "Sie erklärte, dass sie gerne reist.",
              'Er sagte: "Ich habe den Schlüssel verloren."',
            ],
            answer: "Sie erklärte, dass sie gerne reist.",
          },
          {
            id: 6,
            question: "Welcher Satz zeigt die direkte Rede an?",
            options: [
              "Er meinte, er wolle später gehen.",
              'Sie fragte: "Wo ist mein Buch?"',
              "Er erklärte, dass er krank sei.",
              "Sie antwortete, dass sie das Spiel gewinnen werde.",
            ],
            answer: 'Sie fragte: "Wo ist mein Buch?"',
          },
          {
            id: 7,
            question: "Welcher Satz zeigt die indirekte Rede an?",
            options: [
              'Er sagte: "Das ist unmöglich."',
              'Sie fragte: "Wie spät ist es?"',
              "Er antwortete, dass er den Brief geschrieben habe.",
              "Sie rief aus, wie schön der Sonnenuntergang sei.",
            ],
            answer: "Er antwortete, dass er den Brief geschrieben habe.",
          },
          {
            id: 8,
            question: "Welcher Satz ist in der direkten Rede?",
            options: [
              "Er meinte, er habe den Film gesehen.",
              'Sie fragte: "Wann kommt der Zug?"',
              "Er antwortete, dass er den Job bekommen habe.",
              "Sie erklärte, dass sie gerne tanze.",
            ],
            answer: 'Sie fragte: "Wann kommt der Zug?"',
          },
          {
            id: 9,
            question: "Welcher Satz ist in der indirekten Rede?",
            options: [
              'Sie sagte: "Ich bin aufgeregt."',
              'Er fragte: "Hast du meine Nachricht erhalten?"',
              "Er antwortete, dass er das Buch gelesen habe.",
              "Sie rief aus, wie schön die Landschaft sei.",
            ],
            answer: "Er antwortete, dass er das Buch gelesen habe",
          },
        ],
      },
      {
        topic: "vocabulary",
        questions: [
          {
            id: 0,
            question: 'Was ist die Bedeutung von "Benehmen"?',
            options: [
              "Sich gut kleiden",
              "Sich richtig verhalten",
              "Laut sprechen",
              "Schnell rennen",
            ],
            answer: "Sich richtig verhalten",
          },
          {
            id: 1,
            question: 'Was bedeutet "verrückt"?',
            options: [
              "Langweilig",
              "Glücklich",
              "Unberechenbar oder seltsam",
              "Schlau",
            ],
            answer: "Unberechenbar oder seltsam",
          },
          {
            id: 2,
            question: 'Was ist die Bedeutung von "enttäuscht"?',
            options: [
              "Sehr glücklich",
              "Traurig oder unzufrieden",
              "Überrascht",
              "Gelangweilt",
            ],
            answer: "Traurig oder unzufrieden",
          },
          {
            id: 3,
            question: 'Was bedeutet "erkältet"?',
            options: [
              "Krank sein",
              "Glücklich sein",
              "Müde sein",
              "Sich warm anziehen",
            ],
            answer: "Krank sein",
          },
          {
            id: 4,
            question: 'Was ist die Bedeutung von "neugierig"?',
            options: [
              "Desinteressiert",
              "Unhöflich",
              "Interessiert und wissbegierig",
              "Ängstlich",
            ],
            answer: "Interessiert und wissbegierig",
          },
          {
            id: 5,
            question: 'Was bedeutet "besorgt"?',
            options: [
              "Glücklich",
              "Entspannt",
              "Ängstlich oder besorgt",
              "Gelangweilt",
            ],
            answer: "Ängstlich oder besorgt",
          },
          {
            id: 6,
            question: 'Was ist die Bedeutung von "geduldig"?',
            options: [
              "Ungeduldig",
              "In Eile",
              "Bereit zu warten",
              "Unglücklich",
            ],
            answer: "Bereit zu warten",
          },
          {
            id: 7,
            question: 'Was bedeutet "aufgeregt"?',
            options: ["Gelangweilt", "Nervös oder erregt", "Müde", "Ruhig"],
            answer: "Nervös oder erregt",
          },
          {
            id: 8,
            question: 'Was ist die Bedeutung von "aufmerksam"?',
            options: [
              "Unaufmerksam",
              "Ablenkend",
              "Konzentriert und achtsam",
              "Gelangweilt",
            ],
            answer: "Konzentriert und achtsam",
          },
          {
            id: 9,
            question: 'Was bedeutet "gelangweilt"?',
            options: [
              "Interessiert",
              "Aktiv",
              "Müde von Langeweile",
              "Aufgeregt",
            ],
            answer: "Müde von Langeweile",
          },
        ],
      },
    ],
  },
  {
    language: "chinese",
    topics: [
      {
        topic: "Parts of Speech",
        questions: [
          {
            id: 0,
            question: "名词的作用是什么？",
            options: [
              "描述事物的词语",
              "表示动作的词语",
              "描述人的词语",
              "表示时间的词语",
            ],
            answer: "描述事物的词语",
          },
          {
            id: 1,
            question: "以下哪个词是形容词？",
            options: ["快速", "看", "美丽", "跳"],
            answer: "美丽",
          },
          {
            id: 2,
            question: "动词的主要作用是什么？",
            options: [
              "描述事物的词语",
              "表示动作的词语",
              "描述人的词语",
              "表示时间的词语",
            ],
            answer: "表示动作的词语",
          },
          {
            id: 3,
            question: "以下哪个词是副词？",
            options: ["快速", "小猫", "想", "真实地"],
            answer: "真实地",
          },
          {
            id: 4,
            question: "代词的作用是什么？",
            options: [
              "替代其他词语",
              "描述事物的词语",
              "表示动作的词语",
              "描述人的词语",
            ],
            answer: "替代其他词语",
          },
          {
            id: 5,
            question: "下列哪个词可以用作冠词？",
            options: ["这", "他", "一", "漂亮"],
            answer: "一",
          },
          {
            id: 6,
            question: "形容词的主要作用是什么？",
            options: [
              "描述人的词语",
              "描述事物的词语",
              "描述动作的词语",
              "表示时间的词语",
            ],
            answer: "描述事物的词语",
          },
          {
            id: 7,
            question: "下列哪个词可以表示时间？",
            options: ["快速", "飞", "昨天", "他"],
            answer: "昨天",
          },
          {
            id: 8,
            question: "下列哪个词可以作为副词？",
            options: ["喜欢", "美丽", "快速", "小猫"],
            answer: "快速",
          },
          {
            id: 9,
            question: "以下哪个词通常被用作动词？",
            options: ["他", "跳", "美丽", "桌子"],
            answer: "跳",
          },
        ],
      },

      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question: "下列哪个时态用于描述正在发生的动作或事件？",
            options: ["过去时", "现在时", "将来时", "完成时"],
            answer: "现在时",
          },
          {
            id: 1,
            question: "将句子“他们去年去了法国”改写为现在进行时。",
            options: [
              "他们去年去了法国",
              "他们正在去年去法国",
              "他们去法国",
              "他们正在去法国",
            ],
            answer: "他们正在去法国",
          },
          {
            id: 2,
            question: "下列哪个时态用于描述已经完成的动作或事件？",
            options: ["过去时", "现在时", "将来时", "完成时"],
            answer: "完成时",
          },
          {
            id: 3,
            question: "将句子“她昨天晚上做作业”改写为过去进行时。",
            options: [
              "她昨天晚上正在做作业",
              "她昨天晚上做作业",
              "她正在昨天晚上做作业",
              "她做昨天晚上的作业",
            ],
            answer: "她昨天晚上正在做作业",
          },
          {
            id: 4,
            question: "下列哪个时态用于描述将来的动作或事件？",
            options: ["过去时", "现在时", "将来时", "完成时"],
            answer: "将来时",
          },
          {
            id: 5,
            question: "将句子“我们下个月去旅行”改写为过去时。",
            options: [
              "我们下个月去旅行",
              "我们正在下个月去旅行",
              "我们上个月去旅行",
              "我们将要下个月去旅行",
            ],
            answer: "我们上个月去旅行",
          },
          {
            id: 6,
            question:
              "下列哪个时态用于描述从过去某时开始持续到现在的动作或状态？",
            options: ["过去时", "现在时", "将来时", "进行时"],
            answer: "进行时",
          },
          {
            id: 7,
            question: "将句子“他们一直在等你”改写为过去进行时。",
            options: [
              "他们在等你",
              "他们在等你一段时间了",
              "他们一直等你",
              "他们一直在等你",
            ],
            answer: "他们一直在等你",
          },
          {
            id: 8,
            question: "下列哪个时态用于描述将来已经完成的动作或事件？",
            options: ["过去时", "现在时", "将来时", "将来完成时"],
            answer: "将来完成时",
          },
          {
            id: 9,
            question: "将句子“我明天会完成我的作业”改写为现在进行时。",
            options: [
              "我明天完成我的作业",
              "我正在明天完成我的作业",
              "我正在完成我的作业",
              "我将完成我的作业",
            ],
            answer: "我正在完成我的作业",
          },
        ],
      },

      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question: "在句子“我买了一本书”中，“一”是什么类型的冠词？",
            options: ["定冠词", "不定冠词", "零冠词", "特指冠词"],
            answer: "不定冠词",
          },
          {
            id: 1,
            question: "在句子“我喜欢读书”中，缺少了哪种类型的冠词？",
            options: ["定冠词", "不定冠词", "零冠词", "特指冠词"],
            answer: "零冠词",
          },
          {
            id: 2,
            question: "下列哪个词可以用作定冠词？",
            options: ["a", "an", "the", "some"],
            answer: "the",
          },
          {
            id: 3,
            question: "在句子“她是医生”中，缺少了哪种类型的冠词？",
            options: ["定冠词", "不定冠词", "零冠词", "特指冠词"],
            answer: "零冠词",
          },
          {
            id: 4,
            question: "下列哪个词可以用作不定冠词？",
            options: ["the", "a", "an", "some"],
            answer: "a",
          },
          {
            id: 5,
            question: "在句子“这是一只猫”中，“一”是什么类型的冠词？",
            options: ["定冠词", "不定冠词", "零冠词", "特指冠词"],
            answer: "不定冠词",
          },
          {
            id: 6,
            question: "下列哪个词不是冠词？",
            options: ["a", "an", "some", "the"],
            answer: "some",
          },
          {
            id: 7,
            question: "在句子“他喜欢吃水果”中，缺少了哪种类型的冠词？",
            options: ["定冠词", "不定冠词", "零冠词", "特指冠词"],
            answer: "零冠词",
          },
          {
            id: 8,
            question: "下列哪个词可以用作特指冠词？",
            options: ["a", "an", "the", "some"],
            answer: "the",
          },
          {
            id: 9,
            question: "在句子“请给我一杯水”中，“一”是什么类型的冠词？",
            options: ["定冠词", "不定冠词", "零冠词", "特指冠词"],
            answer: "不定冠词",
          },
        ],
      },

      {
        topic: "Synonyms",
        questions: [
          {
            id: 0,
            question: "下列哪个词与“快乐”同义？",
            options: ["悲伤", "高兴", "生气", "疲惫"],
            answer: "高兴",
          },
          {
            id: 1,
            question: "“困难”和哪个词意义最接近？",
            options: ["容易", "挑战", "简单", "问题"],
            answer: "容易",
          },
          {
            id: 2,
            question: "下列哪个词与“美味”同义？",
            options: ["苦", "酸", "甜", "辣"],
            answer: "甜",
          },
          {
            id: 3,
            question: "“富裕”和哪个词意义最接近？",
            options: ["贫穷", "幸福", "贫困", "富有"],
            answer: "富有",
          },
          {
            id: 4,
            question: "下列哪个词与“渴望”同义？",
            options: ["厌恶", "嫉妒", "温和", "渴望"],
            answer: "渴望",
          },
          {
            id: 5,
            question: "“害怕”和哪个词意义最接近？",
            options: ["勇敢", "痛苦", "担心", "安心"],
            answer: "担心",
          },
          {
            id: 6,
            question: "下列哪个词与“漂亮”同义？",
            options: ["丑陋", "平凡", "美丽", "普通"],
            answer: "美丽",
          },
          {
            id: 7,
            question: "“生气”与以下哪个词同义？",
            options: ["开心", "伤心", "难过", "冷静"],
            answer: "难过",
          },
          {
            id: 8,
            question: "“勇敢”与以下哪个词同义？",
            options: ["害怕", "胆小", "有勇气的", "胆怯"],
            answer: "有勇气的",
          },
          {
            id: 9,
            question: "“慷慨”与以下哪个词同义？",
            options: ["自私", "小气", "和善", "粗鲁"],
            answer: "和善",
          },
        ],
      },

      {
        topic: "Punctuations",
        questions: [
          {
            id: 0,
            question:
              "在句子“今天是星期五吗，我已经忘记了”中，逗号的作用是什么？",
            options: [
              "分隔两个并列的句子",
              "引导问句",
              "分隔句子中的动词和宾语",
              "表示感叹",
            ],
            answer: "分隔两个并列的句子",
          },
          {
            id: 1,
            question: "句号通常用于哪种类型的句子？",
            options: ["陈述句", "疑问句", "感叹句", "祈使句"],
            answer: "陈述句",
          },
          {
            id: 2,
            question: "下列哪种情况适合使用感叹号？",
            options: ["陈述句", "疑问句", "表示感叹的句子", "引用句"],
            answer: "表示感叹的句子",
          },
          {
            id: 3,
            question: "分号通常用于连接哪些部分？",
            options: ["主句和从句", "并列的句子", "列举项目", "引用句"],
            answer: "列举项目",
          },
          {
            id: 4,
            question: "冒号通常用于什么情况？",
            options: ["引导问句", "表示感叹", "引用句", "引出解释、列举或总结"],
            answer: "引出解释、列举或总结",
          },
          {
            id: 5,
            question: "破折号通常用于表示什么？",
            options: [
              "引用句",
              "列举项目",
              "表示补充或强调的内容",
              "分隔并列的句子",
            ],
            answer: "表示补充或强调的内容",
          },
          {
            id: 6,
            question: "下列哪种情况适合使用括号？",
            options: [
              "引用句",
              "列举项目",
              "表示感叹",
              "插入补充或说明性的内容",
            ],
            answer: "插入补充或说明性的内容",
          },
          {
            id: 7,
            question: "在句子“我喜欢学习——尤其是阅读”中，破折号的作用是什么？",
            options: [
              "分隔两个并列的句子",
              "表示感叹",
              "引出解释、列举或总结",
              "引导问句",
            ],
            answer: "引出解释、列举或总结",
          },
          {
            id: 8,
            question:
              "在句子“他听到一声巨响（可能是雷声）后，便加快了步伐”中，括号的作用是什么？",
            options: [
              "分隔两个并列的句子",
              "表示感叹",
              "引出解释、列举或总结",
              "插入补充或说明性的内容",
            ],
            answer: "插入补充或说明性的内容",
          },
          {
            id: 9,
            question: "以下哪个标点符号用于表示省略或引用？",
            options: ["句号", "冒号", "分号", "引号"],
            answer: "引号",
          },
        ],
      },

      {
        topic: "Phrasal verbs",
        questions: [
          {
            id: 0,
            question: "“Give up”这个短语动词的意思是什么？",
            options: ["继续", "放弃", "着火", "付钱"],
            answer: "放弃",
          },
          {
            id: 1,
            question: "“Run out”这个短语动词的意思是什么？",
            options: ["跑出去", "用完", "放大", "启动"],
            answer: "用完",
          },
          {
            id: 2,
            question: "“Look forward to”这个短语动词的意思是什么？",
            options: ["期待", "回头看", "习惯", "愤怒"],
            answer: "期待",
          },
          {
            id: 3,
            question: "“Take off”这个短语动词的意思是什么？",
            options: ["脱下", "着陆", "开始飞行", "带走"],
            answer: "开始飞行",
          },
          {
            id: 4,
            question: "“Come across”这个短语动词的意思是什么？",
            options: ["通过", "遇到", "脱离", "抓住"],
            answer: "遇到",
          },
          {
            id: 5,
            question: "“Turn on”这个短语动词的意思是什么？",
            options: ["打开", "关闭", "扔掉", "呼叫"],
            answer: "打开",
          },
          {
            id: 6,
            question: "“Put off”这个短语动词的意思是什么？",
            options: ["放下", "推迟", "着火", "延长"],
            answer: "推迟",
          },
          {
            id: 7,
            question: "“Go on”这个短语动词的意思是什么？",
            options: ["停止", "继续", "倒退", "降落"],
            answer: "继续",
          },
          {
            id: 8,
            question: "“Bring up”这个短语动词的意思是什么？",
            options: ["带来", "举起", "养育", "抚养"],
            answer: "养育",
          },
          {
            id: 9,
            question: "“Call off”这个短语动词的意思是什么？",
            options: ["打电话", "撤销", "呼叫", "叫醒"],
            answer: "撤销",
          },
        ],
      },
      {
        topic: "idioms",
        questions: [
          {
            id: 0,
            question: "“画蛇添足”这个成语的意思是什么？",
            options: [
              "画一条蛇并加上脚",
              "做事过分，反而弄巧成拙",
              "画一只蛇",
              "画一条长长的蛇",
            ],
            answer: "做事过分，反而弄巧成拙",
          },
          {
            id: 1,
            question: "“半途而废”这个成语的意思是什么？",
            options: ["中途停下来", "坚持不懈", "坚决完成任务", "一直努力"],
            answer: "中途停下来",
          },
          {
            id: 2,
            question: "“一鸣惊人”这个成语的意思是什么？",
            options: ["一声巨响", "一声尖叫", "一次惊人的表现", "一次失败"],
            answer: "一次惊人的表现",
          },
          {
            id: 3,
            question: "“班门弄斧”这个成语的意思是什么？",
            options: [
              "弄坏了斧头",
              "在行家面前卖弄本领",
              "随手拿斧头",
              "弄丢了斧头",
            ],
            answer: "在行家面前卖弄本领",
          },
          {
            id: 4,
            question: "“对牛弹琴”这个成语的意思是什么？",
            options: [
              "对着牛弹奏音乐",
              "对不懂的人说话",
              "对不懂事的人讲道理",
              "对不懂的人演奏音乐",
            ],
            answer: "对不懂事的人讲道理",
          },
          {
            id: 5,
            question: "“画龙点睛”这个成语的意思是什么？",
            options: [
              "画一条龙",
              "画一只龙并点亮了眼睛",
              "画一只龙并加上嘴巴",
              "画了一只龙",
            ],
            answer: "画一只龙并点亮了眼睛",
          },
          {
            id: 6,
            question: "“杯弓蛇影”这个成语的意思是什么？",
            options: [
              "杯子里倒着弓箭和蛇",
              "指杯子中弓箭和蛇的影子",
              "指一些虚假的危险",
              "指一些真实的危险",
            ],
            answer: "指一些虚假的危险",
          },
          {
            id: 7,
            question: "“一窍不通”这个成语的意思是什么？",
            options: [
              "所有窍门都通了",
              "一个窍门都不通",
              "所有的机会都错过了",
              "所有窍门都封闭了",
            ],
            answer: "一个窍门都不通",
          },
          {
            id: 8,
            question: "“不耻下问”这个成语的意思是什么？",
            options: [
              "不愿意问问题",
              "不愿意学习",
              "不会问问题",
              "不以向下请教为耻",
            ],
            answer: "不以向下请教为耻",
          },
          {
            id: 9,
            question: "“守株待兔”这个成语的意思是什么？",
            options: [
              "等待兔子来吃树",
              "等待兔子跳过树",
              "坐等成功而不积极努力",
              "等待兔子来吃根",
            ],
            answer: "坐等成功而不积极努力",
          },
        ],
      },

      {
        topic: "Active and Passive voice",
        questions: [
          {
            id: 0,
            question: "下列句子的间接引语版本是什么？",
            options: [
              '"我很忙，" 她说。',
              "她说她很忙。",
              "她很忙，她说。",
              '她说："我很忙。"',
            ],
            answer: "她说她很忙。",
          },
          {
            id: 1,
            question: '"我会帮你"的间接引语是什么？',
            options: [
              "他说他会帮助我。",
              "他说他能帮助我。",
              "他说他将会帮助我。",
              "他说他可以帮助我。",
            ],
            answer: "他说他会帮助我。",
          },
          {
            id: 2,
            question: "下列句子的直接引语是什么？",
            options: [
              "他说他将去北京。",
              '"我明天会去北京，" 他说。',
              '他说："我将去北京。"',
              "他说他将要去北京。",
            ],
            answer: '他说："我将去北京。"',
          },
          {
            id: 3,
            question: '"我会和你一起去"的间接引语是什么？',
            options: [
              "他说他将和我一起去。",
              "他说他可以和我一起去。",
              "他说他将可以和我一起去。",
              "他说他会和我一起去。",
            ],
            answer: "他说他将和我一起去。",
          },
          {
            id: 4,
            question: '"我喜欢游泳"的间接引语是什么？',
            options: [
              "她说她喜欢游泳。",
              "她说她会喜欢游泳。",
              "她说她能喜欢游泳。",
              "她说她可以喜欢游泳。",
            ],
            answer: "她说她喜欢游泳。",
          },
          {
            id: 5,
            question: "下列句子的直接引语是什么？",
            options: [
              '"我喜欢这本书，" 她说。',
              "她说她喜欢这本书。",
              "她喜欢这本书，她说。",
              '她说："我喜欢这本书。"',
            ],
            answer: '她说："我喜欢这本书。"',
          },
          {
            id: 6,
            question: "下列句子的直接引语是什么？",
            options: [
              "他说他会来参加派对。",
              '"我会来参加派对，" 他说。',
              "他说他将来参加派对。",
              "他说他可以来参加派对。",
            ],
            answer: '"我会来参加派对，" 他说。',
          },
          {
            id: 7,
            question: '"你明天会做什么"的间接引语是什么？',
            options: [
              "他问我明天会做什么。",
              "他问我将会明天做什么。",
              "他问我是否明天会做什么。",
              "他问我将会做些什么明天。",
            ],
            answer: "他问我明天会做什么。",
          },
          {
            id: 8,
            question: '"我要去看电影"的间接引语是什么？',
            options: [
              "她说她想去看电影。",
              "她说她会去看电影。",
              "她说她将去看电影。",
              "她说她可以去看电影。",
            ],
            answer: "她说她将去看电影。",
          },
          {
            id: 9,
            question: '这封信是由约翰写的"的主动语态是什么？',
            options: [
              "约翰被写这封信。",
              "约翰写了这封信。",
              "约翰正在写这封信。",
              "这封信是由约翰写的。",
            ],
            answer: "约翰写了这封信。",
          },
        ],
      },
      {
        topic: "Direct and Indirect speech",
        questions: [
          {
            id: 0,
            question: "下列句子中，哪个是被动语态？",
            options: [
              "猫追逐老鼠。",
              "老鼠被猫追逐。",
              "老鼠追逐猫。",
              "猫追逐老鼠的。",
            ],
            answer: "老鼠被猫追逐。",
          },
          {
            id: 1,
            question: '把句子 "她每天唱一首歌" 改写为被动语态。',
            options: [
              "每天唱一首歌。",
              "她每天被唱一首歌。",
              "每天一首歌被她唱。",
              "每天一首歌唱她。",
            ],
            answer: "每天一首歌被她唱。",
          },
          {
            id: 2,
            question: "下列句子中，哪个是主动语态？",
            options: [
              "这本书被她读了。",
              "他洗了车。",
              "她每天写一封信。",
              "这封信被他写了。",
            ],
            answer: "她每天写一封信。",
          },
          {
            id: 3,
            question: '把句子 "这本书被玛丽读了" 改写为主动语态。',
            options: [
              "玛丽读了这本书。",
              "玛丽正在读这本书。",
              "这本书读了玛丽。",
              "这本书正在被玛丽读。",
            ],
            answer: "玛丽读了这本书。",
          },
          {
            id: 4,
            question: '把句子 "蛋糕被我妈妈烤了" 改写为主动语态。',
            options: [
              "我妈妈正在烤蛋糕。",
              "我妈妈烤了蛋糕。",
              "蛋糕烤了我妈妈。",
              "蛋糕正在被我妈妈烤。",
            ],
            answer: "我妈妈烤了蛋糕。",
          },
          {
            id: 5,
            question: '把句子 "窗户被棒球打破了" 改写为被动语态。',
            options: [
              "棒球打破了窗户。",
              "窗户被棒球打破了。",
              "窗户正在被棒球打破。",
              "窗户被棒球打破。",
            ],
            answer: "窗户被棒球打破了。",
          },
          {
            id: 6,
            question: "下列句子中，哪个是被动语态？",
            options: [
              "她正在吃午饭。",
              "她的午饭正在被她吃。",
              "她每天吃午饭。",
              "她的午饭被她吃了。",
            ],
            answer: "她的午饭正在被她吃。",
          },
          {
            id: 7,
            question: '把句子 "故事被我爷爷讲了" 改写为主动语态。',
            options: [
              "我爷爷讲了故事。",
              "我爷爷正在讲故事。",
              "故事讲了我爷爷。",
              "故事正在被我爷爷讲。",
            ],
            answer: "我爷爷讲了故事。",
          },
          {
            id: 8,
            question: '把句子 "这栋大楼将在月底拆除" 改写为主动语态。',
            options: [
              "月底将拆除这栋大楼。",
              "这栋大楼将在月底拆除。",
              "月底将这栋大楼拆除。",
              "月底将拆除那栋大楼。",
            ],
            answer: "月底将拆除这栋大楼。",
          },
          {
            id: 9,
            question: "下列句子中，哪个是主动语态？",
            options: [
              "蛋糕被孩子们吃了。",
              "孩子们吃了蛋糕。",
              "蛋糕正在被孩子们吃。",
              "蛋糕被吃了。",
            ],
            answer: "孩子们吃了蛋糕。",
          },
        ],
      },
      {
        topic: "vocabulary",
        questions: [
          {
            id: 0,
            question: "匆忙这个词的意思是什么？",
            options: ["缓慢", "愤怒", "急迫", "冷漠"],
            answer: "急迫",
          },
          {
            id: 1,
            question: "悲观这个词的近义词是什么？",
            options: ["乐观", "喜悦", "哀伤", "轻松"],
            answer: "乐观",
          },
          {
            id: 2,
            question: "勤奋这个词的反义词是什么？",
            options: ["懒惰", "热情", "精明", "谨慎"],
            answer: "懒惰",
          },
          {
            id: 3,
            question: "繁荣这个词的意思是什么？",
            options: ["衰退", "发达", "贫穷", "沉寂"],
            answer: "发达",
          },
          {
            id: 4,
            question: "难以置信这个词组的意思是什么？",
            options: ["明显", "可信", "令人信服", "不可思议"],
            answer: "不可思议",
          },
          {
            id: 5,
            question: "欢快这个词的近义词是什么？",
            options: ["伤心", "悲伤", "高兴", "愤怒"],
            answer: "高兴",
          },
          {
            id: 6,
            question: "害羞这个词的反义词是什么？",
            options: ["自信", "大胆", "内向", "胆怯"],
            answer: "大胆",
          },
          {
            id: 7,
            question: "忧郁这个词的意思是什么？",
            options: ["开心", "悲伤", "愤怒", "轻松"],
            answer: "悲伤",
          },
          {
            id: 8,
            question: "挑剔这个词的近义词是什么？",
            options: ["耐心", "宽容", "挑剔", "满足"],
            answer: "挑剔",
          },
          {
            id: 9,
            question: "温和这个词的反义词是什么？",
            options: ["寒冷", "暴力", "粗暴", "恶劣"],
            answer: "粗暴",
          },
        ],
      },
    ],
  },
  {
    language: "russian",
    topics: [
      {
        topic: "Parts of Speech",
        questions: [
          {
            id: 0,
            question: "What part of speech describes actions or states?",
            options: [
              "Существительное (Noun)",
              "Глагол (Verb)",
              "Прилагательное (Adjective)",
              "Наречие (Adverb)",
            ],
            answer: "Глагол (Verb)",
          },
          {
            id: 1,
            question:
              "Which part of speech describes qualities or attributes of nouns?",
            options: [
              "Предлог (Preposition)",
              "Местоимение (Pronoun)",
              "Прилагательное (Adjective)",
              " Глагол (Verb)",
            ],
            answer: "Прилагательное (Adjective)",
          },
          {
            id: 2,
            question:
              "Which part of speech connects words, phrases, or clauses?",
            options: [
              "Союз (Conjunction)",
              " Глагол (Verb)",
              "Местоимение (Pronoun)",
              " Наречие (Adverb)",
            ],
            answer: "Союз (Conjunction)",
          },
          {
            id: 3,
            question:
              "Which part of speech expresses a specific person, place, thing, or idea?",
            options: [
              "Существительное (Noun)",
              "  Прилагательное (Adjective)",
              " Глагол (Verb)",
              " Местоимение (Pronoun)",
            ],
            answer: "Существительное (Noun)",
          },
          {
            id: 4,
            question:
              "Which part of speech modifies or describes verbs, adjectives, or other adverbs?",
            options: [
              " Союз (Conjunction)",
              " Наречие (Adverb)",
              " Предлог (Preposition)",
              " Прилагательное (Adjective)",
            ],
            answer: "Наречие (Adverb)",
          },
          {
            id: 5,
            question:
              "What part of speech replaces a noun to avoid repetition?",
            options: [
              "Прилагательное (Adjective)",
              " Местоимение (Pronoun)",
              "  Глагол (Verb)",
              " Существительное (Noun)",
            ],
            answer: "Местоимение (Pronoun)",
          },
          {
            id: 6,
            question:
              "Which part of speech indicates the relationship between a noun (or pronoun) and other words in a sentence?",
            options: [
              "Прилагательное (Adjective)",
              " Глагол (Verb)",
              "Предлог (Preposition)",
              "  Союз (Conjunction)",
            ],
            answer: "Предлог (Preposition)",
          },
          {
            id: 7,
            question:
              "What part of speech expresses a feeling, emotion, or state of being?",
            options: [
              "Существительное (Noun)",
              "Наречие (Adverb)",
              "Прилагательное (Adjective)",
              "Глагол (Verb)",
            ],
            answer: " Глагол (Verb)",
          },
          {
            id: 8,
            question:
              "Which part of speech shows the relationship between two clauses in a sentence?",
            options: [
              "Союз (Conjunction)",
              "Предлог (Preposition)",
              "Наречие (Adverb)",
              "Местоимение (Pronoun)",
            ],
            answer: "Союз (Conjunction)",
          },
          {
            id: 9,
            question: "What part of speech modifies or describes nouns?",
            options: [
              "Существительное (Noun)",
              "Прилагательное (Adjective)",
              "Глагол (Verb)",
              "Местоимение (Pronoun)",
            ],
            answer: "Прилагательное (Adjective)",
          },
        ],
      },
      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question:
              "Which tense is used to express actions that are happening right now?",
            options: [
              "Прошедшее время (Past tense)",
              "Будущее время (Future tense)",
              "Настоящее время (Present tense)",
              "Совершенное время (Perfect tense)",
            ],
            answer: "Настоящее время (Present tense)",
          },
          {
            id: 1,
            question:
              "Which tense is used to describe actions that will happen in the future?",
            options: [
              "Прошедшее время (Past tense)",
              "Настоящее время (Present tense)",
              "Будущее время (Future tense)",
              "Совершенное время (Perfect tense)",
            ],
            answer: "Будущее время (Future tense)",
          },
          {
            id: 2,
            question:
              "Which tense is used to express completed actions in the past?",
            options: [
              "Будущее время (Future tense)",
              "Совершенное время (Perfect tense)",
              "Настоящее время (Present tense)",
              "Прошедшее время (Past tense)",
            ],
            answer: "Прошедшее время (Past tense)",
          },
          {
            id: 3,
            question:
              "Which tense is used to indicate actions that have been completed by a certain point in the past?",
            options: [
              "Прошедшее время (Past tense)",
              "Будущее время (Future tense)",
              "Совершенное время (Perfect tense)",
              "Настоящее время (Present tense)",
            ],
            answer: "Совершенное время (Perfect tense)",
          },
          {
            id: 4,
            question:
              "Which tense is used to describe ongoing actions in the past?",
            options: [
              "Настоящее время (Present tense)",
              "Будущее время (Future tense)",
              "Прошедшее время (Past tense)",
              "Перфект (Perfect tense)",
            ],
            answer: "Прошедшее время (Past tense)",
          },
          {
            id: 5,
            question:
              "Which tense is used to express actions that happened before another past action?",
            options: [
              "Прошедшее время (Past tense)",
              "Совершенное время (Perfect tense)",
              "Будущее время (Future tense)",
              "Перфект (Perfect tense)",
            ],
            answer: "Совершенное время (Perfect tense)",
          },
          {
            id: 6,
            question:
              "Which tense is used to describe actions that were ongoing at a specific point in the past?",
            options: [
              "Настоящее время (Present tense)",
              "Прошедшее время (Past tense)",
              "Совершенное время (Perfect tense)",
              "Будущее время (Future tense)",
            ],
            answer: "Настоящее время (Present tense)",
          },
          {
            id: 7,
            question:
              "Which tense is used to express an action that will have been completed by a certain point in the future?",
            options: [
              "Совершенное время (Perfect tense)",
              "Настоящее время (Present tense)",
              "Будущее время (Future tense)",
              "Прошедшее время (Past tense)",
            ],
            answer: "Совершенное время (Perfect tense)",
          },
          {
            id: 8,
            question:
              "Which tense is used to describe actions that were habitual or repeated in the past?",
            options: [
              "Настоящее время (Present tense)",
              "Прошедшее время (Past tense)",
              "Совершенное время (Perfect tense)",
              "Будущее время (Future tense)",
            ],
            answer: "Прошедшее время (Past tense)",
          },
          {
            id: 9,
            question:
              "Which tense is used to express an action that will occur over a period of time in the future?",
            options: [
              "Настоящее время (Present tense)",
              "Совершенное время (Perfect tense)",
              "Прошедшее время (Past tense)",
              "Будущее время (Future tense)",
            ],
            answer: "Будущее время (Future tense)",
          },
        ],
      },
      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question: "What is the indefinite article in Russian?",
            options: ["the", "a (singular)", "an (singular)", "some"],
            answer: "a (singular)",
          },
          {
            id: 1,
            question:
              "Which of the following nouns does not require an article in Russian?",
            options: [
              "Собака (dog)",
              "Яблоко (apple)",
              "Дом (house)",
              "Город (city)",
            ],
            answer: "Дом (house)",
          },
          {
            id: 2,
            question:
              "How is the definite article 'the' translated into Russian?",
            options: [
              "the (singular)",
              "a (singular)",
              "an (singular)",
              "No equivalent in Russian",
            ],
            answer: "No equivalent in Russian",
          },
          {
            id: 3,
            question:
              "Which case is used with the definite article in Russian?",
            options: ["Nominative", "Accusative", "Genitive", "Prepositional"],
            answer: "Nominative",
          },
          {
            id: 4,
            question:
              "How is the indefinite article 'a/an' translated into Russian?",
            options: [
              "the (singular)",
              "a (singular)",
              "an (singular)",
              "No equivalent in Russian",
            ],
            answer: "No equivalent in Russian",
          },
          {
            id: 5,
            question:
              "Which gender do Russian nouns have that affects the choice of the article?",
            options: ["Masculine", "Feminine", "Neuter", "All of the above"],
            answer: "All of the above",
          },
          {
            id: 6,
            question:
              "Which article is used with masculine singular nouns in the nominative case?",
            options: ["Один", "Одна", "Одно", "No article"],
            answer: "No article",
          },
          {
            id: 7,
            question:
              "Which article is used with feminine singular nouns in the nominative case?",
            options: ["Один", "Одна", "Одно", "No article"],
            answer: "Одна",
          },
          {
            id: 8,
            question:
              "Which article is used with neuter singular nouns in the nominative case?",
            options: ["Один", "Одна", "Одно", "No article"],
            answer: "Одно",
          },
          {
            id: 9,
            question:
              "What is the plural form of the indefinite article in Russian?",
            options: ["Несколько", "Много", "Некоторые", "No plural form"],
            answer: "No plural form",
          },
        ],
      },
      {
        topic: "Synonyms (Синонимы)",
        questions: [
          {
            id: 0,
            question: "What is the indefinite article in Russian?",
            options: [
              "the (определенный)",
              "a (единственное число)",
              "an (единственное число)",
              "some (несколько)",
            ],
            answer: "a (единственное число)",
          },
          {
            id: 1,
            question:
              "Which of the following nouns does not require an article in Russian?",
            options: [
              "Собака (собака)",
              "Яблоко (яблоко)",
              "Дом (дом)",
              "Город (город)",
            ],
            answer: "Дом (дом)",
          },
          {
            id: 2,
            question:
              "How is the definite article 'the' translated into Russian?",
            options: [
              "the (определенный)",
              "a (единственное число)",
              "an (единственное число)",
              "No equivalent in Russian (Эквивалент отсутствует в русском языке)",
            ],
            answer:
              "No equivalent in Russian (Эквивалент отсутствует в русском языке)",
          },
          {
            id: 3,
            question:
              "Which case is used with the definite article in Russian?",
            options: [
              "Nominative (Именительный падеж)",
              "Accusative (Винительный падеж)",
              "Genitive (Родительный падеж)",
              "Prepositional (Предложный падеж)",
            ],
            answer: "Nominative (Именительный падеж)",
          },
          {
            id: 4,
            question:
              "How is the indefinite article 'a/an' translated into Russian?",
            options: [
              "the (определенный)",
              "a (единственное число)",
              "an (единственное число)",
              "No equivalent in Russian (Эквивалент отсутствует в русском языке)",
            ],
            answer:
              "No equivalent in Russian (Эквивалент отсутствует в русском языке)",
          },
          {
            id: 5,
            question:
              "Which gender do Russian nouns have that affects the choice of the article?",
            options: [
              "Masculine (Мужской)",
              "Feminine (Женский)",
              "Neuter (Средний)",
              "All of the above (Все вышеперечисленные)",
            ],
            answer: "All of the above (Все вышеперечисленные)",
          },
          {
            id: 6,
            question:
              "Which article is used with masculine singular nouns in the nominative case?",
            options: [
              "Один (Единственное число)",
              "Одна (Единственное число)",
              "Одно (Единственное число)",
              "No article (Нет артикля)",
            ],
            answer: "No article (Нет артикля)",
          },
          {
            id: 7,
            question:
              "Which article is used with feminine singular nouns in the nominative case?",
            options: [
              "Один (Единственное число)",
              "Одна (Единственное число)",
              "Одно (Единственное число)",
              "No article (Нет артикля)",
            ],
            answer: "Одна (Единственное число)",
          },
          {
            id: 8,
            question:
              "Which article is used with neuter singular nouns in the nominative case?",
            options: [
              "Один (Единственное число)",
              "Одна (Единственное число)",
              "Одно (Единственное число)",
              "No article (Нет артикля)",
            ],
            answer: "Одно (Единственное число)",
          },
          {
            id: 9,
            question:
              "What is the plural form of the indefinite article in Russian?",
            options: [
              "Несколько (Several)",
              "Много (Many)",
              "Некоторые (Some)",
              "No plural form (Нет формы множественного числа)",
            ],
            answer: "No plural form (Нет формы множественного числа)",
          },
        ],
      },

      {
        topic: "Punctuation (Пунктуация)",
        questions: [
          {
            id: 0,
            question:
              "What punctuation mark is used to indicate the end of a sentence?",
            options: [
              "Точка (.)",
              "Запятая (,)",
              "Вопросительный знак (?)",
              "Восклицательный знак (!)",
            ],
            answer: "Точка (.)",
          },
          {
            id: 1,
            question:
              "Which punctuation mark is used to separate items in a list?",
            options: [
              "Двоеточие (:)",
              "Точка с запятой (;)",
              "Запятая (,)",
              "Тире (—)",
            ],
            answer: "Запятая (,)",
          },
          {
            id: 2,
            question:
              "What punctuation mark is used to indicate a pause or break in a sentence?",
            options: ["Точка (.)", "Запятая (,)", "Дефис (-)", "Тире (—)"],
            answer: "Запятая (,)",
          },
          {
            id: 3,
            question:
              "Which punctuation mark is used to indicate possession or a contraction?",
            options: [
              "Апостроф (')",
              'Кавычки (")',
              "Двоеточие (:)",
              "Точка с запятой (;)",
            ],
            answer: "Апостроф (')",
          },
          {
            id: 4,
            question:
              "What punctuation mark is used to enclose a direct quotation?",
            options: [
              "Круглые скобки ( )",
              'Кавычки (")',
              "Квадратные скобки [ ]",
              "Дефис (-)",
            ],
            answer: 'Кавычки (")',
          },
          {
            id: 5,
            question:
              "Which punctuation mark is used to indicate an interruption or an abrupt change in thought?",
            options: [
              "Точка с запятой (;)",
              "Двоеточие (:)",
              "Тире (—)",
              "Восклицательный знак (!)",
            ],
            answer: "Тире (—)",
          },
          {
            id: 6,
            question:
              "What punctuation mark is used to indicate a statement that is a question?",
            options: [
              "Точка (.)",
              "Запятая (,)",
              "Вопросительный знак (?)",
              "Восклицательный знак (!)",
            ],
            answer: "Вопросительный знак (?)",
          },
          {
            id: 7,
            question:
              "Which punctuation mark is used to introduce a list, explanation, or example?",
            options: ["Точка (.)", "Запятая (,)", "Двоеточие (:)", "Тире (—)"],
            answer: "Двоеточие (:)",
          },
          {
            id: 8,
            question:
              "What punctuation mark is used to indicate emphasis or strong emotion?",
            options: [
              "Круглые скобки ( )",
              'Кавычки (")',
              "Восклицательный знак (!)",
              "Тире (—)",
            ],
            answer: "Восклицательный знак (!)",
          },
        ],
      },
      {
        topic: "Phrasal Verbs (Фразовые глаголы)",
        questions: [
          {
            id: 0,
            question: 'What is the meaning of the phrasal verb "break down"?',
            options: ["Падать", "Разбивать", "Ломаться", "Пропускать"],
            answer: "Ломаться",
          },
          {
            id: 1,
            question: 'Which phrasal verb means "to start crying"?',
            options: [
              "Set up (Настроить)",
              "Break out (Взломать)",
              "Break down (Ломаться)",
              "Burst into tears (Разрыдаться)",
            ],
            answer: "Burst into tears (Разрыдаться)",
          },
          {
            id: 2,
            question: 'What does the phrasal verb "put off" mean?',
            options: ["Откладывать", "Одеваться", "Выключить", "Продлить"],
            answer: "Откладывать",
          },
          {
            id: 3,
            question: 'Which phrasal verb means "to continue doing something"?',
            options: [
              "Give up (Сдаваться)",
              "Carry on (Продолжать)",
              "Take off (Снимать)",
              "Put on (Надевать)",
            ],
            answer: "Carry on (Продолжать)",
          },
          {
            id: 4,
            question: 'What is the meaning of the phrasal verb "get over"?',
            options: ["Получать", "Вставать", "Переболеть", "Принимать"],
            answer: "Переболеть",
          },
          {
            id: 5,
            question: 'Which phrasal verb means "to stop doing something"?',
            options: [
              "Break up (Расставаться)",
              "Carry on (Продолжать)",
              "Give up (Сдаваться)",
              "Set up (Настроить)",
            ],
            answer: "Give up (Сдаваться)",
          },
          {
            id: 6,
            question: 'What does the phrasal verb "go on" mean?',
            options: ["Уходить", "Происходить", "Идти", "Продолжать"],
            answer: "Продолжать",
          },
          {
            id: 7,
            question:
              'Which phrasal verb means "to become friends again after an argument"?',
            options: [
              "Break up (Расставаться)",
              "Make up (Мириться)",
              "Set up (Настроить)",
              "Take off (Снимать)",
            ],
            answer: "Make up (Мириться)",
          },
          {
            id: 8,
            question: 'What is the meaning of the phrasal verb "take off"?',
            options: ["Взлетать", "Снимать", "Вставать", "Остановиться"],
            answer: "Взлетать",
          },
          {
            id: 9,
            question: 'Which phrasal verb means "to leave a place quickly"?',
            options: [
              "Take off (Взлетать)",
              "Get off (Сходить)",
              "Run away (Убегать)",
              "Go out (Уходить)",
            ],
            answer: "Run away (Убегать)",
          },
        ],
      },
      {
        topic: "Idioms (Идиомы)",
        questions: [
          {
            id: 0,
            question: 'What does the idiom "kick the bucket" mean?',
            options: [
              "Перестать дышать",
              "Переместить ведро",
              "Споткнуться о ведро",
              "Поднять ведро",
            ],
            answer: "Перестать дышать",
          },
          {
            id: 1,
            question: 'What does the idiom "to spill the beans" mean?',
            options: [
              "Рассказать секрет",
              "Разлить фасоль",
              "Залить бобы",
              "Разбить банку",
            ],
            answer: "Рассказать секрет",
          },
          {
            id: 2,
            question: 'What does the idiom "cost an arm and a leg" mean?',
            options: [
              "Стоить мало",
              "Быть очень дорогим",
              "Потерять конечности",
              "Купить руку и ногу",
            ],
            answer: "Быть очень дорогим",
          },
          {
            id: 3,
            question:
              'What is the meaning of the idiom "hit the nail on the head"?',
            options: [
              "Попасть молотком по гвоздю",
              "Сделать ошибку",
              "Точно выразить мысль",
              "Удариться головой о стену",
            ],
            answer: "Точно выразить мысль",
          },
          {
            id: 4,
            question: 'What does the idiom "break the ice" mean?',
            options: [
              "Разбить лёд",
              "Разогреться",
              "Продлить разговор",
              "Начать общение",
            ],
            answer: "Начать общение",
          },
          {
            id: 5,
            question: 'What does the idiom "to go the extra mile" mean?',
            options: [
              "Идти на дальние расстояния",
              "Продолжать усилия",
              "Улучшить свои навыки",
              "Совершать меньше усилий",
            ],
            answer: "Продолжать усилия",
          },
          {
            id: 6,
            question: 'What does the idiom "barking up the wrong tree" mean?',
            options: [
              "Лаять на дерево",
              "Делать что-то неправильно",
              "Определиться с выбором",
              "Поощрять заблуждение",
            ],
            answer: "Делать что-то неправильно",
          },
          {
            id: 7,
            question: 'What is the meaning of the idiom "piece of cake"?',
            options: [
              "Кусок торта",
              "Сложная задача",
              "Легкая задача",
              "Обеденный перерыв",
            ],
            answer: "Легкая задача",
          },
          {
            id: 8,
            question: 'What does the idiom "under the weather" mean?',
            options: [
              "Под небесами",
              "В хорошем настроении",
              "Под плохим настроением",
              "Плохого здоровья",
            ],
            answer: "Плохого здоровья",
          },
          {
            id: 9,
            question: 'What does the idiom "hit the sack" mean?',
            options: [
              "Бить по мешку",
              "Лечь спать",
              "Упасть на сеновал",
              "Посадить на мешок",
            ],
            answer: "Лечь спать",
          },
        ],
      },
      {
        topic: "Active and Passive Voice (Активный и Пассивный Залог)",
        questions: [
          {
            id: 0,
            question: "What is the active voice in Russian?",
            options: [
              "Действительный залог",
              "Страдательный залог",
              "Пассивный залог",
              "Активный залог",
            ],
            answer: "Действительный залог",
          },
          {
            id: 1,
            question:
              "Which voice emphasizes the action performed by the subject in a sentence?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Active voice (Активный залог)",
          },
          {
            id: 2,
            question: "What is the passive voice in Russian?",
            options: [
              "Действительный залог",
              "Страдательный залог",
              "Пассивный залог",
              "Активный залог",
            ],
            answer: "Страдательный залог",
          },
          {
            id: 3,
            question:
              "Which voice is used when the subject of a sentence is the recipient of the action?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Passive voice (Пассивный залог)",
          },
          {
            id: 4,
            question:
              "What is the term for a sentence where the subject performs the action?",
            options: [
              "Passive sentence (Пассивное предложение)",
              "Active sentence (Активное предложение)",
              "Imperative sentence (Повелительное предложение)",
              "Complex sentence (Сложное предложение)",
            ],
            answer: "Active sentence (Активное предложение)",
          },
          {
            id: 5,
            question:
              "Which voice is commonly used in scientific writing to emphasize the action rather than the doer?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Passive voice (Пассивный залог)",
          },
          {
            id: 6,
            question:
              "What is the typical structure of a passive sentence in Russian?",
            options: [
              "Subject + Verb + Object",
              "Object + Verb + Subject",
              "Verb + Subject + Object",
              "Subject + Object + Verb",
            ],
            answer: "Object + Verb + Subject",
          },
          {
            id: 7,
            question:
              "In a passive sentence, what part of the sentence usually becomes the subject?",
            options: [
              "Direct object (Прямой объект)",
              "Indirect object (Косвенный объект)",
              "Verb (Глагол)",
              "Adjective (Прилагательное)",
            ],
            answer: "Direct object (Прямой объект)",
          },
          {
            id: 8,
            question:
              "Which voice is often used in news headlines to make them more concise and impactful?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Active voice (Активный залог)",
          },
          {
            id: 9,
            question:
              "What is the term for a sentence where the subject receives the action?",
            options: [
              "Passive sentence (Пассивное предложение)",
              "Active sentence (Активное предложение)",
              "Imperative sentence (Повелительное предложение)",
              "Complex sentence (Сложное предложение)",
            ],
            answer: "Passive sentence (Пассивное предложение)",
          },
        ],
      },
      {
        topic: "Active and Passive Voice (Активный и Пассивный Залог)",
        questions: [
          {
            id: 0,
            question: "What is the active voice in Russian?",
            options: [
              "Действительный залог",
              "Страдательный залог",
              "Пассивный залог",
              "Активный залог",
            ],
            answer: "Действительный залог",
          },
          {
            id: 1,
            question:
              "Which voice emphasizes the action performed by the subject in a sentence?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Active voice (Активный залог)",
          },
          {
            id: 2,
            question: "What is the passive voice in Russian?",
            options: [
              "Действительный залог",
              "Страдательный залог",
              "Пассивный залог",
              "Активный залог",
            ],
            answer: "Страдательный залог",
          },
          {
            id: 3,
            question:
              "Which voice is used when the subject of a sentence is the recipient of the action?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Passive voice (Пассивный залог)",
          },
          {
            id: 4,
            question:
              "What is the term for a sentence where the subject performs the action?",
            options: [
              "Passive sentence (Пассивное предложение)",
              "Active sentence (Активное предложение)",
              "Imperative sentence (Повелительное предложение)",
              "Complex sentence (Сложное предложение)",
            ],
            answer: "Active sentence (Активное предложение)",
          },
          {
            id: 5,
            question:
              "Which voice is commonly used in scientific writing to emphasize the action rather than the doer?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Passive voice (Пассивный залог)",
          },
          {
            id: 6,
            question:
              "What is the typical structure of a passive sentence in Russian?",
            options: [
              "Subject + Verb + Object",
              "Object + Verb + Subject",
              "Verb + Subject + Object",
              "Subject + Object + Verb",
            ],
            answer: "Object + Verb + Subject",
          },
          {
            id: 7,
            question:
              "In a passive sentence, what part of the sentence usually becomes the subject?",
            options: [
              "Direct object (Прямой объект)",
              "Indirect object (Косвенный объект)",
              "Verb (Глагол)",
              "Adjective (Прилагательное)",
            ],
            answer: "Direct object (Прямой объект)",
          },
          {
            id: 8,
            question:
              "Which voice is often used in news headlines to make them more concise and impactful?",
            options: [
              "Active voice (Активный залог)",
              "Passive voice (Пассивный залог)",
              "Reflexive voice (Возвратный залог)",
              "Imperative voice (Повелительное наклонение)",
            ],
            answer: "Active voice (Активный залог)",
          },
          {
            id: 9,
            question:
              "What is the term for a sentence where the subject receives the action?",
            options: [
              "Passive sentence (Пассивное предложение)",
              "Active sentence (Активное предложение)",
              "Imperative sentence (Повелительное предложение)",
              "Complex sentence (Сложное предложение)",
            ],
            answer: "Passive sentence (Пассивное предложение)",
          },
        ],
      },
      {
        topic: "Direct and Indirect Speech (Прямая и Косвенная Речь)",
        questions: [
          {
            id: 0,
            question: "What is direct speech in Russian?",
            options: [
              "Прямая речь",
              "Косвенная речь",
              "Непосредственная речь",
              "Непрямая речь",
            ],
            answer: "Прямая речь",
          },
          {
            id: 1,
            question:
              "Which type of speech presents the exact words spoken by someone?",
            options: [
              "Direct speech (Прямая речь)",
              "Indirect speech (Косвенная речь)",
              "Reported speech (Описанная речь)",
              "Narrated speech (Рассказанная речь)",
            ],
            answer: "Direct speech (Прямая речь)",
          },
          {
            id: 2,
            question: "What is indirect speech in Russian?",
            options: [
              "Прямая речь",
              "Косвенная речь",
              "Непосредственная речь",
              "Непрямая речь",
            ],
            answer: "Косвенная речь",
          },
          {
            id: 3,
            question:
              "Which type of speech reports what someone said without using their exact words?",
            options: [
              "Direct speech (Прямая речь)",
              "Indirect speech (Косвенная речь)",
              "Reported speech (Описанная речь)",
              "Narrated speech (Рассказанная речь)",
            ],
            answer: "Indirect speech (Косвенная речь)",
          },
          {
            id: 4,
            question:
              "What is the term for a sentence that presents the words spoken by someone?",
            options: [
              "Reported sentence (Описанное предложение)",
              "Direct sentence (Прямое предложение)",
              "Indirect sentence (Косвенное предложение)",
              "Narrated sentence (Рассказанное предложение)",
            ],
            answer: "Direct sentence (Прямое предложение)",
          },
          {
            id: 5,
            question:
              "Which type of speech is commonly used when summarizing or paraphrasing what someone said?",
            options: [
              "Direct speech (Прямая речь)",
              "Indirect speech (Косвенная речь)",
              "Reported speech (Описанная речь)",
              "Narrated speech (Рассказанная речь)",
            ],
            answer: "Indirect speech (Косвенная речь)",
          },
          {
            id: 6,
            question:
              "What is the typical structure of an indirect speech sentence in Russian?",
            options: [
              "Сказал(а) + прямая речь",
              "Прямая речь + сказал(а)",
              "Прямая речь + глагол в косвенной форме",
              "Сказал(а) + косвенная речь",
            ],
            answer: "Прямая речь + глагол в косвенной форме",
          },
          {
            id: 7,
            question:
              "In indirect speech, what changes with respect to the verb tense?",
            options: [
              "Tense remains the same (Время не меняется)",
              "Tense shifts to present tense (Время переходит в настоящее)",
              "Tense shifts to future tense (Время переходит в будущее)",
              "Tense shifts according to context (Время меняется в зависимости от контекста)",
            ],
            answer:
              "Tense shifts according to context (Время меняется в зависимости от контекста)",
          },
          {
            id: 8,
            question:
              "Which type of speech is often used in storytelling to convey dialogue?",
            options: [
              "Direct speech (Прямая речь)",
              "Indirect speech (Косвенная речь)",
              "Reported speech (Описанная речь)",
              "Narrated speech (Рассказанная речь)",
            ],
            answer: "Direct speech (Прямая речь)",
          },
          {
            id: 9,
            question:
              "What is the term for a sentence that reports what someone said without using their exact words?",
            options: [
              "Reported sentence (Описанное предложение)",
              "Direct sentence (Прямое предложение)",
              "Indirect sentence (Косвенное предложение)",
              "Narrated sentence (Рассказанное предложение)",
            ],
            answer: "Indirect sentence (Косвенное предложение)",
          },
        ],
      },
      {
        topic: "Vocabulary (Словарный запас)",
        questions: [
          {
            id: 0,
            question: "What is the meaning of the word 'ardent'?",
            options: ["Неопытный", "Пламенный", "Задумчивый", "Уверенный"],
            answer: "Пламенный",
          },
          {
            id: 1,
            question:
              "Which word means 'to make something clear or easy to understand'?",
            options: [
              "Complicate (Осложнять)",
              "Clarify (Прояснять)",
              "Confuse (Смущать)",
              "Ambiguity (Неопределенность)",
            ],
            answer: "Clarify (Прояснять)",
          },
          {
            id: 2,
            question: "What does the term 'altruistic' mean?",
            options: [
              "Эгоистичный",
              "Альтруистичный",
              "Самоуверенный",
              "Самоцентрированный",
            ],
            answer: "Альтруистичный",
          },
          {
            id: 3,
            question:
              "Which word refers to a sudden and violent shaking of the ground?",
            options: [
              "Hurricane (Ураган)",
              "Flood (Наводнение)",
              "Earthquake (Землетрясение)",
              "Tornado (Торнадо)",
            ],
            answer: "Earthquake (Землетрясение)",
          },
          {
            id: 4,
            question: "What is the meaning of the term 'adversity'?",
            options: ["Процветание", "Благополучие", "Несчастье", "Радость"],
            answer: "Несчастье",
          },
          {
            id: 5,
            question:
              "Which word means 'a state of being unsure or uncertain'?",
            options: [
              "Confidence (Уверенность)",
              "Certainty (Уверенность)",
              "Doubt (Сомнение)",
              "Assurance (Уверенность)",
            ],
            answer: "Doubt (Сомнение)",
          },
          {
            id: 6,
            question: "What does the term 'exemplary' mean?",
            options: ["Примерный", "Уважаемый", "Образцовый", "Забавный"],
            answer: "Образцовый",
          },
          {
            id: 7,
            question:
              "Which word refers to a large, destructive fire that spreads quickly over woodland or brush?",
            options: [
              "Inferno (Ад)",
              "Bonfire (Костер)",
              "Blaze (Пламя)",
              "Wildfire (Лесной пожар)",
            ],
            answer: "Wildfire (Лесной пожар)",
          },
          {
            id: 8,
            question: "What is the meaning of the word 'conundrum'?",
            options: ["Загадка", "Простота", "Развязка", "Легкость"],
            answer: "Загадка",
          },
          {
            id: 9,
            question:
              "Which word means 'to make something more pleasant or attractive'?",
            options: [
              "Ruin (Разрушать)",
              "Destroy (Уничтожать)",
              "Enhance (Улучшать)",
              "Diminish (Уменьшать)",
            ],
            answer: "Enhance (Улучшать)",
          },
        ],
      },
    ],
  },
  {
    language: "spanish",
    topics: [
      {
        topic: "Parts Of Speech(Partes del discurso)",
        questions: [
          {
            id: 0,
            question: "What is the main function of a noun in a sentence?",
            options: [
              "Describir una acción",
              "Identificar a una persona, lugar, cosa o idea",
              "Expresar un sentimiento",
              "Conectar palabras y frases",
            ],
            answer: "Identificar a una persona, lugar, cosa o idea",
          },
          {
            id: 1,
            question:
              "Which type of word describes or modifies a verb, an adjective, or another adverb?",
            options: ["Sustantivo", "Pronombre", "Adverbio", "Preposición"],
            answer: "Adverbio",
          },
          {
            id: 2,
            question: "What is the primary function of a verb in a sentence?",
            options: [
              "Modificar un sustantivo",
              "Describir un adjetivo",
              "Expresar una acción o estado",
              "Conectar palabras y frases",
            ],
            answer: "Expresar una acción o estado",
          },
          {
            id: 3,
            question:
              "Which part of speech is used to join other words or parts of the sentence?",
            options: ["Adjetivo", "Conjunción", "Interjección", "Pronombre"],
            answer: "Conjunción",
          },
          {
            id: 4,
            question: "What is the function of the adjective in a sentence?",
            options: [
              "Indicar la cantidad de un sustantivo",
              "Expresar una acción",
              "Describir o modificar un sustantivo",
              "Conectar cláusulas",
            ],
            answer: "Describir o modificar un sustantivo",
          },
          {
            id: 5,
            question:
              "Which parts of speech are used to connect words, phrases, or clauses?",
            options: ["Preposiciones", "Pronombres", "Verbos", "Conjunciones"],
            answer: "Conjunciones",
          },
          {
            id: 6,
            question: "What is the function of the adverb in a sentence?",
            options: [
              "Modificar un sustantivo",
              "Describir una acción",
              "Expresar una emoción",
              "Modificar un verbo, un adjetivo u otro adverbio",
            ],
            answer: "Modificar un verbo, un adjetivo u otro adverbio",
          },
          {
            id: 7,
            question: "Which part of speech replaces a noun in a sentence?",
            options: ["Adverbio", "Preposición", "Pronombre", "Conjunción"],
            answer: "Pronombre",
          },
          {
            id: 8,
            question: "What is the function of the preposition in a sentence?",
            options: [
              "Expresar una acción",
              "Indicar la cantidad de un sustantivo",
              "Unir palabras y frases",
              "Describir o modificar un sustantivo",
            ],
            answer: "Unir palabras y frases",
          },
          {
            id: 9,
            question:
              "Which part of speech expresses strong emotion or surprise?",
            options: ["Verbo", "Adjetivo", "Interjección", "Sustantivo"],
            answer: "Interjección",
          },
        ],
      },
      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question:
              "Present Tense (Presente)\nWhat tense is used to express actions that are happening right now?",
            options: ["Presente", "Pretérito", "Futuro", "Condicional"],
            answer: "Presente",
          },
          {
            id: 1,
            question:
              "Past Tense (Pretérito)\nWhich tense is used to express actions that occurred in the past and are already completed?",
            options: ["Presente", "Pretérito", "Futuro", "Condicional"],
            answer: "Pretérito",
          },
          {
            id: 2,
            question:
              "Future Tense (Futuro)\nWhat tense is used to express actions that will happen in the future?",
            options: ["Presente", "Pretérito", "Futuro", "Condicional"],
            answer: "Futuro",
          },
          {
            id: 3,
            question:
              "Conditional Tense (Condicional)\nWhat tense is used to express actions that will happen under certain conditions in the future?",
            options: ["Presente", "Pretérito", "Futuro", "Condicional"],
            answer: "Condicional",
          },
          {
            id: 4,
            question:
              "Imperfect Tense (Imperfecto)\nWhich tense is used to express actions that occurred habitually in the past?",
            options: ["Imperfecto", "Futuro", "Condicional", "Presente"],
            answer: "Imperfecto",
          },
          {
            id: 5,
            question:
              "Preterite Tense (Pretérito)\nWhat tense is used to express actions that occurred at a specific moment in the past?",
            options: ["Pretérito", "Imperfecto", "Futuro", "Presente"],
            answer: "Pretérito",
          },
          {
            id: 6,
            question:
              "Imperfect Tense (Imperfecto)\nWhich tense is used to express actions that were ongoing or continuous in the past?",
            options: [
              "Present Perfect Tense (Pretérito perfecto)",
              "Past Perfect Tense (Pretérito pluscuamperfecto)",
              "Imperfecto",
              "Futuro",
            ],
            answer: "Imperfecto",
          },
          {
            id: 7,
            question:
              "Past Perfect Tense (Pretérito pluscuamperfecto)\nWhat tense is used to express actions that occurred before another action in the past?",
            options: [
              "Present Perfect Tense (Pretérito perfecto)",
              "Past Perfect Tense (Pretérito pluscuamperfecto)",
              "Futuro",
              "Presente",
            ],
            answer: "Past Perfect Tense (Pretérito pluscuamperfecto)",
          },
          {
            id: 8,
            question:
              "Present Perfect Tense (Pretérito perfecto)\nWhich tense is used to express actions that have occurred before the present moment?",
            options: [
              "Present Perfect Tense (Pretérito perfecto)",
              "Past Perfect Tense (Pretérito pluscuamperfecto)",
              "Imperfecto",
              "Futuro",
            ],
            answer: "Present Perfect Tense (Pretérito perfecto)",
          },
        ],
      },
      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question:
              "Definite Article (Artículo definido)\nWhich article is used to refer to specific nouns or things in Spanish?",
            options: ["La", "Un", "El", "Una"],
            answer: "El",
          },
          {
            id: 1,
            question:
              "Indefinite Article (Artículo indefinido)\nWhich article is used to refer to nonspecific nouns or things in Spanish?",
            options: ["La", "Un", "El", "Una"],
            answer: "Un",
          },
          {
            id: 2,
            question:
              "Which article is used before masculine singular nouns in Spanish?",
            options: ["La", "Un", "El", "Una"],
            answer: "El",
          },
          {
            id: 3,
            question:
              "Which article is used before feminine singular nouns in Spanish?",
            options: ["La", "Un", "El", "Una"],
            answer: "La",
          },
          {
            id: 4,
            question: "What article is used before plural nouns in Spanish?",
            options: ["Las", "Unos", "Los", "Unas"],
            answer: "Los",
          },
          {
            id: 5,
            question:
              "Which article is used before masculine singular nouns that start with a stressed 'a' sound (like 'agua')?",
            options: ["La", "Un", "El", "Una"],
            answer: "La",
          },
          {
            id: 6,
            question:
              "What article is used before feminine singular nouns that start with a stressed 'a' sound (like 'amistad')?",
            options: ["La", "Un", "El", "Una"],
            answer: "La",
          },
          {
            id: 7,
            question:
              "Which article is used before masculine singular nouns that start with a stressed 'h' sound (like 'hombre')?",
            options: ["La", "Un", "El", "Una"],
            answer: "El",
          },
          {
            id: 8,
            question:
              "What article is used before feminine singular nouns that start with a stressed 'h' sound (like 'hora')?",
            options: ["La", "Un", "El", "Una"],
            answer: "El",
          },
          {
            id: 9,
            question:
              "Which article is used before feminine singular nouns that start with a stressed 'i' sound (like 'isla')?",
            options: ["La", "Un", "El", "Una"],
            answer: "Una",
          },
        ],
      },
      {
        topic: "Synonyms",
        questions: [
          {
            id: 0,
            question: "Happy (Feliz)\nWhich word is a synonym for 'feliz'?",
            options: ["Triste", "Contento", "Enojado", "Aburrido"],
            answer: "Contento",
          },
          {
            id: 1,
            question: "Big (Grande)\nWhich word is a synonym for 'grande'?",
            options: ["Pequeño", "Alto", "Largo", "Amplio"],
            answer: "Pequeño",
          },
          {
            id: 2,
            question: "Fast (Rápido)\nWhich word is a synonym for 'rápido'?",
            options: ["Lento", "Veloz", "Despacio", "Fácil"],
            answer: "Veloz",
          },
          {
            id: 3,
            question:
              "Beautiful (Hermoso)\nWhich word is a synonym for 'hermoso'?",
            options: ["Feo", "Lindo", "Asqueroso", "Triste"],
            answer: "Lindo",
          },
          {
            id: 4,
            question:
              "Brave (Valiente)\nWhich word is a synonym for 'valiente'?",
            options: ["Tímido", "Fuerte", "Débil", "Cobardía"],
            answer: "Fuerte",
          },
          {
            id: 5,
            question:
              "Smart (Inteligente)\nWhich word is a synonym for 'inteligente'?",
            options: ["Estúpido", "Sabio", "Hábil", "Lento"],
            answer: "Hábil",
          },
          {
            id: 6,
            question: "Cold (Frío)\nWhich word is a synonym for 'frío'?",
            options: ["Caliente", "Fresco", "Cálido", "Helado"],
            answer: "Caliente",
          },
          {
            id: 7,
            question: "Good (Bueno)\nWhich word is a synonym for 'bueno'?",
            options: ["Malo", "Excelente", "Regular", "Malo"],
            answer: "Excelente",
          },
          {
            id: 8,
            question:
              "Difficult (Difícil)\nWhich word is a synonym for 'difícil'?",
            options: ["Fácil", "Complicado", "Simple", "Blando"],
            answer: "Complicado",
          },
          {
            id: 9,
            question:
              "Delicious (Delicioso)\nWhich word is a synonym for 'delicioso'?",
            options: ["Malo", "Sabroso", "Asqueroso", "Insípido"],
            answer: "Sabroso",
          },
        ],
      },
      {
        topic: "Punctuation",
        questions: [
          {
            id: 0,
            question:
              "Which punctuation mark is used at the end of a declarative sentence?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Comma (Coma)",
              "Period (Punto)",
            ],
            answer: "Period (Punto)",
          },
          {
            id: 1,
            question:
              "Which punctuation mark is used to separate items in a list?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Comma (Coma)",
              "Colon (Dos puntos)",
            ],
            answer: "Comma (Coma)",
          },
          {
            id: 2,
            question:
              "Which punctuation mark is used to indicate a pause in a sentence?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Period (Punto)",
              "Dash (Guión)",
            ],
            answer: "Dash (Guión)",
          },
          {
            id: 3,
            question:
              "Which punctuation mark is used to enclose a quotation in Spanish?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Quotation marks (Comillas)",
              "Parentheses (Paréntesis)",
            ],
            answer: "Quotation marks (Comillas)",
          },
          {
            id: 4,
            question:
              "Which punctuation mark is used to indicate direct speech?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Quotation marks (Comillas)",
              "Colon (Dos puntos)",
            ],
            answer: "Quotation marks (Comillas)",
          },
          {
            id: 5,
            question:
              "Which punctuation mark is used to indicate an ellipsis in Spanish?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Colon (Dos puntos)",
              "Ellipsis points (Puntos suspensivos)",
            ],
            answer: "Ellipsis points (Puntos suspensivos)",
          },
          {
            id: 6,
            question:
              "Which punctuation mark is used to separate clauses in a sentence?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Semicolon (Punto y coma)",
              "Apostrophe (Apóstrofo)",
            ],
            answer: "Semicolon (Punto y coma)",
          },
          {
            id: 7,
            question:
              "Which punctuation mark is used to introduce a list or an explanation?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Colon (Dos puntos)",
              "Dash (Guión)",
            ],
            answer: "Colon (Dos puntos)",
          },
          {
            id: 8,
            question:
              "Which punctuation mark is used to indicate a strong emotion or surprise?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Parentheses (Paréntesis)",
              "Dash (Guión)",
            ],
            answer: "Exclamation mark (Signo de exclamación)",
          },
          {
            id: 9,
            question:
              "Which punctuation mark is used to indicate a direct question in Spanish?",
            options: [
              "Exclamation mark (Signo de exclamación)",
              "Question mark (Signo de interrogación)",
              "Colon (Dos puntos)",
              "Quotation marks (Comillas)",
            ],
            answer: "Question mark (Signo de interrogación)",
          },
        ],
      },
      {
        topic: "Phrasal Verbs",
        questions: [
          {
            id: 0,
            question: "What is the meaning of the phrasal verb 'apagar'?",
            options: [
              "To turn on (Encender)",
              "To turn off (Apagar)",
              "To give up (Renunciar)",
              "To pick up (Recoger)",
            ],
            answer: "To turn off (Apagar)",
          },
          {
            id: 1,
            question: "What does the phrasal verb 'salir adelante' mean?",
            options: [
              "To go out (Salir)",
              "To go forward (Avanzar)",
              "To give up (Renunciar)",
              "To pick up (Recoger)",
            ],
            answer: "To go forward (Avanzar)",
          },
          {
            id: 2,
            question: "What is the meaning of the phrasal verb 'ponerse'?",
            options: [
              "To put on (Poner)",
              "To take off (Quitar)",
              "To give up (Renunciar)",
              "To pick up (Recoger)",
            ],
            answer: "To put on (Poner)",
          },
          {
            id: 3,
            question: "What does the phrasal verb 'dar por' mean?",
            options: [
              "To give up (Renunciar)",
              "To give away (Regalar)",
              "To give up (Dar por)",
              "To give in (Ceder)",
            ],
            answer: "To give up (Dar por)",
          },
          {
            id: 4,
            question:
              "What is the meaning of the phrasal verb 'llevarse bien'?",
            options: [
              "To take off (Quitar)",
              "To take away (Llevarse)",
              "To get along (Llevarse bien)",
              "To take in (Entender)",
            ],
            answer: "To get along (Llevarse bien)",
          },
          {
            id: 5,
            question: "What does the phrasal verb 'hacer falta' mean?",
            options: [
              "To make up (Inventar)",
              "To make do (Arreglárselas)",
              "To make sense (Tener sentido)",
              "To be necessary (Hacer falta)",
            ],
            answer: "To be necessary (Hacer falta)",
          },
          {
            id: 6,
            question:
              "What is the meaning of the phrasal verb 'echar de menos'?",
            options: [
              "To throw away (Tirar)",
              "To throw up (Vomitar)",
              "To miss (Echar de menos)",
              "To throw in (Tirar)",
            ],
            answer: "To miss (Echar de menos)",
          },
          {
            id: 7,
            question: "What does the phrasal verb 'dar vueltas' mean?",
            options: [
              "To turn around (Dar vueltas)",
              "To turn over (Dar la vuelta)",
              "To take turns (Turnarse)",
              "To spin (Girar)",
            ],
            answer: "To turn around (Dar vueltas)",
          },
          {
            id: 8,
            question:
              "What is the meaning of the phrasal verb 'dar cuenta de'?",
            options: [
              "To give an account of (Dar cuenta de)",
              "To take into account (Tener en cuenta)",
              "To give up (Renunciar)",
              "To take off (Quitar)",
            ],
            answer: "To give an account of (Dar cuenta de)",
          },
          {
            id: 9,
            question: "What does the phrasal verb 'caerse bien' mean?",
            options: [
              "To fall down (Caerse)",
              "To fall off (Caerse)",
              "To get along (Caerse bien)",
              "To fall in love (Enamorarse)",
            ],
            answer: "To get along (Caerse bien)",
          },
        ],
      },
      {
        topic: "Phrasal Verbs",
        questions: [
          {
            id: 0,
            question: "What is the meaning of the phrasal verb 'apagar'?",
            options: [
              "To turn on (Encender)",
              "To turn off (Apagar)",
              "To give up (Renunciar)",
              "To pick up (Recoger)",
            ],
            answer: "To turn off (Apagar)",
          },
          {
            id: 1,
            question: "What does the phrasal verb 'salir adelante' mean?",
            options: [
              "To go out (Salir)",
              "To go forward (Avanzar)",
              "To give up (Renunciar)",
              "To pick up (Recoger)",
            ],
            answer: "To go forward (Avanzar)",
          },
          {
            id: 2,
            question: "What is the meaning of the phrasal verb 'ponerse'?",
            options: [
              "To put on (Poner)",
              "To take off (Quitar)",
              "To give up (Renunciar)",
              "To pick up (Recoger)",
            ],
            answer: "To put on (Poner)",
          },
          {
            id: 3,
            question: "What does the phrasal verb 'dar por' mean?",
            options: [
              "To give up (Renunciar)",
              "To give away (Regalar)",
              "To give up (Dar por)",
              "To give in (Ceder)",
            ],
            answer: "To give up (Dar por)",
          },
          {
            id: 4,
            question:
              "What is the meaning of the phrasal verb 'llevarse bien'?",
            options: [
              "To take off (Quitar)",
              "To take away (Llevarse)",
              "To get along (Llevarse bien)",
              "To take in (Entender)",
            ],
            answer: "To get along (Llevarse bien)",
          },
          {
            id: 5,
            question: "What does the phrasal verb 'hacer falta' mean?",
            options: [
              "To make up (Inventar)",
              "To make do (Arreglárselas)",
              "To make sense (Tener sentido)",
              "To be necessary (Hacer falta)",
            ],
            answer: "To be necessary (Hacer falta)",
          },
          {
            id: 6,
            question:
              "What is the meaning of the phrasal verb 'echar de menos'?",
            options: [
              "To throw away (Tirar)",
              "To throw up (Vomitar)",
              "To miss (Echar de menos)",
              "To throw in (Tirar)",
            ],
            answer: "To miss (Echar de menos)",
          },
          {
            id: 7,
            question: "What does the phrasal verb 'dar vueltas' mean?",
            options: [
              "To turn around (Dar vueltas)",
              "To turn over (Dar la vuelta)",
              "To take turns (Turnarse)",
              "To spin (Girar)",
            ],
            answer: "To turn around (Dar vueltas)",
          },
          {
            id: 8,
            question:
              "What is the meaning of the phrasal verb 'dar cuenta de'?",
            options: [
              "To give an account of (Dar cuenta de)",
              "To take into account (Tener en cuenta)",
              "To give up (Renunciar)",
              "To take off (Quitar)",
            ],
            answer: "To give an account of (Dar cuenta de)",
          },
          {
            id: 9,
            question: "What does the phrasal verb 'caerse bien' mean?",
            options: [
              "To fall down (Caerse)",
              "To fall off (Caerse)",
              "To get along (Caerse bien)",
              "To fall in love (Enamorarse)",
            ],
            answer: "To get along (Caerse bien)",
          },
        ],
      },
      {
        topic: "Idioms",
        questions: [
          {
            id: 0,
            question: "What does the idiom 'costar un ojo de la cara' mean?",
            options: [
              "To cost an arm and a leg (Costar un ojo de la cara)",
              "To cost a fortune (Costar una fortuna)",
              "To cost a penny (Costar un centavo)",
              "To cost a lot (Costar mucho)",
            ],
            answer: "To cost an arm and a leg (Costar un ojo de la cara)",
          },
          {
            id: 1,
            question: "What is the meaning of the idiom 'estar en las nubes'?",
            options: [
              "To be in the clouds (Estar en las nubes)",
              "To be on the ground (Estar en el suelo)",
              "To be down to earth (Ser práctico)",
              "To be daydreaming (Estar soñando despierto)",
            ],
            answer: "To be daydreaming (Estar en las nubes)",
          },
          {
            id: 2,
            question: "What does the idiom 'dar en el clavo' mean?",
            options: [
              "To hit the nail on the head (Dar en el clavo)",
              "To miss the point (Perder el punto)",
              "To hit the mark (Dar en el blanco)",
              "To hit the jackpot (Ganar el premio gordo)",
            ],
            answer: "To hit the nail on the head (Dar en el clavo)",
          },
          {
            id: 3,
            question: "What is the meaning of the idiom 'meter la pata'?",
            options: [
              "To put your foot in it (Meter la pata)",
              "To put your foot down (Poner el pie abajo)",
              "To step on it (Pisar en eso)",
              "To step on the gas (Pisar el acelerador)",
            ],
            answer: "To put your foot in it (Meter la pata)",
          },
          {
            id: 4,
            question: "What does the idiom 'ponerse las pilas' mean?",
            options: [
              "To put on your batteries (Ponerse las pilas)",
              "To put on your shoes (Ponerse los zapatos)",
              "To get motivated (Motivarse)",
              "To get tired (Cansarse)",
            ],
            answer: "To get motivated (Ponerse las pilas)",
          },
          {
            id: 5,
            question: "What is the meaning of the idiom 'echar leña al fuego'?",
            options: [
              "To add fuel to the fire (Echar leña al fuego)",
              "To extinguish the fire (Apagar el fuego)",
              "To calm down the fire (Calmar el fuego)",
              "To ignite the fire (Encender el fuego)",
            ],
            answer: "To add fuel to the fire (Echar leña al fuego)",
          },
          {
            id: 6,
            question: "What does the idiom 'no pegar ojo' mean?",
            options: [
              "To not stick your eye (No pegar ojo)",
              "To not close an eye (No cerrar un ojo)",
              "To not open an eye (No abrir un ojo)",
              "To not blink an eye (No parpadear)",
            ],
            answer: "To not close an eye (No pegar ojo)",
          },
          {
            id: 7,
            question: "What is the meaning of the idiom 'irse por las ramas'?",
            options: [
              "To go through the branches (Irse por las ramas)",
              "To go off on a tangent (Irse por las ramas)",
              "To go straight to the point (Ir directamente al grano)",
              "To go around in circles (Ir en círculos)",
            ],
            answer: "To go off on a tangent (Irse por las ramas)",
          },
          {
            id: 8,
            question: "What does the idiom 'estar en su salsa' mean?",
            options: [
              "To be in their sauce (Estar en su salsa)",
              "To be in their element (Estar en su elemento)",
              "To be in their stew (Estar en su guiso)",
              "To be in their juice (Estar en su jugo)",
            ],
            answer: "To be in their element (Estar en su salsa)",
          },
          {
            id: 9,
            question: "What is the meaning of the idiom 'dar calabazas'?",
            options: [
              "To give pumpkins (Dar calabazas)",
              "To give flowers (Dar flores)",
              "To reject someone (Rechazar a alguien)",
              "To accept someone (Aceptar a alguien)",
            ],
            answer: "To reject someone (Dar calabazas)",
          },
        ],
      },
      {
        topic: "Active and Passive Voice",
        questions: [
          {
            id: 0,
            question: "What is the active voice? (¿Cuál es la voz activa?)",
            options: [
              "The subject performs the action. (El sujeto realiza la acción.)",
              "The subject receives the action. (El sujeto recibe la acción.)",
              "The action is emphasized. (Se enfatiza la acción.)",
              "The action is de-emphasized. (La acción se desenfatiza.)",
            ],
            answer:
              "The subject performs the action. (El sujeto realiza la acción.)",
          },
          {
            id: 1,
            question: "What is the passive voice? (¿Cuál es la voz pasiva?)",
            options: [
              "The subject performs the action. (El sujeto realiza la acción.)",
              "The subject receives the action. (El sujeto recibe la acción.)",
              "The action is emphasized. (Se enfatiza la acción.)",
              "The action is de-emphasized. (La acción se desenfatiza.)",
            ],
            answer:
              "The subject receives the action. (El sujeto recibe la acción.)",
          },
          {
            id: 2,
            question:
              "Which of the following sentences is in the active voice? (¿Cuál de las siguientes oraciones está en voz activa?)",
            options: [
              "The cake was baked by Mary. (El pastel fue horneado por Mary.)",
              "Mary baked the cake. (Mary horneó el pastel.)",
              "The cake is being baked by Mary. (El pastel está siendo horneado por Mary.)",
              "The cake has been baked by Mary. (El pastel ha sido horneado por Mary.)",
            ],
            answer: "Mary baked the cake. (Mary horneó el pastel.)",
          },
          {
            id: 3,
            question:
              "Which of the following sentences is in the passive voice? (¿Cuál de las siguientes oraciones está en voz pasiva?)",
            options: [
              "The dog chased the cat. (El perro persiguió al gato.)",
              "The cat was chased by the dog. (El gato fue perseguido por el perro.)",
              "The cat chased the mouse. (El gato persiguió al ratón.)",
              "The mouse was chased by the cat. (El ratón fue perseguido por el gato.)",
            ],
            answer:
              "El gato fue perseguido por el perro. (The cat was chased by the dog.)",
          },
          {
            id: 4,
            question:
              "In the sentence 'The book was read by Tom', who or what is performing the action? (En la oración 'El libro fue leído por Tom', ¿quién o qué está realizando la acción?)",
            options: [
              "The book (El libro)",
              "Tom (Tom)",
              "The action is not specified (La acción no está especificada)",
              "None of the above (Ninguna de las anteriores)",
            ],
            answer:
              "The action is not specified (La acción no está especificada)",
          },
          {
            id: 5,
            question:
              "Which voice is commonly used to emphasize the doer of the action? (¿Qué voz se utiliza comúnmente para enfatizar al realizador de la acción?)",
            options: [
              "Active voice (Voz activa)",
              "Passive voice (Voz pasiva)",
              "Both voices (Ambas voces)",
              "Neither voice (Ninguna de las voces)",
            ],
            answer: "Active voice (Voz activa)",
          },
          {
            id: 6,
            question:
              "Which of the following sentences uses the passive voice? (¿Cuál de las siguientes oraciones utiliza la voz pasiva?)",
            options: [
              "Sarah painted the picture. (Sarah pintó el cuadro.)",
              "The picture was painted by Sarah. (El cuadro fue pintado por Sarah.)",
              "The picture is being painted by Sarah. (El cuadro está siendo pintado por Sarah.)",
              "Sarah has painted the picture. (Sarah ha pintado el cuadro.)",
            ],
            answer:
              "El cuadro fue pintado por Sarah. (The picture was painted by Sarah.)",
          },
          {
            id: 7,
            question:
              "Which voice is used when the focus is on the action rather than the doer of the action? (¿Qué voz se utiliza cuando el foco está en la acción en lugar de en el realizador de la acción?)",
            options: [
              "Active voice (Voz activa)",
              "Passive voice (Voz pasiva)",
              "Both voices (Ambas voces)",
              "Neither voice (Ninguna de las voces)",
            ],
            answer: "Passive voice (Voz pasiva)",
          },
          {
            id: 8,
            question:
              "In the sentence 'The letter was written by Maria', what is the subject of the sentence? (En la oración 'La carta fue escrita por María', ¿cuál es el sujeto de la oración?)",
            options: [
              "The letter (La carta)",
              "Was written (Fue escrita)",
              "Maria (María)",
              "None of the above (Ninguna de las anteriores)",
            ],
            answer: "The letter (La carta)",
          },
          {
            id: 9,
            question:
              "Which of the following sentences is in the active voice? (¿Cuál de las siguientes oraciones está en voz activa?)",
            options: [
              "The report will be submitted by John. (El informe será presentado por John.)",
              "John will submit the report. (John presentará el informe.)",
              "The report is being submitted by John. (El informe está siendo presentado por John.)",
              "The report has been submitted by John. (El informe ha sido presentado por John.)",
            ],
            answer:
              "John will submit the report. (John presentará el informe.)",
          },
        ],
      },
      {
        topic: "Direct and Indirect Speech",
        questions: [
          {
            id: 0,
            question:
              "Definition of Direct Speech (Definición de discurso directo)",
            options: [
              "Discurso directo",
              "Discurso indirecto",
              "Reported speech (Discurso reportado)",
              "None of the above (Ninguna de las anteriores)",
            ],
            answer: "Discurso directo",
          },
          {
            id: 1,
            question:
              "Definition of Indirect Speech (Definición de discurso indirecto)",
            options: [
              "Discurso directo",
              "Discurso indirecto",
              "Reported speech (Discurso reportado)",
              "None of the above (Ninguna de las anteriores)",
            ],
            answer: "Discurso indirecto",
          },
          {
            id: 2,
            question: "Reporting Statements (Reportando afirmaciones)",
            options: [
              "Ana dice que va al cine.",
              "Ana dijo que iría al cine.",
              "Ana dijo que va al cine.",
              "Ana dice que fue al cine.",
            ],
            answer: "Ana dijo que iría al cine.",
          },
          {
            id: 3,
            question: "Reporting Questions (Reportando preguntas)",
            options: [
              "Preguntó dónde estaba el libro.",
              "Preguntó dónde está el libro.",
              "Preguntó dónde estuvo el libro.",
              "Preguntó dónde estará el libro.",
            ],
            answer: "Preguntó dónde estaba el libro.",
          },
          {
            id: 4,
            question: "Reporting Commands (Reportando órdenes)",
            options: [
              "Mandó limpiar la habitación.",
              "Mandó que limpiaras la habitación.",
              "Mandó limpiando la habitación.",
              "Mandó que limpiar la habitación.",
            ],
            answer: "Mandó que limpiaras la habitación.",
          },
          {
            id: 5,
            question: "Changing Tenses (Cambios de tiempos verbales)",
            options: [
              "Ella dice que va a la fiesta.",
              "Ella dijo que iba a la fiesta.",
              "Ella dijo que irá a la fiesta.",
              "Ella dice que irá a la fiesta.",
            ],
            answer: "Ella dijo que iba a la fiesta.",
          },
          {
            id: 6,
            question: "Indicating Time (Indicando el tiempo)",
            options: [
              "Present tense (Presente)",
              "Future tense (Futuro)",
              "Past tense (Pretérito)",
              "Conditional tense (Condicional)",
            ],
            answer: "Past tense (Pretérito)",
          },
          {
            id: 7,
            question: "Reporting Adverbs (Reportando adverbios)",
            options: [
              "Cambia 'aquí' por 'ahí'.",
              "Mantén 'aquí' sin cambios.",
              "Omite 'aquí' en el discurso indirecto.",
              "Cambia 'aquí' por 'allí'.",
            ],
            answer: "Cambia 'aquí' por 'allí'.",
          },
          {
            id: 8,
            question: "Reporting Pronouns (Reportando pronombres)",
            options: [
              "Cambia 'me' por 'te'.",
              "Mantén 'me' sin cambios.",
              "Cambia 'me' por 'le'.",
              "Omite el pronombre 'me'.",
            ],
            answer: "Cambia 'me' por 'le'.",
          },
          {
            id: 9,
            question:
              "Direct to Indirect Speech (Discurso directo a indirecto)",
            options: [
              "El profesor dice que estudien para el examen.",
              "El profesor dijo que estudiaran para el examen.",
              "El profesor dijo que estudien para el examen.",
              "El profesor dice que estudiaran para el examen.",
            ],
            answer: "El profesor dijo que estudiaran para el examen.",
          },
        ],
      },
      {
        topic: "Vocabulary",
        questions: [
          {
            id: 0,
            question: "What does the Spanish word 'casa' mean?",
            options: [
              "Car (Coche)",
              "House (Casa)",
              "Dog (Perro)",
              "Book (Libro)",
            ],
            answer: "House (Casa)",
          },
          {
            id: 1,
            question:
              "Which option correctly translates the Spanish word 'mesa'?",
            options: [
              "Chair (Silla)",
              "Table (Mesa)",
              "Bed (Cama)",
              "Window (Ventana)",
            ],
            answer: "Table (Mesa)",
          },
          {
            id: 2,
            question: "What is the Spanish word for 'tree'?",
            options: ["Árbol", "Flor", "Río", "Montaña"],
            answer: "Árbol",
          },
          {
            id: 3,
            question: "Which word in Spanish means 'sun'?",
            options: ["Estrella", "Luna", "Sol", "Nube"],
            answer: "Sol",
          },
          {
            id: 4,
            question: "How do you say 'hello' in Spanish?",
            options: ["Hola", "Adiós", "Por favor", "Gracias"],
            answer: "Hola",
          },
          {
            id: 5,
            question:
              "Which option correctly translates the Spanish word 'libro'?",
            options: [
              "Book (Libro)",
              "Pen (Pluma)",
              "Paper (Papel)",
              "Pencil (Lápiz)",
            ],
            answer: "Book (Libro)",
          },
          {
            id: 6,
            question: "What is the Spanish word for 'water'?",
            options: ["Tierra", "Fuego", "Aire", "Agua"],
            answer: "Agua",
          },
          {
            id: 7,
            question: "Which word in Spanish means 'cat'?",
            options: ["Perro", "Gato", "Pájaro", "Caballo"],
            answer: "Gato",
          },
          {
            id: 8,
            question: "How do you say 'thank you' in Spanish?",
            options: ["Por favor", "Gracias", "Hola", "Adiós"],
            answer: "Gracias",
          },
          {
            id: 9,
            question: "What does the Spanish word 'amarillo' mean?",
            options: [
              "Yellow (Amarillo)",
              "Blue (Azul)",
              "Green (Verde)",
              "Red (Rojo)",
            ],
            answer: "Yellow (Amarillo)",
          },
        ],
      },
    ],
  },
  {
    language: "japanese",
    topics: [
      {
        topic: "Parts of Speech (品詞)",
        questions: [
          {
            id: 0,
            question: "What is the Japanese word for 'noun'?",
            options: [
              "動詞 (doushi)",
              "形容詞 (keiyoushi)",
              "名詞 (meishi)",
              "助詞 (joshi)",
            ],
            answer: "名詞 (meishi)",
          },
          {
            id: 1,
            question: "Which part of speech describes actions or states?",
            options: [
              "形容詞 (keiyoushi)",
              "動詞 (doushi)",
              "名詞 (meishi)",
              "助詞 (joshi)",
            ],
            answer: "動詞 (doushi)",
          },
          {
            id: 2,
            question: "What is the Japanese term for 'adjective'?",
            options: [
              "動詞 (doushi)",
              "形容詞 (keiyoushi)",
              "名詞 (meishi)",
              "副詞 (fukushi)",
            ],
            answer: "形容詞 (keiyoushi)",
          },
          {
            id: 3,
            question: "Which part of speech modifies nouns or pronouns?",
            options: [
              "動詞 (doushi)",
              "形容詞 (keiyoushi)",
              "副詞 (fukushi)",
              "助詞 (joshi)",
            ],
            answer: "形容詞 (keiyoushi)",
          },
          {
            id: 4,
            question: "What is the Japanese word for 'verb'?",
            options: [
              "名詞 (meishi)",
              "形容詞 (keiyoushi)",
              "動詞 (doushi)",
              "副詞 (fukushi)",
            ],
            answer: "動詞 (doushi)",
          },
          {
            id: 5,
            question:
              "Which part of speech expresses existence, action, or occurrence?",
            options: [
              "形容詞 (keiyoushi)",
              "動詞 (doushi)",
              "名詞 (meishi)",
              "副詞 (fukushi)",
            ],
            answer: "動詞 (doushi)",
          },
          {
            id: 6,
            question: "What is the Japanese term for 'adverb'?",
            options: [
              "形容詞 (keiyoushi)",
              "動詞 (doushi)",
              "名詞 (meishi)",
              "副詞 (fukushi)",
            ],
            answer: "副詞 (fukushi)",
          },
          {
            id: 7,
            question:
              "Which part of speech modifies verbs, adjectives, or other adverbs?",
            options: [
              "動詞 (doushi)",
              "形容詞 (keiyoushi)",
              "名詞 (meishi)",
              "副詞 (fukushi)",
            ],
            answer: "副詞 (fukushi)",
          },
          {
            id: 8,
            question: "What is the Japanese word for 'pronoun'?",
            options: [
              "代名詞 (daimeishi)",
              "形容詞 (keiyoushi)",
              "名詞 (meishi)",
              "副詞 (fukushi)",
            ],
            answer: "代名詞 (daimeishi)",
          },
          {
            id: 9,
            question:
              "Which part of speech substitutes for nouns or noun phrases?",
            options: [
              "代名詞 (daimeishi)",
              "形容詞 (keiyoushi)",
              "名詞 (meishi)",
              "副詞 (fukushi)",
            ],
            answer: "代名詞 (daimeishi)",
          },
        ],
      },
      {
        topic: "Tenses (時制)",
        questions: [
          {
            id: 0,
            question: "What is the Japanese word for 'tense'?",
            options: [
              "時制 (jisei)",
              "名詞 (meishi)",
              "動詞 (doushi)",
              "形容詞 (keiyoushi)",
            ],
            answer: "時制 (jisei)",
          },
          {
            id: 1,
            question:
              "Which tense indicates actions that are currently happening?",
            options: [
              "過去形 (kakokei)",
              "未来形 (miraikei)",
              "現在形 (genzaikei)",
              "仮定形 (kateikei)",
            ],
            answer: "現在形 (genzaikei)",
          },
          {
            id: 2,
            question: "What is the Japanese term for 'past tense'?",
            options: [
              "過去形 (kakokei)",
              "未来形 (miraikei)",
              "現在形 (genzaikei)",
              "仮定形 (kateikei)",
            ],
            answer: "過去形 (kakokei)",
          },
          {
            id: 3,
            question:
              "Which tense indicates actions that occurred in the past?",
            options: [
              "過去形 (kakokei)",
              "未来形 (miraikei)",
              "現在形 (genzaikei)",
              "仮定形 (kateikei)",
            ],
            answer: "過去形 (kakokei)",
          },
          {
            id: 4,
            question: "What is the Japanese word for 'future tense'?",
            options: [
              "過去形 (kakokei)",
              "未来形 (miraikei)",
              "現在形 (genzaikei)",
              "仮定形 (kateikei)",
            ],
            answer: "未来形 (miraikei)",
          },
          {
            id: 5,
            question:
              "Which tense indicates actions that will happen in the future?",
            options: [
              "過去形 (kakokei)",
              "未来形 (miraikei)",
              "現在形 (genzaikei)",
              "仮定形 (kateikei)",
            ],
            answer: "未来形 (miraikei)",
          },
          {
            id: 6,
            question: "What is the Japanese term for 'present perfect tense'?",
            options: [
              "過去完了形 (kakokanryoukei)",
              "現在完了形 (genzaikanryoukei)",
              "未来完了形 (miraikanryoukei)",
              "仮定完了形 (kateikanryoukei)",
            ],
            answer: "現在完了形 (genzaikanryoukei)",
          },
          {
            id: 7,
            question:
              "Which tense indicates actions that were completed in the past but have relevance to the present?",
            options: [
              "過去完了形 (kakokanryoukei)",
              "現在完了形 (genzaikanryoukei)",
              "未来完了形 (miraikanryoukei)",
              "仮定完了形 (kateikanryoukei)",
            ],
            answer: "現在完了形 (genzaikanryoukei)",
          },
          {
            id: 8,
            question: "What is the Japanese word for 'past perfect tense'?",
            options: [
              "過去完了形 (kakokanryoukei)",
              "現在完了形 (genzaikanryoukei)",
              "未来完了形 (miraikanryoukei)",
              "仮定完了形 (kateikanryoukei)",
            ],
            answer: "過去完了形 (kakokanryoukei)",
          },
          {
            id: 9,
            question:
              "Which tense indicates actions that were completed before a certain point in the past?",
            options: [
              "過去完了形 (kakokanryoukei)",
              "現在完了形 (genzaikanryoukei)",
              "未来完了形 (miraikanryoukei)",
              "仮定完了形 (kateikanryoukei)",
            ],
            answer: "過去完了形 (kakokanryoukei)",
          },
        ],
      },
      {
        topic: "Articles (冠詞)",
        questions: [
          {
            id: 0,
            question: 'What is the Japanese word for "article"?',
            options: [
              "名詞 (meishi)",
              "前置詞 (zenchishi)",
              "冠詞 (kanshi)",
              "動詞 (doushi)",
            ],
            answer: "冠詞 (kanshi)",
          },
          {
            id: 1,
            question:
              "Which article is used to indicate a specific or particular thing?",
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "連体詞 (rentaishi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "定冠詞 (tei kanshi)",
          },
          {
            id: 2,
            question: 'What is the Japanese term for "definite article"?',
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "連体詞 (rentaishi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "定冠詞 (tei kanshi)",
          },
          {
            id: 3,
            question:
              "Which article is used when referring to a non-specific or general thing?",
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "連体詞 (rentaishi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "不定冠詞 (futei kanshi)",
          },
          {
            id: 4,
            question: 'What is the Japanese word for "indefinite article"?',
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "連体詞 (rentaishi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "不定冠詞 (futei kanshi)",
          },
          {
            id: 5,
            question:
              "Which article is used before singular countable nouns that refer to any member of a group?",
            options: [
              "ある (aru)",
              "いくつかの (ikutsuka no)",
              "何か (nanika)",
              "何も (nanimo)",
            ],
            answer: "ある (aru)",
          },
          {
            id: 6,
            question: 'What is the Japanese term for "zero article"?',
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "ゼロ冠詞 (zero kanshi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "ゼロ冠詞 (zero kanshi)",
          },
          {
            id: 7,
            question:
              "Which article is used when no article is needed in front of a noun?",
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "ゼロ冠詞 (zero kanshi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "ゼロ冠詞 (zero kanshi)",
          },
          {
            id: 8,
            question: 'What is the Japanese word for "demonstrative article"?',
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "ゼロ冠詞 (zero kanshi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "指示代名詞 (shiji daimeishi)",
          },
          {
            id: 9,
            question:
              "Which article is used to indicate specific nouns in relation to the speaker, listener, or context?",
            options: [
              "不定冠詞 (futei kanshi)",
              "定冠詞 (tei kanshi)",
              "ゼロ冠詞 (zero kanshi)",
              "指示代名詞 (shiji daimeishi)",
            ],
            answer: "指示代名詞 (shiji daimeishi)",
          },
        ],
      },
      {
        topic: "Synonyms (同義語)",
        questions: [
          {
            id: 0,
            question: 'What is a synonym for "happy"?',
            options: [
              "悲しい (Kanashii)",
              "嬉しい (Ureshii)",
              "怒っている (Okotteiru)",
              "混乱した (Konranshita)",
            ],
            answer: "嬉しい (Ureshii)",
          },
          {
            id: 1,
            question: 'Which word is a synonym for "big"?',
            options: [
              "小さい (Chiisai)",
              "ちっぽけな (Chippokena)",
              "大きい (Ookii)",
              "短い (Mijikai)",
            ],
            answer: "大きい (Ookii)",
          },
          {
            id: 2,
            question: 'What is another word for "fast"?',
            options: [
              "遅い (Osoi)",
              "速い (Hayai)",
              "静か (Shizuka)",
              "疲れた (Tsukareta)",
            ],
            answer: "速い (Hayai)",
          },
          {
            id: 3,
            question: 'Which word is a synonym for "beautiful"?',
            options: [
              "醜い (Minikui)",
              "美しい (Utsukushii)",
              "平凡な (Heibonna)",
              "ハンサムな (Hansamuna)",
            ],
            answer: "美しい (Utsukushii)",
          },
          {
            id: 4,
            question: 'What is a synonym for "cold"?',
            options: [
              "暑い (Atsui)",
              "温かい (Atatakai)",
              "寒い (Samui)",
              "涼しい (Suzushii)",
            ],
            answer: "寒い (Samui)",
          },
          {
            id: 5,
            question: 'Which word is a synonym for "smart"?',
            options: [
              "ばか (Baka)",
              "賢い (Kashikoi)",
              "愚か (Oroka)",
              "無知 (Muchi)",
            ],
            answer: "賢い (Kashikoi)",
          },
          {
            id: 6,
            question: 'What is another word for "angry"?',
            options: [
              "嬉しい (Ureshii)",
              "悲しい (Kanashii)",
              "怒っている (Okotteiru)",
              "興奮した (Koufunshita)",
            ],
            answer: "怒っている (Okotteiru)",
          },
          {
            id: 7,
            question: 'Which word is a synonym for "tired"?',
            options: [
              "元気 (Genki)",
              "疲れた (Tsukareta)",
              "休んだ (Yasunda)",
              "眠い (Nemui)",
            ],
            answer: "疲れた (Tsukareta)",
          },
          {
            id: 8,
            question: 'What is a synonym for "hard"?',
            options: [
              "柔らかい (Yawarakai)",
              "固い (Katai)",
              "簡単 (Kantan)",
              "厳しい (Kibishii)",
            ],
            answer: "固い (Katai)",
          },
        ],
      },
      {
        topic: "Punctuations (句読点)",
        questions: [
          {
            id: 0,
            question:
              "Which punctuation is used to indicate the end of a sentence in Japanese?",
            options: [
              "コンマ (Konma)",
              "ピリオド (Piriodo)",
              "ダッシュ (Dasshu)",
              "句点 (Kuten)",
            ],
            answer: "句点 (Kuten)",
          },
          {
            id: 1,
            question: "What is the Japanese term for the comma?",
            options: [
              "コンマ (Konma)",
              "ピリオド (Piriodo)",
              "コロン (Koron)",
              "セミコロン (Semikoron)",
            ],
            answer: "コンマ (Konma)",
          },
          {
            id: 2,
            question:
              "Which punctuation is used to mark a pause or separation within a sentence?",
            options: [
              "コンマ (Konma)",
              "ピリオド (Piriodo)",
              "ダッシュ (Dasshu)",
              "セミコロン (Semikoron)",
            ],
            answer: "コンマ (Konma)",
          },
          {
            id: 3,
            question: "What is the Japanese term for the period (full stop)?",
            options: [
              "コンマ (Konma)",
              "ピリオド (Piriodo)",
              "コロン (Koron)",
              "ダッシュ (Dasshu)",
            ],
            answer: "ピリオド (Piriodo)",
          },
          {
            id: 4,
            question: "Which punctuation is used to separate items in a list?",
            options: [
              "コンマ (Konma)",
              "ピリオド (Piriodo)",
              "コロン (Koron)",
              "セミコロン (Semikoron)",
            ],
            answer: "コンマ (Konma)",
          },
          {
            id: 5,
            question: "What is the Japanese term for the colon?",
            options: [
              "コロン (Koron)",
              "セミコロン (Semikoron)",
              "ハイフン (Haifun)",
              "アポストロフィ (Aposutorofi)",
            ],
            answer: "コロン (Koron)",
          },
          {
            id: 6,
            question:
              "Which punctuation is used to indicate a question in Japanese?",
            options: [
              "コンマ (Konma)",
              "ピリオド (Piriodo)",
              "ダッシュ (Dasshu)",
              "疑問符 (Gimonfu)",
            ],
            answer: "疑問符 (Gimonfu)",
          },
          {
            id: 7,
            question: "What is the Japanese term for the exclamation mark?",
            options: [
              "ビックリマーク (Bikkurimaaku)",
              "叹嘆符 (Tantanfu)",
              "驚き符 (Odorokifu)",
              "感嘆符 (Kantanfu)",
            ],
            answer: "感嘆符 (Kantanfu)",
          },
          {
            id: 8,
            question:
              "Which punctuation is used to enclose quotations in Japanese?",
            options: [
              "角括弧 (Kakukakko)",
              "丸括弧 (Marukakko)",
              "かぎ括弧 (Kagikakko)",
              "中括弧 (Nakakakko)",
            ],
            answer: "かぎ括弧 (Kagikakko)",
          },
          {
            id: 9,
            question: "What is the Japanese term for the quotation mark?",
            options: [
              "シングルクォート (Shingurukwōto)",
              "ダブルクォート (Daburukwōto)",
              "エンダッシュ (Endasshu)",
              "クォーテーションマーク (Kwōtēshonmāku)",
            ],
            answer: "クォーテーションマーク (Kwōtēshonmāku)",
          },
        ],
      },
      {
        topic: "Phrasal Verbs (句動詞)",
        questions: [
          {
            id: 0,
            question: 'What is the Japanese term for "phrasal verb"?',
            options: [
              "単語 (tango)",
              "副詞 (fukushi)",
              "句動詞 (kudoushi)",
              "名詞 (meishi)",
            ],
            answer: "句動詞 (kudoushi)",
          },
          {
            id: 1,
            question:
              "Which term refers to a combination of a verb and one or more particles or prepositions that functions as a single unit?",
            options: [
              "Noun (名詞)",
              "Adjective (形容詞)",
              "Phrasal verb (句動詞)",
              "Adverb (副詞)",
            ],
            answer: "Phrasal verb (句動詞)",
          },
          {
            id: 2,
            question:
              'What is the Japanese word for "break down" as a phrasal verb?',
            options: [
              "分解する (bunkai suru)",
              "壊れる (kowareru)",
              "含まれる (fukumareru)",
              "損傷する (sonshou suru)",
            ],
            answer: "分解する (bunkai suru)",
          },
          {
            id: 3,
            question:
              'Which option correctly translates the phrasal verb "look after" into Japanese?',
            options: [
              "見送る (miokuru)",
              "気をつける (ki o tsukeru)",
              "世話をする (sewa o suru)",
              "出かける (dekakeru)",
            ],
            answer: "世話をする (sewa o suru)",
          },
          {
            id: 4,
            question:
              'What is the Japanese term for "come across" as a phrasal verb?',
            options: [
              "進む (susumu)",
              "出会う (deau)",
              "思い出す (omoidasu)",
              "続ける (tsuzukeru)",
            ],
            answer: "出会う (deau)",
          },
          {
            id: 5,
            question:
              'Which option correctly translates the phrasal verb "give up" into Japanese?',
            options: [
              "見せる (miseru)",
              "渡す (watasu)",
              "あきらめる (akirameru)",
              "かわいがる (kawaigaru)",
            ],
            answer: "あきらめる (akirameru)",
          },
          {
            id: 6,
            question:
              'What is the Japanese word for "take off" as a phrasal verb?',
            options: [
              "乗る (noru)",
              "はずす (hazusu)",
              "はずれる (hazure ru)",
              "離陸する (ririku suru)",
            ],
            answer: "離陸する (ririku suru)",
          },
          {
            id: 7,
            question:
              'Which option correctly translates the phrasal verb "look for" into Japanese?',
            options: [
              "探す (sagasu)",
              "見逃す (minogasu)",
              "出かける (dekakeru)",
              "連れて行く (tsurete iku)",
            ],
            answer: "探す (sagasu)",
          },
          {
            id: 8,
            question:
              'What is the Japanese term for "get over" as a phrasal verb?',
            options: [
              "取り戻す (torimodosu)",
              "克服する (kokufuku suru)",
              "慣れる (nareru)",
              "取り扱う (toriatsukau)",
            ],
            answer: "克服する (kokufuku suru)",
          },
          {
            id: 9,
            question:
              'Which option correctly translates the phrasal verb "put off" into Japanese?',
            options: [
              "遅れる (okureru)",
              "記入する (kinyuu suru)",
              "延期する (enki suru)",
              "予約する (yoyaku suru)",
            ],
            answer: "延期する (enki suru)",
          },
        ],
      },
      {
        topic: "Idioms",
        questions: [
          {
            id: 0,
            question: "What is the Japanese term for 'idiom'?",
            options: [
              "ことわざ (kotowaza)",
              "慣用句 (kan'yōku)",
              "俗語 (zokugo)",
              "文法 (bunpō)",
            ],
            answer: "慣用句 (kan'yōku)",
          },
          {
            id: 1,
            question:
              "Which term refers to a phrase or expression that has a figurative meaning different from its literal meaning?",
            options: [
              "Proverb (ことわざ)",
              "Idiom (慣用句)",
              "Slang (俗語)",
              "Grammar (文法)",
            ],
            answer: "Idiom (慣用句)",
          },
          {
            id: 2,
            question:
              "What is the Japanese phrase for the idiom 'to kill two birds with one stone'?",
            options: [
              "一石二鳥 (isseki nichou)",
              "猫の額 (neko no hitai)",
              "石の上にも三年 (ishi no ue ni mo sannen)",
              "一期一会 (ichigo ichie)",
            ],
            answer: "一石二鳥 (isseki nichou)",
          },
          {
            id: 3,
            question:
              "Which option correctly translates the idiom 'to hit the nail on the head' into Japanese?",
            options: [
              "的を射る (mato o iru)",
              "馬鹿げたことを言う (bakageta koto o iu)",
              "難しい問題を解決する (muzukashii mondai o kaiketsu suru)",
              "頭のど真ん中を突く (atama no domannaka o tsuku)",
            ],
            answer: "頭のど真ん中を突く (atama no domannaka o tsuku)",
          },
          {
            id: 4,
            question:
              "What is the Japanese expression for the idiom 'to let the cat out of the bag'?",
            options: [
              "ネコの手を借りる (neko no te o kariru)",
              "ネコの額 (neko no hitai)",
              "ネコを袋から出す (neko o fukuro kara dasu)",
              "秘密を漏らす (himitsu o morasu)",
            ],
            answer: "秘密を漏らす (himitsu o morasu)",
          },
          {
            id: 5,
            question:
              "Which option correctly translates the idiom 'to beat around the bush' into Japanese?",
            options: [
              "正面から直接話す (shoumen kara chokusetsu hanasu)",
              "意味をぼかす (imi o bokasu)",
              "回りくどく話す (mawarikudoku hanasu)",
              "勘定に入れない (kanjou ni hairenai)",
            ],
            answer: "回りくどく話す (mawarikudoku hanasu)",
          },
          {
            id: 6,
            question:
              "What is the Japanese phrase for the idiom 'to bite off more than one can chew'?",
            options: [
              "虎の尾を踏む (tora no o o fumu)",
              "口が滑る (kuchi ga suberu)",
              "他山の石 (tasan no ishi)",
              "無理をする (muri o suru)",
            ],
            answer: "無理をする (muri o suru)",
          },
          {
            id: 7,
            question:
              "Which option correctly translates the idiom 'to see eye to eye' into Japanese?",
            options: [
              "眉をひそめる (mayu o hisomeru)",
              "眼中にない (ganchuu ni nai)",
              "視線を合わせる (shisen o awaseru)",
              "見解が合う (kai wa ga au)",
            ],
            answer: "見解が合う (kai wa ga au)",
          },
          {
            id: 8,
            question:
              "What is the Japanese expression for the idiom 'to spill the beans'?",
            options: [
              "豆をこぼす (mame o kobosu)",
              "秘密を漏らす (himitsu o morasu)",
              "牛乳をこぼす (gyuunyuu o kobosu)",
              "豆を食べる (mame o taberu)",
            ],
            answer: "秘密を漏らす (himitsu o morasu)",
          },
          {
            id: 9,
            question:
              "Which option correctly translates the idiom 'to pull someone's leg' into Japanese?",
            options: [
              "足を引っ張る (ashi o hipparu)",
              "からかう (karakau)",
              "意見を言う (iken o iu)",
              "面白くないことを言う (omoshirokunai koto o iu)",
            ],
            answer: "からかう (karakau)",
          },
        ],
      },
      {
        topic: "Active and Passive Voice",
        questions: [
          {
            id: 0,
            question: "What is the Japanese term for 'active voice'?",
            options: [
              "能動態 (noudoutai)",
              "受動態 (judoutai)",
              "未来形 (miraikei)",
              "過去形 (kakokei)",
            ],
            answer: "能動態 (noudoutai)",
          },
          {
            id: 1,
            question:
              "Which voice emphasizes the subject performing the action?",
            options: [
              "Active voice (能動態)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
              "Past tense (過去形)",
            ],
            answer: "Active voice (能動態)",
          },
          {
            id: 2,
            question: "What is the Japanese phrase for 'passive voice'?",
            options: [
              "能動態 (noudoutai)",
              "受動態 (judoutai)",
              "未来形 (miraikei)",
              "過去形 (kakokei)",
            ],
            answer: "受動態 (judoutai)",
          },
          {
            id: 3,
            question:
              "Which voice emphasizes the action being done to the subject?",
            options: [
              "Active voice (能動態)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
              "Past tense (過去形)",
            ],
            answer: "Passive voice (受動態)",
          },
          {
            id: 4,
            question: "What is the Japanese term for 'subject' in grammar?",
            options: [
              "主語 (shuugo)",
              "述語 (jutsugo)",
              "目的語 (mokutekigo)",
              "補語 (hog o)",
            ],
            answer: "主語 (shuugo)",
          },
          {
            id: 5,
            question:
              "Which part of a sentence is often acted upon in passive voice constructions?",
            options: [
              "Subject (主語)",
              "Predicate (述語)",
              "Object (目的語)",
              "Complement (補語)",
            ],
            answer: "Object (目的語)",
          },
          {
            id: 6,
            question: "What is the Japanese phrase for 'direct object'?",
            options: [
              "主語 (shuugo)",
              "述語 (jutsugo)",
              "直接目的語 (chokusetsu mokutekigo)",
              "間接目的語 (kansetsu mokutekigo)",
            ],
            answer: "直接目的語 (chokusetsu mokutekigo)",
          },
          {
            id: 7,
            question:
              "Which type of voice is used when the focus is on the action rather than the subject?",
            options: [
              "Active voice (能動態)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
              "Past tense (過去形)",
            ],
            answer: "Passive voice (受動態)",
          },
          {
            id: 8,
            question: "What is the Japanese term for 'predicate' in grammar?",
            options: [
              "主語 (shuugo)",
              "述語 (jutsugo)",
              "目的語 (mokutekigo)",
              "補語 (hog o)",
            ],
            answer: "述語 (jutsugo)",
          },
          {
            id: 9,
            question:
              "Which part of a sentence often performs the action in active voice constructions?",
            options: [
              "Subject (主語)",
              "Predicate (述語)",
              "Object (目的語)",
              "Complement (補語)",
            ],
            answer: "Subject (主語)",
          },
        ],
      },
      {
        topic: "Direct and Indirect Speech",
        questions: [
          {
            id: 0,
            question: "What is the Japanese term for 'direct speech'?",
            options: [
              "直接話法 (chokusetsu waho)",
              "間接話法 (kansetsu waho)",
              "文法 (bunpou)",
              "能動態 (noudoutai)",
            ],
            answer: "直接話法 (chokusetsu waho)",
          },
          {
            id: 1,
            question:
              "Which term refers to the reporting of speech or thoughts exactly as they were originally said or thought?",
            options: [
              "Direct speech (直接話法)",
              "Indirect speech (間接話法)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
            ],
            answer: "Direct speech (直接話法)",
          },
          {
            id: 2,
            question: "What is the Japanese phrase for 'indirect speech'?",
            options: [
              "直接話法 (chokusetsu waho)",
              "間接話法 (kansetsu waho)",
              "文法 (bunpou)",
              "能動態 (noudoutai)",
            ],
            answer: "間接話法 (kansetsu waho)",
          },
          {
            id: 3,
            question:
              "Which term refers to the reporting of speech or thoughts without quoting the exact words used?",
            options: [
              "Direct speech (直接話法)",
              "Indirect speech (間接話法)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
            ],
            answer: "Indirect speech (間接話法)",
          },
          {
            id: 4,
            question: "What is the Japanese term for 'reported speech'?",
            options: [
              "話す (hanasu)",
              "報告された話 (houkokusareta hanashi)",
              "直接話法 (chokusetsu waho)",
              "間接話法 (kansetsu waho)",
            ],
            answer: "報告された話 (houkokusareta hanashi)",
          },
          {
            id: 5,
            question:
              "Which type of speech often requires changes in tense, pronouns, and other grammatical elements?",
            options: [
              "Direct speech (直接話法)",
              "Indirect speech (間接話法)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
            ],
            answer: "Indirect speech (間接話法)",
          },
          {
            id: 6,
            question:
              "What is the Japanese phrase for 'quoting someone's exact words'?",
            options: [
              "直接引用する (chokusetsu inyou suru)",
              "間接引用する (kansetsu inyou suru)",
              "言葉を引用する (kotoba o inyou suru)",
              "文章を引用する (bunshou o inyou suru)",
            ],
            answer: "直接引用する (chokusetsu inyou suru)",
          },
          {
            id: 7,
            question:
              "Which type of speech often uses reporting verbs like 'say,' 'tell,' or 'ask'?",
            options: [
              "Direct speech (直接話法)",
              "Indirect speech (間接話法)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
            ],
            answer: "Indirect speech (間接話法)",
          },
          {
            id: 8,
            question: "What is the Japanese term for 'reporting verb'?",
            options: [
              "話す動詞 (hanasu doushi)",
              "報告動詞 (houkoku doushi)",
              "直接動詞 (chokusetsu doushi)",
              "間接動詞 (kansetsu doushi)",
            ],
            answer: "報告動詞 (houkoku doushi)",
          },
          {
            id: 9,
            question:
              "Which type of speech often introduces reported speech with phrases like 'He said that' or 'She told me that'?",
            options: [
              "Direct speech (直接話法)",
              "Indirect speech (間接話法)",
              "Passive voice (受動態)",
              "Future tense (未来形)",
            ],
            answer: "Indirect speech (間接話法)",
          },
        ],
      },
      {
        topic: "Vocabulary",
        questions: [
          {
            id: 0,
            question: "What is the Japanese word for 'apple'?",
            options: [
              "さくらんぼ (sakuranbo)",
              "みかん (mikan)",
              "いちご (ichigo)",
              "りんご (ringo)",
            ],
            answer: "りんご (ringo)",
          },
          {
            id: 1,
            question:
              "Which option correctly translates the English word 'car' into Japanese?",
            options: [
              "自転車 (jitensha)",
              "飛行機 (hikouki)",
              "車 (kuruma)",
              "電車 (densha)",
            ],
            answer: "車 (kuruma)",
          },
          {
            id: 2,
            question: "What is the Japanese term for 'cat'?",
            options: ["犬 (inu)", "豚 (buta)", "猫 (neko)", "鳥 (tori)"],
            answer: "猫 (neko)",
          },
          {
            id: 3,
            question:
              "Which option correctly translates the English word 'book' into Japanese?",
            options: [
              "雑誌 (zasshi)",
              "辞書 (jisho)",
              "本 (hon)",
              "新聞 (shinbun)",
            ],
            answer: "本 (hon)",
          },
          {
            id: 4,
            question: "What is the Japanese word for 'house'?",
            options: [
              "郵便局 (yuubinkyoku)",
              "銀行 (ginkou)",
              "家 (ie)",
              "スーパー (suupaa)",
            ],
            answer: "家 (ie)",
          },
          {
            id: 5,
            question:
              "Which option correctly translates the English word 'computer' into Japanese?",
            options: [
              "携帯電話 (keitai denwa)",
              "テレビ (terebi)",
              "電子レンジ (denshi renji)",
              "コンピューター (konpyuutaa)",
            ],
            answer: "コンピューター (konpyuutaa)",
          },
          {
            id: 6,
            question: "What is the Japanese term for 'pen'?",
            options: [
              "筆箱 (fudebako)",
              "鉛筆 (enpitsu)",
              "ペン (pen)",
              "ノート (nooto)",
            ],
            answer: "ペン (pen)",
          },
          {
            id: 7,
            question:
              "Which option correctly translates the English word 'school' into Japanese?",
            options: [
              "公園 (kouen)",
              "病院 (byouin)",
              "学校 (gakkou)",
              "図書館 (toshokan)",
            ],
            answer: "学校 (gakkou)",
          },
          {
            id: 8,
            question: "What is the Japanese word for 'friend'?",
            options: [
              "敵 (teki)",
              "先生 (sensei)",
              "友達 (tomodachi)",
              "家族 (kazoku)",
            ],
            answer: "友達 (tomodachi)",
          },
          {
            id: 9,
            question:
              "Which option correctly translates the English word 'water' into Japanese?",
            options: [
              "お茶 (ocha)",
              "コーヒー (koohii)",
              "水 (mizu)",
              "牛乳 (gyuunyuu)",
            ],
            answer: "水 (mizu)",
          },
        ],
      },
    ],
  },
  {
    language: "bengali",
    topics: [
      {
        topic: "Parts of speech",
        questions: [
          {
            id: 0,
            question: "বাক্যে 'মেজে গেল' শব্দের কোন অংশ?",
            options: ["নাম", "ক্রিয়া", "বিশেষণ", "ক্রিয়া-সম্পর্কিত ক্রিয়া"],
            answer: "ক্রিয়া",
          },
          {
            id: 1,
            question: "নিম্নলিখিত বাক্যে প্রবলভাবে কোনটি বিশেষণ?",
            options: ["গাইল", "সুন্দরভাবে", "অনুষ্ঠান", "সে"],
            answer: "সুন্দরভাবে",
          },
          {
            id: 2,
            question: "বাক্যে 'কুকুরটি বিড়ালকে পিছনে দিল' শব্দের কোন অংশ?",
            options: ["নাম", "ক্রিয়া", "বিশেষণ", "ক্রিয়া-সম্পর্কিত ক্রিয়া"],
            answer: "নাম",
          },
          {
            id: 3,
            question:
              "সাধারণভাবে কোন অংশ নাম বা সর্বনামকে সম্পর্কে সংশোধন করে?",
            options: ["ক্রিয়া", "বিশেষণ", "ক্রিয়ার মতো ক্রিয়া", "সংযোজনক"],
            answer: "বিশেষণ",
          },
          {
            id: 4,
            question:
              "বাক্যে সংযোজনক চিহ্ন চিহ্নিত করুন: 'আমি দুইটা চকলেট এবং ভ্যানিলা আইসক্রিম পছন্দ করি।'",
            options: ["পছন্দ করি", "দুইটা", "এবং", "ভ্যানিলা"],
            answer: "এবং",
          },
          {
            id: 5,
            question: "বাক্যে 'বইটি টেবিলের নীচে' শব্দটির কোন অংশ?",
            options: ["নাম", "ক্রিয়া", "বিশেষণ", "অব্যবহিতকরণ"],
            answer: "অব্যবহিতকরণ",
          },
          {
            id: 6,
            question:
              "প্রায়ই দুটি স্বাধীন পদানুশাসিত যুক্ত করার জন্য কোন অংশ ব্যবহৃত হয়?",
            options: ["অব্যবহিতকরণ", "সংযোজনক", "বিশেষণ", "সর্বনাম"],
            answer: "সংযোজনক",
          },
          {
            id: 7,
            question: "বাক্যে 'তিনি দ্রুত পানি খেলে' শব্দটির কোন অংশ?",
            options: ["নাম", "ক্রিয়া", "অব্যবহিতকরণ", "বিশেষণ"],
            answer: "অব্যবহিতকরণ",
          },
          {
            id: 8,
            question: "বাক্যে কাজের অবস্থা বা অবস্থা বর্ণনা করা কোন অংশ?",
            options: ["নাম", "ক্রিয়া", "বিশেষণ", "সর্বনাম"],
            answer: "ক্রিয়া",
          },
          {
            id: 9,
            question:
              "প্রায়ই অনুসরণযোগ্য পদানুশাসিক প্রদান করার জন্য কোন অংশ ব্যবহৃত হয়?",
            options: ["ক্রিয়া", "অব্যবহিতকরণ", "অব্যবহিতকরণ", "সংযোজনক"],
            answer: "সং",
          },
        ],
      },
      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question: 'যে সময় "উনি এখন রাতে খাচ্ছেন" বাক্যে ব্যবহৃত হয়?',
            options: [
              "অতীত কাল",
              "বর্তমান কাল",
              "ভবিষ্যৎ কাল",
              "অতীত পরিপূর্ণ কাল",
            ],
            answer: "বর্তমান কাল",
          },
          {
            id: 1,
            question: 'কোন ক্রিয়ার সঠিক অতীত কালের রূপ "পালান"?',
            options: ["পালান", "পালানো", "পালানা", "পালান করবেন"],
            answer: "পালানা",
          },
          {
            id: 2,
            question:
              'বাক্যে "উদ্যোক্তা আগামীকালে তারা প্রকল্পটি শেষ করে যাবে," কোন কাল ব্যবহৃত হয়?',
            options: [
              "অতীত কাল",
              "বর্তমান কাল",
              "ভবিষ্যৎ কাল",
              "বর্তমান অব্যবহিত কাল",
            ],
            answer: "ভবিষ্যৎ কাল",
          },
          {
            id: 3,
            question:
              'কোন কাল ক্রিয়া ব্যবহৃত "will have" বা "shall have" এর পরে ক্রিয়ার অতীত অংশ অনুসরণ করে?',
            options: [
              "বর্তমান পরিপূর্ণ কাল",
              "অতীত পরিপূর্ণ কাল",
              "ভবিষ্যৎ পরিপূর্ণ কাল",
              "বর্তমান অব্যবহিত কাল",
            ],
            answer: "ভবিষ্যৎ পরিপূর্ণ কাল",
          },
          {
            id: 4,
            question:
              'বাক্যে কোন কাল ব্যবহৃত "তিনি আস্তে চলে গেছেন যখন আমি আসিলাম"?',
            options: [
              "বর্তমান কাল",
              "অতীত কাল",
              "ভবিষ্যৎ কাল",
              "অতীত পরিপূর্ণ কাল",
            ],
            answer: "অতীত পরিপূর্ণ কাল",
          },
          {
            id: 5,
            question:
              'বাক্যে "উনি আগামীকালে সংগীত গাইতে থাকবেন" কোন কাল ব্যবহৃত হয়?',
            options: [
              "বর্তমান কাল",
              "অতীত কাল",
              "ভবিষ্যৎ কাল",
              "বর্তমান অব্যবহিত কাল",
            ],
            answer: "ভবিষ্যৎ কাল",
          },
          {
            id: 6,
            question:
              'কোন কাল হয় "am/is/are" + ক্রিয়ার বর্তমান অংশ ব্যবহার করে?',
            options: [
              "অতীত কাল",
              "বর্তমান কাল",
              "ভবিষ্যৎ কাল",
              "বর্তমান অব্যবহিত কাল",
            ],
            answer: "বর্তমান অব্যবহিত কাল",
          },
          {
            id: 7,
            question:
              'বাক্যে কোন কাল ব্যবহৃত "আমি এখানে পাঁচ বছর ধরে বাস করছি।"',
            options: [
              "বর্তমান কাল",
              "অতীত কাল",
              "বর্তমান পরিপূর্ণ কাল",
              "অতীত পরিপূর্ণ কাল",
            ],
            answer: "বর্তমান পরিপূর্ণ কাল",
          },
          {
            id: 8,
            question:
              'কোন কাল হয় "ছিল/ছিলাম" + ক্রিয়ার বর্তমান অংশ ব্যবহার করে?',
            options: [
              "অতীত কাল",
              "বর্তমান কাল",
              "ভবিষ্যৎ কাল",
              "অতীত অব্যবহিত কাল",
            ],
            answer: "অতীত অব্যবহিত কাল",
          },
          {
            id: 9,
            question:
              'কোন কাল ব্যবহৃত "তিনি আপনি আসবেন পর্যন্ত দুই ঘণ্টা পড়াশোনা করবেন" বাক্যে?',
            options: [
              "বর্তমান কাল",
              "অতীত কাল",
              "ভবিষ্যৎ কাল",
              "ভবিষ্যৎ পরিপূর্ণ অব্যবহিত কাল",
            ],
            answer: "ভবিষ্যৎ পরিপূর্ণ অব্যবহিত কাল",
          },
        ],
      },
      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question:
              'বাক্যে "আমি গতকাল ___ আপেল খেলাম" শব্দের আগে কোন অনুচ্ছেদ ব্যবহার করতে হবে?',
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "একটি",
          },
          {
            id: 1,
            question:
              'বাক্যে "উনি একটি বিশ্ববিদ্যালয় ছাত্র," ফাঁকে কোন অনুচ্ছেদ ফিল করতে হবে?',
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "একটি",
          },
          {
            id: 2,
            question:
              'বাক্যে "আমি ___ ঘন্টা পরে তারা থাকব" শব্দের আগে কোন অনুচ্ছেদ ব্যবহার করতে হবে?',
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "সে",
          },
          {
            id: 3,
            question:
              '"___ পেন হাতির চাকুরের চেয়ে শক্তিশালী" উক্তি পূরণ করতে কোন অনুচ্ছেদ পূরণ করতে হবে?',
            options: ["একটি, এক", "একটি, এক", "সে, এক", "সে, সে"],
            answer: "সে, এক",
          },
          {
            id: 4,
            question:
              "একক গণনীয় বিশিষ্ট অনুচ্ছেদের আগে কোন অনুচ্ছেদ ব্যবহার করা হয়?",
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "একটি",
          },
          {
            id: 5,
            question:
              'বাক্যে তিনি একমাত্র সন্তান," ফাঁকে কোন অনুচ্ছেদ ফিল করতে হবে?',
            option: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answe: "এক",
          },
          {
            id: 6,
            questio:
              "একক গণনীয় বিশিষ্ট অনুচ্ছেদের আগে কোন অনুচ্ছেদ ব্যবহার করা হয়?",
            option: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answe: "সে",
          },
          {
            id: 7,
            question:
              'বাক্যে "সে প্রতি রবিবার ___ গিয়ে চার্চে যায়," ফাঁকে কোন অনুচ্ছেদ ফিল করতে হবে?',
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "সে",
          },
          {
            id: 8,
            question:
              "সর্বপ্রথম সর্বপ্রথম উল্লেখিত একক গণনীয় অনুচ্ছেদের আগে কোন অনুচ্ছেদ ব্যবহার করা হয়?",
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "একটি",
          },
          {
            id: 9,
            question:
              'বাক্যে "তার পারফরমেন্সের জন্য ___ পুরস্কার পেয়েছিলেন," শব্দের আগে কোন অনুচ্ছেদ ব্যবহার করা হয়?',
            options: ["একটি", "এক", "সে", "কোন অনুচ্ছেদ"],
            answer: "সে",
          },
        ],
      },
      {
        topic: "synonyms",
        questions: [
          {
            id: 0,
            question: 'শব্দটি "সুখী" এর সমার্থক কোনটি?',
            options: ["দু: খিত", "আনন্দময়", "রাগী", "ক্লান্ত"],
            answer: "আনন্দময়",
          },
          {
            id: 1,
            question: 'শব্দটি "বড়" এর সমার্থক কোনটি?',
            options: ["ছোট", "বড়", "ছোট", "অল্প"],
            answer: "বড়",
          },
          {
            id: 2,
            question: 'শব্দটি "কঠিন" এর সমার্থক কোনটি?',
            options: ["সহজ", "কঠিন", "সহজ", "জটিল"],
            answer: "কঠিন",
          },
          {
            id: 3,
            question: 'শব্দটি "সুন্দর" এর সমার্থক কোনটি?',
            options: ["মিথ্যা", "সুন্দর", "হাসিন", "সাধারণ"],
            answer: "সুন্দর",
          },
          {
            id: 4,
            question: 'শব্দটি "রাগান্বিত" এর সমার্থক কোনটি?',
            options: ["সুখী", "দু: খিত", "তীব্র", "শান্ত"],
            answer: "তীব্র",
          },
          {
            id: 5,
            question: 'শব্দটি "দ্রুত" এর সমার্থক কোনটি?',
            options: ["মন্থনশীল", "দ্রুত", "ত্বরিত", "শিগগত"],
            answer: "দ্রুত",
          },
          {
            id: 6,
            question: 'শব্দটি "শান্ত" এর সমার্থক কোনটি?',
            options: ["অশান্ত", "জোরদার", "নীরব", "কথাশীল"],
            answer: "নীরব",
          },
          {
            id: 7,
            question: 'শব্দটি "স্মার্ট" এর সমার্থক কোনটি?',
            options: ["বোকা", "চালাক", "মুরুব্বী", "অজ্ঞ"],
            answer: "চালাক",
          },
          {
            id: 8,
            question: 'শব্দটি "দয়ালু" এর সমার্থক কোনটি?',
            options: ["অত্যমন্দ", "ভাল", "ক্রুদ্ধ", "কঠিন"],
            answer: "ভাল",
          },
          {
            id: 9,
            question: 'শব্দটি "দু: খিত" এর সমার্থক কোনটি?',
            options: ["সুখী", "আনন্দময়", "মন্ত্রাস্পদ", "উত্তেজিত"],
            answer: "দু: খিত",
          },
        ],
      },
      {
        topic: "punctuations",
        questions: [
          {
            id: 0,
            question:
              "একটি স্পষ্টস্বরূপের বাক্যের শেষ দেওয়ার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "কমা (,)",
              "প্রশ্নচিহ্ন (?)",
            ],
            answer: "পিরিয়ড (.)",
          },
          {
            id: 1,
            question:
              "একটি তালিকা থেকে পদগুলি আলাদা করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "ঃ (Colon)",
              "কমা (,)",
            ],
            answer: "কমা (,)",
          },
          {
            id: 2,
            question:
              "উত্সাহ, শক্তির অভাব, বা জোরের নির্দেশ করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "প্রশ্নচিহ্ন (?)",
              "সেমিকোলন (;)",
            ],
            answer: "উত্সাহের চিহ্ন (!)",
          },
          {
            id: 3,
            question:
              "একটি বাক্যে একটি বিরাম দেওয়ার জন্য বা প্রাথমিক উপাদানগুলি নির্দেশ করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "কমা (,)",
              "ড্যাশ (--)",
            ],
            answer: "কমা (,)",
          },
          {
            id: 4,
            question:
              "একটি প্রশ্নের নির্দেশ করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "কমা (,)",
              "প্রশ্নচিহ্ন (?)",
            ],
            answer: "প্রশ্নচিহ্ন (?)",
          },
          {
            id: 5,
            question:
              "অধিগ্রহণ বা সংক্রান্ত প্রকারগুলি গঠন করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "এপোস্ট্রোফি (')",
              'উদ্ধৃতি চিহ্ন (")',
              "ঃ (Colon)",
              "সেমিকোলন (;)",
            ],
            answer: "এপোস্ট্রোফি (')",
          },
          {
            id: 6,
            question:
              "একটি বাক্যে বিরাম বা বিরাম দেওয়ার জন্য একটি বিরামচিহ্ন ব্যবহার করা হয়, যা সম্প্রসারিত কমার চেয়ে শক্তিশালী?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "সেমিকোলন (;)",
              "ড্যাশ (--)",
            ],
            answer: "ড্যাশ (--)",
          },
          {
            id: 7,
            question:
              "একটি সরাসরি উল্লেখ বা ছোট কাজের শিরোনাম সন্নিবেশ করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "এপোস্ট্রোফি (')",
              'উদ্ধৃতি চিহ্ন (")',
              "ঃ (Colon)",
              "সেমিকোলন (;)",
            ],
            answer: 'উদ্ধৃতি চিহ্ন (")',
          },
          {
            id: 8,
            question:
              "একটি সংযুক্ত বাক্যে স্বাধীন অংশগুলি আলাদা করার জন্য কোন বিরামচিহ্ন ব্যবহার করা হয়?",
            options: [
              "পিরিয়ড (.)",
              "উত্সাহের চিহ্ন (!)",
              "সেমিকোলন (;)",
              "ড্যাশ (--)",
            ],
            answer: "সেমিকোলন (;)",
          },
          {
            id: 9,
            question:
              "একটি বাক্যের মধ্যে একটি বিরাম বা জোর দেওয়ার জন্য কোন বিরামচিহ্ন বা বিরামচিহ্ন ব্যবহার করা হয়, অথবা একটি বাক্যে জোর প্রদান করার জন্য?",
            options: [
              "অকারণিক ( )",
              "এপোস্ট্রোফি (')",
              "ড্যাশ (--)",
              'উদ্ধৃতি চিহ্ন (")',
            ],
            answer: "ড্যাশ (--)",
          },
        ],
      },
      {
        topic: "phrasal verbs",
        questions: [
          {
            id: 0,
            question:
              'যেখানে "সে তার ডেন্টিস্ট অ্যাপয়েন্টমেন্ট বাতিল করেছিল" সেখানে ফ্রেজল বার্ব কি?',
            options: ["রাখা", "বন্ধ", "অ্যাপয়েন্টমেন্ট", "রাখা বন্ধ"],
            answer: "রাখা বন্ধ",
          },
          {
            id: 1,
            question:
              'যেখানে "তারা সময়ের অতিশয় দাগ পরেছে" সেখানে ফ্রেজল বার্ব কি?',
            options: ["পালিত", "আউট", "সময়", "পালিত আউট"],
            answer: "পালিত আউট",
          },
          {
            id: 2,
            question:
              'যেখানে "সে কাজের প্রস্তাব প্রত্যাখ্যান করেছিলেন" সেখানে ফ্রেজল বার্ব কি?',
            options: ["পালিত", "নিচে", "কাজ", "নিচে পালিত"],
            answer: "নিচে পালিত",
          },
          {
            id: 3,
            question:
              'যেখানে "সে তার মা পরিবারের পরিবর্তে নিয়েছে" সেখানে ফ্রেজল বার্ব কি?',
            options: ["নেয়", "পর", "মা", "নেয় পর"],
            answer: "নেয় পর",
          },
          {
            id: 4,
            question:
              'যেখানে "তিনি তার গার্লফ্রেন্ড সঙ্গে বিচ্ছেদ করেছিলেন" সেখানে ফ্রেজল বার্ব কি?',
            options: ["ভাঙা", "উপরে", "গার্লফ্রেন্ড", "ভাঙা উপরে"],
            answer: "ভাঙা উপরে",
          },
          {
            id: 5,
            question:
              'যেখানে "সে একটি পুরনো ছবি পেয়েছিল" সেখানে ফ্রেজল বার্ব কি?',
            options: ["আসে", "দিকে", "ছবি", "আসে দিকে"],
            answer: "আসে দিকে",
          },
          {
            id: 6,
            question:
              'যেখানে "তারা মিটিং বাতিল করেছিল" সেখানে ফ্রেজল বার্ব কি?',
            options: ["ডাকা", "বন্ধ", "মিটিং", "ডাকা বন্ধ"],
            answer: "ডাকা বন্ধ",
          },
          {
            id: 7,
            question:
              'যেখানে "সে গ্রামে বড় হয়েছিলেন" সেখানে ফ্রেজল বার্ব কি?',
            options: ["বাড়ানো", "উপরে", "গ্রাম", "বাড়ানো উপরে"],
            answer: "বাড়ানো উপরে",
          },
          {
            id: 8,
            question:
              'যেখানে "সে তার পুরানো বন্ধুর সাথে দোকানে পরেছিল" সেখানে ফ্রেজল বার্ব কি?',
            options: ["পালিত", "মধ্যে", "বন্ধু", "পালিত মধ্যে"],
            answer: "পালিত মধ্যে",
          },
          {
            id: 9,
            question:
              'যেখানে "তিনি খবর শুনতে শুনলেন নামের সময়" সেখানে ফ্রেজল বার্ব কি?',
            options: ["ভাঙা", "নিচে", "শুনে", "ভাঙা নিচে"],
            answer: "ভাঙা নিচে",
          },
        ],
      },
      {
        topic: "idioms",
        questions: [
          {
            id: 0,
            question: 'উক্তি "বরফ ভাঙ্গা" মানে কি?',
            options: [
              "নৌকা চলাচল",
              "কিছু ঠান্ডা করা",
              "সামাজিক যোগাযোগ আরম্ভ করা",
              "একটি শিশুর মেয়াদ শেষ হয়েছে",
            ],
            answer: "সামাজিক যোগাযোগ আরম্ভ করা",
          },
          {
            id: 1,
            question: 'উক্তি "পিস অফ কেক" মানে কি?',
            options: [
              "এক কেকের পিস",
              "কিছু কঠিন বা চ্যালেঞ্জিং",
              "কিছু সহজ",
              "একটি বেকারি জিনিস",
            ],
            answer: "কিছু সহজ",
          },
          {
            id: 2,
            question: 'উক্তি "স্যাক মারা" মানে কি?',
            options: [
              "একটি ব্যাগ ধরা",
              "ঘুষি বাগান",
              "খেলার প্রস্তুতি",
              "বিছু খুন",
            ],
            answer: "ঘুষি বাগান",
          },
          {
            id: 3,
            question: 'উক্তি "হাত এবং পা মুছে যাওয়া" মানে কি?',
            options: [
              "কিছু সস্তা কিনতে",
              "একটি অঙ্গ হারাতে",
              "ব্যয়ী হওয়া",
              "দান করা অনুমোদিত",
            ],
            answer: "ব্যয়ী হওয়া",
          },
          {
            id: 4,
            question: 'উক্তি "মেয়ের ও কুকুরের বৃষ্টি" মানে কি?',
            options: [
              "আকাশ থেকে মেয়ে এবং কুকুর",
              "ভারী বৃষ্টি",
              "সূর্য আলো",
              "একটি পাল্তু পণ্য বিজ্ঞাপন",
            ],
            answer: "ভারী বৃষ্টি",
          },
          {
            id: 5,
            question: 'উক্তি "মিডনাইট অয়েল জ্বালাও" মানে কি?',
            options: [
              "একটি মোমবাতি আলো",
              "দেরি ঘুমানো",
              "রাতে দেরি কাজ করা",
              "শক্তি সংরক্ষণ করা",
            ],
            answer: "রাতে দেরি কাজ করা",
          },
          {
            id: 6,
            question: 'উক্তি "ভুল গাছে বাক করা" মানে কি?',
            options: [
              "একটি গাছে উঠা",
              "একটি গাছে ভোক্তে",
              "ভুল স্থানে অনুসন্ধান",
              "গাছ পরিহার করা",
            ],
            answer: "ভুল স্থানে অনুসন্ধান",
          },
          {
            id: 7,
            question: 'উক্তি "চেজে কেটা" মানে কি?',
            options: [
              "দ্রুত পালান",
              "সরাসরি পয়েন্টে যাওয়া",
              "একটি ছাঁকনি দিয়ে কিছু কাটা",
              "কেউ কথা বন্ধ করা",
            ],
            answer: "সরাসরি পয়েন্টে যাওয়া",
          },
          {
            id: 8,
            question: 'উক্তি "পা ভাঙ্গা" মানে কি?',
            options: [
              "প্রায় কাউকে ভাঙ্গা",
              "ভাল ভাগ্য",
              "খারাপ ভাগ্য",
              "ব্যায়াম করা",
            ],
            answer: "ভাল ভাগ্য",
          },
          {
            id: 9,
            question: 'উক্তি "ব্যাগে বিড়বড় করা" মানে কি?',
            options: [
              "একটি বিড়বড় কুকুর মুক্তি",
              "একটি রহস্য রাখা",
              "একটি রহস্য ফাঁস করা",
              "একটি বিড়বড় কুকুর সঙ্গে খেলা",
            ],
            answer: "একটি রহস্য ফাঁস করা",
          },
        ],
      },
      {
        topic: "active and passive voice",
        questions: [
          {
            id: 0,
            question:
              'যে ভায়েসে "বিড়াল মাউস পিছিয়ে দাঁড়াল" বাক্যটি লেখা আছে?',
            options: [
              "সক্রিয় ভায়েস",
              "নিষ্ক্রিয় ভায়েস",
              "সরাসরি ভায়েস",
              "প্রত্যক্ষ ভায়েস",
            ],
            answer: "সক্রিয় ভায়েস",
          },
          {
            id: 1,
            question:
              'বাক্য "চিঠি জন লেখেছিল" কে সক্রিয় ভায়েসে রূপান্তর করুন।',
            options: [
              "জন চিঠি লেখেছিল",
              "জন চিঠি লেখছে",
              "জন চিঠি লেখেছে",
              "জন চিঠি লেখেছিলেন",
            ],
            answer: "জন চিঠি লেখেছিল",
          },
          {
            id: 2,
            question:
              'বাক্য "কেকটি বেকার দ্বারা পাকা হয়েছিল" কোন ভায়েসে লেখা আছে?',
            options: [
              "সক্রিয় ভায়েস",
              "নিষ্ক্রিয় ভায়েস",
              "সরাসরি ভায়েস",
              "প্রত্যক্ষ ভায়েস",
            ],
            answer: "নিষ্ক্রিয় ভায়েস",
          },
          {
            id: 3,
            question:
              'বাক্য "চলচ্চিত্রটি লক্ষ লাখ মানুষের দ্বারা দেখা হয়েছিল" কে সক্রিয় ভায়েসে রূপান্তর করুন।',
            options: [
              "লাখ লোকদের চলচ্চিত্রটি দেখছিল",
              "লাখ লোক চলচ্চিত্রটি দেখছে",
              "লাখ লোক চলচ্চিত্রটি দেখতেছিল",
              "লাখ লোক চলচ্চিত্রটি দেখবে",
            ],
            answer: "লাখ লোক চলচ্চিত্রটি দেখছিল",
          },
          {
            id: 4,
            question: 'বাক্য "বইটি শিক্ষক পড়েছিল" কোন ভায়েসে লেখা আছে?',
            options: [
              "সক্রিয় ভায়েস",
              "নিষ্ক্রিয় ভায়েস",
              "সরাসরি ভায়েস",
              "প্রত্যক্ষ ভায়েস",
            ],
            answer: "নিষ্ক্রিয় ভায়েস",
          },
          {
            id: 5,
            question:
              'বাক্য "গৃহটি নির্মাণকর্মীরা নির্মাণ করেছিল" কে সক্রিয় ভায়েসে রূপান্তর করুন।',
            options: [
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করেছে",
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করছে",
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করেছিলেন",
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করবে",
            ],
            answer: "নির্মাণকর্মীরা গৃহটি নির্মাণ করেছিল",
          },
          {
            id: 6,
            question:
              'বাক্য "সংগীতয়জ্ঞরা অনেক মানুষ দ্বারা উপস্থিত ছিল" কোন ভায়েসে লেখা আছে?',
            options: [
              "সক্রিয় ভায়েস",
              "নিষ্ক্রিয় ভায়েস",
              "সরাসরি ভায়েস",
              "প্রত্যক্ষ ভায়েস",
            ],
            answer: "নিষ্ক্রিয় ভায়েস",
          },
          {
            id: 7,
            question:
              'বাক্য "মেসেজটি ইমেইল দ্বারা পাঠানো হয়েছিল" কে সক্রিয় ভায়েসে রূপান্তর করুন।',
            options: [
              "ইমেইল মেসেজ পাঠিয়েছিল",
              "ইমেইল মেসেজ পাঠাচ্ছে",
              "ইমেইল মেসেজ পাঠায়",
              "ইমেইল মেসেজ পাঠিতেছিল",
            ],
            answer: "ইমেইল মেসেজ পাঠিয়েছিল",
          },
          {
            id: 8,
            question:
              'বাক্য "কেকটি সঠিকভাবে পাকা হয়েছিল" কোন ভায়েসে লেখা আছে?',
            options: [
              "সক্রিয় ভায়েস",
              "নিষ্ক্রিয় ভায়েস",
              "সরাসরি ভায়েস",
              "প্রত্যক্ষ ভায়েস",
            ],
            answer: "নিষ্ক্রিয় ভায়েস",
          },
          {
            id: 9,
            question:
              'বাক্য "গাছগুলি সেবাকর্মীরা রোপ করেছিল" কে সক্রিয় ভায়েসে রূপান্তর করুন।',
            options: [
              "সেবাকর্মীরা গাছ রোপ করছিল",
              "সেবাকর্মীরা গাছ রোপ করবে",
              "সেবাকর্মীরা গাছ রোপ করেছিলেন",
              "সেবাকর্মীরা গাছ রোপ করেছে",
            ],
            answer: "সেবাকর্মীরা গাছ রোপ করেছিল",
          },
        ],
      },
      {
        topic: "direct and indirect speech",
        questions: [
          {
            id: 0,
            question:
              "বাক্যটি 'বিড়ালটি ইঁদুরটি পেছনে পড়েছিল' কোন ভয়েসে লেখা আছে?",
            options: [
              "সক্রিয় ভয়েস",
              "নিষ্ক্রিয় ভয়েস",
              "সরাসরি ভয়েস",
              "প্রত্যক্ষ ভয়েস",
            ],
            answer: "সক্রিয় ভয়েস",
          },
          {
            id: 1,
            question:
              "বাক্য 'চিঠি জন জন লেখেছিল' কে সক্রিয় ভয়েসে রূপান্তর করুন।",
            options: [
              "জন চিঠি লেখেছিল",
              "জন চিঠি লিখছে",
              "জন চিঠি লিখেছে",
              "জন চিঠি লেখেছিলেন",
            ],
            answer: "জন চিঠি লেখেছিল",
          },
          {
            id: 2,
            question:
              "বাক্য 'কেকটি বেকার দ্বারা পাকা হয়েছিল' কোন ভয়েসে লেখা আছে?",
            options: [
              "সক্রিয় ভয়েস",
              "নিষ্ক্রিয় ভয়েস",
              "সরাসরি ভয়েস",
              "প্রত্যক্ষ ভয়েস",
            ],
            answer: "নিষ্ক্রিয় ভয়েস",
          },
          {
            id: 3,
            question:
              "বাক্য 'চলচ্চিত্রটি লক্ষ লাখ মানুষের দ্বারা দেখা হয়েছিল' কে সক্রিয় ভয়েসে রূপান্তর করুন।",
            options: [
              "লাখ লোকদের চলচ্চিত্রটি দেখছিল",
              "লাখ লোক চলচ্চিত্রটি দেখছে",
              "লাখ লোক চলচ্চিত্রটি দেখতেছিল",
              "লাখ লোক চলচ্চিত্রটি দেখবে",
            ],
            answer: "লাখ লোক চলচ্চিত্রটি দেখছিল",
          },
          {
            id: 4,
            question: "বাক্য 'বইটি শিক্ষক পড়েছিল' কোন ভয়েসে লেখা আছে?",
            options: [
              "সক্রিয় ভয়েস",
              "নিষ্ক্রিয় ভয়েস",
              "সরাসরি ভয়েস",
              "প্রত্যক্ষ ভয়েস",
            ],
            answer: "নিষ্ক্রিয় ভয়েস",
          },
          {
            id: 5,
            question:
              "বাক্য 'গৃহটি নির্মাণকর্মীরা নির্মাণ করেছিল' কে সক্রিয় ভয়েসে রূপান্তর করুন।",
            options: [
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করেছে",
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করছে",
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করেছিলেন",
              "নির্মাণকর্মীরা গৃহটি নির্মাণ করবে",
            ],
            answer: "নির্মাণকর্মীরা গৃহটি নির্মাণ করেছিল",
          },
          {
            id: 6,
            question:
              "বাক্য 'সংগীতয়জ্ঞরা অনেক মানুষ দ্বারা উপস্থিত ছিল' কোন ভয়েসে লেখা আছে?",
            options: [
              "সক্রিয় ভয়েস",
              "নিষ্ক্রিয় ভয়েস",
              "সরাসরি ভয়েস",
              "প্রত্যক্ষ ভয়েস",
            ],
            answer: "নিষ্ক্রিয় ভয়েস",
          },
          {
            id: 7,
            question:
              "বাক্য 'মেসেজটি ইমেইল দ্বারা পাঠানো হয়েছিল' কে সক্রিয় ভয়েসে রূপান্তর করুন।",
            options: [
              "ইমেইল মেসেজ পাঠিয়েছিল",
              "ইমেইল মেসেজ পাঠাচ্ছে",
              "ইমেইল মেসেজ পাঠায়",
              "ইমেইল মেসেজ পাঠিতেছিল",
            ],
            answer: "ইমেইল মেসেজ পাঠিয়েছিল",
          },
          {
            id: 8,
            question:
              "বাক্য 'কেকটি সঠিকভাবে পাকা হয়েছিল' কোন ভয়েসে লেখা আছে?",
            options: [
              "সক্রিয় ভয়েস",
              "নিষ্ক্রিয় ভয়েস",
              "সরাসরি ভয়েস",
              "প্রত্যক্ষ ভয়েস",
            ],
            answer: "নিষ্ক্রিয় ভয়েস",
          },
          {
            id: 9,
            question:
              "বাক্য 'গাছগুলি সেবাকর্মীরা রোপ করেছিল' কে সক্রিয় ভয়েসে রূপান্তর করুন।",
            options: [
              "সেবাকর্মীরা গাছ রোপ করছিল",
              "সেবাকর্মীরা গাছ রোপ করবে",
              "সেবাকর্মীরা গাছ রোপ করেছিলেন",
              "সেবাকর্মীরা গাছ রোপ করেছে",
            ],
            answer: "সেবাকর্মীরা গাছ রোপ করেছিল",
          },
        ],
      },
      {
        topic: "vocabulary",
        questions: [
          {
            id: 0,
            question: "বাক্যটি 'ব্যবহার' এর অর্থ কী?",
            options: [
              "ভাল পোষণ",
              "সঠিকভাবে ব্যবহার করা",
              "অধিক উচ্চারণ",
              "দ্রুত পালাই",
            ],
            answer: "সঠিকভাবে ব্যবহার করা",
          },
          {
            id: 1,
            question: " 'পাগল' শব্দের অর্থ কী?",
            options: ["অবদান", "শুভ", "অনিয়মিত বা অদ্ভুত", "চালক"],
            answer: "অনিয়মিত বা অদ্ভুত",
          },
          {
            id: 2,
            question: "বাক্য 'নিরাশ' এর অর্থ কী?",
            options: ["খুব আনন্দিত", "দু: খিত বা অসন্তুষ্ট", "অবাক", "বিরক্ত"],
            answer: "দু: খিত বা অসন্তুষ্ট",
          },
          {
            id: 3,
            question: " 'সর্দি' শব্দের অর্থ কী?",
            options: [
              "অসুস্থ হওয়া",
              "খুশি হওয়া",
              "অবশেষে থাকা",
              "গরম পরিহিত করা",
            ],
            answer: "অসুস্থ হওয়া",
          },
          {
            id: 4,
            question: "বাক্য 'জিজ্ঞাসু' এর অর্থ কী?",
            option: ["অসম্মান", "অশিষ্ট", "আগ্রহী এবং প্রশ্নাবালী", "ভয়প্রদ"],
            oanswer: "আগ্রহী এবং প্রশ্নাবালী",
          },
          {
            oid: 5,
            oquestion: " 'উদ্বিগ্ন' শব্দের অর্থ কী?",
            ooptions: ["সুখী", "আরামশীল", "ভয়বহ বা উদ্বিগ্ন", "বিরক্ত"],
            oanswer: "ভয়বহ বা উদ্বিগ্ন",
          },
          {
            id: 6,
            question: "বাক্য 'ধৈর্যশীল' এর অর্থ কী?",
            options: ["অধৈর্য", "তাড়াতাড়ি", "অপেক্ষা করার প্রস্তুতি", "অসুখ"],
            answer: "অপেক্ষা করার প্রস্তুতি",
          },
          {
            id: 7,
            question: " 'উত্তেজিত' শব্দের অর্থ কী?",
            options: ["বিরক্ত", "নার্ভাস বা উদ্বিগ্ন", "অবশেষে", "শান্ত"],
            answer: "নার্ভাস বা উদ্বিগ্ন",
          },
          {
            id: 8,
            question: "বাক্য 'সতর্ক' এর অর্থ কী?",
            options: [
              "অসতর্ক",
              "বিচ্ছিন্ন",
              "মনোযোগ এবং সাবধানে ব্যবস্থাপনা",
              "বিরক্ত",
            ],
            answer: "মনোযোগ এবং সাবধানে ব্যবস্থাপনা",
          },
          {
            id: 9,
            question: " 'বিরক্ত' শব্দের অর্থ কী?",
            options: ["আগ্রহী", "সক্রিয়", "অবশেষে থাকা লক্ষণ", "উত্তেজিত"],
            answer: "অবশেষে থাকা লক্ষণ",
          },
        ],
      },
    ],
  },
  {
    language: "arabic",
    topics: [
      {
        topic: "Parts of speech",
        questions: [
          {
            id: 0,
            question:
              "ما هو نوع الكلمة 'قفز' في الجملة 'القطة تحب القفز على الطاولة'؟",
            options: ["اسم", "فعل", "صفة", "ظرف"],
            answer: "فعل",
          },
          {
            id: 1,
            question: "في الجملة 'الكلب مطارد القطة'، ما هو نوع الكلمة 'كلب'؟",
            options: ["اسم", "فعل", "صفة", "ظرف"],
            answer: "اسم",
          },
          {
            id: 2,
            question: "حدد الظرف في الجملة التالية: 'غنت بجمال في الحفلة.'",
            options: ["غنت", "بجمال", "حفلة", "هي"],
            answer: "بجمال",
          },
          {
            id: 3,
            question: "ما هو نوع الكلمة 'كلب'؟",
            options: ["اسم", "فعل", "صفة", "ظرف"],
            answer: "اسم",
          },
          {
            id: 4,
            question: "أي جزء من الكلام يعدل عادة الأسماء أو الضمائر؟",
            options: ["فعل", "صفة", "ظرف", "ربط"],
            answer: "صفة",
          },
          {
            id: 5,
            question:
              "حدد الربط في الجملة: 'أحب كل من الشوكولاتة والفانيليا في الآيس كريم.'",
            options: ["أحب", "كل من", "و", "فانيليا"],
            answer: "و",
          },
          {
            id: 6,
            question: "ما هو نوع الكلمة 'تحت' في الجملة 'الكتاب تحت الطاولة'؟",
            options: ["اسم", "فعل", "صفة", "حرف جر"],
            answer: "حرف جر",
          },
          {
            id: 7,
            question: "أي جزء من الكلام يستخدم غالبًا لربط جملتين مستقلتين؟",
            options: ["حرف جر", "ربط", "ظرف", "ضمير"],
            answer: "ربط",
          },
          {
            id: 8,
            question: "في الجملة 'شربت الماء بسرعة'، ما هو نوع الكلمة 'بسرعة'؟",
            options: ["اسم", "فعل", "ظرف", "صفة"],
            answer: "ظرف",
          },
          {
            id: 9,
            question: "أي جزء من الكلام يصف الفعل أو الحالة في الجملة؟",
            options: ["اسم", "فعل", "صفة", "ضمير"],
            answer: "فعل",
          },
        ],
      },
      {
        topic: "Tenses",
        questions: [
          {
            id: 0,
            question: 'أي الزمن يستخدم في الجملة "هي تتناول العشاء الآن"؟',
            options: ["الماضي", "الحاضر", "المستقبل", "الماضي التام"],
            answer: "الحاضر",
          },
          {
            id: 1,
            question: 'ما هو الشكل الصحيح للماضي من الفعل "يجري"؟',
            options: ["يجري", "جرى", "جارٍ", "سيجري"],
            answer: "جرى",
          },
          {
            id: 2,
            question:
              'في الجملة "سيكونون قد انتهوا من المشروع بحلول غدٍ"، أي زمن يُستخدم؟',
            options: ["الماضي", "الحاضر", "المستقبل", "الحاضر المستمر"],
            answer: "المستقبل",
          },
          {
            id: 3,
            question:
              'أي زمن يتكون باستخدام "سيكون" أو "ستكون" متبوعًا بالمصدر الماضي للفعل؟',
            options: [
              "المضارع التام",
              "الماضي التام",
              "المستقبل التام",
              "الحاضر المستمر",
            ],
            answer: "المستقبل التام",
          },
          {
            id: 4,
            question:
              'حدد الزمن المستخدم في الجملة: "كان قد غادر بالفعل عندما وصلت."',
            options: ["الحاضر", "الماضي", "المستقبل", "الماضي التام"],
            answer: "الماضي التام",
          },
          {
            id: 5,
            question: 'في الجملة "ستكون تغني في الحفل غدًا"، أي زمن يُستخدم؟',
            options: ["الحاضر", "الماضي", "المستقبل", "الحاضر المستمر"],
            answer: "المستقبل",
          },
          {
            id: 6,
            question:
              'ما هو الزمن الذي يتكون باستخدام "أنا/هو/هي" + المصدر المضارع للفعل؟',
            options: ["الماضي", "الحاضر", "المستقبل", "الحاضر المستمر"],
            answer: "الحاضر المستمر",
          },
          {
            id: 7,
            question:
              'حدد الزمن المستخدم في الجملة: "لقد عشت هنا لمدة خمس سنوات."',
            options: ["الحاضر", "الماضي", "الحاضر التام", "الماضي التام"],
            answer: "الحاضر التام",
          },
          {
            id: 8,
            question:
              'ما هو الزمن الذي يتكون باستخدام "كان/كانت" + المصدر المضارع للفعل؟',
            options: ["الماضي", "الحاضر", "المستقبل", "الماضي المستمر"],
            answer: "الماضي المستمر",
          },
          {
            id: 9,
            question:
              'أي زمن يُستخدم في الجملة "ستكون قد كانت تدرس لمدة ساعتين بحلول وقت وصولك"؟',
            options: ["الحاضر", "الماضي", "المستقبل", "المستقبل التام المستمر"],
            answer: "المستقبل التام المستمر",
          },
        ],
      },
      {
        topic: "Articles",
        questions: [
          {
            id: 0,
            question:
              'أي المقالات يجب استخدامها قبل كلمة "تفاحة" في الجملة "أكلت ___ تفاحة أمس"؟',
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "مقالة غير معينة",
          },
          {
            id: 1,
            question:
              'في الجملة "هو ___ طالب جامعي،" أي مقال يجب أن يملأ الفراغ؟',
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "مقالة غير معينة",
          },
          {
            id: 2,
            question:
              'أي المقالات يجب استخدامها قبل كلمة "ساعة" في الجملة "سأكون هنا في ___ ساعة"؟',
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "ال",
          },
          {
            id: 3,
            question:
              '"___ قلم أقوى من ___ سيف." أي المقالات يجب وضعها في الفراغين على التوالي؟',
            options: [
              "مقالة غير معينة، مقالة غير معينة",
              "مقالة معينة، مقالة معينة",
              "ال، ال",
              "ال، مقالة غير معينة",
            ],
            answer: "ال، مقالة غير معينة",
          },
          {
            id: 4,
            question:
              "أي المقالات تستخدم قبل الأسماء المعدودة المفردة التي تمثل أي عضو من مجموعة أو فصيلة؟",
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "مقالة غير معينة",
          },
          {
            id: 5,
            question:
              'في الجملة "هي ___ طفلة وحيدة،" أي مقال يجب أن يملأ الفراغ؟',
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "مقالة غير معينة",
          },
          {
            id: 6,
            question:
              "أي المقالات تستخدم قبل الأسماء المعدودة المفردة التي تمثل عضوًا معينًا من مجموعة أو فصيلة؟",
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "ال",
          },
          {
            id: 7,
            question:
              'في الجملة "يذهب إلى ___ كنيسة كل يوم أحد،" أي مقال يجب أن يملأ الفراغ؟',
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "ال",
          },
          {
            id: 8,
            question:
              "أي المقالات تستخدم قبل الأسماء المعدودة المفردة التي يتم ذكرها لأول مرة؟",
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "مقالة غير معينة",
          },
          {
            id: 9,
            question:
              'في الجملة "حصلت على ___ جائزة لأدائها،" أي مقال يجب أن يملأ الفراغ؟',
            options: ["مقالة معينة", "مقالة غير معينة", "ال", "بدون مقالة"],
            answer: "ال",
          },
        ],
      },

      {
        topic: "synonyms",
        questions: [
          {
            id: 0,
            question: 'ما هو المرادف لكلمة "سعيد"؟',
            options: ["حزين", "مفرح", "غاضب", "متعب"],
            answer: "مفرح",
          },
          {
            id: 1,
            question: 'أي كلمة هي مرادفة لـ "كبير"؟',
            options: ["صغير", "كبير", "صغير", "صغير"],
            answer: "كبير",
          },
          {
            id: 2,
            question: 'ما هو المرادف لـ "صعب"؟',
            options: ["سهل", "صعب", "بسيط", "معقد"],
            answer: "صعب",
          },
          {
            id: 3,
            question: 'أي كلمة هي مرادفة لـ "جميل"؟',
            options: ["قبيح", "جميل", "وسيم", "بسيط"],
            answer: "جميل",
          },
          {
            id: 4,
            question: 'ما هو المرادف لـ "غاضب"؟',
            options: ["سعيد", "حزين", "غاضب", "هادئ"],
            answer: "غاضب",
          },
          {
            id: 5,
            question: 'أي كلمة هي مرادفة لـ "سريع"؟',
            options: ["بطيء", "سريع", "سريع", "سريع"],
            answer: "سريع",
          },
          {
            id: 6,
            question: 'ما هو المرادف لـ "هادئ"؟',
            options: ["صاخب", "صاخب", "هادئ", "متحدث"],
            answer: "هادئ",
          },
          {
            id: 7,
            question: 'أي كلمة هي مرادفة لـ "ذكي"؟',
            options: ["غبي", "ذكي", "غبي", "جاهل"],
            answer: "ذكي",
          },
          {
            id: 8,
            question: 'ما هو المرادف لـ "طيب"؟',
            options: ["قاسي", "طيب", "قاسي", "قاسي"],
            answer: "طيب",
          },
          {
            id: 9,
            question: 'أي كلمة هي مرادفة لـ "حزين"؟',
            options: ["سعيد", "مفرح", "مكتئب", "متحمس"],
            answer: "مكتئب",
          },
        ],
      },

      {
        topic: "punctuations",
        questions: [
          {
            id: 0,
            question:
              "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى نهاية جملة تعريفية؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "الفاصلة (,)",
              "علامة الاستفهام (?)",
            ],
            answer: "النقطة (.)",
          },
          {
            id: 1,
            question:
              "ما هي العلامة الترقيمية التي تستخدم لفصل العناصر في قائمة؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "النقطتين (:)",
              "الفاصلة (,)",
            ],
            answer: "الفاصلة (,)",
          },
          {
            id: 2,
            question:
              "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى الإثارة، أو العاطفة القوية، أو التركيز؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "علامة الاستفهام (?)",
              "الفاصلة المنقوطة (;)",
            ],
            answer: "علامة التعجب (!)",
          },
          {
            id: 3,
            question:
              "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى توقف في الجملة أو لتحديد العناصر التمهيدية؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "الفاصلة (,)",
              "الشرطة (--)",
            ],
            answer: "الفاصلة (,)",
          },
          {
            id: 4,
            question: "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى سؤال؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "الفاصلة (,)",
              "علامة الاستفهام (?)",
            ],
            answer: "علامة الاستفهام (?)",
          },
          {
            id: 5,
            question:
              "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى الملكية أو لتشكيل الاختصارات؟",
            options: [
              "العلامة المستقيمة (')",
              'علامة التنصيص (")',
              "النقطتين (:)",
              "الفاصلة المنقوطة (;)",
            ],
            answer: "العلامة المستقيمة (')",
          },
          {
            id: 6,
            question:
              "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى فاصل أو توقف في الجملة، وغالبًا ما تكون أقوى من الفاصلة؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "الفاصلة المنقوطة (;)",
              "الشرطة (--)",
            ],
            answer: "الشرطة (--)",
          },
          {
            id: 7,
            question:
              "ما هي العلامة الترقيمية التي تستخدم لإغلاق الاقتباس المباشر أو للإشارة إلى عناوين الأعمال القصيرة؟",
            options: [
              "العلامة المستقيمة (')",
              'علامة التنصيص (")',
              "النقطتين (:)",
              "الفاصلة المنقوطة (;)",
            ],
            answer: 'علامة التنصيص (")',
          },
          {
            id: 8,
            question:
              "ما هي العلامة الترقيمية التي تستخدم لفصل العبارات المستقلة في جملة مركبة؟",
            options: [
              "النقطة (.)",
              "علامة التعجب (!)",
              "الفاصلة المنقوطة (;)",
              "الشرطة (--)",
            ],
            answer: "الفاصلة المنقوطة (;)",
          },
          {
            id: 9,
            question:
              "ما هي العلامة الترقيمية التي تستخدم للإشارة إلى توقف أو لتوفير التركيز داخل الجملة؟",
            options: [
              "الأقواس ( )",
              "العلامة المستقيمة (')",
              "الشرطة (--)",
              'علامة التنصيص (")',
            ],
            answer: "الشرطة (--)",
          },
        ],
      },
      {
        topic: "phrasal verbs",
        questions: [
          {
            questions: [
              {
                id: 0,
                question: "ما هو الفعل العباري في الجملة 'أجَّلت موعد طبيبها'؟",
                options: ["وضع", "بعد", "موعد", "وضع بعد"],
                answer: "وضع بعد",
              },
              {
                id: 1,
                question: "في الجملة 'نفد من الوقت'، ما هو الفعل العباري؟",
                options: ["ركض", "خارج", "وقت", "ركض خارج"],
                answer: "ركض خارج",
              },
              {
                id: 2,
                question: "ما هو الفعل العباري في الجملة 'رفض العرض الوظيفي'؟",
                options: ["أراد", "إلى أسفل", "وظيفة", "أراد إلى أسفل"],
                answer: "أراد إلى أسفل",
              },
              {
                id: 3,
                question:
                  "في الجملة 'تأخذ شبهها من والدتها'، ما هو الفعل العباري؟",
                options: ["تأخذ", "بعد", "أم", "تأخذ بعد"],
                answer: "تأخذ بعد",
              },
              {
                id: 4,
                question: "ما هو الفعل العباري في الجملة 'انفصل عن صديقته'؟",
                options: ["كسر", "إلى أعلى", "صديقة", "كسر إلى أعلى"],
                answer: "كسر إلى أعلى",
              },
              {
                id: 5,
                question: "في الجملة 'صادفت صورة قديمة'، ما هو الفعل العباري؟",
                options: ["جاء", "عبر", "صورة فوتوغرافية", "جاء عبر"],
                answer: "جاء عبر",
              },
              {
                id: 6,
                question: "ما هو الفعل العباري في الجملة 'ألغوا الاجتماع'؟",
                options: ["دعا", "إلى أسفل", "اجتماع", "دعا إلى أسفل"],
                answer: "دعا إلى أسفل",
              },
              {
                id: 7,
                question: "في الجملة 'نشأ في الريف'، ما هو الفعل العباري؟",
                options: ["نما", "إلى أعلى", "ريف", "نما إلى أعلى"],
                answer: "نما إلى أعلى",
              },
              {
                id: 8,
                question:
                  "ما هو الفعل العباري في الجملة 'صادفت صديقتها القديمة في المتجر'؟",
                options: ["ركض", "إلى", "صديق", "ركض إلى"],
                answer: "ركض إلى",
              },
              {
                id: 9,
                question:
                  "في الجملة 'انهار عندما سمع الخبر'، ما هو الفعل العباري؟",
                options: ["كسر", "إلى أسفل", "سمع", "كسر إلى أسفل"],
                answer: "كسر إلى أسفل",
              },
            ],
          },
        ],
      },
      {
        topic: "idioms",
        questions: [
          {
            id: 0,
            question: "ما معنى التعبير 'كسر الجليد'؟",
            options: [
              "السباحة",
              "تبريد شيء ما",
              "بدء التفاعل الاجتماعي",
              "تكسير المرآة",
            ],
            answer: "بدء التفاعل الاجتماعي",
          },
          {
            id: 1,
            question: "ما معنى التعبير 'قطعة من الكعكة'؟",
            options: [
              "قطعة من الكعكة",
              "شيء صعب أو تحدي",
              "شيء سهل",
              "عنصر خبز",
            ],
            answer: "شيء سهل",
          },
          {
            id: 2,
            question: "ما معنى التعبير 'ضرب الكيس'؟",
            options: [
              "ضرب الكيس",
              "الذهاب إلى السرير",
              "شراء حقيبة",
              "ضرب شخص ما بكيس",
            ],
            answer: "الذهاب إلى السرير",
          },
          {
            id: 3,
            question: "ما معنى التعبير 'يكلفك ذراعًا وساقًا'؟",
            options: [
              "شراء شيء بسعر رخيص",
              "فقدان عضو",
              "أن تكون مكلفة",
              "التبرع للأعمال الخيرية",
            ],
            answer: "أن تكون مكلفة",
          },
          {
            id: 4,
            question: "ما معنى التعبير 'تمطر القطط والكلاب'؟",
            options: [
              "القطط والكلاب تسقط من السماء",
              "مطر غزير",
              "طقس مشمس",
              "ترويج لمتجر الحيوانات الأليفة",
            ],
            answer: "مطر غزير",
          },
          {
            id: 5,
            question: "ما معنى التعبير 'يحرق زيت منتصف الليل'؟",
            options: [
              "إشعال شمعة",
              "النوم في وقت متأخر",
              "العمل في وقت متأخر من الليل",
              "الحفاظ على الطاقة",
            ],
            answer: "العمل في وقت متأخر من الليل",
          },
          {
            id: 6,
            question: "ما معنى التعبير 'نباح الكلب في الشجرة الخطأ'؟",
            options: [
              "تسلق شجرة",
              "نباح على شجرة",
              "البحث في المكان الخطأ",
              "تجنب الأشجار",
            ],
            answer: "البحث في المكان الخطأ",
          },
          {
            id: 7,
            question: "ما معنى التعبير 'الانتقال إلى المطاردة'؟",
            options: [
              "الركض بسرعة",
              "الذهاب مباشرةً إلى النقطة",
              "قطع شيء بسكين",
              "وقف الحديث",
            ],
            answer: "الذهاب مباشرةً إلى النقطة",
          },
          {
            id: 8,
            question: "ما معنى التعبير 'كسر رجل'؟",
            options: [
              "كسر ساق شخص ما حرفيًا",
              "حظًا طيبًا",
              "حظًا سيئًا",
              "ممارسة الرياضة",
            ],
            answer: "حظًا طيبًا",
          },
          {
            id: 9,
            question: "ما معنى التعبير 'ترك القطة من الحقيبة'؟",
            options: [
              "إطلاق سراح القطة من الحقيبة",
              "الاحتفاظ بسر",
              "كشف سر",
              "اللعب مع القطة",
            ],
            answer: "كشف سر",
          },
        ],
      },

      {
        topic: "active and passive voice",
        questions: [
          {
            id: 0,
            question: 'بأي صيغة يُكتب الجملة "القطة قامت بمطاردة الفأر"؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الصيغة المباشرة",
              "الصيغة غير المباشرة",
            ],
            answer: "الصيغة النشطة",
          },
          {
            id: 1,
            question:
              'حوّل الجملة "تم كتابة الرسالة من قبل جون" إلى الصيغة النشطة.',
            options: [
              "جون كتب الرسالة",
              "جون يكتب الرسالة",
              "جون قام بكتابة الرسالة",
              "جون كان قد كتب الرسالة",
            ],
            answer: "جون كتب الرسالة",
          },
          {
            id: 2,
            question:
              'في الجملة "تم خبز الكعك من قبل الخباز"، ما هي الصيغة المستخدمة؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الصيغة المباشرة",
              "الصيغة غير المباشرة",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 3,
            question:
              'حوّل الجملة "شاهد الملايين من الناس الفيلم" إلى الصيغة النشطة.',
            options: [
              "الملايين من الناس كانوا يشاهدون الفيلم",
              "الملايين من الناس يشاهدون الفيلم",
              "الملايين من الناس شاهدوا الفيلم",
              "الملايين من الناس سيشاهدون الفيلم",
            ],
            answer: "الملايين من الناس شاهدوا الفيلم",
          },
          {
            id: 4,
            question:
              'ما هي الصيغة المستخدمة في الجملة "تم قراءة الكتاب من قبل المعلم"؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الصيغة المباشرة",
              "الصيغة غير المباشرة",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 5,
            question:
              'حوّل الجملة "تم بناء المنزل من قبل عمال البناء" إلى الصيغة النشطة.',
            options: [
              "عمال البناء قاموا ببناء المنزل",
              "عمال البناء يقومون ببناء المنزل",
              "عمال البناء بنوا المنزل",
              "عمال البناء سيقومون ببناء المنزل",
            ],
            answer: "عمال البناء بنوا المنزل",
          },
          {
            id: 6,
            question:
              'في الجملة "حضر العديد من الناس الحفلة"، ما هي الصيغة المستخدمة؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الصيغة المباشرة",
              "الصيغة غير المباشرة",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 7,
            question:
              'حوّل الجملة "تم إرسال الرسالة عبر البريد الإلكتروني" إلى الصيغة النشطة.',
            options: [
              "البريد الإلكتروني قام بإرسال الرسالة",
              "البريد الإلكتروني يقوم بإرسال الرسالة",
              "البريد الإلكتروني يرسل الرسالة",
              "البريد الإلكتروني قام بإرسال الرسالة",
            ],
            answer: "البريد الإلكتروني قام بإرسال الرسالة",
          },
          {
            id: 8,
            question:
              'ما هي الصيغة المستخدمة في الجملة "تم خبز الكعك بشكل مثالي"؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الصيغة المباشرة",
              "الصيغة غير المباشرة",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 9,
            question:
              'حوّل الجملة "تم زراعة الأشجار من قبل المتطوعين" إلى الصيغة النشطة.',
            options: [
              "المتطوعون كانوا يزرعون الأشجار",
              "المتطوعون يزرعون الأشجار",
              "المتطوعون زرعوا الأشجار",
              "المتطوعون سيزرعون الأشجار",
            ],
            answer: "المتطوعون زرعوا الأشجار",
          },
        ],
      },

      {
        topic: "direct and indirect speech",
        questions: [
          {
            id: 0,
            question: 'بأي صيغة يُكتب الجملة "القطة قامت بمطاردة الفأر"؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الكلام المباشر",
              "الكلام غير المباشر",
            ],
            answer: "الصيغة النشطة",
          },
          {
            id: 1,
            question:
              'حوّل الجملة "تم كتابة الرسالة من قبل جون" إلى الصيغة النشطة.',
            options: [
              "كتب جون الرسالة",
              "جون يكتب الرسالة",
              "كتب جون الرسالة",
              "كان جون قد كتب الرسالة",
            ],
            answer: "كتب جون الرسالة",
          },
          {
            id: 2,
            question:
              'في الجملة "تم خبز الكعك من قبل الخباز"، ما هي الصيغة المستخدمة؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الكلام المباشر",
              "الكلام غير المباشر",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 3,
            question:
              'حوّل الجملة "شاهد الملايين من الناس الفيلم" إلى الصيغة النشطة.',
            options: [
              "الملايين من الناس كانوا يشاهدون الفيلم",
              "الملايين من الناس يشاهدون الفيلم",
              "الملايين من الناس شاهدوا الفيلم",
              "الملايين من الناس سيشاهدون الفيلم",
            ],
            answer: "الملايين من الناس شاهدوا الفيلم",
          },
          {
            id: 4,
            question:
              'ما هي الصيغة المستخدمة في الجملة "تم قراءة الكتاب من قبل المعلم"؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الكلام المباشر",
              "الكلام غير المباشر",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 5,
            question:
              'حوّل الجملة "تم بناء المنزل من قبل عمال البناء" إلى الصيغة النشطة.',
            options: [
              "عمال البناء قاموا ببناء المنزل",
              "عمال البناء يقومون ببناء المنزل",
              "عمال البناء بنوا المنزل",
              "عمال البناء سيقومون ببناء المنزل",
            ],
            answer: "عمال البناء بنوا المنزل",
          },
          {
            id: 6,
            question:
              'في الجملة "حضر العديد من الناس الحفلة"، ما هي الصيغة المستخدمة؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الكلام المباشر",
              "الكلام غير المباشر",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 7,
            question:
              'حوّل الجملة "تم إرسال الرسالة عبر البريد الإلكتروني" إلى الصيغة النشطة.',
            options: [
              "البريد الإلكتروني قام بإرسال الرسالة",
              "البريد الإلكتروني يقوم بإرسال الرسالة",
              "البريد الإلكتروني يرسل الرسالة",
              "البريد الإلكتروني قام بإرسال الرسالة",
            ],
            answer: "البريد الإلكتروني قام بإرسال الرسالة",
          },
          {
            id: 8,
            question:
              'ما هي الصيغة المستخدمة في الجملة "تم خبز الكعك بشكل مثالي"؟',
            options: [
              "الصيغة النشطة",
              "الصيغة السلبية",
              "الكلام المباشر",
              "الكلام غير المباشر",
            ],
            answer: "الصيغة السلبية",
          },
          {
            id: 9,
            question:
              'حوّل الجملة "تم زراعة الأشجار من قبل المتطوعين" إلى الصيغة النشطة.',
            options: [
              "المتطوعون كانوا يزرعون الأشجار",
              "المتطوعون يزرعون الأشجار",
              "المتطوعون زرعوا الأشجار",
              "المتطوعون سيزرعون الأشجار",
            ],
            answer: "المتطوعون زرعوا الأشجار",
          },
        ],
      },

      {
        topic: "vocabulary",
        questions: [
          {
            id: 0,
            question: 'ما معنى "Benehmen"؟',
            options: [
              "اللباس بشكل جيد",
              "التصرف بشكل صحيح",
              "التحدث بصوت عالٍ",
              "الركض بسرعة",
            ],
            answer: "التصرف بشكل صحيح",
          },
          {
            id: 1,
            question: 'ما معنى "verrückt"؟',
            options: ["ممل", "سعيد", "غير قابل للتنبؤ أو غريب الأطوار", "ذكي"],
            answer: "غير قابل للتنبؤ أو غريب الأطوار",
          },
          {
            id: 2,
            question: 'ما معنى "enttäuscht"؟',
            options: ["سعيد جدًا", "حزين أو غير راضٍ", "مندهش", "ممل"],
            answer: "حزين أو غير راضٍ",
          },
          {
            id: 3,
            question: 'ما معنى "erkältet"؟',
            options: [
              "يكون المرء مريضًا",
              "يكون المرء سعيدًا",
              "يكون المرء متعبًا",
              "يتجهز المرء بملابس دافئة",
            ],
            answer: "يكون المرء مريضًا",
          },
          {
            id: 4,
            question: 'ما معنى "neugierig"؟',
            options: ["غير مهتم", "غير مؤدب", "مهتم وفضولي", "خائف"],
            answer: "مهتم وفضولي",
          },
          {
            id: 5,
            question: 'ما معنى "besorgt"؟',
            options: ["سعيد", "مسترخي", "قلق أو متفاجئ", "ممل"],
            answer: "قلق أو متفاجئ",
          },
          {
            id: 6,
            question: 'ما معنى "geduldig"؟',
            options: ["غير صبور", "عاجل", "جاهز للانتظار", "غير سعيد"],
            answer: "جاهز للانتظار",
          },
          {
            id: 7,
            question: 'ما معنى "aufgeregt"؟',
            options: ["ممل", "عصبي أو مثار", "متعب", "هادئ"],
            answer: "عصبي أو مثار",
          },
          {
            id: 8,
            question: 'ما معنى "aufmerksam"؟',
            options: ["غير منتبه", "مشتت", "مركز ويقظ", "ممل"],
            answer: "مركز ويقظ",
          },
          {
            id: 9,
            question: 'ما معنى "gelangweilt"؟',
            options: ["مهتم", "نشط", "متعب من الملل", "مثار"],
            answer: "متعب من الملل",
          },
        ],
      },
    ],
  },
];
