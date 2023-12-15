import { useState } from "react";

export function useForm(initialValues) {
  const [form, setForm] = useState(initialValues);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return { form, handleChange };
}