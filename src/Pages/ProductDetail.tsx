import { useParams } from "react-router-dom";
import { ListCardProduct } from "../utils/data/ListCardProduct";
import HandleQuantityProduct from "../components/Event/HandleQuantityProduct";
import LikeHandle from "../components/Event/LikeHandle";
import IconEstimateship from "../utils/icon/FeartureSupport/iconEstimateship";
import IconFreeship from "../utils/icon/FeartureSupport/iconFreeship";
import IconReturn from "../utils/icon/iconReturn";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addProduct, selectProduct } from "../redux/rootSlice";
import { useState } from "react";

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;
  const selectProducts = useAppSelector(selectProduct)

  const dispatch = useAppDispatch();
  const [quanlity, setQuanlity] = useState(0);

  //Find product theo id;
  const productDetail = ListCardProduct.find((itemCard) => itemCard.id === Number(id));
  console.log(productDetail);

  const handleAddProduct = () => {
    const data = {
      ...productDetail,
      quanlity: quanlity,
    }
    dispatch(addProduct(data))
  }

  return (
    <div>
      <div className="flex flex-row gap-[64px] items-start">
        <div className="flex flex-col gap-[16px] items-start">
          <div className="w-[632px] h-[632px] object-cover">
            <img src={productDetail?.productImg[0]} alt="" />
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={productDetail?.productImg[1]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={productDetail?.productImg[2]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={productDetail?.productImg[3]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={productDetail?.productImg[4]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] items-start">
          <div className="flex flex-col gap-[40px] items-start">
            <div className="flex flex-col gap-[16px] items-start">
              <div className="text-black text-[24px] font-[700] w-[632px] text-left">
                {productDetail?.productName}
              </div>
              <div className="text-[#545454] text-[18px] font-[500] w-[500px] text-left">
                Only 55 Item Left!
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-start border-[#E9EAE9] border-b border-solid pb-[24px]">
              <div className="flex flex-row gap-[16px] items-center">
                <div className="text-[30px] font-[500] text-[#000000] text-left w-full">
                  {productDetail?.currentPrice}$
                </div>
                <div className="text-[20px] font-[500] text-[#545454] text-left w-full line-through">
                  {productDetail?.oldPrice}$
                </div>
              </div>
              <div className="flex flex-row gap-[32px] items-center">
                <div className="text-[18px] text-[500] text-[#6E706E]">
                  Quantity
                </div>
                <HandleQuantityProduct quanlity={quanlity} setQuanlity={setQuanlity} />
              </div>
              <div className="flex flex-row items-center gap-[32px]">
                <div className="Btn_primary">Buy Now</div>
                <div className="Btn_secondary" onClick={handleAddProduct}>Add To Cart</div>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <LikeHandle />
                <div className="Share">
                  <div>Share</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start pb-[24px] border-solid border-b border-[#E9EAE9] w-[632px]">
            <div className=" text-[18px] font-[500px] text-[#6E706E]">
              #Treatment #Serum #Costic{" "}
            </div>
            <div className="flex flex-row gap-[16px] items-end">
              <div className="text-[18px] font-[500px] text-[#6E706E]">Unit:</div>
              <div className="text-[18px] text-center font-[500px] text-[#101110]">
                1 Piece
              </div>
            </div>
            <div className="flex flex-row gap-[16px] items-end">
              <div className="text-[18px] font-[500px] text-[#6E706E]">SKU:</div>
              <div className="text-[18px] text-center font-[500px] text-[#101110]">
                SRW12-1
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-[16px] w-full items-start">
            <div className="flex px-[24px] py-[4px] justify-center gap-[16px] rounded-[40px] border-[#545454] border-[1px] bg-[#F6F6F6] border-solid items-center">
              <IconEstimateship />
              <div className="flex flex-col items-start gap-[0px]">
                <div className="text-center font-[500] text-[18px] text-[#101110]">Estimated Delivery</div>
                <div className="text-[18px] font-[400] text-center text-[#6E706E]">With 4 days</div>
              </div>
            </div>
            <div className="flex px-[24px] py-[4px] justify-center gap-[16px] rounded-[40px] border-[#545454] border-[1px] bg-[#F6F6F6] border-solid items-center">
              <IconFreeship />
              <div className="flex flex-col items-start gap-[0px]">
                <div className="text-center font-[500] text-[18px] text-[#101110]">Free Shipping</div>
                <div className="text-[18px] font-[400] text-center text-[#6E706E]">Order over 100$</div>
              </div>
            </div>
            <div className="flex px-[24px] py-[4px] justify-center gap-[16px] rounded-[40px] border-[#545454] border-[1px] bg-[#F6F6F6] border-solid items-center">
              <IconReturn />
              <div className="flex flex-col items-start gap-[0px]">
                <div className="text-center font-[500] text-[18px] text-[#101110]">7 Days Return</div>
                <div className="text-[18px] font-[400] text-center text-[#6E706E]">With 4 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-row gap-[opx]">
          <p className="text-[20px] font-medium text-center leading-[28px] py-[16px] w-full">Description</p>
          <p className="text-[20px] font-medium text-center leading-[28px] py-[16px] w-full">Review</p>
          <p className="text-[20px] font-medium text-center leading-[28px] py-[16px] w-full">Ship & Return</p>
        </div>
        <div>
          1
        </div>
      </div>
    </div>

  );
};

export default ProductDetail;
