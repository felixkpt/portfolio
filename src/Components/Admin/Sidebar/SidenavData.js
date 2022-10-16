import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const SidenavData = [
    {
        title: 'Dashboard',
        path: '/admin/',
        icon: <DashboardOutlinedIcon />,
    },
    {
        title: 'Posts',
        path: null,
        icon: <PostAddOutlinedIcon />,
        isOpened: true,
        subNav: [
            {
                title: 'All posts',
                path: '/admin/posts',
                icon: <ListAltOutlinedIcon />,
                isOpened: false,
            },
            {
                title: 'Create',
                path: '/admin/posts/create',
                icon: <ListAltOutlinedIcon />,
                isOpened: false,
            }
        ]
    },
    {
        title: 'Portfolio',
        path: '/admin/portfolio',
        icon: <CollectionsBookmarkOutlinedIcon />,
        isOpened: false,
    },
    {
        title: 'Resume',
        path: '/admin/resume',
        icon: <EmojiEventsOutlinedIcon />,
        isOpened: false,
    },
    {
        title: 'Skills',
        path: '/admin/skills',
        icon: <ContactsOutlinedIcon />,
        isOpened: false,
    },
    {
        title: 'Testimonials',
        path: '/admin/testimonials',
        icon: <ContactsOutlinedIcon />,
        isOpened: false,
    },
    {
        title: 'Contacts',
        path: '/admin/contacts',
        icon: <ContactsOutlinedIcon />,
        isOpened: false,
    },

    {
        title: 'Users',
        path: '/admin/users',
        icon: <ContactsOutlinedIcon />,
        isOpened: false,
    },

]