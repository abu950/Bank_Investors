import { useSelector } from "react-redux"

export const InvestorAddEdit = () => {
    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)

    return (<>
        <div className="in_flex">
            <span className="aply">{`${investorStatusUpdate.update ? 'Edit' : "ADD"} Investor`}</span>
        </div>
    </>)
}