import { Options } from 'markdown-it'

declare function vuedown(source: string, opts: Options): string

export = vuedown
export as namespace vuedown
