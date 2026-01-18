import { useForm, type SubmitHandler } from "react-hook-form";
import type { AuthenticationFields } from "../types/authentication-fields";
import { useMutation } from "@tanstack/react-query";
import registerUser from "../utils/register-user";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { 
        register, 
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<AuthenticationFields & { confirmPassword: string }>()

    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            alert("Registration successful");
            navigate("/auth/login")
        }
    })

    const onSubmit: SubmitHandler<AuthenticationFields & { confirmPassword: string }> = (data) => {
        if(data.password !== data.confirmPassword) {
            setError("confirmPassword", { message: "Passwords do not match." });
            setError("password", { message: "Passwords do not match." });
            return
        }
        mutation.mutate({
            email: data.email,
            password: data.password
        })
    }

    return (
        <>
            <div className="bg-background-light min-h-screen flex flex-col font-display">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4 pb-20">
                    <div className="w-full max-w-105 flex flex-col">
                        <div className="text-center mb-8">
                            <h1 className="text-[#0d121b] text-[32px] font-bold leading-tight pt-6">Create Account</h1>
                            <p className="text-slate-500 mt-2 text-base">Empower your academic journey with AI.</p>
                        </div>
                        <form action="#" className="flex flex-col gap-4" method="POST" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col w-full">
                                <label className="flex flex-col w-full">
                                    <p className="text-[#0d121b] text-sm font-semibold leading-normal pb-2">Email</p>
                                    <input  {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address."
                                        }
                                    })} className="flex w-full rounded-lg text-[#0d121b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfd7e7] bg-white focus:border-primary h-12 placeholder:text-slate-400 p-3.75 text-base font-normal" name="email" placeholder="name@university.edu" type="email" />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs leading-normal pb-2 mt-2">{errors.email.message}</p>
                                    )}
                                </label>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="flex flex-col w-full">
                                    <p className="text-[#0d121b] text-sm font-semibold leading-normal pb-2">Password</p>
                                    <input {...register("password", {
                                        required: "Password is required."
                                    })} className="flex w-full rounded-lg text-[#0d121b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfd7e7] bg-white focus:border-primary h-12 placeholder:text-slate-400 p-3.75 text-base font-normal" name="password" placeholder="••••••••" type="password" />
                                    {errors.password && (
                                        <p className="text-red-400 text-xs leading-normal pb-2 mt-2">{errors.password.message}</p>
                                    )}
                                </label>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="flex flex-col w-full">
                                    <p className="text-[#0d121b] text-sm font-semibold leading-normal pb-2">Confirm Password</p>
                                    <input {...register("confirmPassword", {
                                        required: "Password is required."
                                    })} className="flex w-full rounded-lg text-[#0d121b] focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#cfd7e7] bg-white focus:border-primary h-12 placeholder:text-slate-400 p-3.75 text-base font-normal" name="confirmPassword" placeholder="••••••••" type="password" />
                                    {errors.confirmPassword && (
                                        <p className="text-red-400 text-xs leading-normal pb-2 mt-2">{errors.confirmPassword.message}</p>
                                    )}
                                </label>
                            </div>
                            <div className="flex pt-4">
                                <button disabled={isSubmitting} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide bg-blue-700 transition-colors" type="submit">
                                    <span className="truncate">{isSubmitting ? "Creating Account..." : "Register"}</span>
                                </button>
                            </div>
                        </form>
                        <div className="mt-10 text-center">
                            <p className="text-slate-600 text-sm">
                                Already have an account?
                                <a className="text-primary font-bold hover:underline cursor-pointer ml-1" onClick={() => navigate('/auth/login')}>Log in</a>
                            </p>
                        </div>
                    </div>
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

export default RegisterPage;