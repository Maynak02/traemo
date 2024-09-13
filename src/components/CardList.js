import Link from "next/link";
import PropTypes from "prop-types";

const CardList = ({
  imageUrl,
  finalPrice,
  productName,
  quantity,
  productid,
}) => {
  return (
    <>
      <div className="flex-1 shadow-[0px_3px_6px_rgba(148,_163,_184,_0.3)] rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border relative gap-6 min-w-[261px] max-w-[266px] text-left text-lg text-primary-600 font-text-sm-medium">
        <Link href={`/customer/productdetail/${productid}`}>
          <img
            className="w-[266px] h-[266px] relative object-cover"
            src={imageUrl}
          />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 mt-6">
            <div className="self-stretch flex flex-col items-start justify-center gap-1">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-[111px] gap-3">
                <div className="self-stretch flex flex-row items-center justify-start gap-3">
                  <div className="flex-1 rounded-lg bg-gray-25 border-gray-300 border-[0.5px] border-solid flex flex-row items-center justify-start py-[3px] px-[7px] gap-1">
                    <div className="relative font-semibold inline-block min-w-[40px] text-theme">
                      {finalPrice}
                    </div>
                    <div className="relative text-5xs inline-block min-w-[17px] text-theme">
                      CHF
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-0.5 text-xs text-gray-500">
                    <div className="relative [text-decoration:line-through] font-semibold inline-block min-w-[27px]">
                      3.50
                    </div>
                    <div className="relative text-7xs inline-block min-w-[13px]">
                      CHF
                    </div>
                  </div>
                </div>
                <div className="relative text-base leading-[20px] font-semibold text-black inline-block min-w-[109px]">
                  {productName}
                </div>
              </div>
              <div className="self-stretch relative text-xs text-gray-500">
                {quantity}
              </div>
            </div>
          </div>
        </Link>
        <button
          className="w-[52px] !m-[0] absolute top-[214px] left-[202px] shadow-[0px_4px_8px_-2px_rgba(16,_24,_40,_0.1),_0px_2px_4px_-2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-white border-gray-300 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-3.5 px-[15px] z-[1]"
          onClick={() => {
            console.log("Add to Cart");
          }}
        >
          <img
            className="h-5 w-5 relative"
            loading="lazy"
            alt=""
            src="/addcard.svg"
          />
        </button>
      </div>
    </>
  );
};

CardList.propTypes = {
  imageUrl: PropTypes.string,
  finalPrice: PropTypes.string,
  productName: PropTypes.string,
  quantity: PropTypes.string,
  productid: PropTypes.string,
};

export default CardList;
