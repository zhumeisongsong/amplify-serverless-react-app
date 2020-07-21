/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
  title: string,
  commentCount?: number | null,
};

export type ModelRoomConditionInput = {
  title?: ModelStringInput | null,
  commentCount?: ModelIntInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRoomInput = {
  id: string,
  title?: string | null,
  commentCount?: number | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  commentCount?: ModelIntInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      id: string,
      title: string,
      commentCount: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    title: string,
    commentCount: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
