export const Form = () => {
  let email = "";
  let password = "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      email = value;
    } else if (name === "password") {
      password = value;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() && !password.trim()) {
      alert("заполните поля email password");
    } else {
      console.log({ email, password });
      email = "";
      password = "";
      e.target.reset();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="E-Mail"
          name="email"
          onChange={handleChange}
          style={{ margin: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Пароль"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" style={{ margin: "0.5rem" }}>
          Войти
        </button>
      </form>
    </div>
  );
};
