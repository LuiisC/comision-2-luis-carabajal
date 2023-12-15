import { useForm } from "../hooks/useForm";

export const Form2 = () => {
  const { form, handleChange } = useForm({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form-control"
        style={{
          width: "500px",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="***********"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary btn-sm" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};