# `storageTransferJob` Submodule <a name="`storageTransferJob` Submodule" id="@cdktf/provider-google.storageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferJob <a name="StorageTransferJob" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJob(scope: Construct, id: string, config: StorageTransferJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig">StorageTransferJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig">StorageTransferJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream">putEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig">putNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec">putReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec">putTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetEventStream">resetEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig">resetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetReplicationSpec">resetReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetTransferSpec">resetTransferSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventStream` <a name="putEventStream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream"></a>

```typescript
public putEventStream(value: StorageTransferJobEventStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putEventStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: StorageTransferJobLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---

##### `putNotificationConfig` <a name="putNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig"></a>

```typescript
public putNotificationConfig(value: StorageTransferJobNotificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `putReplicationSpec` <a name="putReplicationSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec"></a>

```typescript
public putReplicationSpec(value: StorageTransferJobReplicationSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putReplicationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule"></a>

```typescript
public putSchedule(value: StorageTransferJobSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `putTransferSpec` <a name="putTransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec"></a>

```typescript
public putTransferSpec(value: StorageTransferJobTransferSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.putTransferSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `resetEventStream` <a name="resetEventStream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetEventStream"></a>

```typescript
public resetEventStream(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNotificationConfig` <a name="resetNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetNotificationConfig"></a>

```typescript
public resetNotificationConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReplicationSpec` <a name="resetReplicationSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetReplicationSpec"></a>

```typescript
public resetReplicationSpec(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTransferSpec` <a name="resetTransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.resetTransferSpec"></a>

```typescript
public resetTransferSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageTransferJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

storageTransferJob.StorageTransferJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

storageTransferJob.StorageTransferJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

storageTransferJob.StorageTransferJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

storageTransferJob.StorageTransferJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageTransferJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageTransferJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageTransferJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageTransferJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime">deletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStream">eventStream</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference">StorageTransferJobEventStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference">StorageTransferJobLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpec">replicationSpec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference">StorageTransferJobReplicationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec">transferSpec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStreamInput">eventStreamInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput">notificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpecInput">replicationSpecInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput">transferSpecInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.deletionTime"></a>

```typescript
public readonly deletionTime: string;
```

- *Type:* string

---

##### `eventStream`<sup>Required</sup> <a name="eventStream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStream"></a>

```typescript
public readonly eventStream: StorageTransferJobEventStreamOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference">StorageTransferJobEventStreamOutputReference</a>

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: StorageTransferJobLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference">StorageTransferJobLoggingConfigOutputReference</a>

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: StorageTransferJobNotificationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference">StorageTransferJobNotificationConfigOutputReference</a>

---

##### `replicationSpec`<sup>Required</sup> <a name="replicationSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpec"></a>

```typescript
public readonly replicationSpec: StorageTransferJobReplicationSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference">StorageTransferJobReplicationSpecOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.schedule"></a>

```typescript
public readonly schedule: StorageTransferJobScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference">StorageTransferJobScheduleOutputReference</a>

---

##### `transferSpec`<sup>Required</sup> <a name="transferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpec"></a>

```typescript
public readonly transferSpec: StorageTransferJobTransferSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference">StorageTransferJobTransferSpecOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventStreamInput`<sup>Optional</sup> <a name="eventStreamInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.eventStreamInput"></a>

```typescript
public readonly eventStreamInput: StorageTransferJobEventStream;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: StorageTransferJobLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationConfigInput`<sup>Optional</sup> <a name="notificationConfigInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.notificationConfigInput"></a>

```typescript
public readonly notificationConfigInput: StorageTransferJobNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicationSpecInput`<sup>Optional</sup> <a name="replicationSpecInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.replicationSpecInput"></a>

```typescript
public readonly replicationSpecInput: StorageTransferJobReplicationSpec;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: StorageTransferJobSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `transferSpecInput`<sup>Optional</sup> <a name="transferSpecInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.transferSpecInput"></a>

```typescript
public readonly transferSpecInput: StorageTransferJobTransferSpec;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageTransferJob.StorageTransferJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferJobConfig <a name="StorageTransferJobConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobConfig: storageTransferJob.StorageTransferJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.description">description</a></code> | <code>string</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.eventStream">eventStream</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.name">name</a></code> | <code>string</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.project">project</a></code> | <code>string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.replicationSpec">replicationSpec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.status">status</a></code> | <code>string</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec">transferSpec</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#description StorageTransferJob#description}

---

##### `eventStream`<sup>Optional</sup> <a name="eventStream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.eventStream"></a>

```typescript
public readonly eventStream: StorageTransferJobEventStream;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#event_stream StorageTransferJob#event_stream}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: StorageTransferJobLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#logging_config StorageTransferJob#logging_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `notificationConfig`<sup>Optional</sup> <a name="notificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.notificationConfig"></a>

```typescript
public readonly notificationConfig: StorageTransferJobNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#notification_config StorageTransferJob#notification_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#project StorageTransferJob#project}

---

##### `replicationSpec`<sup>Optional</sup> <a name="replicationSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.replicationSpec"></a>

```typescript
public readonly replicationSpec: StorageTransferJobReplicationSpec;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#replication_spec StorageTransferJob#replication_spec}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.schedule"></a>

```typescript
public readonly schedule: StorageTransferJobSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#schedule StorageTransferJob#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#status StorageTransferJob#status}

---

##### `transferSpec`<sup>Optional</sup> <a name="transferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobConfig.property.transferSpec"></a>

```typescript
public readonly transferSpec: StorageTransferJobTransferSpec;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#transfer_spec StorageTransferJob#transfer_spec}

---

### StorageTransferJobEventStream <a name="StorageTransferJobEventStream" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobEventStream: storageTransferJob.StorageTransferJobEventStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.name">name</a></code> | <code>string</code> | Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamExpirationTime">eventStreamExpirationTime</a></code> | <code>string</code> | Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamStartTime">eventStreamStartTime</a></code> | <code>string</code> | Specifies the date and time that Storage Transfer Service starts listening for events from this stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}

---

##### `eventStreamExpirationTime`<sup>Optional</sup> <a name="eventStreamExpirationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamExpirationTime"></a>

```typescript
public readonly eventStreamExpirationTime: string;
```

- *Type:* string

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#event_stream_expiration_time StorageTransferJob#event_stream_expiration_time}

---

##### `eventStreamStartTime`<sup>Optional</sup> <a name="eventStreamStartTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream.property.eventStreamStartTime"></a>

```typescript
public readonly eventStreamStartTime: string;
```

- *Type:* string

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#event_stream_start_time StorageTransferJob#event_stream_start_time}

---

### StorageTransferJobLoggingConfig <a name="StorageTransferJobLoggingConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobLoggingConfig: storageTransferJob.StorageTransferJobLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs">enableOnPremGcsTransferLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActions">logActions</a></code> | <code>string[]</code> | Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActionStates">logActionStates</a></code> | <code>string[]</code> | States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead. |

---

##### `enableOnPremGcsTransferLogs`<sup>Optional</sup> <a name="enableOnPremGcsTransferLogs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.enableOnPremGcsTransferLogs"></a>

```typescript
public readonly enableOnPremGcsTransferLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#enable_on_prem_gcs_transfer_logs StorageTransferJob#enable_on_prem_gcs_transfer_logs}

---

##### `logActions`<sup>Optional</sup> <a name="logActions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActions"></a>

```typescript
public readonly logActions: string[];
```

- *Type:* string[]

Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#log_actions StorageTransferJob#log_actions}

---

##### `logActionStates`<sup>Optional</sup> <a name="logActionStates" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig.property.logActionStates"></a>

```typescript
public readonly logActionStates: string[];
```

- *Type:* string[]

States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#log_action_states StorageTransferJob#log_action_states}

---

### StorageTransferJobNotificationConfig <a name="StorageTransferJobNotificationConfig" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobNotificationConfig: storageTransferJob.StorageTransferJobNotificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat">payloadFormat</a></code> | <code>string</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes">eventTypes</a></code> | <code>string[]</code> | Event types for which a notification is desired. |

---

##### `payloadFormat`<sup>Required</sup> <a name="payloadFormat" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.payloadFormat"></a>

```typescript
public readonly payloadFormat: string;
```

- *Type:* string

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#payload_format StorageTransferJob#payload_format}

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#pubsub_topic StorageTransferJob#pubsub_topic}

---

##### `eventTypes`<sup>Optional</sup> <a name="eventTypes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig.property.eventTypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* string[]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#event_types StorageTransferJob#event_types}

---

### StorageTransferJobReplicationSpec <a name="StorageTransferJobReplicationSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobReplicationSpec: storageTransferJob.StorageTransferJobReplicationSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSink">gcsDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSource">gcsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.objectConditions">objectConditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.transferOptions">transferOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | transfer_options block. |

---

##### `gcsDataSink`<sup>Optional</sup> <a name="gcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSink"></a>

```typescript
public readonly gcsDataSink: StorageTransferJobReplicationSpecGcsDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `gcsDataSource`<sup>Optional</sup> <a name="gcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.gcsDataSource"></a>

```typescript
public readonly gcsDataSource: StorageTransferJobReplicationSpecGcsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `objectConditions`<sup>Optional</sup> <a name="objectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.objectConditions"></a>

```typescript
public readonly objectConditions: StorageTransferJobReplicationSpecObjectConditions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `transferOptions`<sup>Optional</sup> <a name="transferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec.property.transferOptions"></a>

```typescript
public readonly transferOptions: StorageTransferJobReplicationSpecTransferOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobReplicationSpecGcsDataSink <a name="StorageTransferJobReplicationSpecGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobReplicationSpecGcsDataSink: storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.bucketName">bucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.path">path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobReplicationSpecGcsDataSource <a name="StorageTransferJobReplicationSpecGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobReplicationSpecGcsDataSource: storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.bucketName">bucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.path">path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobReplicationSpecObjectConditions <a name="StorageTransferJobReplicationSpecObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobReplicationSpecObjectConditions: storageTransferJob.StorageTransferJobReplicationSpecObjectConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes">excludePrefixes</a></code> | <code>string[]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.includePrefixes">includePrefixes</a></code> | <code>string[]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore">lastModifiedBefore</a></code> | <code>string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince">lastModifiedSince</a></code> | <code>string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification">maxTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification">minTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `excludePrefixes`<sup>Optional</sup> <a name="excludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes"></a>

```typescript
public readonly excludePrefixes: string[];
```

- *Type:* string[]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `includePrefixes`<sup>Optional</sup> <a name="includePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.includePrefixes"></a>

```typescript
public readonly includePrefixes: string[];
```

- *Type:* string[]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `lastModifiedBefore`<sup>Optional</sup> <a name="lastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore"></a>

```typescript
public readonly lastModifiedBefore: string;
```

- *Type:* string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `lastModifiedSince`<sup>Optional</sup> <a name="lastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince"></a>

```typescript
public readonly lastModifiedSince: string;
```

- *Type:* string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `maxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="maxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```typescript
public readonly maxTimeElapsedSinceLastModification: string;
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `minTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="minTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```typescript
public readonly minTimeElapsedSinceLastModification: string;
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobReplicationSpecTransferOptions <a name="StorageTransferJobReplicationSpecTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobReplicationSpecTransferOptions: storageTransferJob.StorageTransferJobReplicationSpecTransferOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">deleteObjectsFromSourceAfterTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink">deleteObjectsUniqueInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">overwriteObjectsAlreadyExistingInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen">overwriteWhen</a></code> | <code>string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `deleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="deleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```typescript
public readonly deleteObjectsFromSourceAfterTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `deleteObjectsUniqueInSink`<sup>Optional</sup> <a name="deleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```typescript
public readonly deleteObjectsUniqueInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

##### `overwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="overwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```typescript
public readonly overwriteObjectsAlreadyExistingInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `overwriteWhen`<sup>Optional</sup> <a name="overwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen"></a>

```typescript
public readonly overwriteWhen: string;
```

- *Type:* string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

### StorageTransferJobReplicationSpecTransferOptionsMetadataOptions <a name="StorageTransferJobReplicationSpecTransferOptionsMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobReplicationSpecTransferOptionsMetadataOptions: storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl">acl</a></code> | <code>string</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid">gid</a></code> | <code>string</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey">kmsKey</a></code> | <code>string</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode">mode</a></code> | <code>string</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass">storageClass</a></code> | <code>string</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink">symlink</a></code> | <code>string</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold">temporaryHold</a></code> | <code>string</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated">timeCreated</a></code> | <code>string</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid">uid</a></code> | <code>string</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.symlink"></a>

```typescript
public readonly symlink: string;
```

- *Type:* string

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: string;
```

- *Type:* string

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

### StorageTransferJobSchedule <a name="StorageTransferJobSchedule" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobSchedule: storageTransferJob.StorageTransferJobSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate">scheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate">scheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay">startTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `scheduleStartDate`<sup>Required</sup> <a name="scheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleStartDate"></a>

```typescript
public readonly scheduleStartDate: StorageTransferJobScheduleScheduleStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#schedule_start_date StorageTransferJob#schedule_start_date}

---

##### `repeatInterval`<sup>Optional</sup> <a name="repeatInterval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#repeat_interval StorageTransferJob#repeat_interval}

---

##### `scheduleEndDate`<sup>Optional</sup> <a name="scheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.scheduleEndDate"></a>

```typescript
public readonly scheduleEndDate: StorageTransferJobScheduleScheduleEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#schedule_end_date StorageTransferJob#schedule_end_date}

---

##### `startTimeOfDay`<sup>Optional</sup> <a name="startTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: StorageTransferJobScheduleStartTimeOfDay;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#start_time_of_day StorageTransferJob#start_time_of_day}

---

### StorageTransferJobScheduleScheduleEndDate <a name="StorageTransferJobScheduleScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobScheduleScheduleEndDate: storageTransferJob.StorageTransferJobScheduleScheduleEndDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day">day</a></code> | <code>number</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month">month</a></code> | <code>number</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year">year</a></code> | <code>number</code> | Year of date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleScheduleStartDate <a name="StorageTransferJobScheduleScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobScheduleScheduleStartDate: storageTransferJob.StorageTransferJobScheduleScheduleStartDate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day">day</a></code> | <code>number</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month">month</a></code> | <code>number</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year">year</a></code> | <code>number</code> | Year of date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}

---

### StorageTransferJobScheduleStartTimeOfDay <a name="StorageTransferJobScheduleStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobScheduleStartTimeOfDay: storageTransferJob.StorageTransferJobScheduleStartTimeOfDay = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#hours StorageTransferJob#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#minutes StorageTransferJob#minutes}

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#nanos StorageTransferJob#nanos}

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#seconds StorageTransferJob#seconds}

---

### StorageTransferJobTransferSpec <a name="StorageTransferJobTransferSpec" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpec: storageTransferJob.StorageTransferJobTransferSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource">awsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource">azureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink">gcsDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource">gcsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.hdfsDataSource">hdfsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | hdfs_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource">httpDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions">objectConditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink">posixDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource">posixDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName">sinkAgentPoolName</a></code> | <code>string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName">sourceAgentPoolName</a></code> | <code>string</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions">transferOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `awsS3DataSource`<sup>Optional</sup> <a name="awsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```typescript
public readonly awsS3DataSource: StorageTransferJobTransferSpecAwsS3DataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#aws_s3_data_source StorageTransferJob#aws_s3_data_source}

---

##### `azureBlobStorageDataSource`<sup>Optional</sup> <a name="azureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```typescript
public readonly azureBlobStorageDataSource: StorageTransferJobTransferSpecAzureBlobStorageDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}

---

##### `gcsDataSink`<sup>Optional</sup> <a name="gcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSink"></a>

```typescript
public readonly gcsDataSink: StorageTransferJobTransferSpecGcsDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}

---

##### `gcsDataSource`<sup>Optional</sup> <a name="gcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.gcsDataSource"></a>

```typescript
public readonly gcsDataSource: StorageTransferJobTransferSpecGcsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}

---

##### `hdfsDataSource`<sup>Optional</sup> <a name="hdfsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.hdfsDataSource"></a>

```typescript
public readonly hdfsDataSource: StorageTransferJobTransferSpecHdfsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#hdfs_data_source StorageTransferJob#hdfs_data_source}

---

##### `httpDataSource`<sup>Optional</sup> <a name="httpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.httpDataSource"></a>

```typescript
public readonly httpDataSource: StorageTransferJobTransferSpecHttpDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#http_data_source StorageTransferJob#http_data_source}

---

##### `objectConditions`<sup>Optional</sup> <a name="objectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.objectConditions"></a>

```typescript
public readonly objectConditions: StorageTransferJobTransferSpecObjectConditions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}

---

##### `posixDataSink`<sup>Optional</sup> <a name="posixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSink"></a>

```typescript
public readonly posixDataSink: StorageTransferJobTransferSpecPosixDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#posix_data_sink StorageTransferJob#posix_data_sink}

---

##### `posixDataSource`<sup>Optional</sup> <a name="posixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.posixDataSource"></a>

```typescript
public readonly posixDataSource: StorageTransferJobTransferSpecPosixDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#posix_data_source StorageTransferJob#posix_data_source}

---

##### `sinkAgentPoolName`<sup>Optional</sup> <a name="sinkAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```typescript
public readonly sinkAgentPoolName: string;
```

- *Type:* string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#sink_agent_pool_name StorageTransferJob#sink_agent_pool_name}

---

##### `sourceAgentPoolName`<sup>Optional</sup> <a name="sourceAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```typescript
public readonly sourceAgentPoolName: string;
```

- *Type:* string

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#source_agent_pool_name StorageTransferJob#source_agent_pool_name}

---

##### `transferOptions`<sup>Optional</sup> <a name="transferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec.property.transferOptions"></a>

```typescript
public readonly transferOptions: StorageTransferJobTransferSpecTransferOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}

---

### StorageTransferJobTransferSpecAwsS3DataSource <a name="StorageTransferJobTransferSpecAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecAwsS3DataSource: storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">bucketName</a></code> | <code>string</code> | S3 Bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">awsAccessKey</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.managedPrivateNetwork">managedPrivateNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.path">path</a></code> | <code>string</code> | S3 Bucket path in bucket to transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `awsAccessKey`<sup>Optional</sup> <a name="awsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```typescript
public readonly awsAccessKey: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#aws_access_key StorageTransferJob#aws_access_key}

---

##### `managedPrivateNetwork`<sup>Optional</sup> <a name="managedPrivateNetwork" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.managedPrivateNetwork"></a>

```typescript
public readonly managedPrivateNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#managed_private_network StorageTransferJob#managed_private_network}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#role_arn StorageTransferJob#role_arn}

---

### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey: storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | AWS Key ID. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | AWS Secret Access Key. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#access_key_id StorageTransferJob#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#secret_access_key StorageTransferJob#secret_access_key}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecAzureBlobStorageDataSource: storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">azureCredentials</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">container</a></code> | <code>string</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">storageAccount</a></code> | <code>string</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">path</a></code> | <code>string</code> | Root path to transfer objects. |

---

##### `azureCredentials`<sup>Required</sup> <a name="azureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```typescript
public readonly azureCredentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#azure_credentials StorageTransferJob#azure_credentials}

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#container StorageTransferJob#container}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#storage_account StorageTransferJob#storage_account}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials: storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">sasToken</a></code> | <code>string</code> | Azure shared access signature. |

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#sas_token StorageTransferJob#sas_token}

---

### StorageTransferJobTransferSpecGcsDataSink <a name="StorageTransferJobTransferSpecGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecGcsDataSink: storageTransferJob.StorageTransferJobTransferSpecGcsDataSink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName">bucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path">path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecGcsDataSource <a name="StorageTransferJobTransferSpecGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecGcsDataSource: storageTransferJob.StorageTransferJobTransferSpecGcsDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName">bucketName</a></code> | <code>string</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path">path</a></code> | <code>string</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHdfsDataSource <a name="StorageTransferJobTransferSpecHdfsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecHdfsDataSource: storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.property.path">path</a></code> | <code>string</code> | Directory path to the filesystem. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}

---

### StorageTransferJobTransferSpecHttpDataSource <a name="StorageTransferJobTransferSpecHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecHttpDataSource: storageTransferJob.StorageTransferJobTransferSpecHttpDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl">listUrl</a></code> | <code>string</code> | The URL that points to the file that stores the object list entries. |

---

##### `listUrl`<sup>Required</sup> <a name="listUrl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```typescript
public readonly listUrl: string;
```

- *Type:* string

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#list_url StorageTransferJob#list_url}

---

### StorageTransferJobTransferSpecObjectConditions <a name="StorageTransferJobTransferSpecObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecObjectConditions: storageTransferJob.StorageTransferJobTransferSpecObjectConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">excludePrefixes</a></code> | <code>string[]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes">includePrefixes</a></code> | <code>string[]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">lastModifiedBefore</a></code> | <code>string</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">lastModifiedSince</a></code> | <code>string</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">maxTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">minTimeElapsedSinceLastModification</a></code> | <code>string</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `excludePrefixes`<sup>Optional</sup> <a name="excludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```typescript
public readonly excludePrefixes: string[];
```

- *Type:* string[]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}

---

##### `includePrefixes`<sup>Optional</sup> <a name="includePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```typescript
public readonly includePrefixes: string[];
```

- *Type:* string[]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}

---

##### `lastModifiedBefore`<sup>Optional</sup> <a name="lastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```typescript
public readonly lastModifiedBefore: string;
```

- *Type:* string

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}

---

##### `lastModifiedSince`<sup>Optional</sup> <a name="lastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```typescript
public readonly lastModifiedSince: string;
```

- *Type:* string

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}

---

##### `maxTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="maxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```typescript
public readonly maxTimeElapsedSinceLastModification: string;
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `minTimeElapsedSinceLastModification`<sup>Optional</sup> <a name="minTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```typescript
public readonly minTimeElapsedSinceLastModification: string;
```

- *Type:* string

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}

---

### StorageTransferJobTransferSpecPosixDataSink <a name="StorageTransferJobTransferSpecPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecPosixDataSink: storageTransferJob.StorageTransferJobTransferSpecPosixDataSink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | Root directory path to the filesystem. |

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecPosixDataSource <a name="StorageTransferJobTransferSpecPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecPosixDataSource: storageTransferJob.StorageTransferJobTransferSpecPosixDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | Root directory path to the filesystem. |

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}

---

### StorageTransferJobTransferSpecTransferOptions <a name="StorageTransferJobTransferSpecTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecTransferOptions: storageTransferJob.StorageTransferJobTransferSpecTransferOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">deleteObjectsFromSourceAfterTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">deleteObjectsUniqueInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">overwriteObjectsAlreadyExistingInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">overwriteWhen</a></code> | <code>string</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `deleteObjectsFromSourceAfterTransfer`<sup>Optional</sup> <a name="deleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```typescript
public readonly deleteObjectsFromSourceAfterTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `deleteObjectsUniqueInSink`<sup>Optional</sup> <a name="deleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```typescript
public readonly deleteObjectsUniqueInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}

---

##### `metadataOptions`<sup>Optional</sup> <a name="metadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: StorageTransferJobTransferSpecTransferOptionsMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}

---

##### `overwriteObjectsAlreadyExistingInSink`<sup>Optional</sup> <a name="overwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```typescript
public readonly overwriteObjectsAlreadyExistingInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `overwriteWhen`<sup>Optional</sup> <a name="overwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```typescript
public readonly overwriteWhen: string;
```

- *Type:* string

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}

---

### StorageTransferJobTransferSpecTransferOptionsMetadataOptions <a name="StorageTransferJobTransferSpecTransferOptionsMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

const storageTransferJobTransferSpecTransferOptionsMetadataOptions: storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl">acl</a></code> | <code>string</code> | Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid">gid</a></code> | <code>string</code> | Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey">kmsKey</a></code> | <code>string</code> | Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode">mode</a></code> | <code>string</code> | Specifies how each file's mode attribute should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass">storageClass</a></code> | <code>string</code> | Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink">symlink</a></code> | <code>string</code> | Specifies how symlinks should be handled by the transfer. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold">temporaryHold</a></code> | <code>string</code> | SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated">timeCreated</a></code> | <code>string</code> | Specifies how each object's timeCreated metadata is preserved for transfers. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid">uid</a></code> | <code>string</code> | Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. |

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies how each file's mode attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.symlink"></a>

```typescript
public readonly symlink: string;
```

- *Type:* string

Specifies how symlinks should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}

---

##### `temporaryHold`<sup>Optional</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: string;
```

- *Type:* string

SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

Specifies how each object's timeCreated metadata is preserved for transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferJobEventStreamOutputReference <a name="StorageTransferJobEventStreamOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobEventStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime">resetEventStreamExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamStartTime">resetEventStreamStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventStreamExpirationTime` <a name="resetEventStreamExpirationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime"></a>

```typescript
public resetEventStreamExpirationTime(): void
```

##### `resetEventStreamStartTime` <a name="resetEventStreamStartTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.resetEventStreamStartTime"></a>

```typescript
public resetEventStreamStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput">eventStreamExpirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput">eventStreamStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime">eventStreamExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTime">eventStreamStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventStreamExpirationTimeInput`<sup>Optional</sup> <a name="eventStreamExpirationTimeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput"></a>

```typescript
public readonly eventStreamExpirationTimeInput: string;
```

- *Type:* string

---

##### `eventStreamStartTimeInput`<sup>Optional</sup> <a name="eventStreamStartTimeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput"></a>

```typescript
public readonly eventStreamStartTimeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `eventStreamExpirationTime`<sup>Required</sup> <a name="eventStreamExpirationTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime"></a>

```typescript
public readonly eventStreamExpirationTime: string;
```

- *Type:* string

---

##### `eventStreamStartTime`<sup>Required</sup> <a name="eventStreamStartTime" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.eventStreamStartTime"></a>

```typescript
public readonly eventStreamStartTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobEventStream;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobEventStream">StorageTransferJobEventStream</a>

---


### StorageTransferJobLoggingConfigOutputReference <a name="StorageTransferJobLoggingConfigOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs">resetEnableOnPremGcsTransferLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActions">resetLogActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActionStates">resetLogActionStates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableOnPremGcsTransferLogs` <a name="resetEnableOnPremGcsTransferLogs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetEnableOnPremGcsTransferLogs"></a>

```typescript
public resetEnableOnPremGcsTransferLogs(): void
```

##### `resetLogActions` <a name="resetLogActions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActions"></a>

```typescript
public resetLogActions(): void
```

##### `resetLogActionStates` <a name="resetLogActionStates" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.resetLogActionStates"></a>

```typescript
public resetLogActionStates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput">enableOnPremGcsTransferLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionsInput">logActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput">logActionStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs">enableOnPremGcsTransferLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActions">logActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStates">logActionStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableOnPremGcsTransferLogsInput`<sup>Optional</sup> <a name="enableOnPremGcsTransferLogsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogsInput"></a>

```typescript
public readonly enableOnPremGcsTransferLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logActionsInput`<sup>Optional</sup> <a name="logActionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionsInput"></a>

```typescript
public readonly logActionsInput: string[];
```

- *Type:* string[]

---

##### `logActionStatesInput`<sup>Optional</sup> <a name="logActionStatesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStatesInput"></a>

```typescript
public readonly logActionStatesInput: string[];
```

- *Type:* string[]

---

##### `enableOnPremGcsTransferLogs`<sup>Required</sup> <a name="enableOnPremGcsTransferLogs" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.enableOnPremGcsTransferLogs"></a>

```typescript
public readonly enableOnPremGcsTransferLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logActions`<sup>Required</sup> <a name="logActions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActions"></a>

```typescript
public readonly logActions: string[];
```

- *Type:* string[]

---

##### `logActionStates`<sup>Required</sup> <a name="logActionStates" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.logActionStates"></a>

```typescript
public readonly logActionStates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobLoggingConfig">StorageTransferJobLoggingConfig</a>

---


### StorageTransferJobNotificationConfigOutputReference <a name="StorageTransferJobNotificationConfigOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobNotificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes">resetEventTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventTypes` <a name="resetEventTypes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```typescript
public resetEventTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">eventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">payloadFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes">eventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat">payloadFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypesInput`<sup>Optional</sup> <a name="eventTypesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```typescript
public readonly eventTypesInput: string[];
```

- *Type:* string[]

---

##### `payloadFormatInput`<sup>Optional</sup> <a name="payloadFormatInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```typescript
public readonly payloadFormatInput: string;
```

- *Type:* string

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```typescript
public readonly pubsubTopicInput: string;
```

- *Type:* string

---

##### `eventTypes`<sup>Required</sup> <a name="eventTypes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* string[]

---

##### `payloadFormat`<sup>Required</sup> <a name="payloadFormat" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```typescript
public readonly payloadFormat: string;
```

- *Type:* string

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```typescript
public readonly pubsubTopic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobNotificationConfig;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobNotificationConfig">StorageTransferJobNotificationConfig</a>

---


### StorageTransferJobReplicationSpecGcsDataSinkOutputReference <a name="StorageTransferJobReplicationSpecGcsDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobReplicationSpecGcsDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---


### StorageTransferJobReplicationSpecGcsDataSourceOutputReference <a name="StorageTransferJobReplicationSpecGcsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobReplicationSpecGcsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---


### StorageTransferJobReplicationSpecObjectConditionsOutputReference <a name="StorageTransferJobReplicationSpecObjectConditionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes">resetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes">resetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore">resetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince">resetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">resetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">resetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludePrefixes` <a name="resetExcludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```typescript
public resetExcludePrefixes(): void
```

##### `resetIncludePrefixes` <a name="resetIncludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```typescript
public resetIncludePrefixes(): void
```

##### `resetLastModifiedBefore` <a name="resetLastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```typescript
public resetLastModifiedBefore(): void
```

##### `resetLastModifiedSince` <a name="resetLastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```typescript
public resetLastModifiedSince(): void
```

##### `resetMaxTimeElapsedSinceLastModification` <a name="resetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```typescript
public resetMaxTimeElapsedSinceLastModification(): void
```

##### `resetMinTimeElapsedSinceLastModification` <a name="resetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```typescript
public resetMinTimeElapsedSinceLastModification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput">excludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput">includePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">lastModifiedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">lastModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">maxTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">minTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes">excludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes">includePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore">lastModifiedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince">lastModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">maxTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">minTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludePrefixesInput`<sup>Optional</sup> <a name="excludePrefixesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```typescript
public readonly excludePrefixesInput: string[];
```

- *Type:* string[]

---

##### `includePrefixesInput`<sup>Optional</sup> <a name="includePrefixesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```typescript
public readonly includePrefixesInput: string[];
```

- *Type:* string[]

---

##### `lastModifiedBeforeInput`<sup>Optional</sup> <a name="lastModifiedBeforeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```typescript
public readonly lastModifiedBeforeInput: string;
```

- *Type:* string

---

##### `lastModifiedSinceInput`<sup>Optional</sup> <a name="lastModifiedSinceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```typescript
public readonly lastModifiedSinceInput: string;
```

- *Type:* string

---

##### `maxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="maxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```typescript
public readonly maxTimeElapsedSinceLastModificationInput: string;
```

- *Type:* string

---

##### `minTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="minTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```typescript
public readonly minTimeElapsedSinceLastModificationInput: string;
```

- *Type:* string

---

##### `excludePrefixes`<sup>Required</sup> <a name="excludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```typescript
public readonly excludePrefixes: string[];
```

- *Type:* string[]

---

##### `includePrefixes`<sup>Required</sup> <a name="includePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```typescript
public readonly includePrefixes: string[];
```

- *Type:* string[]

---

##### `lastModifiedBefore`<sup>Required</sup> <a name="lastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```typescript
public readonly lastModifiedBefore: string;
```

- *Type:* string

---

##### `lastModifiedSince`<sup>Required</sup> <a name="lastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```typescript
public readonly lastModifiedSince: string;
```

- *Type:* string

---

##### `maxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="maxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```typescript
public readonly maxTimeElapsedSinceLastModification: string;
```

- *Type:* string

---

##### `minTimeElapsedSinceLastModification`<sup>Required</sup> <a name="minTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```typescript
public readonly minTimeElapsedSinceLastModification: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobReplicationSpecObjectConditions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---


### StorageTransferJobReplicationSpecOutputReference <a name="StorageTransferJobReplicationSpecOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobReplicationSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink">putGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource">putGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions">putObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions">putTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSink">resetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSource">resetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetObjectConditions">resetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetTransferOptions">resetTransferOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGcsDataSink` <a name="putGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink"></a>

```typescript
public putGcsDataSink(value: StorageTransferJobReplicationSpecGcsDataSink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `putGcsDataSource` <a name="putGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource"></a>

```typescript
public putGcsDataSource(value: StorageTransferJobReplicationSpecGcsDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `putObjectConditions` <a name="putObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions"></a>

```typescript
public putObjectConditions(value: StorageTransferJobReplicationSpecObjectConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---

##### `putTransferOptions` <a name="putTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions"></a>

```typescript
public putTransferOptions(value: StorageTransferJobReplicationSpecTransferOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---

##### `resetGcsDataSink` <a name="resetGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSink"></a>

```typescript
public resetGcsDataSink(): void
```

##### `resetGcsDataSource` <a name="resetGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetGcsDataSource"></a>

```typescript
public resetGcsDataSource(): void
```

##### `resetObjectConditions` <a name="resetObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetObjectConditions"></a>

```typescript
public resetObjectConditions(): void
```

##### `resetTransferOptions` <a name="resetTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.resetTransferOptions"></a>

```typescript
public resetTransferOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSink">gcsDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference">StorageTransferJobReplicationSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSource">gcsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference">StorageTransferJobReplicationSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditions">objectConditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference">StorageTransferJobReplicationSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptions">transferOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput">gcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput">gcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput">objectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput">transferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcsDataSink`<sup>Required</sup> <a name="gcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSink"></a>

```typescript
public readonly gcsDataSink: StorageTransferJobReplicationSpecGcsDataSinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSinkOutputReference">StorageTransferJobReplicationSpecGcsDataSinkOutputReference</a>

---

##### `gcsDataSource`<sup>Required</sup> <a name="gcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSource"></a>

```typescript
public readonly gcsDataSource: StorageTransferJobReplicationSpecGcsDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSourceOutputReference">StorageTransferJobReplicationSpecGcsDataSourceOutputReference</a>

---

##### `objectConditions`<sup>Required</sup> <a name="objectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditions"></a>

```typescript
public readonly objectConditions: StorageTransferJobReplicationSpecObjectConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditionsOutputReference">StorageTransferJobReplicationSpecObjectConditionsOutputReference</a>

---

##### `transferOptions`<sup>Required</sup> <a name="transferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptions"></a>

```typescript
public readonly transferOptions: StorageTransferJobReplicationSpecTransferOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsOutputReference</a>

---

##### `gcsDataSinkInput`<sup>Optional</sup> <a name="gcsDataSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput"></a>

```typescript
public readonly gcsDataSinkInput: StorageTransferJobReplicationSpecGcsDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSink">StorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `gcsDataSourceInput`<sup>Optional</sup> <a name="gcsDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput"></a>

```typescript
public readonly gcsDataSourceInput: StorageTransferJobReplicationSpecGcsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecGcsDataSource">StorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `objectConditionsInput`<sup>Optional</sup> <a name="objectConditionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput"></a>

```typescript
public readonly objectConditionsInput: StorageTransferJobReplicationSpecObjectConditions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecObjectConditions">StorageTransferJobReplicationSpecObjectConditions</a>

---

##### `transferOptionsInput`<sup>Optional</sup> <a name="transferOptionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput"></a>

```typescript
public readonly transferOptionsInput: StorageTransferJobReplicationSpecTransferOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobReplicationSpec;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpec">StorageTransferJobReplicationSpec</a>

---


### StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference <a name="StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```typescript
public resetSymlink(): void
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```typescript
public resetTemporaryHold(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">symlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">temporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```typescript
public readonly symlinkInput: string;
```

- *Type:* string

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```typescript
public readonly temporaryHoldInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```typescript
public readonly symlink: string;
```

- *Type:* string

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---


### StorageTransferJobReplicationSpecTransferOptionsOutputReference <a name="StorageTransferJobReplicationSpecTransferOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">resetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">resetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">resetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen">resetOverwriteWhen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `resetDeleteObjectsFromSourceAfterTransfer` <a name="resetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```typescript
public resetDeleteObjectsFromSourceAfterTransfer(): void
```

##### `resetDeleteObjectsUniqueInSink` <a name="resetDeleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```typescript
public resetDeleteObjectsUniqueInSink(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetOverwriteObjectsAlreadyExistingInSink` <a name="resetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```typescript
public resetOverwriteObjectsAlreadyExistingInSink(): void
```

##### `resetOverwriteWhen` <a name="resetOverwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```typescript
public resetOverwriteWhen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">deleteObjectsFromSourceAfterTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">deleteObjectsUniqueInSinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">overwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput">overwriteWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">deleteObjectsFromSourceAfterTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">deleteObjectsUniqueInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">overwriteObjectsAlreadyExistingInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen">overwriteWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `deleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="deleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```typescript
public readonly deleteObjectsFromSourceAfterTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="deleteObjectsUniqueInSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```typescript
public readonly deleteObjectsUniqueInSinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsMetadataOptions">StorageTransferJobReplicationSpecTransferOptionsMetadataOptions</a>

---

##### `overwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="overwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```typescript
public readonly overwriteObjectsAlreadyExistingInSinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overwriteWhenInput`<sup>Optional</sup> <a name="overwriteWhenInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```typescript
public readonly overwriteWhenInput: string;
```

- *Type:* string

---

##### `deleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="deleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```typescript
public readonly deleteObjectsFromSourceAfterTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteObjectsUniqueInSink`<sup>Required</sup> <a name="deleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```typescript
public readonly deleteObjectsUniqueInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="overwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```typescript
public readonly overwriteObjectsAlreadyExistingInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overwriteWhen`<sup>Required</sup> <a name="overwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```typescript
public readonly overwriteWhen: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobReplicationSpecTransferOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobReplicationSpecTransferOptions">StorageTransferJobReplicationSpecTransferOptions</a>

---


### StorageTransferJobScheduleOutputReference <a name="StorageTransferJobScheduleOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate">putScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate">putScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay">putStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval">resetRepeatInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate">resetScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay">resetStartTimeOfDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScheduleEndDate` <a name="putScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```typescript
public putScheduleEndDate(value: StorageTransferJobScheduleScheduleEndDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `putScheduleStartDate` <a name="putScheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```typescript
public putScheduleStartDate(value: StorageTransferJobScheduleScheduleStartDate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `putStartTimeOfDay` <a name="putStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```typescript
public putStartTimeOfDay(value: StorageTransferJobScheduleStartTimeOfDay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `resetRepeatInterval` <a name="resetRepeatInterval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```typescript
public resetRepeatInterval(): void
```

##### `resetScheduleEndDate` <a name="resetScheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```typescript
public resetScheduleEndDate(): void
```

##### `resetStartTimeOfDay` <a name="resetStartTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```typescript
public resetStartTimeOfDay(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate">scheduleEndDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate">scheduleStartDate</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay">startTimeOfDay</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput">repeatIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">scheduleEndDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">scheduleStartDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">startTimeOfDayInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval">repeatInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleEndDate`<sup>Required</sup> <a name="scheduleEndDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```typescript
public readonly scheduleEndDate: StorageTransferJobScheduleScheduleEndDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference">StorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `scheduleStartDate`<sup>Required</sup> <a name="scheduleStartDate" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```typescript
public readonly scheduleStartDate: StorageTransferJobScheduleScheduleStartDateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference">StorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `startTimeOfDay`<sup>Required</sup> <a name="startTimeOfDay" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```typescript
public readonly startTimeOfDay: StorageTransferJobScheduleStartTimeOfDayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference">StorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `repeatIntervalInput`<sup>Optional</sup> <a name="repeatIntervalInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```typescript
public readonly repeatIntervalInput: string;
```

- *Type:* string

---

##### `scheduleEndDateInput`<sup>Optional</sup> <a name="scheduleEndDateInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```typescript
public readonly scheduleEndDateInput: StorageTransferJobScheduleScheduleEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---

##### `scheduleStartDateInput`<sup>Optional</sup> <a name="scheduleStartDateInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```typescript
public readonly scheduleStartDateInput: StorageTransferJobScheduleScheduleStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---

##### `startTimeOfDayInput`<sup>Optional</sup> <a name="startTimeOfDayInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```typescript
public readonly startTimeOfDayInput: StorageTransferJobScheduleStartTimeOfDay;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---

##### `repeatInterval`<sup>Required</sup> <a name="repeatInterval" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```typescript
public readonly repeatInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobSchedule;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobSchedule">StorageTransferJobSchedule</a>

---


### StorageTransferJobScheduleScheduleEndDateOutputReference <a name="StorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobScheduleScheduleEndDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleEndDate">StorageTransferJobScheduleScheduleEndDate</a>

---


### StorageTransferJobScheduleScheduleStartDateOutputReference <a name="StorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day">day</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month">month</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year">year</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: number;
```

- *Type:* number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```typescript
public readonly yearInput: number;
```

- *Type:* number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```typescript
public readonly day: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```typescript
public readonly month: number;
```

- *Type:* number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```typescript
public readonly year: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobScheduleScheduleStartDate;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleScheduleStartDate">StorageTransferJobScheduleScheduleStartDate</a>

---


### StorageTransferJobScheduleStartTimeOfDayOutputReference <a name="StorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobScheduleStartTimeOfDay;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobScheduleStartTimeOfDay">StorageTransferJobScheduleStartTimeOfDay</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### StorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="StorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">putAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">resetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetManagedPrivateNetwork">resetManagedPrivateNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAccessKey` <a name="putAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```typescript
public putAwsAccessKey(value: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `resetAwsAccessKey` <a name="resetAwsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```typescript
public resetAwsAccessKey(): void
```

##### `resetManagedPrivateNetwork` <a name="resetManagedPrivateNetwork" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetManagedPrivateNetwork"></a>

```typescript
public resetManagedPrivateNetwork(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">awsAccessKey</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">awsAccessKeyInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetworkInput">managedPrivateNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetwork">managedPrivateNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccessKey`<sup>Required</sup> <a name="awsAccessKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```typescript
public readonly awsAccessKey: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `awsAccessKeyInput`<sup>Optional</sup> <a name="awsAccessKeyInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```typescript
public readonly awsAccessKeyInput: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `managedPrivateNetworkInput`<sup>Optional</sup> <a name="managedPrivateNetworkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetworkInput"></a>

```typescript
public readonly managedPrivateNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `managedPrivateNetwork`<sup>Required</sup> <a name="managedPrivateNetwork" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.managedPrivateNetwork"></a>

```typescript
public readonly managedPrivateNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecAwsS3DataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">sasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```typescript
public readonly sasTokenInput: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">putAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureCredentials` <a name="putAzureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```typescript
public putAzureCredentials(value: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">azureCredentials</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">azureCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">storageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureCredentials`<sup>Required</sup> <a name="azureCredentials" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```typescript
public readonly azureCredentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `azureCredentialsInput`<sup>Optional</sup> <a name="azureCredentialsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```typescript
public readonly azureCredentialsInput: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```typescript
public readonly storageAccountInput: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```typescript
public readonly storageAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecAzureBlobStorageDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### StorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="StorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecGcsDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---


### StorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="StorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecGcsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---


### StorageTransferJobTransferSpecHdfsDataSourceOutputReference <a name="StorageTransferJobTransferSpecHdfsDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecHdfsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---


### StorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="StorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">listUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">listUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listUrlInput`<sup>Optional</sup> <a name="listUrlInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```typescript
public readonly listUrlInput: string;
```

- *Type:* string

---

##### `listUrl`<sup>Required</sup> <a name="listUrl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```typescript
public readonly listUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecHttpDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---


### StorageTransferJobTransferSpecObjectConditionsOutputReference <a name="StorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">resetExcludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">resetIncludePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">resetLastModifiedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">resetLastModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">resetMaxTimeElapsedSinceLastModification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">resetMinTimeElapsedSinceLastModification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludePrefixes` <a name="resetExcludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```typescript
public resetExcludePrefixes(): void
```

##### `resetIncludePrefixes` <a name="resetIncludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```typescript
public resetIncludePrefixes(): void
```

##### `resetLastModifiedBefore` <a name="resetLastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```typescript
public resetLastModifiedBefore(): void
```

##### `resetLastModifiedSince` <a name="resetLastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```typescript
public resetLastModifiedSince(): void
```

##### `resetMaxTimeElapsedSinceLastModification` <a name="resetMaxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```typescript
public resetMaxTimeElapsedSinceLastModification(): void
```

##### `resetMinTimeElapsedSinceLastModification` <a name="resetMinTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```typescript
public resetMinTimeElapsedSinceLastModification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">excludePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">includePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">lastModifiedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">lastModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">maxTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">minTimeElapsedSinceLastModificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">excludePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">includePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">lastModifiedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">lastModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">maxTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">minTimeElapsedSinceLastModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludePrefixesInput`<sup>Optional</sup> <a name="excludePrefixesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```typescript
public readonly excludePrefixesInput: string[];
```

- *Type:* string[]

---

##### `includePrefixesInput`<sup>Optional</sup> <a name="includePrefixesInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```typescript
public readonly includePrefixesInput: string[];
```

- *Type:* string[]

---

##### `lastModifiedBeforeInput`<sup>Optional</sup> <a name="lastModifiedBeforeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```typescript
public readonly lastModifiedBeforeInput: string;
```

- *Type:* string

---

##### `lastModifiedSinceInput`<sup>Optional</sup> <a name="lastModifiedSinceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```typescript
public readonly lastModifiedSinceInput: string;
```

- *Type:* string

---

##### `maxTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="maxTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```typescript
public readonly maxTimeElapsedSinceLastModificationInput: string;
```

- *Type:* string

---

##### `minTimeElapsedSinceLastModificationInput`<sup>Optional</sup> <a name="minTimeElapsedSinceLastModificationInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```typescript
public readonly minTimeElapsedSinceLastModificationInput: string;
```

- *Type:* string

---

##### `excludePrefixes`<sup>Required</sup> <a name="excludePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```typescript
public readonly excludePrefixes: string[];
```

- *Type:* string[]

---

##### `includePrefixes`<sup>Required</sup> <a name="includePrefixes" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```typescript
public readonly includePrefixes: string[];
```

- *Type:* string[]

---

##### `lastModifiedBefore`<sup>Required</sup> <a name="lastModifiedBefore" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```typescript
public readonly lastModifiedBefore: string;
```

- *Type:* string

---

##### `lastModifiedSince`<sup>Required</sup> <a name="lastModifiedSince" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```typescript
public readonly lastModifiedSince: string;
```

- *Type:* string

---

##### `maxTimeElapsedSinceLastModification`<sup>Required</sup> <a name="maxTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```typescript
public readonly maxTimeElapsedSinceLastModification: string;
```

- *Type:* string

---

##### `minTimeElapsedSinceLastModification`<sup>Required</sup> <a name="minTimeElapsedSinceLastModification" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```typescript
public readonly minTimeElapsedSinceLastModification: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecObjectConditions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---


### StorageTransferJobTransferSpecOutputReference <a name="StorageTransferJobTransferSpecOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">putAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">putAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink">putGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource">putGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource">putHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource">putHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions">putObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink">putPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource">putPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions">putTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">resetAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">resetAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink">resetGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource">resetGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHdfsDataSource">resetHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource">resetHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions">resetObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink">resetPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource">resetPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">resetSinkAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">resetSourceAgentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions">resetTransferOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsS3DataSource` <a name="putAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```typescript
public putAwsS3DataSource(value: StorageTransferJobTransferSpecAwsS3DataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `putAzureBlobStorageDataSource` <a name="putAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```typescript
public putAzureBlobStorageDataSource(value: StorageTransferJobTransferSpecAzureBlobStorageDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `putGcsDataSink` <a name="putGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```typescript
public putGcsDataSink(value: StorageTransferJobTransferSpecGcsDataSink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `putGcsDataSource` <a name="putGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```typescript
public putGcsDataSource(value: StorageTransferJobTransferSpecGcsDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `putHdfsDataSource` <a name="putHdfsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource"></a>

```typescript
public putHdfsDataSource(value: StorageTransferJobTransferSpecHdfsDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHdfsDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `putHttpDataSource` <a name="putHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```typescript
public putHttpDataSource(value: StorageTransferJobTransferSpecHttpDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `putObjectConditions` <a name="putObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```typescript
public putObjectConditions(value: StorageTransferJobTransferSpecObjectConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `putPosixDataSink` <a name="putPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```typescript
public putPosixDataSink(value: StorageTransferJobTransferSpecPosixDataSink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `putPosixDataSource` <a name="putPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```typescript
public putPosixDataSource(value: StorageTransferJobTransferSpecPosixDataSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `putTransferOptions` <a name="putTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```typescript
public putTransferOptions(value: StorageTransferJobTransferSpecTransferOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `resetAwsS3DataSource` <a name="resetAwsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```typescript
public resetAwsS3DataSource(): void
```

##### `resetAzureBlobStorageDataSource` <a name="resetAzureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```typescript
public resetAzureBlobStorageDataSource(): void
```

##### `resetGcsDataSink` <a name="resetGcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```typescript
public resetGcsDataSink(): void
```

##### `resetGcsDataSource` <a name="resetGcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```typescript
public resetGcsDataSource(): void
```

##### `resetHdfsDataSource` <a name="resetHdfsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHdfsDataSource"></a>

```typescript
public resetHdfsDataSource(): void
```

##### `resetHttpDataSource` <a name="resetHttpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```typescript
public resetHttpDataSource(): void
```

##### `resetObjectConditions` <a name="resetObjectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```typescript
public resetObjectConditions(): void
```

##### `resetPosixDataSink` <a name="resetPosixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```typescript
public resetPosixDataSink(): void
```

##### `resetPosixDataSource` <a name="resetPosixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```typescript
public resetPosixDataSource(): void
```

##### `resetSinkAgentPoolName` <a name="resetSinkAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```typescript
public resetSinkAgentPoolName(): void
```

##### `resetSourceAgentPoolName` <a name="resetSourceAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```typescript
public resetSourceAgentPoolName(): void
```

##### `resetTransferOptions` <a name="resetTransferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```typescript
public resetTransferOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">awsS3DataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">azureBlobStorageDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink">gcsDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource">gcsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSource">hdfsDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference">StorageTransferJobTransferSpecHdfsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource">httpDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions">objectConditions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink">posixDataSink</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource">posixDataSource</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions">transferOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">awsS3DataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">azureBlobStorageDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">gcsDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">gcsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput">hdfsDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">httpDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">objectConditionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">posixDataSinkInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">posixDataSourceInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">sinkAgentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">sourceAgentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">transferOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">sinkAgentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">sourceAgentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsS3DataSource`<sup>Required</sup> <a name="awsS3DataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```typescript
public readonly awsS3DataSource: StorageTransferJobTransferSpecAwsS3DataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSourceOutputReference">StorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `azureBlobStorageDataSource`<sup>Required</sup> <a name="azureBlobStorageDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```typescript
public readonly azureBlobStorageDataSource: StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `gcsDataSink`<sup>Required</sup> <a name="gcsDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```typescript
public readonly gcsDataSink: StorageTransferJobTransferSpecGcsDataSinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSinkOutputReference">StorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `gcsDataSource`<sup>Required</sup> <a name="gcsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```typescript
public readonly gcsDataSource: StorageTransferJobTransferSpecGcsDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSourceOutputReference">StorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `hdfsDataSource`<sup>Required</sup> <a name="hdfsDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSource"></a>

```typescript
public readonly hdfsDataSource: StorageTransferJobTransferSpecHdfsDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSourceOutputReference">StorageTransferJobTransferSpecHdfsDataSourceOutputReference</a>

---

##### `httpDataSource`<sup>Required</sup> <a name="httpDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```typescript
public readonly httpDataSource: StorageTransferJobTransferSpecHttpDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSourceOutputReference">StorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `objectConditions`<sup>Required</sup> <a name="objectConditions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```typescript
public readonly objectConditions: StorageTransferJobTransferSpecObjectConditionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditionsOutputReference">StorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `posixDataSink`<sup>Required</sup> <a name="posixDataSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```typescript
public readonly posixDataSink: StorageTransferJobTransferSpecPosixDataSinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference">StorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `posixDataSource`<sup>Required</sup> <a name="posixDataSource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```typescript
public readonly posixDataSource: StorageTransferJobTransferSpecPosixDataSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference">StorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `transferOptions`<sup>Required</sup> <a name="transferOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```typescript
public readonly transferOptions: StorageTransferJobTransferSpecTransferOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `awsS3DataSourceInput`<sup>Optional</sup> <a name="awsS3DataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```typescript
public readonly awsS3DataSourceInput: StorageTransferJobTransferSpecAwsS3DataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAwsS3DataSource">StorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `azureBlobStorageDataSourceInput`<sup>Optional</sup> <a name="azureBlobStorageDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```typescript
public readonly azureBlobStorageDataSourceInput: StorageTransferJobTransferSpecAzureBlobStorageDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecAzureBlobStorageDataSource">StorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `gcsDataSinkInput`<sup>Optional</sup> <a name="gcsDataSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```typescript
public readonly gcsDataSinkInput: StorageTransferJobTransferSpecGcsDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSink">StorageTransferJobTransferSpecGcsDataSink</a>

---

##### `gcsDataSourceInput`<sup>Optional</sup> <a name="gcsDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```typescript
public readonly gcsDataSourceInput: StorageTransferJobTransferSpecGcsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecGcsDataSource">StorageTransferJobTransferSpecGcsDataSource</a>

---

##### `hdfsDataSourceInput`<sup>Optional</sup> <a name="hdfsDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput"></a>

```typescript
public readonly hdfsDataSourceInput: StorageTransferJobTransferSpecHdfsDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHdfsDataSource">StorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `httpDataSourceInput`<sup>Optional</sup> <a name="httpDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```typescript
public readonly httpDataSourceInput: StorageTransferJobTransferSpecHttpDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecHttpDataSource">StorageTransferJobTransferSpecHttpDataSource</a>

---

##### `objectConditionsInput`<sup>Optional</sup> <a name="objectConditionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```typescript
public readonly objectConditionsInput: StorageTransferJobTransferSpecObjectConditions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecObjectConditions">StorageTransferJobTransferSpecObjectConditions</a>

---

##### `posixDataSinkInput`<sup>Optional</sup> <a name="posixDataSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```typescript
public readonly posixDataSinkInput: StorageTransferJobTransferSpecPosixDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---

##### `posixDataSourceInput`<sup>Optional</sup> <a name="posixDataSourceInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```typescript
public readonly posixDataSourceInput: StorageTransferJobTransferSpecPosixDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---

##### `sinkAgentPoolNameInput`<sup>Optional</sup> <a name="sinkAgentPoolNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```typescript
public readonly sinkAgentPoolNameInput: string;
```

- *Type:* string

---

##### `sourceAgentPoolNameInput`<sup>Optional</sup> <a name="sourceAgentPoolNameInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```typescript
public readonly sourceAgentPoolNameInput: string;
```

- *Type:* string

---

##### `transferOptionsInput`<sup>Optional</sup> <a name="transferOptionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```typescript
public readonly transferOptionsInput: StorageTransferJobTransferSpecTransferOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---

##### `sinkAgentPoolName`<sup>Required</sup> <a name="sinkAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```typescript
public readonly sinkAgentPoolName: string;
```

- *Type:* string

---

##### `sourceAgentPoolName`<sup>Required</sup> <a name="sourceAgentPoolName" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```typescript
public readonly sourceAgentPoolName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpec;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpec">StorageTransferJobTransferSpec</a>

---


### StorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="StorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```typescript
public readonly rootDirectoryInput: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecPosixDataSink;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSink">StorageTransferJobTransferSpecPosixDataSink</a>

---


### StorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="StorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```typescript
public readonly rootDirectoryInput: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecPosixDataSource;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecPosixDataSource">StorageTransferJobTransferSpecPosixDataSource</a>

---


### StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink">resetSymlink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold">resetTemporaryHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetSymlink` <a name="resetSymlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetSymlink"></a>

```typescript
public resetSymlink(): void
```

##### `resetTemporaryHold` <a name="resetTemporaryHold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTemporaryHold"></a>

```typescript
public resetTemporaryHold(): void
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetTimeCreated"></a>

```typescript
public resetTimeCreated(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput">symlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput">temporaryHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink">symlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold">temporaryHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `symlinkInput`<sup>Optional</sup> <a name="symlinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlinkInput"></a>

```typescript
public readonly symlinkInput: string;
```

- *Type:* string

---

##### `temporaryHoldInput`<sup>Optional</sup> <a name="temporaryHoldInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHoldInput"></a>

```typescript
public readonly temporaryHoldInput: string;
```

- *Type:* string

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreatedInput"></a>

```typescript
public readonly timeCreatedInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.symlink"></a>

```typescript
public readonly symlink: string;
```

- *Type:* string

---

##### `temporaryHold`<sup>Required</sup> <a name="temporaryHold" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.temporaryHold"></a>

```typescript
public readonly temporaryHold: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecTransferOptionsMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---


### StorageTransferJobTransferSpecTransferOptionsOutputReference <a name="StorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```typescript
import { storageTransferJob } from '@cdktf/provider-google'

new storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions">putMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">resetDeleteObjectsFromSourceAfterTransfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">resetDeleteObjectsUniqueInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions">resetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">resetOverwriteObjectsAlreadyExistingInSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">resetOverwriteWhen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadataOptions` <a name="putMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions"></a>

```typescript
public putMetadataOptions(value: StorageTransferJobTransferSpecTransferOptionsMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `resetDeleteObjectsFromSourceAfterTransfer` <a name="resetDeleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```typescript
public resetDeleteObjectsFromSourceAfterTransfer(): void
```

##### `resetDeleteObjectsUniqueInSink` <a name="resetDeleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```typescript
public resetDeleteObjectsUniqueInSink(): void
```

##### `resetMetadataOptions` <a name="resetMetadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetMetadataOptions"></a>

```typescript
public resetMetadataOptions(): void
```

##### `resetOverwriteObjectsAlreadyExistingInSink` <a name="resetOverwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```typescript
public resetOverwriteObjectsAlreadyExistingInSink(): void
```

##### `resetOverwriteWhen` <a name="resetOverwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```typescript
public resetOverwriteWhen(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">deleteObjectsFromSourceAfterTransferInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">deleteObjectsUniqueInSinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput">metadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">overwriteObjectsAlreadyExistingInSinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">overwriteWhenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">deleteObjectsFromSourceAfterTransfer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">deleteObjectsUniqueInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">overwriteObjectsAlreadyExistingInSink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">overwriteWhen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference">StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference</a>

---

##### `deleteObjectsFromSourceAfterTransferInput`<sup>Optional</sup> <a name="deleteObjectsFromSourceAfterTransferInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```typescript
public readonly deleteObjectsFromSourceAfterTransferInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteObjectsUniqueInSinkInput`<sup>Optional</sup> <a name="deleteObjectsUniqueInSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```typescript
public readonly deleteObjectsUniqueInSinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metadataOptionsInput`<sup>Optional</sup> <a name="metadataOptionsInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.metadataOptionsInput"></a>

```typescript
public readonly metadataOptionsInput: StorageTransferJobTransferSpecTransferOptionsMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsMetadataOptions">StorageTransferJobTransferSpecTransferOptionsMetadataOptions</a>

---

##### `overwriteObjectsAlreadyExistingInSinkInput`<sup>Optional</sup> <a name="overwriteObjectsAlreadyExistingInSinkInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```typescript
public readonly overwriteObjectsAlreadyExistingInSinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overwriteWhenInput`<sup>Optional</sup> <a name="overwriteWhenInput" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```typescript
public readonly overwriteWhenInput: string;
```

- *Type:* string

---

##### `deleteObjectsFromSourceAfterTransfer`<sup>Required</sup> <a name="deleteObjectsFromSourceAfterTransfer" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```typescript
public readonly deleteObjectsFromSourceAfterTransfer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteObjectsUniqueInSink`<sup>Required</sup> <a name="deleteObjectsUniqueInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```typescript
public readonly deleteObjectsUniqueInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overwriteObjectsAlreadyExistingInSink`<sup>Required</sup> <a name="overwriteObjectsAlreadyExistingInSink" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```typescript
public readonly overwriteObjectsAlreadyExistingInSink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `overwriteWhen`<sup>Required</sup> <a name="overwriteWhen" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```typescript
public readonly overwriteWhen: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferJobTransferSpecTransferOptions;
```

- *Type:* <a href="#@cdktf/provider-google.storageTransferJob.StorageTransferJobTransferSpecTransferOptions">StorageTransferJobTransferSpecTransferOptions</a>

---



