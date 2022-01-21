import { Link } from "react-router-dom";

const AccountLeft = () => {
  const user = JSON.parse(localStorage.getItem('USER'));
  return (
    <div className="card account-left">
      <div className="user-profile-header">
        <img alt="logo" src={user !== null ? user.image: "/image/user/1.png"} />
        <h5 className="mb-1 text-secondary">
          <strong></strong> {user.name}
        </h5>
        <p>@{user.username}</p>
      </div>
      <div className="list-group">
        <Link to="/account" className="list-group-item list-group-item-action active">
          <i aria-hidden="true" className="mdi mdi-account-outline"></i> Thông
          Tin Của Tôi
        </Link>
        <Link to="/address" className="list-group-item list-group-item-action">
          <i aria-hidden="true" className="mdi mdi-map-marker-circle"></i> Địa
          Chỉ
        </Link>
        <Link
          to="/wishlist"
          className="list-group-item list-group-item-action"
        >
          <i aria-hidden="true" className="mdi mdi-heart-outline"></i> Mục Yêu
          Thích
        </Link>
        <Link
          to="/orderlist"
          className="list-group-item list-group-item-action"
        >
          <i aria-hidden="true" className="mdi mdi-format-list-bulleted"></i>{" "}
          Lịch Sử Đặt Hàng
        </Link>
        <a href="#" className="list-group-item list-group-item-action">
          <i aria-hidden="true" className="mdi mdi-lock"></i> Đăng Xuất
        </a>
      </div>
    </div>
  );
};

export default AccountLeft;
