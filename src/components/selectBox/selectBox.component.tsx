import React from "react";
import { SelectBoxContainer, SelectBoxInput, SelectBoxSection } from './selectBox.styles';

type Props = {
  
};

const SelectBoxComponent: React.FC<Props> = ({children}) => {
  return <SelectBoxContainer>
    <SelectBoxInput>
    
    </SelectBoxInput>

    <SelectBoxSection>
      {children}
    </SelectBoxSection>
  </SelectBoxContainer>;
};

export default SelectBoxComponent;
