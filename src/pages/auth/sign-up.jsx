import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


export function SignUp() {
  return (
    <div className="fixed inset-0 w-full h-full bg-gray-300 bg-opacity-75 transition-opacity">
      <section className="m-8 flex mt-28">

        <div className="w-screen transform overflow-hidden rounded-xl bg-white shadow-xl transition-all">
          <div className="ml-15 mr-15 mt-10 mb-10">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="text-center">
                <Typography variant="h2" className="font-bold mb-4">Únete a nosotros Hoy</Typography>
                <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingrese su email y su contraseña para registrarse.</Typography>
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
                  Registrate Ahora
                </Button>


                <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                  Ya tienes una cuenta con nosotros?
                  <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
                </Typography>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
