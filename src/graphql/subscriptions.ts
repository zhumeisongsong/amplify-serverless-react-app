/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
