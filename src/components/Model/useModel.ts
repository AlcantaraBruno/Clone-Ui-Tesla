import { useCallback, useContext, useEffect } from 'react'

import ModelsContext from './ModelsContext'

export default function useModel(modelName: string) {
    const { registerModel, unregisterMode, getModelByName } = useContext(
        ModelsContext
    )

    useEffect(() => () => unregisterMode(modelName), [
        modelName,
        unregisterMode
    ])

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ])

    return { registerModel, getModel }
}