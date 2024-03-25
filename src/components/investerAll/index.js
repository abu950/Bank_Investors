
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Card from "../common/Card";
import { Button } from "../styledBlock/CommonStyles";




const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
`;


export const AllInvestors = () => {
    const investorList = useSelector((state) => state.investorList)

    const dispatch = useDispatch();

    let totalList = []

    investorList.map((item) => {
        let empty = {}
        item.map((data) => {
            empty[data.label] = data.value
        })
        totalList.push(empty)
    })
    console.log('totalList', totalList)

    const viewDetails = (index) => {
        dispatch({ type: "STATUS", payload: { details: true, Id: index } })
    }

    return (<>
        <div className="crd_hed">
            {totalList.length ? totalList.map((item, index) =>
                <Card
                    isFlex
                    flexDirection="column"
                    // justifyContent="center"
                    // alignItems="center"
                    background="#EEEEEE"
                    width="450px"
                    border="1px solid #EEEEEE"
                    borderRadius=".5rem"
                    ccolor="rgba(255, 255, 255, .89)"
                    padding="1rem"
                    flexStyles={flexStyles}
                >

                    <div className="det_hed">
                        <div className="ist_pr_head">
                            <div>
                                <img src={item['Investor Profile Photo']?.image} className="in_icn" alt="investor" />
                                <div>
                                    <span>{item['Investor Name']}</span>
                                    <p>{item['Investor Email Address']}</p>
                                </div>
                            </div>
                            <div className="active">
                                <span>Active</span>
                            </div>
                        </div>
                        <div className="ist_pay">
                            <div>
                                <p>${item['Investments']}</p>
                                <p>INVESTMENTS</p>
                            </div>
                            <div>
                                <p>{item['Deals']}</p>
                                <p>DEALS</p>
                            </div>
                            <div>
                                <p>{item['Investor Type']}</p>
                                <p>TYPE</p>
                            </div>
                        </div>
                        <div className="btn_crt">
                            <Button onClick={() => {
                                dispatch({ type: "STATUS", payload: { update: true, Id: index } })
                            }}>EDTI INVESTOR</Button>
                            <Button onClick={() => {
                                viewDetails(index)
                            }}>VIEW DETAILS</Button>
                        </div>
                    </div>

                </Card >
            ) : <>No Investor Found</>}
        </div>
    </>)
}