import React from 'react'
import { GithubOne } from '@icon-park/react'

function AppFooter() {
  return (
    <div className="w-full flex items-center text-gray-500">
      <div className="">React Admin Template</div>
      <a
        className="ml-auto flex items-center"
        href="https://github.com/Chinesee/magic-ui/tree/master/magic-skote"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
        <GithubOne className="ml-2" theme="outline" size="24" fill="#a0aec0" />
      </a>
    </div>
  )
}

export default AppFooter
