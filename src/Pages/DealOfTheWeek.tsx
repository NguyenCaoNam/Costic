import React from "react";
import CardProductSItem from "../components/CardProductS/CardProductS"
import { ListCardProduct } from "../utils/data/ListCardProduct"

const DealOfTheWeek = () => {
  return (
    <div className="flex flex-col gap-[64px] items-center">
      <div className="flex flex-col gap-[32px]">
        <p className="text-[32px] text-left font-medium leading-[18px] w-full">DEAL OF THE WEEK</p>
        <div className="w-[1328px] h-[500px] object-fill overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4MDH6IdVEjiRl_xTYYIrRV51i1TsZnViXZZ1wIcBGA&s" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className="flex flex-wrap gap-[24px] w-[1328px]">
          {/* chỗ này phải là camel case itemproduct => itemProduct */}
          {ListCardProduct.map((itemProduct) => (
            <CardProductSItem key={itemProduct.id} itemCard={itemProduct} />
          ))}
        </div>
        <div className="Btn_secondary">More</div>
      </div>
    </div>
  )
}
export default DealOfTheWeek