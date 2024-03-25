import { useSelector } from "react-redux";
import { Button } from "../styledBlock/CommonStyles";

export const InvestorDetails = () => {
    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)
    const investorList = useSelector((state) => state.investorList)
    return (<>
        <div className="in_flex">
            <div>
                <div className="img_gp">
                    <img src={investorList[investorStatusUpdate.Id][0].value.image} className="in_icon_det" alt="investor" />
                    <span>{investorList[investorStatusUpdate.Id][1].value}</span>
                </div>
                <div className="btn_crt sts_sprt">
                    <Button>CREATE LOG</Button>
                    <Button>SHARE SUPPORT</Button>
                </div>
            </div>
        </div>
        <div className="three_head">
            <div className="btn_crt sts_sprt three_btn">
                <Button>PORTFOLIO</Button>
                <Button>LOG</Button>
                <Button>INVESTORDETAILS</Button>
            </div>
        </div>
    </>)
}