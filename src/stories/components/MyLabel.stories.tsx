import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
    title:'UI/MyLabel',
    compoonent: MyLabel,
    argTypes: {
        label: { control: 'text' },
        size: { 
            control: {
                type: 'radio',
                options: ['normal', 'h1', 'h2', 'h3']
            }
        },
        allCaps: { 
            control: 'radio',
            options: [ true, false ]
         },
        color: { 
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary']
            }
        },
        fontColor:{ 
            control:'color'
        }
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = ( args ) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
    size:'normal',
    allCaps: false   
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size:'normal',
    allCaps: true    
};

export const Secondary = Template.bind({});
Secondary.args = {
    size:'normal',
    color: 'secondary'
}


export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}


export const CustomFontColor  = Template.bind({})
CustomFontColor.args = {
    fontColor:'#802525',
    size:'h1'
}