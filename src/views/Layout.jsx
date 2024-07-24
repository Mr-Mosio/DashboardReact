import {Outlet} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../context/theme.context.jsx';
import Breadcrumbs from './Components/Base/Breadcrumbs.jsx';
import {Avatar, Dropdown, Mask} from 'react-daisyui';
import {Logout, ProfileCircle} from 'iconsax-react';
import Sidebar from './Components/Base/Sidebar.jsx';

export default function Layout() { const {t} = useTranslation()
  const {title, setTitle} = useTheme()
  setTitle("Dashboard")

  return (
      <section className="flex h-screen">
        <Sidebar />

        <div className="grow ">
          <div className="flex items-center justify-between px-5 py-3 bg-base-100">
            <div className="">
              <h1 className="text-2xl font-bold">{t(title)}</h1>
              <Breadcrumbs />
            </div>

            <div>
              <Dropdown className="w-52" end={true}>
                <Dropdown.Toggle className="cursor-pointer" button={false} >
                  <div className="flex items-center gap-2">
                    <Avatar size={'sm'} innerClassName={Mask.className({
                      variant: 'squircle',
                    })}  src="/assets/images/users/default.png"></Avatar>

                    <div>
                      <div>mostafa fallahi</div>
                      <div className="text-sm font-light text-base-content/80">09923444265</div>
                    </div>


                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="min-w-52">
                  <Dropdown.Item>
                    <ProfileCircle className="w-5 h-5" />
                    <span>Account</span>
                  </Dropdown.Item>
                  <Dropdown.Item className="text-error">
                    <Logout className="w-5 h-5" />
                    <span>Logout</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

          </div>

          <div className="px-5">
            <Outlet />
          </div>

        </div>

      </section>
  );
}