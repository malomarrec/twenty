import { StyledHeaderDropdownButton } from '@/ui/layout/dropdown/components/StyledHeaderDropdownButton';
import { useDropdown } from '@/ui/layout/dropdown/hooks/useDropdown';
import styled from '@emotion/styled';
import { AppTooltip, Tag, TooltipDelay } from 'twenty-ui';

const StyledButton = styled(StyledHeaderDropdownButton)`
  padding: 0;
`;

export const RecordBoardColumnHeaderAggregateDropdownButton = ({
  dropdownId,
  value,
  tooltip,
}: {
  dropdownId: string;
  value?: string | number;
  tooltip?: string;
}) => {
  const { isDropdownOpen } = useDropdown(dropdownId);
  return (
    <div id={dropdownId}>
      <StyledButton>
        <Tag
          text={value ? value.toString() : '-'}
          color={'transparent'}
          weight={'regular'}
        />
        {!isDropdownOpen && (
          <AppTooltip
            anchorSelect={`#${dropdownId}`}
            content={tooltip}
            noArrow
            place="right"
            positionStrategy="fixed"
            delay={TooltipDelay.mediumDelay}
          />
        )}
      </StyledButton>
    </div>
  );
};
