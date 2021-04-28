import { Tabs } from 'antd'

function SettingStyle() {
  return <div>123</div>
}

export default function RightPanel() {
  const tabs = [
    { id: '1', title: '样式', renderComponent: () => SettingStyle() },
    // { id: '2', title: '设置', innerComponent: <div>321</div> },
  ]

  return (
    <aside className="fixed top-0 right-0 w-1/6 h-screen bg-white">
      <Tabs defaultActiveKey="1" type="card">
        {tabs.map(tab => (
          <Tabs.TabPane key={tab.id} tab={tab.title}>
            {tab.renderComponent()}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </aside>
  )
}
