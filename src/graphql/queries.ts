/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      commentTotalCount
      comments {
        items {
          id
          roomID
          content
          userId
          userName
          userImage
          isNgWord
          createdAt
          isOfficialAccount
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentTotalCount
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      roomID
      room {
        id
        commentTotalCount
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
      createdAt
      isOfficialAccount
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomID
        room {
          id
          commentTotalCount
          createdAt
          updatedAt
        }
        content
        userId
        userName
        userImage
        isNgWord
        createdAt
        isOfficialAccount
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommentsByRoom = /* GraphQL */ `
  query GetCommentsByRoom(
    $roomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByRoom(
      roomID: $roomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roomID
        room {
          id
          commentTotalCount
          createdAt
          updatedAt
        }
        content
        userId
        userName
        userImage
        isNgWord
        createdAt
        isOfficialAccount
        updatedAt
      }
      nextToken
    }
  }
`;
