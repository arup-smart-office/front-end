// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateDesk = `subscription OnCreateDesk {
  onCreateDesk {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const onUpdateDesk = `subscription OnUpdateDesk {
  onUpdateDesk {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const onDeleteDesk = `subscription OnDeleteDesk {
  onDeleteDesk {
    id
    isOccupied
    rfid
    temperature
    light
    version
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    name
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    name
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    name
  }
}
`;
export const onCreateRfid = `subscription OnCreateRfid {
  onCreateRFID {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
export const onUpdateRfid = `subscription OnUpdateRfid {
  onUpdateRFID {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
export const onDeleteRfid = `subscription OnDeleteRfid {
  onDeleteRFID {
    id
    RFID
    user {
      id
      name
    }
  }
}
`;
