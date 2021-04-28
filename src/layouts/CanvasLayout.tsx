import './CanvasLayout.scss'

import CenterArea from './components/canvas-layout/CenterArea'
import LeftPanel from './components/canvas-layout/LeftPanel'
import RightPanel from './components/canvas-layout/RightPanel'

export default function CanvasLayout() {
  return (
    <div className="canvas-layout">
      <LeftPanel />

      <CenterArea />

      <RightPanel />
    </div>
  )
}
