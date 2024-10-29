# `dataFusionInstance` Submodule <a name="`dataFusionInstance` Submodule" id="@cdktf/provider-google.dataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFusionInstance <a name="DataFusionInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstance(scope: Construct, id: string, config: DataFusionInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig">DataFusionInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig">DataFusionInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig">putCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig">putEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetCryptoKeyConfig">resetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDataprocServiceAccount">resetDataprocServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableRbac">resetEnableRbac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverMonitoring">resetEnableStackdriverMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEventPublishConfig">resetEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetPrivateInstance">resetPrivateInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerators` <a name="putAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators"></a>

```typescript
public putAccelerators(value: IResolvable | DataFusionInstanceAccelerators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]

---

##### `putCryptoKeyConfig` <a name="putCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig"></a>

```typescript
public putCryptoKeyConfig(value: DataFusionInstanceCryptoKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---

##### `putEventPublishConfig` <a name="putEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig"></a>

```typescript
public putEventPublishConfig(value: DataFusionInstanceEventPublishConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: DataFusionInstanceNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFusionInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetAccelerators"></a>

```typescript
public resetAccelerators(): void
```

##### `resetCryptoKeyConfig` <a name="resetCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetCryptoKeyConfig"></a>

```typescript
public resetCryptoKeyConfig(): void
```

##### `resetDataprocServiceAccount` <a name="resetDataprocServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDataprocServiceAccount"></a>

```typescript
public resetDataprocServiceAccount(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableRbac` <a name="resetEnableRbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableRbac"></a>

```typescript
public resetEnableRbac(): void
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverLogging"></a>

```typescript
public resetEnableStackdriverLogging(): void
```

##### `resetEnableStackdriverMonitoring` <a name="resetEnableStackdriverMonitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverMonitoring"></a>

```typescript
public resetEnableStackdriverMonitoring(): void
```

##### `resetEventPublishConfig` <a name="resetEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEventPublishConfig"></a>

```typescript
public resetEventPublishConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPrivateInstance` <a name="resetPrivateInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetPrivateInstance"></a>

```typescript
public resetPrivateInstance(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

dataFusionInstance.DataFusionInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

dataFusionInstance.DataFusionInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

dataFusionInstance.DataFusionInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

dataFusionInstance.DataFusionInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFusionInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList">DataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.apiEndpoint">apiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference">DataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference">DataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference">DataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.p4ServiceAccount">p4ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.serviceEndpoint">serviceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tenantProjectId">tenantProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference">DataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.acceleratorsInput">acceleratorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfigInput">cryptoKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccountInput">dataprocServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbacInput">enableRbacInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoringInput">enableStackdriverMonitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfigInput">eventPublishConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstanceInput">privateInstanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbac">enableRbac</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstance">privateInstance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.accelerators"></a>

```typescript
public readonly accelerators: DataFusionInstanceAcceleratorsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList">DataFusionInstanceAcceleratorsList</a>

---

##### `apiEndpoint`<sup>Required</sup> <a name="apiEndpoint" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.apiEndpoint"></a>

```typescript
public readonly apiEndpoint: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `cryptoKeyConfig`<sup>Required</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: DataFusionInstanceCryptoKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference">DataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `eventPublishConfig`<sup>Required</sup> <a name="eventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfig"></a>

```typescript
public readonly eventPublishConfig: DataFusionInstanceEventPublishConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference">DataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataFusionInstanceNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference">DataFusionInstanceNetworkConfigOutputReference</a>

---

##### `p4ServiceAccount`<sup>Required</sup> <a name="p4ServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.p4ServiceAccount"></a>

```typescript
public readonly p4ServiceAccount: string;
```

- *Type:* string

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.serviceEndpoint"></a>

```typescript
public readonly serviceEndpoint: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `tenantProjectId`<sup>Required</sup> <a name="tenantProjectId" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tenantProjectId"></a>

```typescript
public readonly tenantProjectId: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeouts"></a>

```typescript
public readonly timeouts: DataFusionInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference">DataFusionInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.acceleratorsInput"></a>

```typescript
public readonly acceleratorsInput: IResolvable | DataFusionInstanceAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]

---

##### `cryptoKeyConfigInput`<sup>Optional</sup> <a name="cryptoKeyConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfigInput"></a>

```typescript
public readonly cryptoKeyConfigInput: DataFusionInstanceCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---

##### `dataprocServiceAccountInput`<sup>Optional</sup> <a name="dataprocServiceAccountInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccountInput"></a>

```typescript
public readonly dataprocServiceAccountInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableRbacInput`<sup>Optional</sup> <a name="enableRbacInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbacInput"></a>

```typescript
public readonly enableRbacInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLoggingInput"></a>

```typescript
public readonly enableStackdriverLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverMonitoringInput`<sup>Optional</sup> <a name="enableStackdriverMonitoringInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```typescript
public readonly enableStackdriverMonitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventPublishConfigInput`<sup>Optional</sup> <a name="eventPublishConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfigInput"></a>

```typescript
public readonly eventPublishConfigInput: DataFusionInstanceEventPublishConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: DataFusionInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `privateInstanceInput`<sup>Optional</sup> <a name="privateInstanceInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstanceInput"></a>

```typescript
public readonly privateInstanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFusionInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `dataprocServiceAccount`<sup>Required</sup> <a name="dataprocServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccount"></a>

```typescript
public readonly dataprocServiceAccount: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableRbac`<sup>Required</sup> <a name="enableRbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbac"></a>

```typescript
public readonly enableRbac: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverMonitoring`<sup>Required</sup> <a name="enableStackdriverMonitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoring"></a>

```typescript
public readonly enableStackdriverMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `privateInstance`<sup>Required</sup> <a name="privateInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstance"></a>

```typescript
public readonly privateInstance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFusionInstanceAccelerators <a name="DataFusionInstanceAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceAccelerators: dataFusionInstance.DataFusionInstanceAccelerators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.state">state</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#accelerator_type DataFusionInstance#accelerator_type}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#state DataFusionInstance#state}

---

### DataFusionInstanceConfig <a name="DataFusionInstanceConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceConfig: dataFusionInstance.DataFusionInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.name">name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.type">type</a></code> | <code>string</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.accelerators">accelerators</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.cryptoKeyConfig">cryptoKeyConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dataprocServiceAccount">dataprocServiceAccount</a></code> | <code>string</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.description">description</a></code> | <code>string</code> | An optional description of the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name for an instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableRbac">enableRbac</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverMonitoring">enableStackdriverMonitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.eventPublishConfig">eventPublishConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#id DataFusionInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.privateInstance">privateInstance</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#project DataFusionInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.region">region</a></code> | <code>string</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.version">version</a></code> | <code>string</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.zone">zone</a></code> | <code>string</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#name DataFusionInstance#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.
- BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
using point and click UI. However, there are certain limitations, such as fewer number
of concurrent pipelines, no support for streaming pipelines, etc.
- ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
- DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#type DataFusionInstance#type}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.accelerators"></a>

```typescript
public readonly accelerators: IResolvable | DataFusionInstanceAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#accelerators DataFusionInstance#accelerators}

---

##### `cryptoKeyConfig`<sup>Optional</sup> <a name="cryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```typescript
public readonly cryptoKeyConfig: DataFusionInstanceCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#crypto_key_config DataFusionInstance#crypto_key_config}

---

##### `dataprocServiceAccount`<sup>Optional</sup> <a name="dataprocServiceAccount" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```typescript
public readonly dataprocServiceAccount: string;
```

- *Type:* string

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#description DataFusionInstance#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#display_name DataFusionInstance#display_name}

---

##### `enableRbac`<sup>Optional</sup> <a name="enableRbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableRbac"></a>

```typescript
public readonly enableRbac: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#enable_rbac DataFusionInstance#enable_rbac}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}

---

##### `enableStackdriverMonitoring`<sup>Optional</sup> <a name="enableStackdriverMonitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```typescript
public readonly enableStackdriverMonitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}

---

##### `eventPublishConfig`<sup>Optional</sup> <a name="eventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.eventPublishConfig"></a>

```typescript
public readonly eventPublishConfig: DataFusionInstanceEventPublishConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#event_publish_config DataFusionInstance#event_publish_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#id DataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#labels DataFusionInstance#labels}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataFusionInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#network_config DataFusionInstance#network_config}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#options DataFusionInstance#options}

---

##### `privateInstance`<sup>Optional</sup> <a name="privateInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.privateInstance"></a>

```typescript
public readonly privateInstance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#private_instance DataFusionInstance#private_instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#project DataFusionInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#region DataFusionInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFusionInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#timeouts DataFusionInstance#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#version DataFusionInstance#version}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#zone DataFusionInstance#zone}

---

### DataFusionInstanceCryptoKeyConfig <a name="DataFusionInstanceCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceCryptoKeyConfig: dataFusionInstance.DataFusionInstanceCryptoKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.property.keyReference">keyReference</a></code> | <code>string</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#key_reference DataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataFusionInstanceEventPublishConfig <a name="DataFusionInstanceEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceEventPublishConfig: dataFusionInstance.DataFusionInstanceEventPublishConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.topic">topic</a></code> | <code>string</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#enabled DataFusionInstance#enabled}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#topic DataFusionInstance#topic}

---

### DataFusionInstanceNetworkConfig <a name="DataFusionInstanceNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceNetworkConfig: dataFusionInstance.DataFusionInstanceNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.ipAllocation">ipAllocation</a></code> | <code>string</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.network">network</a></code> | <code>string</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#connection_type DataFusionInstance#connection_type}

---

##### `ipAllocation`<sup>Optional</sup> <a name="ipAllocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```typescript
public readonly ipAllocation: string;
```

- *Type:* string

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#network DataFusionInstance#network}

---

##### `privateServiceConnectConfig`<sup>Optional</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#private_service_connect_config DataFusionInstance#private_service_connect_config}

---

### DataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="DataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceNetworkConfigPrivateServiceConnectConfig: dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">unreachableCidrBlock</a></code> | <code>string</code> | Optional. |

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#network_attachment DataFusionInstance#network_attachment}

---

##### `unreachableCidrBlock`<sup>Optional</sup> <a name="unreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```typescript
public readonly unreachableCidrBlock: string;
```

- *Type:* string

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#unreachable_cidr_block DataFusionInstance#unreachable_cidr_block}

---

### DataFusionInstanceTimeouts <a name="DataFusionInstanceTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

const dataFusionInstanceTimeouts: dataFusionInstance.DataFusionInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#create DataFusionInstance#create}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#update DataFusionInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#create DataFusionInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/data_fusion_instance#update DataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFusionInstanceAcceleratorsList <a name="DataFusionInstanceAcceleratorsList" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get"></a>

```typescript
public get(index: number): DataFusionInstanceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFusionInstanceAccelerators[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>[]

---


### DataFusionInstanceAcceleratorsOutputReference <a name="DataFusionInstanceAcceleratorsOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFusionInstanceAccelerators;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>

---


### DataFusionInstanceCryptoKeyConfigOutputReference <a name="DataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">keyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">keyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyReferenceInput`<sup>Optional</sup> <a name="keyReferenceInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```typescript
public readonly keyReferenceInput: string;
```

- *Type:* string

---

##### `keyReference`<sup>Required</sup> <a name="keyReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```typescript
public readonly keyReference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFusionInstanceCryptoKeyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---


### DataFusionInstanceEventPublishConfigOutputReference <a name="DataFusionInstanceEventPublishConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFusionInstanceEventPublishConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---


### DataFusionInstanceNetworkConfigOutputReference <a name="DataFusionInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">putPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">resetIpAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">resetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateServiceConnectConfig` <a name="putPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```typescript
public putPrivateServiceConnectConfig(value: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetIpAllocation` <a name="resetIpAllocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```typescript
public resetIpAllocation(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPrivateServiceConnectConfig` <a name="resetPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```typescript
public resetPrivateServiceConnectConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">privateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">ipAllocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">privateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">ipAllocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateServiceConnectConfig`<sup>Required</sup> <a name="privateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```typescript
public readonly privateServiceConnectConfig: DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `ipAllocationInput`<sup>Optional</sup> <a name="ipAllocationInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```typescript
public readonly ipAllocationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `privateServiceConnectConfigInput`<sup>Optional</sup> <a name="privateServiceConnectConfigInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```typescript
public readonly privateServiceConnectConfigInput: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `ipAllocation`<sup>Required</sup> <a name="ipAllocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```typescript
public readonly ipAllocation: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFusionInstanceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---


### DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">resetUnreachableCidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```typescript
public resetNetworkAttachment(): void
```

##### `resetUnreachableCidrBlock` <a name="resetUnreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```typescript
public resetUnreachableCidrBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">effectiveUnreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">unreachableCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">unreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveUnreachableCidrBlock`<sup>Required</sup> <a name="effectiveUnreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```typescript
public readonly effectiveUnreachableCidrBlock: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `unreachableCidrBlockInput`<sup>Optional</sup> <a name="unreachableCidrBlockInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```typescript
public readonly unreachableCidrBlockInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `unreachableCidrBlock`<sup>Required</sup> <a name="unreachableCidrBlock" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```typescript
public readonly unreachableCidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### DataFusionInstanceTimeoutsOutputReference <a name="DataFusionInstanceTimeoutsOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFusionInstance } from '@cdktf/provider-google'

new dataFusionInstance.DataFusionInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFusionInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

---



