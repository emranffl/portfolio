// import request, { gql } from "graphql-request"

// const getPostDetails = async (slug: string) => {
//   const data: any = await request(
//     "https://thoughts.emranffl.com/graphql",
//     gql`
//       query NewQuery {
//         post(idType: SLUG, id: "hello-world") {
//           slug
//           content
//           date
//           id
//           title
//           uri
//           authorDatabaseId
//         }
//       }
//     `
//   )

//   console.log("News Details Data:", data)

//   return data
// }

// const Page = async () => {
//   return (
//     <section className="container my-20">
//       <pre className="text-white">{JSON.stringify(await getPostDetails("hello-world"), null, 2)}</pre>
//     </section>
//   )
// }

// export default Page

"use client"

import { useEffect, useState } from "react"
import { getAPIResponse } from "@/utils/get-api-response"
import ProjectsGrid from "./ProjectsGrid"
import { getProjects } from "@/services/Project/getProjects"

// const getProjects = async () => {
//   const data = await getAPIResponse({
//     body: JSON.stringify({
//       query: `
//         query Projects {
//           projects(first: 10) {
//             nodes {
//               title(format: RENDERED)
//               slug
//               featuredImage {
//                 node {
//                   mediaItemUrl
//                   srcSet(size: MEDIUM_LARGE)
//                 }
//               }
//               content(format: RENDERED)
//               dateGmt
//               id
//               link
//               modifiedGmt
//               metaData {
//                 codeUrl {
//                   url
//                 }
//                 demoUrl {
//                   url
//                 }
//                 developedAt
//                 isFeatured
//               }
//               categories {
//                 nodes {
//                   name
//                 }
//               }
//             }
//             pageInfo {
//               endCursor
//               hasNextPage
//             }
//           }
//           tags {
//             nodes {
//               name
//             }
//           }
//         }
//       `,
//     }),
//     method: "POST",
//   })

//   console.log("Projects Data:", data)

//   return data
// }

const Page = () => {
  const [data, setData] = useState<Awaited<ReturnType<typeof getProjects>> | null>(null)

  useEffect(() => {
    getProjects({
      pageSize: 10,
      endCursor: "",
      searchText: "",
    }).then((data) => {
      console.log("Projects Data:222", data)

      setData(data)
    })
  }, [])

  return (
    <>
      {/* <section className="container my-20">
        <pre className="whitespace-pre-wrap text-white">{JSON.stringify(data, null, 2)}</pre>
      </section> */}
      {data ? (
        <>
          <section className="container my-20">
            <ProjectsGrid projects={data.nodes} />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Page
