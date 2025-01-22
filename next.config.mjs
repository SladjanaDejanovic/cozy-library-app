/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "books.google.com",
				port: "",
				pathname: "/books/content/**", // Match all paths under "/books/content/"
			},
			{
				protocol: "https",
				hostname: "books.google.com",
				pathname: "/books/content/**",
			},
		],
	},
};

export default nextConfig;
