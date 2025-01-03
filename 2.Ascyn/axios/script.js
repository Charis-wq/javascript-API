/*axios adalah library javascript yang memudahkan kita dengan API karena lebih 
singkat dan mendukung fitur seperti transformasi request/response otomatis dan 
pembatalan request untuk mengintalasi Axios dapat menggunakan (npm atau CDN).
*/
//promises
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => {
    console.log(res.data);
})
.catch(error => {
    console.error(error);
})

//asyc/await
async function getPost(){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
         console.log(res.data)
    }catch (error){
        console.error(`error: ${error}`);
    }
}

getPost()
