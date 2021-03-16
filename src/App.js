import { useForm } from "react-hook-form";

function App() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    // eslint-disable-next-line no-undef
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register({ required: true })}
        type="file"
        name="picture"
        id="picture"
      />
      {errors.picture && "Picture is required"}

      <button>Submit</button>
    </form>
  );
}

export default App;
