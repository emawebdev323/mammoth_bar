// fetch message 
function fetchMessage() {
    const newURL = new URL(document.URL)

    console.log(newURL.searchParams)

    console.log(newURL.searchParams.get('message'))
}
fetchMessage()