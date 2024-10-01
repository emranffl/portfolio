import { PATHS } from "@/router.config"
import { getAPIResponse } from "@/utils/get-api-response"

export const getProjects = async ({
  pageSize,
  endCursor,
  searchText,
}: Parameters<typeof PATHS.PROJECT.LIST>["0"]) => {
  const response = await getAPIResponse<ProjectsResponse>({
    body: JSON.stringify({ query: PATHS.PROJECT.LIST({ pageSize, endCursor, searchText }).root }),
    method: "POST",
  })

  console.log("Projects Data:", response)

  const { data } = response as ProjectsResponse

  return data.projects
}
