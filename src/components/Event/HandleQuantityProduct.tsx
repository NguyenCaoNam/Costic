import React, { useState } from "react";
import IconMinus from "../../utils/icon/iconMinus";
import IconAdd from "../../utils/icon/iconAdd";

const HandleQuantityProduct = () => {
  const [CurrentQuantity, setCurrentQuantity] = React.useState(0);

  const handleMinus = () => {
    if (CurrentQuantity == 0) return;
    setCurrentQuantity(CurrentQuantity - 1)
  }

  const handleAdd = () => {
    setCurrentQuantity(CurrentQuantity + 1)
  }
  return (
    <div className="flex flex-row gap-[24px] items-center px-[12px] py-[16px] rounded-[30px] border-solid border-[#E1E1E1] border-[1px] bg-white">
      <div onClick={handleMinus}>
        <IconMinus />
      </div>
      <div className="text-[16px] font-medium leading-[22px] text-center w-[25px]">{CurrentQuantity}</div>
      <div onClick={handleAdd}>
        <IconAdd />
      </div>
    </div>
  )
}

export default HandleQuantityProduct