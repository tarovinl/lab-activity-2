function Footer(){
    return(
       
        <footer>
        <div className ="border-b-2 border-black  bg-orange-100s p-5 ">
            <div className="p py-theme lg:flex lg:flex-wrap lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0 space-y-2 text-sm lg:flex-1">
                    <p className ="text-black">© 2024, kevinstore. </p> 
                    <p>Powered by UST</p>
                </div>
                <div className="mb-4 md:mb-0 md:w-auto lg:flex-1">
                    <ul className="-mx-1 -mb-2 lg:text-center">
                        <li className="inline-block mx-1 mb-2 w-7">
                            <svg class="icon" xmlns ="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24"
                            width="38" height="24">
                               <title id="pi-american_express">American Express</title>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    );
}
export default Footer