// This file is generated by Velite

import config from '../velite.config'

type Collections = typeof config.collections

export type Post = Collections['posts']['schema']['_output']
export declare const posts: Post[]

export type undefined = Collections['others']['schema']['_output']
export declare const others: undefined[]
