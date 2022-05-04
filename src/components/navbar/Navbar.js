export function Navbar(){
    return(
        <div className="flex justify-between p-3 bg-navbar-1000">
            <a href="index.html"><div className="text-xl font-bold hover:text-slate-600 transition-all duration-250 ease-linear">WAIFU CLICKER</div></a>
            <div className="text-lg hover:text-slate-600 transition-all duration-250 ease-linear">
                <a href="https://github.com/iguoliveira/web-clicker" target={'_blank'}><div>GITHUB</div></a>
            </div>
        </div>
    )
}