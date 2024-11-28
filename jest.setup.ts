import "@testing-library/jest-dom";

// Mocking ResizeObserver for Jest
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

(global as any).ResizeObserver = ResizeObserver;