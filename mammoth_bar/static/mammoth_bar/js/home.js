// fetch error message 
function fetchMessage() {
    const newURL = new URL(document.URL)

    if (newURL.searchParams.size) {
        console.log(newURL.searchParams.get('message'))
    }
}
fetchMessage()