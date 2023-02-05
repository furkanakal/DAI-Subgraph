import { BigInt } from "@graphprotocol/graph-ts"
import { Transfer } from "../generated/Dai/Dai"
import { TokenTransfer } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let transfer = new TokenTransfer(event.address.toHexString())
  transfer.amount = event.params.wad
  transfer.from = event.params.src
  transfer.to = event.params.dst
  transfer.save()
}