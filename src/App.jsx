import './App.css'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import useAnimation from './hooks/useAnimation'

function App() {
  const { isAnimating, animationSpeed, toggleAnimation, changeSpeed } = useAnimation()

  return (
    <div className="app">
      <header className="app-header">
        <h1>고양이 댄싱 애니메이션</h1>
        <p>귀여운 고양이가 춤을 춰요! 🐱💃</p>
        <div className="keyboard-hints">
          <small>키보드 단축키: 스페이스바(시작/정지), 1,2,3(속도 조절)</small>
        </div>
      </header>

      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls
          isAnimating={isAnimating}
          animationSpeed={animationSpeed}
          onToggle={toggleAnimation}
          onSpeedChange={changeSpeed}
        />
      </main>

      <footer className="app-footer">
        <p>React + Vite로 만든 고양이 댄싱 페이지</p>
        <p>접근성 지원: 키보드 네비게이션 및 스크린 리더 호환</p>
      </footer>
    </div>
  )
}

export default App
