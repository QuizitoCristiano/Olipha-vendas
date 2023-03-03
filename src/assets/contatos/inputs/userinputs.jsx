import React, { useState } from "react";
import "./userinputs.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export const UserInput = () => {

    const [abreIcon, setAbrirIcon] = useState(false)

    const handleToggleViewPassword = () => {
        setAbrirIcon(!abreIcon)
    }

    const schema = yup.object({
        name: yup.string().required("Opa!!! meu caro o campo nome é obrigatório"),
        phone: yup.string().required("O campo é obrigatório").min(10, "Digite um núnero válito").max(12, "opaaa"),
        email: yup.string().email("Digite um email válido").required("O campo email é obrigatório"),
        password: yup.string().required("A senha é obrigatória").min(6, "A senha deve ter pelo menos 6 digitos"),
        confirmPassword: yup.string().required("Confirmar a senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),

    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    function onSubmit(userlog) {
        console.log(userlog)
    }
    console.log(watch("name"))
    console.log(watch("email"))
    console.log(watch("phone"))
    console.log(watch("password"))
    console.log(watch("confirmPassword"))

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="container-input">
                <div className="dit-text-h2">
                    <h2>Faça o seu login</h2>
                </div>

                <div className="div-wrapper-text">
                    <input type="text" placeholder="Nome"{...register("name", { required: true })} />
                    {errors.name && <p>{errors.name?.message}</p>}
                </div>
                <div className="div-wrapper-text">
                    <input type="tel" placeholder="Celular +55 () 990000-000"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <p>{errors.phone?.message}</p>}
                </div>
                <div className="div-wrapper-text">
                    <input type="text" placeholder="email" {...register("email", { required: true })} />
                    {errors.email && <p>{errors.email?.message}</p>}
                </div>
                <div className="div-password-senha">
                    <div className="div-password-input">
                        <input placeholder="Senha" type={abreIcon ? 'text' : 'password'} {...register("password", { required: true })} />
                        <span onClick={handleToggleViewPassword}>
                            {abreIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </span>
                    </div>
                    {errors.password && <p>{errors.password?.message}</p>}
                </div>
                <div className="div-password-senha">
                    <div className="div-password-input">
                        <input placeholder="Comfirmar Senha" type={abreIcon ? 'text' : 'password'} {...register("confirmPassword", { required: true })} />
                        <span onClick={handleToggleViewPassword}>
                            {abreIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </span>
                    </div>
                    {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
                </div>
                <div className="div-button-botao">
                    <button type="Submit">Logar</button>
                </div>
            </form>

        </>
    )
}
