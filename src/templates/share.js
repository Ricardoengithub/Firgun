import React from "react"
import {
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

const Share = props => {
  return (
    <div>
      <EmailShareButton url={props.url}>
        <EmailIcon size={20} round={true} />
      </EmailShareButton>
      <TwitterShareButton url={props.url}>
        <TwitterIcon size={20} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={props.url}>
        <FacebookIcon size={20} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={props.url}>
        <WhatsappIcon size={20} round={true} />
      </WhatsappShareButton>
      <FacebookMessengerShareButton url={props.url}>
        <FacebookMessengerIcon size={20} round={true} />
      </FacebookMessengerShareButton>
      <RedditShareButton url={props.url}>
        <RedditIcon size={20} round={true} />
      </RedditShareButton>
    </div>
  )
}

export default Share
