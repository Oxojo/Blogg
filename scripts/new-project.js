import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getProjectFullPath(fileName) {
  return path.join('./src/content/projects', `${fileName}.yaml`)
}

const fileName = await input({
  message: 'Enter the file name.',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return 'Invalid Name : You can use Letters, Numbers, and Hyphens.'
    }
    const fullPath = getProjectFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} Already exists.`
    }
    return true
  },
})

const title = await input({
  message: 'Enter the title.',
})
const description = await input({
  message: 'Enter the description',
})
const link = await input({
  message: 'Enter the link',
})
const image = await input({
  message: 'Enter the address for its preview-image',
})

const content = `title: ${title}
description: ${description}
link: ${link}
image: ${image}
`

const fullPath = getProjectFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} Comfirmed`)
