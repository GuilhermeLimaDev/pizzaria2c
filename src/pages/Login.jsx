import { useForm } from "react-hook-form"
 
 
export default function Basic() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
 
 
  return (
<form onSubmit={handleSubmit(onSubmit)}>
<input {...register("PrimeiroNome")} />
<select {...register("Genero")}>
<option value="female">Mulher</option>
<option value="male">Homem</option>
<option value="other">Outro</option>
</select>
<input type="submit" />
</form>
  )
}