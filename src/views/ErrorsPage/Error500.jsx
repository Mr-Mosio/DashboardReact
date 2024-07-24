import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from '../../context/theme.context.jsx';

export default function Error500({reset, error}) {
    const {successToast} = useContext(ThemeContext)
    const navigate = useNavigate()
    return <main className="h-screen flex items-center flex-col justify-center overflow-hidden w-screen relative z-10">
        <div className="bg-contain -z-10 opacity-20 absolute inset-0 bg-left bg-no-repeat"
             style={{backgroundImage: "url('/assets/images/brand/symbol.png')"}}></div>
        <h1 className="text-[13rem] flex items-center font-bold leading-[13rem]">500</h1>

        <h2 className="text-3xl font-bold">خطای سیستمی</h2>
        <h2 className="text-2xl font-medium mt-4">مشکلی رخ داده است . همکاران ما درحال برسی این مشکل هستند. از صبر و
            شکیبایی شما سپاس گزاریم.</h2>
        <div className="flex items-center gap-2">
            <button onClick={() => {
                reset()
                navigate('/')
            }} className="btn btn-secondary mt-10 rounded-full px-10">بازگشت به صفحه اصلی
            </button>
            <button onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(error))
                successToast("متن خطا کپی شد لطفا برای تیم فنی ارسال کنید.")
            }} className="btn btn-outline btn-primary mt-10 rounded-full px-10">گزارش به تیم فنی
            </button>
        </div>
    </main>
}