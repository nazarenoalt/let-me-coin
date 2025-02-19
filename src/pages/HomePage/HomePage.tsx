import { Wrapper } from './HomePage.styles.ts';
import { useTranslations } from '../../utils/translate.ts';

const HomePage = () => {
  const { t } = useTranslations({ lang: null });

  return (
    <Wrapper>
      <h1>{t("HomePage.Title")}</h1>
    </Wrapper>
  )
};
export default HomePage;