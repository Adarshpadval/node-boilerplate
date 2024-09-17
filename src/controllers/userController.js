export const getUsers = (req, res) => {
    res.send('List of users');
  };
  
  export const createUser = (req, res) => {
    const user = req.body;
    res.send(`User ${user.name} created`);
  };
  