import { useSelector } from "react-redux"
import { InvestorCreate } from "../components/investerCreate/InvesterCreate"
import { AllInvestors } from "../components/investerAll"



export const Investors = () => {
    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)

    const fetchData = () => {
        if (investorStatusUpdate.create || investorStatusUpdate.update)
            return <InvestorCreate />
        else if (investorStatusUpdate.details)
            return
        else
            return <AllInvestors />
    }

    return (<>
        {fetchData()}
    </>)
}