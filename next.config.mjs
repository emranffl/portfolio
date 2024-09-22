/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  async rewrites() {
    return [
      {
        source: "/graphql/:path*",
        destination: "https://thoughts.emranffl.com/graphql/:path*",
      },
    ]
  },
}

export default nextConfig
