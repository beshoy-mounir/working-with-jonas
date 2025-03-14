const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);
// MiddleWare
exports.CheckNewUser = (req, res, next) => {
  console.log('Checking New User .....');

  if (!req.body.name || !req.body.age) {
    return res.status(404).json({
      status: 'fail',
      message: 'Input must have name & age',
    });
  }
  next();
};

exports.checkID = (req, res, next) => {
  const sentID = req.params.id;
  const validID = users.find((el) => el._id == sentID);
  if (!validID)
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  next();
};
// Route Controllers
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    length: users.length,
    data: {
      data: { users },
    },
  });
};
exports.getUserByID = (req, res) => {
  const sentID = req.params.id;
  const user = users.find((el) => el._id == sentID);
  res.status(200).json({
    status: 'success',
    data: {
      data: user,
    },
  });
};
exports.postUser = (req, res) => {
  const newID = `${users.length + 1}`;
  const newUser = Object.assign({ _id: newID }, req.body);
  users.push(newUser);
  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(users),
    (err) => {
      err
        ? res.status(501).json({
            status: 'fail',
            message: 'Could not write the file',
          })
        : res.status(200).json({
            status: 'success',
            length: users.length,
            data: {
              data: users,
            },
          });
    }
  );
};
exports.patchUser = (req, res) => {
  const sentID = req.params.id;
  const newUsers = users.map((el) => {
    if (el._id == sentID) {
      return Object.assign(el, req.body);
    } else return el;
  });
  console.log(newUsers);

  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(newUsers),
    (err) => {
      err
        ? res.status(501).json({
            status: 'fail',
            message: 'Could not write file',
          })
        : res.status(200).json({
            status: 'success',
            data: {
              data: newUsers,
            },
          });
    }
  );
};
exports.deleteUser = (req, res) => {
  const sentID = req.params._id;
  const newUsers = users.filter((el) => el._id != sentID);

  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(newUsers),
    (err) => {
      err
        ? res.status(501).json({
            status: 'fail',
            message: 'Could not write file',
          })
        : res.status(204).json({
            status: 'success',
            data: null,
          });
    }
  );
};
