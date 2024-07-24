import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import routes from '../../../routes.jsx';

import {Breadcrumbs as Br} from 'react-daisyui';
import {Link} from 'react-router-dom';

export default function Breadcrumbs() {
  const breadcrumbs = useReactRouterBreadcrumbs(routes);
  if (breadcrumbs.length <= 1)
    return  <></>

  return (
      <Br>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
            <li key={match.pathname}>
              {
                breadcrumbs.length-1 === index ? <li>{breadcrumb}</li> : <Link to={match.pathname}>
                  {breadcrumb}
                </Link>
              }
            </li>
        ))}
      </Br>
  );
}