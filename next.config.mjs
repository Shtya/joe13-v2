import withNextIntl from "next-intl/plugin";

const nextConfig = {
  images: {
    domains: ["backend.joe13th.com"],
  },
};
export default withNextIntl("./il8n.js")(nextConfig);
