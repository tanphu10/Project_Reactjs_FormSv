import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { connect } from "react-redux";
const ProductReact = () => {
  const formik = useFormik({
    initialValues: {
      maSoSv: "",
      hoTenSv: "",
      emailSv: "",
      soDienThoaiSv: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.onSubmit());
  // console.log(formik);
  const { handleChange, handleSubmit } = formik;
  console.log(this.props);
  return (
    <div className="max-w-screen-xl mx-auto pt-10 px-10">
      <form className="bg-amber-300 p-5 rounded-xl" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-5">
          <div className=" basis-1/2 mb-6 ">
            <label
              htmlFor="maSo"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mã Số Sinh Viên
            </label>
            <input
              onChange={handleChange}
              type="maSo"
              name="maSoSv"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="ma So Sinh Vien"
            />
          </div>
          <div className=" basis-1/2 mb-6">
            <label
              htmlFor="hoTen"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Họ Tên Sinh Viên
            </label>
            <input
              onChange={handleChange}
              type="hoTen"
              name="hoTenSv"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="họ tên sinh viên"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="basis-1/2 mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="emailSv"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="basis-1/2 mb-6">
            <label
              htmlFor="soDienThoai"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Số Điện Thoại
            </label>
            <input
              onChange={handleChange}
              type="soDienThoai"
              id="soDienThoaiSv"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            "
              placeholder="Số Điện Thoại"
            />
          </div>
        </div>
        <div className="border-t-2 border-red-800">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3"
            onClick={() => {
              this.props.addToArr(values);
            }}
          >
            Thêm Sinh Viên
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sinhVienItem: state.sinhVienItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToArr: (values) => {
      const action = {
        type: "ADDTOARR",
        payload: values,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductReact);
