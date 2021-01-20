// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OvenCreated extends ethereum.Event {
  get params(): OvenCreated__Params {
    return new OvenCreated__Params(this);
  }
}

export class OvenCreated__Params {
  _event: OvenCreated;

  constructor(event: OvenCreated) {
    this._event = event;
  }

  get Oven(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get Controller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get Pie(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get Recipe(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OvenFactoryContract extends ethereum.SmartContract {
  static bind(address: Address): OvenFactoryContract {
    return new OvenFactoryContract("OvenFactoryContract", address);
  }

  defaultBaker(): Address {
    let result = super.call("defaultBaker", "defaultBaker():(address)", []);

    return result[0].toAddress();
  }

  try_defaultBaker(): ethereum.CallResult<Address> {
    let result = super.tryCall("defaultBaker", "defaultBaker():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultCapSetter(): Address {
    let result = super.call(
      "defaultCapSetter",
      "defaultCapSetter():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_defaultCapSetter(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "defaultCapSetter",
      "defaultCapSetter():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultController(): Address {
    let result = super.call(
      "defaultController",
      "defaultController():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_defaultController(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "defaultController",
      "defaultController():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isOven(param0: Address): boolean {
    let result = super.call("isOven", "isOven(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isOven(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOven", "isOven(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ovens(param0: BigInt): Address {
    let result = super.call("ovens", "ovens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_ovens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ovens", "ovens(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateEmptyOvenCall extends ethereum.Call {
  get inputs(): CreateEmptyOvenCall__Inputs {
    return new CreateEmptyOvenCall__Inputs(this);
  }

  get outputs(): CreateEmptyOvenCall__Outputs {
    return new CreateEmptyOvenCall__Outputs(this);
  }
}

export class CreateEmptyOvenCall__Inputs {
  _call: CreateEmptyOvenCall;

  constructor(call: CreateEmptyOvenCall) {
    this._call = call;
  }
}

export class CreateEmptyOvenCall__Outputs {
  _call: CreateEmptyOvenCall;

  constructor(call: CreateEmptyOvenCall) {
    this._call = call;
  }
}

export class CreateOvenCall extends ethereum.Call {
  get inputs(): CreateOvenCall__Inputs {
    return new CreateOvenCall__Inputs(this);
  }

  get outputs(): CreateOvenCall__Outputs {
    return new CreateOvenCall__Outputs(this);
  }
}

export class CreateOvenCall__Inputs {
  _call: CreateOvenCall;

  constructor(call: CreateOvenCall) {
    this._call = call;
  }

  get _pie(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _recipe(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateOvenCall__Outputs {
  _call: CreateOvenCall;

  constructor(call: CreateOvenCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDefaultBakerCall extends ethereum.Call {
  get inputs(): SetDefaultBakerCall__Inputs {
    return new SetDefaultBakerCall__Inputs(this);
  }

  get outputs(): SetDefaultBakerCall__Outputs {
    return new SetDefaultBakerCall__Outputs(this);
  }
}

export class SetDefaultBakerCall__Inputs {
  _call: SetDefaultBakerCall;

  constructor(call: SetDefaultBakerCall) {
    this._call = call;
  }

  get _baker(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultBakerCall__Outputs {
  _call: SetDefaultBakerCall;

  constructor(call: SetDefaultBakerCall) {
    this._call = call;
  }
}

export class SetDefaultCapSetterCall extends ethereum.Call {
  get inputs(): SetDefaultCapSetterCall__Inputs {
    return new SetDefaultCapSetterCall__Inputs(this);
  }

  get outputs(): SetDefaultCapSetterCall__Outputs {
    return new SetDefaultCapSetterCall__Outputs(this);
  }
}

export class SetDefaultCapSetterCall__Inputs {
  _call: SetDefaultCapSetterCall;

  constructor(call: SetDefaultCapSetterCall) {
    this._call = call;
  }

  get _capSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultCapSetterCall__Outputs {
  _call: SetDefaultCapSetterCall;

  constructor(call: SetDefaultCapSetterCall) {
    this._call = call;
  }
}

export class SetDefaultControllerCall extends ethereum.Call {
  get inputs(): SetDefaultControllerCall__Inputs {
    return new SetDefaultControllerCall__Inputs(this);
  }

  get outputs(): SetDefaultControllerCall__Outputs {
    return new SetDefaultControllerCall__Outputs(this);
  }
}

export class SetDefaultControllerCall__Inputs {
  _call: SetDefaultControllerCall;

  constructor(call: SetDefaultControllerCall) {
    this._call = call;
  }

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDefaultControllerCall__Outputs {
  _call: SetDefaultControllerCall;

  constructor(call: SetDefaultControllerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
