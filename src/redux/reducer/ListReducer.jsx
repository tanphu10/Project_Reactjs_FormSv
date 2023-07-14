const initialState = {
  arrSinhVien: [],
};

export const listReducer = (state = initialState, action) => {
  if (action.type == "ADDTOARR") {
    const newArrSinhVien = [...state.arrSinhVien];
    console.log(action);
    newArrSinhVien.push({ ...action.payload });
    return { ...state, arrSinhVien: [...newArrSinhVien] };
  }
};
