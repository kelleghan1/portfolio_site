export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export interface Category {
  __typename?: 'Category'
  id: Scalars['Int']
  name: Scalars['String']
}

export interface Link {
  __typename?: 'Link'
  id: Scalars['Int']
  isInternal: Scalars['Boolean']
  label: Scalars['String']
  type: LinkType
  url: Scalars['String']
}

export interface LinkType {
  __typename?: 'LinkType'
  id: Scalars['Int']
  name: Scalars['String']
}

export interface PortfolioItem {
  __typename?: 'PortfolioItem'
  categories: Category[]
  description: Scalars['String']
  githubLinks?: Maybe<Link[]>
  homeImage: ProjectImage
  id: Scalars['Int']
  links: Link[]
  name: Scalars['String']
  primaryImage: ProjectImage
  productLinks?: Maybe<Link[]>
  products: Product[]
  projectId: Scalars['String']
  projectImages: ProjectImage[]
}

export interface Product {
  __typename?: 'Product'
  id: Scalars['Int']
  name: Scalars['String']
}

export interface ProjectImage {
  __typename?: 'ProjectImage'
  id: Scalars['Int']
  imageUrl: Scalars['String']
}

export interface Query {
  __typename?: 'Query'
  categories: Category[]
  linkTypes: LinkType[]
  links: Link[]
  portfolioItems: PortfolioItem[]
  products: Product[]
  projectImages: ProjectImage[]
}
