import {gql} from '@apollo/client';

export const QUERY_PROFILES = gql`
query Profiles {
    profiles {
      _id
      firstName
      lastName
      userName
      posts {
        title
        _id
        description
        image
        url
        userName
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
query Profile($profileId: ID) {
    profile(profileId: $profileId) {
      _id
      userName
      firstName
      lastName
      posts {
        _id
        userName
        url
        image
        title
        description
      }
    }
  }
`;

export const QUERY_POSTS = gql`
query Posts {
    posts {
      _id
      userName
      url
      image
      title
      description
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
query Post($id: ID!) {
    post(_id: $id) {
      _id
      userName
      url
      image
      title
      description
    }
  }
`;