/**
 * List of all the routes in the app for frontend rendering
 */
export const LINKS = {
  home: "/",
  NEWS: {
    LIST: {
      home: "/news",
    },
    // DYNAMIC: (slug: string) => {
    //   return {
    //     home: `/news/${slug}`,
    //   } as const;
    // },
  },
  PROJECT: {
    LIST: {
      home: "/projects",
    },
    DYNAMIC: (slug: string) => {
      return {
        home: `/projects/${slug}`,
      } as const
    },
  },
  SITEMAP: {
    home: "/sitemap.xml",
  },
} as const

/**
 * List of all the paths in the app for backend data fetching
 */
export const PATHS = {
  PROJECT: {
    LIST: ({
      pageSize = 10,
      endCursor = "",
      searchText = "",
    }: {
      pageSize?: number | string
      endCursor?: string
      searchText?: string
    }) => {
      return {
        root: `query Projects {
  projects(first: ${pageSize}, after: "${endCursor}", where: {search: "${searchText}"}) {
    nodes {
      title(format: RENDERED)
      slug
      featuredImage {
        node {
          mediaItemUrl
          srcSet(size: MEDIUM_LARGE)
        }
      }
      content(format: RENDERED)
      dateGmt
      id
      link
      modifiedGmt
      metaData {
        codeUrl {
          url
        }
        demoUrl {
          url
        }
        developedAt
        isFeatured
      }
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`,
      }
    },
    DYNAMIC: (slug: string) => {
      return {
        root: `query NewQuery {
          projectBy(slug: "${slug}") {
            databaseId
            slug
            content
            projectFieldGroup {
              title
              metaDescription
              metaKeywords
              featureImage {
                node {
                  title
                  altText
                  mediaItemUrl
                  mediaType
                  mimeType
                }
              }
            }
          }
        }` as const,
      }
    },
  },
  // CUSTOM_PAGE: {
  //   DYNAMIC: (slug: string) => {
  //     return {
  //       root: `query getCustomPageDetails {
  //         customPageBy(slug: "${slug}") {
  //           databaseId
  //           slug
  //           content
  //           customPageFieldGroup {
  //             metaDescription
  //             metaKeyword
  //           }
  //         }
  //       }` as const,
  //     }
  //   },
  // },
} as const
