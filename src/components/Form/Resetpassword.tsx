import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from '@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js';


export default function Resetpassword() {
  const schema = yup.object().shape({
    newpassword: yup.string().required("Please enter your mew password"),
    confirmpassword: yup.string().required("Retype your password"),
    rememberme: yup.boolean(),
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: unknown) => {
    console.log(data);
    reset();
  }
  return (
    <form className="flex flex-col gap-[40px] items-center"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[16px] items-center">
        <div className='flex flex-col gap-[8px] items-start'>
          <div>New Password</div>
          <input {...register("newpassword")}
            className='Input'
            type='password'
            placeholder='Please enter new password'></input>
          <p>{errors.newpassword?.message}</p>
        </div>
        <div className='flex flex-col gap-[8px] items-start'>
          <div>Confirm Password</div>
          <input {...register("confirmpassword")}
            className='Input'
            type='password'
            placeholder='Please  retype password'>
          </input>
          <p>{errors.confirmpassword?.message}</p>
        </div>
        <div className="w-full items-start">
          <div className='flex flex-row gap-[4px]'>
            <input {...register("rememberme")} type="checkbox" />
            <div>Remember me</div>
          </div>
        </div>
        <div className="w-full items-center">
          <button className='Btn_primary w-[195px]'
            type='submit'
          >Reset</button>
        </div>
      </div>
    </form>
  )
}