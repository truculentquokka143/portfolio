import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-basic">
            <div className="footer-contents">

                <div className="contact">
                    <p>👋🏼 Say hi: <a href="https://google.com">Email</a> / <a href="https://google.com">LinkedIn</a></p>
                </div>

                <div className="copyright">
                    <p>Made with &#128151; in Providence</p>
                    <p>© 2022 truculentquokka</p>
                </div>

                <div className="back-to-top">
                    <a className="back-to-top-contents"
                        onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}>Back to top ⬆️
                    </a>
                </div>

            </div>
        </div>
    )
}