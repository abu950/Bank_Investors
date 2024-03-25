import { useDispatch, useSelector } from "react-redux"
import { AllInvestor } from "../investorsStatus/AllInvestor"
import { InvestorAddEdit } from "../investorsStatus/InvestorAdd"
import { InvestorDetails } from "../investorsStatus/InvestorDetails"


export const InvestorStatus = (props) => {
    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)

    const dispatch = useDispatch()

    const fetchData = () => {
        if (investorStatusUpdate.create || investorStatusUpdate.update)
            return <InvestorAddEdit />
        else if (investorStatusUpdate.details)
            return <InvestorDetails />
        else
            return <AllInvestor />
    }

    return (<>
        <div className="sts_hed">
            <img src="/assets/back_arrow.png" style={{ opacity: investorStatusUpdate.allDetails ? 0.5 : 1 }} onClick={() => {
                dispatch({ type: 'STATUS', payload: { allDetails: true } })
            }} alt="loading" />
            {fetchData()}
            {/* <AllInvestor /> */}
        </div>
    </>)
}