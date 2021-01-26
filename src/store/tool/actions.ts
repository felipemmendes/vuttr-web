import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';

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
  FetchToolsType,
  CreateToolType,
  DeleteToolType,
  ClearToolErrorsType,
  Tool,
  Error,
  Query,
  SelectToolType,
} from './types';
import { RootState } from '../rootReducer';

export const fetchToolsRequest = (query: Query): FetchToolsType => {
  return {
    type: FETCH_TOOLS_REQUEST,
    payload: query,
  };
};

export const fetchToolsSuccess = (tools: Tool[]): FetchToolsType => {
  return {
    type: FETCH_TOOLS_SUCCESS,
    payload: tools,
  };
};

export const fetchToolsFailure = (error: Error): FetchToolsType => {
  return {
    type: FETCH_TOOLS_FAILURE,
    payload: error,
  };
};

export const fetchTools = (
  query: Query = { text: '', tagSearch: false },
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch(fetchToolsRequest(query));

    api
      .get('tools', {
        params: query.tagSearch
          ? {
              tags_like: query.text,
            }
          : {
              q: query.text,
            },
      })
      .then((response) => {
        const tools = response.data;
        dispatch(fetchToolsSuccess(tools));
      })
      .catch((error) => {
        dispatch(fetchToolsFailure(error.response));
      });
  };
};

export const createToolRequest = (tool: Omit<Tool, 'id'>): CreateToolType => {
  return {
    type: CREATE_TOOL_REQUEST,
    payload: tool,
  };
};

export const createToolSuccess = (newTool: Tool): CreateToolType => {
  return {
    type: CREATE_TOOL_SUCCESS,
    payload: newTool,
  };
};

export const createToolFailure = (error: Error): CreateToolType => {
  return {
    type: CREATE_TOOL_FAILURE,
    payload: error,
  };
};

export const createTool = (
  tool: Omit<Tool, 'id'>,
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch(createToolRequest(tool));

    api
      .post('tools', tool)
      .then((response) => {
        const newTool = response.data;
        dispatch(createToolSuccess(newTool));
        dispatch(fetchTools());
      })
      .catch((error) => {
        dispatch(createToolFailure(error.response));
      });
  };
};

export const deleteToolRequest = (id: number): DeleteToolType => {
  return {
    type: DELETE_TOOL_REQUEST,
    payload: id,
  };
};

export const deleteToolSuccess = (id: number): DeleteToolType => {
  return {
    type: DELETE_TOOL_SUCCESS,
    payload: id,
  };
};

export const deleteToolFailure = (error: Error): DeleteToolType => {
  return {
    type: DELETE_TOOL_FAILURE,
    payload: error,
  };
};

export const deleteTool = (
  toolId: number,
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch(deleteToolRequest(toolId));

    api
      .delete(`tools/${toolId}`)
      .then(() => {
        dispatch(deleteToolSuccess(toolId));
        dispatch(fetchTools());
      })
      .catch((error) => {
        dispatch(createToolFailure(error.response));
      });
  };
};

export const selectTool = (selectedTool: Tool): SelectToolType => {
  return {
    type: SELECT_TOOL,
    payload: selectedTool,
  };
};

export const deselectTool = (): SelectToolType => {
  return {
    type: DESELECT_TOOL,
  };
};

export const clearToolErrors = (): ClearToolErrorsType => {
  return {
    type: CLEAR_TOOL_ERRORS,
  };
};
