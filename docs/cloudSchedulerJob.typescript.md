# `cloudSchedulerJob` Submodule <a name="`cloudSchedulerJob` Submodule" id="@cdktf/provider-google.cloudSchedulerJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudSchedulerJob <a name="CloudSchedulerJob" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job google_cloud_scheduler_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJob(scope: Construct, id: string, config: CloudSchedulerJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig">CloudSchedulerJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig">CloudSchedulerJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget">putAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget">putPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAppEngineHttpTarget">resetAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAttemptDeadline">resetAttemptDeadline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPubsubTarget">resetPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngineHttpTarget` <a name="putAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget"></a>

```typescript
public putAppEngineHttpTarget(value: CloudSchedulerJobAppEngineHttpTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putAppEngineHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget"></a>

```typescript
public putHttpTarget(value: CloudSchedulerJobHttpTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---

##### `putPubsubTarget` <a name="putPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget"></a>

```typescript
public putPubsubTarget(value: CloudSchedulerJobPubsubTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putPubsubTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig"></a>

```typescript
public putRetryConfig(value: CloudSchedulerJobRetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudSchedulerJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---

##### `resetAppEngineHttpTarget` <a name="resetAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAppEngineHttpTarget"></a>

```typescript
public resetAppEngineHttpTarget(): void
```

##### `resetAttemptDeadline` <a name="resetAttemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetAttemptDeadline"></a>

```typescript
public resetAttemptDeadline(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetHttpTarget"></a>

```typescript
public resetHttpTarget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPaused"></a>

```typescript
public resetPaused(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPubsubTarget` <a name="resetPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetPubsubTarget"></a>

```typescript
public resetPubsubTarget(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetRetryConfig"></a>

```typescript
public resetRetryConfig(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudSchedulerJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

cloudSchedulerJob.CloudSchedulerJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

cloudSchedulerJob.CloudSchedulerJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

cloudSchedulerJob.CloudSchedulerJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudSchedulerJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudSchedulerJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudSchedulerJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudSchedulerJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference">CloudSchedulerJobAppEngineHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference">CloudSchedulerJobHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference">CloudSchedulerJobPubsubTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference">CloudSchedulerJobRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference">CloudSchedulerJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTargetInput">appEngineHttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadlineInput">attemptDeadlineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pausedInput">pausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTargetInput">pubsubTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadline">attemptDeadline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appEngineHttpTarget`<sup>Required</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTarget"></a>

```typescript
public readonly appEngineHttpTarget: CloudSchedulerJobAppEngineHttpTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference">CloudSchedulerJobAppEngineHttpTargetOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTarget"></a>

```typescript
public readonly httpTarget: CloudSchedulerJobHttpTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference">CloudSchedulerJobHttpTargetOutputReference</a>

---

##### `pubsubTarget`<sup>Required</sup> <a name="pubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTarget"></a>

```typescript
public readonly pubsubTarget: CloudSchedulerJobPubsubTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference">CloudSchedulerJobPubsubTargetOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfig"></a>

```typescript
public readonly retryConfig: CloudSchedulerJobRetryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference">CloudSchedulerJobRetryConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeouts"></a>

```typescript
public readonly timeouts: CloudSchedulerJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference">CloudSchedulerJobTimeoutsOutputReference</a>

---

##### `appEngineHttpTargetInput`<sup>Optional</sup> <a name="appEngineHttpTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.appEngineHttpTargetInput"></a>

```typescript
public readonly appEngineHttpTargetInput: CloudSchedulerJobAppEngineHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---

##### `attemptDeadlineInput`<sup>Optional</sup> <a name="attemptDeadlineInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadlineInput"></a>

```typescript
public readonly attemptDeadlineInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.httpTargetInput"></a>

```typescript
public readonly httpTargetInput: CloudSchedulerJobHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pausedInput"></a>

```typescript
public readonly pausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubTargetInput`<sup>Optional</sup> <a name="pubsubTargetInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.pubsubTargetInput"></a>

```typescript
public readonly pubsubTargetInput: CloudSchedulerJobPubsubTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.retryConfigInput"></a>

```typescript
public readonly retryConfigInput: CloudSchedulerJobRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudSchedulerJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `attemptDeadline`<sup>Required</sup> <a name="attemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.attemptDeadline"></a>

```typescript
public readonly attemptDeadline: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudSchedulerJobAppEngineHttpTarget <a name="CloudSchedulerJobAppEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobAppEngineHttpTarget: cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.relativeUri">relativeUri</a></code> | <code>string</code> | The relative URI. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | app_engine_routing block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.body">body</a></code> | <code>string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.httpMethod">httpMethod</a></code> | <code>string</code> | Which HTTP method to use for the request. |

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.relativeUri"></a>

```typescript
public readonly relativeUri: string;
```

- *Type:* string

The relative URI.

The relative URL must begin with "/" and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and \# fragments.
If the relative URL is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#relative_uri CloudSchedulerJob#relative_uri}

---

##### `appEngineRouting`<sup>Optional</sup> <a name="appEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.appEngineRouting"></a>

```typescript
public readonly appEngineRouting: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

app_engine_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#app_engine_routing CloudSchedulerJob#app_engine_routing}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

HTTP request body.

A request body is allowed only if the HTTP method is POST or PUT.
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#body CloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#headers CloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}

---

### CloudSchedulerJobAppEngineHttpTargetAppEngineRouting <a name="CloudSchedulerJobAppEngineHttpTargetAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobAppEngineHttpTargetAppEngineRouting: cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance">instance</a></code> | <code>string</code> | App instance. By default, the job is sent to an instance which is available when the job is attempted. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service">service</a></code> | <code>string</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version">version</a></code> | <code>string</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

App instance. By default, the job is sent to an instance which is available when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#instance CloudSchedulerJob#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

App service.

By default, the job is sent to the service which is the default service when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#service CloudSchedulerJob#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

App version.

By default, the job is sent to the version which is the default version when the job is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#version CloudSchedulerJob#version}

---

### CloudSchedulerJobConfig <a name="CloudSchedulerJobConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobConfig: cloudSchedulerJob.CloudSchedulerJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.name">name</a></code> | <code>string</code> | The name of the job. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.appEngineHttpTarget">appEngineHttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | app_engine_http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.attemptDeadline">attemptDeadline</a></code> | <code>string</code> | The deadline for job attempts. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.description">description</a></code> | <code>string</code> | A human-readable description for the job. This string must not contain more than 500 characters. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#id CloudSchedulerJob#id}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.paused">paused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Sets the job to a paused state. Jobs default to being enabled when this property is not set. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#project CloudSchedulerJob#project}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.pubsubTarget">pubsubTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | pubsub_target block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.region">region</a></code> | <code>string</code> | Region where the scheduler job resides. If it is not provided, Terraform will use the provider default. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.schedule">schedule</a></code> | <code>string</code> | Describes the schedule on which the job will be executed. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Specifies the time zone to be used in interpreting schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#name CloudSchedulerJob#name}

---

##### `appEngineHttpTarget`<sup>Optional</sup> <a name="appEngineHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.appEngineHttpTarget"></a>

```typescript
public readonly appEngineHttpTarget: CloudSchedulerJobAppEngineHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

app_engine_http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#app_engine_http_target CloudSchedulerJob#app_engine_http_target}

---

##### `attemptDeadline`<sup>Optional</sup> <a name="attemptDeadline" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.attemptDeadline"></a>

```typescript
public readonly attemptDeadline: string;
```

- *Type:* string

The deadline for job attempts.

If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#attempt_deadline CloudSchedulerJob#attempt_deadline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description for the job. This string must not contain more than 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#description CloudSchedulerJob#description}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.httpTarget"></a>

```typescript
public readonly httpTarget: CloudSchedulerJobHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#http_target CloudSchedulerJob#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#id CloudSchedulerJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.paused"></a>

```typescript
public readonly paused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Sets the job to a paused state. Jobs default to being enabled when this property is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#paused CloudSchedulerJob#paused}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#project CloudSchedulerJob#project}.

---

##### `pubsubTarget`<sup>Optional</sup> <a name="pubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.pubsubTarget"></a>

```typescript
public readonly pubsubTarget: CloudSchedulerJobPubsubTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

pubsub_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#pubsub_target CloudSchedulerJob#pubsub_target}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#region CloudSchedulerJob#region}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.retryConfig"></a>

```typescript
public readonly retryConfig: CloudSchedulerJobRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#retry_config CloudSchedulerJob#retry_config}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Describes the schedule on which the job will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#schedule CloudSchedulerJob#schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudSchedulerJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#timeouts CloudSchedulerJob#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Specifies the time zone to be used in interpreting schedule.

The value of this field must be a time zone name from the tz database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#time_zone CloudSchedulerJob#time_zone}

---

### CloudSchedulerJobHttpTarget <a name="CloudSchedulerJobHttpTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobHttpTarget: cloudSchedulerJob.CloudSchedulerJobHttpTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.uri">uri</a></code> | <code>string</code> | The full URI path that the request will be sent to. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.body">body</a></code> | <code>string</code> | HTTP request body. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | This map contains the header field names and values. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.httpMethod">httpMethod</a></code> | <code>string</code> | Which HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | oidc_token block. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The full URI path that the request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#uri CloudSchedulerJob#uri}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

HTTP request body.

A request body is allowed only if the HTTP method is POST, PUT, or PATCH.
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#body CloudSchedulerJob#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

This map contains the header field names and values.

Repeated headers are not supported, but a header value can contain commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#headers CloudSchedulerJob#headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Which HTTP method to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oauthToken"></a>

```typescript
public readonly oauthToken: CloudSchedulerJobHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#oauth_token CloudSchedulerJob#oauth_token}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget.property.oidcToken"></a>

```typescript
public readonly oidcToken: CloudSchedulerJobHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#oidc_token CloudSchedulerJob#oidc_token}

---

### CloudSchedulerJobHttpTargetOauthToken <a name="CloudSchedulerJobHttpTargetOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobHttpTargetOauthToken: cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.scope">scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#scope CloudSchedulerJob#scope}

---

### CloudSchedulerJobHttpTargetOidcToken <a name="CloudSchedulerJobHttpTargetOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobHttpTargetOidcToken: cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.audience">audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#audience CloudSchedulerJob#audience}

---

### CloudSchedulerJobPubsubTarget <a name="CloudSchedulerJobPubsubTarget" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobPubsubTarget: cloudSchedulerJob.CloudSchedulerJobPubsubTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.topicName">topicName</a></code> | <code>string</code> | The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.data">data</a></code> | <code>string</code> | The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The full resource name for the Cloud Pub/Sub topic to which messages will be published when a job is delivered.

~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#topic_name CloudSchedulerJob#topic_name}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#attributes CloudSchedulerJob#attributes}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#data CloudSchedulerJob#data}

---

### CloudSchedulerJobRetryConfig <a name="CloudSchedulerJobRetryConfig" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobRetryConfig: cloudSchedulerJob.CloudSchedulerJobRetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>string</code> | The maximum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>string</code> | The time limit for retrying a failed job, measured from time when an execution was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.minBackoffDuration">minBackoffDuration</a></code> | <code>string</code> | The minimum amount of time to wait before retrying a job after it fails. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.retryCount">retryCount</a></code> | <code>number</code> | The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings. |

---

##### `maxBackoffDuration`<sup>Optional</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxBackoffDuration"></a>

```typescript
public readonly maxBackoffDuration: string;
```

- *Type:* string

The maximum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#max_backoff_duration CloudSchedulerJob#max_backoff_duration}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxDoublings"></a>

```typescript
public readonly maxDoublings: number;
```

- *Type:* number

The time between retries will double maxDoublings times.

A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#max_doublings CloudSchedulerJob#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.maxRetryDuration"></a>

```typescript
public readonly maxRetryDuration: string;
```

- *Type:* string

The time limit for retrying a failed job, measured from time when an execution was first attempted.

If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#max_retry_duration CloudSchedulerJob#max_retry_duration}

---

##### `minBackoffDuration`<sup>Optional</sup> <a name="minBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.minBackoffDuration"></a>

```typescript
public readonly minBackoffDuration: string;
```

- *Type:* string

The minimum amount of time to wait before retrying a job after it fails.

A duration in seconds with up to nine fractional digits, terminated by 's'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#min_backoff_duration CloudSchedulerJob#min_backoff_duration}

---

##### `retryCount`<sup>Optional</sup> <a name="retryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings.

Values greater than 5 and negative values are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#retry_count CloudSchedulerJob#retry_count}

---

### CloudSchedulerJobTimeouts <a name="CloudSchedulerJobTimeouts" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

const cloudSchedulerJobTimeouts: cloudSchedulerJob.CloudSchedulerJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#create CloudSchedulerJob#create}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#delete CloudSchedulerJob#delete}. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#update CloudSchedulerJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#create CloudSchedulerJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#delete CloudSchedulerJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/cloud_scheduler_job#update CloudSchedulerJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference <a name="CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetInstance"></a>

```typescript
public resetInstance(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---


### CloudSchedulerJobAppEngineHttpTargetOutputReference <a name="CloudSchedulerJobAppEngineHttpTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting">putAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting">resetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppEngineRouting` <a name="putAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting"></a>

```typescript
public putAppEngineRouting(value: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.putAppEngineRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `resetAppEngineRouting` <a name="resetAppEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetAppEngineRouting"></a>

```typescript
public resetAppEngineRouting(): void
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting">appEngineRouting</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput">appEngineRoutingInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput">relativeUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri">relativeUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appEngineRouting`<sup>Required</sup> <a name="appEngineRouting" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRouting"></a>

```typescript
public readonly appEngineRouting: CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference">CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference</a>

---

##### `appEngineRoutingInput`<sup>Optional</sup> <a name="appEngineRoutingInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.appEngineRoutingInput"></a>

```typescript
public readonly appEngineRoutingInput: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetAppEngineRouting">CloudSchedulerJobAppEngineHttpTargetAppEngineRouting</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `relativeUriInput`<sup>Optional</sup> <a name="relativeUriInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUriInput"></a>

```typescript
public readonly relativeUriInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `relativeUri`<sup>Required</sup> <a name="relativeUri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.relativeUri"></a>

```typescript
public readonly relativeUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobAppEngineHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobAppEngineHttpTarget">CloudSchedulerJobAppEngineHttpTarget</a>

---


### CloudSchedulerJobHttpTargetOauthTokenOutputReference <a name="CloudSchedulerJobHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---


### CloudSchedulerJobHttpTargetOidcTokenOutputReference <a name="CloudSchedulerJobHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---


### CloudSchedulerJobHttpTargetOutputReference <a name="CloudSchedulerJobHttpTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken"></a>

```typescript
public putOauthToken(value: CloudSchedulerJobHttpTargetOauthToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken"></a>

```typescript
public putOidcToken(value: CloudSchedulerJobHttpTargetOidcToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.resetOidcToken"></a>

```typescript
public resetOidcToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference">CloudSchedulerJobHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference">CloudSchedulerJobHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headersInput">headersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headers">headers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthToken"></a>

```typescript
public readonly oauthToken: CloudSchedulerJobHttpTargetOauthTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthTokenOutputReference">CloudSchedulerJobHttpTargetOauthTokenOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcToken"></a>

```typescript
public readonly oidcToken: CloudSchedulerJobHttpTargetOidcTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcTokenOutputReference">CloudSchedulerJobHttpTargetOidcTokenOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: CloudSchedulerJobHttpTargetOauthToken;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOauthToken">CloudSchedulerJobHttpTargetOauthToken</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.oidcTokenInput"></a>

```typescript
public readonly oidcTokenInput: CloudSchedulerJobHttpTargetOidcToken;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOidcToken">CloudSchedulerJobHttpTargetOidcToken</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.headers"></a>

```typescript
public readonly headers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobHttpTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobHttpTarget">CloudSchedulerJobHttpTarget</a>

---


### CloudSchedulerJobPubsubTargetOutputReference <a name="CloudSchedulerJobPubsubTargetOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetData` <a name="resetData" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput">topicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicNameInput"></a>

```typescript
public readonly topicNameInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobPubsubTarget;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobPubsubTarget">CloudSchedulerJobPubsubTarget</a>

---


### CloudSchedulerJobRetryConfigOutputReference <a name="CloudSchedulerJobRetryConfigOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration">resetMaxBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration">resetMinBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetRetryCount">resetRetryCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBackoffDuration` <a name="resetMaxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxBackoffDuration"></a>

```typescript
public resetMaxBackoffDuration(): void
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxDoublings"></a>

```typescript
public resetMaxDoublings(): void
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMaxRetryDuration"></a>

```typescript
public resetMaxRetryDuration(): void
```

##### `resetMinBackoffDuration` <a name="resetMinBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetMinBackoffDuration"></a>

```typescript
public resetMinBackoffDuration(): void
```

##### `resetRetryCount` <a name="resetRetryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.resetRetryCount"></a>

```typescript
public resetRetryCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput">maxBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput">minBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCountInput">retryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration">maxBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration">minBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCount">retryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBackoffDurationInput`<sup>Optional</sup> <a name="maxBackoffDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDurationInput"></a>

```typescript
public readonly maxBackoffDurationInput: string;
```

- *Type:* string

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublingsInput"></a>

```typescript
public readonly maxDoublingsInput: number;
```

- *Type:* number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```typescript
public readonly maxRetryDurationInput: string;
```

- *Type:* string

---

##### `minBackoffDurationInput`<sup>Optional</sup> <a name="minBackoffDurationInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDurationInput"></a>

```typescript
public readonly minBackoffDurationInput: string;
```

- *Type:* string

---

##### `retryCountInput`<sup>Optional</sup> <a name="retryCountInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCountInput"></a>

```typescript
public readonly retryCountInput: number;
```

- *Type:* number

---

##### `maxBackoffDuration`<sup>Required</sup> <a name="maxBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxBackoffDuration"></a>

```typescript
public readonly maxBackoffDuration: string;
```

- *Type:* string

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxDoublings"></a>

```typescript
public readonly maxDoublings: number;
```

- *Type:* number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.maxRetryDuration"></a>

```typescript
public readonly maxRetryDuration: string;
```

- *Type:* string

---

##### `minBackoffDuration`<sup>Required</sup> <a name="minBackoffDuration" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.minBackoffDuration"></a>

```typescript
public readonly minBackoffDuration: string;
```

- *Type:* string

---

##### `retryCount`<sup>Required</sup> <a name="retryCount" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.retryCount"></a>

```typescript
public readonly retryCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudSchedulerJobRetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobRetryConfig">CloudSchedulerJobRetryConfig</a>

---


### CloudSchedulerJobTimeoutsOutputReference <a name="CloudSchedulerJobTimeoutsOutputReference" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudSchedulerJob } from '@cdktf/provider-google'

new cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudSchedulerJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.cloudSchedulerJob.CloudSchedulerJobTimeouts">CloudSchedulerJobTimeouts</a>

---



