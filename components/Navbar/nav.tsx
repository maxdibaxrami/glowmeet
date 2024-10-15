import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

const Nav = () => {
    return <Navbar>
    <NavbarBrand>
      <h2 className="font-bold text-inherit">🔥 Glow!</h2>
    </NavbarBrand>

    <NavbarContent as="div" justify="end">
        <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name="Jason Hughes"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
    </NavbarContent>
  </Navbar>
}

export {Nav}