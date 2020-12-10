import {Head} from '../../components/Head'
import {Layout} from '../../components/Layout/Layout'
import {withTranslation} from '../../i18n'


function PageHomeAboutMe({t}): JSX.Element {
    return (
        <>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-about-me-contacts-skills:tab-title')}</title>
            </Head>
            <Layout>
                <div>
                    <div>
                        <mark>Languages:</mark>
                        <br/>
                        <mark><small>Fluent:</small></mark>
                        <p>
                            <span>java script</span>,
                            <span>html</span>,
                            <span>css</span>
                        </p>
                        <mark><small>Proficient:</small></mark>
                        <p>
                            <span>typeScript</span>
                        </p>
                        <mark><small>Familiar:</small></mark>
                        <p>
                            <span>php</span>,
                            <span>rust</span>
                        </p>
                        <mark>Preprocessors:</mark>
                        <p>
                            <span>sass</span>,
                            <span>scss</span>,
                            <span>pug(jade)</span>
                        </p>
                    </div>
                    <div>
                        <mark>Libraries:</mark>
                        <p>
                            <span>ReactJS(Fluent),</span>
                            <span>NextJs(Proficient),</span>
                            <span>AngularJS(Familiar),</span>
                            <span>Rxjs,</span>
                            <span>Ngrx,</span>
                            <span>NodeJS(Familiar),</span>
                            <span>Redux,</span>
                            <span>Webpack,</span>
                            <span>Babel,</span>
                            <span>jQuery,</span>
                            <span>GraphQL,</span>
                            <span>Axios,</span>
                            <span>Styled-components,</span>
                            <span>Jest,</span>
                            <span>Tars,</span>
                            <span>Gsap,</span>
                            <span>Material-IU,</span>
                            <span>Leaflet,</span>
                            <span>GoogleMap</span>
                        </p>

                    </div>
                    <div>
                        <mark>Devops:</mark>
                        <p>
                            <span>nginx</span>,
                            <span>pm2</span>,
                            <span>apache</span>,
                            <span>docker</span>,
                            <span>bash</span>,
                            <span>git actions</span>,
                            <span>CI/CD</span>,
                            <span>ubuntu</span>,
                            <span>arch</span>
                        </p>
                    </div>
                    <div>
                        <mark>Workflow:</mark>
                        <p>
                            <span>git</span>,
                            <span>git flow</span>,
                            <span>webstorm</span>,
                            <span>prettier</span>
                        </p>
                    </div>
                    <div>
                        <mark>Techniques:</mark>
                        have strong skills in cross-browser/cross-device/adaptive/responsive html layout and web
                        animations(canvas, svg, css)
                        oop, fp
                    </div>

                </div>
            </Layout>
        </>
    )
}

PageHomeAboutMe.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-about-me-contacts-skills'],
})

export default withTranslation(['common', 'page-about-me-contacts-skills'])(PageHomeAboutMe)
