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
      'components.subtitle': ComponentsSubtitle;
      'components.title': ComponentsTitle;
    }
  }
}
