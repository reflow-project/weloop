import { Props as CollectionProps } from 'ui/modules/Previews/Collection';
import { CommentProps } from 'ui/modules/Previews/Comment';
import { Props as CommunityProps } from 'ui/modules/Previews/Community';
import { CommentProps as LikedCommentProps } from 'ui/modules/Previews/LikedComment';

import { FlaggedProps } from 'ui/modules/Previews/FlaggedItem';
import { CommentProps as MainCommentProps } from 'ui/modules/Previews/MainComment';
import { Props as ResourceProps } from 'ui/modules/Previews/Resource';
import { CommentProps as ThreadProps } from 'ui/modules/Previews/Thread';
import { Props as UserProps } from 'ui/modules/Previews/User';
import { getActions } from './activityPreview';
import { ToggleFormik } from './formik';

export function CollectionPreviewProps(
  username = 'Collection',
  isFollowing = true,
  icon = 'https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg',
  summary = 'Example of a collection.'
): CollectionProps {
  return {
    link: { url: '/', external: true },
    displayUsername: username,
    isFollowing,
    icon,
    name: username,
    summary,
    totalResources: 12,
    toggleFollowFormik: ToggleFormik()
  };
}

export function CommunityPreviewProps(
  icon = 'https://images.pexels.com/photos/209728/pexels-photo-209728.jpeg',
  name = 'Community',
  displayUsername = '@community@moodle.net',
  summary = 'Example of a community.'
): CommunityProps {
  return {
    isCreator: false,
    hideActions: false,
    icon,
    name,
    link: { url: '/', external: true },
    displayUsername,
    summary,
    followersCount: 172,
    collectionsCount: 16,
    joined: true,
    toggleJoinFormik: ToggleFormik(),
    threadsCount: 3
  };
}

export function ResourcePreviewProps(
  icon = 'https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg',
  license = null,
  type = 'image',
  isLocal = false,
  name = 'Intro to Spaced Repetition',
  summary = 'I find these resources really useful for introducing the concept of spaced repetition to the students that I teach, especially the ones revising for exams!'
): ResourceProps {
  return {
    icon,
    isLocal,
    license,
    acceptedLicenses: ['license 1', 'license 2', 'license 3'],
    name,
    like: {
      toggleLikeFormik: ToggleFormik(),
      iLikeIt: true,
      totalLikes: 5
    },
    summary,
    link: 'https://www.pinterest.it/topics/spacedrepetition/',
    type,
    isFlagged: false,
    FlagModal: ({ done }) => {
      return <></>;
    },
    // sendToMoodle:null,
    MoodlePanel: ({ done }) => {
      return <></>;
    }
  };
}

export function ResourcePreviewUploadedProps(
  icon = 'https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg',
  license = 'CC0-1.0',
  type = 'image',
  isLocal = true,
  name = 'Intro to Spaced Repetition',
  summary = 'I find these resources really useful for introducing the concept of spaced repetition to the students that I teach, especially the ones revising for exams!'
): ResourceProps {
  return {
    icon,
    isLocal,
    license,
    acceptedLicenses: ['CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0'],
    name,
    like: {
      toggleLikeFormik: ToggleFormik(),
      iLikeIt: true,
      totalLikes: 5
    },
    summary,
    link: 'https://www.pinterest.it/topics/spacedrepetition/',
    type,
    isFlagged: false,
    FlagModal: ({ done }) => {
      return <></>;
    },
    // sendToMoodle:null,
    MoodlePanel: ({ done }) => {
      return <></>;
    }
  };
}

export function UserPreviewProps(
  image = 'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
  bio = `I'm a cool user`,
  username = '@favbooks@abc.com',
  name = '˗ˏˋ Doug Belshaw ˎˊ˗ ',
  isFollowing = true,
  profileUrl = '#'
): UserProps {
  return {
    image,
    bio,
    username,
    profileUrl,
    name,
    isFollowing,
    toggleFollowFormik: ToggleFormik()
  };
}

export function CommentPreviewProps(
  url = '/',
  content = 'After <i>longtime</i> I made a design for <a href="https://moodle.com">Uplabs Music player</a> design challenge. <br/> i hope you all like this. if you <b>like my design</b> dont forgot to Vote in Uplabs ( 25 June ). Vote Here ',
  isFlagged = false
): CommentProps {
  return {
    ...getActions(),
    url,
    content,
    isFlagged
  };
}

export function LikedCommentPreviewProps(
  createdAt = '2018-11-11',
  communityName = 'test',
  communityLink = '1',
  content = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): LikedCommentProps {
  return {
    ...getActions(),
    actor: {
      icon:
        'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
      link: '1',
      name: '˗ˏˋ Doug Belshaw ˎˊ˗ '
    },
    createdAt,
    communityName,
    communityLink,
    content
  };
}

export function MainCommentPreviewProps(
  content = 'Hey everyone, new here and just wondering where the best place would be to go and find more information about how to deploy MoodleNet? Thanks in advance!'
): MainCommentProps {
  return {
    ...getActions(),
    content
  };
}

export function ThreadPreviewProps(
  content = 'Hey everyone, new here and just wondering where the best place would be to go and find more information about how to deploy MoodleNet? Thanks in advance!'
): ThreadProps {
  return {
    link: '/',
    // title:"What do the avatars in the topic list mean?",
    content:
      'Hey everyone, new here and just wondering where the best place would be to go and find more information about how to deploy MoodleNet? Thanks in advance!',
    lastActivity: '2019-11-09',
    totalReplies: '24',
    totalLikes: '17',
    members: [
      'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
      'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
      'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
    ]
  };
}

export function FlaggedItemPreviewProps(
  flag,
  type = '',
  reason = 'Abusive speech'
): FlaggedProps {
  return {
    FlaggedItemContextElement: flag,
    blockUserFormik: ToggleFormik(),
    deleteContentFormik: ToggleFormik(),
    ignoreFlagFormik: ToggleFormik(),
    type,
    reason
  };
}
