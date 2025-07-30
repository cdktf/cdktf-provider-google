# `dataprocMetastoreService` Submodule <a name="`dataprocMetastoreService` Submodule" id="@cdktf/provider-google.dataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreService <a name="DataprocMetastoreService" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreService(scope: Construct, id: string, config: DataprocMetastoreServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig">DataprocMetastoreServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig">DataprocMetastoreServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putHiveMetastoreConfig">putHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMetadataIntegration">putMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putScalingConfig">putScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putScheduledBackup">putScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetHiveMetastoreConfig">resetHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetMetadataIntegration">resetMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetReleaseChannel">resetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetScalingConfig">resetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetScheduledBackup">resetScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: DataprocMetastoreServiceEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

---

##### `putHiveMetastoreConfig` <a name="putHiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putHiveMetastoreConfig"></a>

```typescript
public putHiveMetastoreConfig(value: DataprocMetastoreServiceHiveMetastoreConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putHiveMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: DataprocMetastoreServiceMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

---

##### `putMetadataIntegration` <a name="putMetadataIntegration" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMetadataIntegration"></a>

```typescript
public putMetadataIntegration(value: DataprocMetastoreServiceMetadataIntegration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putMetadataIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: DataprocMetastoreServiceNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

---

##### `putScalingConfig` <a name="putScalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putScalingConfig"></a>

```typescript
public putScalingConfig(value: DataprocMetastoreServiceScalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a>

---

##### `putScheduledBackup` <a name="putScheduledBackup" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putScheduledBackup"></a>

```typescript
public putScheduledBackup(value: DataprocMetastoreServiceScheduledBackup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putScheduledBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a>

---

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTelemetryConfig"></a>

```typescript
public putTelemetryConfig(value: DataprocMetastoreServiceTelemetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTimeouts"></a>

```typescript
public putTimeouts(value: DataprocMetastoreServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a>

---

##### `resetDatabaseType` <a name="resetDatabaseType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetDatabaseType"></a>

```typescript
public resetDatabaseType(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetHiveMetastoreConfig` <a name="resetHiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetHiveMetastoreConfig"></a>

```typescript
public resetHiveMetastoreConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMetadataIntegration` <a name="resetMetadataIntegration" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetMetadataIntegration"></a>

```typescript
public resetMetadataIntegration(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReleaseChannel` <a name="resetReleaseChannel" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetReleaseChannel"></a>

```typescript
public resetReleaseChannel(): void
```

##### `resetScalingConfig` <a name="resetScalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetScalingConfig"></a>

```typescript
public resetScalingConfig(): void
```

##### `resetScheduledBackup` <a name="resetScheduledBackup" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetScheduledBackup"></a>

```typescript
public resetScheduledBackup(): void
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTelemetryConfig"></a>

```typescript
public resetTelemetryConfig(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocMetastoreService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isConstruct"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

dataprocMetastoreService.DataprocMetastoreService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformElement"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

dataprocMetastoreService.DataprocMetastoreService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformResource"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

dataprocMetastoreService.DataprocMetastoreService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataprocMetastoreService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocMetastoreService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocMetastoreService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.artifactGcsUri">artifactGcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference">DataprocMetastoreServiceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference">DataprocMetastoreServiceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference">DataprocMetastoreServiceMetadataIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference">DataprocMetastoreServiceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference">DataprocMetastoreServiceScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference">DataprocMetastoreServiceScheduledBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference">DataprocMetastoreServiceTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference">DataprocMetastoreServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfigInput">hiveMetastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.metadataIntegrationInput">metadataIntegrationInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannelInput">releaseChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scalingConfigInput">scalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scheduledBackupInput">scheduledBackupInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactGcsUri`<sup>Required</sup> <a name="artifactGcsUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.artifactGcsUri"></a>

```typescript
public readonly artifactGcsUri: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: DataprocMetastoreServiceEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference">DataprocMetastoreServiceEncryptionConfigOutputReference</a>

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `hiveMetastoreConfig`<sup>Required</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfig"></a>

```typescript
public readonly hiveMetastoreConfig: DataprocMetastoreServiceHiveMetastoreConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataprocMetastoreServiceMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference">DataprocMetastoreServiceMaintenanceWindowOutputReference</a>

---

##### `metadataIntegration`<sup>Required</sup> <a name="metadataIntegration" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.metadataIntegration"></a>

```typescript
public readonly metadataIntegration: DataprocMetastoreServiceMetadataIntegrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference">DataprocMetastoreServiceMetadataIntegrationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataprocMetastoreServiceNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference">DataprocMetastoreServiceNetworkConfigOutputReference</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataprocMetastoreServiceScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference">DataprocMetastoreServiceScalingConfigOutputReference</a>

---

##### `scheduledBackup`<sup>Required</sup> <a name="scheduledBackup" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scheduledBackup"></a>

```typescript
public readonly scheduledBackup: DataprocMetastoreServiceScheduledBackupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference">DataprocMetastoreServiceScheduledBackupOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: DataprocMetastoreServiceTelemetryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference">DataprocMetastoreServiceTelemetryConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocMetastoreServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference">DataprocMetastoreServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: DataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

---

##### `hiveMetastoreConfigInput`<sup>Optional</sup> <a name="hiveMetastoreConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.hiveMetastoreConfigInput"></a>

```typescript
public readonly hiveMetastoreConfigInput: DataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: DataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

---

##### `metadataIntegrationInput`<sup>Optional</sup> <a name="metadataIntegrationInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.metadataIntegrationInput"></a>

```typescript
public readonly metadataIntegrationInput: DataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: DataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `releaseChannelInput`<sup>Optional</sup> <a name="releaseChannelInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannelInput"></a>

```typescript
public readonly releaseChannelInput: string;
```

- *Type:* string

---

##### `scalingConfigInput`<sup>Optional</sup> <a name="scalingConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scalingConfigInput"></a>

```typescript
public readonly scalingConfigInput: DataprocMetastoreServiceScalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a>

---

##### `scheduledBackupInput`<sup>Optional</sup> <a name="scheduledBackupInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.scheduledBackupInput"></a>

```typescript
public readonly scheduledBackupInput: DataprocMetastoreServiceScheduledBackup;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a>

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.telemetryConfigInput"></a>

```typescript
public readonly telemetryConfigInput: DataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataprocMetastoreServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a>

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreServiceConfig <a name="DataprocMetastoreServiceConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceConfig: dataprocMetastoreService.DataprocMetastoreServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.databaseType">databaseType</a></code> | <code>string</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the dataproc metastore should be protected against accidental deletions. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#id DataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.location">location</a></code> | <code>string</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a></code> | metadata_integration block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.network">network</a></code> | <code>string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.port">port</a></code> | <code>number</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#project DataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.scheduledBackup">scheduledBackup</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a></code> | scheduled_backup block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.tier">tier</a></code> | <code>string</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#service_id DataprocMetastoreService#service_id}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#database_type DataprocMetastoreService#database_type}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the dataproc metastore should be protected against accidental deletions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#deletion_protection DataprocMetastoreService#deletion_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: DataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#encryption_config DataprocMetastoreService#encryption_config}

---

##### `hiveMetastoreConfig`<sup>Optional</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.hiveMetastoreConfig"></a>

```typescript
public readonly hiveMetastoreConfig: DataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#hive_metastore_config DataprocMetastoreService#hive_metastore_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#id DataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the metastore service.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#labels DataprocMetastoreService#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#location DataprocMetastoreService#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#maintenance_window DataprocMetastoreService#maintenance_window}

---

##### `metadataIntegration`<sup>Optional</sup> <a name="metadataIntegration" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.metadataIntegration"></a>

```typescript
public readonly metadataIntegration: DataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a>

metadata_integration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#metadata_integration DataprocMetastoreService#metadata_integration}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#network DataprocMetastoreService#network}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: DataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#network_config DataprocMetastoreService#network_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#port DataprocMetastoreService#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#project DataprocMetastoreService#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#release_channel DataprocMetastoreService#release_channel}

---

##### `scalingConfig`<sup>Optional</sup> <a name="scalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: DataprocMetastoreServiceScalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#scaling_config DataprocMetastoreService#scaling_config}

---

##### `scheduledBackup`<sup>Optional</sup> <a name="scheduledBackup" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.scheduledBackup"></a>

```typescript
public readonly scheduledBackup: DataprocMetastoreServiceScheduledBackup;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a>

scheduled_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#scheduled_backup DataprocMetastoreService#scheduled_backup}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: DataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#telemetry_config DataprocMetastoreService#telemetry_config}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#tier DataprocMetastoreService#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataprocMetastoreServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#timeouts DataprocMetastoreService#timeouts}

---

### DataprocMetastoreServiceEncryptionConfig <a name="DataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceEncryptionConfig: dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#kms_key DataprocMetastoreService#kms_key}

---

### DataprocMetastoreServiceHiveMetastoreConfig <a name="DataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceHiveMetastoreConfig: dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.version">version</a></code> | <code>string</code> | The Hive metastore schema version. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]</code> | auxiliary_versions block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol">endpointProtocol</a></code> | <code>string</code> | The protocol to use for the metastore service endpoint. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Hive metastore schema version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#version DataprocMetastoreService#version}

---

##### `auxiliaryVersions`<sup>Optional</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions"></a>

```typescript
public readonly auxiliaryVersions: IResolvable | DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

auxiliary_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#auxiliary_versions DataprocMetastoreService#auxiliary_versions}

---

##### `configOverrides`<sup>Optional</sup> <a name="configOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#config_overrides DataprocMetastoreService#config_overrides}

---

##### `endpointProtocol`<sup>Optional</sup> <a name="endpointProtocol" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol"></a>

```typescript
public readonly endpointProtocol: string;
```

- *Type:* string

The protocol to use for the metastore service endpoint.

If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#endpoint_protocol DataprocMetastoreService#endpoint_protocol}

---

##### `kerberosConfig`<sup>Optional</sup> <a name="kerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig"></a>

```typescript
public readonly kerberosConfig: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#kerberos_config DataprocMetastoreService#kerberos_config}

---

### DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions: dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#key DataprocMetastoreService#key}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version">version</a></code> | <code>string</code> | The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#key DataprocMetastoreService#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#version DataprocMetastoreService#version}

---

##### `configOverrides`<sup>Optional</sup> <a name="configOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#config_overrides DataprocMetastoreService#config_overrides}

---

### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceHiveMetastoreConfigKerberosConfig: dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | keytab block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>string</code> | A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal">principal</a></code> | <code>string</code> | A Kerberos principal that exists in the both the keytab the KDC to authenticate as. |

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab"></a>

```typescript
public readonly keytab: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#keytab DataprocMetastoreService#keytab}

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri"></a>

```typescript
public readonly krb5ConfigGcsUri: string;
```

- *Type:* string

A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#krb5_config_gcs_uri DataprocMetastoreService#krb5_config_gcs_uri}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

A Kerberos principal that exists in the both the keytab the KDC to authenticate as.

A typical principal is of the form "primary/instance@REALM", but there is no exact format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#principal DataprocMetastoreService#principal}

---

### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab: dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret">cloudSecret</a></code> | <code>string</code> | The relative resource name of a Secret Manager secret version, in the following form:. |

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret"></a>

```typescript
public readonly cloudSecret: string;
```

- *Type:* string

The relative resource name of a Secret Manager secret version, in the following form:.

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#cloud_secret DataprocMetastoreService#cloud_secret}

---

### DataprocMetastoreServiceMaintenanceWindow <a name="DataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceMaintenanceWindow: dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | The hour of day (0-23) when the window starts. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#day_of_week DataprocMetastoreService#day_of_week}

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

The hour of day (0-23) when the window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#hour_of_day DataprocMetastoreService#hour_of_day}

---

### DataprocMetastoreServiceMetadataIntegration <a name="DataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceMetadataIntegration: dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | data_catalog_config block. |

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig"></a>

```typescript
public readonly dataCatalogConfig: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#data_catalog_config DataprocMetastoreService#data_catalog_config}

---

### DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceMetadataIntegrationDataCatalogConfig: dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the metastore metadata should be synced to Data Catalog. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the metastore metadata should be synced to Data Catalog.

The default value is to disable syncing metastore metadata to Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#enabled DataprocMetastoreService#enabled}

---

### DataprocMetastoreServiceNetworkConfig <a name="DataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceNetworkConfig: dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig.property.consumers">consumers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]</code> | consumers block. |

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig.property.consumers"></a>

```typescript
public readonly consumers: IResolvable | DataprocMetastoreServiceNetworkConfigConsumers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]

consumers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#consumers DataprocMetastoreService#consumers}

---

### DataprocMetastoreServiceNetworkConfigConsumers <a name="DataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceNetworkConfigConsumers: dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork">subnetwork</a></code> | <code>string</code> | The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. |

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.

It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#subnetwork DataprocMetastoreService#subnetwork}

---

### DataprocMetastoreServiceScalingConfig <a name="DataprocMetastoreServiceScalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceScalingConfig: dataprocMetastoreService.DataprocMetastoreServiceScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.property.instanceSize">instanceSize</a></code> | <code>string</code> | Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.property.scalingFactor">scalingFactor</a></code> | <code>number</code> | Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0. |

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: DataprocMetastoreServiceScalingConfigAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#autoscaling_config DataprocMetastoreService#autoscaling_config}

---

##### `instanceSize`<sup>Optional</sup> <a name="instanceSize" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#instance_size DataprocMetastoreService#instance_size}

---

##### `scalingFactor`<sup>Optional</sup> <a name="scalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig.property.scalingFactor"></a>

```typescript
public readonly scalingFactor: number;
```

- *Type:* number

Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#scaling_factor DataprocMetastoreService#scaling_factor}

---

### DataprocMetastoreServiceScalingConfigAutoscalingConfig <a name="DataprocMetastoreServiceScalingConfigAutoscalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceScalingConfigAutoscalingConfig: dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether autoscaling is enabled. The default value is false. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig.property.limitConfig">limitConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | limit_config block. |

---

##### `autoscalingEnabled`<sup>Optional</sup> <a name="autoscalingEnabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig.property.autoscalingEnabled"></a>

```typescript
public readonly autoscalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether autoscaling is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#autoscaling_enabled DataprocMetastoreService#autoscaling_enabled}

---

##### `limitConfig`<sup>Optional</sup> <a name="limitConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig.property.limitConfig"></a>

```typescript
public readonly limitConfig: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

limit_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#limit_config DataprocMetastoreService#limit_config}

---

### DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig <a name="DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig: dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.maxScalingFactor">maxScalingFactor</a></code> | <code>number</code> | The maximum scaling factor that the service will autoscale to. The default value is 6.0. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.minScalingFactor">minScalingFactor</a></code> | <code>number</code> | The minimum scaling factor that the service will autoscale to. The default value is 0.1. |

---

##### `maxScalingFactor`<sup>Optional</sup> <a name="maxScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.maxScalingFactor"></a>

```typescript
public readonly maxScalingFactor: number;
```

- *Type:* number

The maximum scaling factor that the service will autoscale to. The default value is 6.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#max_scaling_factor DataprocMetastoreService#max_scaling_factor}

---

##### `minScalingFactor`<sup>Optional</sup> <a name="minScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig.property.minScalingFactor"></a>

```typescript
public readonly minScalingFactor: number;
```

- *Type:* number

The minimum scaling factor that the service will autoscale to. The default value is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#min_scaling_factor DataprocMetastoreService#min_scaling_factor}

---

### DataprocMetastoreServiceScheduledBackup <a name="DataprocMetastoreServiceScheduledBackup" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceScheduledBackup: dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.backupLocation">backupLocation</a></code> | <code>string</code> | A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the scheduled backup is enabled. The default value is false. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.timeZone">timeZone</a></code> | <code>string</code> | Specifies the time zone to be used when interpreting cronSchedule. |

---

##### `backupLocation`<sup>Required</sup> <a name="backupLocation" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.backupLocation"></a>

```typescript
public readonly backupLocation: string;
```

- *Type:* string

A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>.

A sub-folder <backup_folder> containing backup files will be stored below it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#backup_location DataprocMetastoreService#backup_location}

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#cron_schedule DataprocMetastoreService#cron_schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the scheduled backup is enabled. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#enabled DataprocMetastoreService#enabled}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Specifies the time zone to be used when interpreting cronSchedule.

Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#time_zone DataprocMetastoreService#time_zone}

---

### DataprocMetastoreServiceTelemetryConfig <a name="DataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceTelemetryConfig: dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig.property.logFormat">logFormat</a></code> | <code>string</code> | The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]. |

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#log_format DataprocMetastoreService#log_format}

---

### DataprocMetastoreServiceTimeouts <a name="DataprocMetastoreServiceTimeouts" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

const dataprocMetastoreServiceTimeouts: dataprocMetastoreService.DataprocMetastoreServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#create DataprocMetastoreService#create}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#delete DataprocMetastoreService#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#update DataprocMetastoreService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#create DataprocMetastoreService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#delete DataprocMetastoreService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dataproc_metastore_service#update DataprocMetastoreService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreServiceEncryptionConfigOutputReference <a name="DataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceEncryptionConfig">DataprocMetastoreServiceEncryptionConfig</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```typescript
public get(index: number): DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

---


### DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides">resetConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigOverrides` <a name="resetConfigOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides"></a>

```typescript
public resetConfigOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput">configOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configOverridesInput`<sup>Optional</sup> <a name="configOverridesInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput"></a>

```typescript
public readonly configOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput">cloudSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">cloudSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSecretInput`<sup>Optional</sup> <a name="cloudSecretInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput"></a>

```typescript
public readonly cloudSecretInput: string;
```

- *Type:* string

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```typescript
public readonly cloudSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab">putKeytab</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeytab` <a name="putKeytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab"></a>

```typescript
public putKeytab(value: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput">keytabInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput">krb5ConfigGcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```typescript
public readonly keytab: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a>

---

##### `keytabInput`<sup>Optional</sup> <a name="keytabInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput"></a>

```typescript
public readonly keytabInput: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---

##### `krb5ConfigGcsUriInput`<sup>Optional</sup> <a name="krb5ConfigGcsUriInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput"></a>

```typescript
public readonly krb5ConfigGcsUriInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```typescript
public readonly krb5ConfigGcsUri: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### DataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="DataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions">putAuxiliaryVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig">putKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions">resetAuxiliaryVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides">resetConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol">resetEndpointProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig">resetKerberosConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuxiliaryVersions` <a name="putAuxiliaryVersions" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions"></a>

```typescript
public putAuxiliaryVersions(value: IResolvable | DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

---

##### `putKerberosConfig` <a name="putKerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig"></a>

```typescript
public putKerberosConfig(value: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `resetAuxiliaryVersions` <a name="resetAuxiliaryVersions" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions"></a>

```typescript
public resetAuxiliaryVersions(): void
```

##### `resetConfigOverrides` <a name="resetConfigOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides"></a>

```typescript
public resetConfigOverrides(): void
```

##### `resetEndpointProtocol` <a name="resetEndpointProtocol" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol"></a>

```typescript
public resetEndpointProtocol(): void
```

##### `resetKerberosConfig` <a name="resetKerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig"></a>

```typescript
public resetKerberosConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput">auxiliaryVersionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput">configOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput">endpointProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput">kerberosConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">endpointProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auxiliaryVersions`<sup>Required</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```typescript
public readonly auxiliaryVersions: DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```typescript
public readonly kerberosConfig: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a>

---

##### `auxiliaryVersionsInput`<sup>Optional</sup> <a name="auxiliaryVersionsInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput"></a>

```typescript
public readonly auxiliaryVersionsInput: IResolvable | DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">DataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

---

##### `configOverridesInput`<sup>Optional</sup> <a name="configOverridesInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput"></a>

```typescript
public readonly configOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointProtocolInput`<sup>Optional</sup> <a name="endpointProtocolInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput"></a>

```typescript
public readonly endpointProtocolInput: string;
```

- *Type:* string

---

##### `kerberosConfigInput`<sup>Optional</sup> <a name="kerberosConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput"></a>

```typescript
public readonly kerberosConfigInput: DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">DataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointProtocol`<sup>Required</sup> <a name="endpointProtocol" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```typescript
public readonly endpointProtocol: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceHiveMetastoreConfig">DataprocMetastoreServiceHiveMetastoreConfig</a>

---


### DataprocMetastoreServiceMaintenanceWindowOutputReference <a name="DataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMaintenanceWindow">DataprocMetastoreServiceMaintenanceWindow</a>

---


### DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### DataprocMetastoreServiceMetadataIntegrationOutputReference <a name="DataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig">putDataCatalogConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCatalogConfig` <a name="putDataCatalogConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig"></a>

```typescript
public putDataCatalogConfig(value: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput">dataCatalogConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```typescript
public readonly dataCatalogConfig: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a>

---

##### `dataCatalogConfigInput`<sup>Optional</sup> <a name="dataCatalogConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput"></a>

```typescript
public readonly dataCatalogConfigInput: DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">DataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceMetadataIntegration">DataprocMetastoreServiceMetadataIntegration</a>

---


### DataprocMetastoreServiceNetworkConfigConsumersList <a name="DataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```typescript
public get(index: number): DataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreServiceNetworkConfigConsumers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]

---


### DataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="DataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreServiceNetworkConfigConsumers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>

---


### DataprocMetastoreServiceNetworkConfigOutputReference <a name="DataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.putConsumers">putConsumers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumers` <a name="putConsumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.putConsumers"></a>

```typescript
public putConsumers(value: IResolvable | DataprocMetastoreServiceNetworkConfigConsumers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.putConsumers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">consumers</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList">DataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput">consumersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```typescript
public readonly consumers: DataprocMetastoreServiceNetworkConfigConsumersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumersList">DataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `consumersInput`<sup>Optional</sup> <a name="consumersInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput"></a>

```typescript
public readonly consumersInput: IResolvable | DataprocMetastoreServiceNetworkConfigConsumers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigConsumers">DataprocMetastoreServiceNetworkConfigConsumers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceNetworkConfig">DataprocMetastoreServiceNetworkConfig</a>

---


### DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference <a name="DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMaxScalingFactor">resetMaxScalingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMinScalingFactor">resetMinScalingFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScalingFactor` <a name="resetMaxScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMaxScalingFactor"></a>

```typescript
public resetMaxScalingFactor(): void
```

##### `resetMinScalingFactor` <a name="resetMinScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.resetMinScalingFactor"></a>

```typescript
public resetMinScalingFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactorInput">maxScalingFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactorInput">minScalingFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor">maxScalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor">minScalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxScalingFactorInput`<sup>Optional</sup> <a name="maxScalingFactorInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactorInput"></a>

```typescript
public readonly maxScalingFactorInput: number;
```

- *Type:* number

---

##### `minScalingFactorInput`<sup>Optional</sup> <a name="minScalingFactorInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactorInput"></a>

```typescript
public readonly minScalingFactorInput: number;
```

- *Type:* number

---

##### `maxScalingFactor`<sup>Required</sup> <a name="maxScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.maxScalingFactor"></a>

```typescript
public readonly maxScalingFactor: number;
```

- *Type:* number

---

##### `minScalingFactor`<sup>Required</sup> <a name="minScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.minScalingFactor"></a>

```typescript
public readonly minScalingFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---


### DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference <a name="DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig">putLimitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetAutoscalingEnabled">resetAutoscalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetLimitConfig">resetLimitConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimitConfig` <a name="putLimitConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig"></a>

```typescript
public putLimitConfig(value: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.putLimitConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---

##### `resetAutoscalingEnabled` <a name="resetAutoscalingEnabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetAutoscalingEnabled"></a>

```typescript
public resetAutoscalingEnabled(): void
```

##### `resetLimitConfig` <a name="resetLimitConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.resetLimitConfig"></a>

```typescript
public resetLimitConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingFactor">autoscalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig">limitConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabledInput">autoscalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfigInput">limitConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled">autoscalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingFactor`<sup>Required</sup> <a name="autoscalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingFactor"></a>

```typescript
public readonly autoscalingFactor: number;
```

- *Type:* number

---

##### `limitConfig`<sup>Required</sup> <a name="limitConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfig"></a>

```typescript
public readonly limitConfig: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference</a>

---

##### `autoscalingEnabledInput`<sup>Optional</sup> <a name="autoscalingEnabledInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabledInput"></a>

```typescript
public readonly autoscalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `limitConfigInput`<sup>Optional</sup> <a name="limitConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.limitConfigInput"></a>

```typescript
public readonly limitConfigInput: DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig</a>

---

##### `autoscalingEnabled`<sup>Required</sup> <a name="autoscalingEnabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.autoscalingEnabled"></a>

```typescript
public readonly autoscalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceScalingConfigAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---


### DataprocMetastoreServiceScalingConfigOutputReference <a name="DataprocMetastoreServiceScalingConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resetInstanceSize">resetInstanceSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resetScalingFactor">resetScalingFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig"></a>

```typescript
public putAutoscalingConfig(value: DataprocMetastoreServiceScalingConfigAutoscalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resetAutoscalingConfig"></a>

```typescript
public resetAutoscalingConfig(): void
```

##### `resetInstanceSize` <a name="resetInstanceSize" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resetInstanceSize"></a>

```typescript
public resetInstanceSize(): void
```

##### `resetScalingFactor` <a name="resetScalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.resetScalingFactor"></a>

```typescript
public resetScalingFactor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference">DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.instanceSizeInput">instanceSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactorInput">scalingFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize">instanceSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor">scalingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfig"></a>

```typescript
public readonly autoscalingConfig: DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference">DataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.autoscalingConfigInput"></a>

```typescript
public readonly autoscalingConfigInput: DataprocMetastoreServiceScalingConfigAutoscalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigAutoscalingConfig">DataprocMetastoreServiceScalingConfigAutoscalingConfig</a>

---

##### `instanceSizeInput`<sup>Optional</sup> <a name="instanceSizeInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.instanceSizeInput"></a>

```typescript
public readonly instanceSizeInput: string;
```

- *Type:* string

---

##### `scalingFactorInput`<sup>Optional</sup> <a name="scalingFactorInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactorInput"></a>

```typescript
public readonly scalingFactorInput: number;
```

- *Type:* number

---

##### `instanceSize`<sup>Required</sup> <a name="instanceSize" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

---

##### `scalingFactor`<sup>Required</sup> <a name="scalingFactor" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.scalingFactor"></a>

```typescript
public readonly scalingFactor: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceScalingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScalingConfig">DataprocMetastoreServiceScalingConfig</a>

---


### DataprocMetastoreServiceScheduledBackupOutputReference <a name="DataprocMetastoreServiceScheduledBackupOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resetCronSchedule"></a>

```typescript
public resetCronSchedule(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocationInput">backupLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.cronScheduleInput">cronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation">backupLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupLocationInput`<sup>Optional</sup> <a name="backupLocationInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocationInput"></a>

```typescript
public readonly backupLocationInput: string;
```

- *Type:* string

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.cronScheduleInput"></a>

```typescript
public readonly cronScheduleInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `backupLocation`<sup>Required</sup> <a name="backupLocation" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.backupLocation"></a>

```typescript
public readonly backupLocation: string;
```

- *Type:* string

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.cronSchedule"></a>

```typescript
public readonly cronSchedule: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceScheduledBackup;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceScheduledBackup">DataprocMetastoreServiceScheduledBackup</a>

---


### DataprocMetastoreServiceTelemetryConfigOutputReference <a name="DataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTelemetryConfig">DataprocMetastoreServiceTelemetryConfig</a>

---


### DataprocMetastoreServiceTimeoutsOutputReference <a name="DataprocMetastoreServiceTimeoutsOutputReference" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreService } from '@cdktf/provider-google'

new dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataprocMetastoreServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataprocMetastoreService.DataprocMetastoreServiceTimeouts">DataprocMetastoreServiceTimeouts</a>

---



