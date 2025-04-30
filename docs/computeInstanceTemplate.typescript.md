# `computeInstanceTemplate` Submodule <a name="`computeInstanceTemplate` Submodule" id="@cdktf/provider-google.computeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceTemplate <a name="ComputeInstanceTemplate" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplate(scope: Construct, id: string, config: ComputeInstanceTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig">ComputeInstanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig">ComputeInstanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures">putAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig">putConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putGuestAccelerator">putGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkPerformanceConfig">putNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling">putScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetAdvancedMachineFeatures">resetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetConfidentialInstanceConfig">resetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetGuestAccelerator">resetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetInstanceDescription">resetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetKeyRevocationActionType">resetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadataStartupScript">resetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMinCpuPlatform">resetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkPerformanceConfig">resetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetScheduling">resetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedMachineFeatures` <a name="putAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures"></a>

```typescript
public putAdvancedMachineFeatures(value: ComputeInstanceTemplateAdvancedMachineFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `putConfidentialInstanceConfig` <a name="putConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig"></a>

```typescript
public putConfidentialInstanceConfig(value: ComputeInstanceTemplateConfidentialInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putDisk"></a>

```typescript
public putDisk(value: IResolvable | ComputeInstanceTemplateDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]

---

##### `putGuestAccelerator` <a name="putGuestAccelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putGuestAccelerator"></a>

```typescript
public putGuestAccelerator(value: IResolvable | ComputeInstanceTemplateGuestAccelerator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | ComputeInstanceTemplateNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]

---

##### `putNetworkPerformanceConfig` <a name="putNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkPerformanceConfig"></a>

```typescript
public putNetworkPerformanceConfig(value: ComputeInstanceTemplateNetworkPerformanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: ComputeInstanceTemplateReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

---

##### `putScheduling` <a name="putScheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling"></a>

```typescript
public putScheduling(value: ComputeInstanceTemplateScheduling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount"></a>

```typescript
public putServiceAccount(value: ComputeInstanceTemplateServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: ComputeInstanceTemplateShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInstanceTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>

---

##### `resetAdvancedMachineFeatures` <a name="resetAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetAdvancedMachineFeatures"></a>

```typescript
public resetAdvancedMachineFeatures(): void
```

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetCanIpForward"></a>

```typescript
public resetCanIpForward(): void
```

##### `resetConfidentialInstanceConfig` <a name="resetConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetConfidentialInstanceConfig"></a>

```typescript
public resetConfidentialInstanceConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGuestAccelerator` <a name="resetGuestAccelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetGuestAccelerator"></a>

```typescript
public resetGuestAccelerator(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceDescription` <a name="resetInstanceDescription" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetInstanceDescription"></a>

```typescript
public resetInstanceDescription(): void
```

##### `resetKeyRevocationActionType` <a name="resetKeyRevocationActionType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetKeyRevocationActionType"></a>

```typescript
public resetKeyRevocationActionType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataStartupScript` <a name="resetMetadataStartupScript" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMetadataStartupScript"></a>

```typescript
public resetMetadataStartupScript(): void
```

##### `resetMinCpuPlatform` <a name="resetMinCpuPlatform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetMinCpuPlatform"></a>

```typescript
public resetMinCpuPlatform(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetNetworkPerformanceConfig` <a name="resetNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetNetworkPerformanceConfig"></a>

```typescript
public resetNetworkPerformanceConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetResourcePolicies"></a>

```typescript
public resetResourcePolicies(): void
```

##### `resetScheduling` <a name="resetScheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetScheduling"></a>

```typescript
public resetScheduling(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isConstruct"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

computeInstanceTemplate.ComputeInstanceTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList">ComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAccelerator">guestAccelerator</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList">ComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataFingerprint">metadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList">ComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference">ComputeInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference">ComputeInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLinkUnique">selfLinkUnique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference">ComputeInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference">ComputeInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsFingerprint">tagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference">ComputeInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeaturesInput">advancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForwardInput">canIpForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfigInput">confidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAcceleratorInput">guestAcceleratorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescriptionInput">instanceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionTypeInput">keyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScriptInput">metadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatformInput">minCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfigInput">networkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.schedulingInput">schedulingInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescription">instanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScript">metadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedMachineFeatures`<sup>Required</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference">ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `confidentialInstanceConfig`<sup>Required</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: ComputeInstanceTemplateConfidentialInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference">ComputeInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.disk"></a>

```typescript
public readonly disk: ComputeInstanceTemplateDiskList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList">ComputeInstanceTemplateDiskList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `guestAccelerator`<sup>Required</sup> <a name="guestAccelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: ComputeInstanceTemplateGuestAcceleratorList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList">ComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `metadataFingerprint`<sup>Required</sup> <a name="metadataFingerprint" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataFingerprint"></a>

```typescript
public readonly metadataFingerprint: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterface"></a>

```typescript
public readonly networkInterface: ComputeInstanceTemplateNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList">ComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `networkPerformanceConfig`<sup>Required</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: ComputeInstanceTemplateNetworkPerformanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference">ComputeInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: ComputeInstanceTemplateReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference">ComputeInstanceTemplateReservationAffinityOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.scheduling"></a>

```typescript
public readonly scheduling: ComputeInstanceTemplateSchedulingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference">ComputeInstanceTemplateSchedulingOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkUnique`<sup>Required</sup> <a name="selfLinkUnique" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.selfLinkUnique"></a>

```typescript
public readonly selfLinkUnique: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ComputeInstanceTemplateServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference">ComputeInstanceTemplateServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: ComputeInstanceTemplateShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference">ComputeInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `tagsFingerprint`<sup>Required</sup> <a name="tagsFingerprint" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsFingerprint"></a>

```typescript
public readonly tagsFingerprint: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference">ComputeInstanceTemplateTimeoutsOutputReference</a>

---

##### `advancedMachineFeaturesInput`<sup>Optional</sup> <a name="advancedMachineFeaturesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```typescript
public readonly advancedMachineFeaturesInput: ComputeInstanceTemplateAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForwardInput"></a>

```typescript
public readonly canIpForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialInstanceConfigInput`<sup>Optional</sup> <a name="confidentialInstanceConfigInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```typescript
public readonly confidentialInstanceConfigInput: ComputeInstanceTemplateConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | ComputeInstanceTemplateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]

---

##### `guestAcceleratorInput`<sup>Optional</sup> <a name="guestAcceleratorInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.guestAcceleratorInput"></a>

```typescript
public readonly guestAcceleratorInput: IResolvable | ComputeInstanceTemplateGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceDescriptionInput`<sup>Optional</sup> <a name="instanceDescriptionInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescriptionInput"></a>

```typescript
public readonly instanceDescriptionInput: string;
```

- *Type:* string

---

##### `keyRevocationActionTypeInput`<sup>Optional</sup> <a name="keyRevocationActionTypeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```typescript
public readonly keyRevocationActionTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataStartupScriptInput`<sup>Optional</sup> <a name="metadataStartupScriptInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScriptInput"></a>

```typescript
public readonly metadataStartupScriptInput: string;
```

- *Type:* string

---

##### `minCpuPlatformInput`<sup>Optional</sup> <a name="minCpuPlatformInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatformInput"></a>

```typescript
public readonly minCpuPlatformInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | ComputeInstanceTemplateNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]

---

##### `networkPerformanceConfigInput`<sup>Optional</sup> <a name="networkPerformanceConfigInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.networkPerformanceConfigInput"></a>

```typescript
public readonly networkPerformanceConfigInput: ComputeInstanceTemplateNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: ComputeInstanceTemplateReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePoliciesInput"></a>

```typescript
public readonly resourcePoliciesInput: string[];
```

- *Type:* string[]

---

##### `schedulingInput`<sup>Optional</sup> <a name="schedulingInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.schedulingInput"></a>

```typescript
public readonly schedulingInput: ComputeInstanceTemplateScheduling;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: ComputeInstanceTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: ComputeInstanceTemplateShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInstanceTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceDescription`<sup>Required</sup> <a name="instanceDescription" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.instanceDescription"></a>

```typescript
public readonly instanceDescription: string;
```

- *Type:* string

---

##### `keyRevocationActionType`<sup>Required</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.keyRevocationActionType"></a>

```typescript
public readonly keyRevocationActionType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataStartupScript`<sup>Required</sup> <a name="metadataStartupScript" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.metadataStartupScript"></a>

```typescript
public readonly metadataStartupScript: string;
```

- *Type:* string

---

##### `minCpuPlatform`<sup>Required</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceTemplateAdvancedMachineFeatures <a name="ComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateAdvancedMachineFeatures: computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode">turboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">visibleCoreCount</a></code> | <code>number</code> | The number of physical cores to expose to an instance. |

---

##### `enableNestedVirtualization`<sup>Optional</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#enable_nested_virtualization ComputeInstanceTemplate#enable_nested_virtualization}

---

##### `enableUefiNetworking`<sup>Optional</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```typescript
public readonly enableUefiNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#enable_uefi_networking ComputeInstanceTemplate#enable_uefi_networking}

---

##### `performanceMonitoringUnit`<sup>Optional</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```typescript
public readonly performanceMonitoringUnit: string;
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#performance_monitoring_unit ComputeInstanceTemplate#performance_monitoring_unit}

---

##### `threadsPerCore`<sup>Optional</sup> <a name="threadsPerCore" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#threads_per_core ComputeInstanceTemplate#threads_per_core}

---

##### `turboMode`<sup>Optional</sup> <a name="turboMode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```typescript
public readonly turboMode: string;
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#turbo_mode ComputeInstanceTemplate#turbo_mode}

---

##### `visibleCoreCount`<sup>Optional</sup> <a name="visibleCoreCount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```typescript
public readonly visibleCoreCount: number;
```

- *Type:* number

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance\'s nominal CPU count and the underlying platform\'s SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#visible_core_count ComputeInstanceTemplate#visible_core_count}

---

### ComputeInstanceTemplateConfidentialInstanceConfig <a name="ComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateConfidentialInstanceConfig: computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `confidentialInstanceType`<sup>Optional</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```typescript
public readonly confidentialInstanceType: string;
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#confidential_instance_type ComputeInstanceTemplate#confidential_instance_type}

---

##### `enableConfidentialCompute`<sup>Optional</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#enable_confidential_compute ComputeInstanceTemplate#enable_confidential_compute}

---

### ComputeInstanceTemplateConfig <a name="ComputeInstanceTemplateConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateConfig: computeInstanceTemplate.ComputeInstanceTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.machineType">machineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.advancedMachineFeatures">advancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.confidentialInstanceConfig">confidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.description">description</a></code> | <code>string</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.guestAccelerator">guestAccelerator</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#id ComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.instanceDescription">instanceDescription</a></code> | <code>string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.keyRevocationActionType">keyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadataStartupScript">metadataStartupScript</a></code> | <code>string</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.minCpuPlatform">minCpuPlatform</a></code> | <code>string</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Creates a unique name beginning with the specified prefix. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkPerformanceConfig">networkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.region">region</a></code> | <code>string</code> | An instance template is a global resource that is not bound to a zone or a region. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.scheduling">scheduling</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.disk"></a>

```typescript
public readonly disk: IResolvable | ComputeInstanceTemplateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#disk ComputeInstanceTemplate#disk}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#machine_type ComputeInstanceTemplate#machine_type}

---

##### `advancedMachineFeatures`<sup>Optional</sup> <a name="advancedMachineFeatures" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```typescript
public readonly advancedMachineFeatures: ComputeInstanceTemplateAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#advanced_machine_features ComputeInstanceTemplate#advanced_machine_features}

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#can_ip_forward ComputeInstanceTemplate#can_ip_forward}

---

##### `confidentialInstanceConfig`<sup>Optional</sup> <a name="confidentialInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```typescript
public readonly confidentialInstanceConfig: ComputeInstanceTemplateConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#confidential_instance_config ComputeInstanceTemplate#confidential_instance_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#description ComputeInstanceTemplate#description}

---

##### `guestAccelerator`<sup>Optional</sup> <a name="guestAccelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.guestAccelerator"></a>

```typescript
public readonly guestAccelerator: IResolvable | ComputeInstanceTemplateGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#guest_accelerator ComputeInstanceTemplate#guest_accelerator}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#id ComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceDescription`<sup>Optional</sup> <a name="instanceDescription" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.instanceDescription"></a>

```typescript
public readonly instanceDescription: string;
```

- *Type:* string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#instance_description ComputeInstanceTemplate#instance_description}

---

##### `keyRevocationActionType`<sup>Optional</sup> <a name="keyRevocationActionType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.keyRevocationActionType"></a>

```typescript
public readonly keyRevocationActionType: string;
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#key_revocation_action_type ComputeInstanceTemplate#key_revocation_action_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to instances created from this template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#labels ComputeInstanceTemplate#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#metadata ComputeInstanceTemplate#metadata}

---

##### `metadataStartupScript`<sup>Optional</sup> <a name="metadataStartupScript" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.metadataStartupScript"></a>

```typescript
public readonly metadataStartupScript: string;
```

- *Type:* string

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#metadata_startup_script ComputeInstanceTemplate#metadata_startup_script}

---

##### `minCpuPlatform`<sup>Optional</sup> <a name="minCpuPlatform" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.minCpuPlatform"></a>

```typescript
public readonly minCpuPlatform: string;
```

- *Type:* string

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#min_cpu_platform ComputeInstanceTemplate#min_cpu_platform}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#name ComputeInstanceTemplate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Creates a unique name beginning with the specified prefix.

Conflicts with name. Max length is 54 characters. Prefixes with lengths longer than 37 characters will use a shortened UUID that will be more prone to collisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#name_prefix ComputeInstanceTemplate#name_prefix}

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | ComputeInstanceTemplateNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#network_interface ComputeInstanceTemplate#network_interface}

---

##### `networkPerformanceConfig`<sup>Optional</sup> <a name="networkPerformanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```typescript
public readonly networkPerformanceConfig: ComputeInstanceTemplateNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#network_performance_config ComputeInstanceTemplate#network_performance_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#project ComputeInstanceTemplate#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

An instance template is a global resource that is not bound to a zone or a region.

However, you can still specify some regional resources in an instance template, which restricts the template to the region where that resource resides. For example, a custom subnetwork resource is tied to a specific region. Defaults to the region of the Provider if no value is given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#region ComputeInstanceTemplate#region}

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: ComputeInstanceTemplateReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#reservation_affinity ComputeInstanceTemplate#reservation_affinity}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
				Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456.
				The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#resource_manager_tags ComputeInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#resource_policies ComputeInstanceTemplate#resource_policies}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.scheduling"></a>

```typescript
public readonly scheduling: ComputeInstanceTemplateScheduling;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#scheduling ComputeInstanceTemplate#scheduling}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: ComputeInstanceTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#service_account ComputeInstanceTemplate#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: ComputeInstanceTemplateShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#shielded_instance_config ComputeInstanceTemplate#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#tags ComputeInstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#timeouts ComputeInstanceTemplate#timeouts}

---

### ComputeInstanceTemplateDisk <a name="ComputeInstanceTemplateDisk" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateDisk: computeInstanceTemplate.ComputeInstanceTemplateDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.deviceName">deviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskName">diskName</a></code> | <code>string</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskType">diskType</a></code> | <code>string</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.interface">interface</a></code> | <code>string</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.mode">mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedIops">provisionedIops</a></code> | <code>number</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedThroughput">provisionedThroughput</a></code> | <code>number</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.source">source</a></code> | <code>string</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImage">sourceImage</a></code> | <code>string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.type">type</a></code> | <code>string</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#auto_delete ComputeInstanceTemplate#auto_delete}

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#boot ComputeInstanceTemplate#boot}

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#device_name ComputeInstanceTemplate#device_name}

---

##### `diskEncryptionKey`<sup>Optional</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskEncryptionKey"></a>

```typescript
public readonly diskEncryptionKey: ComputeInstanceTemplateDiskDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#disk_encryption_key ComputeInstanceTemplate#disk_encryption_key}

---

##### `diskName`<sup>Optional</sup> <a name="diskName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#disk_name ComputeInstanceTemplate#disk_name}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#disk_size_gb ComputeInstanceTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#disk_type ComputeInstanceTemplate#disk_type}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#interface ComputeInstanceTemplate#interface}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#labels ComputeInstanceTemplate#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#mode ComputeInstanceTemplate#mode}

---

##### `provisionedIops`<sup>Optional</sup> <a name="provisionedIops" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedIops"></a>

```typescript
public readonly provisionedIops: number;
```

- *Type:* number

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#provisioned_iops ComputeInstanceTemplate#provisioned_iops}

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: number;
```

- *Type:* number

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#provisioned_throughput ComputeInstanceTemplate#provisioned_throughput}

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#resource_manager_tags ComputeInstanceTemplate#resource_manager_tags}

---

##### `resourcePolicies`<sup>Optional</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#resource_policies ComputeInstanceTemplate#resource_policies}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#source ComputeInstanceTemplate#source}

---

##### `sourceImage`<sup>Optional</sup> <a name="sourceImage" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#source_image ComputeInstanceTemplate#source_image}

---

##### `sourceImageEncryptionKey`<sup>Optional</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```typescript
public readonly sourceImageEncryptionKey: ComputeInstanceTemplateDiskSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#source_image_encryption_key ComputeInstanceTemplate#source_image_encryption_key}

---

##### `sourceSnapshot`<sup>Optional</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#source_snapshot ComputeInstanceTemplate#source_snapshot}

---

##### `sourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```typescript
public readonly sourceSnapshotEncryptionKey: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#source_snapshot_encryption_key ComputeInstanceTemplate#source_snapshot_encryption_key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

### ComputeInstanceTemplateDiskDiskEncryptionKey <a name="ComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateDiskDiskEncryptionKey: computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

### ComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="ComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateDiskSourceImageEncryptionKey: computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#raw_key ComputeInstanceTemplate#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#rsa_encrypted_key ComputeInstanceTemplate#rsa_encrypted_key}

---

### ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateDiskSourceSnapshotEncryptionKey: computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.rawKey">rawKey</a></code> | <code>string</code> | Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource. |

---

##### `kmsKeySelfLink`<sup>Optional</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#kms_key_self_link ComputeInstanceTemplate#kms_key_self_link}

---

##### `kmsKeyServiceAccount`<sup>Optional</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#kms_key_service_account ComputeInstanceTemplate#kms_key_service_account}

---

##### `rawKey`<sup>Optional</sup> <a name="rawKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#raw_key ComputeInstanceTemplate#raw_key}

---

##### `rsaEncryptedKey`<sup>Optional</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

Specifies an RFC 4648 base64 encoded, RSA-wrapped 2048-bit customer-supplied encryption key to either encrypt or decrypt this resource.

Only one of kms_key_self_link, rsa_encrypted_key and raw_key may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#rsa_encrypted_key ComputeInstanceTemplate#rsa_encrypted_key}

---

### ComputeInstanceTemplateGuestAccelerator <a name="ComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateGuestAccelerator: computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.count">count</a></code> | <code>number</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.type">type</a></code> | <code>string</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#count ComputeInstanceTemplate#count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

### ComputeInstanceTemplateNetworkInterface <a name="ComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateNetworkInterface: computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.accessConfig">accessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]</code> | access_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.aliasIpRange">aliasIpRange</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>number</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.network">network</a></code> | <code>string</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.networkIp">networkIp</a></code> | <code>string</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.nicType">nicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.queueCount">queueCount</a></code> | <code>number</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.stackType">stackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetworkProject">subnetworkProject</a></code> | <code>string</code> | The ID of the project in which the subnetwork belongs. |

---

##### `accessConfig`<sup>Optional</sup> <a name="accessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.accessConfig"></a>

```typescript
public readonly accessConfig: IResolvable | ComputeInstanceTemplateNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#access_config ComputeInstanceTemplate#access_config}

---

##### `aliasIpRange`<sup>Optional</sup> <a name="aliasIpRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```typescript
public readonly aliasIpRange: IResolvable | ComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#alias_ip_range ComputeInstanceTemplate#alias_ip_range}

---

##### `internalIpv6PrefixLength`<sup>Optional</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```typescript
public readonly internalIpv6PrefixLength: number;
```

- *Type:* number

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#internal_ipv6_prefix_length ComputeInstanceTemplate#internal_ipv6_prefix_length}

---

##### `ipv6AccessConfig`<sup>Optional</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```typescript
public readonly ipv6AccessConfig: IResolvable | ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#ipv6_access_config ComputeInstanceTemplate#ipv6_access_config}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#ipv6_address ComputeInstanceTemplate#ipv6_address}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#network ComputeInstanceTemplate#network}

---

##### `networkIp`<sup>Optional</sup> <a name="networkIp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.networkIp"></a>

```typescript
public readonly networkIp: string;
```

- *Type:* string

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#network_ip ComputeInstanceTemplate#network_ip}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#nic_type ComputeInstanceTemplate#nic_type}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#queue_count ComputeInstanceTemplate#queue_count}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#stack_type ComputeInstanceTemplate#stack_type}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#subnetwork ComputeInstanceTemplate#subnetwork}

---

##### `subnetworkProject`<sup>Optional</sup> <a name="subnetworkProject" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```typescript
public readonly subnetworkProject: string;
```

- *Type:* string

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#subnetwork_project ComputeInstanceTemplate#subnetwork_project}

---

### ComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="ComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateNetworkInterfaceAccessConfig: computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">natIp</a></code> | <code>string</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance template. |

---

##### `natIp`<sup>Optional</sup> <a name="natIp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```typescript
public readonly natIp: string;
```

- *Type:* string

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#nat_ip ComputeInstanceTemplate#nat_ip}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#network_tier ComputeInstanceTemplate#network_tier}

---

### ComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="ComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateNetworkInterfaceAliasIpRange: computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#ip_cidr_range ComputeInstanceTemplate#ip_cidr_range}

---

##### `subnetworkRangeName`<sup>Optional</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#subnetwork_range_name ComputeInstanceTemplate#subnetwork_range_name}

---

### ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateNetworkInterfaceIpv6AccessConfig: computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">networkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#network_tier ComputeInstanceTemplate#network_tier}

---

### ComputeInstanceTemplateNetworkPerformanceConfig <a name="ComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateNetworkPerformanceConfig: computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#total_egress_bandwidth_tier ComputeInstanceTemplate#total_egress_bandwidth_tier}

---

### ComputeInstanceTemplateReservationAffinity <a name="ComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateReservationAffinity: computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.type">type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#type ComputeInstanceTemplate#type}

---

##### `specificReservation`<sup>Optional</sup> <a name="specificReservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity.property.specificReservation"></a>

```typescript
public readonly specificReservation: ComputeInstanceTemplateReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#specific_reservation ComputeInstanceTemplate#specific_reservation}

---

### ComputeInstanceTemplateReservationAffinitySpecificReservation <a name="ComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateReservationAffinitySpecificReservation: computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.key">key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.values">values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}

---

### ComputeInstanceTemplateScheduling <a name="ComputeInstanceTemplateScheduling" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateScheduling: computeInstanceTemplate.ComputeInstanceTemplateScheduling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.automaticRestart">automaticRestart</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.availabilityDomain">availabilityDomain</a></code> | <code>number</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.minNodeCpus">minNodeCpus</a></code> | <code>number</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.nodeAffinities">nodeAffinities</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onHostMaintenance">onHostMaintenance</a></code> | <code>string</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.terminationTime">terminationTime</a></code> | <code>string</code> | Specifies the timestamp, when the instance will be terminated, in RFC3339 text format. |

---

##### `automaticRestart`<sup>Optional</sup> <a name="automaticRestart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#automatic_restart ComputeInstanceTemplate#automatic_restart}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: number;
```

- *Type:* number

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#availability_domain ComputeInstanceTemplate#availability_domain}

---

##### `instanceTerminationAction`<sup>Optional</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```typescript
public readonly instanceTerminationAction: string;
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#instance_termination_action ComputeInstanceTemplate#instance_termination_action}

---

##### `localSsdRecoveryTimeout`<sup>Optional</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```typescript
public readonly localSsdRecoveryTimeout: IResolvable | ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#local_ssd_recovery_timeout ComputeInstanceTemplate#local_ssd_recovery_timeout}

---

##### `maxRunDuration`<sup>Optional</sup> <a name="maxRunDuration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.maxRunDuration"></a>

```typescript
public readonly maxRunDuration: ComputeInstanceTemplateSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#max_run_duration ComputeInstanceTemplate#max_run_duration}

---

##### `minNodeCpus`<sup>Optional</sup> <a name="minNodeCpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.minNodeCpus"></a>

```typescript
public readonly minNodeCpus: number;
```

- *Type:* number

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#min_node_cpus ComputeInstanceTemplate#min_node_cpus}

---

##### `nodeAffinities`<sup>Optional</sup> <a name="nodeAffinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.nodeAffinities"></a>

```typescript
public readonly nodeAffinities: IResolvable | ComputeInstanceTemplateSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#node_affinities ComputeInstanceTemplate#node_affinities}

---

##### `onHostMaintenance`<sup>Optional</sup> <a name="onHostMaintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onHostMaintenance"></a>

```typescript
public readonly onHostMaintenance: string;
```

- *Type:* string

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#on_host_maintenance ComputeInstanceTemplate#on_host_maintenance}

---

##### `onInstanceStopAction`<sup>Optional</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```typescript
public readonly onInstanceStopAction: ComputeInstanceTemplateSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#on_instance_stop_action ComputeInstanceTemplate#on_instance_stop_action}

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#preemptible ComputeInstanceTemplate#preemptible}

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#provisioning_model ComputeInstanceTemplate#provisioning_model}

---

##### `terminationTime`<sup>Optional</sup> <a name="terminationTime" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling.property.terminationTime"></a>

```typescript
public readonly terminationTime: string;
```

- *Type:* string

Specifies the timestamp, when the instance will be terminated, in RFC3339 text format.

If specified, the instance termination action
will be performed at the termination time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#termination_time ComputeInstanceTemplate#termination_time}

---

### ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateSchedulingLocalSsdRecoveryTimeout: computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#seconds ComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#nanos ComputeInstanceTemplate#nanos}

---

### ComputeInstanceTemplateSchedulingMaxRunDuration <a name="ComputeInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateSchedulingMaxRunDuration: computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds">seconds</a></code> | <code>number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos">nanos</a></code> | <code>number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#seconds ComputeInstanceTemplate#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#nanos ComputeInstanceTemplate#nanos}

---

### ComputeInstanceTemplateSchedulingNodeAffinities <a name="ComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateSchedulingNodeAffinities: computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#operator ComputeInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#key ComputeInstanceTemplate#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#operator ComputeInstanceTemplate#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#values ComputeInstanceTemplate#values}.

---

### ComputeInstanceTemplateSchedulingOnInstanceStopAction <a name="ComputeInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateSchedulingOnInstanceStopAction: computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">discardLocalSsd</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `discardLocalSsd`<sup>Optional</sup> <a name="discardLocalSsd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```typescript
public readonly discardLocalSsd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#discard_local_ssd ComputeInstanceTemplate#discard_local_ssd}

---

### ComputeInstanceTemplateServiceAccount <a name="ComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateServiceAccount: computeInstanceTemplate.ComputeInstanceTemplateServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.scopes">scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.email">email</a></code> | <code>string</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#scopes ComputeInstanceTemplate#scopes}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#email ComputeInstanceTemplate#email}

---

### ComputeInstanceTemplateShieldedInstanceConfig <a name="ComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateShieldedInstanceConfig: computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#enable_integrity_monitoring ComputeInstanceTemplate#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#enable_secure_boot ComputeInstanceTemplate#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#enable_vtpm ComputeInstanceTemplate#enable_vtpm}

---

### ComputeInstanceTemplateTimeouts <a name="ComputeInstanceTemplateTimeouts" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

const computeInstanceTemplateTimeouts: computeInstanceTemplate.ComputeInstanceTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#create ComputeInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#delete ComputeInstanceTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#create ComputeInstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_instance_template#delete ComputeInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">resetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">resetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">resetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">resetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">resetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">resetVisibleCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableNestedVirtualization` <a name="resetEnableNestedVirtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```typescript
public resetEnableNestedVirtualization(): void
```

##### `resetEnableUefiNetworking` <a name="resetEnableUefiNetworking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```typescript
public resetEnableUefiNetworking(): void
```

##### `resetPerformanceMonitoringUnit` <a name="resetPerformanceMonitoringUnit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```typescript
public resetPerformanceMonitoringUnit(): void
```

##### `resetThreadsPerCore` <a name="resetThreadsPerCore" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```typescript
public resetThreadsPerCore(): void
```

##### `resetTurboMode` <a name="resetTurboMode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```typescript
public resetTurboMode(): void
```

##### `resetVisibleCoreCount` <a name="resetVisibleCoreCount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```typescript
public resetVisibleCoreCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">enableNestedVirtualizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">enableUefiNetworkingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">performanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">threadsPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">turboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">visibleCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">enableNestedVirtualization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">enableUefiNetworking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">performanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">turboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">visibleCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableNestedVirtualizationInput`<sup>Optional</sup> <a name="enableNestedVirtualizationInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```typescript
public readonly enableNestedVirtualizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUefiNetworkingInput`<sup>Optional</sup> <a name="enableUefiNetworkingInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```typescript
public readonly enableUefiNetworkingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceMonitoringUnitInput`<sup>Optional</sup> <a name="performanceMonitoringUnitInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```typescript
public readonly performanceMonitoringUnitInput: string;
```

- *Type:* string

---

##### `threadsPerCoreInput`<sup>Optional</sup> <a name="threadsPerCoreInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```typescript
public readonly threadsPerCoreInput: number;
```

- *Type:* number

---

##### `turboModeInput`<sup>Optional</sup> <a name="turboModeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```typescript
public readonly turboModeInput: string;
```

- *Type:* string

---

##### `visibleCoreCountInput`<sup>Optional</sup> <a name="visibleCoreCountInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```typescript
public readonly visibleCoreCountInput: number;
```

- *Type:* number

---

##### `enableNestedVirtualization`<sup>Required</sup> <a name="enableNestedVirtualization" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```typescript
public readonly enableNestedVirtualization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUefiNetworking`<sup>Required</sup> <a name="enableUefiNetworking" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```typescript
public readonly enableUefiNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceMonitoringUnit`<sup>Required</sup> <a name="performanceMonitoringUnit" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```typescript
public readonly performanceMonitoringUnit: string;
```

- *Type:* string

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `turboMode`<sup>Required</sup> <a name="turboMode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```typescript
public readonly turboMode: string;
```

- *Type:* string

---

##### `visibleCoreCount`<sup>Required</sup> <a name="visibleCoreCount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```typescript
public readonly visibleCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateAdvancedMachineFeatures;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateAdvancedMachineFeatures">ComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### ComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="ComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">resetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">resetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidentialInstanceType` <a name="resetConfidentialInstanceType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```typescript
public resetConfidentialInstanceType(): void
```

##### `resetEnableConfidentialCompute` <a name="resetEnableConfidentialCompute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```typescript
public resetEnableConfidentialCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">confidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enableConfidentialComputeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">confidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidentialInstanceTypeInput`<sup>Optional</sup> <a name="confidentialInstanceTypeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```typescript
public readonly confidentialInstanceTypeInput: string;
```

- *Type:* string

---

##### `enableConfidentialComputeInput`<sup>Optional</sup> <a name="enableConfidentialComputeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```typescript
public readonly enableConfidentialComputeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `confidentialInstanceType`<sup>Required</sup> <a name="confidentialInstanceType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```typescript
public readonly confidentialInstanceType: string;
```

- *Type:* string

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```typescript
public readonly enableConfidentialCompute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateConfidentialInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateConfidentialInstanceConfig">ComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateDiskDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### ComputeInstanceTemplateDiskList <a name="ComputeInstanceTemplateDiskList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>[]

---


### ComputeInstanceTemplateDiskOutputReference <a name="ComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey">putDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">putSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">putSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">resetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskName">resetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedIops">resetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourcePolicies">resetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImage">resetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">resetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot">resetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">resetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskEncryptionKey` <a name="putDiskEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```typescript
public putDiskEncryptionKey(value: ComputeInstanceTemplateDiskDiskEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `putSourceImageEncryptionKey` <a name="putSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```typescript
public putSourceImageEncryptionKey(value: ComputeInstanceTemplateDiskSourceImageEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `putSourceSnapshotEncryptionKey` <a name="putSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```typescript
public putSourceSnapshotEncryptionKey(value: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetBoot"></a>

```typescript
public resetBoot(): void
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetDiskEncryptionKey` <a name="resetDiskEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```typescript
public resetDiskEncryptionKey(): void
```

##### `resetDiskName` <a name="resetDiskName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskName"></a>

```typescript
public resetDiskName(): void
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetProvisionedIops` <a name="resetProvisionedIops" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```typescript
public resetProvisionedIops(): void
```

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```

##### `resetResourcePolicies` <a name="resetResourcePolicies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```typescript
public resetResourcePolicies(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceImage` <a name="resetSourceImage" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```typescript
public resetSourceImage(): void
```

##### `resetSourceImageEncryptionKey` <a name="resetSourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```typescript
public resetSourceImageEncryptionKey(): void
```

##### `resetSourceSnapshot` <a name="resetSourceSnapshot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```typescript
public resetSourceSnapshot(): void
```

##### `resetSourceSnapshotEncryptionKey` <a name="resetSourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```typescript
public resetSourceSnapshotEncryptionKey(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.bootInput">bootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">diskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput">provisionedIopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">resourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">sourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">sourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">sourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskName">diskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIops">provisionedIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">resourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImage">sourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">sourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```typescript
public readonly diskEncryptionKey: ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference">ComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```typescript
public readonly sourceImageEncryptionKey: ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```typescript
public readonly sourceSnapshotEncryptionKey: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.bootInput"></a>

```typescript
public readonly bootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `diskEncryptionKeyInput`<sup>Optional</sup> <a name="diskEncryptionKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```typescript
public readonly diskEncryptionKeyInput: ComputeInstanceTemplateDiskDiskEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskDiskEncryptionKey">ComputeInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```typescript
public readonly diskNameInput: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: number;
```

- *Type:* number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `provisionedIopsInput`<sup>Optional</sup> <a name="provisionedIopsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```typescript
public readonly provisionedIopsInput: number;
```

- *Type:* number

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: number;
```

- *Type:* number

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePoliciesInput`<sup>Optional</sup> <a name="resourcePoliciesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```typescript
public readonly resourcePoliciesInput: string[];
```

- *Type:* string[]

---

##### `sourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="sourceImageEncryptionKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```typescript
public readonly sourceImageEncryptionKeyInput: ComputeInstanceTemplateDiskSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```typescript
public readonly sourceImageInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="sourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```typescript
public readonly sourceSnapshotEncryptionKeyInput: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `sourceSnapshotInput`<sup>Optional</sup> <a name="sourceSnapshotInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```typescript
public readonly sourceSnapshotInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```typescript
public readonly diskName: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```typescript
public readonly provisionedIops: number;
```

- *Type:* number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: number;
```

- *Type:* number

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

---

##### `sourceSnapshot`<sup>Required</sup> <a name="sourceSnapshot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```typescript
public readonly sourceSnapshot: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDisk">ComputeInstanceTemplateDisk</a>

---


### ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateDiskSourceImageEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceImageEncryptionKey">ComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink">resetKmsKeySelfLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">resetKmsKeyServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey">resetRawKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey">resetRsaEncryptedKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeySelfLink` <a name="resetKmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeySelfLink"></a>

```typescript
public resetKmsKeySelfLink(): void
```

##### `resetKmsKeyServiceAccount` <a name="resetKmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```typescript
public resetKmsKeyServiceAccount(): void
```

##### `resetRawKey` <a name="resetRawKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetRawKey"></a>

```typescript
public resetRawKey(): void
```

##### `resetRsaEncryptedKey` <a name="resetRsaEncryptedKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetRsaEncryptedKey"></a>

```typescript
public resetRsaEncryptedKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">kmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput">rawKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput">rsaEncryptedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeySelfLinkInput`<sup>Optional</sup> <a name="kmsKeySelfLinkInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```typescript
public readonly kmsKeySelfLinkInput: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccountInput`<sup>Optional</sup> <a name="kmsKeyServiceAccountInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```typescript
public readonly kmsKeyServiceAccountInput: string;
```

- *Type:* string

---

##### `rawKeyInput`<sup>Optional</sup> <a name="rawKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKeyInput"></a>

```typescript
public readonly rawKeyInput: string;
```

- *Type:* string

---

##### `rsaEncryptedKeyInput`<sup>Optional</sup> <a name="rsaEncryptedKeyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKeyInput"></a>

```typescript
public readonly rsaEncryptedKeyInput: string;
```

- *Type:* string

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```typescript
public readonly kmsKeySelfLink: string;
```

- *Type:* string

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```typescript
public readonly kmsKeyServiceAccount: string;
```

- *Type:* string

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```typescript
public readonly rawKey: string;
```

- *Type:* string

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```typescript
public readonly rsaEncryptedKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">ComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### ComputeInstanceTemplateGuestAcceleratorList <a name="ComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateGuestAccelerator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>[]

---


### ComputeInstanceTemplateGuestAcceleratorOutputReference <a name="ComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateGuestAccelerator;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateGuestAccelerator">ComputeInstanceTemplateGuestAccelerator</a>

---


### ComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="ComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

---


### ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">resetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNatIp` <a name="resetNatIp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```typescript
public resetNatIp(): void
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```typescript
public resetNetworkTier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">natIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">natIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

---

##### `natIpInput`<sup>Optional</sup> <a name="natIpInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```typescript
public readonly natIpInput: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `natIp`<sup>Required</sup> <a name="natIp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```typescript
public readonly natIp: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterfaceAccessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

---


### ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">resetSubnetworkRangeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetworkRangeName` <a name="resetSubnetworkRangeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```typescript
public resetSubnetworkRangeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```typescript
public readonly subnetworkRangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterfaceAliasIpRange;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

---


### ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">externalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">externalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">publicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">networkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">networkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIpv6`<sup>Required</sup> <a name="externalIpv6" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```typescript
public readonly externalIpv6: string;
```

- *Type:* string

---

##### `externalIpv6PrefixLength`<sup>Required</sup> <a name="externalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```typescript
public readonly externalIpv6PrefixLength: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicPtrDomainName`<sup>Required</sup> <a name="publicPtrDomainName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```typescript
public readonly publicPtrDomainName: string;
```

- *Type:* string

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```typescript
public readonly networkTierInput: string;
```

- *Type:* string

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```typescript
public readonly networkTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### ComputeInstanceTemplateNetworkInterfaceList <a name="ComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>[]

---


### ComputeInstanceTemplateNetworkInterfaceOutputReference <a name="ComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">putAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">putIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">resetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">resetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">resetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">resetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">resetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">resetSubnetworkProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```typescript
public putAccessConfig(value: IResolvable | ComputeInstanceTemplateNetworkInterfaceAccessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

---

##### `putAliasIpRange` <a name="putAliasIpRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```typescript
public putAliasIpRange(value: IResolvable | ComputeInstanceTemplateNetworkInterfaceAliasIpRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

---

##### `putIpv6AccessConfig` <a name="putIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```typescript
public putIpv6AccessConfig(value: IResolvable | ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

---

##### `resetAccessConfig` <a name="resetAccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```typescript
public resetAccessConfig(): void
```

##### `resetAliasIpRange` <a name="resetAliasIpRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```typescript
public resetAliasIpRange(): void
```

##### `resetInternalIpv6PrefixLength` <a name="resetInternalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```typescript
public resetInternalIpv6PrefixLength(): void
```

##### `resetIpv6AccessConfig` <a name="resetIpv6AccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```typescript
public resetIpv6AccessConfig(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkIp` <a name="resetNetworkIp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```typescript
public resetNetworkIp(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```typescript
public resetQueueCount(): void
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```typescript
public resetStackType(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetSubnetworkProject` <a name="resetSubnetworkProject" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```typescript
public resetSubnetworkProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList">ComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">aliasIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">aliasIpRangeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">internalIpv6PrefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">ipv6AccessConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">networkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">stackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">subnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">internalIpv6PrefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">networkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">queueCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">stackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">subnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```typescript
public readonly accessConfig: ComputeInstanceTemplateNetworkInterfaceAccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfigList">ComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `aliasIpRange`<sup>Required</sup> <a name="aliasIpRange" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```typescript
public readonly aliasIpRange: ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">ComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `ipv6AccessConfig`<sup>Required</sup> <a name="ipv6AccessConfig" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```typescript
public readonly ipv6AccessConfig: ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```typescript
public readonly ipv6AccessType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: IResolvable | ComputeInstanceTemplateNetworkInterfaceAccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAccessConfig">ComputeInstanceTemplateNetworkInterfaceAccessConfig</a>[]

---

##### `aliasIpRangeInput`<sup>Optional</sup> <a name="aliasIpRangeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```typescript
public readonly aliasIpRangeInput: IResolvable | ComputeInstanceTemplateNetworkInterfaceAliasIpRange[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceAliasIpRange">ComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>[]

---

##### `internalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="internalIpv6PrefixLengthInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```typescript
public readonly internalIpv6PrefixLengthInput: number;
```

- *Type:* number

---

##### `ipv6AccessConfigInput`<sup>Optional</sup> <a name="ipv6AccessConfigInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```typescript
public readonly ipv6AccessConfigInput: IResolvable | ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">ComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>[]

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `networkIpInput`<sup>Optional</sup> <a name="networkIpInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```typescript
public readonly networkIpInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```typescript
public readonly queueCountInput: number;
```

- *Type:* number

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```typescript
public readonly stackTypeInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `subnetworkProjectInput`<sup>Optional</sup> <a name="subnetworkProjectInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```typescript
public readonly subnetworkProjectInput: string;
```

- *Type:* string

---

##### `internalIpv6PrefixLength`<sup>Required</sup> <a name="internalIpv6PrefixLength" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```typescript
public readonly internalIpv6PrefixLength: number;
```

- *Type:* number

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `networkIp`<sup>Required</sup> <a name="networkIp" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```typescript
public readonly networkIp: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```typescript
public readonly stackType: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `subnetworkProject`<sup>Required</sup> <a name="subnetworkProject" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```typescript
public readonly subnetworkProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkInterface">ComputeInstanceTemplateNetworkInterface</a>

---


### ComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="ComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">totalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">totalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTierInput`<sup>Optional</sup> <a name="totalEgressBandwidthTierInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```typescript
public readonly totalEgressBandwidthTierInput: string;
```

- *Type:* string

---

##### `totalEgressBandwidthTier`<sup>Required</sup> <a name="totalEgressBandwidthTier" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```typescript
public readonly totalEgressBandwidthTier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateNetworkPerformanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateNetworkPerformanceConfig">ComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### ComputeInstanceTemplateReservationAffinityOutputReference <a name="ComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">putSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">resetSpecificReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpecificReservation` <a name="putSpecificReservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```typescript
public putSpecificReservation(value: ComputeInstanceTemplateReservationAffinitySpecificReservation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `resetSpecificReservation` <a name="resetSpecificReservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```typescript
public resetSpecificReservation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">specificReservation</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">specificReservationInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `specificReservation`<sup>Required</sup> <a name="specificReservation" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```typescript
public readonly specificReservation: ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference">ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `specificReservationInput`<sup>Optional</sup> <a name="specificReservationInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```typescript
public readonly specificReservationInput: ComputeInstanceTemplateReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinity">ComputeInstanceTemplateReservationAffinity</a>

---


### ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateReservationAffinitySpecificReservation;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateReservationAffinitySpecificReservation">ComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

---


### ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

---


### ComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="ComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```typescript
public get(index: number): ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]

---


### ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateSchedulingNodeAffinities;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>

---


### ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">resetDiscardLocalSsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscardLocalSsd` <a name="resetDiscardLocalSsd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```typescript
public resetDiscardLocalSsd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">discardLocalSsdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">discardLocalSsd</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `discardLocalSsdInput`<sup>Optional</sup> <a name="discardLocalSsdInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```typescript
public readonly discardLocalSsdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discardLocalSsd`<sup>Required</sup> <a name="discardLocalSsd" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```typescript
public readonly discardLocalSsd: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### ComputeInstanceTemplateSchedulingOutputReference <a name="ComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">putLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration">putMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities">putNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">putOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">resetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">resetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">resetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">resetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">resetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities">resetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">resetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">resetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetTerminationTime">resetTerminationTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocalSsdRecoveryTimeout` <a name="putLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```typescript
public putLocalSsdRecoveryTimeout(value: IResolvable | ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

---

##### `putMaxRunDuration` <a name="putMaxRunDuration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```typescript
public putMaxRunDuration(value: ComputeInstanceTemplateSchedulingMaxRunDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `putNodeAffinities` <a name="putNodeAffinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```typescript
public putNodeAffinities(value: IResolvable | ComputeInstanceTemplateSchedulingNodeAffinities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]

---

##### `putOnInstanceStopAction` <a name="putOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```typescript
public putOnInstanceStopAction(value: ComputeInstanceTemplateSchedulingOnInstanceStopAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `resetAutomaticRestart` <a name="resetAutomaticRestart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```typescript
public resetAutomaticRestart(): void
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetInstanceTerminationAction` <a name="resetInstanceTerminationAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```typescript
public resetInstanceTerminationAction(): void
```

##### `resetLocalSsdRecoveryTimeout` <a name="resetLocalSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```typescript
public resetLocalSsdRecoveryTimeout(): void
```

##### `resetMaxRunDuration` <a name="resetMaxRunDuration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```typescript
public resetMaxRunDuration(): void
```

##### `resetMinNodeCpus` <a name="resetMinNodeCpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```typescript
public resetMinNodeCpus(): void
```

##### `resetNodeAffinities` <a name="resetNodeAffinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```typescript
public resetNodeAffinities(): void
```

##### `resetOnHostMaintenance` <a name="resetOnHostMaintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```typescript
public resetOnHostMaintenance(): void
```

##### `resetOnInstanceStopAction` <a name="resetOnInstanceStopAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```typescript
public resetOnInstanceStopAction(): void
```

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```typescript
public resetPreemptible(): void
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```typescript
public resetProvisioningModel(): void
```

##### `resetTerminationTime` <a name="resetTerminationTime" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.resetTerminationTime"></a>

```typescript
public resetTerminationTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">localSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration">maxRunDuration</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">nodeAffinities</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList">ComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">onInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">automaticRestartInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">instanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">localSsdRecoveryTimeoutInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">maxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">minNodeCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">nodeAffinitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">onHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">onInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">provisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTimeInput">terminationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">automaticRestart</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">instanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">minNodeCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">onHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTime">terminationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localSsdRecoveryTimeout`<sup>Required</sup> <a name="localSsdRecoveryTimeout" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```typescript
public readonly localSsdRecoveryTimeout: ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `maxRunDuration`<sup>Required</sup> <a name="maxRunDuration" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```typescript
public readonly maxRunDuration: ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference">ComputeInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `nodeAffinities`<sup>Required</sup> <a name="nodeAffinities" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```typescript
public readonly nodeAffinities: ComputeInstanceTemplateSchedulingNodeAffinitiesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinitiesList">ComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `onInstanceStopAction`<sup>Required</sup> <a name="onInstanceStopAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```typescript
public readonly onInstanceStopAction: ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference">ComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `automaticRestartInput`<sup>Optional</sup> <a name="automaticRestartInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```typescript
public readonly automaticRestartInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: number;
```

- *Type:* number

---

##### `instanceTerminationActionInput`<sup>Optional</sup> <a name="instanceTerminationActionInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```typescript
public readonly instanceTerminationActionInput: string;
```

- *Type:* string

---

##### `localSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="localSsdRecoveryTimeoutInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```typescript
public readonly localSsdRecoveryTimeoutInput: IResolvable | ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">ComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>[]

---

##### `maxRunDurationInput`<sup>Optional</sup> <a name="maxRunDurationInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```typescript
public readonly maxRunDurationInput: ComputeInstanceTemplateSchedulingMaxRunDuration;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingMaxRunDuration">ComputeInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `minNodeCpusInput`<sup>Optional</sup> <a name="minNodeCpusInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```typescript
public readonly minNodeCpusInput: number;
```

- *Type:* number

---

##### `nodeAffinitiesInput`<sup>Optional</sup> <a name="nodeAffinitiesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```typescript
public readonly nodeAffinitiesInput: IResolvable | ComputeInstanceTemplateSchedulingNodeAffinities[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingNodeAffinities">ComputeInstanceTemplateSchedulingNodeAffinities</a>[]

---

##### `onHostMaintenanceInput`<sup>Optional</sup> <a name="onHostMaintenanceInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```typescript
public readonly onHostMaintenanceInput: string;
```

- *Type:* string

---

##### `onInstanceStopActionInput`<sup>Optional</sup> <a name="onInstanceStopActionInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```typescript
public readonly onInstanceStopActionInput: ComputeInstanceTemplateSchedulingOnInstanceStopAction;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOnInstanceStopAction">ComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```typescript
public readonly preemptibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```typescript
public readonly provisioningModelInput: string;
```

- *Type:* string

---

##### `terminationTimeInput`<sup>Optional</sup> <a name="terminationTimeInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTimeInput"></a>

```typescript
public readonly terminationTimeInput: string;
```

- *Type:* string

---

##### `automaticRestart`<sup>Required</sup> <a name="automaticRestart" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```typescript
public readonly automaticRestart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: number;
```

- *Type:* number

---

##### `instanceTerminationAction`<sup>Required</sup> <a name="instanceTerminationAction" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```typescript
public readonly instanceTerminationAction: string;
```

- *Type:* string

---

##### `minNodeCpus`<sup>Required</sup> <a name="minNodeCpus" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```typescript
public readonly minNodeCpus: number;
```

- *Type:* number

---

##### `onHostMaintenance`<sup>Required</sup> <a name="onHostMaintenance" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```typescript
public readonly onHostMaintenance: string;
```

- *Type:* string

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

---

##### `terminationTime`<sup>Required</sup> <a name="terminationTime" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.terminationTime"></a>

```typescript
public readonly terminationTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateScheduling;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateScheduling">ComputeInstanceTemplateScheduling</a>

---


### ComputeInstanceTemplateServiceAccountOutputReference <a name="ComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateServiceAccount">ComputeInstanceTemplateServiceAccount</a>

---


### ComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="ComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceTemplateShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateShieldedInstanceConfig">ComputeInstanceTemplateShieldedInstanceConfig</a>

---


### ComputeInstanceTemplateTimeoutsOutputReference <a name="ComputeInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInstanceTemplate } from '@cdktf/provider-google'

new computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeInstanceTemplate.ComputeInstanceTemplateTimeouts">ComputeInstanceTemplateTimeouts</a>

---



