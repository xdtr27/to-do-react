import styles from './TaskContent.module.css'

type TaskContentProps = {
  content: string;
  risky: boolean;
}

export default function TaskContent(props: TaskContentProps){
  const {content, risky} = props;
  
  return (
    <p className={risky? styles.taskContentRisky:styles.taskContent}>{content}</p>
  )
}
