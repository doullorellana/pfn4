import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignIn() {
  return (
    <div className="fixed inset-0 w-full h-full bg-gray-300 bg-opacity-75 transition-opacity">
      <section className="m-8 flex mt-28">
        <div className="w-screen transform overflow-hidden rounded-xl bg-white shadow-xl transition-all lg:pl-5 lg:pr-5  sm:ml-5 sm:mr-5">

          <div className="ml-15 mr-15 mt-10 mb-10">

            <div className="text-center">
              <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
              <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingrese su email y su contraseña para Sign In.</Typography>
            </div>
            <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                  Su email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                  Contraseña
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-start font-medium"
                  >
                    Yo acepto los&nbsp;
                    <a
                      href="#"
                      className="font-normal text-black transition-colors hover:text-gray-900 underline"
                    >
                      Terminos y Condiciones
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                Sign In
              </Button>

              <div className="flex items-center justify-between gap-2 mt-6">
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center justify-start font-medium"
                    >
                      Subscribeme para newsletter
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Typography variant="small" className="font-medium text-gray-900">
                  <a href="#">
                    Olvidó su contraseña
                  </a>
                </Typography>
              </div>

              <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                No ha sido registrado?
                <Link to="/auth/sign-up" className="text-gray-900 ml-1">Crear cuenta</Link>
              </Typography>
            </form>
          </div>

        </div>

      </section>
    </div>
  );
}

export default SignIn;
