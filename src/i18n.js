import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18n.t(myKey);

// const Language = ['en','fr'];

const resources = {
  en: {
    translation: {
    
    
      title1: "Welcome,",
      title2 :"Hey You,",
      title3 :"To My creative space ! ",
      title4 :"BUILD YOUR BRAND - CREATE YOUR WEBSITE - TELL YOUR STORY",
      title5 :" Meet Me",
      title6 :" designer & developer",
      title7 :"  Hi, happy you're here! I’m Rima , a graphic + web designer with a passion for helping dedicated creatives put their absolute best foot forward with the first things prospective clients see—their brand and website.So helping you hone in on all the particulars that make your business special .",
      title8 :" Know More",
      title9 :"  A successful brand and web design are about more than just being pretty; your business baby deserves an experience.",
      title10 :"  It's about building a strategic and intentional brand identity, connecting with your target audience, evoking a feeling when people interact with your brand, attracting those ideal clients, and crushing those business goals!So, grab yourself a cup of coffee (or tea) while we visualize your brand and create a clean + creative design!",
      title11 :" Ready to get started?",
      title12 :" Brand Identity Design",
      title13 :" Looking to build your brand or just ready for a refresh? We'll work through the branding process to create and design a cohesive visual brand identity.",
      title14 :" What I Do",
      title15 :"Web Design",
      title16 :" Ready to create a custom website that's not only well-designed but accelerates your business goals? We’ll make sure that your site is strategically designed so it's consistent with your branding and will attract your ideal clients all while being visually engaging.",
      title17 :" Ready to create a custom website that's not only well-Developed but accelerates your business goals? We’ll make sure that your site is strategically designed and developed so it's consistent  with your branding and will attract your ideal clients all while being visually engaging.",
      title18 :" Explore More",
      title19 :" Past Work",
      title20 :" view some of my recent projects ",
      title21 :"  You want branding that represents your business.  You need a website that stands out from everyone else in your industry, looks amazing, supports your brand, and grows your business.  You're ready to collaborate with a designer who gets it and will take care of your digital baby from start to finish.  If you're a yes to any of these, you've come to the right place!",
      title22 :" take  a peek",
      title23 :" Get in Touch",
      title24 :"How it Works",
      title25 :" kickoff",
      title26 :" I’ll start you off with a bit of client homework—a questionnaire—where you tell me all about your business and vision. We'll make sure we have the styling figured out and are on the same page.",
      title27 :"design ",
      title28 :"Let's get started! With your design details completed, I'll get to work building your site, crafting your brand, or both! From start to finish you’ll get the works!  ",
      title29 :"edit ",
      title30 :"Time to get into the details! You're going to dive deep into your newly designed site or brand, then we'll go over any revisions needed to make sure you're thrilled with the finished product. ",
      title31 :"launch ",
      title32 :"Congrats! After your site is launched, you'll get a recorded walk-through showing you the ropes for your site + launch graphics. Went for branding? All materials will be delivered in high-res format files! ",
      title33 :" Self-starter and creative with a background in graphic design , web design  and web development , Based in Tunisia, my client's work has brought me all over the world (digitally that is) and I'm so grateful to be able to create brands + websites for creative entrepreneurs like yourself! As an entrepreneur with a technical and design background, I am passionate about building thoughtfully designed experiences. I am always looking to solve problems, challenge myself and try new ideas. I am enthusiastic about all things design, web development and digital marketing. I truly believe no question is too big, nor too small. So helping you hone in on all the particulars that make your business special, or giving you a pep talk to quiet entrepreneurial jitters, you'll be walked through a detailed step-by-step process with tools to help you reach your design goals and more. ",
      title34 :"I'm so glad you're here! ",
      title35 :"Check out the services",
      title36 :"",
      title37 :"Tell us about your project, send us a note using the handy form right over there. I can’t wait to hear about your brand + website vision and help you bring it to life.",
      title38 :"YourName",
      title39 :"About",
      title40 :"Contact Me",
      title41 :"Subject",
      title42 :"Choose Services",
      title43 :"Your Budget",
      title44 :"Send Message",
      title45 :"Your message",
      title46 :"Let's elevate your biz",
      title47 :"Thanks , We'll be in touch soon.",
      title48 :"MORE ABOUT THE DESIGNER",
      title49 :"MY BRAND VALUES",
      title50 :"Strategic-focused design",
      title51 :"Quality",
      title52 :"Integrity",
      title53:"Creativity",
      title54 :"GET TO KNOW ME",
      title55 :"PEOPLE DESCRIBE ME AS..",
      title56 :"Creative, hard-working, resourceful ",
      title57 :"Technical computer science",
      title58 :"MY DEGREE IS IN..",
      title59 :"my hobbies",
      title60 :"walking on the beach",
      title61 : "WHAT PEOPLE SAY",
      title63 : "rima was amazing to work with! I’m super happy with my branding!", 
      title64 : "she exceeded expectations! Over delivered and ahead of schedule—highly recommend Rima. Will definitely come back to you when I need other design advice/suggestions and for more jobs in the future! :) Thank you again, A++++ service!”", 
      title65 : "Easy designer to work with. Very talented and we will work with her again! ", 
      title66 : "Highly recommend! Rima is amazing and I am so happy I selected her to create my website. She is super professional..", 
      title67 : "showcase website", 
      title68 : "Dynamic Website", 
      title69 : " Brand identity", 
      title70 : "Let Started", 
      title71 : "Ready for an in-depth look at how we can make your vision come to life ", 
      title72 : "", 
      title73 : "", 
      title74 : "", 
      title75 : "", 
      title76 : "", 
      title77 : "", 
      title78 : "", 
      title79 : "",
      title80 : "", 


      

    }
  },

  fr: {
    translation: {
      title1: "Bienvenue,",
      title2 :"Salut !",
      title3 :"dans  mon espace créatif !",
      title4 :"CONSTRUIRE VOTRE MARQUE - CRÉEZ VOTRE SITE WEB - RACONTER VOTRE HISTOIRE",
      title5 :"Rencontre Moi",
      title6 :" concepteur et développeur",
      title7 :" Salut, Je suis Contente que tu est là ! je m'appelle Rima , Graphiste + Conceptrice avec une passion pour aider les créatifs dévoués à mettre leur absolu Le meilleur pas en avant est avec les premières choses que les clients potentiels voient - leur marque et leur site Web. Nous vous aidons à vous concentrer sur tous les détails qui rendent votre entreprise spéciale . ",
      title8 :" Savoir plus",
      title9 :" l'image de marque et site web  réussies ne se limitent pas à être jolies; Ton entreprise mérite une expérience.",
      title10 :" Il s'agit de construire une identité de marque stratégique et intentionnelle, de se connecter avec votre public cible, évoquant un sentiment lorsque les gens interagissent avec votre marque, attirant ces clients idéaux et écrasant ces objectifs commerciaux ! Alors, prenez une tasse de café (ou de thé) pendant  nous visualisons votre marque et créons un design épuré et créatif ! ",
      title11 :" Pret a commencer? ",
      title12 :" Identité de marque",
      title13 :" Vous cherchez à développer votre marque ou êtes simplement prêt pour un rafraîchissement ? Nous allons travailler à travers le processus de branding pour créer et concevoir une identité visuelle de marque cohérente.",
      title14 :" Ce Que Je Fais",
      title15 :" Conception sites web",
      title16 :" Prêt à créer un site Web personnalisé qui est non seulement bien conçu mais qui accélère vos objectifs commerciaux ? Nous veillerons à ce que votre site soit stratégiquement conçu afin qu'il soit cohérent avec votre image de marque.",
      title17 :" Prêt à créer un site Web personnalisé qui est non seulement bien conçu mais qui accélère vos objectifs commerciaux ? Nous veillerons à ce que votre site soit stratégiquement conçu afin qu'il soit cohérent avec votre image de marque.",
      title18 :" Explore Plus",
      title19 :" Mes Projets Récents",
      title20 :" Visite  mes anciens projets ",
      title21 :" Vous aime une image de marque qui représente votre entreprise.  Vous avez besoin d'un site Web qui se démarque de tous les autres dans votre secteur. Vous êtes prêt à collaborer avec un designer qui comprend et s'occupera de votre bébé numérique du début à la fin. Si vous répondez oui à l'une de ces propositions, vous êtes au bon endroit ! ",
      title22 :" Cliquer ici",
      title23 :" Contacter Nous ",
      title24 :" Comment ça fonctionne",
      title25 :"debuter",
      title26 :" Je vais commencer par un peu d'etude pour le client - un questionnaire - me dire de votre entreprise et votre vision. Nous assurerons que nous avons compris le style et que nous sommes sur la même vision .",
      title27 :"concept ",
      title28 :"on va commencer! Une fois vos détails de conception terminés, je me mettrai au travail pour créer votre site, créer votre marque, ou les deux ! Du début à la fin !",
      title29 :"modifier ",
      title30 :"Il est temps d'entrer dans les détails ! Vous allez plonger profondément dans votre site ou votre marque fraiche conçu, puis nous passerons en revue toutes les révisions nécessaires pour nous assurer que vous êtes ravi du vu final . ",
      title31 :"lancement  ",
      title32 :"félicitation! Une fois que votre site est lancé, vous obtiendrez une présentation enregistrée  de votre site + les graphiques de lancement. Vous avez opté pour l'image de marque ? Tous les matériaux seront livrés dans des fichiers au format haute résolution !",
      title33 :"Autonome et créatif avec profession  en conception graphique & Web et en développement Web , basée en Tunisie , le travail de mon client m'a amené partout dans le monde (c'est-à-dire numériquement) et je suis tellement reconnaissant de pouvoir créer des marques + des sites Web pour des entrepreneurs créatifs comme vous ! . Je cherche toujours à résoudre des problèmes, et me mettre au défi de essayer des nouvelles idées. Je suis passionné par tout ce qui touche au design, au développement web et au marketing numérique. Ainsi, pour vous aider à vous concentrer sur tous les détails qui rendent votre entreprise spéciale, ou vous donner un discours d'encouragement à la nervosité entrepreneuriale tranquille, vous serez guidé à travers un processus détaillé étape par étape avec des outils pour vous aider à atteindre vos objectifs de conception et plus.",
      title34 :"Je suis Contente que tu est la ",
      title35 :"Découvrez Notre Services",
      title36 :"",
      title37 :"Parlez-nous de votre projet, envoyez-nous une note en utilisant le formulaire pratique juste là-bas. J'ai hâte d'entendre parler de votre vision de marque + site Web.",
      title38 :"Nom & Prenom",
      title39 :"À propos",
      title40 :" Contactez moi",
      title41 :"Sujet",
      title42 :"Choisie services",
      title43 :"Choisie Budget",
      title44 :"Envoyer",
      title45 :"Ton Message",
      title46 :"Laissez-nous votre détails",
      title47 :"Merci, nous vous contacterons prochainement !",
      title48 :"A propos de Conceptrice",
      title49 :"LES VALEURS DE MA MARQUE",
      title50 :"Conception axee sur la strategie",
      title51 :"Qualite",
      title52 :"Integrite",
      title53:"creativite",
      title54 :"APPRENDRE À ME CONNAÎTRE",
      title55 :"LES GENS ME DÉCRIVENT COMME ..",
      title56 :"Creatif, travailleur, ingenieux",
      title57 :"Informatique technique",
      title58 :"MON DIPLÔME EST EN..",
      title59 :"mes loisirs",
      title60 :"Marche sur la plage",
      title61 : "CE QUE DISENT LES GENS",
      title63 : "rima était incroyable de travailler avec! Je suis super contente de mon branding !", 
      title64 : "elle a dépassé les attentes! Plus livré et en avance sur le calendrier, je recommande vivement Rima. Je reviendrai certainement vers vous lorsque j'aurai besoin d'autres conseils/suggestions de conception et pour d'autres travaux à l'avenir ! :) Merci encore, service A++++!”", 
      title65 : "Conceptrice est trés prof . Très talentueuse , nous allons travailler avec elle a prochain fois !", 
      title66 : "Je le recommande vivement ! Rima est incroyable et je suis tellement heureux de l'avoir choisie pour créer mon site Web. Elle est super professionnelle..", 
      title67 : "Site web vitrine", 
      title68 : "site web dynamique", 
      title69 : "identité visuelle", 
      title70 : "Contacter Nous", 
      title71 : "Pret pour un Defi approfondi de la façon dont nous pouvons donner vie a votre vision", 
      title72 : "", 
      title73 : "", 
      title74 : "", 
      title75 : "", 
      title76 : "", 
      title77 : "", 
      title78 : "", 
      title79 : "",
      title80 : "", 

 
    }
  }
};

i18n
.use(LanguageDetector) 
  .use(initReactI18next)

  // passes i18n down to react-i18next
  .init({
    resources,
    lng :'en',
    fallbacklng :'en',

    interpolation: {
      escapeValue: false // react already safes from xss
    }, 
    react : {
      useSuspense : false
    }
  });

  export default i18n;