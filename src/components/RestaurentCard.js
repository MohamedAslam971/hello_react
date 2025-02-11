import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      resData?.info;
    const { deliveryTime } = resData.info.sla;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="pic"
          alt="pizza_pic"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>₹{costForTwo.replace(/\D/g, "")}minutes</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
  export default RestaurentCard;