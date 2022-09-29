import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'

export default function PostBody({ content }) {
  return <BlockContent blocks={content} className="text-xl" />
}
