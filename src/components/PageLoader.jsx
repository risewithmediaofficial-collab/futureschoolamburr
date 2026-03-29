export default function PageLoader() {
  return (
    <div className="flex min-h-[260px] items-center justify-center bg-white">
      <div className="fs-line-loader" aria-label="Loading page" role="status">
        <svg width="64" height="48" viewBox="0 0 64 48" aria-hidden="true">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" className="fs-line-loader-back" />
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" className="fs-line-loader-front" />
        </svg>
      </div>
    </div>
  )
}
