# `computeRouterNat` Submodule <a name="`computeRouterNat` Submodule" id="@cdktf/provider-google.computeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterNat <a name="ComputeRouterNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNat(scope: Construct, id: string, config: ComputeRouterNatConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig">ComputeRouterNatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig">ComputeRouterNatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork">putSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps">resetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation">resetEnableDynamicPortAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping">resetEnableEndpointIndependentMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec">resetIcmpIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm">resetMaxPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm">resetMinPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIpAllocateOption">resetNatIpAllocateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps">resetNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">resetTcpEstablishedIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec">resetTcpTimeWaitTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">resetTcpTransitoryIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec">resetUdpIdleTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig"></a>

```typescript
public putLogConfig(value: ComputeRouterNatLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules"></a>

```typescript
public putRules(value: IResolvable | ComputeRouterNatRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]

---

##### `putSubnetwork` <a name="putSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork"></a>

```typescript
public putSubnetwork(value: IResolvable | ComputeRouterNatSubnetwork[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRouterNatTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

---

##### `resetDrainNatIps` <a name="resetDrainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetDrainNatIps"></a>

```typescript
public resetDrainNatIps(): void
```

##### `resetEnableDynamicPortAllocation` <a name="resetEnableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```typescript
public resetEnableDynamicPortAllocation(): void
```

##### `resetEnableEndpointIndependentMapping` <a name="resetEnableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```typescript
public resetEnableEndpointIndependentMapping(): void
```

##### `resetIcmpIdleTimeoutSec` <a name="resetIcmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```typescript
public resetIcmpIdleTimeoutSec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetMaxPortsPerVm` <a name="resetMaxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMaxPortsPerVm"></a>

```typescript
public resetMaxPortsPerVm(): void
```

##### `resetMinPortsPerVm` <a name="resetMinPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetMinPortsPerVm"></a>

```typescript
public resetMinPortsPerVm(): void
```

##### `resetNatIpAllocateOption` <a name="resetNatIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIpAllocateOption"></a>

```typescript
public resetNatIpAllocateOption(): void
```

##### `resetNatIps` <a name="resetNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetNatIps"></a>

```typescript
public resetNatIps(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTcpEstablishedIdleTimeoutSec` <a name="resetTcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```typescript
public resetTcpEstablishedIdleTimeoutSec(): void
```

##### `resetTcpTimeWaitTimeoutSec` <a name="resetTcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```typescript
public resetTcpTimeWaitTimeoutSec(): void
```

##### `resetTcpTransitoryIdleTimeoutSec` <a name="resetTcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```typescript
public resetTcpTransitoryIdleTimeoutSec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUdpIdleTimeoutSec` <a name="resetUdpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```typescript
public resetUdpIdleTimeoutSec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouterNat resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

computeRouterNat.ComputeRouterNat.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

computeRouterNat.ComputeRouterNat.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

computeRouterNat.ComputeRouterNat.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

computeRouterNat.ComputeRouterNat.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRouterNat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRouterNat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRouterNat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouterNat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork">subnetwork</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput">drainNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput">enableDynamicPortAllocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput">enableEndpointIndependentMappingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput">icmpIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput">maxPortsPerVmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput">minPortsPerVmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput">natIpAllocateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput">natIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">sourceSubnetworkIpRangesToNatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput">subnetworkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">tcpEstablishedIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">tcpTimeWaitTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">tcpTransitoryIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput">udpIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps">drainNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm">maxPortsPerVm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm">minPortsPerVm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps">natIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeRouterNatLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference">ComputeRouterNatLogConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rules"></a>

```typescript
public readonly rules: ComputeRouterNatRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList">ComputeRouterNatRulesList</a>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetwork"></a>

```typescript
public readonly subnetwork: ComputeRouterNatSubnetworkList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList">ComputeRouterNatSubnetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterNatTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference">ComputeRouterNatTimeoutsOutputReference</a>

---

##### `drainNatIpsInput`<sup>Optional</sup> <a name="drainNatIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIpsInput"></a>

```typescript
public readonly drainNatIpsInput: string[];
```

- *Type:* string[]

---

##### `enableDynamicPortAllocationInput`<sup>Optional</sup> <a name="enableDynamicPortAllocationInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```typescript
public readonly enableDynamicPortAllocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableEndpointIndependentMappingInput`<sup>Optional</sup> <a name="enableEndpointIndependentMappingInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```typescript
public readonly enableEndpointIndependentMappingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `icmpIdleTimeoutSecInput`<sup>Optional</sup> <a name="icmpIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```typescript
public readonly icmpIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: ComputeRouterNatLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---

##### `maxPortsPerVmInput`<sup>Optional</sup> <a name="maxPortsPerVmInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVmInput"></a>

```typescript
public readonly maxPortsPerVmInput: number;
```

- *Type:* number

---

##### `minPortsPerVmInput`<sup>Optional</sup> <a name="minPortsPerVmInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVmInput"></a>

```typescript
public readonly minPortsPerVmInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natIpAllocateOptionInput`<sup>Optional</sup> <a name="natIpAllocateOptionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOptionInput"></a>

```typescript
public readonly natIpAllocateOptionInput: string;
```

- *Type:* string

---

##### `natIpsInput`<sup>Optional</sup> <a name="natIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpsInput"></a>

```typescript
public readonly natIpsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ComputeRouterNatRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]

---

##### `sourceSubnetworkIpRangesToNatInput`<sup>Optional</sup> <a name="sourceSubnetworkIpRangesToNatInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNatInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: IResolvable | ComputeRouterNatSubnetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]

---

##### `tcpEstablishedIdleTimeoutSecInput`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `tcpTimeWaitTimeoutSecInput`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```typescript
public readonly tcpTimeWaitTimeoutSecInput: number;
```

- *Type:* number

---

##### `tcpTransitoryIdleTimeoutSecInput`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRouterNatTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

---

##### `udpIdleTimeoutSecInput`<sup>Optional</sup> <a name="udpIdleTimeoutSecInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```typescript
public readonly udpIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `drainNatIps`<sup>Required</sup> <a name="drainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.drainNatIps"></a>

```typescript
public readonly drainNatIps: string[];
```

- *Type:* string[]

---

##### `enableDynamicPortAllocation`<sup>Required</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableDynamicPortAllocation"></a>

```typescript
public readonly enableDynamicPortAllocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableEndpointIndependentMapping`<sup>Required</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```typescript
public readonly enableEndpointIndependentMapping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `icmpIdleTimeoutSec`<sup>Required</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```typescript
public readonly icmpIdleTimeoutSec: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxPortsPerVm`<sup>Required</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.maxPortsPerVm"></a>

```typescript
public readonly maxPortsPerVm: number;
```

- *Type:* number

---

##### `minPortsPerVm`<sup>Required</sup> <a name="minPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.minPortsPerVm"></a>

```typescript
public readonly minPortsPerVm: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `natIpAllocateOption`<sup>Required</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIpAllocateOption"></a>

```typescript
public readonly natIpAllocateOption: string;
```

- *Type:* string

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNat: string;
```

- *Type:* string

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSec: number;
```

- *Type:* number

---

##### `tcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```typescript
public readonly tcpTimeWaitTimeoutSec: number;
```

- *Type:* number

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSec: number;
```

- *Type:* number

---

##### `udpIdleTimeoutSec`<sup>Required</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.udpIdleTimeoutSec"></a>

```typescript
public readonly udpIdleTimeoutSec: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNat.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterNatConfig <a name="ComputeRouterNatConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

const computeRouterNatConfig: computeRouterNat.ComputeRouterNatConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name">name</a></code> | <code>string</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router">router</a></code> | <code>string</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps">drainNatIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm">maxPortsPerVm</a></code> | <code>number</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm">minPortsPerVm</a></code> | <code>number</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>string</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps">natIps</a></code> | <code>string[]</code> | Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region">region</a></code> | <code>string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork">subnetwork</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#router ComputeRouterNat#router}

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNat: string;
```

- *Type:* string

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.drainNatIps"></a>

```typescript
public readonly drainNatIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}

---

##### `enableDynamicPortAllocation`<sup>Optional</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```typescript
public readonly enableDynamicPortAllocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enableEndpointIndependentMapping`<sup>Optional</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```typescript
public readonly enableEndpointIndependentMapping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `icmpIdleTimeoutSec`<sup>Optional</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```typescript
public readonly icmpIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#id ComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.logConfig"></a>

```typescript
public readonly logConfig: ComputeRouterNatLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#log_config ComputeRouterNat#log_config}

---

##### `maxPortsPerVm`<sup>Optional</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.maxPortsPerVm"></a>

```typescript
public readonly maxPortsPerVm: number;
```

- *Type:* number

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}

---

##### `minPortsPerVm`<sup>Optional</sup> <a name="minPortsPerVm" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.minPortsPerVm"></a>

```typescript
public readonly minPortsPerVm: number;
```

- *Type:* number

Minimum number of ports allocated to a VM from this NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}

---

##### `natIpAllocateOption`<sup>Optional</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIpAllocateOption"></a>

```typescript
public readonly natIpAllocateOption: string;
```

- *Type:* string

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}

---

##### `natIps`<sup>Optional</sup> <a name="natIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

Self-links of NAT IPs. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#project ComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#region ComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | ComputeRouterNatRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#rules ComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: IResolvable | ComputeRouterNatSubnetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```typescript
public readonly tcpTimeWaitTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#tcp_time_wait_timeout_sec ComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRouterNatTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#timeouts ComputeRouterNat#timeouts}

---

##### `udpIdleTimeoutSec`<sup>Optional</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```typescript
public readonly udpIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}

---

### ComputeRouterNatLogConfig <a name="ComputeRouterNatLogConfig" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

const computeRouterNatLogConfig: computeRouterNat.ComputeRouterNatLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter">filter</a></code> | <code>string</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#enable ComputeRouterNat#enable}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#filter ComputeRouterNat#filter}

---

### ComputeRouterNatRules <a name="ComputeRouterNatRules" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

const computeRouterNatRules: computeRouterNat.ComputeRouterNatRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match">match</a></code> | <code>string</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description">description</a></code> | <code>string</code> | An optional description of this rule. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#match ComputeRouterNat#match}

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#rule_number ComputeRouterNat#rule_number}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.action"></a>

```typescript
public readonly action: ComputeRouterNatRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#action ComputeRouterNat#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#description ComputeRouterNat#description}

---

### ComputeRouterNatRulesAction <a name="ComputeRouterNatRulesAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

const computeRouterNatRulesAction: computeRouterNat.ComputeRouterNatRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps">sourceNatActiveIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps">sourceNatDrainIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |

---

##### `sourceNatActiveIps`<sup>Optional</sup> <a name="sourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```typescript
public readonly sourceNatActiveIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#source_nat_active_ips ComputeRouterNat#source_nat_active_ips}

---

##### `sourceNatDrainIps`<sup>Optional</sup> <a name="sourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```typescript
public readonly sourceNatDrainIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#source_nat_drain_ips ComputeRouterNat#source_nat_drain_ips}

---

### ComputeRouterNatSubnetwork <a name="ComputeRouterNatSubnetwork" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

const computeRouterNatSubnetwork: computeRouterNat.ComputeRouterNatSubnetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name">name</a></code> | <code>string</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat">sourceIpRangesToNat</a></code> | <code>string[]</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames">secondaryIpRangeNames</a></code> | <code>string[]</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#name ComputeRouterNat#name}

---

##### `sourceIpRangesToNat`<sup>Required</sup> <a name="sourceIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```typescript
public readonly sourceIpRangesToNat: string[];
```

- *Type:* string[]

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}

---

##### `secondaryIpRangeNames`<sup>Optional</sup> <a name="secondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```typescript
public readonly secondaryIpRangeNames: string[];
```

- *Type:* string[]

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}

---

### ComputeRouterNatTimeouts <a name="ComputeRouterNatTimeouts" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

const computeRouterNatTimeouts: computeRouterNat.ComputeRouterNatTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#create ComputeRouterNat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#delete ComputeRouterNat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_router_nat#update ComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterNatLogConfigOutputReference <a name="ComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRouterNatLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatLogConfig">ComputeRouterNatLogConfig</a>

---


### ComputeRouterNatRulesActionOutputReference <a name="ComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">resetSourceNatActiveIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">resetSourceNatDrainIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceNatActiveIps` <a name="resetSourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```typescript
public resetSourceNatActiveIps(): void
```

##### `resetSourceNatDrainIps` <a name="resetSourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```typescript
public resetSourceNatDrainIps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">sourceNatActiveIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">sourceNatDrainIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">sourceNatActiveIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">sourceNatDrainIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceNatActiveIpsInput`<sup>Optional</sup> <a name="sourceNatActiveIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```typescript
public readonly sourceNatActiveIpsInput: string[];
```

- *Type:* string[]

---

##### `sourceNatDrainIpsInput`<sup>Optional</sup> <a name="sourceNatDrainIpsInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```typescript
public readonly sourceNatDrainIpsInput: string[];
```

- *Type:* string[]

---

##### `sourceNatActiveIps`<sup>Required</sup> <a name="sourceNatActiveIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```typescript
public readonly sourceNatActiveIps: string[];
```

- *Type:* string[]

---

##### `sourceNatDrainIps`<sup>Required</sup> <a name="sourceNatDrainIps" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```typescript
public readonly sourceNatDrainIps: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRouterNatRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---


### ComputeRouterNatRulesList <a name="ComputeRouterNatRulesList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get"></a>

```typescript
public get(index: number): ComputeRouterNatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNatRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>[]

---


### ComputeRouterNatRulesOutputReference <a name="ComputeRouterNatRulesOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction"></a>

```typescript
public putAction(value: ComputeRouterNatRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput">ruleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.action"></a>

```typescript
public readonly action: ComputeRouterNatRulesActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesActionOutputReference">ComputeRouterNatRulesActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: ComputeRouterNatRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesAction">ComputeRouterNatRulesAction</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```typescript
public readonly ruleNumberInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNatRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatRules">ComputeRouterNatRules</a>

---


### ComputeRouterNatSubnetworkList <a name="ComputeRouterNatSubnetworkList" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatSubnetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get"></a>

```typescript
public get(index: number): ComputeRouterNatSubnetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNatSubnetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>[]

---


### ComputeRouterNatSubnetworkOutputReference <a name="ComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatSubnetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">resetSecondaryIpRangeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryIpRangeNames` <a name="resetSecondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```typescript
public resetSecondaryIpRangeNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">secondaryIpRangeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">sourceIpRangesToNatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">secondaryIpRangeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">sourceIpRangesToNat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secondaryIpRangeNamesInput`<sup>Optional</sup> <a name="secondaryIpRangeNamesInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```typescript
public readonly secondaryIpRangeNamesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpRangesToNatInput`<sup>Optional</sup> <a name="sourceIpRangesToNatInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```typescript
public readonly sourceIpRangesToNatInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secondaryIpRangeNames`<sup>Required</sup> <a name="secondaryIpRangeNames" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```typescript
public readonly secondaryIpRangeNames: string[];
```

- *Type:* string[]

---

##### `sourceIpRangesToNat`<sup>Required</sup> <a name="sourceIpRangesToNat" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```typescript
public readonly sourceIpRangesToNat: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNatSubnetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatSubnetwork">ComputeRouterNatSubnetwork</a>

---


### ComputeRouterNatTimeoutsOutputReference <a name="ComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRouterNat } from '@cdktf/provider-google'

new computeRouterNat.ComputeRouterNatTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRouterNatTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRouterNat.ComputeRouterNatTimeouts">ComputeRouterNatTimeouts</a>

---



