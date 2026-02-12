import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getPostFullPath(fileName) {
  return path.join('./src/content/posts', `${fileName}.md`)
}

const fileName = await input({
  message: 'Enter the file name',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return 'Invalid Name : You can use Letters, Numbers, and Hyphens.'
    }
    const fullPath = getPostFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} Already exists.`
    }
    return true
  },
})

const title = await input({
  message: 'Enter the title.',
})

const content = `---
title: ${title}
date: ${new Date().toISOString()}
tags: []
draft: false
---
`

const fullPath = getPostFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} Comfirmed`)
