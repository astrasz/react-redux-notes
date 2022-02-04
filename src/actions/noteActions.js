export const create = (data) => {
  return {
    type: "note/create",
    payload: data,
  };
};

export const edit = (data) => {
  return {
    type: "note/edit",
    payload: data,
  };
};

export const remove = (id) => {
  return {
    type: "note/delete",
    payload: id,
  };
};
