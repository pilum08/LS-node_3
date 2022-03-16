const fs=require('fs')
const data=require('./data.json')
const path=require('path')
const dataPath=path.normalize(path.resolve(__dirname,'data.json'))

const readData=fs.readFileSync(dataPath,'utf-8')
const parseData=JSON.parse(readData)

const addProd=(fields,file)=>{data.products.push({
    src:`./assets/img/products/${file}`,
    name:fields.name,
    price:fields.price
})
const dataStr=JSON.stringify(data, null,2)
fs.writeFile(dataPath,dataStr,(err)=> {if (err) throw err; 
    console.log('products data written to file')}) 
}
const setSkills=(skills)=>{
    data.skills[0].number=skills.age
    data.skills[1].number=skills.concerts
    data.skills[2].number=skills.cities
    data.skills[3].number=skills.years
    const dataStr=JSON.stringify(data,null,2)
    fs.writeFile(dataPath,dataStr,(err)=>{if(err) throw err})
}
const getSkills={ get skills(){
   return parseData.skills||{}
}}
const products=data.products

module.exports={
    addProd,
    setSkills,
    getSkills,
    products
}