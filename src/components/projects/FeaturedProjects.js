import DisplayProject from "../../hooks/DisplayProject";
import bloggingApp from "../../assets/images/bloggingWebApp.jpg";
import bloggingFeatures from "../../data/blogging.json";

export default function FeaturedProjects() {
    return (
        <>
            <div className="projects-wrapper">
                <DisplayProject
                    title="Blogging Webapp"
                    subtitle="Twitter like micro blogging web app"
                    src={bloggingApp}
                    placeholder="bloggingApp"
                    id="collapsible-matrix-todo"
                    alt="Screenshot of The Blogging web app"
                    features={bloggingFeatures}
                    github="https://github.com/aaroosh-07/django-blog"
                    url=""
                    gitHubAriaTitle="BloggingGithub"
                    githubAriaDesc="BloggingGithubDesc"
                    desktopAriaTitle="BloggingDesktop"
                    desktopAriaDesc="BloggingDesktopDesc"
                />
            </div>
        </>
    );
}
