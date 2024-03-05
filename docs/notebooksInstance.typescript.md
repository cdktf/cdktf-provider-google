# `notebooksInstance` Submodule <a name="`notebooksInstance` Submodule" id="@cdktf/provider-google.notebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksInstance <a name="NotebooksInstance" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstance(scope: Construct, id: string, config: NotebooksInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig">NotebooksInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig">NotebooksInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig">putAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity">putReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig">resetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType">resetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath">resetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb">resetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType">resetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver">resetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners">resetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess">resetNoProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp">resetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk">resetNoRemoveDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity">resetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes">resetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet">resetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAcceleratorConfig` <a name="putAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig"></a>

```typescript
public putAcceleratorConfig(value: NotebooksInstanceAcceleratorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage"></a>

```typescript
public putContainerImage(value: NotebooksInstanceContainerImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `putReservationAffinity` <a name="putReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity"></a>

```typescript
public putReservationAffinity(value: NotebooksInstanceReservationAffinity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: NotebooksInstanceShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: NotebooksInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage"></a>

```typescript
public putVmImage(value: NotebooksInstanceVmImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `resetAcceleratorConfig` <a name="resetAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetAcceleratorConfig"></a>

```typescript
public resetAcceleratorConfig(): void
```

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskSizeGb"></a>

```typescript
public resetBootDiskSizeGb(): void
```

##### `resetBootDiskType` <a name="resetBootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetBootDiskType"></a>

```typescript
public resetBootDiskType(): void
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetContainerImage"></a>

```typescript
public resetContainerImage(): void
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetCustomGpuDriverPath` <a name="resetCustomGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetCustomGpuDriverPath"></a>

```typescript
public resetCustomGpuDriverPath(): void
```

##### `resetDataDiskSizeGb` <a name="resetDataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskSizeGb"></a>

```typescript
public resetDataDiskSizeGb(): void
```

##### `resetDataDiskType` <a name="resetDataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDataDiskType"></a>

```typescript
public resetDataDiskType(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetDiskEncryption"></a>

```typescript
public resetDiskEncryption(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallGpuDriver` <a name="resetInstallGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstallGpuDriver"></a>

```typescript
public resetInstallGpuDriver(): void
```

##### `resetInstanceOwners` <a name="resetInstanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetInstanceOwners"></a>

```typescript
public resetInstanceOwners(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNicType"></a>

```typescript
public resetNicType(): void
```

##### `resetNoProxyAccess` <a name="resetNoProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoProxyAccess"></a>

```typescript
public resetNoProxyAccess(): void
```

##### `resetNoPublicIp` <a name="resetNoPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoPublicIp"></a>

```typescript
public resetNoPublicIp(): void
```

##### `resetNoRemoveDataDisk` <a name="resetNoRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetNoRemoveDataDisk"></a>

```typescript
public resetNoRemoveDataDisk(): void
```

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetPostStartupScript"></a>

```typescript
public resetPostStartupScript(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReservationAffinity` <a name="resetReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetReservationAffinity"></a>

```typescript
public resetReservationAffinity(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetServiceAccountScopes` <a name="resetServiceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetServiceAccountScopes"></a>

```typescript
public resetServiceAccountScopes(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetSubnet"></a>

```typescript
public resetSubnet(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetUpdateTime"></a>

```typescript
public resetUpdateTime(): void
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.resetVmImage"></a>

```typescript
public resetVmImage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotebooksInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

notebooksInstance.NotebooksInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

notebooksInstance.NotebooksInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

notebooksInstance.NotebooksInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

notebooksInstance.NotebooksInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotebooksInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotebooksInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotebooksInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotebooksInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri">proxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput">acceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput">bootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput">customGpuDriverPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput">dataDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput">dataDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput">installGpuDriverInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput">instanceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput">nicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput">noProxyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput">noPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput">noRemoveDataDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput">reservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput">serviceAccountScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput">updateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType">bootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath">customGpuDriverPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType">dataDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver">installGpuDriver</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType">nicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess">noProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp">noPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceleratorConfig`<sup>Required</sup> <a name="acceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfig"></a>

```typescript
public readonly acceleratorConfig: NotebooksInstanceAcceleratorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference">NotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImage"></a>

```typescript
public readonly containerImage: NotebooksInstanceContainerImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference">NotebooksInstanceContainerImageOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `proxyUri`<sup>Required</sup> <a name="proxyUri" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.proxyUri"></a>

```typescript
public readonly proxyUri: string;
```

- *Type:* string

---

##### `reservationAffinity`<sup>Required</sup> <a name="reservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: NotebooksInstanceReservationAffinityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference">NotebooksInstanceReservationAffinityOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: NotebooksInstanceShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference">NotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeouts"></a>

```typescript
public readonly timeouts: NotebooksInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference">NotebooksInstanceTimeoutsOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImage"></a>

```typescript
public readonly vmImage: NotebooksInstanceVmImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference">NotebooksInstanceVmImageOutputReference</a>

---

##### `acceleratorConfigInput`<sup>Optional</sup> <a name="acceleratorConfigInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.acceleratorConfigInput"></a>

```typescript
public readonly acceleratorConfigInput: NotebooksInstanceAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGbInput"></a>

```typescript
public readonly bootDiskSizeGbInput: number;
```

- *Type:* number

---

##### `bootDiskTypeInput`<sup>Optional</sup> <a name="bootDiskTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskTypeInput"></a>

```typescript
public readonly bootDiskTypeInput: string;
```

- *Type:* string

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.containerImageInput"></a>

```typescript
public readonly containerImageInput: NotebooksInstanceContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `customGpuDriverPathInput`<sup>Optional</sup> <a name="customGpuDriverPathInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPathInput"></a>

```typescript
public readonly customGpuDriverPathInput: string;
```

- *Type:* string

---

##### `dataDiskSizeGbInput`<sup>Optional</sup> <a name="dataDiskSizeGbInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGbInput"></a>

```typescript
public readonly dataDiskSizeGbInput: number;
```

- *Type:* number

---

##### `dataDiskTypeInput`<sup>Optional</sup> <a name="dataDiskTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskTypeInput"></a>

```typescript
public readonly dataDiskTypeInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryptionInput"></a>

```typescript
public readonly diskEncryptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installGpuDriverInput`<sup>Optional</sup> <a name="installGpuDriverInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriverInput"></a>

```typescript
public readonly installGpuDriverInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceOwnersInput`<sup>Optional</sup> <a name="instanceOwnersInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwnersInput"></a>

```typescript
public readonly instanceOwnersInput: string[];
```

- *Type:* string[]

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicTypeInput"></a>

```typescript
public readonly nicTypeInput: string;
```

- *Type:* string

---

##### `noProxyAccessInput`<sup>Optional</sup> <a name="noProxyAccessInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccessInput"></a>

```typescript
public readonly noProxyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noPublicIpInput`<sup>Optional</sup> <a name="noPublicIpInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIpInput"></a>

```typescript
public readonly noPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noRemoveDataDiskInput`<sup>Optional</sup> <a name="noRemoveDataDiskInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDiskInput"></a>

```typescript
public readonly noRemoveDataDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScriptInput"></a>

```typescript
public readonly postStartupScriptInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservationAffinityInput`<sup>Optional</sup> <a name="reservationAffinityInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.reservationAffinityInput"></a>

```typescript
public readonly reservationAffinityInput: NotebooksInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceAccountScopesInput`<sup>Optional</sup> <a name="serviceAccountScopesInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopesInput"></a>

```typescript
public readonly serviceAccountScopesInput: string[];
```

- *Type:* string[]

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: NotebooksInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NotebooksInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTimeInput"></a>

```typescript
public readonly updateTimeInput: string;
```

- *Type:* string

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.vmImageInput"></a>

```typescript
public readonly vmImageInput: NotebooksInstanceVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

---

##### `bootDiskType`<sup>Required</sup> <a name="bootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.bootDiskType"></a>

```typescript
public readonly bootDiskType: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `customGpuDriverPath`<sup>Required</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.customGpuDriverPath"></a>

```typescript
public readonly customGpuDriverPath: string;
```

- *Type:* string

---

##### `dataDiskSizeGb`<sup>Required</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskSizeGb"></a>

```typescript
public readonly dataDiskSizeGb: number;
```

- *Type:* number

---

##### `dataDiskType`<sup>Required</sup> <a name="dataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.dataDiskType"></a>

```typescript
public readonly dataDiskType: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installGpuDriver`<sup>Required</sup> <a name="installGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.installGpuDriver"></a>

```typescript
public readonly installGpuDriver: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `instanceOwners`<sup>Required</sup> <a name="instanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

---

##### `noProxyAccess`<sup>Required</sup> <a name="noProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noProxyAccess"></a>

```typescript
public readonly noProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noPublicIp`<sup>Required</sup> <a name="noPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noPublicIp"></a>

```typescript
public readonly noPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noRemoveDataDisk`<sup>Required</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.noRemoveDataDisk"></a>

```typescript
public readonly noRemoveDataDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `serviceAccountScopes`<sup>Required</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.serviceAccountScopes"></a>

```typescript
public readonly serviceAccountScopes: string[];
```

- *Type:* string[]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksInstanceAcceleratorConfig <a name="NotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceAcceleratorConfig: notebooksInstance.NotebooksInstanceAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount">coreCount</a></code> | <code>number</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type">type</a></code> | <code>string</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#core_count NotebooksInstance#core_count}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#type NotebooksInstance#type}

---

### NotebooksInstanceConfig <a name="NotebooksInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceConfig: notebooksInstance.NotebooksInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location">location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType">machineType</a></code> | <code>string</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name">name</a></code> | <code>string</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType">bootDiskType</a></code> | <code>string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime">createTime</a></code> | <code>string</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath">customGpuDriverPath</a></code> | <code>string</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb">dataDiskSizeGb</a></code> | <code>number</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType">dataDiskType</a></code> | <code>string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption">diskEncryption</a></code> | <code>string</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#id NotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver">installGpuDriver</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners">instanceOwners</a></code> | <code>string[]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network">network</a></code> | <code>string</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType">nicType</a></code> | <code>string</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess">noProxyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp">noPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk">noRemoveDataDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#project NotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity">reservationAffinity</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes">serviceAccountScopes</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet">subnet</a></code> | <code>string</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags">tags</a></code> | <code>string[]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime">updateTime</a></code> | <code>string</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#location NotebooksInstance#location}

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#machine_type NotebooksInstance#machine_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#name NotebooksInstance#name}

---

##### `acceleratorConfig`<sup>Optional</sup> <a name="acceleratorConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.acceleratorConfig"></a>

```typescript
public readonly acceleratorConfig: NotebooksInstanceAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#accelerator_config NotebooksInstance#accelerator_config}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#boot_disk_size_gb NotebooksInstance#boot_disk_size_gb}

---

##### `bootDiskType`<sup>Optional</sup> <a name="bootDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.bootDiskType"></a>

```typescript
public readonly bootDiskType: string;
```

- *Type:* string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#boot_disk_type NotebooksInstance#boot_disk_type}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.containerImage"></a>

```typescript
public readonly containerImage: NotebooksInstanceContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#container_image NotebooksInstance#container_image}

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#create_time NotebooksInstance#create_time}

---

##### `customGpuDriverPath`<sup>Optional</sup> <a name="customGpuDriverPath" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.customGpuDriverPath"></a>

```typescript
public readonly customGpuDriverPath: string;
```

- *Type:* string

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#custom_gpu_driver_path NotebooksInstance#custom_gpu_driver_path}

---

##### `dataDiskSizeGb`<sup>Optional</sup> <a name="dataDiskSizeGb" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```typescript
public readonly dataDiskSizeGb: number;
```

- *Type:* number

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#data_disk_size_gb NotebooksInstance#data_disk_size_gb}

---

##### `dataDiskType`<sup>Optional</sup> <a name="dataDiskType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.dataDiskType"></a>

```typescript
public readonly dataDiskType: string;
```

- *Type:* string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#data_disk_type NotebooksInstance#data_disk_type}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#desired_state NotebooksInstance#desired_state}

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.diskEncryption"></a>

```typescript
public readonly diskEncryption: string;
```

- *Type:* string

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#disk_encryption NotebooksInstance#disk_encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#id NotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installGpuDriver`<sup>Optional</sup> <a name="installGpuDriver" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.installGpuDriver"></a>

```typescript
public readonly installGpuDriver: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#install_gpu_driver NotebooksInstance#install_gpu_driver}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.instanceOwners"></a>

```typescript
public readonly instanceOwners: string[];
```

- *Type:* string[]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#instance_owners NotebooksInstance#instance_owners}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#kms_key NotebooksInstance#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#labels NotebooksInstance#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#metadata NotebooksInstance#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#network NotebooksInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.nicType"></a>

```typescript
public readonly nicType: string;
```

- *Type:* string

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#nic_type NotebooksInstance#nic_type}

---

##### `noProxyAccess`<sup>Optional</sup> <a name="noProxyAccess" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noProxyAccess"></a>

```typescript
public readonly noProxyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#no_proxy_access NotebooksInstance#no_proxy_access}

---

##### `noPublicIp`<sup>Optional</sup> <a name="noPublicIp" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noPublicIp"></a>

```typescript
public readonly noPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#no_public_ip NotebooksInstance#no_public_ip}

---

##### `noRemoveDataDisk`<sup>Optional</sup> <a name="noRemoveDataDisk" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```typescript
public readonly noRemoveDataDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#no_remove_data_disk NotebooksInstance#no_remove_data_disk}

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#post_startup_script NotebooksInstance#post_startup_script}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#project NotebooksInstance#project}.

---

##### `reservationAffinity`<sup>Optional</sup> <a name="reservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.reservationAffinity"></a>

```typescript
public readonly reservationAffinity: NotebooksInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#reservation_affinity NotebooksInstance#reservation_affinity}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#service_account NotebooksInstance#service_account}

---

##### `serviceAccountScopes`<sup>Optional</sup> <a name="serviceAccountScopes" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.serviceAccountScopes"></a>

```typescript
public readonly serviceAccountScopes: string[];
```

- *Type:* string[]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#service_account_scopes NotebooksInstance#service_account_scopes}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: NotebooksInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#shielded_instance_config NotebooksInstance#shielded_instance_config}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#subnet NotebooksInstance#subnet}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#tags NotebooksInstance#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NotebooksInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#timeouts NotebooksInstance#timeouts}

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#update_time NotebooksInstance#update_time}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceConfig.property.vmImage"></a>

```typescript
public readonly vmImage: NotebooksInstanceVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#vm_image NotebooksInstance#vm_image}

---

### NotebooksInstanceContainerImage <a name="NotebooksInstanceContainerImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceContainerImage: notebooksInstance.NotebooksInstanceContainerImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository">repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag">tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#repository NotebooksInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#tag NotebooksInstance#tag}

---

### NotebooksInstanceReservationAffinity <a name="NotebooksInstanceReservationAffinity" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceReservationAffinity: notebooksInstance.NotebooksInstanceReservationAffinity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType">consumeReservationType</a></code> | <code>string</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key">key</a></code> | <code>string</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values">values</a></code> | <code>string[]</code> | Corresponds to the label values of reservation resource. |

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```typescript
public readonly consumeReservationType: string;
```

- *Type:* string

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#consume_reservation_type NotebooksInstance#consume_reservation_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#key NotebooksInstance#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#values NotebooksInstance#values}

---

### NotebooksInstanceShieldedInstanceConfig <a name="NotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceShieldedInstanceConfig: notebooksInstance.NotebooksInstanceShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#enable_integrity_monitoring NotebooksInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#enable_secure_boot NotebooksInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#enable_vtpm NotebooksInstance#enable_vtpm}

---

### NotebooksInstanceTimeouts <a name="NotebooksInstanceTimeouts" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceTimeouts: notebooksInstance.NotebooksInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#create NotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#delete NotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#update NotebooksInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#create NotebooksInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#delete NotebooksInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#update NotebooksInstance#update}.

---

### NotebooksInstanceVmImage <a name="NotebooksInstanceVmImage" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

const notebooksInstanceVmImage: notebooksInstance.NotebooksInstanceVmImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project">project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily">imageFamily</a></code> | <code>string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName">imageName</a></code> | <code>string</code> | Use VM image name to find the image. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#project NotebooksInstance#project}

---

##### `imageFamily`<sup>Optional</sup> <a name="imageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageFamily"></a>

```typescript
public readonly imageFamily: string;
```

- *Type:* string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#image_family NotebooksInstance#image_family}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/notebooks_instance#image_name NotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksInstanceAcceleratorConfigOutputReference <a name="NotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```typescript
public readonly coreCountInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksInstanceAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceAcceleratorConfig">NotebooksInstanceAcceleratorConfig</a>

---


### NotebooksInstanceContainerImageOutputReference <a name="NotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstanceContainerImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksInstanceContainerImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceContainerImage">NotebooksInstanceContainerImage</a>

---


### NotebooksInstanceReservationAffinityOutputReference <a name="NotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstanceReservationAffinityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">consumeReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">consumeReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumeReservationTypeInput`<sup>Optional</sup> <a name="consumeReservationTypeInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```typescript
public readonly consumeReservationTypeInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `consumeReservationType`<sup>Required</sup> <a name="consumeReservationType" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```typescript
public readonly consumeReservationType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksInstanceReservationAffinity;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceReservationAffinity">NotebooksInstanceReservationAffinity</a>

---


### NotebooksInstanceShieldedInstanceConfigOutputReference <a name="NotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```typescript
public resetEnableIntegrityMonitoring(): void
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```typescript
public resetEnableVtpm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```typescript
public readonly enableIntegrityMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```typescript
public readonly enableVtpmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```typescript
public readonly enableIntegrityMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```typescript
public readonly enableVtpm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksInstanceShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceShieldedInstanceConfig">NotebooksInstanceShieldedInstanceConfig</a>

---


### NotebooksInstanceTimeoutsOutputReference <a name="NotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotebooksInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceTimeouts">NotebooksInstanceTimeouts</a>

---


### NotebooksInstanceVmImageOutputReference <a name="NotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer"></a>

```typescript
import { notebooksInstance } from '@cdktf/provider-google'

new notebooksInstance.NotebooksInstanceVmImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily">resetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName">resetImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageFamily` <a name="resetImageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```typescript
public resetImageFamily(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput">imageFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily">imageFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageFamilyInput`<sup>Optional</sup> <a name="imageFamilyInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```typescript
public readonly imageFamilyInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `imageFamily`<sup>Required</sup> <a name="imageFamily" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```typescript
public readonly imageFamily: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotebooksInstanceVmImage;
```

- *Type:* <a href="#@cdktf/provider-google.notebooksInstance.NotebooksInstanceVmImage">NotebooksInstanceVmImage</a>

---



