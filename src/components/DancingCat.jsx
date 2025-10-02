import { useState } from 'react'
import catImage from '../assets/images/cat.svg'
import useResponsive from '../hooks/useResponsive'
import '../styles/animations.css'

function DancingCat({ isAnimating }) {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 })
  const { isMobile, isTablet } = useResponsive()

  const handleCatClick = () => {
    const moveRange = isMobile ? 30 : isTablet ? 50 : 100
    const jumpRange = isMobile ? 15 : isTablet ? 20 : 25

    const randomX = Math.random() * moveRange - moveRange / 2
    const randomY = Math.random() * jumpRange - jumpRange / 2
    setCatPosition({ x: randomX, y: randomY })

    setTimeout(() => {
      setCatPosition({ x: 0, y: 0 })
    }, 1000)
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
        onClick={handleCatClick}
        style={{
          transform: `translate(${catPosition.x}px, ${catPosition.y}px)`
        }}
      >
        <img
          src={catImage}
          alt="댄싱 고양이"
          className="cat-image"
        />

        <div className="sparkle-effects">
          <span className="sparkle sparkle-1">✨</span>
          <span className="sparkle sparkle-2">⭐</span>
          <span className="sparkle sparkle-3">💫</span>
          <span className="sparkle sparkle-4">🌟</span>
        </div>
      </div>

      <div className="cat-shadow"></div>

      <div className="interaction-hint">
        {isAnimating ? "고양이를 클릭해보세요! 🐱" : "애니메이션이 정지됨"}
      </div>
    </div>
  )
}

export default DancingCat