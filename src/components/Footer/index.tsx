import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'Support by NasTool';

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'jxxghp/nas-tools',
          title: <><GithubOutlined /> jxxghp/nas-tools</>,
          href: 'https://github.com/jxxghp/nas-tools',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> link2fun/another-nastools-web</>,
          href: 'https://github.com/link2fun/another-nastools-web',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
