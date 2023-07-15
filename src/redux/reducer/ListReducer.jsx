const initialState = {
  arrSinhVien: [],
  student: {},
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOARR": {
      const newArrSinhVien = [...state.arrSinhVien];
      newArrSinhVien.push({ ...action.payload });
      return { ...state, arrSinhVien: [...newArrSinhVien] };
    }
    case "DELETE": {
      const newArrSinhVien = [...state.arrSinhVien];
      let index = newArrSinhVien.findIndex(
        (item) => item.maSoSv == action.payload.maSoSv
        // console.log(item.maSoSv)
        // console.log(action.payload.maSoSv)
      );
      // console.log(item);
      // console.log(index);
      if (index != -1) {
        newArrSinhVien.splice(index, 1);
      }
      return { ...state, arrSinhVien: [...newArrSinhVien] };
    }
    case "INFO": {
      const newArrSinhVien = [...state.arrSinhVien];
      let itemStudent = newArrSinhVien.find(
        (item) => item.maSoSv == action.payload.maSoSv,
        console.log(item.maSoSv)
      );
      // if (item) {
      //   return { ...state, student: [...item] };
      // }
      console.log(itemStudent);
    }
    default:
      return { ...state };
  }
};

// vì sao mình phải điền props vào chổ kia
// if (action.type == "ADDTOARR") {
//   console.log("abc");
//   const newArrSinhVien = [...state.arrSinhVien];
//   newArrSinhVien.push({ ...action.payload });
//   return { ...state, arrSinhVien: [...newArrSinhVien] };
// }
