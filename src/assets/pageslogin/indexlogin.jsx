import React, { useState } from "react";
import './indexlogin.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Stack, Box } from "@mui/material"


export const Login = () => {

    const [iconvisivel, setIconvisivel] = useState(false)
    const OnSubmiteIconVisivel = () => {
        setIconvisivel(!iconvisivel)

    }




    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Digite um email válido").required("O campo email é obrigatório"),
        password: yup.string().required("A senha é obrigatória").min(6, "A senha deve ter pelo menos 6 digitos"),
        confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(watch("name"))
    console.log(watch("email"))
    console.log(watch("password"))
    console.log(watch("confirmPassword"))

    function onSubmit(userData) {
        console.log(userData)
    }



    const navegate = useNavigate()
    const onbrowserHome = () => {
        const verifigation = Object.values(schema).find(item => item == undefined)

        if (
            verifigation != true
        ) {
            navegate('/home')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="div-container-login">
                    <h2>Logar Agora</h2>
                    <div className="container-login-inpute" >
                        <label>Nome</label>
                        <input type="text" {...register("name", { required: true })} />
                        {errors.name && <span>{errors.name?.message}</span>}
                    </div>
                    <div className="container-login-inpute">
                        <label>E-mail</label>
                        <input type="text" {...register("email", { required: true })} />
                        {errors.email && <span>{errors.email?.message}</span>}
                    </div>
                    <div className="container-login-inpute-box">
                        <Stack sx={{ width: '100%', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Box sx={{ width: '100%', height: '5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                <label>Senha</label>
                                <input type={iconvisivel ? 'text' : 'password'}
                                    {...register("password", { required: true })}
                                />
                            </Box>
                            <span onClick={OnSubmiteIconVisivel}>
                                {iconvisivel ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </Stack>

                        <p>{errors.password?.message}</p>
                    </div>

                    <div className="container-login-inpute-box">
                        <Stack sx={{ width: '100%', height: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Box sx={{ width: '100%', height: '5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                <label>Confimar-Senha</label>
                                <input type={iconvisivel ? 'text' : 'Password'}
                                    {...register("confirmPassword", { required: true })}
                                />
                            </Box>
                            <span onClick={OnSubmiteIconVisivel}>
                                {iconvisivel ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </Stack>

                        <p>{errors.confirmPassword?.message}</p>
                    </div>

                    <div className="container-login-button">
                        <button type="submit" onClick={onbrowserHome}>
                            Logar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}