function AnimationControls({ isAnimating, animationSpeed, onToggle, onSpeedChange }) {
  const handleSpeedChange = (newSpeed) => {
    onSpeedChange(newSpeed)
  }

  return (
    <div className="animation-controls">
      <div className="control-panel">
        <h3>애니메이션 컨트롤</h3>

        <div className="control-group">
          <button
            className={`control-btn ${isAnimating ? 'stop' : 'play'}`}
            onClick={onToggle}
            aria-label={isAnimating ? "애니메이션 정지" : "애니메이션 시작"}
          >
            {isAnimating ? (
              <>
                <span className="btn-icon">⏸️</span>
                <span>정지</span>
              </>
            ) : (
              <>
                <span className="btn-icon">▶️</span>
                <span>시작</span>
              </>
            )}
          </button>
        </div>

        <div className="control-group">
          <label htmlFor="speed-control">애니메이션 속도</label>
          <div className="speed-controls">
            <button
              className="speed-btn"
              onClick={() => handleSpeedChange(0.5)}
              disabled={!isAnimating}
            >
              느리게
            </button>
            <button
              className="speed-btn"
              onClick={() => handleSpeedChange(1)}
              disabled={!isAnimating}
            >
              보통
            </button>
            <button
              className="speed-btn"
              onClick={() => handleSpeedChange(2)}
              disabled={!isAnimating}
            >
              빠르게
            </button>
          </div>
          <div className="speed-indicator">
            현재 속도: {animationSpeed === 0.5 ? '느림' : animationSpeed === 1 ? '보통' : '빠름'}
          </div>
        </div>

        <div className="status-indicator">
          <div className={`status-light ${isAnimating ? 'active' : 'inactive'}`}></div>
          <span>{isAnimating ? '애니메이션 실행 중' : '애니메이션 정지됨'}</span>
        </div>
      </div>
    </div>
  )
}

export default AnimationControls