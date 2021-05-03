'use strict';


const status = {};

status.successMessage = (M, ress) => (
  {
    code: '01',
    status: true,
    message: M,
    data: ress
  }
);

status.emptyMessage = ress => (
    {
        code: '02',
        status: true,
        message: 'Data Tidak Ditemukan',
        data: ress
      }
);


status.errorMessage = ress => (
    {
        code: '02',
        status: false,
        message: 'Error',
        data: ress
    }
);

status.forbiddenMessage = (M) => (
    {
        code: '02',
        status: false,
        message: M
    }
);

status.emptyFile = M => (
    {
        code: '02',
        status: false,
        message: M
    }
);

status.statusCode = {
    success: 200,
    error: 500,
    notfound: 404,
    unauthorized: 401,
    conflict: 409,
    created: 201,
    bad: 400,
    nocontent: 204,
    forbidden: 403,
};

status.trip_statuses = {
    active: 1,
    notactive: 0
}



module.exports = status;
