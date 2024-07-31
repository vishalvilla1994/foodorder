
import React, { useState, useEffect } from 'react';

const restaurantList = [
    {
        "info": {
            "id": "514901",
            "name": "Wow! Momo",
            "cloudinaryImageId": "5a148e63e9c54942e37627da1aa156be",
            "locality": "Bank Road",
            "areaName": "Dhanbad",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "1776",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 23:59:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-bank-road-dhanbad-dhanbad-514901",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "626835",
            "name": "Chicago Pizza",
            "cloudinaryImageId": "saofkilqxzdifx9vig07",
            "locality": "Chanakya Nagar",
            "areaName": "Dhanbad",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "60277",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 23:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chicago-pizza-chanakya-nagar-dhanbad-dhanbad-626835",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "93070",
            "name": "Apple Restaurant",
            "cloudinaryImageId": "q3ninryemhdwba8eam8a",
            "locality": "Sardar Patel Nagar",
            "areaName": "Kasturba Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Indian",
                "Chinese",
                "Tandoor",
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "35154",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 22:30:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/apple-restaurant-sardar-patel-nagar-kasturba-nagar-dhanbad-93070",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "300308",
            "name": "Kaveri's Restaurant",
            "cloudinaryImageId": "hawe8breczghxnwwwmwa",
            "locality": "Bank More",
            "areaName": "Dhanbad Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Chinese",
                "Kebabs",
                "Indian"
            ],
            "avgRating": 4.2,
            "parentId": "115850",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 22:45:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kaveris-restaurant-bank-more-dhanbad-locality-dhanbad-300308",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "297008",
            "name": "New Bombay Sweets",
            "cloudinaryImageId": "dyafvn9xxlcn0ev3vsgu",
            "locality": "City Centre Mall",
            "areaName": "Jharudih",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Sweets",
                "Chaat",
                "Snacks",
                "Bakery",
                "South Indian",
                "Chinese"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "146072",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/new-bombay-sweets-city-centre-mall-jharudih-dhanbad-297008",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "124807",
            "name": "Choudhary Sweets",
            "cloudinaryImageId": "nhi52fucxerx7o5t2dug",
            "locality": "Katras Road",
            "areaName": "Bank More",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Sweets",
                "Chaat",
                "Chinese"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "5404",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/choudhary-sweets-katras-road-bank-more-dhanbad-124807",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "106880",
            "name": "Madhur sweets",
            "cloudinaryImageId": "nutjjife1e1t55k15exz",
            "locality": "Saraidhella Road",
            "areaName": "Cmpf Colony",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Sweets",
                "Snacks"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "1538",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/madhur-sweets-saraidhella-road-cmpf-colony-dhanbad-106880",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "305694",
            "name": "Burger Buddy",
            "cloudinaryImageId": "krgpmcztrxc5of7yzo14",
            "locality": "Luby Circular Road",
            "areaName": "Sardar Patel Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Chinese",
                "Street Food",
                "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "51230",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 22:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-buddy-luby-circular-road-sardar-patel-nagar-dhanbad-305694",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "826057",
            "name": "Shakey Wakey",
            "cloudinaryImageId": "e05ab92a44456d40424c25bc6f19377b",
            "locality": "Housing Colony Road",
            "areaName": "Sardar Patel Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Desserts",
                "Beverages",
                "Ice Cream",
                "Grill",
                "Snacks",
                "Healthy Food",
                "Waffle",
                "Burgers",
                "Cafe"
            ],
            "avgRating": "3.8",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-02 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-64281c6e-fa7a-48fc-adde-8ddc1f838c27"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shakey-wakey-housing-colony-road-sardar-patel-nagar-dhanbad-826057",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

// function Restaurant() {
//     return (
//         <div>
            
//             <div className="restInfo">
//             <ul className="restList">
//                 {restaurantList.map((restaurant) => (
//                     <li className="restSetting">
//                         <h2>{restaurant.info.name}</h2>
//                         <p>Cost for Two: {restaurant.info.costForTwo}</p>
//                         <p>Cuisines: {restaurant.info.cuisines.join(', ')}</p>
//                         <p>Average Rating: {restaurant.info.avgRating}</p>
//                         <p>Total Ratings: {restaurant.info.totalRatingsString}</p>
//                         <p>Delivery Time: {restaurant.info.sla.deliveryTime} mins</p>
//                     </li>
//                 ))}
//             </ul>
//             </div>
            
//         </div>
//     );
// }





const SearchDetails = () => {
    const [searchInput, setSearchInput] = useState('');
    const [restaurantLists, setRestaurantLists] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        setRestaurantLists(restaurantList);
        setFilteredRestaurants(restaurantList);
    }, []);

    const handleSearch = () => {
        const filtered = restaurantLists.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };
    const refreshData = () => {
        setFilteredRestaurants(restaurantLists);
        setSearchInput('');
    };

    return (
        <div dataPart>
            <h1>Restaurant List</h1>
            <input className="inputSearch" type="text" placeholder="Search by name"value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}/>

            <button onClick={handleSearch} className='searchButton'>Search</button>

            <button className="searchRefreshButton" onClick={refreshData}>Refresh All</button>

            <div>
            <ul className="restList">
                {filteredRestaurants.map((restaurant) => (
                    <div>
                        <li className="restSetting">
                                <h2>{restaurant.info.name}</h2>
                                <p>{restaurant.info.locality}</p>
                                <p>{restaurant.info.areaName}</p>
                                <p>{restaurant.info.costForTwo}</p>
                                <p>Cuisines: {restaurant.info.cuisines}</p>
                                <p>{restaurant.info.avgRatingString}</p>
                                <p>Total Ratings: {restaurant.info.totalRatingsString}</p>
                                <p>Delivery Time: {restaurant.info.sla.deliveryTime} mins</p>
                        </li>
                    </div>
                ))}
            </ul>    
            </div>
        </div>
    );
};

export default SearchDetails;

