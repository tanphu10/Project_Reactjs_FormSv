import React from "react";
import ProductReact from "./ProductReact";
import { connect } from "react-redux";
const ReactForm = (props) => {
  console.log(props);

  return (
    <div>
      <h1 className="text-center  font-bold text-zinc-950  text-2xl">
        Bài Tập ReactForm
      </h1>

      <div className="container mx-auto px-10">
        <ProductReact />
        <div className="max-w-screen-xl mx-auto px-10 ">
          <div className="overflow-y-scroll" style={{ maxHeight: "200px" }}>
            <table className="inline-table " cellPadding={20}>
              <thead className="bg-stone-800 text-white ">
                <th>Mã Sinh Viên</th>
                <th>Họ Tên</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Hành Động</th>
              </thead>

              <tbody>
                {props.sinhVienItem.map((item, index) => {
                  const { maSoSv, hoTenSv, emailSv, soDienThoaiSv } = item;
                  return (
                    <tr key={index}>
                      <td>{maSoSv}</td>
                      <td>{hoTenSv}</td>
                      <td>{emailSv}</td>
                      <td>{soDienThoaiSv}</td>
                      <td>
                        <button
                          className="bg-red-700 hover:bg-red-800 text-white focus:outline-none px-5 py-2.5 mx-5 border rounded-md"
                          onClick={() => {
                            props.deleleItem(item);
                          }}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                        <button
                          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none rounded-md px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-5 "
                          onClick={(item) => {
                            props.infoItem(item);
                          }}
                        >
                          <i class="fa-solid fa-pen-nib"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
// export default ReactForm;
const mapStateToProps = (state) => {
  return {
    sinhVienItem: state.sinhVienItem.arrSinhVien,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleleItem: (item) => {
      const action = {
        type: "DELETE",
        payload: item,
      };
      dispatch(action);
    },
    infoItem: (item) => {
      const action = {
        type: "INFO",
        payload: item,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactForm);
