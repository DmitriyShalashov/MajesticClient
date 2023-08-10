import Cell from "./Cell";

function Cells() {
    return ( 
        <div className="w-fit m-auto gap-[30px] grid grid-cols-3">
           <Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/>
        </div>
     );
}

export default Cells;