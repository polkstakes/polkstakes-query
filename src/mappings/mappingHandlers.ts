import {
  SubstrateEvent,
} from "@subql/types";

export async function handleCouncilVotedEvent(
  event: SubstrateEvent
): Promise<void> {
  const {
    event: {
      data: [councilorId, proposal_hash, approved_vote, numberYes, numberNo],
    },
  } = event;
}
