import { ClipLoader } from "react-spinners";

const Loading = ({loading}) => {
  return (
    <ClipLoader
      loading={loading}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loading;