type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1alpha/search/simple/document-headers-GET': {
        parameters: [
            {
                name: 'q'
            },
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
        ]
    },
}