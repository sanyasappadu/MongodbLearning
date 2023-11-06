module.exports = () => {
    const data ={
        students:[]
    }
    for(let i = 0; i< 15; i++ ){
        data.students.push({
            id:i,
            name:`name${i}`
        })
    }
    return data
}

// package.son   "serve-json": "json-server --watch data.js --port 4000 --routes routes.json"