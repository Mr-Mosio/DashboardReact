import {Button, Input, Join} from 'react-daisyui';
import {twMerge} from 'tailwind-merge';
import {forwardRef, useId, useMemo, useState} from 'react';
import {Eye, EyeSlash} from 'iconsax-react';
import {useTranslation} from 'react-i18next';

export const ErrorItem = ({id, label, error}) => {

  console.log(error);
  if (!error)
    return <></>

  const {t} = useTranslation()

  const errorMessage = useMemo(() => {
    if (error?.message)
      return error.message

    return {
      required: t(`validations.required`, {label: label})
    }[error?.type]

  }, [error])


  return <label htmlFor={id} className="label">
    <span className="label-text-alt text-error">{errorMessage}</span>
  </label>;
}

const FieldField = forwardRef((
    {label, render, error, className = '', inputClassName = '', ...props},
    ref) => {
  const id = useId()
  const Label = useMemo(() => {
    return () => {
      if (label) {
        if (typeof label === "string") {
          return <label htmlFor={id} className="label">
            <span className="label-text">{label}</span>
          </label>;
        }else if (typeof label === "function") {
          return label({id});
        }
      }
      return <></>;
    }
  }, [label])

  return <div className={twMerge('form-control w-full' , className)}>
    <Label />
    {render ? render({id, className: inputClassName,...props}) : <Input ref={ref} id={id} {...props} className={inputClassName} />}
    {error && <ErrorItem error={error} id={id} label={label} />}
  </div>
})

FieldField.Password = forwardRef(({...props}, ref) => {

  const [visible, setVisible] = useState(false)

  return <FieldField {...props} render={(props) => {
    return <Join className="w-full">
      <Input type={visible ? "text" : "password"} ref={ref} {...props} className={twMerge("join-item grow", props?.className)} />
      <Button onClick={() => setVisible(!visible)} className="join-item">
        {visible ?  <EyeSlash className="size-5" />:  <Eye className="size-5" />}
      </Button>
    </Join>
  }} />
})

export default FieldField;