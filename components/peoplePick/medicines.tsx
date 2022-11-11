import moduleStyle from "../../pages/peoplePick/peoplePick.module.css";
import Image from "next/image";

const Medicines = ({ data }: { data: any }) => {
  return (
    <>
      {data?.map((v: any, i: any) => {
        return (
          <div className={moduleStyle.details} key={i}>
            <div className={moduleStyle.detailsMain}>
              <div className={moduleStyle.detailsLeft}>
                <div className={moduleStyle.detailsRank}>
                  <span className={moduleStyle.rankText}>1</span>
                </div>

                <div className={moduleStyle.detailsImage}>
                  <Image
                    src={`${v.Image.url}`}
                    alt=""
                    width={`93px`}
                    height={`93px`}
                    unoptimized={true}
                  ></Image>
                </div>
              </div>
              <div className={moduleStyle.detailsRight}>
                <div className={moduleStyle.detailsTitle}>{v.name}</div>
                <div className={moduleStyle.detailsSubTitle}>
                  <div className={moduleStyle.detailsCompany}>
                    ㈜한풍네이처팜
                  </div>
                  <div className={moduleStyle.detailsCounts}>60일분</div>
                </div>
              </div>
            </div>
            <div className={moduleStyle.detailsSub}>
              {v.MerchandiseEffect.map((value: any, index: any) => {
                return (
                  <div className={moduleStyle.detailsHashtag} key={index}>
                    {value.effect.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Medicines;
