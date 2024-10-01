type ProjectsResponse = {
  data: {
    projects: {
      nodes: Node[]
      pageInfo: PageInfo
    }
  }
}

interface Node {
  title: string
  slug: string
  featuredImage: {
    node: {
      mediaItemUrl: string
      srcSet: string
    }
  }
  content: string
  dateGmt: string
  id: string
  link: string
  modifiedGmt: string
  metaData: MetaData
  categories: {
    nodes: {
      name: string
    }[]
  }
  tags: {
    nodes: {
      name: string
    }[]
  }
}

interface MetaData {
  codeUrl: {
    url: string
  } | null
  demoUrl: {
    url: string
  } | null
  developedAt: string | null
  isFeatured: boolean
}
