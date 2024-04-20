import React from 'react'
import IconMinus from "../../utils/icon/iconMinus";
import IconAdd from "../../utils/icon/iconAdd";

interface IProduct {
  quanlity: number;
  setQuanlity: (quanlity: number) => void;
}

const HandleQuantityProduct = ({
  quanlity,
  setQuanlity,
}: IProduct) => {

  const handleMinus = () => {
    if (quanlity == 0) return;
    setQuanlity(quanlity - 1)
  }

  const handleAdd = () => {
    setQuanlity(quanlity + 1)
  }
  return (
    <div className="w-[114px] flex items-center h-10 px-3 rounded-3xl border border-[#E1E1E1]">
      <div className='w-1/4 h-full cursor-pointer flex flex-1 items-center justify-center' onClick={handleMinus}>
        <IconMinus />
      </div>
      <div className="text-base font-medium leading-[22px] w-1/2 text-center">{quanlity}</div>
      <div className='w-1/4 h-full cursor-pointer flex flex-1 items-center justify-center' onClick={handleAdd}>
        <IconAdd />
      </div>
    </div>
  )
}

export default HandleQuantityProduct