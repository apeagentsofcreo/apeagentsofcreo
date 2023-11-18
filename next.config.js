/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // Add or Change domains here to add allowed websites for images
  // ↓

  images: {
    loader: "imgix",
    path: "https://www.apeagentsofcreo.com",
  domains: [
      "www.apeagentsofcreo.com",
      "lh3.googleusercontent.com",
      "i.imgur.com",
      "ouch-cdn2.icons8.com",
    ],
  },
}
