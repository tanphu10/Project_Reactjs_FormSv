import React, { useEffect } from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useFormik, Form } from "formik";
import { connect, useSelector } from "react-redux";
import * as yup from "yup";
const ProductReact = (props) => {
  // const { item } = useSelector((state) => {
  //   state.item;
  // });
  const formik = useFormik({
    initialValues: {
      maSoSv: "",
      hoTenSv: "",
      emailSv: "",
      soDienThoaiSv: "",
    },
    onSubmit: (values) => {
      props.addToArr(values);
      formik.resetForm();
      props.updateItem(values);
    },
    validationSchema: yup.object({
      maSoSv: yup
        .string()
        .min(1, "Must be 1 number")
        .max(2, "Must be 1 number")
        .required(),
      hoTenSv: yup.string().required("You must input"),
      emailSv: yup
        .string()
        .email("Invalid email addresss")
        .required("you have to correct input "),
      // soDienThoaiSv: yup
      //   .string()
      //   .min(10, "Must be 10 number")
      //   .max(11, "Must be 10 number")
      //   .required(),
    }),
  });
  // console.log(formik.onSubmit());
  // console.log(formik);
  const { handleChange, handleSubmit } = formik;
  useEffect(() => {
    if (props.newStudent) {
      formik.setValues(props.newStudent);
    }
  }, [props.newStudent]);
  // console.log(props);
  const updateStudent = () => {
    props.updateItem(formik.values);
    // props.sinhVienItem.map((item, index) => {
    //   const student = props.updateItem(item);
    //   if (student) {
    //     return item.maSoSv;
    //   }
    // });

    //   // console.log(id);
    //   // formik.resetForm();s
  };

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
              value={formik.values.maSoSv}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Mã số Sinh Viên"
            />
            {formik.errors.maSoSv && formik.touched.maSoSv ? (
              <p className="text-red-600">{formik.errors.maSoSv}</p>
            ) : (
              ""
            )}
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
              value={formik.values.hoTenSv}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Họ tên sinh viên"
            />
            {formik.errors.hoTenSv && formik.touched.hoTenSv ? (
              <p className="text-red-600">{formik.errors.hoTenSv}</p>
            ) : (
              ""
            )}
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
              value={formik.values.emailSv}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
            {formik.errors.emailSv && formik.touched.emailSv ? (
              <p className="text-red-600">{formik.errors.emailSv}</p>
            ) : (
              ""
            )}
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
              name="soDienThoaiSv"
              value={formik.values.soDienThoaiSv}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            "
              placeholder="Số Điện Thoại"
            />
            {formik.errors.soDienThoaiSv && formik.touched.soDienThoaiSv ? (
              <p className="text-red-600">{formik.errors.soDienThoaiSv}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="border-t-2 border-red-800">
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-5 "
          >
            Thêm Sinh Viên
          </button>
          <button
            type="button"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-3"
            onClick={updateStudent}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sinhVienItem: state.sinhVienItem.arrSinhVien,
    newStudent: state.sinhVienItem.student,
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
    updateItem: (item) => {
      const action = {
        type: "UPDATE",
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductReact);
