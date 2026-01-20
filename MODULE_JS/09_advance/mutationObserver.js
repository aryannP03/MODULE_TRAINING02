//mutation observer keeps track in changes DOM

//syntax : == const observer = new MutationObserver(callback);
        //    observer.observe(targetNode, options)


//creating a mutation observer
const observer = new MutationObserver((mutations) => {
    console.log(mutations);
})

//choose what to observe
observer.observe(targetNode, {
    childList: true,
    subtree: true
})

//stop observing
observer.disconnect()
