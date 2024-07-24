import {useTranslation} from 'react-i18next';
import {useTheme} from '../../context/theme.context.jsx';
import FieldField from '../Components/Form/Field.jsx';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import useValidationResolver from '../../hooks/useValidationResolver.js';
import Logo from '../Components/Base/Logo.jsx';
import {Button} from 'react-daisyui';
import {Google} from 'iconsax-react';
import {useLoginMutation} from '../../hooks/useQuery.js';
import {toast} from 'react-toastify';
import {useUser} from '../../context/user.context.jsx';
import {useNavigate} from 'react-router-dom';

const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

export default function LoginPage() {
  const {setTitle} = useTheme()
  setTitle("loginPage.pageTitle");

  const {t} = useTranslation();
  const resolver = useValidationResolver(validationSchema);

  const {
    register,
    setError,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver,
  })

  const {login} = useUser()
  const navigate = useNavigate()


  const mutation = useLoginMutation({
    onSuccess: (data) => {
      login(data.data.user, data.data.token)
      navigate("/")
    },
    onError: (error) => {
      if (error.validation) {
        Object.keys(error.errors.validation).forEach(item => {
          setError(item, {
            message: error.errors.validation[item][0]
          })
        })
      }else {
        toast.error(error.message)
      }

    },
  })


  return (
      <section
          className="min-h-screen bg-base-100 grid lg:grid-cols-2 gap-5 p-5">

        <div className="flex relative flex-col justify-center gap-3">

          <div className="lg:w-2/5 w-full mx-auto space-y-4">

            <Logo  className="w-44 mx-auto" />

            <h3 className="text-center font-semibold text-xl">{t("loginPage.title")}</h3>

            <FieldField label={t("loginPage.username.label")}
                        placeholder={t("loginPage.username.placeholder")}
                        {...register("username", {
                          required: "test"
                        })}
                        error={errors?.username} />

            <FieldField.Password label={t("loginPage.password.label")}
                        placeholder={t("loginPage.password.placeholder")}
                        {...register("password")}
                        error={errors?.password} />

            <div className="flex flex-col gap-3 justify-center !mt-10">
              <Button color="primary" loading={mutation.isPending} onClick={handleSubmit(mutation.mutate)} className="w-full" wide={true}>{t(
                  'loginPage.submit')}</Button>
              <Button color={'secondary'} variant={"outline"}>
                <Google
                    className="w-5 h-5"
                />
                <span>{t('loginPage.loginWithGoogle')}</span>
              </Button>
            </div>

          </div>

        </div>

        <div
             className="relative hidden lg:block before:absolute before:inset-0 before:bg-gradient-to-tl before:from-primary before:to-primary-focus overflow-hidden before:opacity-30 rounded-3xl  bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(/assets/images/banners/auth.webp)`}}>
        </div>

      </section>
  );
}