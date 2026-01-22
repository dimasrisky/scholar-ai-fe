import { useForm, type SubmitHandler } from "react-hook-form"
import type { AuthenticationFields } from "../types/authentication-fields"
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import loginUser from "../utils/login-user";
import LoadingScreen from "../components/LoadingScreen";

function LoginPage() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<AuthenticationFields>()

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            alert("Login successful");
            localStorage.setItem("accessToken", data.data.accessToken);
            localStorage.setItem("refreshToken", data.data.refreshToken);
            navigate("/dashboard");
        },
        onError: () => {
            alert("Login failed");
            setError("email", { message: "Invalid email or password." });
            setError("password", { message: "Invalid email or password." });
        }
    })

    const onSubmit: SubmitHandler<AuthenticationFields> = (data) => {
        mutation.mutate({
            email: data.email,
            password: data.password
        })
    }

    if (isSubmitting) {
        return <LoadingScreen message="Signing in..." />
    }

    return (
        <>
            <div className="bg-background-light min-h-screen flex flex-col font-display">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4 pb-20">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-105 flex flex-col">
                        <div className="text-center mb-8">
                            <h1 className="text-[#0d121b] text-[32px] font-bold leading-tight pt-6">Welcome Back</h1>
                            <p className="text-slate-500 mt-2 text-base">Your academic AI assistant is ready.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label className="flex flex-col w-full">
                                    <p className="text-[#0d121b] text-sm font-semibold leading-normal pb-2">Email</p>
                                    <input {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address."
                                        }
                                    })} className="flex w-full rounded-lg text-[#0d121b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfd7e7] bg-white focus:border-primary h-12 placeholder:text-slate-400 p-3.75 text-base font-normal" placeholder="e.g. example@gmail.com" type="email" />
                                </label>
                                {errors.email && (
                                    <p className="text-red-400 text-xs leading-normal pb-2 mt-2">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex justify-between items-end pb-2">
                                    <p className="text-[#0d121b] text-sm font-semibold leading-normal">Password</p>
                                    <a className="text-primary text-xs font-semibold hover:underline text-blue-400" href="#">Forgot password?</a>
                                </div>
                                <label className="flex flex-col w-full">
                                    <input {...register("password", {
                                        required: "Password is required."
                                    })} className="flex w-full rounded-lg text-[#0d121b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfd7e7] bg-white focus:border-primary h-12 placeholder:text-slate-400 p-3.75 text-base font-normal" placeholder="••••••••" type="password" />
                                </label>
                                {errors.password && (
                                    <p className="text-red-400 text-xs leading-normal pb-2 mt-2">{errors.password.message}</p>
                                )}
                            </div>
                            <div className="flex pt-4">
                                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide bg-blue-700 transition-colors">
                                    <span className="truncate">{isSubmitting ? "Signing in..." : "Sign In"}</span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-slate-600 text-sm">
                                Don't have an account?
                                <a className="text-primary cursor-pointer font-bold hover:underline ml-1" onClick={() => navigate('/auth/register')}>Sign up</a>
                            </p>
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    )
}

function Header() {
    return (
        <>
            <header className="w-full px-6 py-6 lg:px-40">
                <div className="max-w-240 mx-auto flex items-center gap-2 text-[#0d121b]">
                    <div className="size-6 text-primary">
                        <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">My Thesis Brain</h2>
                </div>
            </header>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer className="w-full py-8 px-6 border-t border-slate-200">
                <div className="max-w-240 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p>© 2023 My Thesis Brain. Built for Researchers.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-primary transition-colors" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LoginPage