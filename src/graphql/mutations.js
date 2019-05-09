// eslint-disable
// this is an auto generated file. This will be overwritten

export const createDesk = `mutation CreateDesk($input: CreateDeskInput!) {
  createDesk(input: $input) {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const updateDesk = `mutation UpdateDesk($input: UpdateDeskInput!) {
  updateDesk(input: $input) {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const deleteDesk = `mutation DeleteDesk($input: DeleteDeskInput!) {
  deleteDesk(input: $input) {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
  }
}
`;
export const createRfid = `mutation CreateRfid($input: CreateRFIDInput!) {
  createRFID(input: $input) {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
export const updateRfid = `mutation UpdateRfid($input: UpdateRFIDInput!) {
  updateRFID(input: $input) {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
export const deleteRfid = `mutation DeleteRfid($input: DeleteRFIDInput!) {
  deleteRFID(input: $input) {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
