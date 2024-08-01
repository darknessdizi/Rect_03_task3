export interface TypingProps {
  content: {
    type: string,
    time: string,
    id: string,
    from: { name: string },
    text?: string,
  }
}

export type ListMessages = ({
  id: string,
  from: {
      name: string,
  },
  type: string,
  time: string,
  text?: string,
})[]

export interface PropsList {
  list: ListMessages,
}
