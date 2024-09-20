import { WorkflowStep, WorkflowStepType } from '@/workflow/types/Workflow';
import { v4 } from 'uuid';

export const getStepDefaultDefinition = (
  type: WorkflowStepType,
): WorkflowStep => {
  const newStepId = v4();

  switch (type) {
    case 'CODE': {
      return {
        id: newStepId,
        name: 'Code',
        type: 'CODE',
        valid: false,
        settings: {
          serverlessFunctionId: '',
          errorHandlingOptions: {
            continueOnFailure: {
              value: false,
            },
            retryOnFailure: {
              value: false,
            },
          },
        },
      };
    }
    default: {
      throw new Error(`Unknown type: ${type}`);
    }
  }
};