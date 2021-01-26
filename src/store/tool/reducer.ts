import {
  FETCH_TOOLS_REQUEST,
  FETCH_TOOLS_SUCCESS,
  FETCH_TOOLS_FAILURE,
  CREATE_TOOL_REQUEST,
  CREATE_TOOL_SUCCESS,
  CREATE_TOOL_FAILURE,
  DELETE_TOOL_REQUEST,
  DELETE_TOOL_SUCCESS,
  DELETE_TOOL_FAILURE,
  SELECT_TOOL,
  DESELECT_TOOL,
  CLEAR_TOOL_ERRORS,
  ToolsType,
  ToolState,
} from './types';

const initialToolState: ToolState = {
  loading: true,
  tools: [],
  error: '',
  query: {
    tagSearch: false,
    text: '',
  },
  selectedTool: undefined,
};

const toolReducer = (
  state = initialToolState,
  action: ToolsType,
): ToolState => {
  switch (action.type) {
    case FETCH_TOOLS_REQUEST:
      return {
        ...state,
        loading: true,
        query: action.payload,
      };
    case FETCH_TOOLS_SUCCESS:
      return {
        ...state,
        loading: false,
        tools: action.payload,
        error: '',
      };
    case FETCH_TOOLS_FAILURE:
      return {
        ...state,
        loading: false,
        tools: [],
        error: action.payload,
      };
    case CREATE_TOOL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case CREATE_TOOL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TOOL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case DELETE_TOOL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECT_TOOL:
      return {
        ...state,
        selectedTool: action.payload,
      };
    case DESELECT_TOOL:
      return {
        ...state,
        selectedTool: undefined,
      };
    case CLEAR_TOOL_ERRORS:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default toolReducer;
