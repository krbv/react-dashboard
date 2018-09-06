import { combineReducers } from "redux";

import modules from "./modules";
import windows from "./windows";
import user from "./user";
import main from "./main";
import taskList from "./taskList";
import taskPagination from "./taskPagination";
import taskFilter from "./taskFilter";
import taskStatus from "./taskStatus";
import taskMenu from "./taskMenu";
import taskSingle from "./taskSingle";
export default combineReducers({
  modules,
  windows,
  user,
  main,
  taskList,
  taskPagination,
  taskFilter,
  taskStatus,
  taskMenu,
  taskSingle
});
