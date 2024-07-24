import {useMemo, useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {clsx} from 'clsx';
import {Menu, Toggle} from 'react-daisyui';
import {Link, useLocation} from 'react-router-dom';
import menus from '../../../menus.jsx';
import {Moon, Sun1} from 'iconsax-react';
import Logo from './Logo.jsx';
import {useTranslation} from 'react-i18next';

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(true)

  const menuItems = useMemo(() => {
    return menus;
  }, [menus])


  return (
      <div
          className={twMerge("shrink-0 flex flex-col text-primary-content w-72 group bg-gradient-to-tr from-primary to-primary-focus rounded-e-3xl p-5", clsx({
            "active": isOpen,
          }))}>

        <div className="h-full overflow-y-auto test">
          <Menu size="lg" className="p-0">
            {
              menuItems?.map((item, index) => <MenuItem key={index} item={item} /> )
            }
          </Menu>

        </div>

        <div className="shrink-0 pt-5">
          <div className="flex justify-center items-center gap-3">
            <Sun1 className="w-7 h-7"/>
            <Toggle color="primary" />
            <Moon className="w-7 h-7"/>
          </div>
          <Logo white={true} className={"w-36 mt-4 mx-auto"} />
        </div>


      </div>
  );
}


const getChildren = (list) => {
  return list.map(item => {
    let items = []
    if (item.children) {
      items = getChildren(item.children)
    }
    return [
        ...items,
        ...(item.link ? [item.link] : []),
    ]
  }).flat()
}
const MenuItem = ({item: {Icon ,...item}}) => {
  const {t} = useTranslation()
  const location = useLocation()

  const active = useMemo(() => {
    return item.link === location.pathname
  }, [location,item])

  const parentActive = useMemo(() => {
    if (item.children) {
      return !!getChildren(item.children ?? []).find(x => x === location.pathname)
    }
    return false
  }, [])

  if (item.section)
    return  <>
      <Menu.Title className="text-primary-content/50 flex-row items-center gap-2">
        <div className="h-0.5 bg-primary-content/20 grow"></div>
        <span>{t(item.section)}</span>
        <div className="h-0.5 bg-primary-content/20 grow"></div>
      </Menu.Title>
      {item.children?.map(item => <MenuItem item={item} /> )}
    </>

  if (item.children)
    return <Menu.Item>
      <Menu.Details open={parentActive} label={<div className="flex gap-2 items-center">
        {Icon && <Icon className="w-6 h-6" />}
        <span>{t(item.title)}</span>
      </div>}>
        {item.children?.map(item => <MenuItem item={item} />)}
      </Menu.Details>
    </Menu.Item>

  return  <Menu.Item>
    <Link to={item.link} className={
      twMerge(" active:!bg-primary-focus active:!text-primary-content focus:bg-primary-focus focus:text-primary-content", clsx({
        "bg-primary-focus": active
      }))
    }>
      {Icon && <Icon className="w-6 h-6" />}
      <span>{t(item.title)}</span>
    </Link>
  </Menu.Item>
}