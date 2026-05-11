import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

type ToastType = 'success' | 'error'

interface ToastProps {
  message: string
  type: ToastType
  visible: boolean
  onClose: () => void
}

export default function Toast({ message, type, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-slide-up">
      <div
        className={`flex items-start gap-3 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-sm ${
          type === 'success'
            ? 'border-emerald-200 bg-white text-emerald-800'
            : 'border-red-200 bg-white text-red-800'
        }`}
        style={{ minWidth: '300px', maxWidth: '380px' }}
      >
        <div className="mt-0.5 shrink-0">
          {type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-emerald-500" />
          ) : (
            <XCircle className="h-5 w-5 text-red-500" />
          )}
        </div>
        <p className="flex-1 text-sm font-medium leading-5">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-0.5 shrink-0 opacity-50 transition hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
