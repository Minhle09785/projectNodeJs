import { Badge, Descriptions, Button } from "antd";
import { AiOutlineDelete, AiOutlineApartment } from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { END_POINT } from "../../../utils/constant";
import { MainContext } from "../../../context/MainContext";
import React from "react";
import axios from "axios";
import SplitProduct from "./SplitProduct";
function DetailOrder({ onClose, refetchData, data }) {
  const [dataEdit, setDataEdit] = useState(data);
  const [dataProductSplited, setDataProductSplited] = useState([]);
  const [productId, setProductId] = useState("");
  const [isSplitVisible, setIsSplitVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { accessToken } = useContext(MainContext);
  const [isSplited, setSplited] = useState(false);
  const fetchDataProductSplited = async (productId) => {
    setLoading(true);
    try {
      const result = await axios({
        url: `${END_POINT}/admin/product/${productId}`,
        method: "get",
        headers: { authorization: `Bearer ${accessToken}` },
      });
      console.log(result);
      if (result.status === 200) {
        setDataProductSplited(result.data.data.product_shipments);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const acceptSplitProduct = async (data) => {
    const data1 = data.quantity;
    const data2 = data1.split(",");
    console.log(data2);
    const arrOfNum = data2.map((str) => {
      return Number(str);
    });
    console.log(Array.isArray(arrOfNum));
    const data3 = {
      quantity: arrOfNum,
    };
    try {
      const result = await axios({
        url: `${END_POINT}/admin/product-shipment/product/${productId}`,
        method: "post",
        data: data3,
        headers: { authorization: `Bearer ${accessToken}` },
      });
      console.log(result);
      if (result.status === 200) {
        alert("Tách sản phẩm thành công");
        setLoading(false);
        setIsSplitVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Descriptions
        title="Thông tin chi tiết đơn hàng"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Mã đơn hàng" span={3}>
          {data.orderId}
        </Descriptions.Item>
        <Descriptions.Item label="Loại dịch vụ" span={3}>
          {data.service.name}
        </Descriptions.Item>
        <Descriptions.Item label="Thời gian tạo đơn" span={3}>
          {data.createdAt}
        </Descriptions.Item>
        <Descriptions.Item label="Tên khách hàng">
          {data.customer.name}
        </Descriptions.Item>
        <Descriptions.Item label="Loại khách hàng" span={2}>
          {data.customer.customer_type}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái" span={3}>
          <Badge status="processing" text={data.status} />
        </Descriptions.Item>
        <Descriptions.Item label="Người gửi">
          {data.sender.name}
        </Descriptions.Item>
        <Descriptions.Item label="số điện thoại người gửi" span={2}>
          {data.sender.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Người nhận">
          {data.receiver.name}
        </Descriptions.Item>
        <Descriptions.Item label="số điện thoại người nhận" span={2}>
          {data.receiver.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Xuất phát">
          {data.origin.address.province}
        </Descriptions.Item>
        <Descriptions.Item label="Điểm đến" span={2}>
          {data.destination.address.province}
        </Descriptions.Item>
        <Descriptions.Item label="Sản phẩm" span={3}>
          {data.products.map((pro) => (
            <div>
              <button
                className="flex items-baseline gap-x-1 hover:text-yellow-600 float-right"
                onClick={() => {
                  setProductId(pro._id);
                  setIsSplitVisible(true);
                }}
              >
                <AiOutlineApartment className="translate-y-[1px]" />
                Tách sản phẩm
              </button>
              Tên sản phẩm : {pro.name}
              <br />
              Số lượng: {pro.quantity}
              <br />
              Trạng thái: {pro.status}
              <br />
              Đơn vị: {pro.unit}
              <button
                className="flex items-baseline gap-x-1 hover:text-yellow-600 float-right"
                onClick={() => {
                  console.log(productId);
                  fetchDataProductSplited(pro._id);
                  setSplited(!isSplited);
                }}
              >
                <AiOutlineApartment className="translate-y-[1px]" />
                Xem sản phẩm đã tách
              </button>
              <br />
              <hr />
            </div>
          ))}
        </Descriptions.Item>
        {isSplited && (
          <Descriptions.Item label="Sản phẩm đã tách">
            {dataProductSplited.map((pro) => (
              <>
                Số lượng: {pro.quantity}
                <br />
                Giá trị: {pro.value}
                <br />
                <hr />
              </>
            ))}
          </Descriptions.Item>
        )}
      </Descriptions>
      <Button
        size="large"
        className={
          "hover:bg-red-500 hover:border-red-700 hover:text-white border-none float-right"
        }
        onClick={onClose}
      >
        x
      </Button>

      {isSplitVisible && (
        <SplitProduct
          isVisible={isSplitVisible}
          loading={loading}
          onClick={acceptSplitProduct}
          onClose={() => setIsSplitVisible(false)}
        />
      )}
    </>
  );
}
export default DetailOrder;
