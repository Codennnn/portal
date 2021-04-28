import './CanvasLayout.scss'

import CanvasCompSide from './components/canvas-layout/CanvasCompSide'
import CanvasCreation from './components/canvas-layout/CanvasCreation'
import CanvasSettingSide from './components/canvas-layout/CanvasSettingSide'

export default function CanvasLayout() {
  return (
    <div className="canvas-layout">
      <CanvasCompSide />

      <CanvasCreation />

      <CanvasSettingSide />
    </div>
  )
}
