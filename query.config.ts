/**
 * List of all the query keys in the app for data fetching/mutation
 */
export const QUERY = {
  PROJECT: {
    LIST: ({ pageNumber, searchText }: { pageNumber: number | string; searchText: string }) => {
      return { key: `project-list-${pageNumber}-${searchText}` as const }
    },
    DYNAMIC: (slug: string) => {
      return { key: `project-details-${slug}` as const }
    },
  },
} as const

export const QUERY_SIZE = {
  PROJECT: {
    LIST: {
      count: 2,
    },
  },
}
