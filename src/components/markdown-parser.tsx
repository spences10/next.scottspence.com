import Markdown from 'markdown-to-jsx'
import React, { FunctionComponent } from 'react'
import { Box, Flex, Textarea } from 'theme-ui'
import 'victormono'

interface Props {
  markdownContent?: React.ReactNode
}

const markdownExample = `# Heading 1\n
## Heading 2\n
### Heading 3\n
#### Heading 4\n
##### Heading 5\n
###### Heading 6\n
This is a paragraph\n
**bold lettering**\n
_italic lettering_\n
~~Strikethrough~~
`

export const MarkdownParser: FunctionComponent<Props> = ({
  markdownContent,
}) => {
  const [markdown, setMarkdown] = React.useState(
    !markdownContent ? markdownExample : markdownContent
  )

  const handleInput = React.useCallback(
    e => setMarkdown(e.target.value),
    []
  )
  const mdStyle = {
    marginTop: '-0.5rem',
  }
  return (
    <Flex as="div" sx={{ justifyContent: 'space-evenly' }}>
      <Textarea
        sx={{ width: 'auto' }}
        onInput={handleInput}
        value={markdown}
      />
      <Box
        as="div"
        sx={{
          paddingLeft: '2rem',
          paddingRight: '1rem',
          overflow: 'auto',
          overflowX: 'hidden',
        }}
      >
        <Markdown style={mdStyle}>{markdown}</Markdown>
      </Box>
    </Flex>
  )
}
