# `bigqueryDataTransferConfig` Submodule <a name="`bigqueryDataTransferConfig` Submodule" id="@cdktf/provider-google.bigqueryDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferConfig <a name="BigqueryDataTransferConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config google_bigquery_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

new bigqueryDataTransferConfig.BigqueryDataTransferConfig(scope: Construct, id: string, config: BigqueryDataTransferConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig">BigqueryDataTransferConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig">BigqueryDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences">putEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions">putScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams">putSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays">resetDataRefreshWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId">resetDestinationDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences">resetEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic">resetNotificationPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions">resetScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams">resetSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName">resetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailPreferences` <a name="putEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences"></a>

```typescript
public putEmailPreferences(value: BigqueryDataTransferConfigEmailPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: BigqueryDataTransferConfigEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a>

---

##### `putScheduleOptions` <a name="putScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions"></a>

```typescript
public putScheduleOptions(value: BigqueryDataTransferConfigScheduleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `putSensitiveParams` <a name="putSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams"></a>

```typescript
public putSensitiveParams(value: BigqueryDataTransferConfigSensitiveParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryDataTransferConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---

##### `resetDataRefreshWindowDays` <a name="resetDataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays"></a>

```typescript
public resetDataRefreshWindowDays(): void
```

##### `resetDestinationDatasetId` <a name="resetDestinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId"></a>

```typescript
public resetDestinationDatasetId(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEmailPreferences` <a name="resetEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences"></a>

```typescript
public resetEmailPreferences(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNotificationPubsubTopic` <a name="resetNotificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic"></a>

```typescript
public resetNotificationPubsubTopic(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetScheduleOptions` <a name="resetScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions"></a>

```typescript
public resetScheduleOptions(): void
```

##### `resetSensitiveParams` <a name="resetSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams"></a>

```typescript
public resetSensitiveParams(): void
```

##### `resetServiceAccountName` <a name="resetServiceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName"></a>

```typescript
public resetServiceAccountName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDataTransferConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference">BigqueryDataTransferConfigEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput">dataRefreshWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput">destinationDatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput">emailPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput">notificationPubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput">scheduleOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput">sensitiveParamsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId">destinationDatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailPreferences`<sup>Required</sup> <a name="emailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences"></a>

```typescript
public readonly emailPreferences: BigqueryDataTransferConfigEmailPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: BigqueryDataTransferConfigEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference">BigqueryDataTransferConfigEncryptionConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheduleOptions`<sup>Required</sup> <a name="scheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions"></a>

```typescript
public readonly scheduleOptions: BigqueryDataTransferConfigScheduleOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a>

---

##### `sensitiveParams`<sup>Required</sup> <a name="sensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams"></a>

```typescript
public readonly sensitiveParams: BigqueryDataTransferConfigSensitiveParamsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDataTransferConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a>

---

##### `dataRefreshWindowDaysInput`<sup>Optional</sup> <a name="dataRefreshWindowDaysInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput"></a>

```typescript
public readonly dataRefreshWindowDaysInput: number;
```

- *Type:* number

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `destinationDatasetIdInput`<sup>Optional</sup> <a name="destinationDatasetIdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput"></a>

```typescript
public readonly destinationDatasetIdInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailPreferencesInput`<sup>Optional</sup> <a name="emailPreferencesInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput"></a>

```typescript
public readonly emailPreferencesInput: BigqueryDataTransferConfigEmailPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: BigqueryDataTransferConfigEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `notificationPubsubTopicInput`<sup>Optional</sup> <a name="notificationPubsubTopicInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput"></a>

```typescript
public readonly notificationPubsubTopicInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `scheduleOptionsInput`<sup>Optional</sup> <a name="scheduleOptionsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput"></a>

```typescript
public readonly scheduleOptionsInput: BigqueryDataTransferConfigScheduleOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `sensitiveParamsInput`<sup>Optional</sup> <a name="sensitiveParamsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput"></a>

```typescript
public readonly sensitiveParamsInput: BigqueryDataTransferConfigSensitiveParams;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput"></a>

```typescript
public readonly serviceAccountNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryDataTransferConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---

##### `dataRefreshWindowDays`<sup>Required</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays"></a>

```typescript
public readonly dataRefreshWindowDays: number;
```

- *Type:* number

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `destinationDatasetId`<sup>Required</sup> <a name="destinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId"></a>

```typescript
public readonly destinationDatasetId: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `notificationPubsubTopic`<sup>Required</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic"></a>

```typescript
public readonly notificationPubsubTopic: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferConfigConfig <a name="BigqueryDataTransferConfigConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

const bigqueryDataTransferConfigConfig: bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays">dataRefreshWindowDays</a></code> | <code>number</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId">destinationDatasetId</a></code> | <code>string</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences">emailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic">notificationPubsubTopic</a></code> | <code>string</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule">schedule</a></code> | <code>string</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions">scheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams">sensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | Service account email. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#data_source_id BigqueryDataTransferConfig#data_source_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#display_name BigqueryDataTransferConfig#display_name}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#params BigqueryDataTransferConfig#params}

---

##### `dataRefreshWindowDays`<sup>Optional</sup> <a name="dataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays"></a>

```typescript
public readonly dataRefreshWindowDays: number;
```

- *Type:* number

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#data_refresh_window_days BigqueryDataTransferConfig#data_refresh_window_days}

---

##### `destinationDatasetId`<sup>Optional</sup> <a name="destinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId"></a>

```typescript
public readonly destinationDatasetId: string;
```

- *Type:* string

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#destination_dataset_id BigqueryDataTransferConfig#destination_dataset_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#disabled BigqueryDataTransferConfig#disabled}

---

##### `emailPreferences`<sup>Optional</sup> <a name="emailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences"></a>

```typescript
public readonly emailPreferences: BigqueryDataTransferConfigEmailPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#email_preferences BigqueryDataTransferConfig#email_preferences}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: BigqueryDataTransferConfigEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#encryption_configuration BigqueryDataTransferConfig#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#location BigqueryDataTransferConfig#location}

---

##### `notificationPubsubTopic`<sup>Optional</sup> <a name="notificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic"></a>

```typescript
public readonly notificationPubsubTopic: string;
```

- *Type:* string

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#notification_pubsub_topic BigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: The minimum interval time between recurring transfers depends
on the data source; refer to the documentation for your data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#schedule BigqueryDataTransferConfig#schedule}

---

##### `scheduleOptions`<sup>Optional</sup> <a name="scheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions"></a>

```typescript
public readonly scheduleOptions: BigqueryDataTransferConfigScheduleOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#schedule_options BigqueryDataTransferConfig#schedule_options}

---

##### `sensitiveParams`<sup>Optional</sup> <a name="sensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams"></a>

```typescript
public readonly sensitiveParams: BigqueryDataTransferConfigSensitiveParams;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#sensitive_params BigqueryDataTransferConfig#sensitive_params}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#service_account_name BigqueryDataTransferConfig#service_account_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDataTransferConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#timeouts BigqueryDataTransferConfig#timeouts}

---

### BigqueryDataTransferConfigEmailPreferences <a name="BigqueryDataTransferConfigEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

const bigqueryDataTransferConfigEmailPreferences: bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail">enableFailureEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, email notifications will be sent on transfer run failures. |

---

##### `enableFailureEmail`<sup>Required</sup> <a name="enableFailureEmail" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail"></a>

```typescript
public readonly enableFailureEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#enable_failure_email BigqueryDataTransferConfig#enable_failure_email}

---

### BigqueryDataTransferConfigEncryptionConfiguration <a name="BigqueryDataTransferConfigEncryptionConfiguration" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

const bigqueryDataTransferConfigEncryptionConfiguration: bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The name of the KMS key used for encrypting BigQuery data. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The name of the KMS key used for encrypting BigQuery data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#kms_key_name BigqueryDataTransferConfig#kms_key_name}

---

### BigqueryDataTransferConfigScheduleOptions <a name="BigqueryDataTransferConfigScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

const bigqueryDataTransferConfigScheduleOptions: bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling">disableAutoScheduling</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, automatic scheduling of data transfer runs for this configuration will be disabled. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime">endTime</a></code> | <code>string</code> | Defines time to stop scheduling transfer runs. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime">startTime</a></code> | <code>string</code> | Specifies time to start scheduling transfer runs. |

---

##### `disableAutoScheduling`<sup>Optional</sup> <a name="disableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling"></a>

```typescript
public readonly disableAutoScheduling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#disable_auto_scheduling BigqueryDataTransferConfig#disable_auto_scheduling}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#end_time BigqueryDataTransferConfig#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#start_time BigqueryDataTransferConfig#start_time}

---

### BigqueryDataTransferConfigSensitiveParams <a name="BigqueryDataTransferConfigSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

const bigqueryDataTransferConfigSensitiveParams: bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | The Secret Access Key of the AWS account transferring data from. |

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#secret_access_key BigqueryDataTransferConfig#secret_access_key}

---

### BigqueryDataTransferConfigTimeouts <a name="BigqueryDataTransferConfigTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

const bigqueryDataTransferConfigTimeouts: bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferConfigEmailPreferencesOutputReference <a name="BigqueryDataTransferConfigEmailPreferencesOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

new bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput">enableFailureEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail">enableFailureEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableFailureEmailInput`<sup>Optional</sup> <a name="enableFailureEmailInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput"></a>

```typescript
public readonly enableFailureEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableFailureEmail`<sup>Required</sup> <a name="enableFailureEmail" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail"></a>

```typescript
public readonly enableFailureEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDataTransferConfigEmailPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---


### BigqueryDataTransferConfigEncryptionConfigurationOutputReference <a name="BigqueryDataTransferConfigEncryptionConfigurationOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

new bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDataTransferConfigEncryptionConfiguration;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEncryptionConfiguration">BigqueryDataTransferConfigEncryptionConfiguration</a>

---


### BigqueryDataTransferConfigScheduleOptionsOutputReference <a name="BigqueryDataTransferConfigScheduleOptionsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

new bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling">resetDisableAutoScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableAutoScheduling` <a name="resetDisableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling"></a>

```typescript
public resetDisableAutoScheduling(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput">disableAutoSchedulingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling">disableAutoScheduling</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableAutoSchedulingInput`<sup>Optional</sup> <a name="disableAutoSchedulingInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput"></a>

```typescript
public readonly disableAutoSchedulingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `disableAutoScheduling`<sup>Required</sup> <a name="disableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling"></a>

```typescript
public readonly disableAutoScheduling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDataTransferConfigScheduleOptions;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---


### BigqueryDataTransferConfigSensitiveParamsOutputReference <a name="BigqueryDataTransferConfigSensitiveParamsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

new bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDataTransferConfigSensitiveParams;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---


### BigqueryDataTransferConfigTimeoutsOutputReference <a name="BigqueryDataTransferConfigTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryDataTransferConfig } from '@cdktf/provider-google'

new bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryDataTransferConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---



