import React, { useState } from "react";

const products = [
    {
        id: 1,
        name: "Hoa bỉ ngạn",
        image: "/assets/image/products/facebook-dynamic-nuoc-hoa-nu-narciso-rodriguez-for-her-edp-30ml-1711530320_img_385x385_622873_fit_center.jpg",
        price: 10000,
        heightOptions: ["10cm", "20cm", "30cm"],
        selectedHeight: "10cm",
        quantity: 1
    },
    {
        id: 2,
        name: "Hoa lan hồ điệp",
        image: "/assets/image/products/hoalan.jpg",
        price: 15000,
        heightOptions: ["15cm", "25cm", "35cm"],
        selectedHeight: "25cm",
        quantity: 1
    },
    {
        id: 3,
        name: "Cây xương rồng mini",
        image: "/assets/image/products/xuongrong.jpg",
        price: 5000,
        heightOptions: ["5cm", "10cm", "15cm"],
        selectedHeight: "5cm",
        quantity: 2
    },
    {
        id: 4,
        name: "Hoa lan hồ điệp",
        image: "/assets/image/products/hoalan.jpg",
        price: 15000,
        heightOptions: ["15cm", "25cm", "35cm"],
        selectedHeight: "25cm",
        quantity: 1
    },
    {
        id: 5,
        name: "Cây xương rồng mini",
        image: "/assets/image/products/xuongrong.jpg",
        price: 5000,
        heightOptions: ["5cm", "10cm", "15cm"],
        selectedHeight: "5cm",
        quantity: 2
    }
];

export default function Cart() {
    const [cartItems, setCartItems] = useState(products);
    const [checkedItems, setCheckedItems] = useState([]);

    const TinhTien = (index, change) => {
        const updatedItems = [...cartItems];
        let qty = updatedItems[index].quantity + change;
        if (qty < 1) qty = 1;
        updatedItems[index].quantity = qty;
        setCartItems(updatedItems);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString("vi-VN") + " VNĐ";
    };

    const handleCheck = (id) => {
        setCheckedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const totalChecked = cartItems.reduce((total, item) => {
        if (checkedItems.includes(item.id)) {
            return total + item.price * item.quantity;
        }
        return total;
    }, 0);

    return (
        <main className="w-[80%] mx-auto py-8 relative">
            <h3 className="text-3xl font-bold text-center !text-green-900 mb-6">Giỏ hàng của bạn</h3>

            <div className="overflow-x-auto shadow-md rounded border border-gray-200">
                <table className="min-w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-green-900 text-white">
                            <th className="py-2 text-center px-3"></th>
                            <th className="py-2 text-center px-3">STT</th>
                            <th className="py-2 text-center px-3">Ảnh</th>
                            <th className="py-2 text-center px-3">Tên sản phẩm</th>
                            <th className="py-2 text-center px-3">Chiều cao</th>
                            <th className="py-2 text-center px-3">Giá</th>
                            <th className="py-2 text-center px-3">Số lượng</th>
                            <th className="py-2 text-center px-3">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={item.id} className="text-center border-t hover:bg-gray-50 transition">
                                <td className="py-2">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems.includes(item.id)}
                                        onChange={() => handleCheck(item.id)}
                                    />
                                </td>
                                <td className="py-2">{index + 1}</td>
                                <td className="py-2">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto rounded" />
                                </td>
                                <td className="py-2 font-semibold text-green-900">{item.name}</td>
                                <td className="py-2">
                                    <select
                                        value={item.selectedHeight}
                                        onChange={(e) => {
                                            const updated = [...cartItems];
                                            updated[index].selectedHeight = e.target.value;
                                            setCartItems(updated);
                                        }}
                                        className="border rounded px-2 py-1 bg-white"
                                    >
                                        {item.heightOptions.map((height) => (
                                            <option key={height} value={height}>{height}</option>
                                        ))}
                                    </select>
                                </td>
                                <td className="py-2 text-orange-700">{formatCurrency(item.price)}</td>
                                <td className="py-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <button
                                            onClick={() => TinhTien(index, -1)}
                                            className="px-2 py-1 bg-orange-200 hover:bg-orange-300 rounded"
                                        >-</button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            readOnly
                                            className="w-12 text-center border rounded"
                                        />
                                        <button
                                            onClick={() => TinhTien(index, 1)}
                                            className="px-2 py-1 bg-orange-200 hover:bg-orange-300 rounded"
                                        >+</button>
                                    </div>
                                </td>
                                <td className="py-2 text-green-800 font-semibold">
                                    {formatCurrency(item.price * item.quantity)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

             <div className="sticky bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md py-2 px-6 mt-6 flex flex-col md:flex-row items-center justify-between z-50">
                <div className="text-lg font-semibold text-green-800">
                    Tổng tiền ({checkedItems.length} sản phẩm):{" "}
                    <span className="text-orange-600">{formatCurrency(totalChecked)}</span>
                </div>
                <button
                    disabled={checkedItems.length === 0}
                    className={`mt-2 md:mt-0 px-6 py-2 rounded font-semibold text-white transition ${
                        checkedItems.length === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-orange-500 hover:bg-orange-600"
                    }`}
                >
                    Thanh toán
                </button>
            </div>
        </main>
    );
}
