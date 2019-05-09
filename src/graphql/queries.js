// eslint-disable
// this is an auto generated file. This will be overwritten

export const getDesk = `query GetDesk($id: ID!) {
  getDesk(id: $id) {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const listDesks = `query ListDesks(
  $filter: ModelDeskFilterInput
  $limit: Int
  $nextToken: String
) {
  listDesks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isOccupied
      rfid
      temperature
      light
      version
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getRfid = `query GetRfid($id: ID!) {
  getRFID(id: $id) {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
export const listRfiDs = `query ListRfiDs(
  $filter: ModelRFIDFilterInput
  $limit: Int
  $nextToken: String
) {
  listRFIDs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      RFID
      user {
        id
        name
      }
    }
    nextToken
  }
}
`;
