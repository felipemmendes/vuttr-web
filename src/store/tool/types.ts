export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export interface Query {
  tagSearch: boolean | undefined;
  text: string;
}

export interface Error {
  data: {
    message: string;
  };
  status: number;
}

export interface ToolState {
  loading: boolean;
  tools: Tool[];
  error: Error | '';
  query: Query;
  selectedTool: Tool | undefined;
}

export const FETCH_TOOLS_REQUEST = 'FETCH_TOOLS_REQUEST';
export const FETCH_TOOLS_SUCCESS = 'FETCH_TOOLS_SUCCESS';
export const FETCH_TOOLS_FAILURE = 'FETCH_TOOLS_FAILURE';

export const CREATE_TOOL_REQUEST = 'CREATE_TOOL_REQUEST';
export const CREATE_TOOL_SUCCESS = 'CREATE_TOOL_SUCCESS';
export const CREATE_TOOL_FAILURE = 'CREATE_TOOL_FAILURE';

export const SELECT_TOOL = 'SELECT_TOOL';
export const DESELECT_TOOL = 'DESELECT_TOOL';

export const DELETE_TOOL_REQUEST = 'DELETE_TOOL_REQUEST';
export const DELETE_TOOL_SUCCESS = 'DELETE_TOOL_SUCCESS';
export const DELETE_TOOL_FAILURE = 'DELETE_TOOL_FAILURE';

export const CLEAR_TOOL_ERRORS = 'CLEAR_TOOL_ERRORS';

interface FetchToolsRequest {
  type: typeof FETCH_TOOLS_REQUEST;
  payload: Query;
}

interface FetchToolsSuccess {
  type: typeof FETCH_TOOLS_SUCCESS;
  payload: Tool[];
}

interface FetchToolsFailure {
  type: typeof FETCH_TOOLS_FAILURE;
  payload: Error;
}

interface CreateToolRequest {
  type: typeof CREATE_TOOL_REQUEST;
  payload: Omit<Tool, 'id'>;
}

interface CreateToolSuccess {
  type: typeof CREATE_TOOL_SUCCESS;
  payload: Tool;
}

interface CreateToolFailure {
  type: typeof CREATE_TOOL_FAILURE;
  payload: Error;
}

interface DeleteToolRequest {
  type: typeof DELETE_TOOL_REQUEST;
  payload: number;
}

interface DeleteToolSuccess {
  type: typeof DELETE_TOOL_SUCCESS;
  payload: number;
}

interface DeleteToolFailure {
  type: typeof DELETE_TOOL_FAILURE;
  payload: Error;
}

interface SelectTool {
  type: typeof SELECT_TOOL;
  payload: Tool;
}

interface DeselectTool {
  type: typeof DESELECT_TOOL;
}

interface ClearToolErrors {
  type: typeof CLEAR_TOOL_ERRORS;
}

export type FetchToolsType =
  | FetchToolsRequest
  | FetchToolsSuccess
  | FetchToolsFailure;

export type CreateToolType =
  | CreateToolRequest
  | CreateToolSuccess
  | CreateToolFailure;

export type DeleteToolType =
  | DeleteToolRequest
  | DeleteToolSuccess
  | DeleteToolFailure;

export type SelectToolType = SelectTool | DeselectTool;

export type ClearToolErrorsType = ClearToolErrors;

export type ToolsType =
  | FetchToolsType
  | CreateToolType
  | DeleteToolType
  | SelectToolType
  | ClearToolErrorsType;
