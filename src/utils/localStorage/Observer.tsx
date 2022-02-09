import { useEffect } from 'react'
import { AnyAction, createAction } from '@reduxjs/toolkit'

export const storageEventAction = createAction<string>('event/storage')

export const createObserver = (storageKey: string) => (dispatch: (action: AnyAction) => void) => {
  useEffect(() => {
    const listener = ({ key }: StorageEvent) => {
      if (key !== storageKey) return
      dispatch(storageEventAction(storageKey))
    }
    window.addEventListener('storage', listener)

    return () => window.removeEventListener('storage', listener)
  })
}
