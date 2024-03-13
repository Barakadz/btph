

const Main =(props)=>{
    const gg={backgroundImage:props.image,  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',backgroundPosition:'center center'
   
}
    return(
        <div>
  <div class="breadcrumb-area breadcrumb-height"style={gg} >
            <div class="container">
                <div class="breadcrumb-content">
                    <span class="breadcrumb-sub-title">{props.name}</span>
                    <h1 class="breadcrumb-title mb-1"></h1>
                    <p class="breadcrumb-desc font-size-20"></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main;