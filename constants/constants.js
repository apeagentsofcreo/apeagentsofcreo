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
export const logo = "/images/agentLogo.png"
export const logoAlt = "ApeAgentsLogo"
export const mobileMenuHeading = "Useful Links:"

export const discordUrl = "#"
export const instagramUrl = "#"
export const twitterUrl = "#"
export const openSeaUrl = "#"

// ---NAVBAR---
export const pages = [
  { name: "Gallery", id: "#gallery" },
  { name: "Features", id: "#features" },
  { name: "Roadmap", id: "#roadmap" },
  { name: "Team", id: "#team" },
  { name: "FAQ", id: "#faq" },
]

// ---FOOTER---
export const permissions = "2022 Creoverse.org"

// ---HERO TEXT---
export const heading1 = "Ape Agents of Creo"
export const heading2 = "Founders of Creoverse"
export const description = `A First Edition Collection with True NFT Technology.
                            Feature Rich Roadmap. Rewards, Airdrops, VIP Passes, Giveaways and more.
                            Kickstart Fund Raising for Creoverse and HIGHLY collectible.`
export const btnText1 = "Join Discord"
export const btnText2 = "Mint Your Agent"

export const topCard = {
  name: "#8888",
  price: "2.48 ETH",
  btnText: "Buy Now",
  profile:
    "/images/pic1.png",
  image:
    "/images/pic1.png",
  btnUrl: "https://opensea.io/",
  alt: "Top Card",
  profileAlt: "My Profile 1",
}

export const backCard = {
  name: "#8258",
  price: "1.48 ETH",
  btnText: "Buy Now",
  profile:
    "https://lh3.googleusercontent.com/uRNiQu5_VpjhHoYy_QTvqOpIWs5QvSJ36hCrsGV4jP2YDJqIwfBVtR_XALDmmHHyFks6FC919AzvXv0J1AT4WlSEGM6VIODNt07snw=s130",
  image:
    "/images/pic2.png",
  btnUrl: "https://opensea.io/",
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
    title: " >>> 11,500 Ape Agents <<<",
    description: `A Highly Collectible Historic 1st with REAL PURPOSE, MINT TIME BENEFITS. ON-GOING EXTRAS, GIVEAWAYS, HOLDER PRIVILAGES & MORE.
    Unleashing TRUENFT.TECH & CREOVERSE.ORG`,
    image:
      "/images/agentLogo.png",
    imageAlt: "1000+ FIgures Collection Image",
  },
  {
    reversed: true,
    title: "RARITY & DISTRIBUTION INFORMATION",
    description: `The MINT will be a HIDDEN mint. This means that nobody knows what has already been
      minted or what is left. Buyers will receive their NFTs in the blind and on the mint completion
      all will be revealed. The hash of every Ape Agent DNA will be available just before minting starts.
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
    position: "VERY SOON",
    title: "Discord Activities Begin",
    description: `Join the Ape Agents of Creo Discord Server. Everything you wanted to know and can now ask. Help build the community and share
    your ideas. The end goal is to create a community driven decentralised opensource web3 focused metaverse. Anyone and everyone can participate.`,
  },
  {
    position: "IN 3 WEEKS",
    title: "Public Mint Opens",
    description: `The public mint will start and everyone will be able to mint an Agent or 3. No pre-sale, whitelists or special treatment for anyone.
    Everyone will have the same chances to mint a rare or not so rare NFT`,
  },
  {
    position: "END DEC",
    title: "Public Mint End - 50% Donation to CREOVERSE.ORG",
    description: `All Ape Agents are revealed. If you Minted some Ape Agents
    they'll suddenly change into the real thing and the fun begins. 50% of the net sales will be deposited in a designated wallet. Rarity 
    Information, Graphs and Other Details published`,
  },
  {
    position: "END DEC EARLY JAN",
    title: "Ape Agent 1st Holders Air Drop",
    description: `All Ape Agent holders will receive an airdrop of 1000 Creoverse Pounds.`,
  },
  {
    position: "JAN 2023",
    title: "TNFTCoin Airdrop",
    description: `A second round of rewards for those who helped get the project this far. Ape Agents holders are invited
    to join True NFT Tech Discord where they can find out how to get the TNFTCoin wallet and then request another, YES another 
    airdrop. This time its TNFTCoin. 1000 TNFT for each Ape Agent holder.`,
  },
]

// ---TEAM---
export const teamHeading = "Team"
export const team = [
  {
    url: "https://lh3.googleusercontent.com/x8bnseXn89ubTHYxH_tqCni8pukbQGdsAdV-k5sudEFvukpeBxtzMrOSUR00x6lO_Bq5mlgY0mNHvwXw8iSn6ZUBEOCKvUMTzjsXng=w600",
    alt: "user1",
    username: "@username",
    userLink: "https://twitter.com/elonmusk",
  },
  {
    url: "https://lh3.googleusercontent.com/SjjTt1xeqjYXIPXOGDE5JJuMBFB7EXnwQTxXE_zQE6VnsrJBOtC0kVF254LUHV6RFIH9gyLw0huL3BFQ10N8VWolN_knN0E3qU3z3Q=w600",
    alt: "user2",
    username: "@username",
    userLink: "https://twitter.com/elonmusk",
  },
  {
    url: "https://lh3.googleusercontent.com/yHkmkqhp_8pRtrp0UnvEJqjMNn-9a9d0xdnuOY-eprnqNG9m2BVJfvd-6tTUWb6_MdqfUFP5FFy4OGqTq9NTHpYybemg5801LKH9eA=w600",
    alt: "user3",
    username: "@username",
    userLink: "https://twitter.com/elonmusk",
  },
  {
    url: "https://lh3.googleusercontent.com/aviADDqmYN5X979x0bO1Tg7lLLgpIRwp5B-M2GRmChTdm8N5V_vwXX0kS8bTeuATkHlPDsHyeVAgiAhRhHCwzThqTCvn_80r9VNq9A=w600",
    alt: "user4",
    username: "@5ha2s6",
    userLink: "https://twitter.com/5ha2s6",
  },
  {
    url: "https://lh3.googleusercontent.com/sCYqk7lTMznAOD8Mjlzce_YOw8QR23ODIspxz2X6_gSULHb0QbDapw2brHd2Gf-O9voLXUgSwGWQ7BAsVtsL4tgw9w90ybQBoeY8SQ=w600",
    alt: "user5",
    username: "@username",
    userLink: "https://twitter.com/elonmusk",
  },
  {
    url: "https://lh3.googleusercontent.com/6IYRsI8QSUQ0dhn11OVmyA0xMZlQDVLM6ORMZL-DVNTquWkSKuw2Xombc3gUJ-bvnQ0r7WJ3TWky-LWsRXO1k8lnOIy1ttt4Sx_r5Y8=w600",
    alt: "user6",
    username: "@username",
    userLink: "https://twitter.com/elonmusk",
  },
]

// ---FAQ---
export const faqHeading = "Frequently Asked Questions"
export const faq = [
  {
    question: "What is Octo Space?",
    answer: `Octo Space is a collection of 1000+ amazing figures with
             different attributes and styles hosted on Ethereum Blockchain. 
             You can buy these figures on OpenSea.
    `,
  },
  {
    question: "How much do they Cost?",
    answer: `Octo Space is a collection of 1000+ amazing figures with
             different attributes and styles hosted on Ethereum Blockchain. 
             You can buy these figures on OpenSea.
    `,
  },
  {
    question: "Can I buy an NFT from Opensea?",
    answer: `Octo Space is a collection of 1000+ amazing figures with
             different attributes and styles hosted on Ethereum Blockchain. 
             You can buy these figures on OpenSea.
    `,
  },
]
