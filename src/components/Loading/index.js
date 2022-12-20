import { StyledLoading } from './Loading,styled';

const Loading = () => {
  return (
    <StyledLoading>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
