import {create} from "zustand";

// state를 저장할수있는 저장소
// value: 매개변수 읽을수 있음
const counterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({count: state.count + 1})),
  increaseBy: (value) => set((state) => ({count: state.count + value})),
}));

export default counterStore;