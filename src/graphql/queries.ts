/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        totalCount
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
          name
          totalCount
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
      nextToken
    }
  }
`;
