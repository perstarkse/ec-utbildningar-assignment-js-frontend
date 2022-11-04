export const submitData = async (url, data, method, contentType = 'application/json') => {

    const res = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': contentType
        },
        body: data
    })

    if (res.status === 200) {
        return true;
    }
    else {
        return false;
    }
}

