/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/news",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "images.ctfassets.net",
      "cdn.mindful.org",
      "mindful.org",
      "chopracom.s3.us-west-1.amazonaws.",
    ],
  },
};
