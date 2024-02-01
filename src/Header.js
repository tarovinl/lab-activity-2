function Header() {
    return (
        <header>
            <nav>
        <div className ="border-b-2 border-black  bg-orange-100 px-4 lg:px-6 py-2.5 ">
            
        <div className ="flex flexbox justify-center items-center ">
        <img src="//elliothasacoolstore.com/cdn/shop/files/bgstar_30x.png?v=1644751126" 
            srcset="//elliothasacoolstore.com/cdn/shop/files/bgstar_30x.png?v=1644751126 1x, //elliothasacoolstore.com/cdn/shop/files/bgstar_30x@2x.png?v=1644751126 2x, //elliothasacoolstore.com/cdn/shop/files/bgstar_30x@3x.png?v=1644751126 3x" 
            alt="elliothasacoolstore"></img>
            <div className="flex  lg:order-2">
                <div className="flex items-stretch space-x-80">

                <a class="flex py-2 relative self-stretch flex-col " href="/">
                <span class="text-2xl inline-block m-auto">Home</span></a>
                <a class="flex py-2 relative self-stretch flex-col " href="/">
                <span class="text-2xl inline-block m-auto">Prints</span></a>
                <a class="flex py-2 relative self-stretch flex-col " href="/">
                <span class="text-2xl inline-block m-auto">Contact</span></a>
                
                </div>  
            
            </div>   
         </div>
        </div>
        </nav>  
        </header>
    );
}

export default Header
