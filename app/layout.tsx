import "/style/globals.scss"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import { cn } from "tailwind-cn"
import dynamic from "next/dynamic"
import Navbar from "@/app/Components/Navbar"

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] })
// * dynamic imports
const Particles = dynamic(() => import("./Components/Particles"), {
  ssr: false,
})

// + metadata
export const metadata: Metadata = {
  title: "Emran Hossain | Portfolio — Software Engineer",
  description:
    "I'm Emran Hossain, a software engineer with expertise in full-stack web development. On the frontend, I specialize in using Next.js, TypeScript, and tailwindcss to create highly performant and responsive web applications. I also have experience with Bootstrap and SCSS for styling and UI design. On the backend, I'm proficient in PHP and Laravel, as well as Node.js and Prisma ORM for building robust and scalable server-side applications. I work with databases like MariaDB to ensure efficient data storage and retrieval. With a passion for clean code and efficient development practices, I strive to deliver high-quality solutions that meet client needs.",
  keywords:
    "Emran Hossain, Emran, Hossain, Emranffl, Emranffl.com, Emran Hossain Portfolio, Emran Hossain Software Engineer, Emran Hossain Web Developer, Emran Hossain Full Stack Developer, Emran Hossain Frontend Developer, Emran Hossain Backend Developer, Emran Hossain Next.js Developer, Emran Hossain TypeScript Developer, Emran Hossain TailwindCSS Developer, Emran Hossain Bootstrap Developer, Emran Hossain SCSS Developer, Emran Hossain PHP Developer, Emran Hossain Laravel Developer, Emran Hossain Node.js Developer, Emran Hossain Prisma ORM Developer, Emran Hossain MariaDB Developer, Emran Hossain Clean Code Developer, Emran Hossain Efficient Development Practices Developer, Emran Hossain High-Quality Solutions Developer, Emran Hossain Client Needs Developer",

  // + Open Graph - Facebook - LinkedIn
  openGraph: {
    type: "website",
    url: "https://www.emranffl.com/",
    title: "Emran Hossain | Portfolio — Software Engineer",
    description:
      "I'm Emran Hossain, a software engineer with expertise in full-stack web development. On the frontend, I specialize in using Next.js, TypeScript, and tailwindcss to create highly performant and responsive web applications. I also have experience with Bootstrap and SCSS for styling and UI design. On the backend, I'm proficient in PHP and Laravel, as well as Node.js and Prisma ORM for building robust and scalable server-side applications. I work with databases like MariaDB to ensure efficient data storage and retrieval. With a passion for clean code and efficient development practices, I strive to deliver high-quality solutions that meet client needs.",
    images: "https://www.emranffl.com/portfolio/media/assets/emranffl.jpg",
    emails: "emranffl.biz@gmail.com",
  },
  twitter: {
    title: "Emran Hossain | Portfolio — Software Engineer",
    description:
      "I'm Emran Hossain, a software engineer with expertise in full-stack web development. On the frontend, I specialize in using Next.js, TypeScript, and tailwindcss to create highly performant and responsive web applications. I also have experience with Bootstrap and SCSS for styling and UI design. On the backend, I'm proficient in PHP and Laravel, as well as Node.js and Prisma ORM for building robust and scalable server-side applications. I work with databases like MariaDB to ensure efficient data storage and retrieval. With a passion for clean code and efficient development practices, I strive to deliver high-quality solutions that meet client needs.",
    images: "https://www.emranffl.com/portfolio/media/assets/emranffl.jpg",
    creator: "@emranffl",
    site: "@emranffl",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
        {/* <!-- Google AdSense --> */}
        <meta name="google-site-verification" content="7PMRO1S1bil8pat5sd3Ys5yUpFTbEusdJI77IrE7A80" />
        <script
          data-ad-client="ca-pub-5556640164844079"
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-[#292f37] px-10",
          lato.className,
          "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
        )}
      >
        {/* // + navbar */}
        {/* <Navbar /> */}

        {/* // + main content */}
        {children}

        {/* // + background particles loading div */}
        <Particles />
      </body>
    </html>
  )
}
