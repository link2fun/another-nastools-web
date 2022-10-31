import { PageContainer } from '@ant-design/pro-components';
import SettingLibraryItem from '@/pages/Setting/Library/components/SettingLibraryItem';

const SettingLibraryIndex = () => {
  return (
    <PageContainer breadcrumbRender={false} waterMarkProps={{ content: '' }}>
      <div>
        <SettingLibraryItem />
        <SettingLibraryItem />
        <SettingLibraryItem />
        <SettingLibraryItem />
      </div>
    </PageContainer>
  );
};

export default SettingLibraryIndex;
