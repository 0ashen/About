import {Head} from '../../components/Head'
import {GeneralLayout} from '../../components/GeneralLayout/GeneralLayout'
import {withTranslation} from '../../i18n'


function PageBooks({t}): JSX.Element {
    return (
        <>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-books:tab-title')}</title>
            </Head>
            <GeneralLayout>
                Books 1234
            </GeneralLayout>
        </>
    )
}

PageBooks.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-books'],
})

export default withTranslation(['common', 'page-books'])(PageBooks)
