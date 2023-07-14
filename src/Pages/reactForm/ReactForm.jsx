import React from "react";
import ProductReact from "./ProductReact";
// import { connect } from "react-redux";

const ReactForm = () => {
  console.log(this.props);
  return (
    <div>
      <h1 className="text-center  font-bold text-zinc-950  text-2xl">
        Bài Tập ReactForm
      </h1>

      <div className="container mx-auto px-10">
        <ProductReact />
        <div className="max-w-screen-xl mx-auto px-10 ">
          <table className="inline-table " cellPadding={20}>
            <thead className="bg-stone-800 text-white">
              <th>Mã Sinh Viên</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th>Hành Động</th>
            </thead>
            <tbody>
              <th>Mã Sinh Viên 899398</th>
              <th>phantanphu899398</th>
              <th>Số Điện Thoại</th>
              <th>phantanphu899398@gmail.com</th>
              <th>
                <button className="bg-red-500">
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button className="bg-yellow-300">
                  <i class="fa-solid fa-pen-nib"></i>
                </button>
              </th>
            </tbody>
          </table>
          {/* <table className="table-auto">
            <thead className=" bg-black text-white px-10">
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};
export default ReactForm;
// const mapStateToProps = (state) => {
//   return {
//     sinhVienItem: state.sinhVienItem.arrSinhVien,
//   };
// };
// export default connect(mapStateToProps)(ReactForm) ;
