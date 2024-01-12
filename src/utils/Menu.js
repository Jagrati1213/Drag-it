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
            { label: 'Jagrati', key: '3.1', icon: <ApartmentOutlined /> },
            { label: 'Siddharth', key: '3.2', icon: <ApartmentOutlined /> },
            { label: 'Maggu', key: '3.3', icon: <ApartmentOutlined /> },
        ]
    },
];