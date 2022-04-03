import { SubstrateEvent, SubstrateBlock } from "@subql/types";
import { PolkstakesData } from "../types";

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  let record = new PolkstakesData(block.block.header.hash.toString());
  record.blockName = block.block.header.number.toString();
  await record.save();
}

export async function handleCouncilVotedEvent(
  event: SubstrateEvent
): Promise<void> {
  const {
    event: {
      data: [councilorId, proposal_hash, approved_vote, numberYes, numberNo],
    },
  } = event;
}
