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

import request, { gql } from "graphql-request"
import { useEffect, useState } from "react"

const getPostDetails = async (slug: string) => {
  const data: any = await request(
    process.env.NEXT_PUBLIC_SITE_URL + "/graphql",
    gql`
      query NewQuery {
        post(idType: SLUG, id: "hello-world") {
          slug
          content
          date
          id
          title
          uri
        }
      }
    `
  )

  console.log("News Details Data:", data)

  return data
}

const Page = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    getPostDetails("hello-world").then((data) => {
      setData(data)
    })
  }, [])

  return (
    <section className="container my-20">
      <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export default Page
