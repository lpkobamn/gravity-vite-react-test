import { Drawer, DrawerItem } from '@gravity-ui/navigation';
import { useLayoutContext, useViewportSize, Button, Popup, Flex, TextInput, Text } from '@gravity-ui/uikit';
import React from 'react';


function BrandFilterHOC() {
    const buttonRef = React.useRef(null);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

    const { theme } = useLayoutContext();
    const { width = 0 } = useViewportSize();

    const handleFilterToggle = () => {
        if (width < theme.breakpoints.m) {
            setIsPopoverOpen(prev => !prev);
        } else {
            setIsDrawerVisible(prev => !prev);
        }
    };

    return (
        <>
            <Button ref={buttonRef} onClick={handleFilterToggle}>
                Выберите бренд
            </Button>

            {/* Popover for smaller screens */}
            <Popup anchorRef={buttonRef} open={isPopoverOpen} placement="bottom">
                <BrandFilter />
            </Popup>

            {/* Drawer for larger screens */}
            <Drawer>
                <DrawerItem id="brand-filter-drawer" visible={isDrawerVisible} direction="right">
                    <BrandFilter />
                </DrawerItem>
            </Drawer>
        </>
    );
}

function BrandFilter() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const listArray = Array.from({ length: 15 }, (_, i) => i + 1);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredList = listArray.filter(item =>
        item.toString().includes(searchTerm)
    );

    return (
        <Flex direction="column" className="p-4" gap={1}>
            <Flex direction="column" gap={1}>
                <Text variant="subheader-2">Производитель</Text>
                <TextInput
                    placeholder="Найти"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </Flex>

            <Flex direction="column" overflow="auto" maxHeight={150} className="scrollbar">
                {filteredList.length > 0 ? (
                    filteredList.map(item => (
                        <div key={item}>{item}</div>
                    ))
                ) : (
                    <Text variant="body-2">Ничего не найдено</Text>
                )}
            </Flex>
        </Flex>
    );
}

export default BrandFilterHOC;
