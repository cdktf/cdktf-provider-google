# `alloydbInstance` Submodule <a name="`alloydbInstance` Submodule" id="@cdktf/provider-google.alloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlloydbInstance <a name="AlloydbInstance" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstance(scope: Construct, id: string, config: AlloydbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig">AlloydbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig">AlloydbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig">putClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putMachineConfig">putMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putPscInstanceConfig">putPscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig">putQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putReadPoolConfig">putReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetActivationPolicy">resetActivationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAvailabilityType">resetAvailabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetClientConnectionConfig">resetClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDatabaseFlags">resetDatabaseFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetGceZone">resetGceZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetMachineConfig">resetMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetPscInstanceConfig">resetPscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetQueryInsightsConfig">resetQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetReadPoolConfig">resetReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientConnectionConfig` <a name="putClientConnectionConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig"></a>

```typescript
public putClientConnectionConfig(value: AlloydbInstanceClientConnectionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

---

##### `putMachineConfig` <a name="putMachineConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putMachineConfig"></a>

```typescript
public putMachineConfig(value: AlloydbInstanceMachineConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: AlloydbInstanceNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a>

---

##### `putPscInstanceConfig` <a name="putPscInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putPscInstanceConfig"></a>

```typescript
public putPscInstanceConfig(value: AlloydbInstancePscInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putPscInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a>

---

##### `putQueryInsightsConfig` <a name="putQueryInsightsConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig"></a>

```typescript
public putQueryInsightsConfig(value: AlloydbInstanceQueryInsightsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

---

##### `putReadPoolConfig` <a name="putReadPoolConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putReadPoolConfig"></a>

```typescript
public putReadPoolConfig(value: AlloydbInstanceReadPoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putReadPoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: AlloydbInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>

---

##### `resetActivationPolicy` <a name="resetActivationPolicy" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetActivationPolicy"></a>

```typescript
public resetActivationPolicy(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAvailabilityType` <a name="resetAvailabilityType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAvailabilityType"></a>

```typescript
public resetAvailabilityType(): void
```

##### `resetClientConnectionConfig` <a name="resetClientConnectionConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetClientConnectionConfig"></a>

```typescript
public resetClientConnectionConfig(): void
```

##### `resetDatabaseFlags` <a name="resetDatabaseFlags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDatabaseFlags"></a>

```typescript
public resetDatabaseFlags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGceZone` <a name="resetGceZone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetGceZone"></a>

```typescript
public resetGceZone(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMachineConfig` <a name="resetMachineConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetMachineConfig"></a>

```typescript
public resetMachineConfig(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetPscInstanceConfig` <a name="resetPscInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetPscInstanceConfig"></a>

```typescript
public resetPscInstanceConfig(): void
```

##### `resetQueryInsightsConfig` <a name="resetQueryInsightsConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetQueryInsightsConfig"></a>

```typescript
public resetQueryInsightsConfig(): void
```

##### `resetReadPoolConfig` <a name="resetReadPoolConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetReadPoolConfig"></a>

```typescript
public resetReadPoolConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isConstruct"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

alloydbInstance.AlloydbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformElement"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

alloydbInstance.AlloydbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformResource"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

alloydbInstance.AlloydbInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

alloydbInstance.AlloydbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlloydbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference">AlloydbInstanceClientConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference">AlloydbInstanceMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference">AlloydbInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.outboundPublicIpAddresses">outboundPublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.pscInstanceConfig">pscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference">AlloydbInstancePscInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference">AlloydbInstanceQueryInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference">AlloydbInstanceReadPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference">AlloydbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.activationPolicyInput">activationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityTypeInput">availabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfigInput">clientConnectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlagsInput">databaseFlagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZoneInput">gceZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfigInput">machineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.pscInstanceConfigInput">pscInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfigInput">queryInsightsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfigInput">readPoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.activationPolicy">activationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityType">availabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlags">databaseFlags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZone">gceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientConnectionConfig`<sup>Required</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfig"></a>

```typescript
public readonly clientConnectionConfig: AlloydbInstanceClientConnectionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference">AlloydbInstanceClientConnectionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `machineConfig`<sup>Required</sup> <a name="machineConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfig"></a>

```typescript
public readonly machineConfig: AlloydbInstanceMachineConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference">AlloydbInstanceMachineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.networkConfig"></a>

```typescript
public readonly networkConfig: AlloydbInstanceNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference">AlloydbInstanceNetworkConfigOutputReference</a>

---

##### `outboundPublicIpAddresses`<sup>Required</sup> <a name="outboundPublicIpAddresses" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.outboundPublicIpAddresses"></a>

```typescript
public readonly outboundPublicIpAddresses: string[];
```

- *Type:* string[]

---

##### `pscInstanceConfig`<sup>Required</sup> <a name="pscInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.pscInstanceConfig"></a>

```typescript
public readonly pscInstanceConfig: AlloydbInstancePscInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference">AlloydbInstancePscInstanceConfigOutputReference</a>

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `queryInsightsConfig`<sup>Required</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfig"></a>

```typescript
public readonly queryInsightsConfig: AlloydbInstanceQueryInsightsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference">AlloydbInstanceQueryInsightsConfigOutputReference</a>

---

##### `readPoolConfig`<sup>Required</sup> <a name="readPoolConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfig"></a>

```typescript
public readonly readPoolConfig: AlloydbInstanceReadPoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference">AlloydbInstanceReadPoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeouts"></a>

```typescript
public readonly timeouts: AlloydbInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference">AlloydbInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `activationPolicyInput`<sup>Optional</sup> <a name="activationPolicyInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.activationPolicyInput"></a>

```typescript
public readonly activationPolicyInput: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityTypeInput`<sup>Optional</sup> <a name="availabilityTypeInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityTypeInput"></a>

```typescript
public readonly availabilityTypeInput: string;
```

- *Type:* string

---

##### `clientConnectionConfigInput`<sup>Optional</sup> <a name="clientConnectionConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfigInput"></a>

```typescript
public readonly clientConnectionConfigInput: AlloydbInstanceClientConnectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `databaseFlagsInput`<sup>Optional</sup> <a name="databaseFlagsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlagsInput"></a>

```typescript
public readonly databaseFlagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gceZoneInput`<sup>Optional</sup> <a name="gceZoneInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZoneInput"></a>

```typescript
public readonly gceZoneInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `machineConfigInput`<sup>Optional</sup> <a name="machineConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfigInput"></a>

```typescript
public readonly machineConfigInput: AlloydbInstanceMachineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: AlloydbInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a>

---

##### `pscInstanceConfigInput`<sup>Optional</sup> <a name="pscInstanceConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.pscInstanceConfigInput"></a>

```typescript
public readonly pscInstanceConfigInput: AlloydbInstancePscInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a>

---

##### `queryInsightsConfigInput`<sup>Optional</sup> <a name="queryInsightsConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfigInput"></a>

```typescript
public readonly queryInsightsConfigInput: AlloydbInstanceQueryInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

---

##### `readPoolConfigInput`<sup>Optional</sup> <a name="readPoolConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfigInput"></a>

```typescript
public readonly readPoolConfigInput: AlloydbInstanceReadPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AlloydbInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>

---

##### `activationPolicy`<sup>Required</sup> <a name="activationPolicy" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.activationPolicy"></a>

```typescript
public readonly activationPolicy: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityType`<sup>Required</sup> <a name="availabilityType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `databaseFlags`<sup>Required</sup> <a name="databaseFlags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `gceZone`<sup>Required</sup> <a name="gceZone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZone"></a>

```typescript
public readonly gceZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlloydbInstanceClientConnectionConfig <a name="AlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceClientConnectionConfig: alloydbInstance.AlloydbInstanceClientConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.requireConnectors">requireConnectors</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configuration to enforce connectors only (ex: AuthProxy) connections to the database. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a></code> | ssl_config block. |

---

##### `requireConnectors`<sup>Optional</sup> <a name="requireConnectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.requireConnectors"></a>

```typescript
public readonly requireConnectors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#require_connectors AlloydbInstance#require_connectors}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.sslConfig"></a>

```typescript
public readonly sslConfig: AlloydbInstanceClientConnectionConfigSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#ssl_config AlloydbInstance#ssl_config}

---

### AlloydbInstanceClientConnectionConfigSslConfig <a name="AlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceClientConnectionConfigSslConfig: alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig.property.sslMode">sslMode</a></code> | <code>string</code> | SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]. |

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#ssl_mode AlloydbInstance#ssl_mode}

---

### AlloydbInstanceConfig <a name="AlloydbInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceConfig: alloydbInstance.AlloydbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.cluster">cluster</a></code> | <code>string</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceType">instanceType</a></code> | <code>string</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.activationPolicy">activationPolicy</a></code> | <code>string</code> | 'Specifies whether an instance needs to spin up. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.availabilityType">availabilityType</a></code> | <code>string</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.clientConnectionConfig">clientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.databaseFlags">databaseFlags</a></code> | <code>{[ key: string ]: string}</code> | Database flags. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.gceZone">gceZone</a></code> | <code>string</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#id AlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.machineConfig">machineConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.pscInstanceConfig">pscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a></code> | psc_instance_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.queryInsightsConfig">queryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.readPoolConfig">readPoolConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#cluster AlloydbInstance#cluster}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#instance_id AlloydbInstance#instance_id}

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#instance_type AlloydbInstance#instance_type}

---

##### `activationPolicy`<sup>Optional</sup> <a name="activationPolicy" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.activationPolicy"></a>

```typescript
public readonly activationPolicy: string;
```

- *Type:* string

'Specifies whether an instance needs to spin up.

Once the instance is
active, the activation policy can be updated to the 'NEVER' to stop the
instance. Likewise, the activation policy can be updated to 'ALWAYS' to
start the instance.
There are restrictions around when an instance can/cannot be activated (for
example, a read pool instance should be stopped before stopping primary
etc.). Please refer to the API documentation for more details.
Possible values are: 'ACTIVATION_POLICY_UNSPECIFIED', 'ALWAYS', 'NEVER'.' Possible values: ["ACTIVATION_POLICY_UNSPECIFIED", "ALWAYS", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#activation_policy AlloydbInstance#activation_policy}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#annotations AlloydbInstance#annotations}

---

##### `availabilityType`<sup>Optional</sup> <a name="availabilityType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.availabilityType"></a>

```typescript
public readonly availabilityType: string;
```

- *Type:* string

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Primary instances can be either ZONAL or REGIONAL. Read Pool instances can also be either ZONAL or REGIONAL.
Read pools of size 1 can only have zonal availability. Read pools with a node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).
Possible values are: 'AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL'.' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#availability_type AlloydbInstance#availability_type}

---

##### `clientConnectionConfig`<sup>Optional</sup> <a name="clientConnectionConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.clientConnectionConfig"></a>

```typescript
public readonly clientConnectionConfig: AlloydbInstanceClientConnectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#client_connection_config AlloydbInstance#client_connection_config}

---

##### `databaseFlags`<sup>Optional</sup> <a name="databaseFlags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.databaseFlags"></a>

```typescript
public readonly databaseFlags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#database_flags AlloydbInstance#database_flags}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#display_name AlloydbInstance#display_name}

---

##### `gceZone`<sup>Optional</sup> <a name="gceZone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.gceZone"></a>

```typescript
public readonly gceZone: string;
```

- *Type:* string

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#gce_zone AlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#id AlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#labels AlloydbInstance#labels}

---

##### `machineConfig`<sup>Optional</sup> <a name="machineConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.machineConfig"></a>

```typescript
public readonly machineConfig: AlloydbInstanceMachineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#machine_config AlloydbInstance#machine_config}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: AlloydbInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#network_config AlloydbInstance#network_config}

---

##### `pscInstanceConfig`<sup>Optional</sup> <a name="pscInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.pscInstanceConfig"></a>

```typescript
public readonly pscInstanceConfig: AlloydbInstancePscInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a>

psc_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#psc_instance_config AlloydbInstance#psc_instance_config}

---

##### `queryInsightsConfig`<sup>Optional</sup> <a name="queryInsightsConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.queryInsightsConfig"></a>

```typescript
public readonly queryInsightsConfig: AlloydbInstanceQueryInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#query_insights_config AlloydbInstance#query_insights_config}

---

##### `readPoolConfig`<sup>Optional</sup> <a name="readPoolConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.readPoolConfig"></a>

```typescript
public readonly readPoolConfig: AlloydbInstanceReadPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#read_pool_config AlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AlloydbInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#timeouts AlloydbInstance#timeouts}

---

### AlloydbInstanceMachineConfig <a name="AlloydbInstanceMachineConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceMachineConfig: alloydbInstance.AlloydbInstanceMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.property.cpuCount">cpuCount</a></code> | <code>number</code> | The number of CPU's in the VM instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.property.machineType">machineType</a></code> | <code>string</code> | Machine type of the VM instance. E.g. "n2-highmem-4", "n2-highmem-8", "c4a-highmem-4-lssd". 'cpu_count' must match the number of vCPUs in the machine type. |

---

##### `cpuCount`<sup>Optional</sup> <a name="cpuCount" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#cpu_count AlloydbInstance#cpu_count}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Machine type of the VM instance. E.g. "n2-highmem-4", "n2-highmem-8", "c4a-highmem-4-lssd". 'cpu_count' must match the number of vCPUs in the machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#machine_type AlloydbInstance#machine_type}

---

### AlloydbInstanceNetworkConfig <a name="AlloydbInstanceNetworkConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceNetworkConfig: alloydbInstance.AlloydbInstanceNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.allocatedIpRangeOverride">allocatedIpRangeOverride</a></code> | <code>string</code> | Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default". |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.authorizedExternalNetworks">authorizedExternalNetworks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]</code> | authorized_external_networks block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.enableOutboundPublicIp">enableOutboundPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling outbound public ip for the instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.enablePublicIp">enablePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling public ip for the instance. |

---

##### `allocatedIpRangeOverride`<sup>Optional</sup> <a name="allocatedIpRangeOverride" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.allocatedIpRangeOverride"></a>

```typescript
public readonly allocatedIpRangeOverride: string;
```

- *Type:* string

Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default".

If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster.
The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#allocated_ip_range_override AlloydbInstance#allocated_ip_range_override}

---

##### `authorizedExternalNetworks`<sup>Optional</sup> <a name="authorizedExternalNetworks" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.authorizedExternalNetworks"></a>

```typescript
public readonly authorizedExternalNetworks: IResolvable | AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]

authorized_external_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#authorized_external_networks AlloydbInstance#authorized_external_networks}

---

##### `enableOutboundPublicIp`<sup>Optional</sup> <a name="enableOutboundPublicIp" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.enableOutboundPublicIp"></a>

```typescript
public readonly enableOutboundPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling outbound public ip for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#enable_outbound_public_ip AlloydbInstance#enable_outbound_public_ip}

---

##### `enablePublicIp`<sup>Optional</sup> <a name="enablePublicIp" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig.property.enablePublicIp"></a>

```typescript
public readonly enablePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling public ip for the instance.

If a user wishes to disable this,
please also clear the list of the authorized external networks set on
the same instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#enable_public_ip AlloydbInstance#enable_public_ip}

---

### AlloydbInstanceNetworkConfigAuthorizedExternalNetworks <a name="AlloydbInstanceNetworkConfigAuthorizedExternalNetworks" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceNetworkConfigAuthorizedExternalNetworks: alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks.property.cidrRange">cidrRange</a></code> | <code>string</code> | CIDR range for one authorized network of the instance. |

---

##### `cidrRange`<sup>Optional</sup> <a name="cidrRange" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

CIDR range for one authorized network of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#cidr_range AlloydbInstance#cidr_range}

---

### AlloydbInstancePscInstanceConfig <a name="AlloydbInstancePscInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstancePscInstanceConfig: alloydbInstance.AlloydbInstancePscInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>string[]</code> | List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.property.pscAutoConnections">pscAutoConnections</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]</code> | psc_auto_connections block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.property.pscInterfaceConfigs">pscInterfaceConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]</code> | psc_interface_configs block. |

---

##### `allowedConsumerProjects`<sup>Optional</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.property.allowedConsumerProjects"></a>

```typescript
public readonly allowedConsumerProjects: string[];
```

- *Type:* string[]

List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.

These should be specified as project numbers only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#allowed_consumer_projects AlloydbInstance#allowed_consumer_projects}

---

##### `pscAutoConnections`<sup>Optional</sup> <a name="pscAutoConnections" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.property.pscAutoConnections"></a>

```typescript
public readonly pscAutoConnections: IResolvable | AlloydbInstancePscInstanceConfigPscAutoConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]

psc_auto_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#psc_auto_connections AlloydbInstance#psc_auto_connections}

---

##### `pscInterfaceConfigs`<sup>Optional</sup> <a name="pscInterfaceConfigs" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig.property.pscInterfaceConfigs"></a>

```typescript
public readonly pscInterfaceConfigs: IResolvable | AlloydbInstancePscInstanceConfigPscInterfaceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]

psc_interface_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#psc_interface_configs AlloydbInstance#psc_interface_configs}

---

### AlloydbInstancePscInstanceConfigPscAutoConnections <a name="AlloydbInstancePscInstanceConfigPscAutoConnections" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstancePscInstanceConfigPscAutoConnections: alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | The consumer network for the PSC service automation, example: "projects/vpc-host-project/global/networks/default". |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections.property.consumerProject">consumerProject</a></code> | <code>string</code> | The consumer project to which the PSC service automation endpoint will be created. |

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

The consumer network for the PSC service automation, example: "projects/vpc-host-project/global/networks/default".

The consumer network might be hosted a different project than the
consumer project. The API expects the consumer project specified to be
the project ID (and not the project number)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#consumer_network AlloydbInstance#consumer_network}

---

##### `consumerProject`<sup>Optional</sup> <a name="consumerProject" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

The consumer project to which the PSC service automation endpoint will be created.

The API expects the consumer project to be the project ID(
and not the project number).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#consumer_project AlloydbInstance#consumer_project}

---

### AlloydbInstancePscInstanceConfigPscInterfaceConfigs <a name="AlloydbInstancePscInstanceConfigPscInterfaceConfigs" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstancePscInstanceConfigPscInterfaceConfigs: alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs.property.networkAttachmentResource">networkAttachmentResource</a></code> | <code>string</code> | The network attachment resource created in the consumer project to which the PSC interface will be linked. |

---

##### `networkAttachmentResource`<sup>Optional</sup> <a name="networkAttachmentResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs.property.networkAttachmentResource"></a>

```typescript
public readonly networkAttachmentResource: string;
```

- *Type:* string

The network attachment resource created in the consumer project to which the PSC interface will be linked.

This is of the format: "projects/${CONSUMER_PROJECT}/regions/${REGION}/networkAttachments/${NETWORK_ATTACHMENT_NAME}".
The network attachment must be in the same region as the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#network_attachment_resource AlloydbInstance#network_attachment_resource}

---

### AlloydbInstanceQueryInsightsConfig <a name="AlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceQueryInsightsConfig: alloydbInstance.AlloydbInstanceQueryInsightsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordApplicationTags">recordApplicationTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordClientAddress">recordClientAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Record client address for an instance. Client address is PII information. This flag is turned "on" by default. |

---

##### `queryPlansPerMinute`<sup>Optional</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#query_plans_per_minute AlloydbInstance#query_plans_per_minute}

---

##### `queryStringLength`<sup>Optional</sup> <a name="queryStringLength" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#query_string_length AlloydbInstance#query_string_length}

---

##### `recordApplicationTags`<sup>Optional</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#record_application_tags AlloydbInstance#record_application_tags}

---

##### `recordClientAddress`<sup>Optional</sup> <a name="recordClientAddress" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#record_client_address AlloydbInstance#record_client_address}

---

### AlloydbInstanceReadPoolConfig <a name="AlloydbInstanceReadPoolConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceReadPoolConfig: alloydbInstance.AlloydbInstanceReadPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Read capacity, i.e. number of nodes in a read pool instance. |

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#node_count AlloydbInstance#node_count}

---

### AlloydbInstanceTimeouts <a name="AlloydbInstanceTimeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

const alloydbInstanceTimeouts: alloydbInstance.AlloydbInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#create AlloydbInstance#create}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#update AlloydbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#create AlloydbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/alloydb_instance#update AlloydbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlloydbInstanceClientConnectionConfigOutputReference <a name="AlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors">resetRequireConnectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: AlloydbInstanceClientConnectionConfigSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `resetRequireConnectors` <a name="resetRequireConnectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors"></a>

```typescript
public resetRequireConnectors(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference">AlloydbInstanceClientConnectionConfigSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput">requireConnectorsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">requireConnectors</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: AlloydbInstanceClientConnectionConfigSslConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference">AlloydbInstanceClientConnectionConfigSslConfigOutputReference</a>

---

##### `requireConnectorsInput`<sup>Optional</sup> <a name="requireConnectorsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput"></a>

```typescript
public readonly requireConnectorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: AlloydbInstanceClientConnectionConfigSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `requireConnectors`<sup>Required</sup> <a name="requireConnectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```typescript
public readonly requireConnectors: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstanceClientConnectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

---


### AlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="AlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode">resetSslMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode"></a>

```typescript
public resetSslMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstanceClientConnectionConfigSslConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

---


### AlloydbInstanceMachineConfigOutputReference <a name="AlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceMachineConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resetCpuCount">resetCpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCount` <a name="resetCpuCount" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resetCpuCount"></a>

```typescript
public resetCpuCount(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCountInput"></a>

```typescript
public readonly cpuCountInput: number;
```

- *Type:* number

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstanceMachineConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

---


### AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList <a name="AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get"></a>

```typescript
public get(index: number): AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]

---


### AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference <a name="AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resetCidrRange">resetCidrRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrRange` <a name="resetCidrRange" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resetCidrRange"></a>

```typescript
public resetCidrRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRangeInput">cidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeInput`<sup>Optional</sup> <a name="cidrRangeInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRangeInput"></a>

```typescript
public readonly cidrRangeInput: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstanceNetworkConfigAuthorizedExternalNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>

---


### AlloydbInstanceNetworkConfigOutputReference <a name="AlloydbInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks">putAuthorizedExternalNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetAllocatedIpRangeOverride">resetAllocatedIpRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetAuthorizedExternalNetworks">resetAuthorizedExternalNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetEnableOutboundPublicIp">resetEnableOutboundPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetEnablePublicIp">resetEnablePublicIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizedExternalNetworks` <a name="putAuthorizedExternalNetworks" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks"></a>

```typescript
public putAuthorizedExternalNetworks(value: IResolvable | AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.putAuthorizedExternalNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]

---

##### `resetAllocatedIpRangeOverride` <a name="resetAllocatedIpRangeOverride" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetAllocatedIpRangeOverride"></a>

```typescript
public resetAllocatedIpRangeOverride(): void
```

##### `resetAuthorizedExternalNetworks` <a name="resetAuthorizedExternalNetworks" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetAuthorizedExternalNetworks"></a>

```typescript
public resetAuthorizedExternalNetworks(): void
```

##### `resetEnableOutboundPublicIp` <a name="resetEnableOutboundPublicIp" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetEnableOutboundPublicIp"></a>

```typescript
public resetEnableOutboundPublicIp(): void
```

##### `resetEnablePublicIp` <a name="resetEnablePublicIp" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.resetEnablePublicIp"></a>

```typescript
public resetEnablePublicIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks">authorizedExternalNetworks</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverrideInput">allocatedIpRangeOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworksInput">authorizedExternalNetworksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIpInput">enableOutboundPublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enablePublicIpInput">enablePublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverride">allocatedIpRangeOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp">enableOutboundPublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp">enablePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizedExternalNetworks`<sup>Required</sup> <a name="authorizedExternalNetworks" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks"></a>

```typescript
public readonly authorizedExternalNetworks: AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">AlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a>

---

##### `allocatedIpRangeOverrideInput`<sup>Optional</sup> <a name="allocatedIpRangeOverrideInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverrideInput"></a>

```typescript
public readonly allocatedIpRangeOverrideInput: string;
```

- *Type:* string

---

##### `authorizedExternalNetworksInput`<sup>Optional</sup> <a name="authorizedExternalNetworksInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworksInput"></a>

```typescript
public readonly authorizedExternalNetworksInput: IResolvable | AlloydbInstanceNetworkConfigAuthorizedExternalNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigAuthorizedExternalNetworks">AlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>[]

---

##### `enableOutboundPublicIpInput`<sup>Optional</sup> <a name="enableOutboundPublicIpInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIpInput"></a>

```typescript
public readonly enableOutboundPublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePublicIpInput`<sup>Optional</sup> <a name="enablePublicIpInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enablePublicIpInput"></a>

```typescript
public readonly enablePublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allocatedIpRangeOverride`<sup>Required</sup> <a name="allocatedIpRangeOverride" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.allocatedIpRangeOverride"></a>

```typescript
public readonly allocatedIpRangeOverride: string;
```

- *Type:* string

---

##### `enableOutboundPublicIp`<sup>Required</sup> <a name="enableOutboundPublicIp" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp"></a>

```typescript
public readonly enableOutboundPublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePublicIp`<sup>Required</sup> <a name="enablePublicIp" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp"></a>

```typescript
public readonly enablePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceNetworkConfig">AlloydbInstanceNetworkConfig</a>

---


### AlloydbInstancePscInstanceConfigOutputReference <a name="AlloydbInstancePscInstanceConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.putPscAutoConnections">putPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.putPscInterfaceConfigs">putPscInterfaceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resetAllowedConsumerProjects">resetAllowedConsumerProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resetPscAutoConnections">resetPscAutoConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resetPscInterfaceConfigs">resetPscInterfaceConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscAutoConnections` <a name="putPscAutoConnections" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.putPscAutoConnections"></a>

```typescript
public putPscAutoConnections(value: IResolvable | AlloydbInstancePscInstanceConfigPscAutoConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.putPscAutoConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]

---

##### `putPscInterfaceConfigs` <a name="putPscInterfaceConfigs" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.putPscInterfaceConfigs"></a>

```typescript
public putPscInterfaceConfigs(value: IResolvable | AlloydbInstancePscInstanceConfigPscInterfaceConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.putPscInterfaceConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]

---

##### `resetAllowedConsumerProjects` <a name="resetAllowedConsumerProjects" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resetAllowedConsumerProjects"></a>

```typescript
public resetAllowedConsumerProjects(): void
```

##### `resetPscAutoConnections` <a name="resetPscAutoConnections" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resetPscAutoConnections"></a>

```typescript
public resetPscAutoConnections(): void
```

##### `resetPscInterfaceConfigs` <a name="resetPscInterfaceConfigs" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.resetPscInterfaceConfigs"></a>

```typescript
public resetPscInterfaceConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections">pscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList">AlloydbInstancePscInstanceConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName">pscDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs">pscInterfaceConfigs</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList">AlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink">serviceAttachmentLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjectsInput">allowedConsumerProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnectionsInput">pscAutoConnectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigsInput">pscInterfaceConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects">allowedConsumerProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pscAutoConnections`<sup>Required</sup> <a name="pscAutoConnections" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections"></a>

```typescript
public readonly pscAutoConnections: AlloydbInstancePscInstanceConfigPscAutoConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList">AlloydbInstancePscInstanceConfigPscAutoConnectionsList</a>

---

##### `pscDnsName`<sup>Required</sup> <a name="pscDnsName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName"></a>

```typescript
public readonly pscDnsName: string;
```

- *Type:* string

---

##### `pscInterfaceConfigs`<sup>Required</sup> <a name="pscInterfaceConfigs" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs"></a>

```typescript
public readonly pscInterfaceConfigs: AlloydbInstancePscInstanceConfigPscInterfaceConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList">AlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a>

---

##### `serviceAttachmentLink`<sup>Required</sup> <a name="serviceAttachmentLink" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink"></a>

```typescript
public readonly serviceAttachmentLink: string;
```

- *Type:* string

---

##### `allowedConsumerProjectsInput`<sup>Optional</sup> <a name="allowedConsumerProjectsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjectsInput"></a>

```typescript
public readonly allowedConsumerProjectsInput: string[];
```

- *Type:* string[]

---

##### `pscAutoConnectionsInput`<sup>Optional</sup> <a name="pscAutoConnectionsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnectionsInput"></a>

```typescript
public readonly pscAutoConnectionsInput: IResolvable | AlloydbInstancePscInstanceConfigPscAutoConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]

---

##### `pscInterfaceConfigsInput`<sup>Optional</sup> <a name="pscInterfaceConfigsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigsInput"></a>

```typescript
public readonly pscInterfaceConfigsInput: IResolvable | AlloydbInstancePscInstanceConfigPscInterfaceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]

---

##### `allowedConsumerProjects`<sup>Required</sup> <a name="allowedConsumerProjects" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects"></a>

```typescript
public readonly allowedConsumerProjects: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstancePscInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfig">AlloydbInstancePscInstanceConfig</a>

---


### AlloydbInstancePscInstanceConfigPscAutoConnectionsList <a name="AlloydbInstancePscInstanceConfigPscAutoConnectionsList" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.get"></a>

```typescript
public get(index: number): AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstancePscInstanceConfigPscAutoConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>[]

---


### AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference <a name="AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resetConsumerNetwork">resetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resetConsumerProject">resetConsumerProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerNetwork` <a name="resetConsumerNetwork" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resetConsumerNetwork"></a>

```typescript
public resetConsumerNetwork(): void
```

##### `resetConsumerProject` <a name="resetConsumerProject" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resetConsumerProject"></a>

```typescript
public resetConsumerProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus">consumerNetworkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkInput">consumerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProjectInput">consumerProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject">consumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerNetworkStatus`<sup>Required</sup> <a name="consumerNetworkStatus" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus"></a>

```typescript
public readonly consumerNetworkStatus: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `consumerNetworkInput`<sup>Optional</sup> <a name="consumerNetworkInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkInput"></a>

```typescript
public readonly consumerNetworkInput: string;
```

- *Type:* string

---

##### `consumerProjectInput`<sup>Optional</sup> <a name="consumerProjectInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProjectInput"></a>

```typescript
public readonly consumerProjectInput: string;
```

- *Type:* string

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstancePscInstanceConfigPscAutoConnections;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscAutoConnections">AlloydbInstancePscInstanceConfigPscAutoConnections</a>

---


### AlloydbInstancePscInstanceConfigPscInterfaceConfigsList <a name="AlloydbInstancePscInstanceConfigPscInterfaceConfigsList" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get"></a>

```typescript
public get(index: number): AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstancePscInstanceConfigPscInterfaceConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>[]

---


### AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference <a name="AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resetNetworkAttachmentResource">resetNetworkAttachmentResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkAttachmentResource` <a name="resetNetworkAttachmentResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resetNetworkAttachmentResource"></a>

```typescript
public resetNetworkAttachmentResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResourceInput">networkAttachmentResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource">networkAttachmentResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentResourceInput`<sup>Optional</sup> <a name="networkAttachmentResourceInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResourceInput"></a>

```typescript
public readonly networkAttachmentResourceInput: string;
```

- *Type:* string

---

##### `networkAttachmentResource`<sup>Required</sup> <a name="networkAttachmentResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource"></a>

```typescript
public readonly networkAttachmentResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstancePscInstanceConfigPscInterfaceConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstancePscInstanceConfigPscInterfaceConfigs">AlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>

---


### AlloydbInstanceQueryInsightsConfigOutputReference <a name="AlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute">resetQueryPlansPerMinute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength">resetQueryStringLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags">resetRecordApplicationTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress">resetRecordClientAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryPlansPerMinute` <a name="resetQueryPlansPerMinute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```typescript
public resetQueryPlansPerMinute(): void
```

##### `resetQueryStringLength` <a name="resetQueryStringLength" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength"></a>

```typescript
public resetQueryStringLength(): void
```

##### `resetRecordApplicationTags` <a name="resetRecordApplicationTags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```typescript
public resetRecordApplicationTags(): void
```

##### `resetRecordClientAddress` <a name="resetRecordClientAddress" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress"></a>

```typescript
public resetRecordClientAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput">queryPlansPerMinuteInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput">queryStringLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput">recordApplicationTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput">recordClientAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">queryPlansPerMinute</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">queryStringLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">recordApplicationTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">recordClientAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryPlansPerMinuteInput`<sup>Optional</sup> <a name="queryPlansPerMinuteInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```typescript
public readonly queryPlansPerMinuteInput: number;
```

- *Type:* number

---

##### `queryStringLengthInput`<sup>Optional</sup> <a name="queryStringLengthInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```typescript
public readonly queryStringLengthInput: number;
```

- *Type:* number

---

##### `recordApplicationTagsInput`<sup>Optional</sup> <a name="recordApplicationTagsInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```typescript
public readonly recordApplicationTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordClientAddressInput`<sup>Optional</sup> <a name="recordClientAddressInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```typescript
public readonly recordClientAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryPlansPerMinute`<sup>Required</sup> <a name="queryPlansPerMinute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```typescript
public readonly queryPlansPerMinute: number;
```

- *Type:* number

---

##### `queryStringLength`<sup>Required</sup> <a name="queryStringLength" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```typescript
public readonly queryStringLength: number;
```

- *Type:* number

---

##### `recordApplicationTags`<sup>Required</sup> <a name="recordApplicationTags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```typescript
public readonly recordApplicationTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordClientAddress`<sup>Required</sup> <a name="recordClientAddress" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```typescript
public readonly recordClientAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstanceQueryInsightsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

---


### AlloydbInstanceReadPoolConfigOutputReference <a name="AlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resetNodeCount"></a>

```typescript
public resetNodeCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlloydbInstanceReadPoolConfig;
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

---


### AlloydbInstanceTimeoutsOutputReference <a name="AlloydbInstanceTimeoutsOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { alloydbInstance } from '@cdktf/provider-google'

new alloydbInstance.AlloydbInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlloydbInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>

---



