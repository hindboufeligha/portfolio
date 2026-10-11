import '@testing-library/jest-dom/vitest'
import { beforeAll, vi } from 'vitest'

beforeAll(() => {
  globalThis.IntersectionObserver = vi.fn(function () {
    return {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      takeRecords: vi.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
    }
  }) as unknown as typeof IntersectionObserver
})
