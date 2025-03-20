import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGameStore = create(
  combine(
    { history: [Array(9).fill(null)], currentMove: 0, xIsNext: true },
    (set) => {
      return {
        setHistory: (nextHistory) => {
          set((state) => ({
            history:
              typeof nextHistory === 'function'
                ? nextHistory(state.history)
                : nextHistory,
          }))
        },
        setCurrentMove: (nextCurrentMove) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === 'function'
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }))
        },
        setXIsNext: (nextXIsNext) => {
          set((state) => ({
            xIsNext:
              typeof nextXIsNext === 'function'
                ? nextXIsNext(state.xIsNext)
                : nextXIsNext,
          }))
        },
      }
    },
  ),
)