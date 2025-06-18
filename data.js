const boxNotes = [
  "1. One of these notes is used to let you understand that there's no way we could've managed to express what we really feel for you. this is the best we can do for you to understand the kind of value you have not only in our lives but anyone who even meets you.", "kayla meiri: future multi-business owner, model, life coach, author, actress, hot mom and wife of billionaire", "happy solar return to our favorite gemini x cancer x taurus babe", "may 21 be a year full of abundance, healing, reciprocity, boundaries, learning, fulfillment, peace, and growth", "we are so proud of you and all your accomplishments. please never stop sharing your life with the world and creating your art - we are your loyalest fans!!", 
  "Even when life got chaotic — different countries, radio silence, time slipping by — you never let this friendship dissolve. You've always been the thread that pulled us back together. Thank you for choosing us over and over again.", "You've been the lifeline of this friendship — the one who reminded us that love isn't passive. It takes effort, and you've always made that effort feel effortless.", "From tacky traditions to deep late-night conversations, you've been the heartbeat of our weird little traditions. You made nostalgia part of our present.", "You have a way of bridging silence. Where we might go quiet or distant, you kept us together with your check-ins, your warmth, and your refusal to let distance mean disconnection.", "Your soul feels so old in the best way — like someone who carries lifetimes of knowing how to love others. You've deepened my understanding of what friendship can be.", 
  "You're not just a friend. You've become a pillar — just quietly holds everything up even when no one sees it and we see it kay.", "Bamkouiiii, your energy is unmatched and your presence pretty much divine. you're the absloute best kay", "MVP goes to kayla- for not allowing us to fall apart or even become distant. What a performance", "21!! We're so happy we get to see you turn 21, last time i checked we were 17/18 at school excluding everyone esle and staying w each other :/", "Thank you for not giving up on us. Thank you for choosing us. Thank you for holding on through years, oceans, time zones, silences, and growth. I can't wrap this thank you in one sentence — it's a lifelong kind of gratitude.", 
  "you walk like you belong to the stars, and for all my sins, i'd pray to every god I've ever mocked if it meant they'd let me deserve you. and if you told me to burn it all down? every crown, every curse, every ghost? i would. i think you might be the only soul i'd ever kneel for” - niklaus mikaelson confessing his love to you (probably)", "we are so blessed to have you, and the world became infinitely brighter the day you were born", "In tarot, the 21st card is “THE WORLD”. you are entering a stage of wholeness, completion, and integration", "some areas of your prefrontal cortex are now officially fully developed girlboss!!! we are on the up and up!!!", "i would be a roach with you in the next life for a SINGLE day. just to indulge you. then im going back to heaven", "11. thank you for being our friend sweet princess, we love you so much."
];

const memories = [
  "I'll never forget when you pretended to ask your 'friend' out for Danny so that we could be mean to him. We called him all types of slurs that day.", 
  "When we first got to ASOY you'd refuse to dap people up because you 'don't touch people [you] don't know'.", 
  "My whole family always fondly remembers how you asked my mom that one time 'so miss seck.. how's your mental health'. We were all so charmed and endeared lol.", 
  "The day you and Shima visited me in Yaoundé during the pandemic was the first I'd ever seen you so flustered about a GUY. You sent a bunch of voice messages to Carl (the senior you liked) and we laughed so hard that day. I'm so glad we all had that moment together after a year of not seeing each other.", 
  "Maybe this is behind you but you used to call people 'n*ggers' at school AHAHAHAHAH. I always admired your bluntness.", 
  "The first day I met you, you had short hair and the brightest smile. I'll always remember feeling so relieved seeing you, like one more thing had clicked into place.", 
  "Imagining all the random people who've told you their life stories at the Target or in passing always weirdly brings a smile to my face. You really are the type of person people feel comfortable sharing their memories with.", 
  "Remember when you put us through twerking academy and gave us homework, practice lessons, songs and everything LOL. I'm sorry I dropped out, you were a great teacher. It's not you, it's me </3", 
  "MADAME MBAPPEEEEEEEEE 2024!!!!!!!!!", 
  "You once sent me a voice note where you were trying to tell me something urgently and the triplets were yapping behind you. You paused for a second, and then at the top of your lungs went 'SHUT THE FUCK UP!', and then continued chatting like nothing had happened LOLLL. To this day it's one of my favorite memories of you.", 
  "Memory 11", "Memory 12", "Memory 13", "Memory 14", "Memory 15", 
  "Memory 16", "Memory 17", "Memory 18", "Memory 19", "Memory 20", "Memory 21"
];

const songList = [
  { title: "Put Your Records On - Corinne Bailey Rae", link: "https://music.apple.com/search?term=put+your+records+on+corinne+bailey+rae" },
  { title: "All Mine - Brent Faiyaz", link: "https://music.apple.com/search?term=all+mine+brent+faiyaz" },
  { title: "Didn't Cha Know - Erykah Badu", link: "https://music.apple.com/search?term=didn%27t+cha+know+erykah+badu" },
  { title: "Cranes in the Sky - Solange Knowles", link: "https://music.apple.com/search?term=cranes+in+the+sky+solange" },
  { title: "Space Song - Beach House", link: "https://music.apple.com/search?term=space+song+beach+house" },
  { title: "Two Seater - Tyler, The Creator", link: "https://music.apple.com/search?term=two+seater+tyler+the+creator" },
  { title: "Me and Your Mama - Childish Gambino", link: "https://music.apple.com/search?term=me+and+your+mama+childish+gambino" },
  { title: "Nobody - Mac DeMarco", link: "https://music.apple.com/search?term=nobody+mac+demarco" },
  { title: "Good and Plenty - Alex Isley", link: "https://music.apple.com/search?term=good+and+plenty+alex+isley" },
  { title: "Mystery Lady - Masego", link: "https://music.apple.com/search?term=mystery+lady+masego" },
  { title: "Wus Good/Curious - PARTYNEXTDOOR", link: "https://music.apple.com/search?term=wus+good+curious+partynextdoor" },
  { title: "On the Way - Jhené Aiko", link: "https://music.apple.com/search?term=on+the+way+jhene+aiko" },
  { title: "Girls Need Love - Summer Walker", link: "https://music.apple.com/search?term=girls+need+love+summer+walker" },
  { title: "Tell Your Friends - The Weeknd", link: "https://music.apple.com/search?term=tell+your+friends+the+weeknd" },
  { title: "Twist & Turn - Popcaan, Drake & PARTYNEXTDOOR", link: "https://music.apple.com/search?term=twist+turn+popcaan+drake+partynextdoor" },
  { title: "My Type - Popcaan", link: "https://music.apple.com/search?term=my+type+popcaan" },
  { title: "Come Over - Jorja Smith & Popcaan", link: "https://music.apple.com/search?term=come+over+jorja+smith+popcaan" },
  { title: "Woza - Mr JazziQ & Kabza De Small", link: "https://music.apple.com/search?term=woza+mr+jazziq+kabza+de+small" },
  { title: "Manzi Nte - Tyler ICU", link: "https://music.apple.com/search?term=manzi+nte+tyler+icu" },
  { title: "Jealousy - Tyler ICU", link: "https://music.apple.com/search?term=jealousy+tyler+icu" }
];

const imageFiles = [
  "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", 
  "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpeg", 
  "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", 
  "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpeg", 
  "image21.jpeg"
];
