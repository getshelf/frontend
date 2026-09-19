import { createFileRoute } from "@tanstack/react-router";
import { login } from "../getshelf.ts";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

type FormValues = {
  email: string;
  password: string;
}

function RouteComponent() {

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "test@getshelf.me",
      password: "123",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(login(data));
  };


  return (
    <form className="m-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="p-2">
        <input className="border" {...register("email")} type="email" placeholder="Email"/>
      </div>
      <div className="p-2">
        <input className="border" {...register("password")} type="password" placeholder="Password"/>
      </div>
      <div>
        <button className="border" type="submit">Login</button>
      </div>
    </form>
  );
}
