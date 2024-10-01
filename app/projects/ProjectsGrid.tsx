import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import ProjectCard from "./ProjectCard"

interface ProjectsGridProps {
  projects?: ProjectsResponse["data"]["projects"]["nodes"]
}

export default function ProjectsGrid({ projects = [] }: ProjectsGridProps) {
  const truncateContent = (content: string, maxLength: number) => {
    const strippedContent = content.replace(/<[^>]+>/g, "")
    return strippedContent.length > maxLength
      ? strippedContent.substring(0, maxLength) + "..."
      : strippedContent
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-xl text-muted-foreground">No projects found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          company={project.metaData.developedAt}
          companyLogo={""}
          image={project.featuredImage.node.mediaItemUrl}
          tags={project.categories.nodes.map((category) => category.name)}
          title={project.title}
          url={project.metaData.demoUrl?.url || ""}
        />
      ))}
    </div>
  )
}
{
  /* <Card key={project.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
            <div className="text-sm text-muted-foreground">{formatDate(project.dateGmt)}</div>
          </CardHeader>
          <CardContent className="flex-grow">
            {project.featuredImage && (
              <div className="relative mb-4 h-48 w-full">
                <Image
                  src={project.featuredImage.node.mediaItemUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}
            <div className="mb-2">
              {project.categories.nodes.map((category) => (
                <span
                  key={category.name}
                  className="mb-2 mr-2 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground"
                >
                  {category.name}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{truncateContent(project.content, 150)}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">Developed at: {project.metaData.developedAt}</div>
            {project.metaData.demoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.metaData.demoUrl.url} target="_blank" rel="noopener noreferrer">
                  View Demo <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </CardFooter>
        </Card> */
}
