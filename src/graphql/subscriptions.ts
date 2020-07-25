/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
