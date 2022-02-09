import clsx from 'clsx'

interface LikeProps extends React.ComponentPropsWithRef<'i'> {
  liked: boolean
}

export const Like: React.VFC<LikeProps> = ({ liked, ...props }) => (
  <i {...props} className={clsx('nes-icon', 'star', !liked && 'is-empty', props.className)} />
)
