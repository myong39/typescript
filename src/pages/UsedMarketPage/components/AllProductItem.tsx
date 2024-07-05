import React from "react";
import favoriteImg from "../../../assets/images/icons/ic_heart.svg";
import { getCommasToNumber } from "../../../utils/Utils";
import { Item } from "../../../types/types";

function AllProductItem({ item }: { item: Item }) {
  const bestPrice = getCommasToNumber(item.price);

  return (
    <li className="list all-list" key={item.id}>
      <img className="item-image all-item" src={item.images} alt={item.name} />
      <div className="item-content">
        <span id="item-name">{item.name}</span>
        <span id="item-price">{bestPrice}원</span>
        <div className="favorite-area">
          <img id="favorite-image" src={favoriteImg} alt="좋아요 이미지" />
          <div id="item-favorite">{item.favoriteCount}</div>
        </div>
      </div>
    </li>
  );
}

export default AllProductItem;
