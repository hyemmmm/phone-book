// 액션을 생성하는 함수, 액션타입, 리듀서

const CREATE = "CREATE";
const REMOVE = "REMOVE";
const UPDATE = "UPDATE";
const initialState = {
  userList: [
    {
      id: 1,
      name: "David",
      phoneNum: "010-2222-1030",
    },
    {
      id: 2,
      name: "Albert",
      phoneNum: "010-2222-1031",
    },
    {
      id: 3,
      name: "John",
      phoneNum: "010-2222-1032",
    },
    {
      id: 4,
      name: "Wade",
      phoneNum: "010-2222-1033",
    },
  ],
};
let nextID = 5;

export function create(options) {
  return {
    type: CREATE,
    ...options,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export function update(id, options) {
  return {
    type: UPDATE,
    id,
    options,
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        userList: state.userList.concat({
          id: nextID++,
          name: action.name,
          phoneNum: action.phoneNum,
        }),
      };
    case REMOVE:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== state.id),
      };
    case UPDATE:
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.id === action.id ? { ...user, ...action.options } : user
        ),
      };
    default:
      return state;
  }
}
