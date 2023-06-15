const body=document.querySelector('body')
body.style.cssText=`
    margin:0;
    padding:0;    
    box-sizing:border-box;
`


const container=document.createElement('div')
const header=document.createElement('header')
const main=document.createElement('main')
const footer=document.createElement('footer')

//header - logo + nav
const logo=document.createElement('h4')
const nav=document.createElement('nav')

const link1=document.createElement('a')
const link1Content=document.createTextNode('Home')
link1.appendChild(link1Content)
nav.appendChild(link1)

const link2=document.createElement('a')
const link2Content=document.createTextNode('About')
link2.appendChild(link2Content)
nav.appendChild(link2)

const link3=document.createElement('a')
const link3Content=document.createTextNode('Services')
link3.appendChild(link3Content)
nav.appendChild(link3)

const link4=document.createElement('a')
const link4Content=document.createTextNode('Contact')
link4.appendChild(link4Content)
nav.appendChild(link4)

const contentLogo=document.createTextNode('HakkiShop')

logo.style.cssText=`
    color:green;
    font-size:1.2rem;
`
nav.style.cssText=`
    width:400px;
    display:flex;
    gap:20px;
`

logo.appendChild(contentLogo)
header.appendChild(logo)
header.appendChild(nav)
header.style.cssText=`
    padding:10px 20px;
    background-color:white;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
//end header logo +nav

main.style.cssText=`
    padding:20px 50px;
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-gap :10px;
`


for(let i=0;i<15;i++){
    const product=document.createElement('div')
    product.className='product'
    const spanProduct=document.createElement('div')
    const spanContent=document.createTextNode(i+1)

    product.style.border="2px solid gray"
    product.style.color="black"
    product.style.padding="30px"
    product.style.textAlign="center"
    product.style.borderRadius="10px"
    product.style.backgroundColor="white"



    spanProduct.appendChild(spanContent)
    product.appendChild(spanProduct)
    product.append('product')
    main.appendChild(product)
}
//end main

const footerContent=document.createTextNode('copyright\251'+new Date().getFullYear())
footer.appendChild(footerContent)
footer.style.cssText=`
    background-color:green;
    color:white;
    padding:20px 30px;
    text-align: center;
`

container.style.cssText=`
    background-color: lightgrey;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`


container.appendChild(header)
container.appendChild(main)
container.appendChild(footer)


body.appendChild(container)