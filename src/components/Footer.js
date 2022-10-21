import React from "react"

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-block">
                <div className="footer-title">Location</div>
                <div className="footer-content">
                    <a
                        href="https://www.google.com/maps/place/Inha+University+in+Tashkent/@41.338525,
                        69.3323413,17z/data=!4m5!3m4!1s0x38aef48a8ed4d0e9:
                        0x3772abeffc72e7b8!8m2!3d41.338525!4d69.33453" className="simple-link">
                        A301,
                        INHA University, <br/> Tashkent city, Uzbekistan</a>
                </div>
            </div>
            <div className="footer-block">
                <div className="footer-title">Contacts</div>
                <div className="footer-content">
                    Mobile: <a target="_self" href="tel:+998933228572" className="simple-link">+998933228572</a>
                    <br/>Email: <a href="mailto:mlcommunity.uz@gmail.com" className="simple-link">
                    mlcommunity.uz@gmail.com</a>
                </div>
            </div>
            <div className="footer-block follow-us" >
                <div className="footer-title">Follow Us</div>
                <div className="footer-content">
                    <a href="https://github.com/0or1-ML">
                        <img src="img/icons/github.png" alt="github"/>
                        {/*<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <g id="github-svg">*/}
                        {/*        <path fill="none" d="M0 0h24v24H0z"/>*/}
                        {/*        <path fillRule="nonzero"*/}
                        {/*              d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/>*/}
                        {/*    </g>*/}
                        {/*</svg>*/}
                    </a>
                    <a href="https://www.linkedin.com/company/81316541">
                        <img src="img/icons/linkedin.png" alt="linkedin"/>
                        {/*<svg viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <g id="linkedin-svg">*/}
                        {/*        <path*/}
                        {/*            d='M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z'/>*/}
                        {/*        <path*/}
                        {/*            d='M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z'/>*/}
                        {/*    </g>*/}
                        {/*</svg>*/}
                    </a>
                    <a href="https://www.youtube.com/channel/UC3UNR1M_BP3diQMsKLmsQfQ">
                        <img src="img/icons/youtube.png" alt="youtube"/>
                        {/*<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <g id="youtube-svg">*/}
                        {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M10.3859 8.35691C10.1542 8.21789 9.86561 8.21425 9.63048 8.34738C9.39534 8.48051 9.25 8.72983 9.25 9.00003V15C9.25 15.2702 9.39534 15.5196 9.63048 15.6527C9.86561 15.7858 10.1542 15.7822 10.3859 15.6432L15.3859 12.6432C15.6118 12.5076 15.75 12.2635 15.75 12C15.75 11.7366 15.6118 11.4925 15.3859 11.3569L10.3859 8.35691ZM13.5423 12L10.75 13.6754V10.3247L13.5423 12Z"*/}
                        {/*        />*/}
                        {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                        {/*              d="M17.0307 4.64131C13.682 4.37933 10.318 4.37933 6.96938 4.64131L4.72868 4.81661C3.36612 4.92321 2.25143 5.94442 2.02619 7.29246C1.50543 10.4092 1.50543 13.5908 2.02619 16.7076C2.25143 18.0556 3.36612 19.0768 4.72868 19.1834L6.96938 19.3587C10.318 19.6207 13.682 19.6207 17.0307 19.3587L19.2714 19.1834C20.6339 19.0768 21.7486 18.0556 21.9739 16.7076C22.4946 13.5908 22.4946 10.4092 21.9739 7.29246C21.7486 5.94442 20.6339 4.92321 19.2714 4.81661L17.0307 4.64131ZM7.08638 6.13674C10.3572 5.88085 13.6429 5.88085 16.9137 6.13674L19.1544 6.31204C19.83 6.3649 20.3827 6.87125 20.4944 7.53966C20.9878 10.4928 20.9878 13.5073 20.4944 16.4604C20.3827 17.1288 19.83 17.6352 19.1544 17.688L16.9137 17.8633C13.6429 18.1192 10.3571 18.1192 7.08638 17.8633L4.84568 17.688C4.17007 17.6352 3.61736 17.1288 3.50568 16.4604C3.01227 13.5073 3.01227 10.4928 3.50568 7.53966C3.61736 6.87125 4.17007 6.3649 4.84568 6.31204L7.08638 6.13674Z"*/}
                        {/*        />*/}
                        {/*    </g>*/}
                        {/*</svg>*/}
                    </a>
                    <a href="https://www.instagram.com/iut__ml/">
                        <img src="img/icons/instagram.png" alt="instagram"/>
                        {/*<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <g id="instagram-svg">*/}
                        {/*        <path fill="none" d="M0 0h24v24H0z"/>*/}
                        {/*        <path fillRule="nonzero"*/}
                        {/*              d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>*/}
                        {/*    </g>*/}
                        {/*</svg>*/}
                    </a>
                    <a href="https://t.me/ml_iut_club">
                        <img src="img/icons/telegram.png" alt="telegram"/>
                        {/*<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <g id="telegram-svg">*/}
                        {/*        <path*/}
                        {/*            d="M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"/>*/}
                        {/*    </g>*/}
                        {/*</svg>*/}
                    </a>
                </div>
            </div>
            <div className="footer-block">Copyright 2022, [0 | 1] ML Organization</div>
            </footer>
    )
}