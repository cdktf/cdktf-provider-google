# `colabSchedule` Submodule <a name="`colabSchedule` Submodule" id="@cdktf/provider-google.colabSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabSchedule <a name="ColabSchedule" id="@cdktf/provider-google.colabSchedule.ColabSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule google_colab_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

new colabSchedule.ColabSchedule(scope: Construct, id: string, config: ColabScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig">ColabScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.colabSchedule.ColabSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig">ColabScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest">putCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetAllowQueueing">resetAllowQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetMaxRunCount">resetMaxRunCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.colabSchedule.ColabSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabSchedule.ColabSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.colabSchedule.ColabSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCreateNotebookExecutionJobRequest` <a name="putCreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest"></a>

```typescript
public putCreateNotebookExecutionJobRequest(value: ColabScheduleCreateNotebookExecutionJobRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putCreateNotebookExecutionJobRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts"></a>

```typescript
public putTimeouts(value: ColabScheduleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

---

##### `resetAllowQueueing` <a name="resetAllowQueueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetAllowQueueing"></a>

```typescript
public resetAllowQueueing(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxRunCount` <a name="resetMaxRunCount" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetMaxRunCount"></a>

```typescript
public resetMaxRunCount(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

colabSchedule.ColabSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

colabSchedule.ColabSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

colabSchedule.ColabSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.colabSchedule.ColabSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

colabSchedule.ColabSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ColabSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ColabSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ColabSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ColabSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequest">createNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference">ColabScheduleCreateNotebookExecutionJobRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference">ColabScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueingInput">allowQueueingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequestInput">createNotebookExecutionJobRequestInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCountInput">maxConcurrentRunCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCountInput">maxRunCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueing">allowQueueing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCount">maxConcurrentRunCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCount">maxRunCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createNotebookExecutionJobRequest`<sup>Required</sup> <a name="createNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequest"></a>

```typescript
public readonly createNotebookExecutionJobRequest: ColabScheduleCreateNotebookExecutionJobRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference">ColabScheduleCreateNotebookExecutionJobRequestOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeouts"></a>

```typescript
public readonly timeouts: ColabScheduleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference">ColabScheduleTimeoutsOutputReference</a>

---

##### `allowQueueingInput`<sup>Optional</sup> <a name="allowQueueingInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueingInput"></a>

```typescript
public readonly allowQueueingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createNotebookExecutionJobRequestInput`<sup>Optional</sup> <a name="createNotebookExecutionJobRequestInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.createNotebookExecutionJobRequestInput"></a>

```typescript
public readonly createNotebookExecutionJobRequestInput: ColabScheduleCreateNotebookExecutionJobRequest;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maxConcurrentRunCountInput`<sup>Optional</sup> <a name="maxConcurrentRunCountInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCountInput"></a>

```typescript
public readonly maxConcurrentRunCountInput: string;
```

- *Type:* string

---

##### `maxRunCountInput`<sup>Optional</sup> <a name="maxRunCountInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCountInput"></a>

```typescript
public readonly maxRunCountInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ColabScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

---

##### `allowQueueing`<sup>Required</sup> <a name="allowQueueing" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.allowQueueing"></a>

```typescript
public readonly allowQueueing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maxConcurrentRunCount`<sup>Required</sup> <a name="maxConcurrentRunCount" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxConcurrentRunCount"></a>

```typescript
public readonly maxConcurrentRunCount: string;
```

- *Type:* string

---

##### `maxRunCount`<sup>Required</sup> <a name="maxRunCount" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.maxRunCount"></a>

```typescript
public readonly maxRunCount: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.colabSchedule.ColabSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabScheduleConfig <a name="ColabScheduleConfig" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

const colabScheduleConfig: colabSchedule.ColabScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.createNotebookExecutionJobRequest">createNotebookExecutionJobRequest</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | create_notebook_execution_job_request block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.cron">cron</a></code> | <code>string</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.location">location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxConcurrentRunCount">maxConcurrentRunCount</a></code> | <code>string</code> | Maximum number of runs that can be started concurrently for this Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.allowQueueing">allowQueueing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether new scheduled runs can be queued when max_concurrent_runs limit is reached. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Desired state of the Colab Schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.endTime">endTime</a></code> | <code>string</code> | Timestamp after which no new runs can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#id ColabSchedule#id}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxRunCount">maxRunCount</a></code> | <code>string</code> | Maximum run count of the schedule. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#project ColabSchedule#project}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.startTime">startTime</a></code> | <code>string</code> | The timestamp after which the first run can be scheduled. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createNotebookExecutionJobRequest`<sup>Required</sup> <a name="createNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.createNotebookExecutionJobRequest"></a>

```typescript
public readonly createNotebookExecutionJobRequest: ColabScheduleCreateNotebookExecutionJobRequest;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

create_notebook_execution_job_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#create_notebook_execution_job_request ColabSchedule#create_notebook_execution_job_request}

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#cron ColabSchedule#cron}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#location ColabSchedule#location}

---

##### `maxConcurrentRunCount`<sup>Required</sup> <a name="maxConcurrentRunCount" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxConcurrentRunCount"></a>

```typescript
public readonly maxConcurrentRunCount: string;
```

- *Type:* string

Maximum number of runs that can be started concurrently for this Schedule.

This is the limit for starting the scheduled requests and not the execution of the notebook execution jobs created by the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#max_concurrent_run_count ColabSchedule#max_concurrent_run_count}

---

##### `allowQueueing`<sup>Optional</sup> <a name="allowQueueing" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.allowQueueing"></a>

```typescript
public readonly allowQueueing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether new scheduled runs can be queued when max_concurrent_runs limit is reached.

If set to true, new runs will be queued instead of skipped. Default to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#allow_queueing ColabSchedule#allow_queueing}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Desired state of the Colab Schedule.

Set this field to 'ACTIVE' to start/resume the schedule, and 'PAUSED' to pause the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#desired_state ColabSchedule#desired_state}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Timestamp after which no new runs can be scheduled.

If specified, the schedule will be completed when either end_time is reached or when scheduled_run_count >= max_run_count. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#end_time ColabSchedule#end_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#id ColabSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRunCount`<sup>Optional</sup> <a name="maxRunCount" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.maxRunCount"></a>

```typescript
public readonly maxRunCount: string;
```

- *Type:* string

Maximum run count of the schedule.

If specified, The schedule will be completed when either startedRunCount >= maxRunCount or when endTime is reached. If not specified, new runs will keep getting scheduled until this Schedule is paused or deleted. Already scheduled runs will be allowed to complete. Unset if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#max_run_count ColabSchedule#max_run_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#project ColabSchedule#project}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The timestamp after which the first run can be scheduled.

Defaults to the schedule creation time. Must be in the RFC 3339 (https://www.ietf.org/rfc/rfc3339.txt) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#start_time ColabSchedule#start_time}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.colabSchedule.ColabScheduleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ColabScheduleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#timeouts ColabSchedule#timeouts}

---

### ColabScheduleCreateNotebookExecutionJobRequest <a name="ColabScheduleCreateNotebookExecutionJobRequest" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

const colabScheduleCreateNotebookExecutionJobRequest: colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob">notebookExecutionJob</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | notebook_execution_job block. |

---

##### `notebookExecutionJob`<sup>Required</sup> <a name="notebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest.property.notebookExecutionJob"></a>

```typescript
public readonly notebookExecutionJob: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

notebook_execution_job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#notebook_execution_job ColabSchedule#notebook_execution_job}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

const colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob: colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri">gcsOutputUri</a></code> | <code>string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser">executionUser</a></code> | <code>string</code> | The user email to run the execution as. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The service account to run the execution as. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#display_name ColabSchedule#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsOutputUri"></a>

```typescript
public readonly gcsOutputUri: string;
```

- *Type:* string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#gcs_output_uri ColabSchedule#gcs_output_uri}

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.notebookRuntimeTemplateResourceName"></a>

```typescript
public readonly notebookRuntimeTemplateResourceName: string;
```

- *Type:* string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#notebook_runtime_template_resource_name ColabSchedule#notebook_runtime_template_resource_name}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.dataformRepositorySource"></a>

```typescript
public readonly dataformRepositorySource: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#dataform_repository_source ColabSchedule#dataform_repository_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

A duration in seconds with up to nine fractional digits, ending with "s". Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#execution_timeout ColabSchedule#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.executionUser"></a>

```typescript
public readonly executionUser: string;
```

- *Type:* string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#execution_user ColabSchedule#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.gcsNotebookSource"></a>

```typescript
public readonly gcsNotebookSource: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#gcs_notebook_source ColabSchedule#gcs_notebook_source}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#service_account ColabSchedule#service_account}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

const colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource: colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```typescript
public readonly dataformRepositoryResourceName: string;
```

- *Type:* string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#dataform_repository_resource_name ColabSchedule#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#commit_sha ColabSchedule#commit_sha}

---

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

const colabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource: colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri">uri</a></code> | <code>string</code> | The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation">generation</a></code> | <code>string</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Cloud Storage uri pointing to the ipynb file. Format: gs://bucket/notebook_file.ipynb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#uri ColabSchedule#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#generation ColabSchedule#generation}

---

### ColabScheduleTimeouts <a name="ColabScheduleTimeouts" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

const colabScheduleTimeouts: colabSchedule.ColabScheduleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#create ColabSchedule#create}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#delete ColabSchedule#delete}. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#update ColabSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#create ColabSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#delete ColabSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/colab_schedule#update ColabSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

new colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.resetCommitSha"></a>

```typescript
public resetCommitSha(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```typescript
public readonly commitShaInput: string;
```

- *Type:* string

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```typescript
public readonly dataformRepositoryResourceNameInput: string;
```

- *Type:* string

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```typescript
public readonly dataformRepositoryResourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

new colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.resetGeneration"></a>

```typescript
public resetGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generationInput"></a>

```typescript
public readonly generationInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

new colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource"></a>

```typescript
public putDataformRepositorySource(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource"></a>

```typescript
public putGcsNotebookSource(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetDataformRepositorySource"></a>

```typescript
public resetDataformRepositorySource(): void
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetExecutionUser"></a>

```typescript
public resetExecutionUser(): void
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetGcsNotebookSource"></a>

```typescript
public resetGcsNotebookSource(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput">executionUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser">executionUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri">gcsOutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySource"></a>

```typescript
public readonly dataformRepositorySource: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSource"></a>

```typescript
public readonly gcsNotebookSource: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSourceOutputReference</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.dataformRepositorySourceInput"></a>

```typescript
public readonly dataformRepositorySourceInput: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobDataformRepositorySource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: string;
```

- *Type:* string

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUserInput"></a>

```typescript
public readonly executionUserInput: string;
```

- *Type:* string

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsNotebookSourceInput"></a>

```typescript
public readonly gcsNotebookSourceInput: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUriInput"></a>

```typescript
public readonly gcsOutputUriInput: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceNameInput"></a>

```typescript
public readonly notebookRuntimeTemplateResourceNameInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.executionUser"></a>

```typescript
public readonly executionUser: string;
```

- *Type:* string

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.gcsOutputUri"></a>

```typescript
public readonly gcsOutputUri: string;
```

- *Type:* string

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.notebookRuntimeTemplateResourceName"></a>

```typescript
public readonly notebookRuntimeTemplateResourceName: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


### ColabScheduleCreateNotebookExecutionJobRequestOutputReference <a name="ColabScheduleCreateNotebookExecutionJobRequestOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

new colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob">putNotebookExecutionJob</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotebookExecutionJob` <a name="putNotebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob"></a>

```typescript
public putNotebookExecutionJob(value: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.putNotebookExecutionJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob">notebookExecutionJob</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput">notebookExecutionJobInput</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notebookExecutionJob`<sup>Required</sup> <a name="notebookExecutionJob" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJob"></a>

```typescript
public readonly notebookExecutionJob: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJobOutputReference</a>

---

##### `notebookExecutionJobInput`<sup>Optional</sup> <a name="notebookExecutionJobInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.notebookExecutionJobInput"></a>

```typescript
public readonly notebookExecutionJobInput: ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob">ColabScheduleCreateNotebookExecutionJobRequestNotebookExecutionJob</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ColabScheduleCreateNotebookExecutionJobRequest;
```

- *Type:* <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleCreateNotebookExecutionJobRequest">ColabScheduleCreateNotebookExecutionJobRequest</a>

---


### ColabScheduleTimeoutsOutputReference <a name="ColabScheduleTimeoutsOutputReference" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer"></a>

```typescript
import { colabSchedule } from '@cdktf/provider-google'

new colabSchedule.ColabScheduleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.colabSchedule.ColabScheduleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ColabScheduleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.colabSchedule.ColabScheduleTimeouts">ColabScheduleTimeouts</a>

---



