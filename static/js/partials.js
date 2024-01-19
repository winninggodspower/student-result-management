
function include(query_string, partial_file, options, callbackFunc) {
    // this function takes in a query string for an element and a partial file.
    // it queries the element then 
    // fetches the partial file and insert it's content of the file in the element.

    const parentElement = document.querySelector(query_string);

    fetch(partial_file)
    .then(data=>data.text())
    .then(result=>{
        success = true;
        parentElement.innerHTML = result;

        if (options?.replaceParent) {
            let newElement = parentElement.firstElementChild;
            parentElement.replaceWith(newElement);
        }
        
    })
    .catch(error=>{
        error = error;
    })
    

}