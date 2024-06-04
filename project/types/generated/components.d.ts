import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    Title: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'outline']>;
  };
}

export interface ComponentsDiscription extends Schema.Component {
  collectionName: 'components_components_discriptions';
  info: {
    displayName: 'Discription';
    icon: 'pencil';
  };
  attributes: {
    Description: Attribute.Text;
  };
}

export interface ComponentsImage extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'image';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ComponentsIntro extends Schema.Component {
  collectionName: 'components_components_intros';
  info: {
    displayName: 'intro';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    introTitle: Attribute.String;
    introDesc: Attribute.Text;
    launchpadtitle: Attribute.String;
    keypoint1: Attribute.Text;
    keypoint2: Attribute.Text;
    bgtitle: Attribute.String;
    launchpaddesc: Attribute.RichText;
    LPtitle: Attribute.String;
    LPsubtitle: Attribute.String;
    point1: Attribute.String;
    point2: Attribute.String;
    point3: Attribute.String;
    point4: Attribute.String;
    point5: Attribute.String;
    point6: Attribute.String;
    benefittitle: Attribute.String;
    accgrowth: Attribute.String;
    accpoint: Attribute.String;
    accexpert: Attribute.String;
    accexpertpoint: Attribute.String;
    fundingopp: Attribute.String;
    fundingopppont: Attribute.String;
    validfeed: Attribute.String;
    validfeedpoint: Attribute.String;
    network: Attribute.String;
    networkpoint: Attribute.String;
    successstory: Attribute.String;
    successpoint1: Attribute.String;
    successpoint2: Attribute.String;
    storydesc: Attribute.Text;
    ratingnumber: Attribute.String;
    storyname: Attribute.String;
    storyrole: Attribute.String;
    storydesc2: Attribute.Text;
    ratingnumber2: Attribute.String;
    storyname2: Attribute.String;
    storyrole2: Attribute.String;
    keycomponenttitle: Attribute.String;
    appprocess: Attribute.String;
    curriculum: Attribute.String;
    apptext: Attribute.String;
    curriculumtext: Attribute.String;
    mentorship: Attribute.String;
    mentortext: Attribute.String;
    funding: Attribute.String;
    fundingtext: Attribute.String;
    demo: Attribute.String;
    demotext: Attribute.String;
    tips: Attribute.String;
    research: Attribute.String;
    researchtext: Attribute.String;
    networkactively: Attribute.String;
    nettext: Attribute.String;
    beopen: Attribute.String;
    beopentext: Attribute.String;
    makemost: Attribute.String;
    makemosttext: Attribute.String;
    conclusion: Attribute.String;
    conclusiontext1: Attribute.String;
    conclusiontext2: Attribute.String;
    conclusiontext3: Attribute.String;
  };
}

export interface ComponentsSubtitle extends Schema.Component {
  collectionName: 'components_components_subtitles';
  info: {
    displayName: 'Subtitle';
    icon: 'file';
  };
  attributes: {
    subtitle: Attribute.String;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
    icon: 'strikeThrough';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'components.discription': ComponentsDiscription;
      'components.image': ComponentsImage;
      'components.intro': ComponentsIntro;
      'components.subtitle': ComponentsSubtitle;
      'components.title': ComponentsTitle;
    }
  }
}
