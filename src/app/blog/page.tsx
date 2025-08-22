export default async function blog(){
    await new Promise(resolve => {
        setTimeout(()=> {
            resolve("Intentional delay");
            
        },1000)
    })
    return <h1>This is blog Page</h1> 
}