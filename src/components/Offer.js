import TimelapseOutlined from '@material-ui/icons/TimelapseOutlined'
import React  from 'react'
import Card from './Card'

function Offer() {
   
    return (
        <>
            <h4 className="section_heading">
                Offers for You <TimelapseOutlined />
            </h4>
            <div className="header_cards">
                <Card
                heading="Pickup or delivery"
                pic="//i5.walmartimages.com/dfw/4ff9c6c9-182b/k2-_9c66a916-9209-4d38-9ca8-66a02f3c7f87.v1.jpg?odnWidth=320&amp;odnHeight=140&amp;odnBg=ffffff"
                summary="Groceries & even more"
                subtext="1919 Davis St , San Leandro"
                btntxt="Place Order"
                />
                <Card
                heading="New Walmart+ benefit"
                pic="https://i5.walmartimages.com/dfw/4ff9c6c9-3170/k2-_7c012544-6e3d-4e4d-a9d7-148bd7eae274.v1.jpg?odnWidth=320&odnHeight=140&odnBg=ffffff"
                summary="Free shipping, no order min."
                subtext="Restrictions apply."
                btntxt="Try it now"
                />
                <Card
                heading="Earn 5% cash back"
                pic="//i5.walmartimages.com/dfw/4ff9c6c9-ed52/k2-_2546fd70-9efa-4512-8ea1-c1a88fba2a82.v1.jpg?odnWidth=320&amp;odnHeight=140&amp;odnBg=ffffff"
                summary="Earn 5% cash back"
                subtext="every day on Walmart.com"
                btntxt="Learn how"
                />
            </div>
    </>
    )
}

export default Offer
