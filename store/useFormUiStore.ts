import { create } from 'zustand'

export type FormUiStoreType = { isShowLeft: boolean }

export const useFormUiStore = create<FormUiStoreType>(() => ({
  isShowLeft: true
}))

