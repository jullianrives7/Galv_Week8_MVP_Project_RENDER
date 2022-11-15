module.exports = {
  dev: {
    // connectionString: "postgresql://postgres:docker@127.0.0.1:5432/mvp_db",
    connectionString:
      "postgres://mvp_db_k3il_user:Ol3hwGo72Nb9kf4K9rJn3FPlYnBxYa4n@dpg-cdpsf71gp3jr9p60aeug-a.ohio-postgres.render.com/mvp_db_k3il",
    port: "3001",
  },
  production: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
    port: process.env.PORT,
  },
};
