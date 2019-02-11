const posts=[
    {title:"post_one",body:"This is post one"},
    {title:"post_two",body:"This is post two"}
]

function getPosts(){
    setTimeout(function(){
        let output=" "
        posts.forEach((post,index)=>{
            output+=`<li> ${post.title}</li>`

        })
        document.body.innerHTML = output

    },1000)
}


function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error=false
            if(!error){
                 resolve()
            } else{
                reject("Error ! something went wrong")
            }
    
        },2000)


    });