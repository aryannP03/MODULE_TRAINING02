function customRender(reactElement, container){


    // <<--------------First version of code---------------------------->>
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    //------------------More optimized code------------------------------//
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == children) continue;
        domElement.setAttribute(reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {                      //react creates a tree graph structure
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)