export const UserRoutes = {
  MAIN: 'users',
  PROFILE: {
    GET: 'profile',
    UPDATE: 'update',
    DELETE: 'delete/:id',
    RESTORE: 'restore/:id',
  },
};

export const RoleType = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  USER: 'user',
};
