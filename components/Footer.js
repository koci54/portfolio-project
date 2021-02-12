import "../assets/scss/Footer.scss";
import { Button } from '@material-ui/core'

const Footer = () => (
    <div className="Footer">
     <Button
            href="https://twitter.com/PetrKocian"
            target="_blank"
            color="inherit"
            className='twitterlink'>
        
            <i className={"twittericon" + " fab fa-twitter"} />
    </Button>
    <Button
            color="inherit"
            href="https://www.instagram.com/koci54/"
            target="_blank"
            className="instagramlink"
          >
            <i className={"instagramicon" + " fab fa-instagram"} />
    </Button>
     <Button
            color="inherit"
            href="https://github.com/koci54"
            target="_blank"
            className="githublink"
          >
            <i className={"githubicon" + " fab fa-github"} />
          </Button>
          <Button
            color="inherit"
            href="https://gitlab.com/zen.petr"
            target="_blank"
            className="gitlablink"
          >
            <i className={"gitlabicon" + " fab fa-gitlab"} />
          </Button>
          <Button
            color="inherit"
            href="https://www.linkedin.com/in/petrkocian1/"
            target="_blank"
            className="instagramlink"
          >
            <i className={"linkedinicon" + " fab fa-linkedin"} />
    </Button>

    
    </div>
  )

export default Footer;
