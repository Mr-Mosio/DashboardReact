import {Link} from 'react-router-dom';

export default function Error404() {
    return <main className="h-screen flex items-center flex-col justify-center overflow-hidden w-screen relative z-10">
        <div className="bg-contain -z-10 opacity-20 absolute inset-0 bg-left bg-no-repeat" style={{backgroundImage: "url('/assets/images/brand/symbol.png')"}}></div>
        <h1 className="text-[13rem] flex items-center font-bold leading-[13rem]">404</h1>

        <h2 className="text-2xl font-medium">صفحه‌ی مورد نظر پیدا نشد</h2>
        <Link to="/" className="btn btn-secondary mt-10 rounded-full px-10">بازگشت به صفحه اصلی</Link>
    </main>
}