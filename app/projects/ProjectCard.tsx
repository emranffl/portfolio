import Image from "next/image"
import { ExternalLink } from "lucide-react"

type ProjectCardProps = {
  title: string
  company?: string | null
  companyLogo?: string | null
  image: string
  url: string
  tags: string[]
}

export default function ProjectCard({ title, company, companyLogo, image, url, tags }: ProjectCardProps) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden p-4">
      <div className="relative mb-4 aspect-[578/451] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${title} preview`}
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2">
        {company && companyLogo && (
          <div className="flex items-center text-sm opacity-80">
            <span>Project at</span>
            <Image src={companyLogo} alt={`${company} logo`} width={16} height={12} className="mx-2" />
            <span>{company}</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-medium">{title}</h2>
          <a
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ExternalLink className="h-6 w-6 opacity-50 hover:opacity-100" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold dark:bg-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
