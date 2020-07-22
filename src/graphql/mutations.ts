/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      totalCount
      comments {
        items {
          id
          roomID
          content
          userId
          userName
          userImage
          isNgWord
          isOfficialAccount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      totalCount
      comments {
        items {
          id
          roomID
          content
          userId
          userName
          userImage
          isNgWord
          isOfficialAccount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      totalCount
      comments {
        items {
          id
          roomID
          content
          userId
          userName
          userImage
          isNgWord
          isOfficialAccount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      roomID
      room {
        id
        name
        totalCount
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      userId
      userName
      userImage
      isNgWord
      isOfficialAccount
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      roomID
      room {
        id
        name
        totalCount
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      userId
      userName
      userImage
      isNgWord
      isOfficialAccount
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      roomID
      room {
        id
        name
        totalCount
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      userId
      userName
      userImage
      isNgWord
      isOfficialAccount
      createdAt
      updatedAt
    }
  }
`;
