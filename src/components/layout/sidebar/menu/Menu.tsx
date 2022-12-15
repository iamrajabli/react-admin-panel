import { menu } from "../../../../constants/menu";

import MenuItem from './MenuItem';
import { IMenu } from './Menu.props';

const Menu = () => {
    return (
        <ul>
            {menu.map((item: IMenu, i: number): JSX.Element => (
                <MenuItem key={i} {...item} />
            ))}
        </ul>
    );
};

export default Menu;