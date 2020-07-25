/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
  commentTotalCount?: number | null,
};

export type ModelRoomConditionInput = {
  commentTotalCount?: ModelIntInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
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


export type UpdateRoomInput = {
  id: string,
  commentTotalCount?: number | null,
};

export type DeleteRoomInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  roomID: string,
  content: string,
  userId: string,
  userName: string,
  userImage: string,
  isNgWord: boolean,
  createdAt?: string | null,
  isOfficialAccount: boolean,
};

export type ModelCommentConditionInput = {
  roomID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  userImage?: ModelStringInput | null,
  isNgWord?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  isOfficialAccount?: ModelBooleanInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCommentInput = {
  id: string,
  roomID?: string | null,
  content?: string | null,
  userId?: string | null,
  userName?: string | null,
  userImage?: string | null,
  isNgWord?: boolean | null,
  createdAt?: string | null,
  isOfficialAccount?: boolean | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  commentTotalCount?: ModelIntInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  roomID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  userImage?: ModelStringInput | null,
  isNgWord?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  isOfficialAccount?: ModelBooleanInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom:  {
    __typename: "Room",
    id: string,
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
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
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      roomID: string,
      room:  {
        __typename: "Room",
        id: string,
        commentTotalCount: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      userId: string,
      userName: string,
      userImage: string,
      isNgWord: boolean,
      createdAt: string,
      isOfficialAccount: boolean,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentsByRoomQueryVariables = {
  roomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCommentsByRoomQuery = {
  getCommentsByRoom:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      roomID: string,
      room:  {
        __typename: "Room",
        id: string,
        commentTotalCount: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      content: string,
      userId: string,
      userName: string,
      userImage: string,
      isNgWord: boolean,
      createdAt: string,
      isOfficialAccount: boolean,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom:  {
    __typename: "Room",
    id: string,
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom:  {
    __typename: "Room",
    id: string,
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom:  {
    __typename: "Room",
    id: string,
    commentTotalCount: number | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        roomID: string,
        content: string,
        userId: string,
        userName: string,
        userImage: string,
        isNgWord: boolean,
        createdAt: string,
        isOfficialAccount: boolean,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    roomID: string,
    room:  {
      __typename: "Room",
      id: string,
      commentTotalCount: number | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    content: string,
    userId: string,
    userName: string,
    userImage: string,
    isNgWord: boolean,
    createdAt: string,
    isOfficialAccount: boolean,
    updatedAt: string,
  } | null,
};
