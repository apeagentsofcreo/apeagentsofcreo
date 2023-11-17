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
export const logo = "https://www.apeagentsofcreo.com/images/agentLogo.png"
export const logoAlt = "ApeAgentsLogo"
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
  { name: "Team", id: "#team" },
  { name: "FAQ", id: "#faq" },
]

// ---FOOTER---
export const permissions = "2023 Ape Agents"

// ---HERO TEXT---
export const heading1 = "Ape Agents"
export const heading2 = "The Very First Collection Powered and Sponsered by True NFT Technology"
export const description = "Highly collectible with a feature rich roadmap. rewards, airdrops, VIP passes, giveaways, holder priviledges and on-going activities. Ape Agents marks the beginning of decentralised Metadata."
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
    alt: "nf8",
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
    title: "Ape Agents: Join The Club",
    description: "THE 1st COLLECTION with TNFT TECHNOLOGY. Highly Collectible & Rewarding AIRDROPS CHALLENGES BONUSES UPGRADES ON-GOING GIVEAWAYS HOLDER PRIVILAGES & MORE TO COME. In the SPIRIT of WEB3 and DECENTRALISATION",
    image: "/images/agentLogo.png",
    imageAlt: "Ape Agent 000",
  },
  {
    reversed: true,
    title: "RARITY & DISTRIBUTION INFORMATION",
    description: `The MINT will be a HIDDEN mint. Nobody will know what has already been
      minted or what is left. Buyers will receive their NFTs ''in the blind''. On mint completion
      all will be revealed automatically. The hash of the whole collection will be available just before minting starts.
      This ensures that the order of minting or the attributes of any Ape Agent cannot be changed once minting
      is opened.`,
    image:
      "https://ouch-cdn2.icons8.com/v6BET7YrOgSq4VCaZKo2L6mVaGxu1oJ0aoH9NzGvKqk/rs:fit:1149:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQw/LzVhYTljZWRhLTdm/ZjUtNDM1MC1hNjA0/LWU3OTc1NjZiYTJl/ZC5wbmc.png",
    imageAlt: "Unique Attributes Image",
  },
]

// ---ROADMAP---
export const roadmapHeading = "Roadmap. We'll Update this Regularly"
export const roadmapSteps = [
  {
    position: "NOW",
    title: "Announcements",
    description: `Articles and tweets go out explaining what, why & how TrueNFT.Tech, TNFTCoin, Ape Agents and Creoverse all come together
    to bring a new light to NFTs and Digital Assets.`,
  },
  {
    position: "NOW",
    title: "Discord Active",
    description: `Join the Ape Agents Discord Server. Everything you wanted to know and can now ask. Help build the community and share
    your ideas. The end goal is to create a community driven decentralised opensource web3 organisation focused on metaverse. 
    Anyone and everyone can participate.`,
  },
  {
    position: '7th March',
    title: 'The Countdown to Minting begins.',
    description: `After a very long research and development effort by 5ha2s6, the collection and all the 
    surrounding technology is available.`,
  },
  {
    position: "TBA",
    title: "Public Mint End - Chapter 1 The Revelation",
    description: `All Ape Agents are automatically revealed in your wallet. If you Minted some Ape Agents
    they'll suddenly change into the real thing and the fun begins. A generous % of the net sales will be deposited in a designated wallet for the 
    purpose of kickstarting creoverse.org.`,
  },
  {
   position: "TBA",
   title:  "Rarity Information and Sales Statistics Released",
   description: "As the title suggests. A comprehensive report of all Ape Agents showing rarity etc will be published.",
  }, 
  {
    position: "TBA",
    title: "Ape Agent Minters Air Drop",
    description: `All Ape Agent buyers who minted one or more, will receive an airdrop of 1000 TNFT Tokens per Ape Agent minted.
    Right now (06/03/2023) it is not known what the value will be however, we hope to have a listing on a major exchange very soon.`,
  },
  {
    position: "TBA",
    title: "Ape Agents Skills Assigned",
    description: `Every Ape Agent will be assigned a skill set that'll automatically appear in the
    Ape Agent traits. Skill sets will determine roles and abilities which will be used in later activities, challenges and games.
    This will also demonstrate just how TNFT technology makes it so easy for everyone to update metadata where applicable.`,
  },
  {
    position: "TBA",
    title: "Ape Agents DAO Meet Up",
    description: `This first online meet will be open to all Ape Agent holders. Together we will discuss what the 
    first objectives of the DAO will be and how the funds as raised in the mint might be used.`
  },
]

// ---TEAM---
export const teamHeading = "Team"
export const team = [
  {
    url: "/images/5ha2s6512x512.png",
    alt: "5ha2s6",
    username: "@5ha2s6",
    userLink: "https://twitter.com/5ha2s6",
  },
  {
    url: "/images/pic13.png",
    alt: "bob",
    username: "#",
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
  
]

// ---FAQ---
export const faqHeading = "Frequently Asked Questions"
export const faq = [
  {
    question: "What's so unique about this collection?",
    answer: `Ape Agents of Creo is the very first NFT collection that stores it metadata
              on Tnftcoin blockchain. Go to www.truenft.Tech to learn more. As NFT collections
              go, this means the collection is a first of a kind and therefore highly collectible`,
  },
  {
    question: "What else do I get for my money?",
    answer: `Everyone who buys an Ape Agent will get VIP access to www.creoverse.org members area
    where they can claim 1000 Creoverse Pounds. At a later stage, there will be another airdrop of 
    Tnftcoin for all buyers too.`,
  },
  {
    question: "Does the collection have further utility?",
    answer: `Yes, there is much planned for Ape Agents. The first is that 50% of the net total raised
    by the public mint will be donated to www.creoverse.org in order to provide a kickstart fund. Holders of 
    Ape Agents will all get a say in how the fund is used and what developements are paid for by the fund. Most of 
    what happens next will be determined by the community`,
  },
]
