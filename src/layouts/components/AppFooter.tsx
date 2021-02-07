import { GithubOne } from '@icon-park/react'
import React from 'react'

function AppFooter() {
  return (
    <div className="flex items-center w-full text-gray-500">
      <div className="">React Admin Template</div>
      <a
        className="flex items-center ml-auto"
        href="https://github.com/Codennnn/portal"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Github
        <GithubOne className="ml-2" theme="outline" size="24" fill="#a0aec0" />
      </a>
    </div>
  )
}

export default AppFooter
