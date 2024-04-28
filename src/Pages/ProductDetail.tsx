import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import HandleQuantityProduct from "../components/Event/HandleQuantityProduct";
import IconEstimateship from "../utils/icon/FeartureSupport/iconEstimateship";
import IconFreeship from "../utils/icon/FeartureSupport/iconFreeship";
import IconReturn from "../utils/icon/iconReturn";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addProduct, setComment, setCredential, setFavourite, setListProduct } from "../redux/rootSlice";
import { useEffect, useState } from "react";
import IconHeart from "../utils/icon/iconHeart";
import Tabs from "../components/Tabs/Tabs";
import TabsHeader from "../components/Tabs/TabHeader";
import TabsBody from "../components/Tabs/TabBody";
import TabItem from "../components/Tabs/TabItem";
import Rating from "../components/Rating/Rating";
import { ListCardProduct } from "../utils/data/ListCardProduct";
import IconShare from "../utils/icon/iconShare";
import CardProductSItem from "../components/CardProductS/CardProductS";

const listHeader = [
  {
    id: 1,
    title: "Description"
  },
  {
    id: 2,
    title: "Review"
  },
  {
    id: 3,
    title: "Ship & Return"
  }
]

const ingredients = [
  "AQUA/WATER",
  "GLYCERIN",
  "ISOHEXADECANE",
  "DIMETHICONE",
  "ISOPROPYL ISOSTEARATE",
  "ALUMINUM STARCH OCTENYLSUCCINATE",
  "PROPYLENE GLYCOL",
  "NYLON-12",
  "OCTYLDODECANOL",
  "CETYL ALCOHOL",
  "BEHENYL ALCOHOL",
  "AMMONIUM",
  "POLYACRYLOYLDIMETHYL TAURATE"
]

const ProductDetail = () => {
  const [quanlity, setQuanlity] = useState(1);
  const [isLike, setIsLike] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState<any>();
  const [dataRelated, setDataRelated] = useState([]);
  const location = useLocation()

  const dispatch = useAppDispatch();
  const params = useParams();
  const { id } = params;

  //Find product theo id;
  const favouriteList = useAppSelector(state => state.root.listFavourite)
  const isLogin = useAppSelector(state => state.root.isLogin)
  const dataProduct = useAppSelector(state => state.root.dataProduct)

  const handleAddProduct = () => {
    const datas = {
      ...data,
      quanlity: quanlity,
    }
    dispatch(addProduct({ id: data?.id, data: datas }))
  }

  const handleLike = () => {
    setIsLike(!isLike);
    if (!isLike) {
      dispatch(setFavourite({ data, isLike: true }))
    } else {
      dispatch(setFavourite({ data, isLike: false }))
    }
  };

  const handleChangeTabIndex = (id: number) => {
    setTabIndex(id)
  }

  const handleChange = (value: string) => {
    setInputValue(value);
  }

  const handleSendComment = () => {
    const comment = {
      id: data?.comment?.length + 1,
      userId: `nguyencaonam-${data?.comment?.length + 1}`,
      username: "nguyencaonam",
      postedAt: "12/03/2024",
      star: 4,
      content: inputValue,
      img: "https://www.christophmannhardt.com/wp-content/uploads/2017/01/Christoph-Mannhardt-Portrait-Schauspieler-Raul-Richter-01.jpg",
    }
    dispatch(setComment({ id: data?.id, data: comment }));
    setInputValue('');
  }
  // useEffect(() => {
  //   dispatch(setListProduct(ListCardProduct))
  //   dispatch(setCredential({
  //     username: "nguyencaonam",
  //     password: "nguyencaonam"
  //   }))
  // }, [])

  useEffect(() => {
    if (favouriteList && data) {
      const result = favouriteList?.find(item => item?.id === data?.id)
      result ? setIsLike(true) : setIsLike(false)
    }
  }, [favouriteList, data])

  useEffect(() => {
    if (dataProduct) {
      const productDetail = dataProduct.find((itemCard: any) => itemCard.id === Number(id));
      setData(productDetail)
      const relatedDataFilter = dataProduct?.filter((item: any) => item?.categoryId === productDetail?.categoryId && item?.id !== productDetail?.id);
      const result = relatedDataFilter?.slice(0, 4)
      setDataRelated(result)
    }
  }, [dataProduct])

  return (
    <div>
      <div className="flex flex-row gap-[64px] items-start">
        <div className="flex flex-col gap-[16px] items-start">
          <div className="w-[632px] h-[632px]">
            <img src={data?.productImg[0]} alt="" className="w-[632px] h-[632px] object-contain overflow-hidden" />
          </div>
          <div className="flex flex-row gap-[16px] items-center">
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={data?.productImg[1]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={data?.productImg[2]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={data?.productImg[3]}
                alt=""
                className="h-full w-auto object-contain overflow-hidden"
              />
            </div>
            <div className="h-[146px] w-[146px] object-contain">
              <img
                src={data?.productImg[4]}
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
                {data?.productName}
              </div>
              <div className="text-[#545454] text-[18px] font-[500] w-[500px] text-left">
                Only 55 Item Left!
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-start border-[#E9EAE9] border-b border-solid pb-[24px]">
              <div className="flex flex-row gap-[16px] items-center">
                <div className="text-[30px] font-[500] text-[#000000] text-left w-full">
                  {data?.currentPrice}$
                </div>
                <div className="text-[20px] font-[500] text-[#545454] text-left w-full line-through">
                  {data?.oldPrice}$
                </div>
              </div>
              <div className="flex flex-row gap-[32px] items-center">
                <div className="text-[18px] text-[500] text-[#6E706E]">
                  Quantity
                </div>
                <HandleQuantityProduct quanlity={quanlity} setQuanlity={setQuanlity} />
              </div>
              <div className="flex flex-row items-center gap-[32px]">
                <div className="Btn_primary cursor-pointer text-center">Buy Now</div>
                <div className="Btn_secondary cursor-pointer text-center" onClick={handleAddProduct}>Add To Cart</div>
              </div>
              <div className="flex flex-row gap-[8px] items-center">
                <div onClick={handleLike} className={`h-[40px] w-[40px] cursor-pointer flex flex-col items-center justify-center rounded-full border-solid border-[#6E706E] border-[1px] ${isLike ? "bg-black" : "bg-white"}`}>
                  {isLike ? <IconHeart height={18} width={19.62} color='#FFFFFF' /> : <IconHeart height={18} width={19.62} color='#000000' />}
                </div>
                <div className="h-[40px] w-[40px] cursor-pointer flex flex-col items-center justify-center rounded-full border-solid border-[#6E706E] border-[1px]">
                  <IconShare />
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
      <Tabs className="mt-7">
        <TabsHeader className="flex flex-row justify-between items-center border-b-2 border-[#E9EAE9]">
          {listHeader.map(item => (
            <div key={item.id} className={`flex-1 cursor-pointer py-3 px-2 ${item.id === tabIndex ? 'bg-[#E9EAE9] border-b-2 border-black -mb-[2px]' : ''}`} onClick={() => handleChangeTabIndex(item.id)}>
              <p className="text-base font-medium text-center">{item.title}</p>
            </div>
          ))}
        </TabsHeader>
        <TabsBody className="mt-4">
          <TabItem className={`${tabIndex === 1 ? 'block' : 'hidden'}`}>
            <div>
              <p className="text-xl font-medium">Description</p>
              <p>{data?.description}</p>
            </div>
            <div className="mt-2">
              <p className="text-xl font-medium">Ingredients</p>
              <div>
                {ingredients?.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </TabItem>
          <TabItem className={`${tabIndex === 2 ? 'block' : 'hidden'}`}>
            <div className="pb-3 border-b border-[#545454]">
              {data?.comment.map((item: any) => (
                <div key={item?.userId} className="flex flex-row gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={item?.img} alt={`image-${item?.id}`} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex flex-row justify-between items-center">
                      <div>
                        <p className="text-xl font-medium">{item?.username}</p>
                        <Rating rating={item?.star} />
                      </div>
                      <p className="">{item?.postedAt}</p>
                    </div>
                    <p className="">{item?.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xl font-medium">Leave a review</p>
              <div className="flex flex-row gap-1">
                <Rating rating={5} />
              </div>
              <textarea
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Type your comment" className="mt-2 resize-none h-28 rounded-md p-2 w-full border !border-[#E9EAE9]" />
              <div className="text-center mt-2">
                {
                  !isLogin ? <Link to={"/login"} state={{ prevUrl: location.pathname }}>
                    <button disabled={inputValue ? false : true} className={`${inputValue ? '' : 'bg-[#464646]'} cursor-pointer Btn_primary `}>
                      Send
                    </button>
                  </Link> : <button onClick={handleSendComment} disabled={inputValue ? false : true} className={`${inputValue ? '' : 'bg-[#464646]'} cursor-pointer Btn_primary `}>
                    Send
                  </button>
                }
              </div>
            </div>
          </TabItem>
          <TabItem className={`${tabIndex === 3 ? 'block' : 'hidden'}`}>
            <p className="text-xl font-medium">Ship & Return</p>
            <p>{data?.shipAndReturn}</p>
          </TabItem>
        </TabsBody>
      </Tabs>

      <div className="flex flex-col w-full items-center gap-[40px]">
        <div className="mt-4 text-[24px] w-full font-bold heading-auto py-[12px] border-solid border-b-[1px] border-black text-left">
          RELATED PRODUCTS
        </div>
        <div className="flex flex-wrap gap-[24px] w-[1328px]">
          {dataRelated.length > 0 && dataRelated?.map((itemProduct: any) => (
            <CardProductSItem key={itemProduct?.id} itemCard={itemProduct} />
          ))}
        </div>
        <Link to={"/shop"} className="Btn_secondary text-center">More</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
