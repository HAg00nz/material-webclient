import { create } from 'zustand'

export type useStoreType = {
  printerID: number
  layoutID: number
  layoutDataArr: any[]
  setPrinterID: (printerID: number) => void
  setLayoutID: (layoutID: number) => void
  setLayoutDataArr: (layoutDataArr: any[]) => void
}

// Define your store
const useStore = create<useStoreType>((set) => ({
  printerID: 0,
  layoutID: 0,
  layoutDataArr: [],
  setPrinterID: (printerID: any) => set({ printerID }),
  setLayoutID: (layoutID: any) => set({ layoutID }),
  setLayoutDataArr: (layoutDataArr: any[]) => set({ layoutDataArr }),
}))

export default useStore
