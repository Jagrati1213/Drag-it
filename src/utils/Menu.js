import { HomeOutlined, ShareAltOutlined, TeamOutlined, ApartmentOutlined, } from '@ant-design/icons';

export const MenuJson = [
    {
        label: 'Organization',
        key: '1',
        icon: <HomeOutlined />,
        disabled: true,
    },
    {
        label: 'scenario',
        key: '2',
        icon: <ShareAltOutlined />,
    },
    {
        label: 'Teams',
        key: '3',
        icon: <TeamOutlined />,
        disabled: true,
        children: [
            { label: 'Jagrati', key: '3', icon: <ApartmentOutlined /> },
            { label: 'Siddharth', key: '4', icon: <ApartmentOutlined /> },
            { label: 'Maggu', key: '5', icon: <ApartmentOutlined /> },
        ]
    },
];