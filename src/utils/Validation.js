

export const ValidateValues = (data) => {
    let result = data.every((item) => {
        if (item.type == 'file')
            return item.value.fileName.length > 0
        return item.value?.trim().length >0
    })

    return result
}