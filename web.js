// function clickhandler(){
//     // event.preventDefault()
//     const msg =document.getElementsByName("msg")[0]
//     const fname =document.getElementsByName("fname")[0]
//     const email = document.getElementsByName("em")[0]
//     // alert(email.value+"\n"+fname.value)
//     msg.textContent= fname.value+"\n"+email.value

// }
async function clickhandler(){
    const msg =document.getElementsByName("msg")[0]
    const fname =document.getElementsByName("fname")[0]
    const email = document.getElementsByName("em")[0]
    // alert(email.value+"\n"+fname.value)
    msg.textContent= fname.value+"\n"+email.value
    const data = await fetch('https://www.w3schools.com/js/js_object_definition.asp',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            push:fname.value+"\n"+email.value
        })
    })
}
