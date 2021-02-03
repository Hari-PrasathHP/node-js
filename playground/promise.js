let getData = new Promise((resolve, reject) => {
    let data = "deepak"
    setTimeout(() => {
        resolve(data)
    }, 2000)
})

let load = async () => {
    let dbData

    dbData = await getData

    console.log(dbData)

}

load()