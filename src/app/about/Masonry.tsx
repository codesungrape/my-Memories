// add some text, some images, some videos and some audio files- how would i achieve this?
// import all tools
// set up TS structure
// Create an array with these files
// create fucntion which takes the mAsonry compoenent and within it is another function
//

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
// Import CSS module
import styles from "./Masonry.module.css";

// Define TypeScript interface for our content items
interface ContentItem {
  type: "image" | "text" | "audio" | "video";
  title: string;
  content: string;
  description?: string;
}

// Example array with mixed content types
export const mixedContentItems: ContentItem[] = [
  {
    type: "image",
    title: "Family Reunion",
    content: "/assets/family_reunion.webp",
    description:
      "Our annual family gathering at Lake Michigan last summer - all 58 of us made it!",
  },
  {
    type: "text",
    title: "About Martha",
    content: `Hello! I'm Martha Wilson, 68 years young and loving life in my retirement. After 32 years as an elementary school teacher, I now spend my days gardening, volunteering at the local library, and of course, spoiling my five wonderful grandchildren. My husband Robert and I celebrated our 45th anniversary last June with a cruise to Alaska - a dream come true!
      `,
  },
  {
    type: "audio",
    title: "Interview with Grandma",
    content: "https://example.com/audio.mp3",
    description:
      "My grandson Tommy interviewed me for his school project about the 1960s",
  },
  {
    type: "video",
    title: "Cookie Baking Tutorial",
    content: "/api/placeholder/640/360",
    description:
      "My secret chocolate chip cookie recipe that my grandkids convinced me to share",
  },
  {
    type: "image",
    title: "Grandkids at the Beach",
    content: "/assets/grandkidsAtTheBeach.jpg",
    description:
      "Emma, Liam, and the twins building sandcastles during our Florida vacation",
  },
  {
    type: "text",
    title: "Weekly Update",
    content:
      "Had a wonderful lunch with my garden club ladies yesterday. Rose brought her famous potato salad! Tomorrow I'm watching the twins while Sarah has her doctor's appointment. Need to remember to pick up more construction paper for our craft project. Robert's knee is feeling much better after physical therapy.",
  },
  {
    type: "audio",
    title: "Our Wedding Song",
    content:
      "https://soundcloud.com/elvissonymusic/cant-help-falling-in-953786220",
    description:
      '"Can\'t Help Falling in Love" - Robert and I danced to this at our wedding in 1979',
  },
  {
    type: "image",
    title: "My Garden",
    content: "/assets/flower-garden-walking-path.webp",
    description:
      "My prize-winning roses and the vegetable garden that keeps the whole family in fresh tomatoes all summer",
  },
  {
    type: "video",
    title: "Emma's Recital",
    content: "/api/placeholder/640/360",
    description:
      "My granddaughter Emma's piano recital last month - she played Moonlight Sonata beautifully!",
  },
  {
    type: "text",
    title: "My Famous Apple Pie Recipe",
    content: `
  Apple Pie Like Grandma Used to Make
  
  Ingredients:
  - 2 cups all-purpose flour
  - 1 teaspoon salt
  - 2/3 cup shortening
  - 6 tablespoons cold water
  - 8 cups thinly sliced peeled tart apples
  - 3/4 cup white sugar
  - 2 tablespoons all-purpose flour
  - 1/2 teaspoon ground cinnamon
  - 1/4 teaspoon ground nutmeg
  - 2 tablespoons butter
  
  The secret is using Granny Smith apples and letting the dough rest for at least an hour before rolling!`,
  },
  {
    type: "image",
    title: "45th Anniversary",
    content: "/assets/anniversary.jpg",
    description:
      "Robert and I on our Alaskan cruise celebrating 45 wonderful years together.",
  },
  {
    type: "audio",
    title: "Bedtime Story for the Grandkids",
    content: "https://example.com/bedtime-story.mp3",
    description:
      'Recording of me reading "The Velveteen Rabbit" for when I can\'t be there in person',
  },
];

export default function AboutTSMasonry() {
  // Function to render different content types using vanilla HTML with CSS module classes
  const renderContent = (item: ContentItem) => {
    switch (item.type) {
      case "image":
        return (
          <div className={`${styles.masonryItem} ${styles.imageItem}`}>
            <img
              src={item.content}
              alt={item.title}
              className={styles.mediaImg}
            />
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </div>
          </div>
        );

      case "text":
        // Check if it's a code snippet
        const isCode = item.title.toLowerCase().includes("code");
        return (
          <div className={`${styles.masonryItem} ${styles.textItem}`}>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              {isCode ? (
                <pre className={styles.codeBlock}>{item.content}</pre>
              ) : (
                <p className={styles.itemText}>{item.content}</p>
              )}
            </div>
          </div>
        );
      case "audio":
        // Check if it's a SoundCloud URL
        const isSoundCloud = item.content.includes("soundcloud.com");

        // Create proper SoundCloud embed URL
        const soundcloudEmbedUrl = isSoundCloud
          ? `https://w.soundcloud.com/player/?url=${encodeURIComponent(item.content)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
          : item.content;

        return (
          <div className={`${styles.masonryItem} ${styles.audioItem}`}>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>

              {isSoundCloud ? (
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={soundcloudEmbedUrl}
                  className={styles.soundcloudFrame}
                ></iframe>
              ) : (
                <audio controls className={styles.mediaAudio}>
                  <source src={item.content} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        );

      case "video":
        return (
          <div className={`${styles.masonryItem} ${styles.videoItem}`}>
            <video controls poster={item.content} className={styles.mediaVideo}>
              <source
                src="https://example.com/placeholder.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element.
            </video>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.description}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Box className={styles.masonryContainer}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {mixedContentItems.map((item, index) => (
          <div key={index}>{renderContent(item)}</div>
        ))}
      </Masonry>
    </Box>
  );
}
