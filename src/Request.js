

const requests = {
 fetchElectronicProducts: `/products?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&term=electronics&perPage=6&brandId=JBL&onlyMaProducts=false`, 
 fetchFitnessProducts: `/products?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&term=shoe&perPage=6&brandId=adidas&onlyMaProducts=false`,
 fetchHealthProducts: `/products?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&term=Health%20%26%20Nutrition&perPage=6&onlyMaProducts=false`,
 fetchCategories:`/categories?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&onlyMaProducts=true`
}


export default requests

//https://api2.shop.com/AffiliatePublisherNetwork/v2/products?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&term=books&perPage=6&onlyMaProducts=false
