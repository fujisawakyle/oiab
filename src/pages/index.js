import React, { Component } from 'react'
import Media from 'react-media';

import Video from '../components/Video';
import SectionHero from '../components/SectionHero';
import Quote from '../components/Quote';
import TitleWithChevron from '../components/TitleWithChevron';
import MediaSection from '../components/MediaSection';
import DynamicTitle from '../components/DynamicTitle';
import FactsModal from '../components/burgerMenu/FactsModal';
import PetitionModal from '../components/burgerMenu/PetitionModal';

import StyledFacts from '../blocks/facts';
import StyledSection from '../blocks/StyledSection';
import StyledContentContainer from '../blocks/StyledContentContainer';
import StyledColToRow from '../blocks/StyledColToRow';
import StyledTriptych from '../blocks/StyledTriptych';
import StyledLogoList from '../blocks/StyledLogoList';
import StyledVideoContainer from '../blocks/StyledVideoContainer';

import { H1, H3, P, A, NAVANCHOR, HR, BUTTON, MODALBUTTON, FlexCol, FlexColToRow, SpanHighlight, FOOTNOTELINK, FlexRow, CommitmentLogo, ActionIcon } from '../elements';

import { fromTheme } from '../css_config/mixins';

import heroData from '../data/hero/hero.json';
import videoData from '../data/video/video.json';
import factsData from '../data/facts/facts.json';
import petitionData from '../data/petition/petition.json';
import actionData from '../data/action/action.json';
import industryData from '../data/industry/industry.json';
import progressData from '../data/progress/progress.json';
import mediaData from '../data/media/media.json';

import bredSVGSm from '../assets/svg/bred-notext.svg';
import bredSVGLg from '../assets/svg/bred.svg';
import trappedSVG from '../assets/svg/trapped2.svg';
import designedSVG from '../assets/svg/designed2.svg';
import mainBgSm from '../assets/img/OinaB-hero-sm.jpg';
import mainBgLg from '../assets/img/OinaB-hero-lg.jpg';
import petitionBgSm from '../assets/img/OinaB-image2-sm.jpg';
import petitionBgLg from '../assets/img/OinaB-image2-lg.jpg';
import actionBgSm from '../assets/img/OinaB-image3-sm.jpg';
import actionBgLg from '../assets/img/OinaB-image3-lg.jpg';
import industryBgSm from '../assets/img/OinaB-image4-sm.jpg';
import industryBgLg from '../assets/img/OinaB-image4-lg.jpg';
import progressBgSm from '../assets/img/OinaB-image5-sm.jpg';
import progressBgLg from '../assets/img/OinaB-image5-lg.jpg';
import foodStandardsAgencyLogo from '../assets/logos/food-standards-agency-logo-grey.png';
import wattPoultryUSALogo from '../assets/logos/watt-poultry-usa-logo-grey.jpg';
import poultrySiteLogo from '../assets/logos/poultry-site-logo-grey.png';
import efsaLogo from '../assets/logos/EFSA-logo-grey.png';
import poultryWorldLogo from '../assets/logos/poultryworld-logo-grey.png';
import fanSVG from '../assets/svg/FAN.svg';
import volunteerSVG from '../assets/svg/volunteer.svg';
import askItalianLogo from '../assets/logos/commitments/ask-italian-logo.png';
import danoneLogo from '../assets/logos/commitments/DANONE_LOGO.png';
import cocoLogo from '../assets/logos/commitments/logococo.png';
import mAndSLogo from '../assets/logos/commitments/mark-and-spencer.png';
import nestleLogo from '../assets/logos/commitments/nestle-horiz.svg';
import unileverLogo from '../assets/logos/commitments/unilever-orig.svg';
import zizziLogo from '../assets/logos/commitments/zizzi-logo.png';
import pretLogo from '../assets/logos/commitments/pret.jpg';
import prezzoLogo from '../assets/logos/commitments/prezzo.gif';
import factsheetPDF from '../assets/pdf/OinaB-web-styles.pdf';
import media from '../css_config/media';

export default class IndexPage extends Component {

  renderHero = () => {
    return (
      <div>
        <SectionHero
          isMain
          backgroundSm={mainBgSm}
          backgroundLg={mainBgLg}
          header1={heroData.header1}
          highlighted={heroData.name}
          header2={heroData.header2}
        />
        <StyledContentContainer>
          <P> {heroData.body} </P>
        </StyledContentContainer>
        <HR />
      </div>
    )
  }

  renderVideo = () => {
    return (
      <StyledVideoContainer>
        <NAVANCHOR name="video" />
        <Video videoURL={`https://www.youtube.com/embed/${videoData.urlID}?rel=0&amp;showinfo=0`} />
        <HR />
      </StyledVideoContainer>
    )
  }

  renderFacts = () => {
    return (
      <div>
        <NAVANCHOR name="facts" />
        <StyledSection
          backgroundColor={fromTheme("beige")}
          className="FactsSection"
        >
          <a name="learn" />
          <DynamicTitle title={factsData.header1} chevronColor={fromTheme("beige")} />
          <StyledColToRow alignItems={"flex-start"}>
            <StyledTriptych mobileDirection={"row"}>
              <Media query="(max-width: 768px">
                {matches =>
                  matches ? (
                    <StyledFacts.SVG path={bredSVGSm} />
                  ) : (
                      <StyledFacts.SVG path={bredSVGLg} />
                    )
                }
              </Media>
              <StyledFacts.Text><H3>{factsData.graphic1PlainText}</H3><H1><SpanHighlight backgroundColor={fromTheme("black")}>{factsData.graphic1HighlightText}</SpanHighlight></H1></StyledFacts.Text>
              <StyledFacts.DesktopText>
                {factsData.graphic1BodyText}
              </StyledFacts.DesktopText>
            </StyledTriptych>
            <StyledTriptych
              mobileDirection={"row"}
              backgroundColor={fromTheme("lightBeige")}
            >
              <StyledFacts.SVG style={{ padding: ".5em 1em" }} path={trappedSVG} />
              <StyledFacts.TextInvertOrder><H1><SpanHighlight backgroundColor={fromTheme("black")}>{factsData.graphic2HighlightText}</SpanHighlight></H1><H3>{factsData.graphic2PlainText}</H3></StyledFacts.TextInvertOrder>

              <StyledFacts.DesktopText>
                {factsData.graphic2BodyText}
              </StyledFacts.DesktopText>

            </StyledTriptych>
            <StyledTriptych mobileDirection={"row"} >
              <StyledFacts.SVG path={designedSVG} />
              <StyledFacts.Text><H3>{factsData.graphic3PlainText}</H3><H1><SpanHighlight backgroundColor={fromTheme("black")}>{factsData.graphic3HighlightText}</SpanHighlight></H1></StyledFacts.Text>
              <StyledFacts.DesktopText>
                {factsData.graphic3BodyText}
              </StyledFacts.DesktopText>
            </StyledTriptych>
          </StyledColToRow>
          <FactsModal className="factsmodal"
            modalButton={<MODALBUTTON className="modalbutton">{factsData.buttonText}</MODALBUTTON>}
          />
          <br />
          <StyledSection
            backgroundColor={fromTheme("white")}
            displayMobile={"none"}
          >
            <StyledContentContainer paddingTop={"2em"}>
              <FlexRow alignItems={"flex-start"}>
                <FlexCol height={"450px"} justifyContent={"flex-start"}>
                  <StyledContentContainer>
                    <P>{factsData.modalMainBody1Text}</P>
                    <P>{factsData.modalMainBody2Text}</P>
                  </StyledContentContainer>
                  <BUTTON marginTop={"auto"} href={factsData.modalButton1Link} target="_blank">{factsData.modalButton1Text}</BUTTON>
                </FlexCol>
                <FlexCol height={"450px"} justifyContent={"flex-start"}>
                  <StyledContentContainer>
                    <P>{factsData.modalMainBody3Text}</P>
                  </StyledContentContainer>
                  <BUTTON marginTop={"auto"} href={factsData.modalButton2Link} target="_blank">{factsData.modalButton2Text}</BUTTON>
                </FlexCol>

              </FlexRow>
            </StyledContentContainer>
          </StyledSection>
        </StyledSection>
        <HR />
      </div >
    )
  }

  renderPetition = () => {
    return (
      <div>
        <NAVANCHOR name="petition" />
        <StyledSection className="PetitionSection">
          <SectionHero
            backgroundSm={petitionBgSm}
            backgroundLg={petitionBgLg}
            header1={petitionData.header1}
            highlighted={petitionData.highlighted}
            header2={petitionData.header2}
          />
          <StyledContentContainer>
            <StyledContentContainer>
              <P>{petitionData.body1}</P>
              <P weight="bold">{petitionData.body2}</P>
            </StyledContentContainer>
            <Media query="(max-width:768px)">
              {matches =>
                matches ? (
                  <FlexCol>
                    <BUTTON href={petitionData.petitionLink} target="_blank">{petitionData.buttonText}</BUTTON>
                    <PetitionModal
                      modalButton={<FOOTNOTELINK>{petitionData.petitionLinkText}</FOOTNOTELINK>}
                    />
                  </FlexCol>
                ) : (
                    <FlexCol
                      backgroundColor={fromTheme("lightBeige")}
                      padding={"1.5em"}
                    >
                      <P weight={"bold"}>{petitionData.petitionText}</P>
                      <BUTTON href={petitionData.petitionLink} target="_blank">{petitionData.buttonText}</BUTTON>
                    </FlexCol>
                  )
              }
            </Media>
          </StyledContentContainer>
        </StyledSection>
        <HR />
      </div>
    )
  }

  renderAction = () => {
    return (
      <div>
        <NAVANCHOR name="action" />
        <StyledSection
          backgroundColor={fromTheme("beige")}
          className="ActionSection"
        >
          <SectionHero
            backgroundSm={actionBgSm}
            backgroundLg={actionBgLg}
            header1={actionData.header1}
            highlighted={actionData.highlighted}
            header2={actionData.header2}
            chevronColor={fromTheme("beige")}
          />
          <StyledColToRow alignItems={"flex-start"}>
            <StyledTriptych justifyContent={"flex-start"} height={"30em"}>
              <H3>{actionData.firstActionHeader}</H3>
              <ActionIcon src={actionData.companyLogo} />
              <StyledContentContainer>

                <P color={fromTheme("black")} align={"center"}>{actionData.firstActionText}</ P>
              </StyledContentContainer>
              <BUTTON marginTop={"auto"} href={actionData.firstButtonLink} target="_blank">{actionData.firstButtonText}</BUTTON>
            </StyledTriptych>
            <StyledTriptych justifyContent={"flex-start"} height={"30em"} backgroundColor={fromTheme("lightBeige")}>

              <H3>{actionData.secondActionHeader}</H3>
              <ActionIcon
                src={fanSVG}
              />
              <StyledContentContainer>

                <P color={fromTheme("black")} align={"center"}>{actionData.secondActionText}</P>
              </StyledContentContainer>
              <BUTTON marginTop={"auto"} href={actionData.secondButtonLink}>{actionData.secondButtonText}</BUTTON>

            </StyledTriptych>
            <StyledTriptych justifyContent={"flex-start"} height={"30em"}>

              <H3>{actionData.thirdActionHeader}</H3>
              <ActionIcon src={volunteerSVG} />
              <StyledContentContainer>

                <P color={fromTheme("black")} align={"center"}>{actionData.thirdActionText}</P>
              </StyledContentContainer>
              <BUTTON marginTop={"auto"} href={actionData.thirdButtonLink} target="_blank">{actionData.thirdButtonText}</BUTTON>

            </StyledTriptych>
          </StyledColToRow>
        </StyledSection>
        <HR />
      </div>
    )
  }

  renderIndustry = () => {
    return (
      <div>
        <NAVANCHOR name="industry" />
        <StyledSection
          backgroundColor={fromTheme("white")}
          className="IndustrySection"
        >
          <SectionHero
            backgroundSm={industryBgSm}
            backgroundLg={industryBgLg}
            header1={industryData.header1}
            highlighted={industryData.highlighted}
            header2={industryData.header2}
          />
          <StyledContentContainer>
            <FlexColToRow alignItems={"flex-start"}>
              <FlexCol>
                <StyledContentContainer yPadding={"0"}>
                  <Quote
                    quote={industryData.quote1}
                    logo={foodStandardsAgencyLogo}
                  />
                  <Quote
                    quote={industryData.quote2}
                    logo={wattPoultryUSALogo}
                  />
                  <Quote
                    quote={industryData.quote3}
                    logo={poultrySiteLogo}
                  />
                </StyledContentContainer>
              </FlexCol>
              <FlexCol modifiers={['spaceBetweenJCDesktop']}>
                <StyledContentContainer yPadding={"0"}>
                  <Quote
                    quote={industryData.quote4}
                    logo={efsaLogo}
                  />
                  <Quote
                    quote={industryData.quote5}
                    logo={poultryWorldLogo}
                  />
                </StyledContentContainer>
              </FlexCol>
            </FlexColToRow>
          </StyledContentContainer>
        </StyledSection>
        <HR />
      </div>
    )
  }

  renderProgress = () => {
    return (
      <StyledSection className="ProgressSection">
        <NAVANCHOR name="progress" />
        <SectionHero
          backgroundSm={progressBgSm}
          backgroundLg={progressBgLg}
          header1={progressData.header1}
          highlighted={progressData.highlighted}
          header2={progressData.header2}
        >
        </SectionHero>
        <StyledContentContainer>
          <P>{progressData.body}</P>
        </StyledContentContainer>
        <StyledContentContainer topPadding={"0"}>
          <StyledLogoList>
            <li>
              <CommitmentLogo src={askItalianLogo} />
            </li>
            <li>
              <CommitmentLogo src={cocoLogo} />
            </li>
            <li>
              <CommitmentLogo src={nestleLogo} />
            </li>
            <li>
              <CommitmentLogo src={danoneLogo} />
            </li>
            <li>
              <CommitmentLogo src={mAndSLogo} />
            </li>
            <li>
              <CommitmentLogo src={prezzoLogo} />
            </li>
            <li>
              <CommitmentLogo src={unileverLogo} />
            </li>
            <li>
              <CommitmentLogo src={zizziLogo} />
            </li>
            <li>
              <CommitmentLogo src={pretLogo} />
            </li>
          </StyledLogoList>
        </StyledContentContainer>
      </StyledSection>
    )
  }

  renderMedia = () => {
    return (
      <StyledSection
        className="MediaSection"
        backgroundColor={fromTheme("lightBeige")}
      >
        <NAVANCHOR name="media" />
        <TitleWithChevron
          title={mediaData.title}
          chevronColor={fromTheme("lightBeige")}
        />
        <StyledContentContainer>
          <P color={fromTheme("black")}>{mediaData.body1} <span>{mediaData.contactName} {mediaData.body2} <A href={`tel:${mediaData.contactPhone}`}>{mediaData.contactPhone}</A> {mediaData.body3} <A href={`mailto:${mediaData.contactEmail}`}>{mediaData.contactEmail}</A></span></P>
        </StyledContentContainer>
        <MediaSection
          header1={mediaData.section1Header}
          highlight={mediaData.section1Highlight}
          highlightColor={fromTheme("black")}
          link1={mediaData.section1Link1}
          link1Text={mediaData.section1Link1Text}
          link2={mediaData.section1Link2}
          link2Text={mediaData.section1Link2Text}
          link3={mediaData.section1Link3}
          link3Text={mediaData.section1Link3Text}
        />
        <MediaSection
          backgroundColor={fromTheme("lightBeige")}
          header1={mediaData.section2Header}
          highlight={mediaData.section2Highlight}
          highlightColor={fromTheme("black")}
          link1={mediaData.section2Link1}
          link1Text={mediaData.section2Link1Text}
          link2={mediaData.section2Link2}
          link2Text={mediaData.section2Link2Text}
          link3={mediaData.section2Link3}
          link3Text={mediaData.section2Link3Text}
        />
        <MediaSection
          isButtons
          header1={mediaData.section3Header}
          highlight={mediaData.section3Highlight}
          highlightColor={fromTheme("black")}
          link1={mediaData.section3Button1Link}
          link1Text={mediaData.section3Button1Text}
          link2={mediaData.section3Button2Link}
          link2Text={mediaData.section3Button2Text}
          link3={mediaData.section3Button3Link}
          link3Text={mediaData.section3Button3Text}
        />
      </StyledSection >
    )
  }

  render() {
    return (
      <div>
        {this.renderHero()}
        {this.renderVideo()}
        {this.renderFacts()}
        {this.renderPetition()}
        {this.renderAction()}
        {this.renderIndustry()}
        {this.renderProgress()}
        {this.renderMedia()}
      </div>
    )
  }

  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

}


// mailchimp petition
// state = {
//     EMAIL: '',
//     FNAME: '',
//     LNAME: ''
// }

// renderHero = () => {
//   return (
//     <div>
//       <StyledHero.Image>
//         <H1>{heroData.header1} <SpanHighlight modifiers={['orangeBg']}> {heroData.name}</SpanHighlight></H1>
//         <H2>{heroData.header2}</H2>
//         <Chevron />
//       </StyledHero.Image>
//       <StyledContentContainer>
//         <P> {heroData.body} </P>
//       </StyledContentContainer>
//       <HR />
//     </div>
//   )
// }


// <div style={{
      //   width: '100vw', height: '100vh', display: 'flex',
      //   justifyContent: 'center',
      //   flexDirection: 'column',
      //   alignItems: 'center'
      // }}>
      //   <img src={'http://placekitten.com/200/200'} style={{ margin: '0 auto' }} />
      //   <div style={{ maxWidth: '650px', width: '100%' }} id="mc_embed_signup">
      //     <form action="https://thehumaneleague.us4.list-manage.com/subscribe/post?u=0eb00a57671345c9ae2cd91a2&amp;id=f5491f61bb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      //       <div id="mc_embed_signup_scroll">

      //         <h2>Call on The British Poultry Council (BPC), the UK's national trade group representing the poultry meat industry, to back the Better Chicken Commitment standards.</h2>
      //         <div class="mc-field-group">
      //           <label for="mce-EMAIL">Email Address </label>
      //           <input onChange={this.handleChange} type="email" value={this.state.EMAIL} name="EMAIL" class="required email" id="mce-EMAIL" />
      //         </div>
      //         <div class="mc-field-group">
      //           <label for="mce-FNAME">First Name </label>
      //           <input onChange={this.handleChange} type="text" value={this.state.FNAME} name="FNAME" class="" id="mce-FNAME" />
      //         </div>
      //         <div class="mc-field-group">
      //           <label for="mce-LNAME">Last Name </label>
      //           <input onChange={this.handleChange} type="text" value={this.state.LNAME} name="LNAME" class="" id="mce-LNAME" />
      //         </div>
      //         <div id="mce-responses" class="clear">
      //           <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
      //           <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
      //         </div>
      //         <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
      //           <input type="text" name="b_0eb00a57671345c9ae2cd91a2_6fa6866a54" tabindex="-1" value="" />
      //         </div>
      //         <div class="clear">
      //           <input type="submit" value="Sign" name="sign" id="mc-embedded-subscribe" class="button" />
      //         </div>
      //       </div>
      //     </form>
      //   </div>