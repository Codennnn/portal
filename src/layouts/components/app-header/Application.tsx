import { ApplicationOne } from '@icon-park/react'
import { Popover } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

export default function ApplicationIcon({ className, style }) {
  const apps = [
    {
      icon:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_1.png',
      name: 'Skote',
      link: 'https://gitee.com/chinesee',
    },
    {
      icon:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_2.png',
      name: 'Frest',
      link: 'https://gitee.com/chinesee',
    },
    {
      icon:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_4.png',
      name: 'Share',
      link: 'https://gitee.com/chinesee',
    },
    {
      icon:
        'https://gitee.com/chinesee/images/raw/master/magic-ui/app_icon_3.png',
      name: 'Admin',
      link: 'https://gitee.com/chinesee',
    },
  ]
  const app = () => (
    <div className="w-64 flex flex-wrap">
      {apps.map(({ icon, name, link }) => (
        <a
          className="w-1/3 "
          target="_blank"
          rel="noopener noreferrer"
          key={name}
          href={link}
        >
          <div className="px-4 py-2 flex flex-col items-center">
            <img
              className="w-8 h-8 mb-2 object-contain"
              src={icon}
              alt={name}
            />
            <div>{name}</div>
          </div>
        </a>
      ))}
    </div>
  )

  return (
    <Popover className={className} style={style} content={app}>
      <ApplicationOne className="cursor-pointer" size={23} />
    </Popover>
  )
}

ApplicationIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
}
ApplicationIcon.defaultProps = {
  className: '',
  style: {},
}
