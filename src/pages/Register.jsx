import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HomeBg from "../assets/3350638.jpg";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    name: "",
    email: "",
    profile: "",
    password: "",
    dob: "",
  });

  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });

  const handleFormValidation = (form, isRegister) => {
    if (isRegister) {
      if (form.name.length < 3) {
        toast.error("Name must be at least 3 characters long.");
        return false;
      }
      if (form.userName.length < 3) {
        toast.error("Username must be at least 3 characters long.");
        return false;
      }
      if (form.password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return false;
      }
      return true;
    } else {
      if (form.userName.length < 3) {
        toast.error("Username must be at least 3 characters long.");
        return false;
      }
      if (form.password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return false;
      }
      return true;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isValidated = handleFormValidation(registerForm, false);
    if (!isValidated) return;

    const loadingToastId = toast.loading("Creating your account...");

    try {
      const formData = new FormData();
      formData.append("userName", registerForm.userName);
      formData.append("name", registerForm.name);
      formData.append("email", registerForm.email);
      formData.append("profile", registerForm.profile);
      formData.append("password", registerForm.password);
      formData.append("dob", registerForm.dob);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/register`,
        {
          method: "POST",
          body: formData,
        }
      );

      console.log(response, registerForm);
      const { data } = await response.json();

      if (!response.ok) {
        toast.dismiss(loadingToastId);
        toast.error("Something went wrong");
        console.log(data);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.dismiss(loadingToastId);
      toast.success("Account created successful!");
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const isValidated = handleFormValidation(loginForm, false);
    if (!isValidated) return;

    const loadingToastId = toast.loading("Logging in...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginForm),
        }
      );

      const { data } = await response.json();

      if (!response.ok) {
        toast.dismiss(loadingToastId);
        toast.error("Username or password is not correct");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.dismiss(loadingToastId);
      toast.success("Login successful!");
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-right" duration="4000" />
      <div className="w-full h-screen py-48 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] lg:py-0 md:py-48 bg-slate-50">
        <div className="flex justify-center items-center">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="w-[385px] bg-gray-200">
              <TabsTrigger className="w-1/2" value="account">
                Login
              </TabsTrigger>
              <TabsTrigger className="w-1/2" value="register">
                Singup
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Login</CardTitle>
                  <CardDescription>
                    Enter your username below to login to your account.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="robinson"
                        required
                        value={loginForm.userName}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Login</Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="register">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Singup</CardTitle>
                  <CardDescription>
                    Enter your information to create an account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4" onSubmit={handleRegister}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Max"
                          required
                          value={registerForm.name}
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Username</Label>
                        <Input
                          id="username"
                          placeholder="robinson"
                          required
                          value={registerForm.userName}
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              userName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={registerForm.email}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="dob">Date of birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        required
                        value={registerForm.dob}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            dob: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                        value={registerForm.password}
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="image">Profile Picture</Label>
                      <Input
                        id="image"
                        type="file"
                        required
                        onChange={(e) =>
                          setRegisterForm({
                            ...registerForm,
                            profile: e.target.files[0],
                          })
                        }
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Create an account
                    </Button>
                  </form>
                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a href="#" className="underline">
                      Sign in
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src={HomeBg}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default Register;