/*
  Hello, change the text inside these variables to update
  the content of the website.

  For images, you can type the path to a file inside
  the images folder in /public/images. To do that, 
  just type "/images/[imageName].extension" inside
  the variable. Otherwise, you can insert an url
  from a website, and in this case you need to include
  that domain in next.config.js

  Thank You!
*/

// ---GENERAL---
export const logo = '/images/agent150.png'
export const logoAlt = 'ApeAgentsLogo'
export const mobileMenuHeading = "Useful Links:"

export const discordUrl = "https://discord.com/channels/951377318272700456/1064627646270550138"
export const instagramUrl = "#"
export const twitterUrl = "https://twitter.com/ApeAgentsOfCreo"
export const openSeaUrl = "https://mint.apeagentsofcreo.com"

// ---NAVBAR---
export const pages = [
  { name: "Gallery", id: "#gallery" },
  { name: "Features", id: "#features" },
  { name: "Roadmap", id: "#roadmap" },
  //{ name: "Team", id: "#team" },
  { name: "FAQ", id: "#faq" },
]

// ---FOOTER---
export const permissions = "2023 Ape Agents"

// ---HERO TEXT---
export const heading1 = "Ape Agents"
export const heading2 = "The very first collection powered and sponsored by True NFT Technology"
export const description = "Highly collectible with a feature rich roadmap. rewards, airdrops, Vbest uIP passes, giveaways, holder priviledges and on-going activities. Ape Agents marks the beginning of decentralised Metadata."
export const btnText1 = "Join Discord"
export const btnText2 = "Mint Your Agent"

export const topCard = { 
  name: "Floor Price",
  price: "89 SOL",
  btnText: "Buy Now",
  profile:
    "/images/pic1.png",
  image:
    "/images/pic1.png",
  btnUrl: "https://marketplace.truenft.tech/",
  alt: "Top Card",
  profileAlt: "My Profile 1",
}

export const backCard = {
  name: "Floor Price",
  price: "76 SOL",
  btnText: "Buy Now",
  profile:"/images/pic2.png",
  image:
    "/images/pic2.png",
  btnUrl: "https://marketplace.truenft.tech/",
  alt: "Back Card",
  profileAlt: "My Profile 2",
}

// ---GALLERY---
export const galleryHeading = "Gallery"
export const images = [
  {
    url: "/images/pic4.png",
    alt: "nft1",
  },
  {
    url: "/images/pic5.png",
    alt: "nft2",
  },
  {
    url: "/images/pic6.png",
    alt: "nft3",
  },
  {
    url: "/images/pic7.png",
    alt: "nft4",
  },
  {
    url: "/images/pic8.png",
    alt: "nft5",
  },
  {
    url: "/images/pic9.png",
    alt: "nft6",
  },
  {
    url: "/images/pic10.png",
    alt: "nft7",
  },
  {
    url: "/images/pic11.png",
    alt: "nft8",
  },
  {
    url: "/images/pic12.png",
    alt: "nft9",
  }
]

// ---FEATURES---
export const features = [
  {
    reversed: false,
    title: "Ape Agents",
    description: "Powered by True NFT Technology amd the Tnftcoin blockchain, Ape Agents are a milestone in NFT history. A Layer 1 solution for NFT metadata.",
    image: "/images/agentLogo.png",
    imageAlt: "Ape Agent 000",
  },
  {
    reversed: true,
    title: "Public Mint",
    description: "In addition to being a significant collection the Minting of Ape Agents will be a Hidden Mint. Buyers will reserve an Ape Agent which will not change however, only when the mint is complete will each Ape Agent be revealed to each buyer. Prior to the Mint, the Hash of the whole collection in Minting sequence will be made public. This allows verification that the Mint order did not change.",
    image: "https://ouch-cdn2.icons8.com/v6BET7YrOgSq4VCaZKo2L6mVaGxu1oJ0aoH9NzGvKqk/rs:fit:1149:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQw/LzVhYTljZWRhLTdm/ZjUtNDM1MC1hNjA0/LWU3OTc1NjZiYTJl/ZC5wbmc.png",
    imageAlt: "Public Mint Image"
  }
]

// ---ROADMAP---
export const roadmapHeading = "Roadmap"
export const roadmapSteps = [
  {
    position: "18th Nov 2023",
    title: "Announcing Ape Agents",
    description: "Ape Agents collection and True NFT Technolgy is now public community building begins",
  },
  {
    position: "25th Nov 2023",
    title: "Social Channels Activation",
    description: "Join the Ape Agents social channels. Anyone and everyone invited.",
  },
  {
    position: "14th Dec 2023",
    title: "Minting Begins.",
    description: "Ape Agents public mint starts.",
  },
  {
    position: "TBA",
    title: "Public Mint End - The Great Reveal",
    description: "All Ape Agents are revealed in wallets.",
  } 
]

// ---TEAM---

export const teamHeading = ""
export const team = []
/*  {
    url: "/images/5ha2s6512x512.png",
    alt: "5ha2s6",
    username: "@5ha2s6",
    userLink: "https://twitter.com/5ha2s6",
  },
  {
    url: "/images/pic13.png",
    alt: "bob",
    username: "",
     userLink: "#",
  },
  {
    url: "/images/pic14.png",
    alt: "dave",
    username: "#",
    userLink: "#",
  },
  {
    url: "/images/pic15.png",
    alt: "jane",
    username: "#",
    userLink: "#",
  },
  
]*/

// ---FAQ---
export const faqHeading = "Frequently Asked Questions"
export const faq = [
  {
    question: "What's so unique about this collection?",
    answer: "Ape Agents of Creo is the very first NFT collection that stores it metadata on the Tnftcoin Blockchain. This means the collection is a first of a kind and highly collectible.",
  },
  {
    question: "What else do I get for my money?",
    answer: "Owning an Ape Agent will entitle the holder to participate in all future collector activities."
  }, 
  {
    question: "Does the collection have further utility?",
    answer: "Yes, Ape Agents will continue to evolve as an active collection with many developments both planned and yet to be decided.",    
  }
]
