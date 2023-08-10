import Cells from "./CellsGrid";

function Board() {
    return ( 
        <div>
            <img className="fixed z-[-1] w-full h-screen brightness-[0.7]" src="https://png.pngtree.com/background/20230324/original/pngtree-city-%E2%80%8B%E2%80%8Bfuture-planet-building-background-picture-image_2165840.jpg" alt="bg-board"/>
            <div className="flex p-[20px]">
                <Cells/>{/* Своя сторона */}
                <Cells/>{/* Сторона противника */}
            </div>
        </div>
     );
}

export default Board;