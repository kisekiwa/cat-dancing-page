import { useState, useEffect, useCallback } from 'react'

function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
    document.documentElement.style.setProperty('--animation-speed', `${speed}s`)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.code) {
        case 'Space':
          event.preventDefault()
          toggleAnimation()
          break
        case 'Digit1':
          event.preventDefault()
          changeSpeed(0.5)
          break
        case 'Digit2':
          event.preventDefault()
          changeSpeed(1)
          break
        case 'Digit3':
          event.preventDefault()
          changeSpeed(2)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation, changeSpeed])

  useEffect(() => {
    document.documentElement.style.setProperty('--animation-speed', `${animationSpeed}s`)
  }, [animationSpeed])

  return {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  }
}

export default useAnimation